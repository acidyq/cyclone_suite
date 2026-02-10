"use client";

import { motion } from "framer-motion";

export function ShimmerButtonDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8 min-h-[300px] p-8">
            {/* Primary shimmer button */}
            <button className="relative overflow-hidden px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-medium group">
                <span className="relative z-10">Get Started</span>
                <motion.div
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
                />
            </button>

            {/* Gradient shimmer button */}
            <button className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium">
                <span className="relative z-10">Premium</span>
                <motion.div
                    className="absolute inset-0 -translate-x-full"
                    style={{
                        background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                    }}
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                />
            </button>

            {/* Border shimmer button */}
            <div className="relative p-[2px] rounded-xl overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                        backgroundSize: "300% 100%",
                    }}
                    animate={{ backgroundPosition: ["0% 0%", "100% 0%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <button className="relative px-8 py-4 bg-zinc-950 text-white rounded-xl font-medium">
                    Border Shine
                </button>
            </div>

            {/* Subtle shimmer */}
            <button className="relative overflow-hidden px-8 py-4 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 rounded-xl font-medium">
                <span className="relative z-10">Subtle Effect</span>
                <motion.div
                    className="absolute inset-0 -translate-x-full opacity-50"
                    style={{
                        background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.05) 50%, transparent)",
                    }}
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
            </button>
        </div>
    );
}
