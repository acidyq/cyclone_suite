"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, MouseEvent } from "react";

export function TooltipCardDemo() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    function handleMouseMove(e: MouseEvent) {
        setPosition({ x: e.clientX, y: e.clientY });
    }

    const items = [
        { name: "React", desc: "A JavaScript library for building user interfaces", color: "from-cyan-500 to-blue-600" },
        { name: "Next.js", desc: "The React framework for production", color: "from-zinc-700 to-zinc-900" },
        { name: "Tailwind", desc: "Utility-first CSS framework for rapid UI", color: "from-sky-400 to-cyan-600" },
        { name: "TypeScript", desc: "Typed JavaScript at any scale", color: "from-blue-600 to-blue-800" },
        { name: "Framer Motion", desc: "Production-ready motion library for React", color: "from-purple-500 to-pink-600" },
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl" onMouseMove={handleMouseMove}>
            <h3 className="text-xl font-bold text-white mb-8">Hover over the items</h3>
            <div className="flex flex-wrap gap-3 justify-center relative">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="relative"
                        onMouseEnter={() => setHoveredIndex(i)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <button className="px-5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-sm hover:bg-zinc-800 transition">
                            {item.name}
                        </button>
                        <AnimatePresence>
                            {hoveredIndex === i && (
                                <motion.div
                                    className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-48 z-50"
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <div className="rounded-xl overflow-hidden shadow-2xl border border-zinc-800">
                                        <div className={`h-16 bg-gradient-to-br ${item.color}`} />
                                        <div className="bg-zinc-900 p-3">
                                            <p className="text-white text-sm font-medium">{item.name}</p>
                                            <p className="text-zinc-400 text-xs mt-1">{item.desc}</p>
                                        </div>
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
