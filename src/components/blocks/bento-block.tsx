"use client";

import { motion } from "framer-motion";
import { Zap, Palette, Shield, Code2, Sparkles, Globe, Layers, Gauge } from "lucide-react";

const bentoItems = [
    {
        title: "Lightning Fast",
        description: "Build at the speed of thought with our optimized components",
        icon: Zap,
        gradient: "from-yellow-500 to-orange-500",
        size: "large",
    },
    {
        title: "Beautiful Design",
        description: "Crafted with pixel-perfect attention to detail",
        icon: Palette,
        gradient: "from-pink-500 to-rose-500",
        size: "small",
    },
    {
        title: "Type Safe",
        description: "Full TypeScript support out of the box",
        icon: Code2,
        gradient: "from-blue-500 to-cyan-500",
        size: "small",
    },
    {
        title: "Accessible",
        description: "Built with accessibility as a core principle following WAI-ARIA standards",
        icon: Shield,
        gradient: "from-emerald-500 to-teal-500",
        size: "medium",
    },
    {
        title: "Animations",
        description: "Smooth, physics-based animations powered by Framer Motion",
        icon: Sparkles,
        gradient: "from-violet-500 to-purple-500",
        size: "medium",
    },
];

export function BentoBlockDemo() {
    return (
        <div className="space-y-16">
            {/* Bento Variant 1: Apple-style Grid */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8 md:p-12">
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
                    >
                        Everything you need
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-600 dark:text-zinc-400"
                    >
                        A complete toolkit for building modern applications
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                    {/* Large card spanning 2 columns */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:col-span-2 md:row-span-2 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 p-8 flex flex-col justify-between min-h-[300px]"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Lightning Fast</h3>
                            <p className="text-white/80">
                                Build at the speed of thought with our optimized components. Every animation runs at 60fps.
                            </p>
                        </div>
                    </motion.div>

                    {/* Top right cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 p-6 flex flex-col justify-between min-h-[140px]"
                    >
                        <Palette className="w-8 h-8 text-white" />
                        <div>
                            <h3 className="font-bold text-white">Beautiful Design</h3>
                            <p className="text-white/80 text-sm">Pixel-perfect</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-6 flex flex-col justify-between min-h-[140px]"
                    >
                        <Code2 className="w-8 h-8 text-white" />
                        <div>
                            <h3 className="font-bold text-white">Type Safe</h3>
                            <p className="text-white/80 text-sm">Full TypeScript</p>
                        </div>
                    </motion.div>

                    {/* Bottom right cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-2 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 p-6 flex items-center gap-6"
                    >
                        <Shield className="w-12 h-12 text-white flex-shrink-0" />
                        <div>
                            <h3 className="font-bold text-white text-lg">Accessible</h3>
                            <p className="text-white/80 text-sm">Built with accessibility as a core principle</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bento Variant 2: Dark Theme with Borders */}
            <div className="rounded-2xl bg-zinc-900 dark:bg-zinc-950 p-8 md:p-12">
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold text-white mb-4"
                    >
                        Powerful Features
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                    {/* Featured large card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="md:col-span-2 rounded-2xl border border-zinc-800 bg-zinc-800/50 p-8 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-6">
                                <Sparkles className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Beautiful Animations</h3>
                            <p className="text-zinc-400 max-w-md">
                                Every component comes with carefully crafted animations powered by Framer Motion.
                                Physics-based springs make everything feel natural.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stacked cards */}
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="rounded-2xl border border-zinc-800 bg-zinc-800/50 p-6 group hover:border-zinc-700 transition-colors"
                        >
                            <Globe className="w-10 h-10 text-blue-400 mb-4" />
                            <h3 className="font-bold text-white mb-1">Global Ready</h3>
                            <p className="text-zinc-500 text-sm">i18n support built in</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="rounded-2xl border border-zinc-800 bg-zinc-800/50 p-6 group hover:border-zinc-700 transition-colors"
                        >
                            <Gauge className="w-10 h-10 text-emerald-400 mb-4" />
                            <h3 className="font-bold text-white mb-1">Performance</h3>
                            <p className="text-zinc-500 text-sm">Optimized bundle size</p>
                        </motion.div>
                    </div>

                    {/* Bottom row */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        className="rounded-2xl border border-zinc-800 bg-zinc-800/50 p-6"
                    >
                        <Layers className="w-10 h-10 text-pink-400 mb-4" />
                        <h3 className="font-bold text-white mb-1">Composable</h3>
                        <p className="text-zinc-500 text-sm">Mix and match components</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-2 rounded-2xl border border-zinc-800 bg-zinc-800/50 p-6 flex items-center gap-6"
                    >
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center flex-shrink-0">
                            <Code2 className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-lg mb-1">Developer Experience</h3>
                            <p className="text-zinc-400 text-sm">
                                Excellent DX with autocomplete, documentation, and examples for every component.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
