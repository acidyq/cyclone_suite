"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const MORPHING_WORDS = ["incredible", "beautiful", "powerful", "amazing"];

export function TextMorphDemo() {
    const [wordIndex, setWordIndex] = useState(0);
    const currentWord = MORPHING_WORDS[wordIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % MORPHING_WORDS.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] p-8">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
                Your work is{" "}
                <span className="relative inline-block min-w-[200px]">
                    {currentWord.split("").map((char, charIndex) => (
                        <motion.span
                            key={`${wordIndex}-${charIndex}`}
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
                            initial={{
                                opacity: 0,
                                y: 20,
                                filter: "blur(10px)",
                                scale: 0.5,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                filter: "blur(0px)",
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: -20,
                                filter: "blur(10px)",
                                scale: 0.5,
                            }}
                            transition={{
                                duration: 0.4,
                                delay: charIndex * 0.03,
                                ease: "easeOut",
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </span>
            </h2>

            <p className="mt-6 text-zinc-500 dark:text-zinc-400 text-center max-w-md">
                Characters morph with staggered blur and scale animations
            </p>

            {/* Word indicators */}
            <div className="flex gap-2 mt-8">
                {MORPHING_WORDS.map((word, index) => (
                    <button
                        key={word}
                        onClick={() => setWordIndex(index)}
                        className={`px-3 py-1 text-sm rounded-full transition-colors ${index === wordIndex
                                ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                            }`}
                    >
                        {word}
                    </button>
                ))}
            </div>
        </div>
    );
}
