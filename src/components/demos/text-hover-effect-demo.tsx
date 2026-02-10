"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export function TextHoverEffectDemo() {
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - left) / width);
        mouseY.set((e.clientY - top) / height);
    }

    return (
        <div className="flex items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl" onMouseMove={handleMouseMove}>
            <div className="relative">
                {/* Base text */}
                <h1 className="text-6xl md:text-8xl font-black text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}>
                    CYCLONE
                </h1>
                {/* Gradient overlay that follows mouse */}
                <motion.h1
                    className="text-6xl md:text-8xl font-black absolute inset-0 bg-clip-text text-transparent"
                    style={{
                        backgroundImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX.get() * 100}% ${mouseY.get() * 100}%, #3b82f6, #8b5cf6, #ec4899, transparent 80%)`,
                        WebkitTextStroke: "1px rgba(255,255,255,0.1)",
                        WebkitBackgroundClip: "text",
                    }}
                >
                    CYCLONE
                </motion.h1>
            </div>
        </div>
    );
}
