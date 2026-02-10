"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, MouseEvent } from "react";

function DraggableCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);
    const [isDragging, setIsDragging] = useState(false);

    return (
        <motion.div
            className={`cursor-grab active:cursor-grabbing ${className}`}
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            dragElastic={0.15}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            style={{ x, y, rotateX, rotateY }}
            whileDrag={{ scale: 1.05, zIndex: 50 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
        >
            <div className={`transition-shadow duration-200 ${isDragging ? "shadow-2xl shadow-black/40" : "shadow-lg"}`}>
                {children}
            </div>
        </motion.div>
    );
}

export function DraggableCardDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8 min-h-[500px] p-8 bg-zinc-100 dark:bg-zinc-950 rounded-xl">
            <DraggableCard>
                <div className="w-64 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 p-6 text-white">
                    <div className="text-4xl mb-4">🎯</div>
                    <h3 className="text-xl font-bold mb-2">Drag Me</h3>
                    <p className="text-sm text-white/70">I tilt while being dragged and bounce back on release.</p>
                </div>
            </DraggableCard>
            <DraggableCard>
                <div className="w-64 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-700 p-6 text-white">
                    <div className="text-4xl mb-4">✨</div>
                    <h3 className="text-xl font-bold mb-2">Bouncy</h3>
                    <p className="text-sm text-white/70">Spring physics make the card feel playful and responsive.</p>
                </div>
            </DraggableCard>
            <DraggableCard>
                <div className="w-64 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700 p-6 text-white">
                    <div className="text-4xl mb-4">🔮</div>
                    <h3 className="text-xl font-bold mb-2">3D Tilt</h3>
                    <p className="text-sm text-white/70">Perspective rotation while dragging creates a 3D effect.</p>
                </div>
            </DraggableCard>
        </div>
    );
}
