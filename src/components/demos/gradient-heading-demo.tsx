"use client";

import { motion } from "framer-motion";

export function GradientHeadingDemo() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] gap-8 p-8">
            {/* Static gradient */}
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                Static Gradient
            </h2>

            {/* Animated gradient */}
            <motion.h2
                className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text"
                style={{
                    backgroundImage: "linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #d946ef, #06b6d4)",
                    backgroundSize: "200% 100%",
                }}
                animate={{
                    backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                Animated Gradient
            </motion.h2>

            {/* Shimmer gradient */}
            <motion.h2
                className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text"
                style={{
                    backgroundImage: "linear-gradient(110deg, #e2e8f0 0%, #e2e8f0 35%, #ffffff 50%, #e2e8f0 65%, #e2e8f0 100%)",
                    backgroundSize: "200% 100%",
                }}
                animate={{
                    backgroundPosition: ["150% 0%", "-50% 0%"],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                Shimmer Effect
            </motion.h2>

            {/* Rainbow gradient */}
            <motion.h2
                className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text"
                style={{
                    backgroundImage: "linear-gradient(90deg, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #8b5cf6, #ef4444)",
                    backgroundSize: "200% 100%",
                }}
                animate={{
                    backgroundPosition: ["0% 0%", "100% 0%"],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            >
                Rainbow Text
            </motion.h2>
        </div>
    );
}
