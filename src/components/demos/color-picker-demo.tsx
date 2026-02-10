"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ColorPickerDemo() {
    const [color, setColor] = useState("#3b82f6");
    const colors = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"];

    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] p-8 bg-zinc-950 rounded-xl space-y-6">
            <motion.div
                className="w-32 h-32 rounded-2xl shadow-2xl mb-4"
                style={{ backgroundColor: color }}
                animate={{ backgroundColor: color }}
            />

            <div className="flex bg-zinc-900 p-2 rounded-xl border border-zinc-800 gap-2">
                {colors.map((c) => (
                    <button
                        key={c}
                        onClick={() => setColor(c)}
                        className="w-8 h-8 rounded-full relative focus:outline-none"
                        style={{ backgroundColor: c }}
                    >
                        {color === c && (
                            <motion.div
                                layoutId="activeColor"
                                className="absolute inset-0 rounded-full border-2 border-white"
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>
            <p className="text-zinc-500 font-mono text-sm uppercase">{color}</p>
        </div>
    );
}
