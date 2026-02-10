"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export function GitHubGlobeDemo() {
    return (
        <div className="flex items-center justify-center min-h-[500px] bg-[#0d1117] rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),rgba(0,0,0,0))]" />

            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 border border-zinc-700/50 rounded-full flex items-center justify-center relative"
            >
                <div className="w-full h-px bg-zinc-800 absolute top-1/2 -translate-y-1/2" />
                <div className="h-full w-px bg-zinc-800 absolute left-1/2 -translate-x-1/2" />

                {/* Simplified globe points */}
                {useMemo(() => [...Array(8)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full glow"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            boxShadow: "0 0 10px #3b82f6"
                        }}
                    />
                )), [])}
            </motion.div>

            <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-zinc-500 text-sm">Interactive 3D Globe Visualization</p>
                <p className="text-xs text-zinc-600 mt-1">(Simplified CSS representation)</p>
            </div>
        </div>
    );
}
