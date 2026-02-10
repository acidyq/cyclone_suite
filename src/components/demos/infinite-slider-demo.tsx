"use client";

import { motion } from "framer-motion";

const ITEMS = [
    { icon: "🚀", label: "Deploy" },
    { icon: "⚡", label: "Speed" },
    { icon: "🎨", label: "Design" },
    { icon: "🔧", label: "Tools" },
    { icon: "📦", label: "Ship" },
    { icon: "💎", label: "Premium" },
    { icon: "🌟", label: "Star" },
    { icon: "🔥", label: "Hot" },
];

export function InfiniteSliderDemo() {
    return (
        <div className="flex flex-col items-center gap-8 min-h-[300px] p-8 overflow-hidden">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                Infinite Logo Slider
            </h3>

            {/* Left to right */}
            <div className="relative w-full max-w-3xl overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10" />
                <motion.div
                    className="flex gap-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...ITEMS, ...ITEMS].map((item, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-zinc-100 dark:bg-zinc-800 rounded-xl"
                        >
                            <span className="text-2xl">{item.icon}</span>
                            <span className="font-medium text-zinc-700 dark:text-zinc-300">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Right to left */}
            <div className="relative w-full max-w-3xl overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10" />
                <motion.div
                    className="flex gap-8"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[...ITEMS, ...ITEMS].map((item, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 flex items-center gap-3 px-6 py-4 border border-zinc-200 dark:border-zinc-700 rounded-xl"
                        >
                            <span className="text-2xl">{item.icon}</span>
                            <span className="font-medium text-zinc-700 dark:text-zinc-300">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
