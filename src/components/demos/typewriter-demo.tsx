"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TypewriterDemo() {
    const phrases = [
        "Hello, World!",
        "Welcome to Cyclone Suite",
        "Build beautiful interfaces",
        "Animate everything",
    ];

    const [currentPhrase, setCurrentPhrase] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const phrase = phrases[currentPhrase];

        if (isPaused) {
            const pauseTimer = setTimeout(() => {
                setIsPaused(false);
                setIsDeleting(true);
            }, 2000);
            return () => clearTimeout(pauseTimer);
        }

        if (isDeleting) {
            if (displayText === "") {
                setIsDeleting(false);
                setCurrentPhrase((prev) => (prev + 1) % phrases.length);
                return;
            }

            const deleteTimer = setTimeout(() => {
                setDisplayText((prev) => prev.slice(0, -1));
            }, 50);
            return () => clearTimeout(deleteTimer);
        }

        if (displayText === phrase) {
            setIsPaused(true);
            return;
        }

        const typeTimer = setTimeout(() => {
            setDisplayText(phrase.slice(0, displayText.length + 1));
        }, 100);

        return () => clearTimeout(typeTimer);
    }, [displayText, currentPhrase, isDeleting, isPaused, phrases]);

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="min-h-[80px] flex items-center justify-center">
                <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                    {displayText}
                    <motion.span
                        className="inline-block w-[3px] h-[1em] bg-emerald-500 ml-1"
                        animate={{ opacity: [1, 0] }}
                        transition={{
                            duration: 0.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </h2>
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
                {phrases.map((phrase, index) => (
                    <span
                        key={phrase}
                        className={`px-3 py-1 text-xs rounded-full ${index === currentPhrase
                                ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
                            }`}
                    >
                        {phrase}
                    </span>
                ))}
            </div>

            <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                Cycles through phrases with typing and deleting animation
            </p>
        </div>
    );
}
