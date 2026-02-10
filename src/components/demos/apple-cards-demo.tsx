"use client";

import { motion } from "framer-motion";

export function AppleCardsDemo() {
    const cards = [
        { title: "App of the Day", category: "Featured", bg: "bg-blue-500" },
        { title: "Trending Now", category: "Music", bg: "bg-purple-500" },
        { title: "Editor's Choice", category: "Games", bg: "bg-orange-500" }
    ];

    return (
        <div className="flex overflow-x-auto gap-6 p-8 bg-zinc-950 rounded-xl min-h-[400px] items-center snap-x snap-mandatory">
            {cards.map((card, idx) => (
                <div key={idx} className="snap-center shrink-0">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`w-72 h-96 rounded-[32px] p-6 flex flex-col justify-between ${card.bg} shadow-lg cursor-pointer text-white`}
                    >
                        <div>
                            <p className="uppercase text-xs font-bold opacity-80 mb-2">{card.category}</p>
                            <h3 className="text-3xl font-bold leading-tight w-3/4">{card.title}</h3>
                        </div>
                        <button className="self-start px-6 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold hover:bg-white/30 transition">
                            Get
                        </button>
                    </motion.div>
                </div>
            ))}
        </div>
    );
}
