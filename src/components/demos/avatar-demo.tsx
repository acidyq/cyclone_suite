"use client";

import { motion } from "framer-motion";

export function AvatarDemo() {
    const people = [
        { name: "Alex", color: "from-pink-500 to-rose-600" },
        { name: "Sam", color: "from-blue-500 to-indigo-600" },
        { name: "Jordan", color: "from-emerald-500 to-teal-600" },
        { name: "Taylor", color: "from-amber-500 to-orange-600" },
        { name: "Casey", color: "from-violet-500 to-purple-600" },
    ];
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl space-y-10">
            <h3 className="text-xl font-bold text-white">Avatar</h3>
            {/* Sizes */}
            <div className="flex items-end gap-4">
                {[8, 10, 12, 14, 16].map((s, i) => (
                    <motion.div key={s} className={`rounded-full bg-gradient-to-br ${people[i].color} flex items-center justify-center text-white font-bold`}
                        style={{ width: s * 4, height: s * 4, fontSize: s * 1.5 }}
                        whileHover={{ scale: 1.1 }}>
                        {people[i].name[0]}
                    </motion.div>
                ))}
            </div>
            {/* Stack */}
            <div className="flex -space-x-3">
                {people.map((p, i) => (
                    <motion.div key={i} className={`w-10 h-10 rounded-full bg-gradient-to-br ${p.color} border-2 border-zinc-950 flex items-center justify-center text-white text-sm font-bold`}
                        whileHover={{ scale: 1.15, y: -4, zIndex: 10 }} transition={{ type: "spring", stiffness: 300 }}>
                        {p.name[0]}
                    </motion.div>
                ))}
                <div className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-zinc-950 flex items-center justify-center text-zinc-400 text-xs font-medium">+3</div>
            </div>
            {/* With status */}
            <div className="flex gap-6">
                {[{ status: "bg-green-500", label: "Online" }, { status: "bg-yellow-500", label: "Away" }, { status: "bg-zinc-500", label: "Offline" }].map((s, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                        <div className="relative">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${people[i].color} flex items-center justify-center text-white font-bold`}>
                                {people[i].name[0]}
                            </div>
                            <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 ${s.status} rounded-full border-2 border-zinc-950`} />
                        </div>
                        <span className="text-zinc-500 text-xs">{s.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
