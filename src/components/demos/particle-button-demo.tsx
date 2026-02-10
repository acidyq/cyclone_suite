"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

interface Particle {
    id: number;
    x: number;
    y: number;
    angle: number;
    speed: number;
    size: number;
    color: string;
    life: number;
}

export function ParticleButtonDemo() {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [isClicked, setIsClicked] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const colors = [
        "#10b981",
        "#34d399",
        "#6ee7b7",
        "#a7f3d0",
        "#d1fae5",
    ];

    const createParticles = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = buttonRef.current;
        if (!button) return;

        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newParticles: Particle[] = [];
        for (let i = 0; i < 15; i++) {
            newParticles.push({
                id: Date.now() + i,
                x,
                y,
                angle: Math.random() * 360,
                speed: 2 + Math.random() * 4,
                size: 4 + Math.random() * 6,
                color: colors[Math.floor(Math.random() * colors.length)],
                life: 1,
            });
        }

        setParticles(newParticles);
        setIsClicked(true);

        setTimeout(() => {
            setParticles([]);
            setIsClicked(false);
        }, 600);
    };

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="relative">
                <button
                    ref={buttonRef}
                    onClick={createParticles}
                    className="relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                    <motion.span
                        className="flex items-center gap-2"
                        animate={isClicked ? { scale: [1, 0.95, 1] } : {}}
                        transition={{ duration: 0.15 }}
                    >
                        <Sparkles className="h-5 w-5" />
                        Click me!
                    </motion.span>

                    {/* Particles */}
                    <AnimatePresence>
                        {particles.map((particle) => (
                            <motion.div
                                key={particle.id}
                                className="absolute pointer-events-none rounded-full"
                                style={{
                                    left: particle.x,
                                    top: particle.y,
                                    width: particle.size,
                                    height: particle.size,
                                    backgroundColor: particle.color,
                                }}
                                initial={{ scale: 1, opacity: 1 }}
                                animate={{
                                    x: Math.cos((particle.angle * Math.PI) / 180) * particle.speed * 30,
                                    y: Math.sin((particle.angle * Math.PI) / 180) * particle.speed * 30,
                                    scale: 0,
                                    opacity: 0,
                                }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: "easeOut",
                                }}
                            />
                        ))}
                    </AnimatePresence>
                </button>
            </div>

            <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                Click the button to see particles
            </p>
        </div>
    );
}
