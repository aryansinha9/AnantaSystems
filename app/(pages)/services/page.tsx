"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, Gamepad2, ArrowRight, Construction } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CTASection from "../../components/CTASection";

const services = [
    {
        title: "Website Development",
        description: "We build responsive, high-conversion websites that serve as the digital face of your business. From simple landing pages to complex CMS solutions.",
        features: ["Responsive Design", "SEO Optimization", "CMS Integration", "Performance Tuning"],
        icon: Monitor,
    },
    {
        title: "Automation & Process",
        description: "Streamline your operations with custom digital workflows. We help businesses save time by automating repetitive tasks like bookings and data entry.",
        features: ["Workflow Automation", "Booking Systems", "Data Processing", "Custom CRM Solutions"],
        icon: Cpu,
    },
    {
        title: "Interactive Digital Solutions",
        description: "Engage your audience with immersive web experiences, games, and full-stack applications that push the boundaries of what's possible.",
        features: ["Web Games", "Interactive Storytelling", "Real-time Apps", "3D Web Experiences"],
        icon: Gamepad2,
    },
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">
            <Navbar />

            <section className="pt-32 pb-20 px-4 md:px-6 container mx-auto text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-8xl font-heading font-bold mb-8">
                        Our <span className="text-accent">Services</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-gray-300 max-w-4xl font-light leading-snug">
                        Comprehensive digital solutions designed to elevate your brand and optimize operations.
                    </p>
                </motion.div>
            </section>

            <section className="pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-[#111111] border-l-4 border-transparent hover:border-accent hover:bg-[#161616] p-10 transition-all duration-300 h-full flex flex-col"
                            >
                                <div className="mb-8">
                                    <service.icon className="w-12 h-12 text-white group-hover:text-accent transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-gray-400 mb-8 leading-relaxed flex-grow text-lg">{service.description}</p>

                                <ul className="space-y-4 mb-8 border-t border-white/10 pt-8">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center text-sm text-gray-300 font-medium">
                                            <span className="w-1 h-1 bg-accent mr-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button className="inline-flex items-center text-white font-bold tracking-wide group-hover:underline decoration-accent underline-offset-4 mt-auto">
                                    LEARN MORE <ArrowRight className="ml-2 w-4 h-4 text-accent" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Future Proof Section */}
            <section className="py-24 bg-accent relative overflow-hidden text-white">
                <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center px-3 py-1 bg-black/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
                            <Construction className="w-4 h-4 mr-2" /> Coming Soon
                        </div>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                            Construction Automation
                        </h2>
                        <p className="text-lg text-white/90 font-medium">
                            A specialized service dedicated to transforming the construction industry through smart automation and digital workflow optimization.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <div className="h-1 bg-black/20 w-full overflow-hidden">
                            <div className="h-full bg-white w-[60%]" />
                        </div>
                        <p className="text-xs font-bold uppercase tracking-widest mt-2 text-white/60 text-right">Dev in Progress</p>
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
