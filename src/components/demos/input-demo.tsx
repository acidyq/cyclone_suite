"use client";

import { motion } from "framer-motion";

export function InputDemo() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl space-y-6">
            <h3 className="text-xl font-bold text-white">Input</h3>
            <div className="w-full max-w-sm space-y-5">
                <div><label className="text-xs text-zinc-400 mb-1.5 block">Default</label>
                    <input className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 outline-none transition" placeholder="Enter your name" /></div>
                <div><label className="text-xs text-zinc-400 mb-1.5 block">With Icon</label>
                    <div className="relative"><span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">🔍</span>
                        <input className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:border-blue-500 outline-none transition" placeholder="Search..." /></div></div>
                <div><label className="text-xs text-zinc-400 mb-1.5 block">Disabled</label>
                    <input disabled className="w-full px-4 py-2.5 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-600 text-sm cursor-not-allowed" value="Disabled input" /></div>
                <div><label className="text-xs text-red-400 mb-1.5 block">Error</label>
                    <input className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-red-500/50 text-white text-sm focus:border-red-500 focus:ring-1 focus:ring-red-500/50 outline-none transition" defaultValue="Invalid email" />
                    <p className="text-red-400 text-xs mt-1">Please enter a valid email address.</p></div>
                <div><label className="text-xs text-zinc-400 mb-1.5 block">Textarea</label>
                    <textarea className="w-full px-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:border-blue-500 outline-none transition resize-none h-24" placeholder="Write a message..." /></div>
            </div>
        </div>
    );
}
