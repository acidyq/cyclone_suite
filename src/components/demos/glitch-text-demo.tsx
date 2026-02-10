"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function GlitchTextDemo() {
    const [isGlitching, setIsGlitching] = useState(false);
    const text = "GLITCH";

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 200);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="relative">
                {/* Main text */}
                <motion.h2
                    className="text-6xl font-black tracking-tighter text-zinc-900 dark:text-zinc-100"
                    animate={isGlitching ? {
                        x: [0, -2, 3, -1, 0],
                        y: [0, 1, -2, 1, 0],
                    } : {}}
                    transition={{ duration: 0.2 }}
                >
                    {text}
                </motion.h2>

                {/* Glitch layers */}
                {isGlitching && (
                    <>
                        <motion.h2
                            className="absolute inset-0 text-6xl font-black tracking-tighter text-red-500 opacity-70"
                            style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
                            animate={{ x: [-5, 5, -3, 0] }}
                            transition={{ duration: 0.2 }}
                        >
                            {text}
                        </motion.h2>
                        <motion.h2
                            className="absolute inset-0 text-6xl font-black tracking-tighter text-cyan-500 opacity-70"
                            style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)" }}
                            animate={{ x: [5, -5, 3, 0] }}
                            transition={{ duration: 0.2 }}
                        >
                            {text}
                        </motion.h2>
                    </>
                )}
            </div>

            <button
                onClick={() => {
                    setIsGlitching(true);
                    setTimeout(() => setIsGlitching(false), 200);
                }}
                className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
                Trigger Glitch
            </button>

            <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                Glitch effect triggers automatically every 3 seconds
            </p>
        </div>
    );
}
