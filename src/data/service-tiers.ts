export interface ServiceTier {
  tier: number;
  name: string;
  slug: string;
  tagline: string;
  audience: string;
  acreageRange: string;
  ctaLabel: string;
  serviceSlugs: string[];
}

export const serviceTiers: ServiceTier[] = [
  {
    tier: 1,
    name: "Land Clearing & Site Work",
    slug: "land-clearing-site-work",
    tagline: "Clear it. Grade it. Build on it.",
    audience: "Homeowners, builders, developers",
    acreageRange: "Under 10 acres",
    ctaLabel: "Get a Quote",
    serviceSlugs: [
      "forestry-mulching",
      "land-clearing",
      "brush-mowing",
      "stump-grinding",
      "grading-excavation",
      "debris-disposal",
    ],
  },
  {
    tier: 2,
    name: "Conservation & Restoration",
    slug: "conservation-restoration",
    tagline: "Outcome-based land management for long-term results.",
    audience: "Timber owners, hunters, conservation landowners",
    acreageRange: "10-500 acres",
    ctaLabel: "Schedule a Land Assessment",
    serviceSlugs: [
      "timber-stand-improvement",
      "prescribed-fire-preparation",
      "wildlife-habitat-restoration",
      "invasive-species-management",
      "longleaf-pine-restoration",
      "fuel-load-reduction",
      "land-reclamation",
      "eqip-conservation-practices",
    ],
  },
  {
    tier: 3,
    name: "Annual Partnerships",
    slug: "annual-partnerships",
    tagline: "Year-round management for serious landowners.",
    audience: "100+ acre landowners, hunting clubs, timber investors",
    acreageRange: "100+ acres",
    ctaLabel: "Schedule a Land Assessment",
    serviceSlugs: [
      "land-maintenance",
      "fuel-reduction",
      "forest-stand-improvement",
    ],
  },
  {
    tier: 4,
    name: "Enterprise & Institutional",
    slug: "enterprise-services",
    tagline: "Large-scale operations for agencies and organizations.",
    audience: "Agencies, utilities, timber companies, municipalities",
    acreageRange: "500+ acres",
    ctaLabel: "Request a Proposal",
    serviceSlugs: [],
  },
];
