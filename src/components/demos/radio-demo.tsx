"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function RadioDemo() {
    const [selected, setSelected] = useState("medium");
    const options = [
        { value: "small", label: "Small", desc: "4 GB RAM, 2 CPUs" },
        { value: "medium", label: "Medium", desc: "8 GB RAM, 4 CPUs" },
        { value: "large", label: "Large", desc: "16 GB RAM, 8 CPUs" },
    ];
    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] p-8 bg-zinc-950 rounded-xl space-y-6">
            <h3 className="text-xl font-bold text-white">Radio Group</h3>
            <div className="w-full max-w-xs space-y-3">
                {options.map(opt => (
                    <label key={opt.value} onClick={() => setSelected(opt.value)}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${selected === opt.value ? "border-blue-500 bg-blue-500/10" : "border-zinc-700 hover:border-zinc-600"}`}>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selected === opt.value ? "border-blue-500" : "border-zinc-600"}`}>
                            <motion.div className="w-2.5 h-2.5 rounded-full bg-blue-500"
                                animate={{ scale: selected === opt.value ? 1 : 0 }} transition={{ type: "spring", stiffness: 500, damping: 30 }} />
                        </div>
                        <div><p className="text-white text-sm font-medium">{opt.label}</p><p className="text-zinc-500 text-xs">{opt.desc}</p></div>
                    </label>
                ))}
            </div>
        </div>
    );
}
