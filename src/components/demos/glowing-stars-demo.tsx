"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export function GlowingStarsDemo() {
    const stars = useMemo(() =>
        Array.from({ length: 40 }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            delay: Math.random() * 3,
            duration: Math.random() * 2 + 1,
        })),
        []);

    return (
        <div className="grid md:grid-cols-2 gap-6 p-8 bg-zinc-950 rounded-xl min-h-[400px]">
            {[
                { title: "Star Field", desc: "Background stars that pulse and glow", gradient: "from-indigo-600/20 to-purple-600/20" },
                { title: "Night Sky", desc: "Hover to intensify the starlight", gradient: "from-blue-600/20 to-sky-600/20" },
            ].map((card) => (
                <div
                    key={card.title}
                    className={`group relative rounded-2xl border border-zinc-800 bg-gradient-to-br ${card.gradient} p-8 overflow-hidden cursor-pointer min-h-[200px]`}
                >
                    {stars.map((star, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-white"
                            style={{
                                left: `${star.x}%`,
                                top: `${star.y}%`,
                                width: star.size,
                                height: star.size,
                            }}
                            animate={{
                                opacity: [0.2, 0.8, 0.2],
                                scale: [1, 1.5, 1],
                                boxShadow: [
                                    "0 0 2px rgba(255,255,255,0.3)",
                                    "0 0 8px rgba(255,255,255,0.6)",
                                    "0 0 2px rgba(255,255,255,0.3)",
                                ],
                            }}
                            transition={{
                                duration: star.duration,
                                delay: star.delay,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                    <div className="relative z-10 mt-auto">
                        <h3 className="text-xl font-bold text-white">{card.title}</h3>
                        <p className="text-zinc-400 text-sm mt-2">{card.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
