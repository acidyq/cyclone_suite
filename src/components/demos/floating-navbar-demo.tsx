"use client";

import { motion, useMotionValueEvent, useScroll, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function FloatingNavbarDemo() {
    const [visible, setVisible] = useState(true);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (current) => {
        const previous = scrollY.getPrevious();
        if (previous !== undefined) {
            if (current < previous || current < 100) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }
    });

    const links = ["Home", "Features", "Pricing", "About"];

    return (
        <div className="min-h-[600px] rounded-xl bg-zinc-100 dark:bg-zinc-950 overflow-auto relative">
            <AnimatePresence>
                {visible && (
                    <motion.nav
                        className="sticky top-4 z-50 mx-auto w-fit"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-center gap-6 px-8 py-3 rounded-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur-lg border border-zinc-200 dark:border-zinc-800 shadow-lg">
                            <span className="font-bold text-zinc-900 dark:text-white">Logo</span>
                            {links.map((link) => (
                                <button key={link} className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition">
                                    {link}
                                </button>
                            ))}
                            <button className="px-4 py-1.5 text-sm rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-medium">
                                Sign Up
                            </button>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            <div className="px-8 pt-20 pb-8 space-y-8">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Scroll to test</h2>
                    <p className="text-zinc-500">The navbar hides when scrolling down and reappears when scrolling up.</p>
                </div>
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="h-32 rounded-xl bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800" />
                ))}
            </div>
        </div>
    );
}
