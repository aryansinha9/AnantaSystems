// ============================================================
// Scoring Engine — Pure functions for Quiz A and Quiz B
// All scoring logic is here, isolated from UI.
// ============================================================

import { QUIZ_A_SIGNALS, QUIZ_B_SIGNALS } from "./quizData";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

export type QuizAResult = {
  packageId: "starter" | "growth" | "pro" | "custom";
  whyText: string;
  signals: string[];
  alsoConsider: ("starter" | "growth" | "pro" | "custom") | null;
  notes: string[]; // Urgency/budget flags
  needsScore: number;
};

export type QuizBResult = {
  tierId: "growth-redesign" | "pro-redesign" | "custom-redesign";
  whyText: string;
  signals: string[];
  discoveryCallTriggered: boolean;
  notes: string[];
  needsScore: number;
};

type PackageId = "starter" | "growth" | "pro" | "custom";
type RedesignTierId = "growth-redesign" | "pro-redesign" | "custom-redesign";

// Package tier index for budget comparison
const TIER_INDEX: Record<PackageId, number> = {
  starter: 1,
  growth: 2,
  pro: 3,
  custom: 4,
};

const NEXT_TIER: Record<PackageId, PackageId | null> = {
  starter: "growth",
  growth: "pro",
  pro: "custom",
  custom: null,
};

const PREV_TIER: Record<PackageId, PackageId | null> = {
  starter: null,
  growth: "starter",
  pro: "growth",
  custom: "pro",
};

// Why text by package (also in packageData, but copied here for engine use)
const WHY_TEXT: Record<PackageId, string> = {
  starter:
    "Based on your stage, goals, and timeline, the Starter package gives you what you need right now without overcomplicating things. A clean, fast, mobile-first site that gets you found and makes you look credible.",
  growth:
    "You're past the 'just get online' stage and need a site that reflects your brand and builds client confidence. The Growth package gives you a semi-custom design, more content room, and the tools to grow with it.",
  pro: "Your needs go beyond what templates can offer. You need specific functionality, ongoing content control, and a site that works as a business tool — not just a brochure. The Pro package is built for exactly this.",
  custom:
    "Your project has requirements that don't fit a standard package. A fully custom build is the right call — let's have a conversation, scope it properly, and make sure we build the right thing.",
};

const REDESIGN_WHY_TEXT: Record<RedesignTierId, string> = {
  "growth-redesign":
    "Your site needs a design refresh more than a structural overhaul. We'll modernise the look, apply your brand properly, and fix what's frustrating you — without tearing down what already works.",
  "pro-redesign":
    "You need more than a facelift. There are structural changes, new functionality, or content management needs that require a proper rebuild. The Pro package covers all of this with room to expand.",
  "custom-redesign":
    "Your redesign is essentially a fresh start — new structure, new features, and a site that properly reflects where your business is now. This needs a scoped custom engagement so we can do it properly.",
};

// ─────────────────────────────────────────────────────────────
// Quiz A Scoring
// answers: array of 6 option scores (Q1–Q6)
// ─────────────────────────────────────────────────────────────

export function calculateQuizAResult(answers: number[]): QuizAResult {
  const [q1, q2, q3, q4, q5, q6] = answers;
  const notes: string[] = [];

  // Base score: Q1–Q4 only
  const needsScore = q1 + q2 + q3 + q4;

  // Base recommendation
  let recommendedPackage: PackageId =
    needsScore <= 5
      ? "starter"
      : needsScore <= 8
        ? "growth"
        : needsScore <= 11
          ? "pro"
          : "custom";

  // Override 1: Urgency — Q5 score of 1 means "within 2 weeks"
  if (q5 === 1 && recommendedPackage !== "starter") {
    recommendedPackage = "starter";
    notes.push(
      "Given your timeline, Starter is the most realistic option. We can discuss upgrading after launch."
    );
  }

  // Override 2: Budget mismatch — Q6 score more than 1 below tier index
  const tierIndex = TIER_INDEX[recommendedPackage];
  if (q6 < tierIndex - 1) {
    const downgraded = PREV_TIER[recommendedPackage];
    if (downgraded) {
      recommendedPackage = downgraded;
      notes.push(
        "Your budget is slightly below our typical range — we'd recommend discussing this on a call."
      );
    }
  }

  // Override 3: Budget upsell — Q6 score more than 1 above tier index
  let alsoConsider: PackageId | null = null;
  const finalTierIndex = TIER_INDEX[recommendedPackage];
  if (q6 > finalTierIndex + 1) {
    alsoConsider = NEXT_TIER[recommendedPackage];
  }

  // Generate signal bullets from Q1–Q4 (0-based option index → score-1 maps to index)
  // answers are scores (1-4), need to find the option index that corresponds
  // We store the selected index separately — but here answers ARE scores.
  // We'll derive signals by mapping scores using QUIZ_A_SIGNALS[question][optionIndex]
  // Since we receive scores, we need the index. For signal generation we use
  // the answer index approach. The UI will pass answer indices (0-based).
  // IMPORTANT: This function receives INDICES (0-based), not raw scores.
  // The UI converts selected option index to BOTH score and index.

  const signals = [
    QUIZ_A_SIGNALS.q1[q1] ?? "",
    QUIZ_A_SIGNALS.q2[q2] ?? "",
    QUIZ_A_SIGNALS.q3[q3] ?? "",
    QUIZ_A_SIGNALS.q4[q4] ?? "",
  ].filter(Boolean);

  // Add urgency note to signals if applicable
  if (q5 === 0) {
    // index 0 = urgent option
    signals.push("Needs something live within 2 weeks");
  }

  return {
    packageId: recommendedPackage,
    whyText: WHY_TEXT[recommendedPackage],
    signals,
    alsoConsider,
    notes,
    needsScore,
  };
}

