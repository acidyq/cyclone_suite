"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function ImageCompareDemo() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const percentage = (x / rect.width) * 100;
        setSliderPosition(percentage);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
                Before / After Comparison
            </h3>

            <div
                className="relative w-full max-w-lg h-80 rounded-xl overflow-hidden cursor-ew-resize select-none"
                onMouseMove={handleMouseMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
            >
                {/* "After" image (full width background) */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    }}
                >
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">After</span>
                    </div>
                </div>

                {/* "Before" image (clipped) */}
                <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                >
                    <div
                        className="absolute inset-0"
                        style={{
                            width: "100%",
                            minWidth: "100%",
                            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
                        }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white text-2xl font-bold">Before</span>
                        </div>
                    </div>
                </div>

                {/* Slider handle */}
                <motion.div
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                    style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
                    animate={{ scale: isDragging ? 1.1 : 1 }}
                >
                    {/* Handle circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                        <div className="flex gap-1">
                            <div className="w-0.5 h-4 bg-zinc-400 rounded" />
                            <div className="w-0.5 h-4 bg-zinc-400 rounded" />
                        </div>
                    </div>
                </motion.div>

                {/* Labels */}
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/50 rounded-full text-white text-sm">
                    Before
                </div>
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 rounded-full text-white text-sm">
                    After
                </div>
            </div>

            <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
                Drag the slider to compare before and after
            </p>
        </div>
    );
}
