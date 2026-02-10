"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, MouseEvent } from "react";

export function AnimatedTooltipDemo() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    const people = [
        { name: "Alex Chen", role: "Designer", color: "from-pink-500 to-rose-600" },
        { name: "Sam Rivera", role: "Engineer", color: "from-blue-500 to-indigo-600" },
        { name: "Jordan Lee", role: "PM", color: "from-emerald-500 to-teal-600" },
        { name: "Taylor Kim", role: "DevOps", color: "from-amber-500 to-orange-600" },
        { name: "Casey Park", role: "QA", color: "from-violet-500 to-purple-600" },
    ];

    return (
        <div className="flex items-center justify-center min-h-[300px] p-8 bg-zinc-950 rounded-xl">
            <div className="flex -space-x-3">
                {people.map((person, i) => (
                    <div
                        key={i}
                        className="relative"
                        onMouseEnter={() => setHoveredIdx(i)}
                        onMouseLeave={() => setHoveredIdx(null)}
                    >
                        <AnimatePresence>
                            {hoveredIdx === i && (
                                <motion.div
                                    className="absolute -top-14 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 shadow-xl z-50 whitespace-nowrap"
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                    transition={{ duration: 0.15 }}
                                >
                                    <p className="text-white text-xs font-medium">{person.name}</p>
                                    <p className="text-zinc-400 text-[10px]">{person.role}</p>
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-zinc-800 rotate-45 border-r border-b border-zinc-700" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <motion.div
                            className={`w-12 h-12 rounded-full bg-gradient-to-br ${person.color} border-2 border-zinc-950 flex items-center justify-center cursor-pointer`}
                            whileHover={{ scale: 1.15, y: -5, zIndex: 30 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <span className="text-white text-sm font-bold">{person.name.charAt(0)}</span>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
}
