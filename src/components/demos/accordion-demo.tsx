"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ_ITEMS = [
    {
        question: "What is Cyclone Suite?",
        answer: "Cyclone Suite is a collection of premium React components with stunning animations, curated from the best UI libraries including shadcn/ui, Motion Primitives, Aceternity UI, and Cult UI.",
    },
    {
        question: "How do I install components?",
        answer: "You can install components using the shadcn CLI: npx shadcn@latest add @cyclonesuite/[component-name]. All components are built with React, Tailwind CSS, and Framer Motion.",
    },
    {
        question: "Are the components accessible?",
        answer: "Yes! All components are built with accessibility in mind, following WCAG guidelines and best practices for keyboard navigation and screen readers.",
    },
    {
        question: "Can I customize the components?",
        answer: "Absolutely. All components are fully customizable. You can modify colors, animations, sizes, and more using Tailwind CSS classes and component props.",
    },
];

export function AccordionDemo() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="w-full max-w-2xl mx-auto p-8">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
                Frequently Asked Questions
            </h3>
            <div className="space-y-3">
                {FAQ_ITEMS.map((item, index) => (
                    <motion.div
                        key={index}
                        className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
                        initial={false}
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-4 text-left bg-zinc-50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                        >
                            <span className="font-medium text-zinc-900 dark:text-zinc-100">
                                {item.question}
                            </span>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronDown className="h-5 w-5 text-zinc-500" />
                            </motion.div>
                        </button>
                        <AnimatePresence initial={false}>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="p-4 pt-0 text-zinc-600 dark:text-zinc-400">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
