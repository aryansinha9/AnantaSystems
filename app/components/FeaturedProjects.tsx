"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy, Car, Gamepad2, Database } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Eastern Creek SC",
        category: "Sports & Community",
        description: "Official club portal built directly into a high-performance web app with seamless registration.",
        stats: ["Custom CMS", "Dynamic Routing"],
        icon: Trophy,
        href: "/portfolio",
        color: "bg-red-600",
        image: "/images/project-ecsc.png"
    },
    {
        id: 2,
        title: "King of the Pitch",
        category: "Sports Platform",
        description: "Full-stack sports platform with real-time scoring and Stripe payments.",
        stats: ["Real-time Scoring", "Stripe Integration"],
        icon: Trophy,
        href: "/portfolio",
        color: "bg-orange-600",
        image: "/images/project-kotp.png"
    },
    {
        id: 2,
        title: "Melbourne West Driving",
        category: "Business Automation",
        description: "Automated booking system boosting conversion and reducing admin time.",
        stats: ["Automated Booking", "+40% Conversion"],
        icon: Car,
        href: "/portfolio",
        color: "bg-blue-600",
        image: "/images/project-mwd.png"
    },
    {
        id: 3,
        title: "IRL Among Us",
        category: "Interactive Game App",
        description: "Web-based gamemaster app for social deduction games with real-time sync.",
        stats: ["Real-time Sync", "Role Automation"],
        icon: Gamepad2,
        href: "/portfolio",
        color: "bg-purple-600",
        image: "/images/project-irl.png"
    },
    {
        id: 4,
        title: "UNO Driving School",
        category: "SEO & Data",
        description: "SEO-driven platform with suburb-specific data architecture.",
        stats: ["SEO Optimization", "Dynamic Pages"],
        icon: Database,
        href: "/portfolio",
        color: "bg-green-600",
        image: "/images/project-uno.png"
    },
];

export default function FeaturedProjects() {
    return (
        <section className="py-24 bg-[#111111] overflow-hidden relative text-white">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 tracking-tight">
                            Case Studies
                        </h2>
                        <div className="w-16 h-1 bg-accent mb-8"></div>
                    </div>
                </div>

                {/* Horizontal Scroll Container - "Accenture" Card Style (Edge Overlay) */}
                <div className="flex overflow-x-auto pb-12 gap-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ scale: 0.98 }}
                            className="snap-center shrink-0 w-[300px] md:w-[400px] h-[500px] relative overflow-hidden group cursor-pointer bg-black border-none"
                        >
                            {/* Background Image or Abstract Color */}
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-contain p-8 opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                />
                            ) : (
                                <div className={`absolute inset-0 ${project.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                            {/* Icon */}
                            <div className="absolute top-8 left-8">
                                <project.icon className="w-8 h-8 text-white/80" />
                            </div>

                            {/* Content Bottom */}
                            <div className="absolute bottom-0 left-0 w-full p-8">
                                <p className="text-xs font-bold tracking-widest uppercase mb-2 text-white/80">
                                    {project.category}
                                </p>
                                <h3 className="text-3xl font-bold text-white mb-4 leading-tight group-hover:underline decoration-accent underline-offset-4">
                                    {project.title}
                                </h3>
                                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
                                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <Link href={project.href} className="inline-flex items-center text-white font-bold text-sm">
                                        READ CASE STUDY <ArrowRight className="ml-2 w-4 h-4 text-accent" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Link
                        href="/portfolio"
                        className="inline-flex items-center text-white hover:text-accent font-bold transition-colors"
                    >
                        VIEW ALL WORK <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
