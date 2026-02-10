"use client";

import { motion } from "framer-motion";

export function LoaderDemo() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 text-center">
            {/* Animated Loader Ring */}
            <div className="relative w-24 h-24">
                {/* Outer ring with gradient */}
                <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                        background: "conic-gradient(from 0deg, transparent, rgba(134, 142, 150, 0.3), rgba(134, 142, 150, 0.6), rgba(134, 142, 150, 0.3), transparent)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />

                {/* Inner circle mask */}
                <div className="absolute inset-2 rounded-full bg-zinc-50 dark:bg-zinc-900" />

                {/* Shimmer effect */}
                <motion.div
                    className="absolute inset-0 rounded-full overflow-hidden"
                    style={{
                        background: "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)",
                    }}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            {/* Text Content */}
            <div className="space-y-2 max-w-sm">
                <motion.h3
                    className="text-lg font-medium text-zinc-900 dark:text-zinc-100"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Configuring your account...
                </motion.h3>
                <motion.p
                    className="text-sm text-zinc-500 dark:text-zinc-400"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Please wait while we prepare everything for you
                </motion.p>
            </div>
        </div>
    );
}

// Alternative loader styles
export function PulseLoader() {
    return (
        <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
                <motion.div
                    key={i}
                    className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-500"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.15,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
}

export function SpinnerLoader() {
    return (
        <motion.div
            className="w-8 h-8 border-3 border-zinc-200 dark:border-zinc-700 border-t-zinc-600 dark:border-t-zinc-300 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "linear",
            }}
        />
    );
}
