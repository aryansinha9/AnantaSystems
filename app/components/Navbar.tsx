"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/app/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-black/90 backdrop-blur-sm py-4 border-b border-white/10" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="relative z-50 flex items-center gap-2">
                    <Image
                        src="/images/logo.png"
                        alt="Ananta Systems Logo"
                        width={60}
                        height={60}
                        className="w-16 h-16 object-contain"
                    />
                    <span className="font-heading font-bold text-2xl tracking-tighter text-white">
                        ANANTA<span className="font-light">SYSTEMS</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-base font-medium transition-colors hover:text-white relative group",
                                pathname === link.href ? "text-white" : "text-white/70"
                            )}
                        >
                            {link.name}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-full h-0.5 bg-accent scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left",
                                pathname === link.href ? "scale-x-100" : ""
                            )} />
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={cn(
                            "inline-flex items-center justify-center whitespace-nowrap transition-all focus-visible:outline-none",
                            "bg-accent text-white hover:bg-accent/80",
                            "h-12 px-8 text-base font-bold",
                            "rounded-none sm:rounded-sm" // Sharp or slightly rounded per Accenture
                        )}
                    >
                        Get in Touch
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white hover:text-accent z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Nav */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed inset-0 bg-black z-40 flex flex-col items-start justify-center px-8 gap-8 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-4xl font-heading font-bold text-white hover:text-accent transition-colors"
                                >
                                    <span className="text-accent mr-4 text-2xl">&gt;</span>
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "mt-8 inline-flex items-center justify-center whitespace-nowrap transition-all",
                                    "bg-accent text-white hover:bg-white hover:text-primary",
                                    "h-14 px-8 w-full text-lg font-bold"
                                )}
                            >
                                Get in Touch
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
