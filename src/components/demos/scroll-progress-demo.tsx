"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressDemo() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div className="relative">
            {/* Fixed progress bar at top */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
                style={{ scaleX }}
            />

            {/* Demo content to scroll */}
            <div className="space-y-8 p-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                        Scroll Progress Demo
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Watch the progress bar at the top as you scroll this content
                    </p>
                </div>

                {[1, 2, 3, 4, 5].map((section) => (
                    <motion.div
                        key={section}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="p-8 rounded-xl bg-zinc-100 dark:bg-zinc-800"
                    >
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                            Section {section}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </p>
                        <div className="mt-6 grid grid-cols-3 gap-4">
                            {[1, 2, 3].map((card) => (
                                <div
                                    key={card}
                                    className="h-20 rounded-lg bg-zinc-200 dark:bg-zinc-700"
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}

                <div className="text-center py-12">
                    <p className="text-zinc-500 dark:text-zinc-400">
                        ✓ You&apos;ve reached the end!
                    </p>
                </div>
            </div>

            {/* Circular progress indicator */}
            <div className="fixed bottom-8 right-8 z-50">
                <svg width="60" height="60" viewBox="0 0 60 60">
                    <circle
                        cx="30"
                        cy="30"
                        r="26"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="text-zinc-200 dark:text-zinc-800"
                    />
                    <motion.circle
                        cx="30"
                        cy="30"
                        r="26"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="163.36"
                        style={{
                            strokeDashoffset: useSpring(
                                scrollYProgress.get() * -163.36 + 163.36,
                                { stiffness: 100, damping: 30 }
                            ),
                            rotate: -90,
                            transformOrigin: "center",
                        }}
                    />
                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="50%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
}
