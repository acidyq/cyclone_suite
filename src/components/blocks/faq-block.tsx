"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "What is Cyclone Suite?",
        answer: "Cyclone Suite is a collection of open-source React components with stunning animations. Built with Tailwind CSS and Framer Motion, our components are designed to help you build beautiful web applications faster."
    },
    {
        question: "How do I install components?",
        answer: "You can install components using your package manager: npm install @cyclonesuite/[component-name]. All components are also available to copy and paste directly from our documentation."
    },
    {
        question: "Is Cyclone Suite free to use?",
        answer: "Yes! Cyclone Suite is completely free and open source. All components are available to use in personal and commercial projects with no restrictions."
    },
    {
        question: "Can I use it in commercial projects?",
        answer: "Yes! All our components are MIT licensed and can be used in personal and commercial projects without attribution required."
    },
    {
        question: "Do you offer support?",
        answer: "Free tier users have access to community support via GitHub discussions. You can also open issues on our GitHub repository for bug reports and feature requests."
    },
    {
        question: "How often are new components added?",
        answer: "We release new components weekly. Follow our GitHub repository and join our Discord to stay updated on the latest releases."
    },
];

function AccordionItem({
    item,
    isOpen,
    onToggle,
    variant = "default"
}: {
    item: typeof faqs[0];
    isOpen: boolean;
    onToggle: () => void;
    variant?: "default" | "minimal" | "bordered";
}) {
    const variants = {
        default: {
            container: "border-b border-zinc-200 dark:border-zinc-800",
            button: "py-5",
            icon: ChevronDown,
        },
        minimal: {
            container: "mb-2",
            button: "py-4 px-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800",
            icon: Plus,
        },
        bordered: {
            container: "mb-3 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden",
            button: "py-4 px-5 bg-white dark:bg-zinc-950",
            icon: ChevronDown,
        },
    };

    const style = variants[variant];
    const Icon = isOpen && variant === "minimal" ? Minus : style.icon;

    return (
        <div className={style.container}>
            <button
                onClick={onToggle}
                className={`w-full flex items-center justify-between text-left ${style.button} transition-colors`}
            >
                <span className="font-medium text-zinc-900 dark:text-zinc-100 pr-4">
                    {item.question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen && variant !== "minimal" ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                >
                    <Icon className={`w-5 h-5 ${isOpen ? 'text-violet-500' : 'text-zinc-400'}`} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className={`pb-5 ${variant === "minimal" || variant === "bordered" ? "px-4" : ""} text-zinc-600 dark:text-zinc-400`}>
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function FaqBlockDemo() {
    const [openIndex1, setOpenIndex1] = useState<number | null>(0);
    const [openIndex2, setOpenIndex2] = useState<number | null>(null);

    return (
        <div className="space-y-16">
            {/* FAQ Variant 1: Classic Accordion */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8 md:p-12">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-12 h-12 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mx-auto mb-4"
                        >
                            <HelpCircle className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
                        >
                            Frequently Asked Questions
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-zinc-600 dark:text-zinc-400"
                        >
                            Everything you need to know about Cyclone Suite
                        </motion.p>
                    </div>

                    <div>
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 * i }}
                            >
                                <AccordionItem
                                    item={faq}
                                    isOpen={openIndex1 === i}
                                    onToggle={() => setOpenIndex1(openIndex1 === i ? null : i)}
                                    variant="default"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Variant 2: Two Column with Card Style */}
            <div className="rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 p-8 md:p-12">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                        Common Questions
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Can&apos;t find what you&apos;re looking for? <a href="#" className="text-violet-600 dark:text-violet-400 hover:underline">Contact us</a>
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={faq.question}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 * i }}
                        >
                            <AccordionItem
                                item={faq}
                                isOpen={openIndex2 === i}
                                onToggle={() => setOpenIndex2(openIndex2 === i ? null : i)}
                                variant="bordered"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* FAQ Variant 3: Minimal Style */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                        Quick Answers
                    </h2>
                    {faqs.slice(0, 4).map((faq, i) => (
                        <AccordionItem
                            key={faq.question}
                            item={faq}
                            isOpen={false}
                            onToggle={() => { }}
                            variant="minimal"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
