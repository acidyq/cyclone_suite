"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

function GlowingCard({ children }: { children: React.ReactNode }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div className="group relative" onMouseMove={handleMouseMove}>
            <motion.div
                className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: useMotionTemplate`
                        conic-gradient(from 0deg at ${mouseX}px ${mouseY}px,
                        #3b82f6, #8b5cf6, #ec4899, #f59e0b, #10b981, #3b82f6)
                    `,
                }}
            />
            <div className="relative rounded-2xl bg-zinc-900 p-6 border border-zinc-800 group-hover:border-transparent transition-colors duration-500">
                {children}
            </div>
        </div>
    );
}

export function GlowingEffectDemo() {
    return (
        <div className="grid md:grid-cols-3 gap-6 p-8 bg-zinc-950 rounded-xl min-h-[400px]">
            {[
                { icon: "🖥️", title: "Cursor Style", desc: "A border glow effect as seen on Cursor's website." },
                { icon: "🌈", title: "Conic Gradient", desc: "Follows mouse with smooth conic color rotation." },
                { icon: "✨", title: "Adaptive", desc: "Works on any container size or shape." },
            ].map((card) => (
                <GlowingCard key={card.title}>
                    <span className="text-3xl block mb-3">{card.icon}</span>
                    <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                    <p className="text-zinc-400 text-sm">{card.desc}</p>
                </GlowingCard>
            ))}
        </div>
    );
}
