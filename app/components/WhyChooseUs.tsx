"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Discovery & Strategy",
        description: "We dive deep into your business goals, user needs, and market landscape to build a solid roadmap.",
        icon: Search,
    },
    {
        id: "02",
        title: "Design & Build",
        description: "Our team crafts stunning, high-performance solutions with clean code and futuristic aesthetics.",
        icon: PenTool,
    },
    {
        id: "03",
        title: "Deployment & Growth",
        description: "We launch with confidence and provide ongoing optimization to ensure scaling success.",
        icon: Rocket,
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-20">
                    <h2 className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">
                        Our Approach
                    </h2>
                    <h3 className="text-3xl md:text-5xl font-heading font-bold text-primary">
                        From Concept to Reality
                    </h3>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0" />

                    <div className="grid md:grid-cols-3 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                                className="group text-center bg-white md:bg-transparent p-6 rounded-2xl md:p-0 border md:border-none border-gray-100 shadow-sm md:shadow-none"
                            >
                                <div className="relative inline-flex items-center justify-center w-24 h-24 mb-8">
                                    <div className="absolute inset-0 bg-white border-4 border-gray-100 rounded-full z-10 group-hover:border-accent transition-colors duration-300" />
                                    <div className="relative z-20">
                                        <step.icon className="w-10 h-10 text-muted group-hover:text-accent transition-colors duration-300" />
                                    </div>
                                    <div className="absolute -top-4 -right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold z-30 shadow-lg">
                                        {step.id}
                                    </div>
                                </div>

                                <h4 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                                    {step.title}
                                </h4>
                                <p className="text-muted leading-relaxed max-w-sm mx-auto">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
