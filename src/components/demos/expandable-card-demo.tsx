"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Card {
    id: number;
    title: string;
    description: string;
    image: string;
}

const CARDS: Card[] = [
    {
        id: 1,
        title: "Mountain Vista",
        description: "Breathtaking views of snow-capped peaks",
        image: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
        id: 2,
        title: "Ocean Sunset",
        description: "Golden hour over the Pacific",
        image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
        id: 3,
        title: "Forest Trail",
        description: "Ancient redwoods reaching for the sky",
        image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
];

export function ExpandableCardDemo() {
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);

    return (
        <div className="min-h-[500px] p-8">
            {/* Card grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {CARDS.map((card) => (
                    <motion.div
                        key={card.id}
                        layoutId={`card-${card.id}`}
                        onClick={() => setSelectedCard(card)}
                        className="cursor-pointer rounded-2xl overflow-hidden h-48"
                        style={{ background: card.image }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.div
                            layoutId={`content-${card.id}`}
                            className="h-full p-6 flex flex-col justify-end"
                        >
                            <motion.h3
                                layoutId={`title-${card.id}`}
                                className="text-xl font-bold text-white"
                            >
                                {card.title}
                            </motion.h3>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Expanded overlay */}
            <AnimatePresence>
                {selectedCard && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCard(null)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        />
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            <motion.div
                                layoutId={`card-${selectedCard.id}`}
                                className="w-full max-w-lg rounded-2xl overflow-hidden"
                                style={{ background: selectedCard.image }}
                            >
                                <motion.div
                                    layoutId={`content-${selectedCard.id}`}
                                    className="p-8"
                                >
                                    <motion.h3
                                        layoutId={`title-${selectedCard.id}`}
                                        className="text-3xl font-bold text-white mb-4"
                                    >
                                        {selectedCard.title}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-white/80 text-lg mb-6"
                                    >
                                        {selectedCard.description}
                                    </motion.p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <button
                                            onClick={() => setSelectedCard(null)}
                                            className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium transition-colors backdrop-blur-sm"
                                        >
                                            Close
                                        </button>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
