"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { QUIZ_A_QUESTIONS, QUIZ_B_QUESTIONS } from "@/app/lib/quizData";
import {
  calculateQuizAResultFromIndices,
  calculateQuizBResult,
  QuizAResult,
  QuizBResult,
} from "@/app/lib/scoringEngine";
import QuizResult from "./QuizResult";

type Props = {
  quizType: "new" | "redesign";
  onClose: () => void;
  onInquiry: (packageId: string, priceLabel: string) => void;
  onBooking: (tierId: string, priceLabel: string, discoveryCall: boolean) => void;
};

export default function QuizModal({
  quizType,
  onClose,
  onInquiry,
  onBooking,
}: Props) {
  const questions =
    quizType === "new" ? QUIZ_A_QUESTIONS : QUIZ_B_QUESTIONS;
  const total = questions.length;

  const [step, setStep] = useState(0); // 0-indexed
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(total).fill(null)
  );
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back
  const [showResult, setShowResult] = useState(false);
  const [quizAResult, setQuizAResult] = useState<QuizAResult | null>(null);
  const [quizBResult, setQuizBResult] = useState<QuizBResult | null>(null);

  const currentQuestion = questions[step];
  const selectedAnswer = answers[step];
  const isLastStep = step === total - 1;
  const progress = ((step + 1) / total) * 100;

  function handleSelect(optionIndex: number) {
    const updated = [...answers];
    updated[step] = optionIndex;
    setAnswers(updated);
  }

  function handleNext() {
    if (selectedAnswer === null) return;
    if (isLastStep) {
      // Calculate result
      const finalAnswers = answers as number[];
      if (quizType === "new") {
        setQuizAResult(calculateQuizAResultFromIndices(finalAnswers));
      } else {
        setQuizBResult(calculateQuizBResult(finalAnswers));
      }
      setShowResult(true);
    } else {
      setDirection(1);
      setStep((s) => s + 1);
    }
  }

  function handleBack() {
    if (step === 0) return;
    setDirection(-1);
    setStep((s) => s - 1);
  }

  function handleRetake() {
    setAnswers(Array(total).fill(null));
    setStep(0);
    setDirection(1);
    setShowResult(false);
    setQuizAResult(null);
    setQuizBResult(null);
  }

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-2xl bg-[#0d0d0d] border border-white/10 shadow-2xl overflow-hidden"
          style={{ maxHeight: "90vh", overflowY: "auto" }}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 bg-[#0d0d0d] border-b border-white/10 px-6 pt-6 pb-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">
                  {quizType === "new" ? "New website" : "Website redesign"}
                </p>
                {!showResult && (
                  <p className="text-sm text-white/50">
                    Question {step + 1} of {total}
                  </p>
                )}
                {showResult && (
                  <p className="text-sm text-white/50">Your recommendation</p>
                )}
              </div>
              <button
                onClick={onClose}
                className="text-white/40 hover:text-white transition-colors p-1"
                aria-label="Close quiz"
              >
                <X size={22} />
              </button>
            </div>

            {/* Progress bar */}
            {!showResult && (
              <div
                className="w-full h-1 bg-white/10 rounded-full overflow-hidden"
                role="progressbar"
                aria-valuenow={step + 1}
                aria-valuemin={1}
                aria-valuemax={total}
              >
                <motion.div
                  className="h-full bg-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="px-6 py-8">
            {showResult ? (
              <QuizResult
                quizType={quizType}
                quizAResult={quizAResult}
                quizBResult={quizBResult}
                onRetake={handleRetake}
                onInquiry={onInquiry}
                onBooking={onBooking}
              />
            ) : (
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={step}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  {/* Question */}
                  <h2
                    className="text-xl md:text-2xl font-bold text-white mb-8 leading-tight"
                    id={`quiz-question-${step}`}
                  >
                    {currentQuestion.question}
                  </h2>

                  {/* Options */}
                  <div
                    className="space-y-3"
                    role="radiogroup"
                    aria-labelledby={`quiz-question-${step}`}
                  >
                    {currentQuestion.options.map((option, index) => {
                      const isSelected = selectedAnswer === index;
                      return (
                        <button
                          key={index}
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => handleSelect(index)}
                          className={`
                            w-full text-left p-4 border transition-all duration-200 flex items-center gap-4 group
                            min-h-[44px]
                            ${
                              isSelected
                                ? "border-accent bg-accent/10"
                                : "border-white/10 bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.05]"
                            }
                          `}
                        >
                          <span className="text-xl shrink-0" aria-hidden="true">
                            {option.emoji}
                          </span>
                          <span className="flex-1 min-w-0">
                            <span
                              className={`block text-sm font-semibold mb-0.5 ${
                                isSelected ? "text-white" : "text-white/80"
                              }`}
                            >
                              {option.label}
                            </span>
                            <span className="block text-xs text-white/40">
                              {option.description}
                            </span>
                          </span>
                          {isSelected && (
                            <CheckCircle2
                              size={18}
                              className="text-accent shrink-0"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                    <button
                      onClick={handleBack}
                      className={`
                        flex items-center gap-2 text-sm font-medium transition-colors
                        ${step === 0 ? "invisible" : "text-white/50 hover:text-white"}
                      `}
                    >
                      <ArrowLeft size={16} />
                      Back
                    </button>

                    <button
                      onClick={handleNext}
                      disabled={selectedAnswer === null}
                      className={`
                        flex items-center gap-2 px-6 py-3 text-sm font-bold transition-all
                        ${
                          selectedAnswer !== null
                            ? "bg-accent text-white hover:bg-accent/90"
                            : "bg-white/10 text-white/30 cursor-not-allowed"
                        }
                      `}
                    >
                      {isLastStep ? "See my recommendation" : "Next"}
                      {!isLastStep && <ArrowRight size={16} />}
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
