"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Meteor {
    id: number;
    x: number;
    delay: number;
    duration: number;
}

export function MeteorShowerDemo() {
    const meteors: Meteor[] = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 3,
    }));

    return (
        <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-zinc-950">
            {/* Stars background */}
            <div className="absolute inset-0">
                {Array.from({ length: 50 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{ opacity: [0.2, 0.8, 0.2] }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Meteors */}
            {meteors.map((meteor) => (
                <motion.div
                    key={meteor.id}
                    className="absolute h-[2px] w-24"
                    style={{
                        left: `${meteor.x}%`,
                        top: "-10%",
                        background: "linear-gradient(to right, #ffffff, transparent)",
                        transform: "rotate(215deg)",
                    }}
                    animate={{
                        x: [0, -400],
                        y: [0, 500],
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: meteor.duration,
                        delay: meteor.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {/* Meteor head glow */}
                    <div
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                        style={{
                            boxShadow: "0 0 10px 2px rgba(255,255,255,0.8)",
                        }}
                    />
                </motion.div>
            ))}

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center">
                <div className="text-center">
                    <motion.h2
                        className="text-4xl font-bold text-white mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Meteor Shower
                    </motion.h2>
                    <motion.p
                        className="text-zinc-400"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Animated shooting stars across the night sky
                    </motion.p>
                </div>
            </div>
        </div>
    );
}
