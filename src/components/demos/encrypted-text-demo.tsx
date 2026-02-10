"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
const TARGET_TEXT = "DECRYPTED";

export function EncryptedTextDemo() {
    const [displayText, setDisplayText] = useState(TARGET_TEXT);
    const [isDecrypting, setIsDecrypting] = useState(false);
    const [decryptedCount, setDecryptedCount] = useState(0);

    // Auto-start and loop the animation
    useEffect(() => {
        const startDecryption = () => {
            setIsDecrypting(true);
            setDecryptedCount(0);
        };

        // Start immediately
        startDecryption();

        // Loop every 5 seconds
        const interval = setInterval(() => {
            startDecryption();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!isDecrypting) return;

        if (decryptedCount >= TARGET_TEXT.length) {
            setIsDecrypting(false);
            return;
        }

        const interval = setInterval(() => {
            setDisplayText(() => {
                return TARGET_TEXT.split("")
                    .map((char, i) => {
                        if (i < decryptedCount) return char;
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    })
                    .join("");
            });
        }, 30);

        const progressTimer = setTimeout(() => {
            setDecryptedCount((prev) => prev + 1);
        }, 150);

        return () => {
            clearInterval(interval);
            clearTimeout(progressTimer);
        };
    }, [isDecrypting, decryptedCount]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] p-8 bg-zinc-950 rounded-xl">
            <div className="relative">
                <motion.h2
                    className="text-5xl md:text-7xl font-mono font-bold tracking-wider"
                    style={{
                        background: "linear-gradient(to right, #22c55e, #10b981)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    {displayText.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            animate={{
                                opacity: i < decryptedCount ? 1 : [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: i < decryptedCount ? 0.2 : 0.1,
                                repeat: i < decryptedCount ? 0 : Infinity,
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.h2>

                {/* Scanline effect */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.03) 2px, rgba(0,255,0,0.03) 4px)",
                    }}
                />
            </div>

            <p className="mt-8 text-green-600/60 text-sm font-mono">
                {isDecrypting ? `Progress: ${Math.round((decryptedCount / TARGET_TEXT.length) * 100)}%` : "Decryption complete"}
            </p>

            {/* Progress bar */}
            <div className="mt-4 w-48 h-1 bg-green-900/30 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-green-500"
                    animate={{ width: `${(decryptedCount / TARGET_TEXT.length) * 100}%` }}
                    transition={{ duration: 0.1 }}
                />
            </div>
        </div>
    );
}
