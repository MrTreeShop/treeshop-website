export interface OutcomeService {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  detail: string;
  audience: string;
  idealFor: string[];
  faqs: { q: string; a: string }[];
  relatedGuides: string[];
  keywords: string;
  price: string;
}

export const outcomeServices: OutcomeService[] = [
  {
    name: "Timber Stand Improvement",
    slug: "timber-stand-improvement",
    tagline: "Restoring forest health through selective midstory removal and stand density management",
    description: "Selective mechanical treatment of timber stands to improve the productivity, form, and long-term value of crop trees — favoring the trees that matter. NRCS Practice Code 666.",
    detail: "75–80% of private southeastern forestland isn't reaching its productive potential. Timber stand improvement (TSI) uses precision mechanical treatment to remove undesirable stems, open canopy gaps, and promote high-value crop tree growth. TreeShop's CAT track loaders with forestry mulcher heads selectively remove competing hardwoods and midstory vegetation while preserving your crop trees. The mulched material stays on-site as ground cover, protecting soil and suppressing regrowth. TSI is a cornerstone NRCS conservation practice (Code 666) eligible for EQIP cost-share funding — meaning the federal government may cover up to 75% of the cost.",
    audience: "Timber landowners, forestry investors, hunting lease managers",
    idealFor: [
      "Pine plantations with competing hardwood encroachment",
      "Timber tracts needing thinning for crop tree release",
      "Hunting properties seeking improved stand structure",
      "Forest health improvement on neglected timberland",
      "EQIP-funded stand improvement projects (Code 666)"
    ],
    faqs: [
      { q: "What's the difference between timber stand improvement and forest stand improvement?", a: "They overlap significantly. Timber stand improvement specifically targets increasing the value and productivity of merchantable timber by removing competing stems. Forest stand improvement is broader — focused on overall forest health, which may include wildlife habitat goals beyond timber production." },
      { q: "How does mechanical TSI compare to chemical treatment?", a: "Mechanical TSI with forestry mulching provides immediate results — competing stems are eliminated in a single pass. Chemical treatment (hack-and-squirt) is cheaper per acre but takes 1-3 years for treated trees to die and doesn't address slash. Many foresters recommend mechanical treatment followed by prescribed fire for best results." },
      { q: "Is timber stand improvement eligible for EQIP cost-share?", a: "Yes. TSI falls under NRCS Practice Code 666 (Forest Stand Improvement) and is one of the most commonly funded forestry practices through EQIP. Standard cost-share is up to 75%, and historically underserved producers may qualify for up to 90%." },
      { q: "How many acres can you treat per day?", a: "Typically 1-3 acres per day depending on stem density, vegetation diameter, and terrain. Dense hardwood midstory with 6-8 inch stems takes longer than lighter brush and saplings." },
      { q: "Will TSI damage my crop trees?", a: "No. Our operators are trained to work selectively around marked crop trees. The forestry mulcher head allows precision removal of individual stems without disturbing adjacent trees. We coordinate with your forester if you have a marked stand." },
      { q: "When is the best time to do timber stand improvement?", a: "TSI can be performed year-round in Central Florida, but dormant season (late fall through early spring) is ideal. Competing hardwoods have stored most of their energy in their roots, and the lower water table makes ground conditions better for equipment." }
    ],
    relatedGuides: ["timber-stand-improvement-guide", "what-is-forestry-mulching"],
    keywords: "timber stand improvement, TSI, forest stand improvement, NRCS 666, crop tree release, midstory removal, selective thinning",
    price: "Per Project"
  },
  {
    name: "Prescribed Fire Preparation",
    slug: "prescribed-fire-preparation",
    tagline: "Creating firebreaks and reducing fuel loads so your land is ready to burn",
    description: "Many properties can't safely burn until dense midstory vegetation is mechanically removed. TreeShop prepares your land with firebreak installation, fuel load reduction, and mechanical site preparation — the essential first step before any prescribed burn.",
    detail: "Prescribed fire is the most cost-effective land management tool in the Southeast, but most properties need mechanical preparation before a burn can happen safely. Dense midstory vegetation creates dangerous fuel ladders that carry ground fires into the canopy, turning a controlled burn into a crown fire. TreeShop provides the essential pre-burn preparation: firebreak installation (NRCS Code 394), mechanical fuel load reduction, midstory removal, and site preparation that gives your burn manager clean lines and manageable fuel loads. Our CAT track loaders create wide, clean firebreaks and selectively thin midstory vegetation so fire stays on the ground where it belongs.",
    audience: "Landowners planning prescribed burns, hunting clubs, timber managers, wildlife management areas",
    idealFor: [
      "Properties that haven't been burned in 5+ years",
      "Firebreak installation and maintenance (NRCS Code 394)",
      "Fuel load reduction before first prescribed burn",
      "Midstory hardwood removal to prevent crown fire",
      "Pre-burn site preparation for wildlife habitat restoration"
    ],
    faqs: [
      { q: "Why can't I just burn without mechanical preparation?", a: "If your property hasn't been burned in several years, the accumulated fuel load — especially dense midstory vegetation — creates fire behavior that's dangerous and uncontrollable. Mechanical prep removes the heavy fuels so fire stays on the ground, moves predictably, and achieves your management objectives." },
      { q: "What width firebreaks do you install?", a: "Standard firebreaks are 12-20 feet wide, depending on fuel loading adjacent to the break. For properties with very heavy fuels or tall pines, we may recommend wider breaks. All breaks are mulched to bare mineral soil." },
      { q: "How soon after mulching can I burn?", a: "Generally 3-6 months. Fresh mulch needs time to settle and cure. Green mulch won't carry fire well and can smolder unpredictably. Your burn manager can advise on the optimal timing based on your specific conditions." },
      { q: "Does TreeShop perform the actual prescribed burn?", a: "No. TreeShop provides the mechanical preparation — firebreaks, fuel reduction, and midstory removal. You'll want a certified prescribed burn manager for the actual burn. We can refer you to experienced burn managers who work in your area." },
      { q: "Is prescribed fire preparation eligible for EQIP funding?", a: "Yes. Firebreak installation (Code 394), fuel break construction (Code 383), and brush management (Code 314) are all EQIP-eligible practices. Many landowners fund their entire pre-burn mechanical prep through cost-share programs." },
      { q: "How do I know if my property needs mechanical prep before burning?", a: "If you can't easily walk through your understory, if midstory vegetation is thick enough to block sunlight from the forest floor, or if your property hasn't been burned in 5+ years — you almost certainly need mechanical prep first." }
    ],
    relatedGuides: ["understanding-prescribed-fire-southeast", "firebreaks-vs-fuel-breaks"],
    keywords: "prescribed fire preparation, firebreak installation, fuel load reduction, pre-burn preparation, NRCS 394, prescribed burn prep",
    price: "Per Project"
  },
  {
    name: "Wildlife Habitat Restoration",
    slug: "wildlife-habitat-restoration",
    tagline: "Opening the canopy to create the diverse understory structure deer, turkey, and quail need",
    description: "Targeted midstory removal and canopy management that creates the mosaic of habitat types whitetail deer, wild turkey, and bobwhite quail depend on. Science-based habitat restoration using mechanical methods.",
    detail: "Southeastern wildlife evolved with open, fire-maintained forests. Without active management, mesophication — the gradual shading-out of the forest floor by encroaching hardwoods — eliminates the understory vegetation that deer, turkey, and quail depend on. TreeShop's mechanical habitat restoration opens the canopy through selective midstory removal, creating the diverse understory structure these species need. Quail require 30-50% ground cover with up to 70% bare ground for brooding. Turkey poults need open understories with insect-rich groundcover. Deer need browse zones below 4.5 feet and mast-producing hardwoods. The same mechanical treatment — thinning, mulching, and creating regeneration openings — benefits all three species. This work falls under NRCS Practice Codes 645 (Upland Wildlife Habitat Management) and 647 (Early Successional Habitat Development).",
    audience: "Deer hunters, turkey hunters, quail hunters, wildlife enthusiasts, hunting clubs",
    idealFor: [
      "Hunting properties with declining game populations",
      "Food plot site preparation and access trails",
      "Creating early successional habitat for quail and turkey",
      "Opening pine stands for deer browse and mast production",
      "EQIP-funded wildlife habitat projects (Codes 645, 647)"
    ],
    faqs: [
      { q: "How does forestry mulching improve deer hunting?", a: "Removing dense midstory vegetation allows sunlight to reach the forest floor, triggering native browse growth below 4.5 feet — the deer feeding zone. Open understory also improves sight lines for hunters and creates natural travel corridors deer prefer." },
      { q: "What's the best habitat management strategy for quail?", a: "Quail need a mosaic of habitat types: nesting cover (native bunchgrasses), brooding habitat (open areas with 30-50% ground cover and bare ground for chick movement), and escape cover (brushy areas). Mechanical mulching followed by prescribed fire creates this mosaic." },
      { q: "Can you prepare food plot sites?", a: "Yes. We clear and prepare food plot sites of any size, from small quarter-acre kill plots to larger destination plots. We handle tree and brush removal, stump grinding to below grade, and can rough-grade the site for planting." },
      { q: "How does wildlife habitat restoration qualify for EQIP?", a: "Work falls under NRCS Codes 645 (Upland Wildlife Habitat Management) and 647 (Early Successional Habitat Development). EQIP covers up to 75% of costs. Your local NRCS office can help you develop a wildlife habitat management plan that includes mechanical treatment." },
      { q: "Should I mulch or burn for wildlife habitat?", a: "Both. Mechanical mulching handles the heavy lifting — removing dense midstory that fire alone can't control. Once the property is mechanically prepared, prescribed fire maintains the open conditions at a fraction of the cost. Most wildlife biologists recommend both in an integrated management program." },
      { q: "How often should habitat management be repeated?", a: "Initial mechanical treatment should last 3-5 years before the midstory begins to close back in. With a regular prescribed fire program (every 2-3 years), you can maintain open conditions indefinitely with minimal follow-up mechanical work." }
    ],
    relatedGuides: ["managing-property-deer-turkey-quail", "what-is-mesophication"],
    keywords: "wildlife habitat restoration, deer habitat, turkey habitat, quail habitat, upland wildlife management, NRCS 645, early successional habitat",
    price: "Per Project"
  },
  {
    name: "Invasive Species Management",
    slug: "invasive-species-management",
    tagline: "Reclaiming your forest from privet, kudzu, and other invasive threats",
    description: "Mechanical removal of invasive species using forestry mulching as the first step in integrated management. Chinese privet, Japanese honeysuckle, Chinese tallow, cogongrass, and Brazilian pepper — eliminated in a single pass.",
    detail: "Chinese privet alone has invaded 3.2 million acres of southeastern forest — 14 times more than kudzu. Invasive species don't just look bad; they fundamentally alter forest structure, displace native vegetation, and destroy wildlife habitat. TreeShop's forestry mulching provides the mechanical removal component of integrated invasive species management. Our CAT track loaders with mulcher heads eliminate dense stands of privet, honeysuckle, tallow, and other woody invaders in a single pass, grinding everything to mulch on-site. In Florida, we commonly target Brazilian pepper, melaleuca, and Australian pine — all of which respond well to mechanical treatment. For most invasive species, mechanical removal is the essential first step, followed by targeted herbicide application on regrowth and eventually prescribed fire to maintain results.",
    audience: "Conservation-minded landowners, timber managers, environmental stewards, HOA/community managers",
    idealFor: [
      "Properties overrun with Chinese privet or tallow tree",
      "Brazilian pepper and melaleuca removal in Florida",
      "Cogongrass management through mulching and herbicide",
      "Restoring native understory after invasive removal",
      "Large-scale invasive treatment for timber and wildlife management"
    ],
    faqs: [
      { q: "Will mulching invasive species prevent them from coming back?", a: "Mulching alone won't prevent regrowth — most invasive species resprout aggressively from root systems. However, mulching eliminates the above-ground biomass and seed production immediately. Follow-up herbicide treatment on regrowth (typically 3-6 months after mulching) is far more effective than trying to spray through dense mature stands." },
      { q: "What invasive species can you mulch?", a: "Any woody or semi-woody invasive species up to about 8 inches in diameter: Chinese privet, Japanese honeysuckle, Chinese tallow (popcorn tree), Brazilian pepper, melaleuca, Australian pine, glossy buckthorn, and more. For herbaceous invaders like cogongrass, we mulch and then coordinate herbicide follow-up." },
      { q: "How is mechanical removal better than herbicide alone?", a: "Spraying dense, mature invasive stands requires enormous amounts of herbicide, kills non-target species, and still leaves dead standing stems. Mechanical removal eliminates everything in one pass, creates clean ground conditions, and makes follow-up herbicide treatment far more targeted and effective." },
      { q: "Is invasive species management eligible for cost-share?", a: "Yes. Brush management (NRCS Code 314) covers invasive woody species removal. Many states also have specific invasive species management programs. Your local NRCS or forestry commission office can advise on current funding availability." },
      { q: "How much does invasive species removal cost per acre?", a: "Cost depends on species density, stem diameter, and terrain. Light to moderate infestations typically align with our standard forestry mulching rate. Extremely dense stands (impenetrable privet thickets, for example) may take longer and cost more. We provide free on-site estimates." },
      { q: "Should I do invasive removal before or after a prescribed burn?", a: "Before. Dense invasive vegetation creates unpredictable fire behavior and won't burn cleanly. Mechanical removal first, then let the site settle for a season, then burn. The fire helps suppress regrowth and stimulates native seed germination." }
    ],
    relatedGuides: ["invasive-species-southeast-guide", "what-is-forestry-mulching"],
    keywords: "invasive species management, Chinese privet removal, Brazilian pepper removal, invasive plant management, mechanical invasive removal, NRCS 314",
    price: "Per Project"
  },
  {
    name: "Longleaf Pine Restoration",
    slug: "longleaf-pine-restoration",
    tagline: "Site preparation and midstory removal for America's most important forest",
    description: "Mechanical site preparation for longleaf pine planting and restoration. Longleaf once covered 90+ million acres across the Southeast — roughly 5.2 million remain. TreeShop provides the essential mechanical work that makes longleaf restoration possible.",
    detail: "Longleaf pine once covered over 90 million acres across the Southeast. Today, roughly 5.2 million acres remain — but 870,000 acres have been restored on private lands since 2010, and the pace is accelerating. Longleaf restoration is a top NRCS priority with dedicated funding through the Longleaf Pine Initiative. TreeShop provides the essential mechanical site preparation that makes longleaf planting successful: removing competing hardwoods and midstory vegetation, mulching existing understory to prepare the seedbed, and creating the open, sunlit conditions that longleaf seedlings require. Longleaf is a keystone species — its open, fire-maintained ecosystem supports more than 900 plant species and is critical habitat for gopher tortoise, red-cockaded woodpecker, and dozens of other at-risk species. This work falls under NRCS Practice Codes 490 (Tree/Shrub Site Preparation) and 612 (Tree/Shrub Establishment).",
    audience: "Conservation landowners, longleaf enthusiasts, NRCS/EQIP applicants, wildlife-focused timber managers",
    idealFor: [
      "Site preparation before longleaf pine planting",
      "Removing competing off-site hardwoods from pine stands",
      "NRCS Longleaf Pine Initiative projects",
      "Creating open conditions for native groundcover return",
      "EQIP-funded restoration projects (Codes 490, 612)"
    ],
    faqs: [
      { q: "Why is site preparation necessary for longleaf restoration?", a: "Longleaf seedlings spend 2-7 years in a 'grass stage' where they look like a clump of grass and grow almost entirely below ground. During this critical phase, they cannot compete with shade from hardwoods or existing vegetation. Mechanical site prep removes competition and lets full sunlight reach the seedlings." },
      { q: "What EQIP practices apply to longleaf restoration?", a: "Several: Code 490 (Tree/Shrub Site Preparation) for mechanical clearing, Code 612 (Tree/Shrub Establishment) for the actual planting, Code 666 (Forest Stand Improvement) for managing established stands, and Code 338 (Prescribed Burning) for maintenance burns. The Longleaf Pine Initiative often provides additional funding beyond standard EQIP rates." },
      { q: "How much does longleaf site preparation cost?", a: "Costs vary based on existing vegetation density and site conditions. Standard forestry mulching rates apply. Many landowners cover 75-90% of costs through EQIP, making out-of-pocket expenses very manageable. We provide free estimates and can help you understand the cost-share math." },
      { q: "When should site prep be done before planting?", a: "Ideally 6-12 months before planting season (November-February in Florida). This allows mulch to settle, gives time for any herbicide follow-up on regrowth, and lets the site stabilize before seedlings go in the ground." },
      { q: "Can you work on existing longleaf stands that need improvement?", a: "Yes. Established longleaf stands often need midstory hardwood removal to maintain the open conditions longleaf requires. We selectively mulch competing stems while carefully working around existing longleaf. This work qualifies under NRCS Code 666." },
      { q: "Do I need a forester to plan my longleaf restoration?", a: "Strongly recommended. A consulting forester can assess your site, develop a planting plan, and help you navigate the EQIP application process. Many Florida foresters specialize in longleaf and can maximize your cost-share funding. We work alongside foresters regularly." }
    ],
    relatedGuides: ["longleaf-pine-ecosystem", "eqip-cost-share-landowner-guide"],
    keywords: "longleaf pine restoration, longleaf site preparation, longleaf pine initiative, NRCS 490, NRCS 612, longleaf planting prep",
    price: "Per Project"
  },
  {
    name: "Fuel Load Reduction",
    slug: "fuel-load-reduction",
    tagline: "Protecting your property and your neighbors by managing hazardous fuels",
    description: "Mechanical removal of hazardous fuel loads — dense midstory vegetation, deadwood, and brush that create dangerous wildfire conditions. Reduces fire risk, creates defensible space, and prepares your property for safe prescribed burning.",
    detail: "Dense midstory vegetation creates dangerous fuel ladders that carry ground fires into the canopy, turning manageable prescribed burns into destructive crown fires — and turning wildfire embers into full-blown property threats. Mechanical fuel reduction is often required before any burning program can begin safely. TreeShop's fuel load reduction service uses CAT track loaders with forestry mulcher heads to mechanically remove hazardous fuels: dense brush, small-diameter trees, deadwood, and accumulated undergrowth. The mulched material stays on the ground as a thin layer that decomposes quickly, rather than piling up as additional fuel. This work creates defensible space around structures, prepares properties for prescribed fire programs, and significantly reduces wildfire risk for you and your neighbors. EQIP-eligible under Practice Codes 383 (Fuel Break) and 314 (Brush Management).",
    audience: "Rural homeowners, WUI (wildland-urban interface) property owners, timber managers, community associations",
    idealFor: [
      "Creating defensible space around homes and structures",
      "Reducing wildfire risk on rural and WUI properties",
      "Pre-burn fuel reduction for prescribed fire programs",
      "Fuel break and fuel load management (NRCS Code 383)",
      "Community-wide wildfire mitigation projects"
    ],
    faqs: [
      { q: "What's the difference between fuel reduction and land clearing?", a: "Fuel reduction is selective — targeting hazardous vegetation (ladder fuels, dense brush, deadwood) while preserving desirable trees and forest structure. Land clearing removes everything. Fuel reduction maintains a functioning forest that's simply safer and healthier." },
      { q: "How does fuel reduction protect against wildfire?", a: "By eliminating ladder fuels — the dense midstory vegetation that carries fire from the ground into the tree canopy. Without these fuels, fires stay on the ground where they're manageable. A ground fire in a well-managed forest typically won't damage large trees or threaten structures." },
      { q: "How wide should a fuel break be?", a: "It depends on adjacent fuel loading and terrain. Minimum effective fuel breaks are typically 30-60 feet wide around structures. For large-scale fuel breaks between management units, 20-30 feet is common. We assess your specific conditions and recommend appropriate widths." },
      { q: "Is fuel reduction eligible for cost-share programs?", a: "Yes. NRCS Code 383 (Fuel Break) and Code 314 (Brush Management) are EQIP-eligible. Some states and counties also have wildfire mitigation programs that fund fuel reduction work, especially in wildland-urban interface areas." },
      { q: "How often does fuel reduction need to be repeated?", a: "The initial mechanical treatment typically lasts 3-5 years before regrowth closes back in. If you follow up with prescribed fire every 2-3 years, you can maintain low fuel conditions indefinitely with minimal additional mechanical work." },
      { q: "Can you do fuel reduction in a neighborhood or community?", a: "Yes. We regularly work on rural subdivision common areas, community buffers, and multi-parcel fuel reduction projects. Our equipment can access most residential and semi-rural properties. HOAs and community associations often coordinate group projects." }
    ],
    relatedGuides: ["firebreaks-vs-fuel-breaks", "understanding-prescribed-fire-southeast"],
    keywords: "fuel load reduction, wildfire risk mitigation, fuel break, defensible space, hazardous fuels management, NRCS 383, WUI fire protection",
    price: "Day Rate"
  },
  {
    name: "Land Reclamation",
    slug: "land-reclamation",
    tagline: "Transforming overgrown acreage into productive, accessible land",
    description: "Clearing as the first step in a long-term management plan. Trail systems, food plot preparation, fence line clearing, right-of-way maintenance, and property boundary establishment — reclaiming your land for productive use.",
    detail: "Land reclamation takes overgrown, inaccessible property and transforms it into productive, managed land. This isn't a one-time clearing job — it's the first step in establishing ongoing management of your property. TreeShop's CAT track loaders with forestry mulcher heads reclaim overgrown acreage by grinding vegetation in place, leaving clean, walkable ground with a natural mulch cover. Common reclamation projects include establishing trail systems and access roads through wooded property, preparing food plot sites for deer and turkey, clearing fence lines and property boundaries that have grown over, maintaining utility and pipeline right-of-ways, and opening up acreage that's been neglected for years. Whether you're developing a hunting property, establishing a homesite, or simply taking control of land you own but can't access, reclamation is where it starts.",
    audience: "New landowners, hunting property developers, timber investors, rural homeowners, access planners",
    idealFor: [
      "Establishing trail systems and access roads",
      "Food plot site clearing and preparation",
      "Fence line and property boundary clearing",
      "Right-of-way and utility easement maintenance",
      "Reclaiming overgrown or neglected acreage"
    ],
    faqs: [
      { q: "What's the difference between land reclamation and land clearing?", a: "Land clearing typically means removing all vegetation for construction or development. Land reclamation is more selective — reclaiming specific areas, corridors, or access points while preserving the overall forest character. Think of it as restoring usability, not creating a blank slate." },
      { q: "Can you create trails through wooded property?", a: "Yes. Our CAT track loaders can cut trails 8-20 feet wide through dense vegetation. We mulch everything in the path down to ground level, creating a clean, driveable surface. Trails can follow existing contours, connect food plots, or provide access to remote parts of your property." },
      { q: "How do you handle fence line clearing?", a: "We mulch vegetation on both sides of the fence line, typically clearing 6-10 feet on each side. For new fence installation, we can clear and grade the corridor to specifications. Existing fences are carefully worked around — our operators have extensive experience working alongside fence lines." },
      { q: "What size food plots can you prepare?", a: "Any size, from small quarter-acre kill plots tucked into natural openings to multi-acre destination food plots. We handle all vegetation removal, stump grinding, and can rough-grade the site for planting. We recommend working with a wildlife biologist on plot placement for maximum hunting value." },
      { q: "How do you access remote or landlocked properties?", a: "Our CAT track loaders are self-transporting on their trailers and can access most properties via existing driveways or field edges. For truly remote sites, we can cut access trails as the first phase of the project. Low ground pressure tracks allow operation on soft ground without creating ruts." },
      { q: "Can reclamation work be done in phases?", a: "Absolutely. Many clients start with access and boundary clearing, then expand to food plots, trails, and larger management areas over multiple seasons. Phased work also spreads costs and allows you to see results before committing to additional work." }
    ],
    relatedGuides: ["what-is-forestry-mulching", "land-management-process"],
    keywords: "land reclamation, trail system clearing, food plot preparation, fence line clearing, property access development, overgrown land clearing",
    price: "Per Project"
  },
  {
    name: "EQIP Conservation Practices",
    slug: "eqip-conservation-practices",
    tagline: "Professional land management services that qualify for up to 75% federal cost-share reimbursement",
    description: "TreeShop's forestry mulching and land management services qualify under multiple NRCS conservation practice codes — meaning EQIP may reimburse 75-90% of your project cost. We help landowners understand which practices apply and deliver the work to NRCS standards.",
    detail: "The Environmental Quality Incentives Program (EQIP) is a federal cost-share program administered by NRCS that reimburses landowners for implementing approved conservation practices on private land. TreeShop's services qualify under multiple NRCS practice codes: 314 (Brush Management), 338 (Prescribed Burning preparation), 383 (Fuel Break), 394 (Firebreak), 490 (Tree/Shrub Site Preparation), 612 (Tree/Shrub Establishment support), 645 (Upland Wildlife Habitat Management), 647 (Early Successional Habitat Development), and 666 (Forest Stand Improvement). Standard EQIP cost-share covers up to 75% of eligible costs. Historically underserved producers — including beginning farmers, veterans, and socially disadvantaged producers — can receive up to 90%. This means a $10,000 forestry mulching project could cost you as little as $1,000-$2,500 out of pocket. We don't handle the EQIP application, but we've completed dozens of EQIP-funded projects and can help you understand which practice codes apply to your land management goals.",
    audience: "Cost-conscious landowners, beginning farmers, veterans, conservation-minded landowners, timber owners",
    idealFor: [
      "Landowners seeking federal cost-share for land management",
      "EQIP-approved projects needing qualified mechanical treatment",
      "Brush management and invasive species removal (Code 314)",
      "Firebreak and fuel break installation (Codes 383, 394)",
      "Wildlife habitat and forest stand improvement (Codes 645, 666)"
    ],
    faqs: [
      { q: "How does EQIP cost-share work?", a: "You apply to NRCS with a conservation plan, get approved, then hire a contractor (like TreeShop) to complete the approved practices. After the work is done and inspected by NRCS, you're reimbursed for the approved amount — typically 75% of the practice cost. You pay the contractor upfront and receive the reimbursement from NRCS." },
      { q: "What NRCS practice codes do TreeShop services fall under?", a: "Multiple codes: 314 (Brush Management), 383 (Fuel Break), 394 (Firebreak), 490 (Tree/Shrub Site Preparation), 612 (Tree/Shrub Establishment support), 645 (Upland Wildlife Habitat Management), 647 (Early Successional Habitat Development), and 666 (Forest Stand Improvement). The specific codes depend on your project goals." },
      { q: "Can I get more than 75% cost-share?", a: "Yes. Historically underserved producers — including beginning farmers and ranchers (less than 10 years), veterans, and socially disadvantaged producers — can qualify for up to 90% cost-share. Your local NRCS office determines eligibility." },
      { q: "Does TreeShop handle the EQIP application?", a: "No. EQIP applications are submitted through your local NRCS office. However, we've completed dozens of EQIP-funded projects and can help you understand which practice codes apply to your goals. We recommend starting with your local NRCS office or a consulting forester to develop your conservation plan." },
      { q: "How long does the EQIP process take?", a: "Applications are typically accepted on a rolling basis with annual ranking periods. From application to contract signing usually takes 3-6 months. Once you have an approved contract, you typically have 1-3 years to complete the practices. Plan ahead — applying well before you need the work done gives you the best chance of funding." },
      { q: "What if my EQIP application isn't approved?", a: "EQIP is competitive — not all applications are funded. If your application isn't approved, you can reapply in the next ranking period. Your local NRCS office can help you strengthen your application. Many landowners choose to proceed with the work at full cost rather than wait, especially when the management need is urgent." }
    ],
    relatedGuides: ["eqip-cost-share-landowner-guide", "understanding-nrcs-practice-standards"],
    keywords: "EQIP cost-share, NRCS conservation practices, federal land management funding, EQIP forestry, conservation practice codes, cost-share programs",
    price: "Cost-Share Eligible"
  }
];
