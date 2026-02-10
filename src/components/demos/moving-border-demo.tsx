"use client";

import { motion } from "framer-motion";

export function MovingBorderDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8 p-8">
            {/* Moving Border Card */}
            <MovingBorderCard>
                <div className="text-center">
                    <div className="text-3xl mb-3">🚀</div>
                    <h3 className="text-lg font-semibold text-white mb-1">Launch Ready</h3>
                    <p className="text-sm text-zinc-400">Deploy with confidence</p>
                </div>
            </MovingBorderCard>

            {/* Moving Border Button */}
            <MovingBorderButton>
                Get Started →
            </MovingBorderButton>

            {/* Moving Border Badge */}
            <MovingBorderBadge>
                ✨ New Feature
            </MovingBorderBadge>
        </div>
    );
}

function MovingBorderCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative p-[2px] rounded-2xl overflow-hidden">
            <motion.div
                className="absolute -inset-[100%]"
                style={{
                    background: "conic-gradient(from 0deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899, #06b6d4)",
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative rounded-2xl bg-zinc-950 p-8">
                {children}
            </div>
        </div>
    );
}

function MovingBorderButton({ children }: { children: React.ReactNode }) {
    return (
        <button className="relative group rounded-xl overflow-hidden cursor-pointer p-[2px]">
            <motion.div
                className="absolute -inset-[100%]"
                style={{
                    background: "conic-gradient(from 0deg, #22c55e, #10b981, #06b6d4, #3b82f6, #22c55e)",
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative block bg-zinc-900 rounded-[10px] px-6 py-3 text-white font-medium group-hover:bg-zinc-800 transition-colors">
                {children}
            </span>
        </button>
    );
}

function MovingBorderBadge({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative p-[1px] rounded-full overflow-hidden">
            <motion.div
                className="absolute -inset-[100%]"
                style={{
                    background: "conic-gradient(from 0deg, #f97316, #eab308, #84cc16, #22c55e, #f97316)",
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative block bg-zinc-950 rounded-full px-4 py-2 text-sm text-white">
                {children}
            </span>
        </div>
    );
}
