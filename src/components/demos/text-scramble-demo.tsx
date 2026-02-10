"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SCRAMBLE_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

export function TextScrambleDemo() {
    const [text, setText] = useState("CYCLONE");
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);

    const scramble = () => {
        setIsScrambling(true);
        let iterations = 0;
        const maxIterations = text.length * 3;

        const interval = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iterations / 3) {
                            return text[index];
                        }
                        if (char === " ") return " ";
                        return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
                    })
                    .join("")
            );

            iterations++;

            if (iterations > maxIterations) {
                clearInterval(interval);
                setDisplayText(text);
                setIsScrambling(false);
            }
        }, 30);
    };

    useEffect(() => {
        scramble();
        const timer = setInterval(scramble, 5000);
        return () => clearInterval(timer);
    }, [text]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] p-8">
            <motion.h2
                className="text-4xl md:text-6xl font-mono font-bold text-zinc-900 dark:text-zinc-100 tracking-wider cursor-pointer"
                onClick={scramble}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {displayText.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        animate={{
                            opacity: isScrambling && i >= displayText.length - 3 ? [0.5, 1, 0.5] : 1,
                        }}
                        transition={{ duration: 0.1 }}
                        className={char !== text[i] ? "text-blue-500" : ""}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.h2>

            <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
                Click to scramble • Auto-scrambles every 5 seconds
            </p>

            {/* Preset texts */}
            <div className="flex gap-2 mt-6">
                {["CYCLONE", "PREMIUM", "ANIMATE"].map((preset) => (
                    <button
                        key={preset}
                        onClick={() => setText(preset)}
                        className={`px-4 py-2 text-sm font-mono rounded-lg transition-colors ${text === preset
                                ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900"
                                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                            }`}
                    >
                        {preset}
                    </button>
                ))}
            </div>
        </div>
    );
}
