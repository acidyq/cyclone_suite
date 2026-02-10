"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CARDS = [
    {
        id: 1,
        title: "Mountain Vista",
        gradient: "from-emerald-500 to-teal-600",
        description: "Breathtaking views of snow-capped peaks",
    },
    {
        id: 2,
        title: "Ocean Sunset",
        gradient: "from-orange-500 to-pink-600",
        description: "Golden hour over the Pacific waves",
    },
    {
        id: 3,
        title: "City Lights",
        gradient: "from-purple-500 to-indigo-600",
        description: "Urban skyline after midnight",
    },
    {
        id: 4,
        title: "Forest Trail",
        gradient: "from-green-500 to-emerald-600",
        description: "Ancient redwoods reaching skyward",
    },
];

export function FocusCardsDemo() {
    const [focused, setFocused] = useState<number | null>(null);

    return (
        <div className="min-h-[400px] p-8">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6 text-center">
                Hover over a card to focus
            </h3>

            <div className="flex gap-4 max-w-4xl mx-auto">
                {CARDS.map((card) => (
                    <motion.div
                        key={card.id}
                        className={`relative h-64 rounded-2xl bg-gradient-to-br ${card.gradient} overflow-hidden cursor-pointer`}
                        animate={{
                            flex: focused === card.id ? 3 : focused ? 0.5 : 1,
                            filter: focused && focused !== card.id ? "brightness(0.6)" : "brightness(1)",
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        onMouseEnter={() => setFocused(card.id)}
                        onMouseLeave={() => setFocused(null)}
                    >
                        {/* Content */}
                        <motion.div
                            className="absolute inset-0 p-6 flex flex-col justify-end"
                            animate={{ opacity: focused === card.id ? 1 : 0.7 }}
                        >
                            <AnimatePresence>
                                {(focused === card.id || !focused) && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                    >
                                        <h4 className="text-white font-bold text-lg mb-1">
                                            {card.title}
                                        </h4>
                                        {focused === card.id && (
                                            <motion.p
                                                className="text-white/80 text-sm"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                            >
                                                {card.description}
                                            </motion.p>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Hover glow */}
                        <motion.div
                            className="absolute inset-0 bg-white/10"
                            animate={{ opacity: focused === card.id ? 1 : 0 }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
