"use client";

import { motion } from "framer-motion";
import { useState, MouseEvent, useRef } from "react";

export function LensDemo() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    function handleMouseMove(e: MouseEvent) {
        if (!containerRef.current) return;
        const { left, top } = containerRef.current.getBoundingClientRect();
        setPos({ x: e.clientX - left, y: e.clientY - top });
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl space-y-6">
            <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-white">Lens Component</h3>
                <p className="text-zinc-400 text-sm">Hover to zoom into the content</p>
            </div>

            <div
                ref={containerRef}
                className="relative w-full max-w-md h-64 rounded-2xl overflow-hidden cursor-none border border-zinc-800"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Base content */}
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                    <div className="text-center space-y-2 p-8">
                        <p className="text-white/80 text-sm font-mono">const Component = () =&gt; &#123;</p>
                        <p className="text-white text-xl font-bold">Zoom Into Anything</p>
                        <p className="text-white/80 text-sm font-mono">return &lt;Magic /&gt;</p>
                        <p className="text-white/80 text-sm font-mono">&#125;</p>
                    </div>
                </div>

                {/* Lens magnifier */}
                {isHovered && (
                    <div
                        className="absolute w-44 h-44 rounded-full border-2 border-white/40 pointer-events-none overflow-hidden shadow-2xl"
                        style={{
                            left: pos.x - 88,
                            top: pos.y - 88,
                        }}
                    >
                        <div
                            className="w-full h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center"
                            style={{
                                transform: "scale(2)",
                                transformOrigin: `${((pos.x) / (containerRef.current?.offsetWidth || 1)) * 100}% ${((pos.y) / (containerRef.current?.offsetHeight || 1)) * 100}%`,
                            }}
                        >
                            <div className="text-center space-y-2 p-8">
                                <p className="text-white/80 text-sm font-mono">const Component = () =&gt; &#123;</p>
                                <p className="text-white text-xl font-bold">Zoom Into Anything</p>
                                <p className="text-white/80 text-sm font-mono">return &lt;Magic /&gt;</p>
                                <p className="text-white/80 text-sm font-mono">&#125;</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
