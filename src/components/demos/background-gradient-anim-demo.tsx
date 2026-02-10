"use client";

import { motion } from "framer-motion";

export function BackgroundGradientAnimDemo() {
    return (
        <div className="relative min-h-[400px] rounded-xl overflow-hidden">
            {/* Multiple animated gradient blobs */}
            <div className="absolute inset-0 bg-zinc-950">
                <motion.div
                    className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-30"
                    style={{ background: "linear-gradient(to right, #3b82f6, #8b5cf6)" }}
                    animate={{
                        x: ["-20%", "60%", "-20%"],
                        y: ["-20%", "50%", "-20%"],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-25"
                    style={{ background: "linear-gradient(to right, #ec4899, #f59e0b)" }}
                    animate={{
                        x: ["80%", "10%", "80%"],
                        y: ["60%", "-10%", "60%"],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute w-[350px] h-[350px] rounded-full blur-[100px] opacity-20"
                    style={{ background: "linear-gradient(to right, #10b981, #14b8a6)" }}
                    animate={{
                        x: ["30%", "70%", "30%"],
                        y: ["80%", "20%", "80%"],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
            {/* Content */}
            <div className="relative z-10 flex items-center justify-center min-h-[400px]">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-bold text-white">Background Gradient</h2>
                    <p className="text-zinc-300/70 max-w-md mx-auto">
                        Smooth, morphing gradient blobs that slowly move across the background.
                    </p>
                </div>
            </div>
        </div>
    );
}
