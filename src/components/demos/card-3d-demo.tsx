"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export function Card3dDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8 min-h-[400px] p-8">
            <Card3D
                title="Premium Card"
                description="Hover to see the magic"
                gradient="from-purple-600 to-pink-600"
            />
            <Card3D
                title="Interactive"
                description="3D rotation follows mouse"
                gradient="from-blue-600 to-cyan-600"
            />
        </div>
    );
}

function Card3D({
    title,
    description,
    gradient,
}: {
    title: string;
    description: string;
    gradient: string;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = (e.clientY - centerY) / 10;
        const rotateY = (centerX - e.clientX) / 10;
        setRotation({ x: rotateX, y: rotateY });
    };

    return (
        <motion.div
            ref={cardRef}
            className="relative w-64 h-80 cursor-pointer"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setRotation({ x: 0, y: 0 });
            }}
        >
            <motion.div
                className={`relative w-full h-full rounded-2xl bg-gradient-to-br ${gradient} shadow-xl overflow-hidden`}
                animate={{
                    rotateX: rotation.x,
                    rotateY: rotation.y,
                    scale: isHovered ? 1.05 : 1,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Glare effect */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `linear-gradient(${105 + rotation.y * 2}deg, rgba(255,255,255,0.25) 0%, transparent 80%)`,
                    }}
                />

                {/* Floating elements */}
                <motion.div
                    className="absolute top-8 right-8 w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm"
                    animate={{ z: isHovered ? 40 : 0 }}
                    style={{ transform: "translateZ(40px)" }}
                />
                <motion.div
                    className="absolute bottom-20 left-6 w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm"
                    animate={{ z: isHovered ? 60 : 0 }}
                    style={{ transform: "translateZ(60px)" }}
                />

                {/* Content */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6"
                    style={{ transform: "translateZ(30px)" }}
                >
                    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-white/80 text-sm">{description}</p>
                </motion.div>

                {/* Edge highlight */}
                <div className="absolute inset-0 rounded-2xl border border-white/20" />
            </motion.div>

            {/* Shadow */}
            <motion.div
                className="absolute inset-0 rounded-2xl bg-black/50 blur-xl -z-10"
                animate={{
                    scale: isHovered ? 0.9 : 0.95,
                    y: isHovered ? 20 : 10,
                }}
            />
        </motion.div>
    );
}
