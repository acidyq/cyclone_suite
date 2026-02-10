"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Phone, Mic, MicOff } from "lucide-react";

type IslandState = "idle" | "music" | "call";

export function DynamicIslandDemo() {
    const [state, setState] = useState<IslandState>("idle");
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-zinc-100 dark:bg-zinc-900 rounded-xl">
            {/* Phone frame */}
            <div className="relative w-80 h-[500px] bg-zinc-950 rounded-[40px] p-2 shadow-2xl">
                <div className="absolute inset-2 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-[32px] overflow-hidden">
                    {/* Dynamic Island */}
                    <div className="flex justify-center pt-4">
                        <motion.div
                            layout
                            className="bg-black rounded-full overflow-hidden"
                            initial={{ width: 120, height: 36 }}
                            animate={{
                                width: state === "idle" ? 120 : state === "music" ? 200 : 280,
                                height: state === "idle" ? 36 : 60,
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        >
                            <AnimatePresence mode="wait">
                                {state === "idle" && (
                                    <motion.div
                                        key="idle"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex items-center justify-center h-full"
                                    >
                                        <div className="w-3 h-3 rounded-full bg-zinc-800" />
                                        <div className="w-2 h-2 rounded-full bg-zinc-700 ml-8" />
                                    </motion.div>
                                )}

                                {state === "music" && (
                                    <motion.div
                                        key="music"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="flex items-center justify-between h-full px-4"
                                    >
                                        <div className="flex items-center gap-3">
                                            <motion.div
                                                className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-purple-600"
                                                animate={{ rotate: isPlaying ? 360 : 0 }}
                                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                            />
                                            <div className="flex gap-0.5">
                                                {[1, 2, 3, 4].map((bar) => (
                                                    <motion.div
                                                        key={bar}
                                                        className="w-1 bg-white rounded-full"
                                                        animate={{
                                                            height: isPlaying ? [8, 16, 8] : 8,
                                                        }}
                                                        transition={{
                                                            duration: 0.4,
                                                            repeat: Infinity,
                                                            delay: bar * 0.1,
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setIsPlaying(!isPlaying)}
                                            className="p-2"
                                        >
                                            {isPlaying ? (
                                                <Pause className="w-5 h-5 text-white" />
                                            ) : (
                                                <Play className="w-5 h-5 text-white" />
                                            )}
                                        </button>
                                    </motion.div>
                                )}

                                {state === "call" && (
                                    <motion.div
                                        key="call"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="flex items-center justify-between h-full px-4"
                                    >
                                        <div className="flex items-center gap-3">
                                            <motion.div
                                                className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center"
                                                animate={{ scale: [1, 1.1, 1] }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                            >
                                                <Phone className="w-5 h-5 text-white" />
                                            </motion.div>
                                            <div>
                                                <p className="text-white text-sm font-medium">John Doe</p>
                                                <p className="text-green-400 text-xs">03:42</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => setIsMuted(!isMuted)}
                                                className={`p-2 rounded-full ${isMuted ? "bg-red-500" : "bg-zinc-700"}`}
                                            >
                                                {isMuted ? (
                                                    <MicOff className="w-4 h-4 text-white" />
                                                ) : (
                                                    <Mic className="w-4 h-4 text-white" />
                                                )}
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex gap-3 mt-8">
                <button
                    onClick={() => setState("idle")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${state === "idle"
                            ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                            : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        }`}
                >
                    Idle
                </button>
                <button
                    onClick={() => setState("music")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${state === "music"
                            ? "bg-purple-600 text-white"
                            : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        }`}
                >
                    Music
                </button>
                <button
                    onClick={() => setState("call")}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${state === "call"
                            ? "bg-green-600 text-white"
                            : "bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        }`}
                >
                    Call
                </button>
            </div>
        </div>
    );
}
