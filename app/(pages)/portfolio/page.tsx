"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink, ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";

// Project Data - Unchanged
const projects = [
    {
        id: 1,
        title: "King of the Pitch",
        category: "Sports & Events",
        image: "/images/project-kotp.png",
        description: "A full-stack sports platform enabling real-time scoring, league management, and secure Stripe payments. Built for scalability and reliability.",
        tech: ["Next.js", "Supabase", "Stripe", "Tailwind CSS"],
        liveLink: "https://kingofthepitch.com.au",
        features: ["Real-time Match Updates", "Automated League Tables", "Secure Payment Gateway", "Admin Dashboard"],
    },
    {
        id: 2,
        title: "Melbourne West Driving School",
        category: "Driving Schools",
        image: "/images/project-mwd.png",
        description: "A fully responsive, client-focused web platform featuring structured sections for course offerings, pricing, testimonials, and contact information. Utilizes semantic HTML, modular CSS, and lightweight JavaScript to deliver cross-device compatibility, fast load times, and an intuitive user experience. The design emphasizes clarity, accessibility, and easy navigation, showcasing modern front-end development practices suitable for small business applications.",
        tech: ["React", "Node.js", "MongoDB", "Twilio API"],
        liveLink: "https://melbournewestdrivingschool.com.au",
        features: ["Enhanced User Experience", "Cross-Device Compatibility", "Professional Presentation", "Optimized Load Performance"],
    },
    {
        id: 3,
        title: "UNO Driving School",
        category: "Driving Schools",
        image: "/images/project-uno.png",
        description: "A client-focused web platform for a driving school, featuring an optional automated student enrollment system with integrated booking and PayPal payment processing, synchronized with a dynamic scheduling calendar. Implements SEO best practices, semantic HTML, modular CSS, and lightweight JavaScript to ensure fast load times, cross-device responsiveness, and high search engine visibility. Organized content sections include course listings, pricing details, testimonials, and contact information, providing a clear and structured user experience.",
        tech: ["Next.js", "Sanity CMS", "Vercel Analytics"],
        liveLink: "https://unodrivingschool.com.au",
        features: ["Dynamic Suburb Pages", "SEO Architecture", "Bulk Package Booking", "Fast Page Load"],
    },
    {
        id: 4,
        title: "IRL Among Us",
        category: "Games / Side Projects",
        image: "/images/project-irl.png",
        description: "A web-based Game Master application for 'In Real Life Among Us' social deduction games. Synchronizes game state across players in real-time.",
        tech: ["Next.js", "Firebase Realtime DB", "Framer Motion"],
        liveLink: "https://irl-among-us.vercel.app/",
        features: ["Real-time Sync", "Role Assignment Logic", "Live Task Tracking", "Win Condition Automation"],
    },
];

const categories = ["All", "Driving Schools", "Sports & Events", "Games / Side Projects"];

export default function PortfolioPage() {
    const [filter, setFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);

    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">
            <Navbar />

            <section className="pt-32 pb-12 px-4 md:px-6 container mx-auto">
                <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8">
                    Our <span className="text-accent">Work</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-12 font-light">
                    Highlighting successful transformations and digital experiments.
                </p>

                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-4 border-b border-white/10 pb-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-0 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 border-b-2 mr-4 ${filter === cat
                                ? "border-accent text-white"
                                : "border-transparent text-gray-500 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Project Grid */}
            <section className="pb-24 px-4 md:px-6 container mx-auto">
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className="group cursor-pointer relative aspect-square overflow-hidden bg-black"
                            >
                                {/* Image */}
                                <div className="absolute inset-0 bg-black group-hover:opacity-40 transition-opacity duration-500">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain p-8 opacity-80"
                                    />
                                </div>

                                <div className="absolute inset-0 p-8 flex flex-col justify-between bg-black/60 group-hover:bg-black/80 transition-all duration-300">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-4 group-hover:translate-y-0">
                                        <span className="text-accent text-xs font-bold uppercase tracking-widest">{project.category}</span>
                                    </div>

                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                                        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 delay-100">
                                            <p className="text-gray-300 text-sm mt-2 line-clamp-3">
                                                {project.description}
                                            </p>
                                            <div className="mt-4 flex items-center text-accent font-bold text-sm">
                                                VIEW CASE STUDY <ArrowRight className="ml-2 w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            <CTASection />
            <Footer />

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        />

                        <motion.div
                            layoutId={`project-${selectedProject.id}`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            className="relative bg-[#111] border border-white/10 w-full max-w-5xl h-[85vh] overflow-y-auto shadow-2xl z-10 scrollbar-hide flex flex-col md:flex-row"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 p-2 text-white hover:text-accent transition-colors z-20"
                            >
                                <X className="w-8 h-8" />
                            </button>

                            {/* Modal Left: Visual */}
                            <div className="w-full md:w-1/2 bg-[#1a1a1a] relative overflow-hidden h-[50vh] md:h-auto">
                                <iframe
                                    src={selectedProject.liveLink}
                                    title={`${selectedProject.title} Preview`}
                                    className="w-full h-full border-0"
                                    allowFullScreen
                                />
                            </div>

                            {/* Modal Right: Content */}
                            <div className="w-full md:w-1/2 p-8 md:p-12 bg-[#111] overflow-y-auto">
                                <div className="mb-8 border-b border-white/10 pb-8">
                                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-2">{selectedProject.title}</h2>
                                    <span className="text-accent text-sm font-bold uppercase tracking-widest">{selectedProject.category}</span>
                                </div>
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-white mb-4">Project Overview</h3>
                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h3 className="text-xl font-bold text-white mb-4">Key Results</h3>
                                    <ul className="space-y-4">
                                        {selectedProject.features.map((feature, i) => (
                                            <li key={i} className="flex items-start text-gray-300">
                                                <span className="w-2 h-2 bg-accent mt-2 mr-4 shrink-0" />
                                                <span className="text-base">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mb-12">
                                    <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map(t => (
                                            <span key={t} className="px-3 py-1 border border-white/20 text-xs font-bold uppercase text-gray-400">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <a
                                    href={selectedProject.liveLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold hover:bg-white hover:text-black transition-all w-full"
                                >
                                    VISIT LIVE SITE <ExternalLink className="ml-2 w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}
