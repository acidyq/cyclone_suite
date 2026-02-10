"use client";

import { motion } from "framer-motion";

export function SpinningTextDemo() {
    const text = "CYCLONE SUITE • PREMIUM COMPONENTS • ";
    const characters = text.split("");

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
            <div className="relative w-64 h-64">
                {/* Outer spinning text */}
                <motion.div
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    {characters.map((char, i) => (
                        <span
                            key={i}
                            className="absolute left-1/2 text-sm font-medium text-zinc-600 dark:text-zinc-400"
                            style={{
                                transform: `rotate(${i * (360 / characters.length)}deg) translateY(-120px)`,
                                transformOrigin: "0 120px",
                            }}
                        >
                            {char}
                        </span>
                    ))}
                </motion.div>

                {/* Inner counter-spinning ring */}
                <motion.div
                    className="absolute inset-8 rounded-full border-2 border-dashed border-zinc-300 dark:border-zinc-700"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        className="text-center"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <span className="text-4xl">⚡</span>
                        <p className="mt-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Cyclone Suite
                        </p>
                    </motion.div>
                </div>
            </div>

            <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400 text-center max-w-sm">
                Circular text rotating around a center element with opposing rotation directions
            </p>
        </div>
    );
}
