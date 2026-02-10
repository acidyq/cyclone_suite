"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function AlertDialogDemo() {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex items-center justify-center min-h-[300px] p-8 bg-zinc-950 rounded-xl">
            <button onClick={() => setOpen(true)} className="px-6 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition">
                Delete Account
            </button>
            <AnimatePresence>
                {open && (
                    <>
                        <motion.div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
                        <motion.div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm"
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
                            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl p-6 space-y-4">
                                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mx-auto">
                                    <span className="text-red-400 text-xl">⚠️</span>
                                </div>
                                <div className="text-center">
                                    <h2 className="text-lg font-bold text-white">Are you sure?</h2>
                                    <p className="text-zinc-400 text-sm mt-2">This will permanently delete your account and all associated data. This action cannot be undone.</p>
                                </div>
                                <div className="flex gap-3">
                                    <button onClick={() => setOpen(false)} className="flex-1 py-2.5 rounded-lg bg-zinc-800 text-zinc-300 text-sm hover:bg-zinc-700 transition">Cancel</button>
                                    <button onClick={() => setOpen(false)} className="flex-1 py-2.5 rounded-lg bg-red-600 text-white text-sm hover:bg-red-700 transition">Delete</button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
