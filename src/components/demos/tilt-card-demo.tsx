"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function TiltCardDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8 p-8">
            <TiltCard
                gradient="from-purple-500 to-pink-500"
                title="Motion"
                description="Smooth spring animations"
                icon="🎭"
            />
            <TiltCard
                gradient="from-blue-500 to-cyan-500"
                title="Effects"
                description="Visual enhancements"
                icon="✨"
            />
            <TiltCard
                gradient="from-orange-500 to-red-500"
                title="Interactive"
                description="User engagement"
                icon="🎯"
            />
        </div>
    );
}

function TiltCard({
    gradient,
    title,
    description,
    icon,
}: {
    gradient: string;
    title: string;
    description: string;
    icon: string;
}) {
    const cardRef = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative w-64 h-80 rounded-2xl cursor-pointer"
        >
            {/* Card background */}
            <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} shadow-xl`}
                style={{ transform: "translateZ(0px)" }}
            />

            {/* Glare effect */}
            <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                    background: `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.25), transparent 50%)`,
                    transform: "translateZ(10px)",
                }}
            />

            {/* Card content */}
            <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-6"
                style={{ transform: "translateZ(40px)" }}
            >
                <motion.div
                    className="text-5xl mb-4"
                    style={{ transform: "translateZ(60px)" }}
                >
                    {icon}
                </motion.div>
                <motion.h3
                    className="text-2xl font-bold text-white mb-2"
                    style={{ transform: "translateZ(50px)" }}
                >
                    {title}
                </motion.h3>
                <motion.p
                    className="text-white/70 text-sm"
                    style={{ transform: "translateZ(40px)" }}
                >
                    {description}
                </motion.p>
            </div>

            {/* Floating particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-white/30"
                    style={{
                        left: `${20 + i * 15}%`,
                        top: `${20 + (i % 3) * 20}%`,
                        transform: "translateZ(80px)",
                    }}
                    animate={{
                        y: [0, -10, 0],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.2,
                    }}
                />
            ))}
        </motion.div>
    );
}
