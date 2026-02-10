"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export function SwitchDemo() {
    const [values, setValues] = useState({ a: true, b: false, c: true });
    const toggle = (key: keyof typeof values) => setValues(prev => ({ ...prev, [key]: !prev[key] }));

    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] p-8 bg-zinc-950 rounded-xl space-y-6">
            <h3 className="text-xl font-bold text-white">Switch</h3>
            {[
                { key: "a" as const, label: "Notifications", desc: "Receive push notifications" },
                { key: "b" as const, label: "Marketing Emails", desc: "Get weekly newsletters" },
                { key: "c" as const, label: "Dark Mode", desc: "Use dark theme" },
            ].map(item => (
                <div key={item.key} className="w-full max-w-xs flex items-center justify-between">
                    <div>
                        <p className="text-white text-sm font-medium">{item.label}</p>
                        <p className="text-zinc-500 text-xs">{item.desc}</p>
                    </div>
                    <button onClick={() => toggle(item.key)}
                        className={`w-11 h-6 rounded-full relative transition-colors ${values[item.key] ? "bg-blue-600" : "bg-zinc-700"}`}>
                        <motion.div className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm"
                            animate={{ left: values[item.key] ? 21 : 2 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }} />
                    </button>
                </div>
            ))}
        </div>
    );
}
