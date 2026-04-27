"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  ArrowRight,
  Check,
  X,
  HelpCircle,
  Sparkles,
  Globe,
  RefreshCw,
} from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CTASection from "@/app/components/CTASection";
import QuizModal from "@/app/components/web-dev/QuizModal";
import InquiryForm from "@/app/components/web-dev/InquiryForm";
import BookingForm from "@/app/components/web-dev/BookingForm";
import PackageCard from "@/app/components/web-dev/PackageCard";
import { PACKAGES, RETAINER_INCLUDES, RETAINER_EXCLUDES } from "@/app/lib/packageData";

// ─────────────────────────────────────────────────────────────
// Types for page-level state
// ─────────────────────────────────────────────────────────────

type ActiveModal =
  | { kind: "quiz"; quizType: "new" | "redesign" }
  | {
      kind: "inquiry";
      packageId: string;
      priceLabel: string;
    }
  | {
      kind: "booking";
      tierId: string;
      priceLabel: string;
      discoveryCall: boolean;
    }
  | null;

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────

export default function WebDevelopmentPage() {
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);

  const closeModal = useCallback(() => setActiveModal(null), []);

  // Called from QuizResult → "Get started with [Package]"
  const handleInquiry = useCallback((packageId: string, priceLabel: string) => {
    setActiveModal({ kind: "inquiry", packageId, priceLabel });
  }, []);

  // Called from QuizResult → "Enquire / Book discovery call"
  const handleBooking = useCallback(
    (tierId: string, priceLabel: string, discoveryCall: boolean) => {
      setActiveModal({ kind: "booking", tierId, priceLabel, discoveryCall });
    },
    []
  );

  // Called from PackageCard → direct CTA (skips quiz)
  const handlePackageCTA = useCallback((packageId: string, priceLabel: string) => {
    setActiveModal({ kind: "inquiry", packageId, priceLabel });
  }, []);

  return (
    <>
      <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">
        <Navbar />

        {/* ── 1. Hero ────────────────────────────────────────── */}
        <section className="pt-32 pb-16 px-4 md:px-6 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="w-6 h-6 text-accent" />
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Website Development
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 leading-[1.05] tracking-tight">
              Websites that{" "}
              <span className="text-accent">work</span> for your business.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl font-light leading-relaxed mb-10">
              From clean landing pages to fully custom digital platforms — we
              build sites that get you found, build trust, and convert visitors
              into clients.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  setActiveModal({ kind: "quiz", quizType: "new" })
                }
                id="hero-new-website-cta"
                className="inline-flex items-center gap-2 h-14 px-8 bg-accent text-white font-bold text-base hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
              >
                <Globe size={18} />
                I need a new website
              </button>
              <button
                onClick={() =>
                  setActiveModal({ kind: "quiz", quizType: "redesign" })
                }
                id="hero-redesign-cta"
                className="inline-flex items-center gap-2 h-14 px-8 border-2 border-white/20 text-white font-bold text-base hover:border-white/50 transition-all"
              >
                <RefreshCw size={18} />
                I already have a website
              </button>
            </div>
          </motion.div>
        </section>

        {/* ── 2. Two-path entry ──────────────────────────────── */}
        <section id="get-started" className="py-20 border-t border-white/10">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Where are you starting from?
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto">
                Answer a few quick questions and we&apos;ll point you to the
                right package.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* New website */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                onClick={() => setActiveModal({ kind: "quiz", quizType: "new" })}
                id="path-new-website"
                className="group text-left p-8 bg-[#111] border border-white/10 hover:border-accent hover:bg-accent/5 transition-all duration-300"
              >
                <div className="mb-5">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent mb-4">
                    <Globe size={22} />
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    I need a new website
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Starting from scratch — no existing site. We&apos;ll help
                    you figure out what you need.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-accent">
                  Start the quiz
                  <ArrowRight
                    size={16}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </motion.button>

              {/* Redesign */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                onClick={() =>
                  setActiveModal({ kind: "quiz", quizType: "redesign" })
                }
                id="path-redesign"
                className="group text-left p-8 bg-[#111] border border-white/10 hover:border-accent hover:bg-accent/5 transition-all duration-300"
              >
                <div className="mb-5">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent mb-4">
                    <RefreshCw size={22} />
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    I already have a website
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Want to redesign, improve, or rebuild your existing site.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-accent">
                  Start the quiz
                  <ArrowRight
                    size={16}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </motion.button>
            </div>

            <p className="text-center text-sm text-white/30 mt-6 max-w-xl mx-auto">
              Not sure? Start with whichever sounds closest — the quiz will help
              figure out the rest.
            </p>
          </div>
        </section>

        {/* ── 3. Packages ────────────────────────────────────── */}
        <section id="packages" className="py-24 border-t border-white/10 bg-[#050505]">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
                Our <span className="text-accent">packages</span>
              </h2>
              <div className="w-16 h-1 bg-accent mb-6" />
              <p className="text-white/50 text-lg max-w-2xl">
                Every package ends in an enquiry, not a purchase — we scope the
                project together first.
              </p>
            </motion.div>

            {/* Package grid */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
              {PACKAGES.map((pkg, i) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  onGetStarted={handlePackageCTA}
                  index={i}
                />
              ))}
            </div>

            {/* Not sure CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
              <HelpCircle size={18} className="text-white/30" />
              <p className="text-sm text-white/40">
                Not sure which package is right for you?{" "}
                <button
                  onClick={() =>
                    setActiveModal({ kind: "quiz", quizType: "new" })
                  }
                  className="text-accent underline underline-offset-4 hover:text-white transition-colors font-medium"
                >
                  Take the quiz
                </button>{" "}
                and we&apos;ll point you in the right direction.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4. Monthly Retainer ────────────────────────────── */}
        <section id="retainer" className="py-24 border-t border-white/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles size={18} className="text-accent" />
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">
                    Monthly retainer
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                  Keep it running, without the headache.
                </h2>
                <p className="text-white/50 leading-relaxed mb-6">
                  Every package includes an optional monthly retainer — hosting,
                  maintenance, and technical support so your site stays fast,
                  secure, and up to date.
                </p>
                {/* Retainer pricing table */}
                <div className="space-y-3">
                  {[
                    { name: "Starter", price: "$20/month" },
                    { name: "Growth", price: "$50/month" },
                    { name: "Pro", price: "Custom — agreed during scoping" },
                    { name: "Custom", price: "Custom — agreed during scoping" },
                  ].map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center justify-between py-3 border-b border-white/10"
                    >
                      <span className="text-sm font-medium text-white/70">
                        {row.name} package
                      </span>
                      <span className="text-sm font-bold text-white">
                        {row.price}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-8"
              >
                {/* What's included */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4 flex items-center gap-2">
                    <Check size={14} className="text-accent" />
                    What&apos;s included
                  </h3>
                  <ul className="space-y-3">
                    {RETAINER_INCLUDES.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                        <span className="text-sm text-white/60">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What's not included */}
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-4 flex items-center gap-2">
                    <X size={14} className="text-white/40" />
                    Not included (quoted separately)
                  </h3>
                  <ul className="space-y-3">
                    {RETAINER_EXCLUDES.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-white/20 rounded-full mt-2 shrink-0" />
                        <span className="text-sm text-white/40">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <CTASection />
        <Footer />
      </main>

      {/* ── Modals ─────────────────────────────────────────── */}
      <AnimatePresence>
        {activeModal?.kind === "quiz" && (
          <QuizModal
            key="quiz-modal"
            quizType={activeModal.quizType}
            onClose={closeModal}
            onInquiry={(pkgId, price) => {
              handleInquiry(pkgId, price);
            }}
            onBooking={(tierId, price, dc) => {
              handleBooking(tierId, price, dc);
            }}
          />
        )}

        {activeModal?.kind === "inquiry" && (
          <motion.div
            key="inquiry-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-[#0d0d0d] border border-white/10 shadow-2xl"
              style={{ maxHeight: "90vh", overflowY: "auto" }}
            >
              <div className="sticky top-0 bg-[#0d0d0d] border-b border-white/10 px-6 py-4 flex items-center justify-between z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">
                  New enquiry
                </p>
                <button
                  onClick={closeModal}
                  className="text-white/40 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="px-6 py-8">
                <InquiryForm
                  packageId={activeModal.packageId}
                  priceLabel={activeModal.priceLabel}
                  onBack={closeModal}
                />
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeModal?.kind === "booking" && (
          <motion.div
            key="booking-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg bg-[#0d0d0d] border border-white/10 shadow-2xl"
              style={{ maxHeight: "90vh", overflowY: "auto" }}
            >
              <div className="sticky top-0 bg-[#0d0d0d] border-b border-white/10 px-6 py-4 flex items-center justify-between z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-accent">
                  {activeModal.discoveryCall
                    ? "Discovery call"
                    : "Redesign enquiry"}
                </p>
                <button
                  onClick={closeModal}
                  className="text-white/40 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="px-6 py-8">
                <BookingForm
                  tierId={activeModal.tierId}
                  priceLabel={activeModal.priceLabel}
                  discoveryCallTriggered={activeModal.discoveryCall}
                  onBack={closeModal}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
