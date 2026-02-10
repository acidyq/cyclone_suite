"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, MouseEvent } from "react";

export function FollowingPointerDemo() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    function handleMouseMove(e: MouseEvent) {
        if (!containerRef.current) return;
        const { left, top } = containerRef.current.getBoundingClientRect();
        setPos({ x: e.clientX - left, y: e.clientY - top });
    }

    return (
        <div className="flex items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl">
            <div
                ref={containerRef}
                className="relative w-full max-w-md aspect-[4/3] rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden cursor-none"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white">Following Pointer</h3>
                    <p className="text-zinc-400 text-sm">
                        A custom pointer that follows the mouse. Hover over this card to see the effect with custom content.
                    </p>
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="h-20 rounded-lg bg-zinc-800" />
                        <div className="h-20 rounded-lg bg-zinc-800" />
                    </div>
                </div>

                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            className="absolute pointer-events-none z-50"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                x: pos.x - 5,
                                y: pos.y - 5,
                            }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        >
                            {/* Custom pointer */}
                            <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                            <motion.div
                                className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs whitespace-nowrap shadow-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.1 }}
                            >
                                Hover content ✨
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
