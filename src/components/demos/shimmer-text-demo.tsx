"use client";

import { motion } from "framer-motion";

export function ShimmerTextDemo() {
    return (
        <div className="flex flex-col items-center gap-6">
            <div className="relative">
                <motion.h2
                    className="text-5xl font-bold tracking-tight bg-gradient-to-r from-zinc-500 via-zinc-100 to-zinc-500 dark:from-zinc-400 dark:via-white dark:to-zinc-400 bg-clip-text text-transparent"
                    style={{
                        backgroundSize: "200% 100%",
                    }}
                    animate={{
                        backgroundPosition: ["100% 0%", "-100% 0%"],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    Shimmer Text
                </motion.h2>
            </div>

            <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center max-w-sm">
                A continuous shimmer effect using CSS gradients and Framer Motion
            </p>
        </div>
    );
}
