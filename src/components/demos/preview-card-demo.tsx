"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function PreviewCardDemo() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
    const links = [
        { url: "github.com/cyclone", title: "Cyclone Suite", desc: "Open-source React components with stunning animations", gradient: "from-zinc-700 to-zinc-900" },
        { url: "nextjs.org", title: "Next.js", desc: "The React framework for the web", gradient: "from-black to-zinc-800" },
        { url: "framer.com/motion", title: "Framer Motion", desc: "A production-ready motion library for React", gradient: "from-purple-600 to-pink-600" },
    ];
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl space-y-6">
            <h3 className="text-xl font-bold text-white">Preview Card</h3>
            <p className="text-zinc-400 text-sm">Hover over links to preview</p>
            <div className="space-y-3 w-full max-w-xs">
                {links.map((link, i) => (
                    <div key={i} className="relative"
                        onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)}>
                        <a className="text-blue-400 hover:text-blue-300 underline decoration-blue-400/30 hover:decoration-blue-300 text-sm cursor-pointer">
                            {link.url}
                        </a>
                        <AnimatePresence>
                            {hoveredIdx === i && (
                                <motion.div className="absolute bottom-full mb-3 left-0 w-64 z-50 rounded-xl overflow-hidden shadow-2xl border border-zinc-700"
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }}>
                                    <div className={`h-20 bg-gradient-to-br ${link.gradient}`} />
                                    <div className="bg-zinc-800 p-3">
                                        <p className="text-white text-sm font-medium">{link.title}</p>
                                        <p className="text-zinc-400 text-xs mt-1">{link.desc}</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
