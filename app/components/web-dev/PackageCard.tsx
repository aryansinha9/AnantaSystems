"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { PackageData } from "@/app/lib/packageData";

type Props = {
  pkg: PackageData;
  onGetStarted: (packageId: string, priceLabel: string) => void;
  index: number;
};

export default function PackageCard({ pkg, onGetStarted, index }: Props) {
  const isGrowth = pkg.id === "growth";
  const isCustom = pkg.id === "custom";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`
        relative flex flex-col h-full p-8 border transition-all duration-300 group
        ${isGrowth
          ? "border-accent bg-accent/5 hover:bg-accent/10"
          : "border-white/10 bg-[#111111] hover:border-white/25 hover:bg-[#161616]"
        }
      `}
    >
      {/* Most popular badge */}
      {pkg.badge && (
        <div className="absolute -top-3.5 left-8">
          <span className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-bold uppercase tracking-widest px-3 py-1">
            <Zap size={10} />
            {pkg.badge}
          </span>
        </div>
      )}

      {/* Package name */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white/50 uppercase tracking-widest mb-3">
          {pkg.name}
        </h3>
        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold text-white">{pkg.priceLabel}</span>
          {!isCustom && (
            <span className="text-sm text-white/40 pb-1">one-time</span>
          )}
        </div>
        {!isCustom && (
          <p className="text-sm text-white/40 mt-2">
            + {pkg.monthlyRetainer} hosting &amp; support
          </p>
        )}
        {isCustom && (
          <p className="text-sm text-white/40 mt-2">Scoped per project</p>
        )}
      </div>

      {/* Delivery */}
      <p className="text-xs text-accent font-semibold uppercase tracking-widest mb-6">
        Delivery: {pkg.delivery}
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 mb-6" />

      {/* Feature list */}
      <ul className="space-y-3 flex-1 mb-8">
        {pkg.features.map((feature) => (
          <li key={feature.attribute} className="flex items-start gap-3 text-sm">
            <span className="w-1 h-1 bg-accent rounded-full mt-2 shrink-0" />
            <span>
              <span className="text-white/40 font-medium">{feature.attribute}: </span>
              <span className="text-white/70">{feature.detail}</span>
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => onGetStarted(pkg.id, pkg.priceLabel)}
        id={`package-cta-${pkg.id}`}
        className={`
          w-full flex items-center justify-center gap-2 py-3.5 text-sm font-bold transition-all
          ${isGrowth
            ? "bg-accent text-white hover:bg-accent/90"
            : "border border-white/20 text-white hover:border-accent hover:text-accent"
          }
        `}
      >
        {pkg.ctaLabel}
        <ArrowRight size={15} />
      </button>

      {/* Target client hint */}
      <p className="text-xs text-white/25 mt-4 leading-relaxed">{pkg.targetClient}</p>
    </motion.div>
  );
}
