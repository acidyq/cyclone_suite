"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function StickyBannerDemo() {
    const [visible, setVisible] = useState(true);

    return (
        <div className="min-h-[400px] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 relative">
            <AnimatePresence>
                {visible && (
                    <motion.div
                        className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2.5 flex items-center justify-center gap-4"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="text-sm text-white font-medium">
                            🎉 New release! Check out our latest components →
                        </span>
                        <button
                            onClick={() => setVisible(false)}
                            className="text-white/70 hover:text-white text-lg leading-none"
                        >
                            ×
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="p-8 space-y-4">
                <div className="text-center space-y-2 mb-6">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Sticky Banner</h3>
                    <p className="text-zinc-500 text-sm">A dismissable banner that sticks to the top of the page</p>
                </div>
                {!visible && (
                    <button
                        onClick={() => setVisible(true)}
                        className="mx-auto block px-4 py-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm"
                    >
                        Show Banner Again
                    </button>
                )}
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="h-20 rounded-xl bg-zinc-200 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800" />
                ))}
            </div>
        </div>
    );
}
