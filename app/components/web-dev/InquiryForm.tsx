"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";
import { PACKAGES } from "@/app/lib/packageData";
import SuccessState from "./SuccessState";

type Props = {
  packageId: string;
  priceLabel: string;
  onBack: () => void;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function InquiryForm({ packageId, priceLabel, onBack }: Props) {
  const pkg = PACKAGES.find((p) => p.id === packageId) ?? PACKAGES[0];

  const [businessName, setBusinessName] = useState("");
  const [subject, setSubject] = useState(pkg.subjectLine);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const successRef = useRef<HTMLDivElement>(null);

  // Live subject line update as business name changes
  useEffect(() => {
    if (businessName.trim()) {
      setSubject(`${pkg.subjectLine} · ${businessName.trim()}`);
    } else {
      setSubject(pkg.subjectLine);
    }
  }, [businessName, pkg.subjectLine]);

  // Scroll success into view on mobile
  useEffect(() => {
    if (status === "success" && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [status]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "1fc805e1-5768-435b-9f56-62b51308adca");

    // Build structured email body
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    formData.set(
      "subject",
      subject
    );
    formData.set(
      "message",
      `New website enquiry\n\nPackage selected: ${pkg.name} — ${priceLabel}\n\nName: ${name}\nBusiness name: ${businessName || "Not provided"}\nEmail: ${email}\n\nMessage:\n${message || "No message provided"}\n\n---\nSubmitted via website package quiz / package page`
    );
    formData.set("from_name", "Ananta Systems Website");
    formData.set("to", "aryan@anantasystems.com.au");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setStatus("success");
        form.reset();
        setBusinessName("");
      } else {
        setErrorMsg(data.message || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div ref={successRef}>
        <SuccessState
          type="inquiry"
          packageLabel={`${pkg.name} package`}
          onReset={onBack}
        />
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {/* Package pill */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center px-3 py-1.5 bg-accent/10 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest">
            {pkg.name} package — {priceLabel}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-1">Tell us about your project</h3>
          <p className="text-sm text-white/40">
            We typically respond within 1 business day.
          </p>
        </div>

        {status === "error" && (
          <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30">
            <X size={16} className="text-red-400 shrink-0 mt-0.5" />
            <p className="text-sm text-red-400">{errorMsg}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="inq-name"
              className="block text-xs font-bold uppercase tracking-widest text-white/50"
            >
              Your name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="inq-name"
              name="name"
              required
              minLength={2}
              placeholder="Jane Smith"
              className="w-full bg-white/[0.03] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
            />
          </div>

          {/* Business name */}
          <div className="space-y-1.5">
            <label
              htmlFor="inq-business"
              className="block text-xs font-bold uppercase tracking-widest text-white/50"
            >
              Business name <span className="text-white/25">(optional)</span>
            </label>
            <input
              type="text"
              id="inq-business"
              name="business_name"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Acme Co."
              className="w-full bg-white/[0.03] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
            />
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label
              htmlFor="inq-email"
              className="block text-xs font-bold uppercase tracking-widest text-white/50"
            >
              Email address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="inq-email"
              name="email"
              required
              placeholder="jane@example.com"
              className="w-full bg-white/[0.03] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-white/20"
            />
          </div>

          {/* Subject */}
          <div className="space-y-1.5">
            <label
              htmlFor="inq-subject"
              className="block text-xs font-bold uppercase tracking-widest text-white/50"
            >
              Subject
            </label>
            <input
              type="text"
              id="inq-subject"
              name="subject_display"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 text-white/70 text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label
              htmlFor="inq-message"
              className="block text-xs font-bold uppercase tracking-widest text-white/50"
            >
              Tell us about your project{" "}
              <span className="text-white/25">(optional)</span>
            </label>
            <textarea
              id="inq-message"
              name="message"
              rows={4}
              placeholder="What does your business do? Any specific pages or features in mind? Rough timeline?"
              className="w-full bg-white/[0.03] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-white/20 resize-y leading-[1.6]"
              style={{ minHeight: "90px" }}
            />
          </div>

          {/* Submit */}
          <div className="space-y-3 pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex items-center justify-center gap-2 bg-accent text-white py-3.5 text-sm font-bold hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <>
                  <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                  Sending…
                </>
              ) : (
                <>
                  Send enquiry
                  <Send size={15} />
                </>
              )}
            </button>
            <p className="text-xs text-white/30 text-center">
              We typically respond within 1 business day.
            </p>
          </div>
        </form>

        {/* Back link */}
        <button
          onClick={onBack}
          className="text-xs text-white/30 hover:text-white/60 transition-colors mt-4"
        >
          ← Back
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
