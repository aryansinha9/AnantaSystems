"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type SuccessType = "inquiry" | "discovery" | "redesign-inquiry";

type Props = {
  type: SuccessType;
  packageLabel: string;
  websiteUrl?: string;
  onReset: () => void;
};

const CONTENT: Record<
  SuccessType,
  { heading: string; body: string; getDetail: (url?: string) => string | null }
> = {
  inquiry: {
    heading: "Enquiry received",
    body: "We'll review your details and get back to you within 1 business day.",
    getDetail: () => null,
  },
  discovery: {
    heading: "Discovery call requested",
    body: "We'll be in touch within 1 business day to confirm a time that works for you.",
    getDetail: (url) =>
      url
        ? `We'll review ${url} before the call so we can give you a proper assessment from the first minute.`
        : "We'll review what you've shared before the call.",
  },
  "redesign-inquiry": {
    heading: "Enquiry received",
    body: "We'll review your details and get back to you within 1 business day with next steps.",
    getDetail: () =>
      "If you included your website URL, we'll take a look before we reply so our response is as useful as possible.",
  },
};

export default function SuccessState({
  type,
  packageLabel,
  websiteUrl,
  onReset,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const content = CONTENT[type];
  const detail = content.getDetail(websiteUrl);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center py-8"
    >
      {/* Icon */}
      <div className="flex justify-center mb-5">
        <CheckCircle2 size={40} className="text-accent" />
      </div>

      {/* Package tag */}
      <div className="flex justify-center mb-5">
        <span className="inline-flex items-center px-4 py-1.5 bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest">
          {packageLabel}
        </span>
      </div>

      {/* Heading */}
      <h3 className="text-xl font-bold text-white mb-3" style={{ fontWeight: 500 }}>
        {content.heading}
      </h3>

      {/* Body */}
      <p
        className="text-sm text-white/60 leading-[1.7] mb-4"
        style={{ maxWidth: "400px", margin: "0 auto 16px" }}
      >
        {content.body}
      </p>

      {/* Detail card */}
      {detail && (
        <div className="bg-white/[0.04] border border-white/10 rounded p-4 text-left mt-4 mb-6"
          style={{ maxWidth: "400px", margin: "16px auto 24px" }}>
          <p className="text-[13px] text-white/50 leading-relaxed">{detail}</p>
        </div>
      )}

      {/* Reset */}
      <button
        onClick={onReset}
        className="text-xs text-white/30 hover:text-white/60 transition-colors mt-6"
      >
        ← Start over
      </button>
    </motion.div>
  );
}
