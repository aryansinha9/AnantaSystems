"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Button } from "../../components/ui/Button";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-accent selection:text-white">
            <Navbar />

            <section className="pt-32 pb-24 px-4 md:px-6 container mx-auto">
                <div className="mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-8xl font-heading font-bold mb-6"
                    >
                        Let&apos;s <span className="text-accent">connect.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl font-light"
                    >
                        Start the conversation. We are ready to help you define the future.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-12"
                    >
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-widest border-b border-white/10 pb-4">Contact Details</h3>

                            <div className="flex items-start space-x-6">
                                <Mail className="w-8 h-8 text-accent shrink-0" />
                                <div>
                                    <p className="text-sm text-gray-400 mb-1 uppercase tracking-wide font-bold">Email</p>
                                    <a href="mailto:systemsananta@gmail.com" className="text-2xl font-bold text-white hover:text-accent transition-colors">
                                        systemsananta@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <Phone className="w-8 h-8 text-accent shrink-0" />
                                <div>
                                    <p className="text-sm text-gray-400 mb-1 uppercase tracking-wide font-bold">Phone</p>
                                    <a href="tel:+61491021526" className="text-2xl font-bold text-white hover:text-accent transition-colors">
                                        +61 491 021 526
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-6">
                                <MapPin className="w-8 h-8 text-accent shrink-0" />
                                <div>
                                    <p className="text-sm text-gray-400 mb-1 uppercase tracking-wide font-bold">Office</p>
                                    <p className="text-2xl font-bold text-white">
                                        Sydney, Australia
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Booking Widget Placeholder */}
                        <div className="bg-[#111] p-10 border-l-4 border-accent">
                            <div className="flex items-center space-x-4 mb-4">
                                <MessageSquare className="w-6 h-6 text-white" />
                                <h3 className="text-xl font-bold text-white">Consultation</h3>
                            </div>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                Schedule a free 15-minute discovery call with our dedicated technical team to discuss your project needs.
                            </p>
                            <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-wide hover:bg-accent hover:text-white transition-all">
                                Open Booking Calendar
                            </button>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-[#111] p-10 md:p-12"
                    >
                        <h3 className="text-2xl font-bold text-white mb-8 uppercase tracking-widest">Send a Message</h3>
                        <form className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2 group">
                                    <label htmlFor="name" className="text-sm font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-accent transition-colors">Name *</label>
                                    <input type="text" id="name" className="w-full bg-transparent border-b-2 border-gray-700 px-0 py-3 text-white focus:outline-none focus:border-accent transition-all placeholder:text-gray-700 text-lg" placeholder="Enter your name" />
                                </div>
                                <div className="space-y-2 group">
                                    <label htmlFor="email" className="text-sm font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-accent transition-colors">Email *</label>
                                    <input type="email" id="email" className="w-full bg-transparent border-b-2 border-gray-700 px-0 py-3 text-white focus:outline-none focus:border-accent transition-all placeholder:text-gray-700 text-lg" placeholder="Enter your email" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-2 group">
                                    <label htmlFor="phone" className="text-sm font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-accent transition-colors">Phone</label>
                                    <input type="tel" id="phone" className="w-full bg-transparent border-b-2 border-gray-700 px-0 py-3 text-white focus:outline-none focus:border-accent transition-all placeholder:text-gray-700 text-lg" placeholder="Optional" />
                                </div>
                                <div className="space-y-2 group">
                                    <label htmlFor="company" className="text-sm font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-accent transition-colors">Company</label>
                                    <input type="text" id="company" className="w-full bg-transparent border-b-2 border-gray-700 px-0 py-3 text-white focus:outline-none focus:border-accent transition-all placeholder:text-gray-700 text-lg" placeholder="Optional" />
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label htmlFor="message" className="text-sm font-bold text-gray-400 uppercase tracking-widest group-focus-within:text-accent transition-colors">Message *</label>
                                <textarea id="message" rows={4} className="w-full bg-transparent border-b-2 border-gray-700 px-0 py-3 text-white focus:outline-none focus:border-accent transition-all placeholder:text-gray-700 text-lg" placeholder="How can we help?" />
                            </div>

                            <div className="pt-4">
                                <Button variant="primary" size="lg" className="w-full md:w-auto h-14 px-12 text-lg font-bold bg-accent hover:bg-white hover:text-black rounded-none">
                                    SEND MESSAGE
                                </Button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
