"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TABS = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "pricing", label: "Pricing" },
    { id: "faq", label: "FAQ" },
];

const CONTENT: Record<string, string> = {
    overview: "Welcome to Cyclone Suite. The most comprehensive collection of premium React components with stunning animations.",
    features: "100+ components, Framer Motion animations, Dark mode support, TypeScript ready, and fully customizable.",
    pricing: "Free to use. Open source. No hidden costs. Just beautiful components for your next project.",
    faq: "Have questions? Check our documentation or reach out on GitHub for support.",
};

export function AnimatedTabsDemo() {
    const [activeTab, setActiveTab] = useState(TABS[0].id);

    return (
        <div className="w-full max-w-xl mx-auto p-8">
            {/* Tab buttons */}
            <div className="relative flex gap-1 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800">
                {TABS.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className="relative flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors z-10"
                        style={{
                            color: activeTab === tab.id ? "var(--foreground)" : "var(--muted-foreground)",
                        }}
                    >
                        {tab.label}
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-white dark:bg-zinc-900 rounded-lg shadow-sm z-[-1]"
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Tab content */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="mt-6 p-6 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
            >
                <p className="text-zinc-700 dark:text-zinc-300">
                    {CONTENT[activeTab]}
                </p>
            </motion.div>

            {/* Underline style tabs */}
            <div className="mt-12">
                <h4 className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-4">
                    Underline Style
                </h4>
                <div className="relative flex gap-6 border-b border-zinc-200 dark:border-zinc-800">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`pb-3 text-sm font-medium transition-colors ${activeTab === tab.id
                                    ? "text-zinc-900 dark:text-zinc-100"
                                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
                                }`}
                        >
                            {tab.label}
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-900 dark:bg-zinc-100"
                                    style={{ width: "auto" }}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
