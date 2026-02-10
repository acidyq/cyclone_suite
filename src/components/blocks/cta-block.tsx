"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Gift } from "lucide-react";

export function CtaBlockDemo() {
    return (
        <div className="space-y-16">
            {/* CTA Variant 1: Gradient Full Width */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 p-8 md:p-12 text-center relative overflow-hidden"
            >
                {/* Animated background elements */}
                <motion.div
                    className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />

                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                    >
                        <Gift className="w-4 h-4 text-yellow-300" />
                        <span className="text-sm text-white">Limited Time: 50% Off Pro License</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to build something amazing?
                    </h2>
                    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                        Join thousands of developers who are shipping beautiful products faster with Cyclone Suite.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-violet-600 font-semibold rounded-xl hover:bg-white/90 transition-colors flex items-center justify-center gap-2">
                            Get Started Free
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20">
                            View Components
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* CTA Variant 2: Split with Image */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden">
                <div className="grid md:grid-cols-2">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="p-8 md:p-12 flex flex-col justify-center"
                    >
                        <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-2">
                            Start building today
                        </span>
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                            Transform your workflow
                        </h2>
                        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                            Stop spending weeks on UI. Our components let you focus on building features that matter to your users.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                                <Zap className="w-4 h-4" />
                                Start Free Trial
                            </button>
                            <button className="px-6 py-3 text-zinc-700 dark:text-zinc-300 font-semibold hover:text-zinc-900 dark:hover:text-white transition-colors">
                                Learn More →
                            </button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="h-64 md:h-auto bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center"
                    >
                        <div className="text-center text-white">
                            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                                <Sparkles className="w-10 h-10" />
                            </div>
                            <p className="text-lg font-medium">10,000+ Components</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* CTA Variant 3: Minimal with Stats */}
            <div className="rounded-2xl bg-zinc-900 dark:bg-zinc-950 p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:col-span-2"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Ready to get started?
                        </h2>
                        <p className="text-zinc-400 mb-6">
                            Join the community of developers building with Cyclone Suite.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button className="px-6 py-3 bg-white text-zinc-900 font-semibold rounded-lg hover:bg-zinc-100 transition-colors">
                                Browse Components
                            </button>
                            <button className="px-6 py-3 text-white border border-zinc-700 rounded-lg hover:border-zinc-600 transition-colors">
                                Read Docs
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="grid grid-cols-2 gap-4"
                    >
                        <div className="text-center p-4 rounded-xl bg-zinc-800/50">
                            <div className="text-3xl font-bold text-white">100+</div>
                            <div className="text-sm text-zinc-400">Components</div>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-zinc-800/50">
                            <div className="text-3xl font-bold text-white">50k+</div>
                            <div className="text-sm text-zinc-400">Downloads</div>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-zinc-800/50">
                            <div className="text-3xl font-bold text-white">99%</div>
                            <div className="text-sm text-zinc-400">Satisfaction</div>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-zinc-800/50">
                            <div className="text-3xl font-bold text-white">24/7</div>
                            <div className="text-sm text-zinc-400">Support</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
