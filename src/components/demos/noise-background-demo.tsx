"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function NoiseBackgroundDemo() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = 300;
        canvas.height = 300;

        function generateNoise() {
            if (!ctx || !canvas) return;
            const imageData = ctx.createImageData(canvas.width, canvas.height);
            for (let i = 0; i < imageData.data.length; i += 4) {
                const v = Math.random() * 255;
                imageData.data[i] = v;
                imageData.data[i + 1] = v;
                imageData.data[i + 2] = v;
                imageData.data[i + 3] = 25;
            }
            ctx.putImageData(imageData, 0, 0);
        }

        generateNoise();
        const interval = setInterval(generateNoise, 100);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null;

    return (
        <div className="space-y-6 p-8">
            <div className="relative min-h-[350px] rounded-2xl overflow-hidden">
                {/* Animated gradient */}
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        background: [
                            "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
                            "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
                            "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
                        ],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                {/* Noise overlay */}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay pointer-events-none"
                />
                {/* Content */}
                <div className="relative z-10 flex items-center justify-center min-h-[350px]">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold text-white">Noise Background</h2>
                        <p className="text-zinc-300/80 max-w-md mx-auto">
                            Dynamic animated gradients with real-time noise texture overlay for that premium feel.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
