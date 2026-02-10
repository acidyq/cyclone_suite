"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`group relative rounded-2xl border border-zinc-800 bg-zinc-900/80 p-8 overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(400px circle at ${mouseX}px ${mouseY}px,
                        rgba(14, 165, 233, 0.15),
                        transparent 80%)
                    `,
                }}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
}

export function CardSpotlightDemo() {
    const cards = [
        { icon: "🚀", title: "Deployment", desc: "One-click deploy to any cloud provider." },
        { icon: "🔐", title: "Security", desc: "Enterprise-grade encryption built in." },
        { icon: "📊", title: "Analytics", desc: "Real-time insights and monitoring." },
        { icon: "🔄", title: "Sync", desc: "Automatic cross-device synchronization." },
    ];

    return (
        <div className="grid md:grid-cols-2 gap-6 p-8 bg-zinc-950 rounded-xl min-h-[400px]">
            {cards.map((card) => (
                <SpotlightCard key={card.title}>
                    <div className="text-3xl mb-4">{card.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                    <p className="text-zinc-400 text-sm">{card.desc}</p>
                </SpotlightCard>
            ))}
        </div>
    );
}
