"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Bold, Italic, Underline } from "lucide-react";

export function ToolbarDynamicDemo() {
    const [active, setActive] = useState<string[]>([]);

    const toggle = (item: string) => {
        setActive(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
    };

    return (
        <div className="flex items-center justify-center min-h-[300px] p-8 bg-zinc-950 rounded-xl">
            <motion.div
                className="flex items-center gap-1 p-2 bg-zinc-900 border border-zinc-800 rounded-full"
                layout
            >
                {[
                    { id: "bold", icon: Bold },
                    { id: "italic", icon: Italic },
                    { id: "underline", icon: Underline }
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => toggle(item.id)}
                        className={`p-2 rounded-full transition-colors relative ${active.includes(item.id) ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
                    >
                        {active.includes(item.id) && (
                            <motion.div
                                layoutId="toolbar-active"
                                className="absolute inset-0 bg-zinc-700 rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <span className="relative z-10"><item.icon size={18} /></span>
                    </button>
                ))}
            </motion.div>
        </div>
    );
}
