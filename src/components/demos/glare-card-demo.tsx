"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

function GlareCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`group relative rounded-2xl border border-zinc-800 bg-zinc-900 p-8 overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(350px circle at ${mouseX}px ${mouseY}px,
                        rgba(120, 119, 198, 0.15),
                        transparent 80%)
                    `,
                }}
            />
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(200px circle at ${mouseX}px ${mouseY}px,
                        rgba(255, 255, 255, 0.1),
                        transparent 80%)
                    `,
                }}
            />
            {children}
        </div>
    );
}

export function GlareCardDemo() {
    return (
        <div className="grid md:grid-cols-3 gap-6 p-8 bg-zinc-950 rounded-xl min-h-[400px]">
            <GlareCard>
                <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                        <span className="text-indigo-400 text-xl">⚡</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
                    <p className="text-zinc-400 text-sm">Optimized for performance with zero runtime overhead.</p>
                </div>
            </GlareCard>
            <GlareCard>
                <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                        <span className="text-purple-400 text-xl">🎨</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Beautiful Design</h3>
                    <p className="text-zinc-400 text-sm">Crafted with attention to every pixel and interaction.</p>
                </div>
            </GlareCard>
            <GlareCard>
                <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                        <span className="text-cyan-400 text-xl">🔒</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Type Safe</h3>
                    <p className="text-zinc-400 text-sm">Built with TypeScript for excellent developer experience.</p>
                </div>
            </GlareCard>
        </div>
    );
}
