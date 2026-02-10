"use client";

import { motion } from "framer-motion";

export function VortexBackgroundDemo() {
    return (
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-zinc-950">
            {/* Vortex rings */}
            <div className="absolute inset-0 flex items-center justify-center">
                {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full border border-blue-500/30"
                        style={{
                            width: 100 + i * 80,
                            height: 100 + i * 80,
                        }}
                        animate={{
                            rotate: i % 2 === 0 ? 360 : -360,
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            rotate: {
                                duration: 10 + i * 2,
                                repeat: Infinity,
                                ease: "linear",
                            },
                            scale: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.2,
                            },
                        }}
                    />
                ))}
            </div>

            {/* Spinning particles */}
            {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                    key={`particle-${i}`}
                    className="absolute w-1 h-1 bg-blue-400 rounded-full"
                    style={{
                        left: "50%",
                        top: "50%",
                    }}
                    animate={{
                        x: [0, Math.cos((i / 30) * Math.PI * 2) * (100 + Math.random() * 150)],
                        y: [0, Math.sin((i / 30) * Math.PI * 2) * (100 + Math.random() * 150)],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeOut",
                    }}
                />
            ))}

            {/* Center glow */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    className="w-32 h-32 rounded-full bg-blue-500/20 blur-xl"
                    animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center">
                <div className="text-center">
                    <motion.h2
                        className="text-4xl font-bold text-white mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Vortex Background
                    </motion.h2>
                    <motion.p
                        className="text-zinc-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Swirling particles drawn into the center
                    </motion.p>
                </div>
            </div>
        </div>
    );
}
