"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function ProgressDemo() {
    const [p1, setP1] = useState(0);
    const [p2, setP2] = useState(0);
    useEffect(() => {
        const t = setInterval(() => {
            setP1(prev => (prev >= 100 ? 0 : prev + 1));
            setP2(prev => (prev >= 100 ? 0 : prev + 0.7));
        }, 80);
        return () => clearInterval(t);
    }, []);
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl space-y-10 w-full">
            <h3 className="text-xl font-bold text-white">Progress</h3>
            <div className="w-full max-w-md space-y-8">
                {/* Linear */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm"><span className="text-zinc-400">Uploading...</span><span className="text-white">{Math.round(p1)}%</span></div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" animate={{ width: `${p1}%` }} transition={{ duration: 0.1 }} />
                    </div>
                </div>
                {/* Striped */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm"><span className="text-zinc-400">Processing...</span><span className="text-white">{Math.round(p2)}%</span></div>
                    <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                        <motion.div className="h-full rounded-full bg-emerald-500" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.1) 8px, rgba(255,255,255,0.1) 16px)", backgroundSize: "200% 100%" }}
                            animate={{ width: `${p2}%`, backgroundPositionX: ["0%", "100%"] }} transition={{ width: { duration: 0.1 }, backgroundPositionX: { duration: 1, repeat: Infinity, ease: "linear" } }} />
                    </div>
                </div>
                {/* Circular */}
                <div className="flex justify-center gap-8">
                    {[{ pct: p1, color: "#3b82f6" }, { pct: p2, color: "#10b981" }].map((c, i) => (
                        <div key={i} className="relative w-20 h-20">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                <circle cx="18" cy="18" r="15" fill="none" stroke="#27272a" strokeWidth="3" />
                                <motion.circle cx="18" cy="18" r="15" fill="none" stroke={c.color} strokeWidth="3" strokeLinecap="round"
                                    strokeDasharray={94.25} animate={{ strokeDashoffset: 94.25 - (c.pct / 100) * 94.25 }} transition={{ duration: 0.1 }} />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">{Math.round(c.pct)}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
