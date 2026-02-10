"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CARDS = [
    { title: "Design", color: "from-pink-500 to-rose-500" },
    { title: "Develop", color: "from-blue-500 to-cyan-500" },
    { title: "Deploy", color: "from-green-500 to-emerald-500" },
    { title: "Scale", color: "from-purple-500 to-violet-500" },
    { title: "Optimize", color: "from-orange-500 to-amber-500" },
    { title: "Monitor", color: "from-indigo-500 to-blue-500" },
];

export function HeroParallaxDemo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -10]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    return (
        <div ref={containerRef} className="relative min-h-[600px] overflow-hidden rounded-xl bg-zinc-950 p-8">
            {/* Header */}
            <motion.div
                className="text-center mb-12"
                style={{ scale }}
            >
                <motion.h2
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Hero Parallax
                </motion.h2>
                <motion.p
                    className="text-zinc-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    Multi-layer parallax scrolling effect
                </motion.p>
            </motion.div>

            {/* Parallax card rows */}
            <div className="relative perspective-1000">
                <motion.div
                    className="flex gap-4 mb-4"
                    style={{ y: y1, rotateX: rotate }}
                >
                    {CARDS.slice(0, 3).map((card, i) => (
                        <motion.div
                            key={i}
                            className={`flex-1 h-32 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <span className="text-white font-semibold text-lg">{card.title}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex gap-4 mb-4"
                    style={{ y: y2, rotateX: rotate }}
                >
                    {CARDS.slice(3, 6).map((card, i) => (
                        <motion.div
                            key={i}
                            className={`flex-1 h-32 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <span className="text-white font-semibold text-lg">{card.title}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="flex gap-4"
                    style={{ y: y3, rotateX: rotate }}
                >
                    {CARDS.slice(0, 3).map((card, i) => (
                        <motion.div
                            key={i}
                            className={`flex-1 h-32 rounded-xl bg-gradient-to-br ${card.color} opacity-60 flex items-center justify-center shadow-lg`}
                            whileHover={{ scale: 1.05, y: -5, opacity: 1 }}
                        >
                            <span className="text-white font-semibold text-lg">{card.title}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
        </div>
    );
}
