"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

export function VanishInputDemo() {
    const [value, setValue] = useState("");
    const [isVanishing, setIsVanishing] = useState(false);
    const [placeholderIdx, setPlaceholderIdx] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const placeholders = [
        "What's on your mind?",
        "Search for anything...",
        "Type a prompt...",
        "Ask me a question...",
        "Write something creative...",
    ];

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!value.trim()) return;
        setIsVanishing(true);
        setTimeout(() => {
            setValue("");
            setIsVanishing(false);
            setPlaceholderIdx((i) => (i + 1) % placeholders.length);
        }, 500);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl">
            <div className="w-full max-w-lg space-y-8">
                <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold text-white">Vanish Input</h3>
                    <p className="text-zinc-400 text-sm">Type something and press Enter to see the vanish effect</p>
                </div>

                <form onSubmit={handleSubmit} className="relative">
                    <div className="relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-900 focus-within:border-zinc-500 transition">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={placeholderIdx}
                                className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: value ? 0 : 0.4, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <span className="text-zinc-500">{placeholders[placeholderIdx]}</span>
                            </motion.div>
                        </AnimatePresence>

                        <motion.input
                            ref={inputRef}
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="w-full px-4 py-4 bg-transparent text-white text-lg outline-none"
                            animate={isVanishing ? {
                                opacity: [1, 0],
                                filter: ["blur(0px)", "blur(8px)"],
                                scale: [1, 0.98],
                            } : {}}
                            transition={{ duration: 0.3 }}
                        />

                        <motion.button
                            type="submit"
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </motion.button>
                    </div>
                </form>
            </div>
        </div>
    );
}
