"use client";

import { motion } from "framer-motion";

export function MovingBorderButtonDemo() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] p-8 bg-zinc-950 rounded-xl space-y-8">
            <h3 className="text-xl font-bold text-white mb-4">Moving Border Button</h3>

            <div className="flex gap-4">
                <Button>Click me</Button>
                <Button>Secondary</Button>
            </div>
        </div>
    );
}

function Button({ children }: { children: React.ReactNode }) {
    return (
        <button className="relative group p-[2px] rounded-lg overflow-hidden cursor-pointer">
            <motion.div
                className="absolute -inset-[100%]"
                style={{
                    background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative block px-6 py-2 rounded-[6px] bg-zinc-900 text-white font-medium group-hover:bg-zinc-800 transition-colors">
                {children}
            </span>
        </button>
    );
}
