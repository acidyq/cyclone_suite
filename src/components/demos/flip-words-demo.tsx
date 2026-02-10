"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["innovative", "beautiful", "powerful", "responsive", "modern"];

export function FlipWordsDemo() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % WORDS.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] p-8">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
                Build{" "}
                <span className="relative inline-block w-48 text-left">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={currentIndex}
                            className="absolute left-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
                            initial={{ y: 20, opacity: 0, rotateX: -90 }}
                            animate={{ y: 0, opacity: 1, rotateX: 0 }}
                            exit={{ y: -20, opacity: 0, rotateX: 90 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            {WORDS[currentIndex]}
                        </motion.span>
                    </AnimatePresence>
                </span>
                <br />
                websites faster
            </h2>
            <p className="mt-6 text-zinc-500 dark:text-zinc-400 text-center max-w-md">
                Watch as words flip through with smooth 3D rotation animations
            </p>
        </div>
    );
}
