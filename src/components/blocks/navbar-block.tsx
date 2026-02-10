"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sparkles, Search, Bell, User } from "lucide-react";

const navItems = [
    { name: "Products", hasDropdown: true },
    { name: "Solutions", hasDropdown: true },
    { name: "Docs", hasDropdown: false },
    { name: "Resources", hasDropdown: true },
];

export function NavbarBlockDemo() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
        <div className="space-y-16">
            {/* Navbar Variant 1: Modern with Glass Effect */}
            <div className="rounded-2xl bg-gradient-to-br from-violet-900 to-indigo-900 p-8 min-h-[300px]">
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                            <Sparkles className="w-4 h-4 text-violet-600" />
                        </div>
                        <span className="text-xl font-bold text-white">Cyclone</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.name}
                                className="flex items-center gap-1 text-white/80 hover:text-white transition-colors"
                            >
                                {item.name}
                                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                            </button>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button className="text-white/80 hover:text-white transition-colors">
                            Sign in
                        </button>
                        <button className="px-4 py-2 bg-white text-violet-600 rounded-lg font-medium hover:bg-white/90 transition-colors">
                            Get Started
                        </button>
                    </div>

                    <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </motion.nav>

                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden mt-2 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 overflow-hidden"
                        >
                            <div className="p-4 space-y-2">
                                {navItems.map((item) => (
                                    <button
                                        key={item.name}
                                        className="w-full text-left py-2 px-3 text-white/80 hover:bg-white/10 rounded-lg transition-colors"
                                    >
                                        {item.name}
                                    </button>
                                ))}
                                <div className="pt-2 border-t border-white/10 space-y-2">
                                    <button className="w-full py-2 px-3 text-white/80 hover:bg-white/10 rounded-lg transition-colors text-left">
                                        Sign in
                                    </button>
                                    <button className="w-full py-2 bg-white text-violet-600 rounded-lg font-medium">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Navbar Variant 2: Solid with Dropdown */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-8 min-h-[300px]">
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between px-6 py-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-sm"
                >
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                                <Sparkles className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Cyclone</span>
                        </div>

                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => (
                                <div key={item.name} className="relative">
                                    <button
                                        className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm transition-colors ${activeDropdown === item.name
                                            ? 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100'
                                            : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                                            }`}
                                        onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        {item.name}
                                        {item.hasDropdown && <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                                    </button>

                                    <AnimatePresence>
                                        {item.hasDropdown && activeDropdown === item.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute top-full left-0 mt-1 w-48 p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-lg"
                                                onMouseEnter={() => setActiveDropdown(item.name)}
                                                onMouseLeave={() => setActiveDropdown(null)}
                                            >
                                                {["Option 1", "Option 2", "Option 3"].map((option) => (
                                                    <button
                                                        key={option}
                                                        className="w-full text-left px-3 py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md"
                                                    >
                                                        {option}
                                                    </button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-2">
                        <button className="p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                        <button className="px-4 py-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-sm font-medium">
                            Sign in
                        </button>
                        <button className="px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity">
                            Get Started
                        </button>
                    </div>

                    <button className="md:hidden p-2 text-zinc-600 dark:text-zinc-400">
                        <Menu className="w-6 h-6" />
                    </button>
                </motion.nav>
            </div>

            {/* Navbar Variant 3: Dashboard Style */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8">
                <motion.nav
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800"
                >
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                                <Sparkles className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Dashboard</span>
                        </div>

                        <div className="hidden md:flex items-center gap-1 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                            <Search className="w-4 h-4 text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-transparent border-none outline-none text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 w-40"
                            />
                            <kbd className="px-1.5 py-0.5 text-xs bg-white dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 rounded text-zinc-500">⌘K</kbd>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="relative p-2 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
                        </button>
                        <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-800 mx-2" />
                        <button className="flex items-center gap-2 px-2 py-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
                                <User className="w-4 h-4 text-white" />
                            </div>
                            <span className="hidden md:block text-sm font-medium text-zinc-900 dark:text-zinc-100">John Doe</span>
                            <ChevronDown className="w-4 h-4 text-zinc-500" />
                        </button>
                    </div>
                </motion.nav>

                <div className="flex items-center gap-6 px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                    {["Overview", "Analytics", "Projects", "Settings"].map((tab, i) => (
                        <button
                            key={tab}
                            className={`text-sm transition-colors ${i === 0
                                ? 'text-zinc-900 dark:text-zinc-100 font-medium'
                                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
