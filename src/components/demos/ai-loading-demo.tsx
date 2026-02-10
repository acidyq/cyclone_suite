"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

const loadingStates = [
    { icon: "🔄", text: "Initializing...", subtext: "Setting up your workspace" },
    { icon: "🔍", text: "Analyzing...", subtext: "Processing your request" },
    { icon: "⚡", text: "Optimizing...", subtext: "Enhancing performance" },
    { icon: "✨", text: "Finalizing...", subtext: "Almost ready" },
    { icon: "✅", text: "Complete!", subtext: "Ready to go" },
];

export function AILoadingDemo() {
    const [currentState, setCurrentState] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // Auto-start and loop the loading animation
    useEffect(() => {
        const runLoadingCycle = () => {
            setIsLoading(true);
            setCurrentState(0);
        };

        // Start immediately
        runLoadingCycle();

        // Main interval to cycle through states
        const stateInterval = setInterval(() => {
            setCurrentState((prev) => {
                if (prev >= loadingStates.length - 1) {
                    // Restart from beginning after a pause
                    setTimeout(() => {
                        setCurrentState(0);
                    }, 2000);
                    return prev;
                }
                return prev + 1;
            });
        }, 1200);

        return () => {
            clearInterval(stateInterval);
        };
    }, []);

    const state = loadingStates[currentState];

    return (
        <div className="flex flex-col items-center gap-8">
            <div className="w-full max-w-md">
                <AnimatePresence mode="wait">
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center gap-6 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50"
                    >
                        {/* Progress indicator */}
                        <div className="flex items-center gap-2">
                            {loadingStates.map((_, index) => (
                                <motion.div
                                    key={index}
                                    className={`h-2 rounded-full transition-all duration-300 ${index <= currentState
                                        ? "w-8 bg-emerald-500"
                                        : "w-2 bg-zinc-300 dark:bg-zinc-700"
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Icon */}
                        <motion.div
                            key={state.icon}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 180 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="text-5xl"
                        >
                            {state.icon}
                        </motion.div>

                        {/* Text */}
                        <motion.div
                            key={state.text}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-center"
                        >
                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                {state.text}
                            </h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                {state.subtext}
                            </p>
                        </motion.div>

                        {/* Spinner */}
                        {currentState < loadingStates.length - 1 && (
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                                <Loader2 className="h-5 w-5 text-emerald-500" />
                            </motion.div>
                        )}

                        {/* Restart indicator when complete */}
                        {currentState >= loadingStates.length - 1 && (
                            <motion.p
                                className="text-xs text-zinc-400"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                Restarting...
                            </motion.p>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                Multi-step AI loading with smooth state transitions
            </p>
        </div>
    );
}
