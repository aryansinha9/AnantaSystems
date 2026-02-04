"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin, Mail, Phone, MapPin, Instagram } from "lucide-react";

export default function Footer() {
    const navigation = {
        main: [
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Services', href: '/services' },
            { name: 'Projects', href: '/portfolio' },
            { name: 'Contact', href: '/contact' },
        ],
        social: [
            {
                name: 'LinkedIn',
                href: '#',
                icon: Linkedin,
            },
            {
                name: 'GitHub',
                href: '#',
                icon: Github,
            },
            {
                name: 'Instagram',
                href: 'https://www.instagram.com/anantasystems?igsh=ZzE3bmtkOTNod25w',
                icon: Instagram,
            },
            {
                name: 'Email',
                href: 'mailto:systemsananta@gmail.com',
                icon: Mail,
            },
        ],
    }

    return (
        <footer className="bg-black border-t border-white/10 text-white">
            <div className="container mx-auto px-4 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand Column */}
                    <div className="md:col-span-1 space-y-6">
                        <Link href="/" className="flex flex-col items-start gap-2">
                            <Image
                                src="/images/logo.png"
                                alt="Ananta Systems Logo"
                                width={80}
                                height={80}
                                className="w-20 h-20 object-contain"
                            />
                            <span className="font-heading font-bold text-3xl tracking-tighter text-white">
                                ANANTA<span className="font-light">SYSTEMS</span>
                            </span>
                        </Link>
                        <p className="text-4xl font-bold leading-tight max-w-[200px]">
                            Let there be <span className="text-accent">change</span>.
                        </p>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b-2 border-accent w-8 pb-2">Explore</h3>
                            <ul className="space-y-4">
                                {navigation.main.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b-2 border-accent w-8 pb-2">Services</h3>
                            <ul className="space-y-4">
                                <li><Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
                                <li><Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Automation</Link></li>
                                <li><Link href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Interactive Apps</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6 border-b-2 border-accent w-8 pb-2">Connect</h3>
                            <ul className="space-y-4 mb-6">
                                <li className="flex items-center gap-3 text-sm text-gray-400">
                                    <Mail className="h-4 w-4 text-accent shrink-0" />
                                    <a href="mailto:systemsananta@gmail.com" className="hover:text-white transition-colors">
                                        systemsananta@gmail.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-400">
                                    <Phone className="h-4 w-4 text-accent shrink-0" />
                                    <a href="tel:+61491021526" className="hover:text-white transition-colors">
                                        +61 491 021 526
                                    </a>
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-400">
                                    <MapPin className="h-4 w-4 text-accent shrink-0" />
                                    <span>Sydney, Australia</span>
                                </li>
                            </ul>
                            <div className="flex space-x-4">
                                {navigation.social.filter(item => item.name !== 'Email').map((item) => (
                                    <a key={item.name} href={item.href} className="text-white hover:text-accent transition-colors">
                                        <span className="sr-only">{item.name}</span>
                                        <item.icon className="h-5 w-5" aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Ananta Systems. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Use</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
