"use client";

import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhyChooseUs from "../../components/WhyChooseUs";
import CTASection from "../../components/CTASection";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">
            <Navbar />

            {/* Header / Mission */}
            <section className="pt-32 pb-20 px-4 md:px-6 container mx-auto text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
                        Building the <span className="text-accent">future</span> <br />
                        of digital.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light border-l-4 border-accent pl-6">
                        Ananta Systems builds modern digital solutions that grow with your business. Today, websites. Tomorrow, automation and consultancy.
                    </p>
                </motion.div>
            </section>

            {/* Vision / Roadmap Section - Split Screen Style */}
            <section className="py-24 bg-[#111111] border-y border-white/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="sticky top-32 self-start">
                            <h2 className="text-sm font-bold tracking-widest uppercase mb-4 text-accent">Our Vision</h2>
                            <h3 className="text-4xl md:text-6xl font-heading font-bold mb-6">The Road Ahead</h3>
                            <p className="text-lg text-gray-400 max-w-md">
                                We are on a journey to transform industries through precision engineering and creative innovation.
                            </p>
                        </div>

                        <div className="relative border-l border-white/10 pl-8 md:pl-12 space-y-16">
                            {[
                                { year: "Phase 1 (Current)", title: "High-Performance Web Development", desc: "Establishing a strong digital foundation with premium, responsive websites and interactive applications.", active: true },
                                { year: "Phase 2", title: "Business Automation Services", desc: "Streamlining workflows for small businesses and construction firms to save time and reduce errors.", active: false },
                                { year: "Phase 3", title: "Tech Consultancy & Innovation", desc: "Strategic partnership to drive long-term digital growth and adoption of emerging technologies.", active: false }
                            ].map((phase, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="relative"
                                >
                                    <div className={`absolute -left-[45px] md:-left-[61px] top-0 w-6 h-6 rounded-full border-4 border-[#111111] ${phase.active ? "bg-accent shadow-[0_0_15px_#A600FF]" : "bg-gray-700"}`} />
                                    <span className={`text-xs font-bold tracking-widest uppercase mb-2 block ${phase.active ? "text-accent" : "text-gray-500"}`}>{phase.year}</span>
                                    <h4 className="text-2xl font-bold text-white mb-3">{phase.title}</h4>
                                    <p className="text-gray-400 text-lg leading-relaxed">{phase.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team / Founder Section */}
            <section className="py-24 bg-black">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto border border-white/10 p-12 rounded-none bg-[#0a0a0a]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="w-40 h-40 relative shrink-0"
                        >
                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-xl font-bold text-gray-500 border border-white/20">
                                PHOTO
                            </div>
                        </motion.div>

                        <div className="text-center md:text-left flex-1">
                            <h2 className="text-accent font-bold tracking-widest uppercase text-xs mb-4">
                                Meet the Founder
                            </h2>
                            <blockquote className="text-2xl md:text-3xl font-heading font-medium text-white mb-6 leading-relaxed">
                                &quot;I bring a unique perspective to every project—ensuring it&apos;s not just functional, but engaging and future-proof.&quot;
                            </blockquote>
                            <cite className="not-italic text-sm text-gray-400 font-bold tracking-wide block">
                                — Aryan Sinha, Founder
                            </cite>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
            <Footer />
        </main>
    );
}
