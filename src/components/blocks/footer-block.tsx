"use client";

import { motion } from "framer-motion";
import { Twitter, Github, Linkedin, Mail, Heart, Sparkles } from "lucide-react";

const footerLinks = {
    product: [
        { name: "Components", href: "#" },
        { name: "Blocks", href: "#" },
        { name: "Templates", href: "#" },
        { name: "Changelog", href: "#" },
    ],
    resources: [
        { name: "Documentation", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Changelog", href: "#" },
    ],
    company: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Press", href: "#" },
    ],
    legal: [
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" },
        { name: "License", href: "#" },
    ],
};

export function FooterBlockDemo() {
    return (
        <div className="space-y-16">
            {/* Footer Variant 1: Full Footer with Newsletter */}
            <div className="rounded-2xl bg-zinc-900 dark:bg-zinc-950 p-8 md:p-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
                                <Sparkles className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">Cyclone Suite</span>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-zinc-400 mb-6 max-w-sm"
                        >
                            Open-source React components with stunning animations. Build beautiful web applications faster.
                        </motion.p>

                        {/* Newsletter */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <p className="text-sm text-white font-medium mb-2">Subscribe to our newsletter</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 text-sm"
                                />
                                <button className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors text-sm font-medium">
                                    Subscribe
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Links */}
                    {Object.entries(footerLinks).slice(0, 3).map(([category, links], i) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * (i + 3) }}
                        >
                            <h4 className="text-white font-semibold mb-4 capitalize">{category}</h4>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-zinc-400 hover:text-white transition-colors text-sm">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-400 text-sm">
                        © 2026 Cyclone Suite. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-zinc-400 hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer Variant 2: Simple Centered */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8 md:p-12 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 mb-6"
                >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Cyclone Suite</span>
                </motion.div>

                <motion.nav
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-6 mb-8"
                >
                    {["Components", "Blocks", "Templates", "Docs", "GitHub", "Blog"].map((item) => (
                        <a key={item} href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-sm">
                            {item}
                        </a>
                    ))}
                </motion.nav>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center gap-4 mb-8"
                >
                    <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                        <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                        <Github className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                        <Mail className="w-4 h-4" />
                    </a>
                </motion.div>

                <p className="text-zinc-500 dark:text-zinc-400 text-sm flex items-center justify-center gap-1">
                    Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by the Cyclone team
                </p>
            </div>

            {/* Footer Variant 3: Minimal Bar */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
                            <Sparkles className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100">Cyclone Suite</span>
                    </div>

                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.legal.map((link) => (
                            <a key={link.name} href={link.href} className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-sm">
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <p className="text-zinc-500 text-sm">© 2026 All rights reserved</p>
                </div>
            </div>
        </div>
    );
}
