"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function LayoutGridDemo() {
    const [selected, setSelected] = useState<number | null>(null);

    const items = [
        { id: 1, title: "Mountain View", color: "from-emerald-500 to-teal-700", span: "md:col-span-2 md:row-span-2" },
        { id: 2, title: "City Lights", color: "from-violet-500 to-purple-700", span: "" },
        { id: 3, title: "Ocean Waves", color: "from-blue-500 to-cyan-700", span: "" },
        { id: 4, title: "Desert Sun", color: "from-orange-500 to-red-700", span: "" },
        { id: 5, title: "Night Sky", color: "from-indigo-500 to-blue-900", span: "md:col-span-2" },
    ];

    return (
        <div className="p-8 bg-zinc-950 rounded-xl min-h-[500px] relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[120px]">
                {items.map((item) => (
                    <motion.div
                        key={item.id}
                        layoutId={`card-${item.id}`}
                        className={`bg-gradient-to-br ${item.color} rounded-xl cursor-pointer overflow-hidden ${item.span}`}
                        onClick={() => setSelected(item.id)}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex items-end p-4 h-full">
                            <span className="text-white font-medium text-sm">{item.title}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selected !== null && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/60 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelected(null)}
                        />
                        <motion.div
                            layoutId={`card-${selected}`}
                            className={`fixed left-[10%] right-[10%] top-[15%] bottom-[15%] z-50 bg-gradient-to-br ${items.find(i => i.id === selected)?.color} rounded-2xl`}
                            onClick={() => setSelected(null)}
                        >
                            <div className="flex items-end p-8 h-full">
                                <div>
                                    <h2 className="text-3xl font-bold text-white">{items.find(i => i.id === selected)?.title}</h2>
                                    <p className="text-white/70 mt-2">Click anywhere to close</p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
