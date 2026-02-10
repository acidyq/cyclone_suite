"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";

type ButtonState = "idle" | "loading" | "success";

export function StatefulButtonDemo() {
    const [state1, setState1] = useState<ButtonState>("idle");
    const [state2, setState2] = useState<ButtonState>("idle");

    const handleClick = (setState: React.Dispatch<React.SetStateAction<ButtonState>>) => {
        setState("loading");
        setTimeout(() => {
            setState("success");
            setTimeout(() => setState("idle"), 2000);
        }, 1500);
    };

    return (
        <div className="flex flex-wrap items-center justify-center gap-8 min-h-[300px] p-8">
            {/* Primary stateful button */}
            <motion.button
                onClick={() => handleClick(setState1)}
                disabled={state1 !== "idle"}
                className="relative min-w-[160px] h-12 px-6 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-medium disabled:opacity-80 overflow-hidden"
                whileTap={{ scale: 0.98 }}
            >
                <AnimatePresence mode="wait">
                    {state1 === "idle" && (
                        <motion.span
                            key="idle"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center justify-center gap-2"
                        >
                            Submit
                        </motion.span>
                    )}
                    {state1 === "loading" && (
                        <motion.span
                            key="loading"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center justify-center gap-2"
                        >
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Loading...
                        </motion.span>
                    )}
                    {state1 === "success" && (
                        <motion.span
                            key="success"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="flex items-center justify-center gap-2"
                        >
                            <Check className="h-4 w-4" />
                            Done!
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Gradient stateful button */}
            <motion.button
                onClick={() => handleClick(setState2)}
                disabled={state2 !== "idle"}
                className="relative min-w-[160px] h-12 px-6 rounded-xl font-medium text-white overflow-hidden"
                style={{
                    background: state2 === "success"
                        ? "linear-gradient(to right, #22c55e, #16a34a)"
                        : "linear-gradient(to right, #3b82f6, #8b5cf6)",
                }}
                whileTap={{ scale: 0.98 }}
            >
                <AnimatePresence mode="wait">
                    {state2 === "idle" && (
                        <motion.span
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            Click Me
                        </motion.span>
                    )}
                    {state2 === "loading" && (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center"
                        >
                            <motion.div
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                        </motion.div>
                    )}
                    {state2 === "success" && (
                        <motion.span
                            key="success"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center justify-center gap-2"
                        >
                            <motion.div
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                            >
                                <Check className="h-5 w-5" />
                            </motion.div>
                            Success!
                        </motion.span>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
