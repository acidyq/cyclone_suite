"use client";

import { motion } from "framer-motion";

export function MeterDemo() {
    const metrics = [
        { label: "Storage", used: 73, total: "100 GB", color: "from-blue-500 to-indigo-500" },
        { label: "Bandwidth", used: 45, total: "500 GB", color: "from-emerald-500 to-teal-500" },
        { label: "API Calls", used: 92, total: "1M/mo", color: "from-amber-500 to-orange-500" },
    ];
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl space-y-8">
            <h3 className="text-xl font-bold text-white">Meter</h3>
            <div className="w-full max-w-sm space-y-6">
                {metrics.map(m => (
                    <div key={m.label} className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-zinc-400">{m.label}</span>
                            <span className={`font-medium ${m.used > 80 ? "text-red-400" : "text-white"}`}>{m.used}% of {m.total}</span>
                        </div>
                        <div className="h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div className={`h-full rounded-full bg-gradient-to-r ${m.color}`}
                                initial={{ width: 0 }} animate={{ width: `${m.used}%` }} transition={{ duration: 1, ease: "easeOut" }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
