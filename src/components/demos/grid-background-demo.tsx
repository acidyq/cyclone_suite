"use client";

import { motion } from "framer-motion";

export function GridBackgroundDemo() {
    return (
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-zinc-950">
            {/* Static grid */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Animated highlight cells */}
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-10 h-10 border border-blue-500/30"
                    style={{
                        left: `${Math.floor(Math.random() * 20) * 40}px`,
                        top: `${Math.floor(Math.random() * 10) * 40}px`,
                    }}
                    animate={{
                        opacity: [0, 0.5, 0],
                        scale: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                    }}
                />
            ))}

            {/* Scanning line */}
            <motion.div
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                animate={{ top: ["-5%", "105%"] }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Radial gradient overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.8) 100%)",
                }}
            />

            {/* Dot grid overlay */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                    backgroundPosition: "20px 20px",
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center">
                <div className="text-center">
                    <motion.h2
                        className="text-4xl font-bold text-white mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Grid Background
                    </motion.h2>
                    <motion.p
                        className="text-zinc-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Animated grid with scanning effects
                    </motion.p>
                </div>
            </div>
        </div>
    );
}
