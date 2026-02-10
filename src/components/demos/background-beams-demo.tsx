"use client";

import { motion } from "framer-motion";

export function BackgroundBeamsDemo() {
    return (
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-zinc-950">
            {/* Beams */}
            <svg
                className="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <linearGradient id="beam2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    <linearGradient id="beam3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>

                {/* Animated beam paths */}
                {[
                    { path: "M0,200 Q200,100 400,200 T800,200", color: "url(#beam1)", delay: 0 },
                    { path: "M0,250 Q250,150 500,250 T1000,250", color: "url(#beam2)", delay: 1 },
                    { path: "M0,300 Q300,200 600,300 T1200,300", color: "url(#beam3)", delay: 2 },
                    { path: "M-100,150 Q150,50 400,150 T900,150", color: "url(#beam1)", delay: 0.5 },
                    { path: "M-50,350 Q200,250 450,350 T950,350", color: "url(#beam2)", delay: 1.5 },
                ].map((beam, i) => (
                    <motion.path
                        key={i}
                        d={beam.path}
                        stroke={beam.color}
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: [0, 1, 0],
                            opacity: [0, 0.8, 0],
                        }}
                        transition={{
                            duration: 4,
                            delay: beam.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}

                {/* Glowing orbs */}
                {[
                    { cx: "20%", cy: "40%", color: "#3b82f6" },
                    { cx: "50%", cy: "60%", color: "#8b5cf6" },
                    { cx: "80%", cy: "35%", color: "#06b6d4" },
                ].map((orb, i) => (
                    <motion.circle
                        key={i}
                        cx={orb.cx}
                        cy={orb.cy}
                        r="4"
                        fill={orb.color}
                        initial={{ opacity: 0.3 }}
                        animate={{
                            opacity: [0.3, 0.8, 0.3],
                            scale: [1, 1.5, 1],
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.5,
                            repeat: Infinity,
                        }}
                    >
                        <animate
                            attributeName="filter"
                            values="blur(2px);blur(4px);blur(2px)"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </motion.circle>
                ))}
            </svg>

            {/* Radial gradient overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.5) 100%)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center">
                <div className="text-center">
                    <motion.h2
                        className="text-4xl font-bold text-white mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Background Beams
                    </motion.h2>
                    <motion.p
                        className="text-zinc-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Energy beams flowing along SVG paths
                    </motion.p>
                </div>
            </div>
        </div>
    );
}
