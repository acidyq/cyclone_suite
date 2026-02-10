"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, MouseEvent } from "react";

function MaskReveal({ children, revealContent, className = "" }: { children: React.ReactNode; revealContent: React.ReactNode; className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    function handleMouseMove(e: MouseEvent) {
        if (!containerRef.current) return;
        const { left, top } = containerRef.current.getBoundingClientRect();
        setPos({ x: e.clientX - left, y: e.clientY - top });
    }

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden cursor-none ${className}`}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            WebkitMaskImage: `radial-gradient(180px circle at ${pos.x}px ${pos.y}px, black 40%, transparent 100%)`,
                            maskImage: `radial-gradient(180px circle at ${pos.x}px ${pos.y}px, black 40%, transparent 100%)`,
                        }}
                    >
                        {revealContent}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function SvgMaskEffectDemo() {
    return (
        <div className="space-y-8 p-8">
            <MaskReveal
                className="h-64 rounded-2xl border border-zinc-200 dark:border-zinc-800"
                revealContent={
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-violet-600 to-indigo-600">
                        <p className="text-3xl font-bold text-white">✨ Hidden Content Revealed!</p>
                    </div>
                }
            >
                <div className="flex items-center justify-center h-full bg-zinc-100 dark:bg-zinc-900">
                    <p className="text-zinc-400 text-lg">Hover to reveal what&apos;s underneath</p>
                </div>
            </MaskReveal>

            <MaskReveal
                className="h-48 rounded-2xl border border-zinc-200 dark:border-zinc-800"
                revealContent={
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-pink-500 to-rose-600">
                        <p className="text-2xl font-bold text-white">🎯 Secret Layer</p>
                    </div>
                }
            >
                <div className="flex items-center justify-center h-full bg-zinc-100 dark:bg-zinc-900">
                    <div className="text-center space-y-2">
                        <p className="text-zinc-600 dark:text-zinc-300 text-lg font-medium">SVG Mask Effect</p>
                        <p className="text-zinc-400 text-sm">Move your cursor to reveal</p>
                    </div>
                </div>
            </MaskReveal>
        </div>
    );
}
