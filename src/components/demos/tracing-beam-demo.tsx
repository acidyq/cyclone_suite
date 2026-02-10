"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CONTENT_SECTIONS = [
    { title: "Introduction", content: "Welcome to the tracing beam demo." },
    { title: "Features", content: "Watch the beam trace as you scroll." },
    { title: "Technology", content: "Built with Framer Motion." },
    { title: "Conclusion", content: "Beautiful scroll-linked animations." },
];

export function TracingBeamDemo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div ref={containerRef} className="relative py-12 px-8">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
                Scroll to trace the beam
            </h3>

            <div className="relative max-w-lg mx-auto">
                {/* Tracing beam line */}
                <div className="absolute left-6 top-0 bottom-0 w-px">
                    {/* Background line */}
                    <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800" />

                    {/* Animated tracing line */}
                    <motion.div
                        className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
                        style={{
                            height: "100%",
                            scaleY: pathLength,
                            transformOrigin: "top",
                        }}
                    />

                    {/* Glowing dot at trace point */}
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-500 rounded-full"
                        style={{
                            top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
                            boxShadow: "0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(59, 130, 246, 0.4)",
                        }}
                    />
                </div>

                {/* Content sections */}
                <div className="space-y-16 ml-16">
                    {CONTENT_SECTIONS.map((section, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0.3, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            {/* Section marker */}
                            <div className="absolute -left-[52px] top-1 w-4 h-4 rounded-full bg-zinc-100 dark:bg-zinc-900 border-2 border-zinc-300 dark:border-zinc-700" />

                            <div className="p-6 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700">
                                <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                                    {section.title}
                                </h4>
                                <p className="text-zinc-600 dark:text-zinc-400">
                                    {section.content}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
