"use client";

import { motion } from "framer-motion";

export function CanvasRevealDemo() {
    return (
        <div className="grid md:grid-cols-3 gap-6 p-8 bg-zinc-950 rounded-xl min-h-[400px]">
            {[
                { icon: "⚡", title: "Fast", color: "from-sky-500 to-blue-600" },
                { icon: "🎨", title: "Beautiful", color: "from-purple-500 to-pink-600" },
                { icon: "🛡️", title: "Secure", color: "from-emerald-500 to-teal-600" },
            ].map((card, i) => (
                <motion.div
                    key={card.title}
                    className="group relative rounded-2xl border border-zinc-800 bg-zinc-900 p-8 overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                >
                    {/* Dot grid that expands on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)`,
                                backgroundSize: "12px 12px",
                            }}
                        />
                        <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-20`}
                            initial={{ scale: 0, borderRadius: "100%" }}
                            whileInView={{ scale: 1, borderRadius: "0%" }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                    <div className="relative z-10 text-center space-y-4">
                        <span className="text-4xl block">{card.icon}</span>
                        <h3 className="text-xl font-bold text-white">{card.title}</h3>
                        <p className="text-zinc-400 text-sm">Hover to see the canvas reveal effect</p>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
