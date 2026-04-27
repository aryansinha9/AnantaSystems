"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Send, X } from "lucide-react";
import { REDESIGN_TIERS } from "@/app/lib/packageData";
import SuccessState from "./SuccessState";

type Props = {
  tierId: string;
  priceLabel: string;
  discoveryCallTriggered: boolean;
  onBack: () => void;
};

type FormStatus = "idle" | "submitting-discovery" | "submitting-enquiry" | "success-discovery" | "success-enquiry" | "error";

const MAX_MSG = 500;

export default function BookingForm({
  tierId,
  priceLabel,
  discoveryCallTriggered,
  onBack,
}: Props) {
  const tier = REDESIGN_TIERS.find((t) => t.id === tierId) ?? REDESIGN_TIERS[0];

  const [messageChars, setMessageChars] = useState(0);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState("");
  const [urlError, setUrlError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((status === "success-discovery" || status === "success-enquiry") && successRef.current) {
      successRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [status]);

  // Manual validation — returns true if valid, false otherwise
  function validate(form: HTMLFormElement): boolean {
    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const rawUrl = (form.elements.namedItem("website_url") as HTMLInputElement).value.trim();

    let valid = true;

    if (name.length < 2) {
      setNameError("Please enter your name (minimum 2 characters).");
      valid = false;
    } else {
      setNameError("");
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    } else {
      setEmailError("");
    }

    // URL is optional — only validate format if something was entered
    if (rawUrl) {
      const normalised = rawUrl.startsWith("http://") || rawUrl.startsWith("https://")
        ? rawUrl
        : `https://${rawUrl}`;
      try {
        new URL(normalised); // throws if invalid
        setUrlError("");
      } catch {
        setUrlError("Please enter a valid website address (e.g. https://example.com).");
        valid = false;
      }
    } else {
      setUrlError("");
    }

    return valid;
  }

  // Normalise URL — prepend https:// if the user omitted the protocol
  function normaliseUrl(rawUrl: string): string {
    if (!rawUrl) return "";
    if (rawUrl.startsWith("http://") || rawUrl.startsWith("https://")) return rawUrl;
    return `https://${rawUrl}`;
  }

  async function submit(isDiscovery: boolean, form: HTMLFormElement) {
    const formData = new FormData(form);
    formData.append("access_key", "1fc805e1-5768-435b-9f56-62b51308adca");

    const name = (form.elements.namedItem("name") as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const rawUrl = (form.elements.namedItem("website_url") as HTMLInputElement).value.trim();
    const url = normaliseUrl(rawUrl);
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim();

    setSubmittedUrl(url);

    if (isDiscovery) {
      formData.set(
        "subject",
        `Discovery call request — ${tier.name} — ${name}`
      );
      formData.set(
        "message",
        `Discovery call request\n\nRecommended package: ${tier.name} — ${priceLabel}\n\nName: ${name}\nEmail: ${email}\nCurrent website: ${url || "Not provided"}\n\nTheir situation:\n${message || "No message provided"}\n\n---\nSubmitted via redesign quiz → discovery call booking`
      );
    } else {
      formData.set(
        "subject",
        `Redesign enquiry — ${tier.name} — ${name}`
      );
      formData.set(
        "message",
        `Redesign enquiry (no call requested)\n\nRecommended package: ${tier.name} — ${priceLabel}\n\nName: ${name}\nEmail: ${email}\nCurrent website: ${url || "Not provided"}\n\nTheir situation:\n${message || "No message provided"}\n\n---\nSubmitted via redesign quiz → enquiry (skipped discovery call)`
      );
    }

    formData.set("from_name", "Ananta Systems Website");
    formData.set("to", "aryan@anantasystems.com.au");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setStatus(isDiscovery ? "success-discovery" : "success-enquiry");
        form.reset();
        setMessageChars(0);
      } else {
        setErrorMsg(data.message || "Something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  async function handleDiscovery(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const form = (e.currentTarget.closest("form")) as HTMLFormElement;
    if (!validate(form)) return;
    setStatus("submitting-discovery");
    setErrorMsg("");
    await submit(true, form);
  }

  async function handleEnquiry(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const form = (e.currentTarget.closest("form")) as HTMLFormElement;
    if (!validate(form)) return;
    setStatus("submitting-enquiry");
    setErrorMsg("");
    await submit(false, form);
  }

  if (status === "success-discovery") {
    return (
      <div ref={successRef}>
        <SuccessState
          type="discovery"
          packageLabel={tier.name}
          websiteUrl={submittedUrl}
          onReset={onBack}
        />
      </div>
    );
  }

  if (status === "success-enquiry") {
    return (
      <div ref={successRef}>
        <SuccessState
          type="redesign-inquiry"
          packageLabel={tier.name}
          websiteUrl={submittedUrl}
          onReset={onBack}
        />
      </div>
    );
  }

  const isSubmitting =
    status === "submitting-discovery" || status === "submitting-enquiry";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {/* Context banner */}
        <div className="bg-white/[0.04] border border-white/10 px-4 py-3">
          <p className="text-xs text-white/50 leading-relaxed">
            <span className="font-semibold text-white/70">Recommended:</span>{" "}
            {tier.name} — {priceLabel} — we&apos;ll confirm and scope this on the call.
          </p>
        </div>

        {/* Heading */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Phone size={15} className="text-accent" />
            <h3 className="text-lg font-bold text-white">
              {discoveryCallTriggered
                ? "Book your free discovery call"
                : "Tell us about your redesign"}
            </h3>
          </div>
          <p className="text-sm text-white/40">
            The more context you share, the more useful our first conversation will be.
          </p>
        </div>

        {status === "error" && (
          <div className="flex items-start gap-3 p-4 bg-red-500/10 border border-red-500/30">
            <X size={16} className="text-red-400 shrink-0 mt-0.5" />
            <p className="text-sm text-red-400">{errorMsg}</p>
          </div>
        )}

        <form className="space-y-5" noValidate>
          {/* Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="bk-name"
              className="block text-xs font-bold uppercase tracking-widest text-white/50"
            >
              Your name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="bk-name"
              name="name"
              placeholder="Jane Smith"
              className={`w-full bg-white/[0.03] border text-white text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-white/20 ${
                nameError ? "border-red-500/60" : "border-white/10"
              }`}
            />
            {nameError && <p className="text-xs text-red-400">{nameError}</p>}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label
              htmlFor="bk-email"
              className="block text-xs font-bold uppercase tracking-widest text-white/50"
            >
              Email address <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="bk-email"
              name="email"
              placeholder="jane@example.com"
              className={`w-full bg-white/[0.03] border text-white text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-white/20 ${
                emailError ? "border-red-500/60" : "border-white/10"
              }`}
            />
            {emailError && <p className="text-xs text-red-400">{emailError}</p>}
          </div>

          {/* URL */}
          <div className="space-y-1.5">
            <label
              htmlFor="bk-url"
              className="block text-xs font-bold uppercase tracking-widest text-white/50"
            >
              Your current website{" "}
              <span className="text-white/25">(optional but recommended)</span>
            </label>
            <input
              type="text"
              id="bk-url"
              name="website_url"
              placeholder="yoursite.com or https://yoursite.com"
              className={`w-full bg-white/[0.03] border text-white text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-white/20 ${
                urlError ? "border-red-500/60" : "border-white/10"
              }`}
            />
            {urlError
              ? <p className="text-xs text-red-400">{urlError}</p>
              : <p className="text-[11px] text-white/30">We&apos;ll review your site before the call so we&apos;re not starting from scratch. You don&apos;t need to include https://</p>
            }
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label
              htmlFor="bk-message"
              className="block text-xs font-bold uppercase tracking-widest text-white/50"
            >
              Tell us about your situation{" "}
              <span className="text-white/25">(optional)</span>
            </label>
            <textarea
              id="bk-message"
              name="message"
              rows={4}
              maxLength={MAX_MSG}
              placeholder="What's not working? What do you want the new site to achieve? Any features in mind? The more context you give, the more useful the call will be."
              onChange={(e) => setMessageChars(e.target.value.length)}
              className="w-full bg-white/[0.03] border border-white/10 text-white text-sm px-4 py-3 focus:outline-none focus:border-accent transition-colors placeholder:text-white/20 resize-y leading-[1.6]"
              style={{ minHeight: "90px" }}
            />
            <p className="text-[11px] text-white/30 text-right">
              {messageChars}/{MAX_MSG}
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={handleDiscovery}
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-accent text-white py-3.5 text-sm font-bold hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting-discovery" ? (
                <>
                  <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                  Submitting…
                </>
              ) : (
                <>
                  <Phone size={15} />
                  Request discovery call
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleEnquiry}
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 border border-white/15 text-white/60 py-3 text-sm font-medium hover:border-white/30 hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === "submitting-enquiry" ? (
                <>
                  <span className="animate-spin w-4 h-4 border-2 border-white/30 border-t-white rounded-full" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={13} />
                  Skip the call — just send an enquiry instead
                </>
              )}
            </button>
          </div>
        </form>

        {/* Back link */}
        <button
          onClick={onBack}
          className="text-xs text-white/30 hover:text-white/60 transition-colors"
        >
          ← Back to recommendation
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