// ─────────────────────────────────────────────────────────────
// Quiz B Scoring
// answers: array of 5 option INDICES (0-based, matching option arrays)
// ─────────────────────────────────────────────────────────────

// Map Quiz B option indices to scores
const QUIZ_B_SCORES: Record<string, number[]> = {
  q1: [1, 2, 2, 3],
  q2: [1, 2, 3],
  q3: [1, 1, 2, 2, 3],
  q4: [1, 2, 3],
  q5: [1, 2, 3, 4],
};

export function calculateQuizBResult(answers: number[]): QuizBResult {
  const [q1Idx, q2Idx, q3Idx, q4Idx, q5Idx] = answers;
  const notes: string[] = [];

  // Get actual scores from option index
  const q1Score = QUIZ_B_SCORES.q1[q1Idx];
  const q2Score = QUIZ_B_SCORES.q2[q2Idx];
  const q3Score = QUIZ_B_SCORES.q3[q3Idx];
  const q4Score = QUIZ_B_SCORES.q4[q4Idx];
  const q5Score = QUIZ_B_SCORES.q5[q5Idx];

  // Base score: Q1–Q4 only
  const needsScore = q1Score + q2Score + q3Score + q4Score;

  // Base recommendation
  let tierId: RedesignTierId;
  if (needsScore <= 5 || q5Score === 1) {
    tierId = "growth-redesign";
  } else if (needsScore <= 8) {
    tierId = "pro-redesign";
  } else {
    tierId = "custom-redesign";
  }

  // Budget note for low-budget users with high complexity needs
  if (q5Score === 1 && needsScore > 5) {
    notes.push(
      "Your budget is below our typical range for this scope — we'd suggest discussing what's achievable on a call."
    );
  }

  // Discovery call trigger
  const discoveryCallTriggered =
    q2Score === 3 || q1Score === 3 || needsScore >= 9;

  // Generate signal bullets from Q1–Q4 (using option indices)
  const signals = [
    QUIZ_B_SIGNALS.q1[q1Idx] ?? "",
    QUIZ_B_SIGNALS.q2[q2Idx] ?? "",
    QUIZ_B_SIGNALS.q3[q3Idx] ?? "",
    QUIZ_B_SIGNALS.q4[q4Idx] ?? "",
  ].filter(Boolean);

  return {
    tierId,
    whyText: REDESIGN_WHY_TEXT[tierId],
    signals,
    discoveryCallTriggered,
    notes,
    needsScore,
  };
}

// ─────────────────────────────────────────────────────────────
// Quiz A — Convert option index to score
// The UI passes indices (0-based). We need scores for the engine.
// ─────────────────────────────────────────────────────────────

const QUIZ_A_SCORES: Record<string, number[]> = {
  q1: [1, 2, 2, 3],
  q2: [1, 2, 3, 4],
  q3: [1, 2, 3, 3],
  q4: [1, 2, 3],
  q5: [1, 2, 2, 2],
  q6: [1, 2, 3, 4],
};

// The calculateQuizAResult function receives indices for signals
// but needs scores for the recommendation. We'll use a combined approach:
// Pass indices, derive scores internally.
export function calculateQuizAResultFromIndices(indices: number[]): QuizAResult {
  const [i1, i2, i3, i4, i5, i6] = indices;
  const notes: string[] = [];

  const q1s = QUIZ_A_SCORES.q1[i1];
  const q2s = QUIZ_A_SCORES.q2[i2];
  const q3s = QUIZ_A_SCORES.q3[i3];
  const q4s = QUIZ_A_SCORES.q4[i4];
  const q5s = QUIZ_A_SCORES.q5[i5];
  const q6s = QUIZ_A_SCORES.q6[i6];

  const needsScore = q1s + q2s + q3s + q4s;

  let recommendedPackage: PackageId =
    needsScore <= 5
      ? "starter"
      : needsScore <= 8
        ? "growth"
        : needsScore <= 11
          ? "pro"
          : "custom";

  // Urgency override (Q5 index 0 = urgent)
  if (q5s === 1 && recommendedPackage !== "starter") {
    recommendedPackage = "starter";
    notes.push(
      "Given your timeline, Starter is the most realistic option. We can discuss upgrading after launch."
    );
  }

  // Budget mismatch override
  const tierIndex = TIER_INDEX[recommendedPackage];
  if (q6s < tierIndex - 1) {
    const downgraded = PREV_TIER[recommendedPackage];
    if (downgraded) {
      recommendedPackage = downgraded;
      notes.push(
        "Your budget is slightly below our typical range — we'd recommend discussing this on a call."
      );
    }
  }

  // Budget upsell
  let alsoConsider: PackageId | null = null;
  const finalTierIndex = TIER_INDEX[recommendedPackage];
  if (q6s > finalTierIndex + 1) {
    alsoConsider = NEXT_TIER[recommendedPackage];
  }

  // Signals use option INDICES
  const signals = [
    QUIZ_A_SIGNALS.q1[i1] ?? "",
    QUIZ_A_SIGNALS.q2[i2] ?? "",
    QUIZ_A_SIGNALS.q3[i3] ?? "",
    QUIZ_A_SIGNALS.q4[i4] ?? "",
  ].filter(Boolean);

  if (i5 === 0) {
    signals.push("Needs something live within 2 weeks");
  }

  return {
    packageId: recommendedPackage,
    whyText: WHY_TEXT[recommendedPackage],
    signals,
    alsoConsider,
    notes,
    needsScore,
  };
}
