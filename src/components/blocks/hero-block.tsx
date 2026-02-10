"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";

export function HeroBlockDemo() {
    return (
        <div className="space-y-16">
            {/* Hero Variant 1: Gradient with Floating Elements */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-8 md:p-16">
                {/* Floating orbs */}
                <motion.div
                    className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                    animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-10 left-10 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl"
                    animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />

                <div className="relative z-10 max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-yellow-300" />
                        <span className="text-sm text-white/90">New: AI-Powered Features</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Build Beautiful
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-yellow-200">
                            Interfaces Faster
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/80 mb-8 max-w-xl mx-auto"
                    >
                        Open-source React components with stunning animations. Curated from the best UI libraries for modern web applications.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                            Get Started
                            <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm border border-white/20">
                            <Play className="w-4 h-4" />
                            Watch Demo
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Hero Variant 2: Minimal with Badge */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8 md:p-16">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-sm mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        v2.0 Now Available
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
                    >
                        The modern component library for React
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-zinc-600 dark:text-zinc-400 mb-8"
                    >
                        Beautifully designed components built with Tailwind CSS and Framer Motion.
                        Copy and paste into your apps.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <button className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold rounded-lg hover:opacity-90 transition-opacity">
                            Browse Components
                        </button>
                        <button className="px-6 py-3 text-zinc-700 dark:text-zinc-300 font-semibold hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2">
                            Documentation
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Hero Variant 3: Split with Image Placeholder */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm mb-4"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Open Source</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
                        >
                            Ship products faster with our components
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-zinc-600 dark:text-zinc-400 mb-6"
                        >
                            Stop spending hours on UI. Use our production-ready components and focus on what matters.
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="self-start px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                        >
                            Start Building
                        </motion.button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative h-64 md:h-auto bg-gradient-to-br from-blue-100 to-violet-100 dark:from-blue-900/30 dark:to-violet-900/30 flex items-center justify-center"
                    >
                        <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 shadow-2xl flex items-center justify-center">
                            <Sparkles className="w-12 h-12 text-white" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
