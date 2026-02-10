"use client";

import { motion } from "framer-motion";

export function WavyBackgroundDemo() {
    return (
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-gradient-to-b from-blue-950 to-zinc-950">
            {/* Animated wave layers */}
            {[0, 1, 2, 3].map((index) => (
                <motion.div
                    key={index}
                    className="absolute bottom-0 left-0 right-0"
                    style={{
                        height: 120 + index * 30,
                        background: `rgba(59, 130, 246, ${0.15 - index * 0.03})`,
                    }}
                    animate={{
                        d: [
                            `M0 ${60 + index * 10} Q 180 ${20 + index * 5} 360 ${60 + index * 10} T 720 ${60 + index * 10} T 1080 ${60 + index * 10} T 1440 ${60 + index * 10} V 200 H 0 Z`,
                            `M0 ${60 + index * 10} Q 180 ${100 - index * 5} 360 ${60 + index * 10} T 720 ${60 + index * 10} T 1080 ${60 + index * 10} T 1440 ${60 + index * 10} V 200 H 0 Z`,
                        ],
                    }}
                >
                    <svg
                        className="absolute bottom-0 w-[200%] h-full"
                        viewBox="0 0 1440 200"
                        preserveAspectRatio="none"
                    >
                        <motion.path
                            fill={`rgba(59, 130, 246, ${0.2 - index * 0.04})`}
                            animate={{
                                d: [
                                    `M0 ${80 - index * 10} Q 360 ${40 - index * 5} 720 ${80 - index * 10} T 1440 ${80 - index * 10} V 200 H 0 Z`,
                                    `M0 ${80 - index * 10} Q 360 ${120 + index * 5} 720 ${80 - index * 10} T 1440 ${80 - index * 10} V 200 H 0 Z`,
                                    `M0 ${80 - index * 10} Q 360 ${40 - index * 5} 720 ${80 - index * 10} T 1440 ${80 - index * 10} V 200 H 0 Z`,
                                ],
                            }}
                            transition={{
                                duration: 5 + index,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </svg>
                    <motion.div
                        className="absolute inset-0"
                        animate={{ x: [0, -720] }}
                        transition={{
                            duration: 8 + index * 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                </motion.div>
            ))}

            {/* Floating particles */}
            {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-blue-400/60 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        bottom: `${10 + Math.random() * 40}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center">
                <div className="text-center">
                    <motion.h2
                        className="text-4xl font-bold text-white mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Wavy Background
                    </motion.h2>
                    <motion.p
                        className="text-blue-200/70"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Layered ocean waves with smooth animation
                    </motion.p>
                </div>
            </div>
        </div>
    );
}
