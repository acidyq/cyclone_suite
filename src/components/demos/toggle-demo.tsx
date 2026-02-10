"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function ToggleDemo() {
    const [active, setActive] = useState<Set<string>>(new Set(["bold"]));
    const toggle = (v: string) => setActive(prev => { const n = new Set(prev); n.has(v) ? n.delete(v) : n.add(v); return n; });
    const items = [
        { value: "bold", label: "B", style: "font-bold" },
        { value: "italic", label: "I", style: "italic" },
        { value: "underline", label: "U", style: "underline" },
        { value: "strike", label: "S", style: "line-through" },
    ];
    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] p-8 bg-zinc-950 rounded-xl space-y-6">
            <h3 className="text-xl font-bold text-white">Toggle Group</h3>
            <div className="flex rounded-xl bg-zinc-800 border border-zinc-700 p-1 gap-1">
                {items.map(item => (
                    <button key={item.value} onClick={() => toggle(item.value)}
                        className={`relative px-4 py-2 rounded-lg text-sm transition ${active.has(item.value) ? "text-white" : "text-zinc-400 hover:text-zinc-300"}`}>
                        {active.has(item.value) && (
                            <motion.div className="absolute inset-0 bg-zinc-700 rounded-lg" layoutId="toggleBg" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                        )}
                        <span className={`relative z-10 ${item.style}`}>{item.label}</span>
                    </button>
                ))}
            </div>
            <p className="text-zinc-500 text-sm">Active: {Array.from(active).join(", ") || "none"}</p>
        </div>
    );
}
