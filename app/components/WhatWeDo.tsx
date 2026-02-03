"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, Gamepad2, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Web Development",
        description: "High-conversion, responsive websites with seamless UX/UI. We build digital storefronts that captivate and convert.",
        icon: Monitor,
        href: "/services",
    },
    {
        title: "Automation & Process",
        description: "Streamline your business with custom automation solutions. Perfect for construction and service industries.",
        icon: Cpu,
        href: "/services",
    },
    {
        title: "Interactive Solutions",
        description: "Engage your audience with custom games, apps, and immersive full-stack platforms.",
        icon: Gamepad2,
        href: "/services",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function WhatWeDo() {
    return (
        <section className="py-24 bg-black text-white relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <div className="mb-16">
                        <motion.h2 variants={itemVariants} className="text-white text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
                            Value delivered
                        </motion.h2>
                        <div className="w-16 h-1 bg-accent mb-8"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {services.map((service) => (
                            <motion.div
                                key={service.title}
                                variants={itemVariants}
                                className="group relative h-full bg-[#111111] p-8 md:p-10 transition-colors duration-300 hover:bg-[#1a1a1a]"
                            >
                                <div className="mb-8 text-accent">
                                    <service.icon className="w-10 h-10" />
                                </div>

                                <h4 className="text-2xl font-bold text-white mb-4 group-hover:underline decoration-accent underline-offset-4">
                                    {service.title}
                                </h4>
                                <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                                    {service.description}
                                </p>

                                <Link
                                    href={service.href}
                                    className="inline-flex items-center text-base font-bold text-white transition-colors"
                                >
                                    <span className="mr-2">READ MORE</span>
                                    <ArrowRight className="w-5 h-5 text-accent transform group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
