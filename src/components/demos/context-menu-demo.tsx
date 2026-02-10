"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function ContextMenuDemo() {
    const [menu, setMenu] = useState<{ x: number; y: number } | null>(null);
    return (
        <div className="flex items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl">
            <div className="w-full max-w-md h-64 rounded-xl border-2 border-dashed border-zinc-700 flex items-center justify-center relative"
                onContextMenu={e => { e.preventDefault(); const r = e.currentTarget.getBoundingClientRect(); setMenu({ x: e.clientX - r.left, y: e.clientY - r.top }); }}
                onClick={() => setMenu(null)}>
                <p className="text-zinc-500 text-sm">Right-click anywhere in this area</p>
                <AnimatePresence>
                    {menu && (
                        <motion.div className="absolute z-50 w-48 rounded-xl bg-zinc-800 border border-zinc-700 shadow-2xl overflow-hidden py-1"
                            style={{ left: menu.x, top: menu.y }}
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}>
                            {[
                                { label: "Edit", icon: "✏️" }, { label: "Duplicate", icon: "📋" },
                                { label: "Share", icon: "🔗" }, null,
                                { label: "Move to", icon: "📁" }, { label: "Rename", icon: "💬" }, null,
                                { label: "Delete", icon: "🗑️", danger: true },
                            ].map((item, i) =>
                                item === null ? (
                                    <div key={i} className="h-px bg-zinc-700 my-1" />
                                ) : (
                                    <button key={i} className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm hover:bg-zinc-700 transition ${(item as { danger?: boolean }).danger ? "text-red-400" : "text-zinc-300"}`}>
                                        <span className="text-xs">{item.icon}</span>
                                        {item.label}
                                    </button>
                                )
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
