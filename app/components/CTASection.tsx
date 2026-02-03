"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-24 bg-accent relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                    Have a project in mind? <br />
                    <span className="text-white/90">
                        Let’s make it happen.
                    </span>
                </h2>
                <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
                    From concept to launch, we are ready to build the future with you.
                </p>

                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center h-16 px-10 py-2 text-xl font-bold text-accent bg-white rounded-full transition-all hover:bg-gray-50 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                >
                    Get in Touch <ArrowRight className="ml-2 w-6 h-6" />
                </Link>
            </div>
        </section>
    );
}
