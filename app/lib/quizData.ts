// ============================================================
// Quiz Data — Questions and options for Quiz A and Quiz B
// ============================================================

export type QuizOption = {
  label: string;
  description: string;
  emoji: string;
  score: number;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: QuizOption[];
};

// ─────────────────────────────────────────────────────────────
// QUIZ A — New Website (6 questions)
// ─────────────────────────────────────────────────────────────

export const QUIZ_A_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question: "Where is your business right now?",
    options: [
      {
        label: "Just starting out",
        description: "New venture or early-stage business",
        emoji: "🌱",
        score: 1,
      },
      {
        label: "Up and running",
        description: "But no proper website yet",
        emoji: "⚙️",
        score: 2,
      },
      {
        label: "Established and ready to grow",
        description: "Solid foundation, time to scale",
        emoji: "📈",
        score: 2,
      },
      {
        label: "Scaling or restructuring",
        description: "Major growth phase or business pivot",
        emoji: "🚀",
        score: 3,
      },
    ],
  },
  {
    id: "q2",
    question: "What do you most need your website to do?",
    options: [
      {
        label: "Just exist and be findable",
        description: "Basic online presence so people can find me",
        emoji: "🔍",
        score: 1,
      },
      {
        label: "Build trust and credibility",
        description: "Look professional, show what we do",
        emoji: "🤝",
        score: 2,
      },
      {
        label: "Generate leads and enquiries",
        description: "Turn visitors into clients",
        emoji: "💬",
        score: 3,
      },
      {
        label: "Sell products or services online",
        description: "Full e-commerce or booking system",
        emoji: "🛒",
        score: 4,
      },
    ],
  },
  {
    id: "q3",
    question: "How developed is your brand right now?",
    options: [
      {
        label: "I don't really have a brand yet",
        description: "No logo, no colours, starting from scratch",
        emoji: "⬜",
        score: 1,
      },
      {
        label: "I have the basics",
        description: "Logo and rough colours sorted",
        emoji: "🎨",
        score: 2,
      },
      {
        label: "I have a clear brand and style guide",
        description: "Ready to apply consistently",
        emoji: "✅",
        score: 3,
      },
      {
        label: "Strong, established brand identity",
        description: "Well-defined, just needs a great website",
        emoji: "⭐",
        score: 3,
      },
    ],
  },
  {
    id: "q4",
    question: "After the site launches, how involved do you want to be?",
    options: [
      {
        label: "Hands-off",
        description: "I'll contact you when I need changes",
        emoji: "🙌",
        score: 1,
      },
      {
        label: "Occasionally update things myself",
        description: "Text or image swaps now and then",
        emoji: "✏️",
        score: 2,
      },
      {
        label: "Regularly manage content, products, or bookings",
        description: "Need full control over my own site",
        emoji: "🗂️",
        score: 3,
      },
    ],
  },
  {
    id: "q5",
    question: "Do you have a timeline in mind?",
    options: [
      {
        label: "Urgent — within 2 weeks",
        description: "I need something live now",
        emoji: "⚡",
        score: 1,
      },
      {
        label: "Within the next 4–6 weeks",
        description: "Soon but not rushing",
        emoji: "📅",
        score: 2,
      },
      {
        label: "Within the next 2–3 months",
        description: "Flexible but have a goal in mind",
        emoji: "🗓️",
        score: 2,
      },
      {
        label: "No fixed timeline",
        description: "I'm in the research phase",
        emoji: "🔭",
        score: 2,
      },
    ],
  },
  {
    id: "q6",
    question: "What's your budget range?",
    options: [
      {
        label: "Under $600",
        description: "Entry-level investment",
        emoji: "💰",
        score: 1,
      },
      {
        label: "$600 – $1,800",
        description: "Mid-range investment",
        emoji: "💳",
        score: 2,
      },
      {
        label: "$1,800 – $4,000",
        description: "Serious investment for good results",
        emoji: "📊",
        score: 3,
      },
      {
        label: "$4,000+",
        description: "Ready to invest in the right outcome",
        emoji: "🏆",
        score: 4,
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// QUIZ B — Redesign / Existing Website (5 questions)
// ─────────────────────────────────────────────────────────────

export const QUIZ_B_QUESTIONS: QuizQuestion[] = [
  {
    id: "q1",
    question: "What's the main reason you want a new site?",
    options: [
      {
        label: "It looks outdated or unprofessional",
        description: "Needs a modern refresh",
        emoji: "🕰️",
        score: 1,
      },
      {
        label: "It's not doing anything for my business",
        description: "Not generating leads or results",
        emoji: "📉",
        score: 2,
      },
      {
        label: "I need to add features it doesn't have",
        description: "Missing functionality I need",
        emoji: "🔧",
        score: 2,
      },
      {
        label: "My business has changed significantly",
        description: "The site no longer reflects who we are",
        emoji: "🔄",
        score: 3,
      },
    ],
  },
  {
    id: "q2",
    question: "How happy are you with your current site's structure?",
    options: [
      {
        label: "Fine — just the design needs work",
        description: "Keep the structure, update the look",
        emoji: "🎨",
        score: 1,
      },
      {
        label: "Some things work, but I want to reorganise",
        description: "Partial restructure needed",
        emoji: "📐",
        score: 2,
      },
      {
        label: "Start from scratch — rethink everything",
        description: "The whole thing needs rebuilding",
        emoji: "🏗️",
        score: 3,
      },
    ],
  },
  {
    id: "q3",
    question: "What's most broken or frustrating about your current site?",
    options: [
      {
        label: "Looks terrible on mobile",
        description: "Not responsive or modern",
        emoji: "📱",
        score: 1,
      },
      {
        label: "It's slow or clunky",
        description: "Poor performance or user experience",
        emoji: "🐌",
        score: 1,
      },
      {
        label: "Nobody can find it on Google",
        description: "SEO is basically non-existent",
        emoji: "🔍",
        score: 2,
      },
      {
        label: "Visitors don't know what to do",
        description: "No clear calls to action or conversion path",
        emoji: "❓",
        score: 2,
      },
      {
        label: "I can't update it myself",
        description: "Locked out of my own content",
        emoji: "🔒",
        score: 3,
      },
    ],
  },
  {
    id: "q4",
    question: "After launch, do you want to update the site yourself?",
    options: [
      {
        label: "No — I'll contact you when I need changes",
        description: "Happy to outsource all updates",
        emoji: "🙌",
        score: 1,
      },
      {
        label: "Yes — simple edits like text and images",
        description: "Basic editing access would be useful",
        emoji: "✏️",
        score: 2,
      },
      {
        label: "Yes — full control over content, products, or bookings",
        description: "Need a proper CMS",
        emoji: "🗂️",
        score: 3,
      },
    ],
  },
  {
    id: "q5",
    question: "What's your budget for the redesign?",
    options: [
      {
        label: "Under $1,000",
        description: "Entry-level redesign investment",
        emoji: "💰",
        score: 1,
      },
      {
        label: "$1,000 – $2,000",
        description: "Mid-range redesign budget",
        emoji: "💳",
        score: 2,
      },
      {
        label: "$2,000 – $4,000",
        description: "Solid investment in a proper rebuild",
        emoji: "📊",
        score: 3,
      },
      {
        label: "$4,000+",
        description: "Ready to invest for the right outcome",
        emoji: "🏆",
        score: 4,
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────
// Signal Text Maps — used in result screens
// ─────────────────────────────────────────────────────────────

// Quiz A: maps Q1–Q4 option index (0-based) → signal text
export const QUIZ_A_SIGNALS: Record<string, string[]> = {
  q1: [
    "Just starting out — early-stage business",
    "Up and running, but no website yet",
    "Established and ready to grow",
    "Scaling or restructuring",
  ],
  q2: [
    "Goal: be findable online",
    "Goal: build trust and credibility",
    "Goal: generate leads and enquiries",
    "Goal: sell products or services online",
  ],
  q3: [
    "Starting from scratch on brand",
    "Has the basics — logo and colours",
    "Clear brand and style guide ready",
    "Strong, established brand identity",
  ],
  q4: [
    "Prefers hands-off maintenance",
    "Wants basic editing ability",
    "Needs full CMS access",
  ],
};

// Quiz B: maps Q1–Q4 option index (0-based) → signal text
export const QUIZ_B_SIGNALS: Record<string, string[]> = {
  q1: [
    "Design refresh needed",
    "Site not generating results",
    "Site not generating results",
    "Business has significantly changed",
  ],
  q2: [
    "Structure can stay, design needs updating",
    "Partial restructure needed",
    "Full rebuild from scratch",
  ],
  q3: [
    "Mobile or performance issues to fix",
    "Mobile or performance issues to fix",
    "SEO or conversion problems to address",
    "SEO or conversion problems to address",
    "Needs content management capability",
  ],
  q4: [
    "Prefers hands-off maintenance",
    "Wants basic editing ability",
    "Needs full CMS access",
  ],
};
