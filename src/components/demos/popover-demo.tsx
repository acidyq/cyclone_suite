"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function PopoverDemo() {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl">
            <div className="relative">
                <button onClick={() => setOpen(!open)}
                    className="px-5 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm hover:bg-zinc-700 transition">
                    Open Popover
                </button>
                <AnimatePresence>
                    {open && (
                        <>
                            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
                            <motion.div className="absolute top-full mt-2 left-0 z-50 w-72 rounded-xl bg-zinc-900 border border-zinc-700 shadow-2xl p-4"
                                initial={{ opacity: 0, y: -5, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -5, scale: 0.97 }}>
                                <h4 className="text-white font-semibold text-sm mb-2">Settings</h4>
                                <p className="text-zinc-400 text-xs mb-3">Customize your experience.</p>
                                <div className="space-y-2">
                                    {["Notifications", "Dark Mode", "Sounds"].map(s => (
                                        <div key={s} className="flex items-center justify-between py-1.5">
                                            <span className="text-zinc-300 text-sm">{s}</span>
                                            <div className="w-9 h-5 rounded-full bg-blue-600 relative cursor-pointer">
                                                <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-white" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
