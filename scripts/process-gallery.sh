#!/bin/bash
# process-gallery.sh — Convert, resize, deduplicate workpics into public/gallery/
set -euo pipefail

SRC_DIR="$HOME/Downloads/workpics"
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
GALLERY_DIR="$PROJECT_DIR/public/gallery"
THUMB_DIR="$GALLERY_DIR/thumbs"
EXISTING_GALLERY="$PROJECT_DIR/src/assets/images"
TMP_DIR=$(mktemp -d)
HASH_FILE="$TMP_DIR/seen_hashes.txt"

FULL_WIDTH=1600
THUMB_WIDTH=600
QUALITY=80

echo "=== TreeShop Gallery Image Processor ==="
echo "Source: $SRC_DIR"
echo "Output: $GALLERY_DIR"
echo ""

# Create output dirs
mkdir -p "$GALLERY_DIR" "$THUMB_DIR" "$TMP_DIR/processed"
touch "$HASH_FILE"

# Step 1: Collect image files (skip videos)
echo "[1/5] Collecting image files..."
IMAGE_FILES=()
for f in "$SRC_DIR"/*; do
  ext="${f##*.}"
  ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
  case "$ext_lower" in
    jpg|jpeg|heic|png)
      IMAGE_FILES+=("$f")
      ;;
    mp4|mov|avi|mkv)
      echo "  Skipping video: $(basename "$f")"
      ;;
    *)
      echo "  Skipping non-image: $(basename "$f")"
      ;;
  esac
done

TOTAL=${#IMAGE_FILES[@]}
echo "  Found $TOTAL image files"
echo ""

# Step 2: Convert and resize to temp dir
echo "[2/5] Converting and resizing images..."
COUNT=0
for f in "${IMAGE_FILES[@]}"; do
  COUNT=$((COUNT + 1))
  base=$(basename "$f")
  ext="${base##*.}"
  ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
  name="${base%.*}"
  out_file="$TMP_DIR/processed/${name}.jpg"

  # Progress every 25 files
  if [ $((COUNT % 25)) -eq 0 ] || [ $COUNT -eq 1 ]; then
    echo "  Processing $COUNT/$TOTAL: $base"
  fi

  if [ "$ext_lower" = "heic" ]; then
    sips -s format jpeg "$f" --out "$out_file" -s formatOptions $QUALITY >/dev/null 2>&1
    sips --resampleWidth $FULL_WIDTH "$out_file" >/dev/null 2>&1 || true
  elif [ "$ext_lower" = "png" ]; then
    sips -s format jpeg "$f" --out "$out_file" -s formatOptions $QUALITY >/dev/null 2>&1
    sips --resampleWidth $FULL_WIDTH "$out_file" >/dev/null 2>&1 || true
  else
    cp "$f" "$out_file"
    sips -s format jpeg "$out_file" --out "$out_file" -s formatOptions $QUALITY >/dev/null 2>&1
    sips --resampleWidth $FULL_WIDTH "$out_file" >/dev/null 2>&1 || true
  fi
done
echo "  Converted $COUNT images"
echo ""

# Step 3: Deduplicate using file-based hash tracking (macOS bash 3.2 compatible)
echo "[3/5] Building deduplication hashes..."

# Hash existing src/assets/images/gallery-* files
for f in "$EXISTING_GALLERY"/gallery-*; do
  [ -f "$f" ] || continue
  hash=$(md5 -q "$f")
  echo "$hash" >> "$HASH_FILE"
  echo "  Existing: $(basename "$f") -> ${hash:0:12}..."
done

# Deduplicate processed images
DUPES=0
UNIQUE_LIST="$TMP_DIR/unique_files.txt"
touch "$UNIQUE_LIST"
for f in "$TMP_DIR/processed"/*.jpg; do
  [ -f "$f" ] || continue
  hash=$(md5 -q "$f")
  if grep -q "^${hash}$" "$HASH_FILE" 2>/dev/null; then
    DUPES=$((DUPES + 1))
    rm "$f"
  else
    echo "$hash" >> "$HASH_FILE"
    echo "$f" >> "$UNIQUE_LIST"
  fi
done
UNIQUE_COUNT=$(wc -l < "$UNIQUE_LIST" | tr -d ' ')
echo "  Removed $DUPES duplicates"
echo "  $UNIQUE_COUNT unique images remaining"
echo ""

# Step 4: Rename sequentially and move to gallery
echo "[4/5] Renaming and moving to gallery..."
IDX=1
sort "$UNIQUE_LIST" | while IFS= read -r f; do
  NUM=$(printf "%03d" $IDX)
  cp "$f" "$GALLERY_DIR/work-${NUM}.jpg"
  IDX=$((IDX + 1))
done

# Fix: the while loop runs in a subshell, so count from files
FINAL_COUNT=$(ls "$GALLERY_DIR"/work-*.jpg 2>/dev/null | wc -l | tr -d ' ')
echo "  Created $FINAL_COUNT gallery images"
echo ""

# Step 5: Generate thumbnails
echo "[5/5] Generating thumbnails..."
THUMB_COUNT=0
for f in "$GALLERY_DIR"/work-*.jpg; do
  base=$(basename "$f")
  cp "$f" "$THUMB_DIR/$base"
  sips --resampleWidth $THUMB_WIDTH "$THUMB_DIR/$base" >/dev/null 2>&1 || true
  THUMB_COUNT=$((THUMB_COUNT + 1))
  if [ $((THUMB_COUNT % 50)) -eq 0 ]; then
    echo "  Thumbnails: $THUMB_COUNT/$FINAL_COUNT"
  fi
done
echo "  Generated $THUMB_COUNT thumbnails"
echo ""

# Cleanup
rm -rf "$TMP_DIR"

echo "=== Done ==="
echo "Gallery: $GALLERY_DIR ($FINAL_COUNT full-size images)"
echo "Thumbs:  $THUMB_DIR ($THUMB_COUNT thumbnails)"
echo ""

# Print sizes
GALLERY_SIZE=$(du -sh "$GALLERY_DIR" | cut -f1)
echo "Total gallery size: $GALLERY_SIZE"
