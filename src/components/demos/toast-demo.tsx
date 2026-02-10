"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function ToastDemo() {
    const [toasts, setToasts] = useState<{ id: number; msg: string; type: string }[]>([]);
    let counter = 0;

    function addToast(type: string) {
        const id = Date.now();
        const messages: Record<string, string> = {
            success: "Changes saved successfully!",
            error: "Something went wrong.",
            info: "New update available.",
            warning: "Storage almost full.",
        };
        setToasts(prev => [...prev, { id, msg: messages[type] || "", type }]);
        setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
    }

    const colors: Record<string, string> = {
        success: "bg-emerald-600 border-emerald-500",
        error: "bg-red-600 border-red-500",
        info: "bg-blue-600 border-blue-500",
        warning: "bg-amber-600 border-amber-500",
    };
    const icons: Record<string, string> = { success: "✓", error: "✕", info: "ℹ", warning: "⚠" };

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl relative">
            <div className="space-y-4 text-center">
                <h3 className="text-xl font-bold text-white">Toast Notifications</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                    {["success", "error", "info", "warning"].map(type => (
                        <button key={type} onClick={() => addToast(type)}
                            className="px-4 py-2 rounded-lg bg-zinc-800 text-white text-sm capitalize hover:bg-zinc-700 transition">
                            {type}
                        </button>
                    ))}
                </div>
            </div>
            <div className="fixed bottom-6 right-6 z-50 space-y-2 max-w-sm">
                <AnimatePresence>
                    {toasts.map(toast => (
                        <motion.div key={toast.id}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${colors[toast.type]} text-white shadow-2xl`}
                            initial={{ opacity: 0, x: 100, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 100, scale: 0.9 }}
                        >
                            <span className="text-lg">{icons[toast.type]}</span>
                            <span className="text-sm font-medium">{toast.msg}</span>
                            <button onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
                                className="ml-auto text-white/60 hover:text-white">×</button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
