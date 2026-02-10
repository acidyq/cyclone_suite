"use client";

import { motion } from "framer-motion";

export function GlowEffectDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8 min-h-[400px] p-8 bg-zinc-950 rounded-xl">
            {/* Pulsing glow card */}
            <motion.div
                className="relative p-8 rounded-2xl bg-zinc-900 border border-zinc-800"
                animate={{
                    boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                        "0 0 60px rgba(59, 130, 246, 0.5)",
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                    ],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <h3 className="text-xl font-semibold text-white mb-2">Pulsing Glow</h3>
                <p className="text-zinc-400">Breathing shadow animation</p>
            </motion.div>

            {/* Multi-color glow */}
            <motion.div
                className="relative p-8 rounded-2xl bg-zinc-900 border border-zinc-800"
                animate={{
                    boxShadow: [
                        "0 0 30px rgba(59, 130, 246, 0.5)",
                        "0 0 30px rgba(139, 92, 246, 0.5)",
                        "0 0 30px rgba(236, 72, 153, 0.5)",
                        "0 0 30px rgba(59, 130, 246, 0.5)",
                    ],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <h3 className="text-xl font-semibold text-white mb-2">Rainbow Glow</h3>
                <p className="text-zinc-400">Color cycling effect</p>
            </motion.div>

            {/* Hover glow button */}
            <motion.button
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium"
                whileHover={{
                    boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)",
                    scale: 1.02,
                }}
                transition={{ duration: 0.2 }}
            >
                Hover for Glow
            </motion.button>

            {/* Text glow */}
            <motion.h2
                className="text-4xl font-bold text-white"
                animate={{
                    textShadow: [
                        "0 0 10px rgba(34, 197, 94, 0.5), 0 0 20px rgba(34, 197, 94, 0.3)",
                        "0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.5)",
                        "0 0 10px rgba(34, 197, 94, 0.5), 0 0 20px rgba(34, 197, 94, 0.3)",
                    ],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                Glowing Text
            </motion.h2>

            {/* Neon border glow */}
            <motion.div
                className="p-8 rounded-xl border-2 border-cyan-500"
                animate={{
                    boxShadow: [
                        "inset 0 0 10px rgba(6, 182, 212, 0.3), 0 0 10px rgba(6, 182, 212, 0.3)",
                        "inset 0 0 20px rgba(6, 182, 212, 0.5), 0 0 30px rgba(6, 182, 212, 0.5)",
                        "inset 0 0 10px rgba(6, 182, 212, 0.3), 0 0 10px rgba(6, 182, 212, 0.3)",
                    ],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <h3 className="text-xl font-semibold text-cyan-400 mb-2">Neon Box</h3>
                <p className="text-zinc-400">Inner + outer glow</p>
            </motion.div>
        </div>
    );
}
