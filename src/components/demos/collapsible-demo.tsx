"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function CollapsibleDemo() {
    const [open1, setOpen1] = useState(true);
    const [open2, setOpen2] = useState(false);
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Collapsible</h3>
            {[{ open: open1, set: setOpen1, title: "Project Settings", content: "Configure your project preferences, environment variables, and build settings. These settings affect how your project is built and deployed." },
            { open: open2, set: setOpen2, title: "Advanced Options", content: "Enable experimental features, configure custom build pipelines, and manage integration hooks. Exercise caution when modifying these settings." }
            ].map((item, i) => (
                <div key={i} className="w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden">
                    <button onClick={() => item.set(!item.open)} className="w-full flex items-center justify-between p-4 hover:bg-zinc-800/50 transition">
                        <span className="text-white text-sm font-medium">{item.title}</span>
                        <motion.span animate={{ rotate: item.open ? 180 : 0 }} className="text-zinc-400">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                        </motion.span>
                    </button>
                    <AnimatePresence>
                        {item.open && (
                            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                                <div className="px-4 pb-4"><p className="text-zinc-400 text-sm">{item.content}</p></div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
