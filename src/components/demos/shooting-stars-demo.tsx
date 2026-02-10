"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

function ShootingStar({ delay, duration, left, top }: { delay: number; duration: number; left: string; top: string }) {
    return (
        <motion.div
            className="absolute w-[2px] h-[80px] rounded-full"
            style={{
                left,
                top,
                background: "linear-gradient(to bottom, rgba(255,255,255,0.8), transparent)",
                rotate: "-45deg",
            }}
            initial={{ opacity: 0, y: -100, x: 0 }}
            animate={{
                opacity: [0, 1, 0],
                y: [0, 300],
                x: [0, 150],
            }}
            transition={{
                duration,
                delay,
                repeat: Infinity,
                repeatDelay: delay + 2,
                ease: "linear",
            }}
        />
    );
}

export function ShootingStarsDemo() {
    const stars = useMemo(() =>
        Array.from({ length: 60 }, () => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.5 + 0.2,
        })),
        []);

    const shooters = useMemo(() =>
        Array.from({ length: 5 }, (_, i) => ({
            delay: i * 2.5,
            duration: 1 + Math.random(),
            left: `${10 + Math.random() * 70}%`,
            top: `${Math.random() * 30}%`,
        })),
        []);

    return (
        <div className="relative min-h-[400px] rounded-xl overflow-hidden bg-zinc-950 flex items-center justify-center">
            {/* Static stars */}
            {stars.map((star, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: star.left,
                        top: star.top,
                        width: star.size,
                        height: star.size,
                    }}
                    animate={{ opacity: [star.opacity, star.opacity * 0.3, star.opacity] }}
                    transition={{ duration: 2 + Math.random() * 3, repeat: Infinity }}
                />
            ))}
            {/* Shooting stars */}
            {shooters.map((s, i) => (
                <ShootingStar key={i} {...s} />
            ))}
            <div className="relative z-10 text-center space-y-4">
                <h2 className="text-3xl font-bold text-white">Shooting Stars</h2>
                <p className="text-zinc-400 max-w-md mx-auto">
                    A starry night sky with shooting stars streaking across.
                </p>
            </div>
        </div>
    );
}
