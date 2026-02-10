"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export function SpotlightDemo() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative h-[400px] w-full overflow-hidden rounded-xl bg-zinc-950 cursor-none"
        >
            {/* Spotlight effect */}
            <motion.div
                className="pointer-events-none absolute inset-0"
                animate={{
                    background: isHovering
                        ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
                        : "none",
                }}
                transition={{ type: "tween", ease: "linear", duration: 0.1 }}
            />

            {/* Grid pattern */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Border highlight effect */}
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300"
                style={{
                    opacity: isHovering ? 1 : 0,
                    background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.08), transparent 40%)`,
                }}
            />

            {/* Cards grid */}
            <div className="relative z-10 flex h-full items-center justify-center gap-6 p-8">
                {[
                    { title: "Motion", icon: "⚡", desc: "Smooth animations" },
                    { title: "Effects", icon: "✨", desc: "Visual enhancements" },
                    { title: "Interactive", icon: "🎯", desc: "User engagement" },
                ].map((card, i) => (
                    <motion.div
                        key={i}
                        className="group relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{
                            scale: 1.02,
                            borderColor: "rgba(59, 130, 246, 0.5)",
                        }}
                    >
                        <div className="text-3xl mb-3">{card.icon}</div>
                        <h3 className="text-lg font-semibold text-white mb-1">{card.title}</h3>
                        <p className="text-sm text-zinc-500">{card.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Cursor follower */}
            {isHovering && (
                <motion.div
                    className="pointer-events-none absolute z-50 h-4 w-4 rounded-full bg-blue-500/50 blur-sm"
                    animate={{
                        x: mousePosition.x - 8,
                        y: mousePosition.y - 8,
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            )}

            {/* Instructions */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-xs text-zinc-600">Move mouse to see spotlight effect</p>
            </div>
        </div>
    );
}
