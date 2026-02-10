"use client";

import { motion } from "framer-motion";

export function ColourfulTextDemo() {
    const words = ["Colourful", "Vibrant", "Dynamic"];

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl space-y-12">
            {words.map((word, wi) => (
                <div key={wi} className="flex">
                    {word.split("").map((char, ci) => (
                        <motion.span
                            key={ci}
                            className="text-5xl md:text-7xl font-black inline-block"
                            style={{
                                color: `hsl(${(ci * 40 + wi * 120) % 360}, 80%, 60%)`,
                            }}
                            whileHover={{
                                scale: 1.3,
                                rotate: [0, -5, 5, 0],
                                filter: "brightness(1.3)",
                            }}
                            animate={{
                                y: [0, -3, 0],
                            }}
                            transition={{
                                y: {
                                    duration: 1.5 + ci * 0.1,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: ci * 0.05,
                                },
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            ))}
            <p className="text-zinc-500 text-sm">Hover over individual characters for extra effect</p>
        </div>
    );
}
