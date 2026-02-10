"use client";

import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";

function WobbleCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, translateZ: 0 });

    function handleMouseMove(e: MouseEvent) {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        setTransform({ rotateX: -y, rotateY: x, translateZ: 10 });
    }

    return (
        <motion.div
            className={`relative overflow-hidden rounded-2xl ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setTransform({ rotateX: 0, rotateY: 0, translateZ: 0 })}
            animate={transform}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            style={{ perspective: 1000, transformStyle: "preserve-3d" }}
        >
            {children}
        </motion.div>
    );
}

export function WobbleCardDemo() {
    return (
        <div className="grid md:grid-cols-2 gap-6 p-8 min-h-[500px]">
            <WobbleCard className="bg-gradient-to-br from-pink-500/20 to-purple-600/20 border border-pink-500/20 p-8 col-span-1">
                <div className="space-y-4">
                    <span className="text-sm font-medium text-pink-400 uppercase tracking-wider">Effect</span>
                    <h3 className="text-2xl font-bold text-white">Wobble on Move</h3>
                    <p className="text-zinc-400 text-sm max-w-xs">
                        The card translates and scales based on mouse position, creating a physical wobble effect.
                    </p>
                </div>
            </WobbleCard>
            <WobbleCard className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border border-blue-500/20 p-8">
                <div className="space-y-4">
                    <span className="text-sm font-medium text-blue-400 uppercase tracking-wider">Interactive</span>
                    <h3 className="text-2xl font-bold text-white">Spring Physics</h3>
                    <p className="text-zinc-400 text-sm max-w-xs">
                        Uses spring animations for smooth, natural-feeling motion.
                    </p>
                </div>
            </WobbleCard>
            <WobbleCard className="bg-gradient-to-br from-emerald-500/20 to-teal-600/20 border border-emerald-500/20 p-8 md:col-span-2">
                <div className="space-y-4 text-center">
                    <span className="text-sm font-medium text-emerald-400 uppercase tracking-wider">Feature Card</span>
                    <h3 className="text-3xl font-bold text-white">Wide Wobble Card</h3>
                    <p className="text-zinc-400 max-w-md mx-auto">
                        Perfect for feature sections — the subtle motion draws attention without being distracting.
                    </p>
                </div>
            </WobbleCard>
        </div>
    );
}
