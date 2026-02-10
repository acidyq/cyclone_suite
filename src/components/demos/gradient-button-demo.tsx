"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const gradients = [
    "from-pink-500 via-purple-500 to-indigo-500",
    "from-emerald-500 via-teal-500 to-cyan-500",
    "from-orange-500 via-red-500 to-pink-500",
    "from-blue-500 via-indigo-500 to-purple-500",
];

export function GradientButtonDemo() {
    const [gradientIndex, setGradientIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const cycleGradient = () => {
        setGradientIndex((prev) => (prev + 1) % gradients.length);
    };

    return (
        <div className="flex flex-col items-center gap-8">
            <motion.button
                onClick={cycleGradient}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className={`relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-shadow ${isHovered ? "shadow-2xl" : "shadow-lg"
                    }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Animated gradient background */}
                <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${gradients[gradientIndex]}`}
                    initial={false}
                    animate={{
                        backgroundPosition: isHovered ? ["0% 50%", "100% 50%", "0% 50%"] : "0% 50%",
                    }}
                    transition={{
                        duration: 3,
                        repeat: isHovered ? Infinity : 0,
                        ease: "linear",
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                />

                {/* Shine effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    animate={isHovered ? { x: "100%" } : { x: "-100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                <span className="relative z-10 flex items-center gap-2">
                    <span>Gradient Button</span>
                    <span className="text-lg">✨</span>
                </span>
            </motion.button>

            <div className="flex gap-2">
                {gradients.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setGradientIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === gradientIndex
                                ? "bg-zinc-900 dark:bg-zinc-100 scale-125"
                                : "bg-zinc-300 dark:bg-zinc-700"
                            }`}
                        aria-label={`Gradient ${index + 1}`}
                    />
                ))}
            </div>

            <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                Click to cycle gradients. Hover for animated effect.
            </p>
        </div>
    );
}
