"use client";

import { motion } from "framer-motion";

export function SparklesDemo() {
    const sparkles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 4 + Math.random() * 8,
        delay: Math.random() * 2,
        duration: 1 + Math.random() * 2,
    }));

    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] p-8">
            {/* Sparkle text */}
            <div className="relative">
                <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100">
                    ✨ Sparkle Effect ✨
                </h2>

                {/* Sparkle particles */}
                {sparkles.map((sparkle) => (
                    <motion.div
                        key={sparkle.id}
                        className="absolute pointer-events-none"
                        style={{
                            left: `${sparkle.x}%`,
                            top: `${sparkle.y}%`,
                        }}
                        animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            rotate: [0, 180],
                        }}
                        transition={{
                            duration: sparkle.duration,
                            delay: sparkle.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <svg
                            width={sparkle.size}
                            height={sparkle.size}
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
                                fill="currentColor"
                                className="text-yellow-400"
                            />
                        </svg>
                    </motion.div>
                ))}
            </div>

            {/* Sparkle button */}
            <div className="relative mt-12">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium">
                    Hover for sparkles
                </button>

                {/* Button sparkles */}
                {Array.from({ length: 10 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute pointer-events-none"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            delay: i * 0.2,
                            repeat: Infinity,
                        }}
                    >
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" fill="white" />
                        </svg>
                    </motion.div>
                ))}
            </div>

            <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
                Add magical sparkle animations to any element
            </p>
        </div>
    );
}
