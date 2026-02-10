"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function CheckboxDemo() {
    const [checks, setChecks] = useState([true, false, true, false]);
    const toggle = (i: number) => setChecks(prev => prev.map((v, j) => j === i ? !v : v));
    const labels = ["Enable notifications", "Auto-save drafts", "Show preview", "Dark mode"];
    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] p-8 bg-zinc-950 rounded-xl space-y-6">
            <h3 className="text-xl font-bold text-white">Checkbox</h3>
            <div className="space-y-4 w-full max-w-xs">
                {labels.map((label, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group" onClick={() => toggle(i)}>
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${checks[i] ? "bg-blue-600 border-blue-600" : "border-zinc-600 group-hover:border-zinc-400"}`}>
                            <motion.svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                initial={false} animate={{ pathLength: checks[i] ? 1 : 0, opacity: checks[i] ? 1 : 0 }}>
                                <motion.path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    initial={{ pathLength: 0 }} animate={{ pathLength: checks[i] ? 1 : 0 }} transition={{ duration: 0.2 }} />
                            </motion.svg>
                        </div>
                        <span className="text-zinc-300 text-sm">{label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}
