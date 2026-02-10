"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function SelectDemo() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Select framework...");
    const options = ["React", "Next.js", "Vue", "Svelte", "Angular", "Solid"];
    return (
        <div className="flex items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl">
            <div className="w-full max-w-xs relative">
                <label className="text-xs text-zinc-400 mb-1.5 block">Framework</label>
                <button onClick={() => setOpen(!open)}
                    className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-left text-sm text-white flex items-center justify-between hover:bg-zinc-700 transition">
                    {selected}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${open ? "rotate-180" : ""}`}>
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </button>
                <AnimatePresence>
                    {open && (
                        <>
                            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
                            <motion.div className="absolute top-full mt-1 w-full z-50 rounded-lg bg-zinc-800 border border-zinc-700 shadow-2xl overflow-hidden"
                                initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }}>
                                {options.map(opt => (
                                    <button key={opt} onClick={() => { setSelected(opt); setOpen(false); }}
                                        className={`w-full px-4 py-2 text-left text-sm hover:bg-zinc-700 transition ${selected === opt ? "text-blue-400 bg-zinc-700/50" : "text-zinc-300"}`}>
                                        {opt}
                                    </button>
                                ))}
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
