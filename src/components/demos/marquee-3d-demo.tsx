"use client";

import { motion } from "framer-motion";

const ITEMS = [
    { icon: "⚡", label: "Speed" },
    { icon: "🎨", label: "Design" },
    { icon: "🚀", label: "Launch" },
    { icon: "💎", label: "Quality" },
    { icon: "🔧", label: "Tools" },
    { icon: "📦", label: "Ship" },
];

export function Marquee3dDemo() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[500px] p-8 bg-zinc-950 rounded-xl overflow-hidden">
            <h3 className="text-xl font-semibold text-white mb-8">3D Marquee</h3>

            {/* 3D perspective container */}
            <div
                className="relative w-full h-64"
                style={{ perspective: "1000px" }}
            >
                {/* Back row (moving left) */}
                <motion.div
                    className="absolute inset-0 flex items-center"
                    style={{
                        transform: "translateZ(-100px) translateY(-40px)",
                    }}
                >
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
                                className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-zinc-800/50 rounded-xl opacity-50"
                            >
                                <span className="text-2xl">{item.icon}</span>
                                <span className="font-medium text-zinc-400">{item.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Middle row (moving right) */}
                <motion.div
                    className="absolute inset-0 flex items-center"
                    style={{
                        transform: "translateZ(0px)",
                    }}
                >
                    <motion.div
                        className="flex gap-8"
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...ITEMS, ...ITEMS].map((item, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 flex items-center gap-3 px-8 py-5 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg"
                            >
                                <span className="text-3xl">{item.icon}</span>
                                <span className="font-semibold text-white text-lg">{item.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Front row (moving left, faster) */}
                <motion.div
                    className="absolute inset-0 flex items-center"
                    style={{
                        transform: "translateZ(100px) translateY(40px)",
                    }}
                >
                    <motion.div
                        className="flex gap-8"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        {[...ITEMS, ...ITEMS].map((item, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-zinc-700/80 rounded-xl opacity-70"
                            >
                                <span className="text-2xl">{item.icon}</span>
                                <span className="font-medium text-zinc-300">{item.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
            </div>

            <p className="text-zinc-400 mt-8 text-sm">
                Multi-layer depth with varying speeds
            </p>
        </div>
    );
}
