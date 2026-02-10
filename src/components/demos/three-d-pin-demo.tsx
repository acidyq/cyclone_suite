"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, MouseEvent } from "react";

export function ThreeDPinDemo() {
    return (
        <div className="flex flex-wrap items-center justify-center gap-8 min-h-[500px] p-8 bg-zinc-950 rounded-xl">
            {[
                { title: "San Francisco", desc: "HQ Office", gradient: "from-blue-500 to-cyan-500" },
                { title: "New York", desc: "East Coast Hub", gradient: "from-purple-500 to-pink-500" },
                { title: "London", desc: "European Office", gradient: "from-emerald-500 to-teal-500" },
            ].map((pin) => (
                <motion.div
                    key={pin.title}
                    className="group relative"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                    {/* Card */}
                    <div className="relative w-56 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 p-5">
                        <div className={`absolute inset-0 bg-gradient-to-br ${pin.gradient} opacity-5 group-hover:opacity-15 transition-opacity duration-300`} />
                        <div className="relative z-10">
                            <h3 className="text-white font-bold">{pin.title}</h3>
                            <p className="text-zinc-400 text-sm mt-1">{pin.desc}</p>
                        </div>
                    </div>

                    {/* Pin stem */}
                    <div className="flex flex-col items-center">
                        <div className={`w-[2px] h-12 bg-gradient-to-b ${pin.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />
                        <motion.div
                            className={`w-4 h-4 rounded-full bg-gradient-to-br ${pin.gradient}`}
                            animate={{
                                boxShadow: [
                                    `0 0 10px rgba(59,130,246,0.3)`,
                                    `0 0 20px rgba(59,130,246,0.5)`,
                                    `0 0 10px rgba(59,130,246,0.3)`,
                                ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        {/* Shadow ellipse */}
                        <div className="w-6 h-2 bg-zinc-700/50 rounded-full blur-sm mt-1" />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
