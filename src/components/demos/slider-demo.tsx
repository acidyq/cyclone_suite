"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function SliderDemo() {
    const [value, setValue] = useState(60);
    const [v2, setV2] = useState(40);
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl space-y-10">
            <h3 className="text-xl font-bold text-white">Slider</h3>
            <div className="w-full max-w-sm space-y-8">
                <div className="space-y-3">
                    <div className="flex justify-between text-sm"><span className="text-zinc-400">Volume</span><span className="text-white">{value}%</span></div>
                    <div className="relative h-2 bg-zinc-800 rounded-full cursor-pointer" onClick={e => { const r = e.currentTarget.getBoundingClientRect(); setValue(Math.round(((e.clientX - r.left) / r.width) * 100)); }}>
                        <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${value}%` }} />
                        <motion.div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white shadow-lg border-2 border-blue-500" style={{ left: `${value}%`, marginLeft: -8 }}
                            whileHover={{ scale: 1.2 }} />
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between text-sm"><span className="text-zinc-400">Brightness</span><span className="text-white">{v2}%</span></div>
                    <div className="relative h-3 bg-zinc-800 rounded-full cursor-pointer" onClick={e => { const r = e.currentTarget.getBoundingClientRect(); setV2(Math.round(((e.clientX - r.left) / r.width) * 100)); }}>
                        <div className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full transition-all" style={{ width: `${v2}%` }} />
                        <motion.div className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white shadow-lg" style={{ left: `${v2}%`, marginLeft: -10 }}
                            whileHover={{ scale: 1.2 }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
