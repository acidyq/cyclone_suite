"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export function MagneticButtonDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8 min-h-[300px] p-8">
            <MagneticButton>
                <span className="px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-medium">
                    Hover Me
                </span>
            </MagneticButton>

            <MagneticButton strength={0.5}>
                <span className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium">
                    Strong Pull
                </span>
            </MagneticButton>

            <MagneticButton strength={0.2}>
                <span className="px-8 py-4 border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 rounded-xl font-medium">
                    Subtle Effect
                </span>
            </MagneticButton>
        </div>
    );
}

function MagneticButton({
    children,
    strength = 0.35,
}: {
    children: React.ReactNode;
    strength?: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        setPosition({
            x: deltaX * strength,
            y: deltaY * strength,
        });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            className="cursor-pointer"
        >
            {children}
        </motion.div>
    );
}
