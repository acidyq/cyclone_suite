"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
    {
        id: 1,
        name: "Sarah Chen",
        role: "Product Designer",
        content: "These components saved us weeks of development time. The animations are incredibly smooth!",
        avatar: "SC",
        color: "from-purple-500 to-pink-500",
    },
    {
        id: 2,
        name: "Michael Torres",
        role: "Frontend Developer",
        content: "Best UI library I've used. The attention to detail is amazing.",
        avatar: "MT",
        color: "from-blue-500 to-cyan-500",
    },
    {
        id: 3,
        name: "Emily Watson",
        role: "Startup Founder",
        content: "Our users love the new interface. The premium feel is exactly what we needed.",
        avatar: "EW",
        color: "from-orange-500 to-red-500",
    },
];

export function CardStackDemo() {
    const [cards, setCards] = useState(TESTIMONIALS);

    const cycleCards = () => {
        setCards((prev) => {
            const [first, ...rest] = prev;
            return [...rest, first];
        });
    };

    useEffect(() => {
        const interval = setInterval(cycleCards, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
            <div className="relative w-80 h-56">
                <AnimatePresence>
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className="absolute inset-0 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl cursor-pointer"
                            initial={{ scale: 0.9, y: 30, opacity: 0 }}
                            animate={{
                                scale: 1 - index * 0.05,
                                y: index * -15,
                                zIndex: cards.length - index,
                                opacity: index < 3 ? 1 : 0,
                            }}
                            exit={{ scale: 0.9, y: 50, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            onClick={cycleCards}
                            style={{
                                transformOrigin: "bottom center",
                            }}
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center text-white font-semibold`}
                                >
                                    {card.avatar}
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                                        {card.name}
                                    </h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                        {card.role}
                                    </p>
                                </div>
                            </div>
                            <p className="mt-4 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                &ldquo;{card.content}&rdquo;
                            </p>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            <p className="mt-8 text-sm text-zinc-500">Click to cycle cards</p>
        </div>
    );
}
