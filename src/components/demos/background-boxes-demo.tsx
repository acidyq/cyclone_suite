"use client";

import { motion } from "framer-motion";

export function BackgroundBoxesDemo() {
    const rows = 8;
    const cols = 12;
    const colors = [
        "rgba(59, 130, 246, 0.3)",
        "rgba(139, 92, 246, 0.3)",
        "rgba(236, 72, 153, 0.3)",
        "rgba(16, 185, 129, 0.3)",
        "rgba(245, 158, 11, 0.3)",
        "rgba(20, 184, 166, 0.3)",
    ];

    return (
        <div className="relative min-h-[400px] rounded-xl overflow-hidden bg-zinc-950 flex items-center justify-center">
            <div
                className="absolute inset-0 grid gap-[1px]"
                style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}
            >
                {Array.from({ length: rows * cols }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="bg-zinc-900/50 hover:bg-opacity-100 transition-colors cursor-pointer"
                        whileHover={{
                            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                            transition: { duration: 0 },
                        }}
                    />
                ))}
            </div>
            <div className="relative z-10 text-center space-y-4 pointer-events-none">
                <h2 className="text-3xl font-bold text-white">Background Boxes</h2>
                <p className="text-zinc-400 text-sm max-w-md mx-auto">
                    Hover over the grid cells to light them up with random colors.
                </p>
            </div>
        </div>
    );
}
