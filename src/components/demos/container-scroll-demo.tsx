"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function ContainerScrollDemo() {
    return (
        <div className="min-h-[500px] bg-zinc-950 rounded-xl overflow-hidden flex flex-col items-center justify-center p-8">
            <motion.div
                className="text-center mb-8 space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h2 className="text-3xl font-bold text-white">Container Scroll</h2>
                <p className="text-zinc-400">A 3D perspective scroll animation</p>
            </motion.div>

            <motion.div
                className="w-full max-w-2xl"
                style={{ perspective: 1200 }}
                initial={{ rotateX: 25, scale: 0.9 }}
                whileInView={{ rotateX: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl">
                    {/* Fake browser chrome */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800/50 border-b border-zinc-700/50">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                        </div>
                        <div className="flex-1 mx-4">
                            <div className="bg-zinc-700/50 rounded-md px-3 py-1 text-xs text-zinc-400 w-56 mx-auto">
                                cyclonesuite.dev
                            </div>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="p-8 space-y-4">
                        <div className="h-8 bg-zinc-800 rounded w-3/4" />
                        <div className="h-4 bg-zinc-800/60 rounded w-full" />
                        <div className="h-4 bg-zinc-800/60 rounded w-5/6" />
                        <div className="grid grid-cols-3 gap-3 mt-6">
                            <div className="h-24 bg-zinc-800 rounded-lg" />
                            <div className="h-24 bg-zinc-800 rounded-lg" />
                            <div className="h-24 bg-zinc-800 rounded-lg" />
                        </div>
                        <div className="h-4 bg-zinc-800/40 rounded w-2/3 mt-4" />
                        <div className="h-4 bg-zinc-800/40 rounded w-1/2" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
