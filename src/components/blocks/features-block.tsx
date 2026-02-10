"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Palette, Code2, Layers, Globe, Sparkles, Gauge } from "lucide-react";

const features = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Optimized animations running at 60fps for butter-smooth experiences"
    },
    {
        icon: Shield,
        title: "Type Safe",
        description: "Built with TypeScript for excellent developer experience"
    },
    {
        icon: Palette,
        title: "Customizable",
        description: "Easy to customize with Tailwind CSS utility classes"
    },
    {
        icon: Code2,
        title: "Copy & Paste",
        description: "Simply copy the code and paste into your project"
    },
    {
        icon: Layers,
        title: "Composable",
        description: "Build complex UIs from simple, reusable components"
    },
    {
        icon: Globe,
        title: "Accessible",
        description: "Built with accessibility in mind following WAI-ARIA standards"
    },
];

const features2 = [
    {
        icon: Sparkles,
        title: "Animation Library",
        description: "Pre-built animations using Framer Motion for stunning visual effects",
        gradient: "from-pink-500 to-rose-500"
    },
    {
        icon: Gauge,
        title: "Performance First",
        description: "Tree-shakeable components that only ship what you use",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        icon: Layers,
        title: "Dark Mode Ready",
        description: "Every component supports both light and dark themes out of the box",
        gradient: "from-violet-500 to-purple-500"
    },
];

export function FeaturesBlockDemo() {
    return (
        <div className="space-y-16">
            {/* Features Variant 1: Grid Layout */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8">
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-2 block"
                    >
                        Features
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
                    >
                        Everything you need to build
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
                    >
                        Open-source components designed for modern web applications with performance and accessibility in mind.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="p-6 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors group"
                        >
                            <div className="w-10 h-10 rounded-lg bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <feature.icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                            </div>
                            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Features Variant 2: Gradient Cards */}
            <div className="rounded-2xl bg-zinc-900 dark:bg-zinc-950 p-8 md:p-12">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold text-white mb-4"
                    >
                        Why choose Cyclone Suite?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-400 max-w-xl mx-auto"
                    >
                        Built by developers, for developers. Every component is crafted with attention to detail.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {features2.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="relative group"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                            <div className="relative p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50 h-full">
                                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4`}>
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-semibold text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-zinc-400">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Features Variant 3: Alternating Layout */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8">
                <div className="space-y-12">
                    {[
                        {
                            title: "Beautiful by Default",
                            description: "Every component is designed with aesthetics in mind. No more fighting with ugly default styles.",
                            icon: Palette,
                            color: "from-pink-500 to-orange-500"
                        },
                        {
                            title: "Smooth Animations",
                            description: "Powered by Framer Motion for physics-based animations that feel natural and responsive.",
                            icon: Sparkles,
                            color: "from-violet-500 to-blue-500"
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 * i }}
                            className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                        >
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400">
                                    {item.description}
                                </p>
                            </div>
                            <div className={`w-full md:w-64 h-48 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                                <item.icon className="w-16 h-16 text-white" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
