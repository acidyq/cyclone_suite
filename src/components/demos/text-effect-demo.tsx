"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TextEffectDemo() {
    const [key, setKey] = useState(0);

    // Restart animations every 6 seconds for continuous looping
    useEffect(() => {
        const interval = setInterval(() => {
            setKey((prev) => prev + 1);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center gap-12 min-h-[500px] p-8">
            <AnimatePresence mode="wait">
                <motion.div key={key} className="flex flex-col items-center gap-12">
                    {/* Fade up stagger */}
                    <div className="text-center">
                        <p className="text-xs text-zinc-500 mb-2">Fade Up Stagger</p>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                            {"Welcome to Cyclone".split(" ").map((word, i) => (
                                <motion.span
                                    key={i}
                                    className="inline-block mr-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </h2>
                    </div>

                    {/* Blur in */}
                    <div className="text-center">
                        <p className="text-xs text-zinc-500 mb-2">Blur In Effect</p>
                        <motion.h2
                            className="text-3xl font-bold text-zinc-900 dark:text-zinc-100"
                            initial={{ opacity: 0, filter: "blur(10px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, filter: "blur(10px)" }}
                            transition={{ duration: 0.8 }}
                        >
                            Crystal Clear Text
                        </motion.h2>
                    </div>

                    {/* Letter by letter */}
                    <div className="text-center">
                        <p className="text-xs text-zinc-500 mb-2">Letter Animation</p>
                        <h2 className="text-3xl font-bold">
                            {"ANIMATE".split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
                                    initial={{ opacity: 0, y: -20, rotateX: 90 }}
                                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                    exit={{ opacity: 0, y: 20, rotateX: -90 }}
                                    transition={{
                                        delay: i * 0.05,
                                        type: "spring",
                                        stiffness: 200,
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </h2>
                    </div>

                    {/* Scale bounce */}
                    <div className="text-center">
                        <p className="text-xs text-zinc-500 mb-2">Scale Bounce</p>
                        <motion.h2
                            className="text-3xl font-bold text-zinc-900 dark:text-zinc-100"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        >
                            Bouncy Entrance
                        </motion.h2>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Highlight sweep - always looping */}
            <div className="text-center">
                <p className="text-xs text-zinc-500 mb-2">Highlight Sweep</p>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 relative overflow-hidden">
                    <span>Premium Quality</span>
                    <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                    />
                </h2>
            </div>

            {/* Wave effect - always looping */}
            <div className="text-center">
                <p className="text-xs text-zinc-500 mb-2">Wave Effect</p>
                <h2 className="text-3xl font-bold">
                    {"WAVE TEXT".split("").map((char, i) => (
                        <motion.span
                            key={i}
                            className="inline-block text-zinc-900 dark:text-zinc-100"
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.05,
                                repeat: Infinity,
                                repeatDelay: 1,
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </h2>
            </div>
        </div>
    );
}
