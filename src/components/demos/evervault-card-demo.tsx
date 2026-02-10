"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, useMemo } from "react";

function EvervaultCard() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // useMotionTemplate must be called at component top-level (hooks rule)
    const maskImage = useMotionTemplate`
        radial-gradient(250px circle at ${mouseX}px ${mouseY}px,
        rgba(139, 92, 246, 0.3),
        rgba(59, 130, 246, 0.15) 50%,
        transparent 100%)
    `;

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    const randomText = useMemo(
        () => Array.from({ length: 1500 }, () => chars[Math.floor(Math.random() * chars.length)]).join(""),
        []
    );

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="group relative h-64 w-full rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden cursor-crosshair p-1"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: maskImage }}
            />
            <div className="absolute inset-0 overflow-hidden">
                <p className="text-[10px] leading-[14px] font-mono text-zinc-700 group-hover:text-zinc-500 transition-colors break-all select-none p-2">
                    {randomText}
                </p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center relative z-10">
                    <h3 className="text-xl font-bold text-white">Evervault Card</h3>
                    <p className="text-zinc-400 text-sm mt-2">Hover to reveal gradient</p>
                </div>
            </div>
        </div>
    );
}

export function EvervaultCardDemo() {
    return (
        <div className="grid md:grid-cols-2 gap-6 p-8 bg-zinc-950 rounded-xl min-h-[400px]">
            <EvervaultCard />
            <EvervaultCard />
        </div>
    );
}
