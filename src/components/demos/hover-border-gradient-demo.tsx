"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function HoverBorderGradientDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-6 min-h-[400px] p-8 bg-zinc-950 rounded-xl">
            {[
                { label: "Get Started", gradient: "from-blue-500 via-purple-500 to-pink-500" },
                { label: "Star on GitHub", gradient: "from-emerald-500 via-teal-500 to-cyan-500" },
                { label: "Documentation", gradient: "from-amber-500 via-orange-500 to-red-500" },
            ].map((btn) => (
                <motion.div
                    key={btn.label}
                    className="group relative rounded-full p-[2px] overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                >
                    {/* Animated gradient border */}
                    <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${btn.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: "center center" }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${btn.gradient} opacity-30`} />
                    <button className="relative px-8 py-3 rounded-full bg-zinc-950 text-white font-medium text-sm z-10 group-hover:bg-zinc-900 transition">
                        {btn.label}
                    </button>
                </motion.div>
            ))}

            <div className="w-full mt-4">
                <motion.div
                    className="group relative rounded-2xl p-[1px] overflow-hidden max-w-sm mx-auto"
                    whileHover={{ scale: 1.02 }}
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 opacity-30 group-hover:opacity-100 transition-opacity"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="relative bg-zinc-950 rounded-2xl p-6">
                        <h3 className="text-white font-semibold mb-2">Hover Border Gradient</h3>
                        <p className="text-zinc-400 text-sm">Works on buttons, cards, or any container.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
