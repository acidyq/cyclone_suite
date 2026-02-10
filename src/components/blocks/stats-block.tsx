"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Download, Star, Code2, TrendingUp, Zap } from "lucide-react";

function AnimatedCounter({
    target,
    suffix = "",
    prefix = ""
}: {
    target: number;
    suffix?: string;
    prefix?: string;
}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [target]);

    return (
        <span>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
}

const stats = [
    { label: "Active Users", value: 50000, suffix: "+", icon: Users },
    { label: "Downloads", value: 120000, suffix: "+", icon: Download },
    { label: "GitHub Stars", value: 8500, suffix: "", icon: Star },
    { label: "Components", value: 150, suffix: "+", icon: Code2 },
];

export function StatsBlockDemo() {
    return (
        <div className="space-y-16">
            {/* Stats Variant 1: Animated Counters */}
            <div className="rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-8 md:p-12">
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold text-white mb-4"
                    >
                        Trusted by developers worldwide
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-white/80"
                    >
                        Join thousands of teams building with Cyclone Suite
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                        >
                            <stat.icon className="w-8 h-8 text-white/60 mx-auto mb-4" />
                            <div className="text-4xl font-bold text-white mb-2">
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                            </div>
                            <div className="text-white/70">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Stats Variant 2: Card Grid with Trends */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8 md:p-12">
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
                    >
                        Platform Metrics
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            label: "Total Revenue",
                            value: "$2.4M",
                            change: "+12.5%",
                            trend: "up",
                            icon: TrendingUp,
                            color: "emerald"
                        },
                        {
                            label: "Active Users",
                            value: "48.2K",
                            change: "+8.3%",
                            trend: "up",
                            icon: Users,
                            color: "blue"
                        },
                        {
                            label: "Performance",
                            value: "99.9%",
                            change: "+0.1%",
                            trend: "up",
                            icon: Zap,
                            color: "violet"
                        },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="p-6 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className={`w-10 h-10 rounded-lg bg-${stat.color}-100 dark:bg-${stat.color}-900/30 flex items-center justify-center`}>
                                    <stat.icon className={`w-5 h-5 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                                </div>
                                <span className="flex items-center gap-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                                    <TrendingUp className="w-4 h-4" />
                                    {stat.change}
                                </span>
                            </div>
                            <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                                {stat.value}
                            </div>
                            <div className="text-zinc-600 dark:text-zinc-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Stats Variant 3: Minimal Inline */}
            <div className="rounded-2xl bg-zinc-900 dark:bg-zinc-950 p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-2xl font-bold text-white mb-2"
                        >
                            Growing every day
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-zinc-400"
                        >
                            Numbers that speak for themselves
                        </motion.p>
                    </div>

                    <div className="flex flex-wrap gap-8 md:gap-12">
                        {[
                            { label: "Components", value: "150+" },
                            { label: "Contributors", value: "200+" },
                            { label: "Countries", value: "80+" },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * i }}
                                className="text-center"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-zinc-500 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Progress bars */}
                <div className="mt-10 grid md:grid-cols-3 gap-6">
                    {[
                        { label: "Documentation Coverage", value: 98 },
                        { label: "Test Coverage", value: 95 },
                        { label: "Accessibility Score", value: 100 },
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + 0.1 * i }}
                        >
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-zinc-400">{item.label}</span>
                                <span className="text-white font-medium">{item.value}%</span>
                            </div>
                            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${item.value}%` }}
                                    transition={{ duration: 1, delay: 0.5 + 0.1 * i }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
