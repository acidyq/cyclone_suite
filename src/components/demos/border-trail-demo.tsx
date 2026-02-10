"use client";

import { motion } from "framer-motion";

export function BorderTrailDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8 min-h-[300px] p-8">
            {/* Card with border trail */}
            <div className="relative p-8 rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="1"
                        y="1"
                        width="calc(100% - 2px)"
                        height="calc(100% - 2px)"
                        rx="16"
                        fill="none"
                        stroke="url(#gradient-trail)"
                        strokeWidth="2"
                        strokeDasharray="8 8"
                        className="opacity-30"
                    />
                    <motion.rect
                        x="1"
                        y="1"
                        width="calc(100% - 2px)"
                        height="calc(100% - 2px)"
                        rx="16"
                        fill="none"
                        stroke="url(#gradient-trail)"
                        strokeWidth="2"
                        strokeDasharray="40 200"
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 0 }}
                        animate={{ strokeDashoffset: -250 }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                    <defs>
                        <linearGradient id="gradient-trail" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="relative text-center">
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                        Border Trail
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Animated border following a path
                    </p>
                </div>
            </div>

            {/* Circle with border trail */}
            <div className="relative w-40 h-40">
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 160 160"
                >
                    <circle
                        cx="80"
                        cy="80"
                        r="75"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-zinc-200 dark:text-zinc-700"
                    />
                    <motion.circle
                        cx="80"
                        cy="80"
                        r="75"
                        fill="none"
                        stroke="url(#circle-gradient)"
                        strokeWidth="3"
                        strokeDasharray="100 400"
                        strokeLinecap="round"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{ transformOrigin: "center" }}
                    />
                    <defs>
                        <linearGradient id="circle-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl">⚡</span>
                </div>
            </div>

            {/* Button with border trail */}
            <button className="relative px-8 py-4 rounded-xl overflow-hidden group">
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="1"
                        y="1"
                        width="calc(100% - 2px)"
                        height="calc(100% - 2px)"
                        rx="12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="text-zinc-300 dark:text-zinc-700"
                    />
                    <motion.rect
                        x="1"
                        y="1"
                        width="calc(100% - 2px)"
                        height="calc(100% - 2px)"
                        rx="12"
                        fill="none"
                        stroke="url(#button-gradient)"
                        strokeWidth="2"
                        strokeDasharray="30 100"
                        strokeLinecap="round"
                        animate={{ strokeDashoffset: [-130, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                    <defs>
                        <linearGradient id="button-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#22c55e" />
                            <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                    </defs>
                </svg>
                <span className="relative font-medium text-zinc-900 dark:text-zinc-100">
                    Hover Me
                </span>
            </button>
        </div>
    );
}
