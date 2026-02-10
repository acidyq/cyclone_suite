"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function TextGenerateDemo() {
    const text = "The quick brown fox jumps over the lazy dog. This animated text appears word by word with a beautiful fade-in effect.";
    const words = text.split(" ");
    const [visibleCount, setVisibleCount] = useState(0);
    const [isGenerating, setIsGenerating] = useState(true);

    useEffect(() => {
        if (!isGenerating) return;

        if (visibleCount < words.length) {
            const timer = setTimeout(() => {
                setVisibleCount((prev) => prev + 1);
            }, 80);
            return () => clearTimeout(timer);
        } else {
            // Reset after a delay
            const resetTimer = setTimeout(() => {
                setVisibleCount(0);
            }, 3000);
            return () => clearTimeout(resetTimer);
        }
    }, [visibleCount, words.length, isGenerating]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] p-8">
            <div className="max-w-2xl">
                <p className="text-xl md:text-2xl leading-relaxed text-zinc-900 dark:text-zinc-100">
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            className="inline-block mr-2"
                            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                            animate={{
                                opacity: i < visibleCount ? 1 : 0,
                                y: i < visibleCount ? 0 : 10,
                                filter: i < visibleCount ? "blur(0px)" : "blur(4px)",
                            }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            {word}
                        </motion.span>
                    ))}
                </p>
            </div>
            <div className="mt-8 flex items-center gap-2">
                <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full bg-blue-500"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        />
                    ))}
                </div>
                <span className="text-sm text-zinc-500">Generating text...</span>
            </div>
        </div>
    );
}
