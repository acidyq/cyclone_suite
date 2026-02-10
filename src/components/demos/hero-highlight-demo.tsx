"use client";

import { motion } from "framer-motion";

export function HeroHighlightDemo() {
    return (
        <div className="relative min-h-[400px] rounded-xl overflow-hidden bg-zinc-950 flex items-center justify-center p-8">
            {/* Radial gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.15)_0%,_transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(139,92,246,0.1)_0%,_transparent_60%)]" />

            <div className="relative text-center space-y-6">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-white leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Build with{" "}
                    <motion.span
                        className="relative inline-block"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <span className="relative z-10">confidence</span>
                        <motion.span
                            className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-sm -z-0"
                            initial={{ scaleX: 0, originX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                        />
                    </motion.span>
                </motion.h1>
                <motion.p
                    className="text-zinc-400 text-lg max-w-md mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    A hero section with subtle background effects and animated text highlights.
                </motion.p>
                <motion.div
                    className="flex gap-4 justify-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <button className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition">
                        Get Started
                    </button>
                    <button className="px-6 py-3 rounded-lg border border-zinc-700 text-white hover:bg-zinc-800 transition">
                        Learn More
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
