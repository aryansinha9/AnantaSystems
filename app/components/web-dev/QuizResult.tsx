"use client";

import { motion } from "framer-motion";
import { ArrowRight, RotateCcw, Phone, TrendingUp } from "lucide-react";
import { QuizAResult, QuizBResult } from "@/app/lib/scoringEngine";
import { PACKAGES, REDESIGN_TIERS } from "@/app/lib/packageData";

type Props = {
  quizType: "new" | "redesign";
  quizAResult: QuizAResult | null;
  quizBResult: QuizBResult | null;
  onRetake: () => void;
  onInquiry: (packageId: string, priceLabel: string) => void;
  onBooking: (tierId: string, priceLabel: string, discoveryCall: boolean) => void;
};

export default function QuizResult({
  quizType,
  quizAResult,
  quizBResult,
  onRetake,
  onInquiry,
  onBooking,
}: Props) {
  // ── Quiz A result ──────────────────────────────────────────
  if (quizType === "new" && quizAResult) {
    const pkg = PACKAGES.find((p) => p.id === quizAResult.packageId)!;
    const alsoConsiderPkg = quizAResult.alsoConsider
      ? PACKAGES.find((p) => p.id === quizAResult.alsoConsider!)
      : null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {/* Package name & price */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">
            Recommended for you
          </p>
          <h3 className="text-2xl font-bold text-white mb-1">{pkg.name} package</h3>
          <p className="text-[15px] text-white/50">
            {pkg.priceLabel} one-time · + {pkg.monthlyRetainer} hosting &amp; support
          </p>
        </div>

        {/* Why text */}
        <div className="bg-white/[0.04] border border-white/10 p-4">
          <p className="text-sm text-white/70 leading-[1.7]">{quizAResult.whyText}</p>
        </div>

        {/* Signal bullets */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">
            Why this fits your situation
          </p>
          <ul className="space-y-2">
            {quizAResult.signals.map((signal, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-sm text-white/60">{signal}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Override notes */}
        {quizAResult.notes.length > 0 && (
          <div className="bg-amber-500/10 border border-amber-500/30 p-4">
            {quizAResult.notes.map((note, i) => (
              <p key={i} className="text-sm text-amber-400">
                {note}
              </p>
            ))}
          </div>
        )}

        {/* Also consider card */}
        {alsoConsiderPkg && (
          <div className="border border-white/15 p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp size={14} className="text-accent" />
                  <p className="text-xs font-bold uppercase tracking-widest text-white/50">
                    Also consider
                  </p>
                </div>
                <p className="text-sm font-semibold text-white">
                  {alsoConsiderPkg.name} package
                </p>
                <p className="text-xs text-white/40 mt-1">
                  Your budget could stretch to {alsoConsiderPkg.name} — worth a conversation.
                </p>
              </div>
              <p className="text-sm font-bold text-white shrink-0">
                {alsoConsiderPkg.priceLabel}
              </p>
            </div>
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col gap-3 pt-2">
          <button
            onClick={() => onInquiry(pkg.id, pkg.priceLabel)}
            className="w-full flex items-center justify-center gap-2 bg-accent text-white py-3.5 text-sm font-bold hover:bg-accent/90 transition-colors"
          >
            Get started with {pkg.name}
            <ArrowRight size={16} />
          </button>
          <button
            onClick={onRetake}
            className="w-full flex items-center justify-center gap-2 border border-white/15 text-white/60 py-3 text-sm font-medium hover:border-white/30 hover:text-white transition-colors"
          >
            <RotateCcw size={14} />
            Retake quiz
          </button>
        </div>
      </motion.div>
    );
  }

  // ── Quiz B result ──────────────────────────────────────────
  if (quizType === "redesign" && quizBResult) {
    const tier = REDESIGN_TIERS.find((t) => t.id === quizBResult.tierId)!;
    const { discoveryCallTriggered } = quizBResult;

    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {/* Tier name & price */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">
            Recommended for you
          </p>
          <h3 className="text-2xl font-bold text-white mb-1 capitalize">
            {tier.name}
          </h3>
          <p className="text-[15px] text-white/50">{tier.priceLabel}</p>
        </div>

        {/* Why text */}
        <div className="bg-white/[0.04] border border-white/10 p-4">
          <p className="text-sm text-white/70 leading-[1.7]">{quizBResult.whyText}</p>
        </div>

        {/* Signal bullets */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">
            Why this fits your situation
          </p>
          <ul className="space-y-2">
            {quizBResult.signals.map((signal, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <span className="text-sm text-white/60">{signal}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Notes */}
        {quizBResult.notes.length > 0 && (
          <div className="bg-amber-500/10 border border-amber-500/30 p-4">
            {quizBResult.notes.map((note, i) => (
              <p key={i} className="text-sm text-amber-400">
                {note}
              </p>
            ))}
          </div>
        )}

        {/* Discovery call card */}
        {discoveryCallTriggered && (
          <div className="bg-amber-500/5 border border-amber-500/30 p-4">
            <div className="flex items-start gap-3">
              <Phone size={16} className="text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-300 mb-1">
                  We&apos;d recommend a free discovery call first
                </p>
                <p className="text-xs text-white/50 leading-relaxed">
                  Based on your needs, a 30-minute discovery call will let us review
                  your current site, understand the full scope, and make sure we scope
                  the project correctly before you commit.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CTAs */}
        <div className="flex flex-col gap-3 pt-2">
          <button
            onClick={() =>
              discoveryCallTriggered
                ? onBooking(tier.id, tier.priceLabel, true)
                : onBooking(tier.id, tier.priceLabel, false)
            }
            className="w-full flex items-center justify-center gap-2 bg-accent text-white py-3.5 text-sm font-bold hover:bg-accent/90 transition-colors"
          >
            {discoveryCallTriggered
              ? "Book a free discovery call"
              : "Enquire about this package"}
            <ArrowRight size={16} />
          </button>
          <button
            onClick={onRetake}
            className="w-full flex items-center justify-center gap-2 border border-white/15 text-white/60 py-3 text-sm font-medium hover:border-white/30 hover:text-white transition-colors"
          >
            <RotateCcw size={14} />
            Retake quiz
          </button>
        </div>
      </motion.div>
    );
  }

  return null;
}
