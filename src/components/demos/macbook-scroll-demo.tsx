"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export function MacbookScrollDemo() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

    const scale = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [0.5, 1]);
    const translateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 50, -200]);

    return (
        <div ref={ref} className="h-[200vh] w-full bg-zinc-900 rounded-xl overflow-hidden relative">
            <div className="sticky top-0 h-screen flex items-center justify-center">
                <motion.div style={{ scale, opacity, y: translateY }} className="relative w-[30rem] aspect-[16/10] bg-zinc-800 rounded-xl border border-zinc-700 shadow-2xl flex items-center justify-center">
                    <div className="absolute top-2 w-2 h-2 rounded-full bg-red-500 left-3" />
                    <div className="absolute top-2 w-2 h-2 rounded-full bg-yellow-500 left-6" />
                    <div className="absolute top-2 w-2 h-2 rounded-full bg-green-500 left-9" />

                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white mb-2">Build Faster</h2>
                        <p className="text-zinc-400">Scroll to see the magic happen</p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
