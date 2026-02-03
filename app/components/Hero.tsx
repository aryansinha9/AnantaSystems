"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Waves from "./ui/Waves";


export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
            {/* Waves Background */}
            <div className="absolute inset-0 z-0 opacity-50">
                <Waves
                    lineColor="#7630F4"
                    backgroundColor="transparent"
                    waveSpeedX={0.0125}
                    waveSpeedY={0.01}
                    waveAmpX={40}
                    waveAmpY={20}
                    friction={0.9}
                    tension={0.02}
                    maxCursorMove={200}
                    xGap={24}
                    yGap={36}
                />
            </div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-0 pointer-events-none" />

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 max-w-5xl"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-bold leading-[1.1] tracking-tight">
                        Let there be <br />
                        <span className="text-white">innovation.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed font-light">
                        Helping businesses navigate the future with <br className="hidden md:block" />
                        scale, speed, and meaningful change.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-start gap-6 pt-8"
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center justify-center h-14 px-8 text-lg font-bold text-white bg-accent hover:bg-white hover:text-black transition-all duration-300"
                        >
                            What we do
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center h-14 px-8 text-lg font-bold text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 animate-bounce"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
}
