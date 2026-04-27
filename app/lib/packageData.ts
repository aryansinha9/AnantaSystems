// ============================================================
// Package Data — Web Development Services
// All prices in AUD. Keep this file as the single source of
// truth for package definitions, retainer info, and CTAs.
// ============================================================

export type PackageFeature = {
  attribute: string;
  detail: string;
};

export type PackageData = {
  id: "starter" | "growth" | "pro" | "custom";
  name: string;
  priceLabel: string;
  priceNumeric: number | null; // null for custom
  monthlyRetainer: string;
  delivery: string;
  ctaLabel: string;
  subjectLine: string;
  badge?: string;
  whyText: string;
  targetClient: string;
  features: PackageFeature[];
};

export const PACKAGES: PackageData[] = [
  {
    id: "starter",
    name: "Starter",
    priceLabel: "$499",
    priceNumeric: 499,
    monthlyRetainer: "$20/month",
    delivery: "~5 business days",
    ctaLabel: "Get started",
    subjectLine: "Website enquiry — Starter package",
    whyText:
      "Based on your stage, goals, and timeline, the Starter package gives you what you need right now without overcomplicating things. A clean, fast, mobile-first site that gets you found and makes you look credible.",
    targetClient:
      "Early-stage businesses or sole traders who need a basic, credible online presence.",
    features: [
      { attribute: "Pages", detail: "Up to 6" },
      { attribute: "Design", detail: "Pre-built template selection" },
      { attribute: "Mobile", detail: "Mobile-first, responsive" },
      { attribute: "SEO", detail: "Basic meta tags, page titles, descriptions" },
      { attribute: "Contact", detail: "Integrated contact form" },
      { attribute: "CMS", detail: "No — contact developer for changes" },
      { attribute: "Revisions", detail: "Up to 3 rounds" },
    ],
  },
  {
    id: "growth",
    name: "Growth",
    priceLabel: "$1,299",
    priceNumeric: 1299,
    monthlyRetainer: "$50/month",
    delivery: "~2–3 weeks",
    ctaLabel: "Get started",
    subjectLine: "Website enquiry — Growth package",
    badge: "Most popular",
    whyText:
      "You're past the 'just get online' stage and need a site that reflects your brand and builds client confidence. The Growth package gives you a semi-custom design, more content room, and the tools to grow with it.",
    targetClient:
      "Established businesses who want a site that properly reflects their brand.",
    features: [
      { attribute: "Pages", detail: "Up to 12" },
      { attribute: "Design", detail: "Semi-custom (brand colours, fonts, layout choices)" },
      { attribute: "Mobile", detail: "Mobile-first, responsive" },
      { attribute: "SEO", detail: "Meta tags, Google Analytics setup, sitemap" },
      { attribute: "Contact", detail: "Integrated contact form" },
      { attribute: "Extras", detail: "Blog or portfolio section" },
      { attribute: "CMS", detail: "No — contact developer for changes" },
      { attribute: "Revisions", detail: "Up to 6 rounds" },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    priceLabel: "$2,999",
    priceNumeric: 2999,
    monthlyRetainer: "Custom — agreed during scoping",
    delivery: "~4–6 weeks",
    ctaLabel: "Get started",
    subjectLine: "Website enquiry — Pro package",
    whyText:
      "Your needs go beyond what templates can offer. You need specific functionality, ongoing content control, and a site that works as a business tool — not just a brochure. The Pro package is built for exactly this.",
    targetClient:
      "Businesses who need specific functionality, want to manage their own content, and are ready to invest in a site that works as a proper business tool.",
    features: [
      { attribute: "Pages", detail: "Unlimited — as required by project scope" },
      { attribute: "Design", detail: "Fully custom design" },
      { attribute: "Mobile", detail: "Mobile-first, responsive" },
      { attribute: "SEO", detail: "Advanced SEO, structured data, Analytics" },
      { attribute: "Extras", detail: "E-commerce OR booking system OR membership area" },
      { attribute: "CMS", detail: "Yes — manage content, products, or bookings" },
      { attribute: "Revisions", detail: "Up to 20 rounds" },
      { attribute: "Support", detail: "30 days post-launch support included" },
    ],
  },
  {
    id: "custom",
    name: "Custom",
    priceLabel: "From $5,000",
    priceNumeric: null,
    monthlyRetainer: "Custom — agreed during project scoping",
    delivery: "Agreed during scoping",
    ctaLabel: "Enquire",
    subjectLine: "Website enquiry — Custom package",
    whyText:
      "Your project has requirements that don't fit a standard package. A fully custom build is the right call — let's have a conversation, scope it properly, and make sure we build the right thing.",
    targetClient:
      "Businesses with complex, bespoke requirements. Fully scoped per project.",
    features: [
      { attribute: "Pages", detail: "Unlimited" },
      { attribute: "Design", detail: "Fully bespoke from scratch" },
      { attribute: "Features", detail: "Complex integrations, custom logic" },
      { attribute: "CMS", detail: "Yes — tailored to project requirements" },
      { attribute: "Revisions", detail: "Agreed during scoping" },
      { attribute: "Support", detail: "Retainer options available" },
    ],
  },
];

// Redesign tier definitions (same packages, redesign context)
export type RedesignTier = {
  id: "growth-redesign" | "pro-redesign" | "custom-redesign";
  name: string;
  basePackage: "growth" | "pro" | "custom";
  priceLabel: string;
  whyText: string;
};

export const REDESIGN_TIERS: RedesignTier[] = [
  {
    id: "growth-redesign",
    name: "Growth redesign",
    basePackage: "growth",
    priceLabel: "From $1,299",
    whyText:
      "Your site needs a design refresh more than a structural overhaul. We'll modernise the look, apply your brand properly, and fix what's frustrating you — without tearing down what already works.",
  },
  {
    id: "pro-redesign",
    name: "Pro redesign",
    basePackage: "pro",
    priceLabel: "From $2,999",
    whyText:
      "You need more than a facelift. There are structural changes, new functionality, or content management needs that require a proper rebuild. The Pro package covers all of this with room to expand.",
  },
  {
    id: "custom-redesign",
    name: "Custom redesign",
    basePackage: "custom",
    priceLabel: "Scoped per project",
    whyText:
      "Your redesign is essentially a fresh start — new structure, new features, and a site that properly reflects where your business is now. This needs a scoped custom engagement so we can do it properly.",
  },
];

// What the monthly retainer covers
export const RETAINER_INCLUDES = [
  "Website hosting",
  "Database and backend maintenance",
  "Ongoing technical support",
  "Bug fixes",
  "Small content tweaks (copy edits, image swaps, minor layout adjustments)",
];

export const RETAINER_EXCLUDES = [
  "New pages or sections",
  "Additional features or functionality",
  "Third-party integrations",
  "Design overhauls or rebranding",
  "Any work that materially changes the structure or scope of the original build",
];

// Lookup helpers
export function getPackageById(id: string): PackageData | undefined {
  return PACKAGES.find((p) => p.id === id);
}

export function getRedesignTierById(id: string): RedesignTier | undefined {
  return REDESIGN_TIERS.find((t) => t.id === id);
}
