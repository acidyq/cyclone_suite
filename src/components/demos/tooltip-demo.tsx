"use client";

import { motion } from "framer-motion";

export function TooltipDemo() {
    const items = [
        { label: "Home", tip: "Go to homepage" },
        { label: "Settings", tip: "Manage preferences" },
        { label: "Profile", tip: "View your profile" },
        { label: "Logout", tip: "Sign out of account" },
    ];
    return (
        <div className="flex flex-wrap items-center justify-center gap-4 min-h-[300px] p-8 bg-zinc-950 rounded-xl">
            {items.map(item => (
                <div key={item.label} className="group relative">
                    <button className="px-5 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm hover:bg-zinc-700 transition">
                        {item.label}
                    </button>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-zinc-700 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all pointer-events-none">
                        {item.tip}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-zinc-700" />
                    </div>
                </div>
            ))}
        </div>
    );
}
