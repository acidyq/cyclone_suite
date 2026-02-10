"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LampEffectDemo() {
    const [key, setKey] = useState(0);

    // Restart animation every 8 seconds for continuous looping
    useEffect(() => {
        const interval = setInterval(() => {
            setKey((prev) => prev + 1);
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[500px] w-full overflow-hidden rounded-xl bg-zinc-950 flex flex-col items-center">
            {/* Lamp base at top */}
            <div className="relative w-full h-8 bg-zinc-900 flex justify-center">
                <div className="absolute -bottom-4 w-20 h-8 bg-zinc-800 rounded-b-full" />
                <div className="absolute -bottom-2 w-4 h-4 bg-zinc-700 rounded-full" />
            </div>

            <AnimatePresence mode="wait">
                <motion.div key={key} className="absolute inset-0 top-8">
                    {/* Light cone */}
                    <motion.div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-2 origin-top"
                        style={{
                            height: "100%",
                            background: "linear-gradient(to bottom, rgba(59, 130, 246, 0.8), transparent)",
                            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                        }}
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{ scaleX: 200, opacity: 1 }}
                        exit={{ scaleX: 0, opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    />

                    {/* Ambient glow layers */}
                    <motion.div
                        className="absolute top-12 w-full"
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        style={{ transformOrigin: "top" }}
                    >
                        <div
                            className="h-[400px] w-full"
                            style={{
                                background: "conic-gradient(from 90deg at 50% 0%, transparent, rgba(59, 130, 246, 0.15) 25%, rgba(139, 92, 246, 0.1) 50%, rgba(59, 130, 246, 0.15) 75%, transparent)",
                            }}
                        />
                    </motion.div>

                    {/* Light rays */}
                    {[-30, -15, 0, 15, 30].map((angle, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-80 origin-top"
                            style={{
                                background: "linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)",
                                transform: `translateX(-50%) rotate(${angle}deg)`,
                            }}
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: 0.5, scaleY: 1 }}
                            exit={{ opacity: 0, scaleY: 0 }}
                            transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        />
                    ))}

                    {/* Content */}
                    <div className="relative z-10 flex h-full items-center justify-center">
                        <div className="text-center">
                            <motion.h2
                                className="text-5xl font-bold text-white mb-4"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ delay: 0.8 }}
                            >
                                Lamp Effect
                            </motion.h2>
                            <motion.p
                                className="text-zinc-400 text-lg"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: 1 }}
                            >
                                Dramatic top-down lighting reveal
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Dust particles in light - always looping */}
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-white/50 rounded-full"
                    style={{
                        left: `${40 + Math.random() * 20}%`,
                        top: `${20 + Math.random() * 50}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, Math.random() * 10 - 5, 0],
                        opacity: [0, 0.8, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 3,
                    }}
                />
            ))}
        </div>
    );
}
