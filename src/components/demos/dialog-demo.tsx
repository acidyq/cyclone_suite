"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function DialogDemo() {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl">
            <button onClick={() => setOpen(true)} className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
                Open Dialog
            </button>
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
                        <motion.div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md"
                            initial={{ opacity: 0, scale: 0.95, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 10 }}>
                            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl p-6 space-y-4">
                                <h2 className="text-lg font-bold text-white">Delete Project?</h2>
                                <p className="text-zinc-400 text-sm">This action cannot be undone. All data associated with this project will be permanently removed.</p>
                                <div className="flex justify-end gap-3 pt-2">
                                    <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-300 text-sm hover:bg-zinc-700 transition">Cancel</button>
                                    <button onClick={() => setOpen(false)} className="px-4 py-2 rounded-lg bg-red-600 text-white text-sm hover:bg-red-700 transition">Delete</button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
