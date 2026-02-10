"use client";

import { Reorder } from "framer-motion";
import { useState } from "react";

export function SortableListDemo() {
    const [items, setItems] = useState(["🍎 Apple", "🍌 Banana", "🍇 Grape", "🍊 Orange"]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl">
            <h3 className="text-white font-bold mb-6">Drag to Reorder</h3>

            <Reorder.Group axis="y" values={items} onReorder={setItems} className="w-full max-w-xs space-y-2">
                {items.map((item) => (
                    <Reorder.Item key={item} value={item}>
                        <div className="p-4 bg-zinc-800 rounded-xl border border-zinc-700 text-white shadow-sm hover:border-zinc-500 cursor-grab active:cursor-grabbing select-none flex items-center justify-between">
                            <span>{item}</span>
                            <span className="text-zinc-500">☰</span>
                        </div>
                    </Reorder.Item>
                ))}
            </Reorder.Group>
        </div>
    );
}
