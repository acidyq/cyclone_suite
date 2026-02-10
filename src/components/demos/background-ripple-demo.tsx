"use client";

import { motion } from "framer-motion";

export function BackgroundRippleDemo() {
    const gridSize = 12;
    const cells = Array.from({ length: gridSize * gridSize });

    return (
        <div className="min-h-[400px] rounded-xl overflow-hidden bg-zinc-950 flex items-center justify-center p-4 relative">
            <div
                className="grid gap-[1px] absolute inset-0"
                style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
            >
                {cells.map((_, i) => (
                    <motion.div
                        key={i}
                        className="aspect-square bg-zinc-900 hover:bg-indigo-500/30 cursor-pointer"
                        whileHover={{
                            backgroundColor: "rgba(99, 102, 241, 0.3)",
                            transition: { duration: 0.1 },
                        }}
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>
            <div className="relative z-10 text-center space-y-4">
                <h2 className="text-3xl font-bold text-white">Background Ripple</h2>
                <p className="text-zinc-400 max-w-sm mx-auto text-sm">
                    A grid of cells that subtly pulse and light up on hover.
                </p>
            </div>
        </div>
    );
}
