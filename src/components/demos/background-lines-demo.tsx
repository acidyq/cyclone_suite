"use client";

import { motion } from "framer-motion";

export function BackgroundLinesDemo() {
    const lines = Array.from({ length: 8 }, (_, i) => i);

    return (
        <div className="relative min-h-[400px] rounded-xl overflow-hidden bg-zinc-950 flex items-center justify-center">
            {/* SVG wave lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 500" preserveAspectRatio="none">
                {lines.map((i) => (
                    <motion.path
                        key={i}
                        d={`M0,${200 + i * 20} Q300,${150 + i * 15 + Math.sin(i) * 30} 600,${200 + i * 20} T1200,${200 + i * 20}`}
                        fill="none"
                        stroke={`rgba(99, 102, 241, ${0.1 + i * 0.03})`}
                        strokeWidth={1.5}
                        animate={{
                            d: [
                                `M0,${200 + i * 20} Q300,${150 + i * 15} 600,${200 + i * 20} T1200,${200 + i * 20}`,
                                `M0,${200 + i * 20} Q300,${250 + i * 15} 600,${200 + i * 20} T1200,${200 + i * 20}`,
                                `M0,${200 + i * 20} Q300,${150 + i * 15} 600,${200 + i * 20} T1200,${200 + i * 20}`,
                            ],
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </svg>
            <div className="relative z-10 text-center space-y-4">
                <h2 className="text-4xl font-bold text-white">Background Lines</h2>
                <p className="text-zinc-400 max-w-md mx-auto">
                    SVG paths that animate in a wave pattern. Great for hero section backgrounds.
                </p>
            </div>
        </div>
    );
}
