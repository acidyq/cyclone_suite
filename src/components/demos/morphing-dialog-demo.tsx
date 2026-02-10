"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Move } from "lucide-react";

export function MorphingDialogDemo() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-[400px] p-8">
            {/* Trigger button that morphs into dialog */}
            <motion.div layoutId="dialog-container">
                {!isOpen ? (
                    <motion.button
                        layoutId="dialog-button"
                        onClick={() => setIsOpen(true)}
                        className="flex items-center gap-3 px-6 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-2xl font-medium shadow-lg"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.span layoutId="dialog-icon">
                            <Plus className="w-5 h-5" />
                        </motion.span>
                        <motion.span layoutId="dialog-title">Add New Item</motion.span>
                    </motion.button>
                ) : null}
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        />

                        {/* Morphing Dialog */}
                        <motion.div
                            layoutId="dialog-container"
                            className="fixed z-50 w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden"
                            style={{ top: "50%", left: "50%", x: "-50%", y: "-50%" }}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-800">
                                <div className="flex items-center gap-3">
                                    <motion.span
                                        layoutId="dialog-icon"
                                        className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg"
                                    >
                                        <Plus className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
                                    </motion.span>
                                    <motion.h3
                                        layoutId="dialog-title"
                                        className="text-lg font-semibold text-zinc-900 dark:text-zinc-100"
                                    >
                                        Add New Item
                                    </motion.h3>
                                </div>
                                <motion.button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                                    whileHover={{ rotate: 90 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-5 h-5 text-zinc-500" />
                                </motion.button>
                            </div>

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="p-6 space-y-4"
                            >
                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                                        Item Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter item name..."
                                        className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                                        Description
                                    </label>
                                    <textarea
                                        placeholder="Enter description..."
                                        rows={3}
                                        className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    />
                                </div>
                            </motion.div>

                            {/* Footer */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex gap-3 p-6 pt-0"
                            >
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="flex-1 px-4 py-3 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-lg font-medium hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="flex-1 px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                                >
                                    Add Item
                                </button>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
