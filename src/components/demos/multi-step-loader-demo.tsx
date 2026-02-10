"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const steps = [
    { text: "Initializing...", icon: "⚙️" },
    { text: "Connecting to database...", icon: "🔌" },
    { text: "Fetching configuration...", icon: "📦" },
    { text: "Building assets...", icon: "🏗️" },
    { text: "Running migrations...", icon: "🔄" },
    { text: "Optimizing...", icon: "⚡" },
    { text: "Almost there...", icon: "🎯" },
    { text: "Complete!", icon: "✅" },
];

export function MultiStepLoaderDemo() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!isLoading) return;
        if (currentStep >= steps.length - 1) {
            setTimeout(() => {
                setIsLoading(false);
                setCurrentStep(0);
            }, 1500);
            return;
        }
        const timer = setTimeout(() => setCurrentStep((s) => s + 1), 1200);
        return () => clearTimeout(timer);
    }, [currentStep, isLoading]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl">
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="w-full max-w-sm space-y-6"
                    >
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: i <= currentStep ? 1 : 0.3,
                                    x: i <= currentStep ? 0 : -20,
                                }}
                                transition={{ delay: i * 0.1, duration: 0.3 }}
                            >
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${i < currentStep ? "bg-green-500/20" :
                                        i === currentStep ? "bg-blue-500/20" : "bg-zinc-800"
                                    }`}>
                                    {i < currentStep ? "✓" : step.icon}
                                </div>
                                <span className={`text-sm ${i <= currentStep ? "text-white" : "text-zinc-600"
                                    }`}>
                                    {step.text}
                                </span>
                                {i === currentStep && i < steps.length - 1 && (
                                    <motion.div
                                        className="ml-auto w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    />
                                )}
                            </motion.div>
                        ))}
                        {/* Progress bar */}
                        <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="button"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center space-y-4"
                    >
                        <h3 className="text-xl font-bold text-white">Multi-Step Loader</h3>
                        <p className="text-zinc-400 text-sm">Click to see the step-by-step loading sequence</p>
                        <button
                            onClick={() => setIsLoading(true)}
                            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                        >
                            Start Deploy
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
