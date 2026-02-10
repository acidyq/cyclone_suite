"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function SignupFormDemo() {
    const [submitted, setSubmitted] = useState(false);
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    }
    return (
        <div className="flex items-center justify-center min-h-[500px] p-8 bg-zinc-950 rounded-xl">
            <AnimatePresence mode="wait">
                {submitted ? (
                    <motion.div key="success" className="text-center space-y-4"
                        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
                        <motion.div className="text-5xl" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }}>✅</motion.div>
                        <h3 className="text-xl font-bold text-white">Welcome aboard!</h3>
                        <p className="text-zinc-400 text-sm">Your account has been created.</p>
                    </motion.div>
                ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="w-full max-w-sm space-y-5"
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-white">Create Account</h2>
                            <p className="text-zinc-400 text-sm mt-1">Enter your details below.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {["First name", "Last name"].map((label, i) => (
                                <motion.div key={label} initial={{ opacity: 0, x: i === 0 ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.1 }}>
                                    <label className="text-xs text-zinc-400 mb-1 block">{label}</label>
                                    <input className="w-full px-3 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm focus:border-blue-500 outline-none transition" />
                                </motion.div>
                            ))}
                        </div>
                        {["Email address", "Password"].map((label, i) => (
                            <motion.div key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
                                <label className="text-xs text-zinc-400 mb-1 block">{label}</label>
                                <input type={label === "Password" ? "password" : "email"} className="w-full px-3 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm focus:border-blue-500 outline-none transition" />
                            </motion.div>
                        ))}
                        <motion.button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-sm"
                            whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                            Sign up →
                        </motion.button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
}
