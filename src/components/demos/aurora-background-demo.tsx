"use client";

import { motion } from "framer-motion";

export function AuroraBackgroundDemo() {
    return (
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-zinc-950">
            {/* Aurora gradients */}
            <div className="absolute inset-0">
                {/* Base gradient blur layer */}
                <motion.div
                    className="absolute -inset-[10%] opacity-50"
                    style={{
                        background: "radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.4), transparent 50%)",
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Green aurora glow */}
                <motion.div
                    className="absolute -inset-[10%] mix-blend-overlay"
                    style={{
                        background: "radial-gradient(ellipse at 60% 40%, rgba(34, 197, 94, 0.3), transparent 50%)",
                    }}
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [-20, 40, -20],
                        y: [20, -20, 20],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Blue aurora glow */}
                <motion.div
                    className="absolute -inset-[10%] mix-blend-overlay"
                    style={{
                        background: "radial-gradient(ellipse at 40% 60%, rgba(59, 130, 246, 0.4), transparent 50%)",
                    }}
                    animate={{
                        scale: [1, 1.3, 1],
                        x: [20, -30, 20],
                        y: [-20, 30, -20],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Purple aurora accent */}
                <motion.div
                    className="absolute -inset-[10%] mix-blend-color-dodge opacity-30"
                    style={{
                        background: "radial-gradient(ellipse at 30% 70%, rgba(168, 85, 247, 0.4), transparent 40%)",
                    }}
                    animate={{
                        scale: [1.1, 0.9, 1.1],
                        rotate: [0, 10, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* Noise texture overlay */}
                <div
                    className="absolute inset-0 mix-blend-overlay opacity-40"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                <motion.h2
                    className="text-4xl font-bold text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Aurora Background
                </motion.h2>
                <motion.p
                    className="text-zinc-400 max-w-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Beautiful northern lights effect with animated gradients
                </motion.p>
            </div>
        </div>
    );
}
