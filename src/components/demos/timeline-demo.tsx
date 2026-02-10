"use client";

import { motion } from "framer-motion";

const TIMELINE_ITEMS = [
    {
        date: "2024",
        title: "Project Launch",
        description: "Cyclone Suite was born with the goal of creating the most beautiful component library.",
        icon: "🚀",
    },
    {
        date: "Q1 2024",
        title: "100+ Components",
        description: "Reached our first major milestone with over 100 premium animated components.",
        icon: "🎯",
    },
    {
        date: "Q2 2024",
        title: "Community Growth",
        description: "Growing developer community with thousands of downloads and contributions.",
        icon: "👥",
    },
    {
        date: "Q3 2024",
        title: "Enterprise Ready",
        description: "Full TypeScript support, accessibility compliance, and production-ready code.",
        icon: "⚡",
    },
];

export function TimelineDemo() {
    return (
        <div className="w-full max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
                Our Journey
            </h3>

            <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800" />

                {/* Timeline items */}
                <div className="space-y-8">
                    {TIMELINE_ITEMS.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative flex gap-6"
                        >
                            {/* Icon circle */}
                            <motion.div
                                className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-700 shadow-lg"
                                whileHover={{ scale: 1.1 }}
                            >
                                <span className="text-2xl">{item.icon}</span>
                            </motion.div>

                            {/* Content */}
                            <div className="flex-1 pt-2">
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                    {item.date}
                                </span>
                                <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mt-1">
                                    {item.title}
                                </h4>
                                <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
