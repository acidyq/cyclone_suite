"use client";

import { useEffect, useRef, useState } from "react";

const CHARACTERS = "アァイィウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function getRandomChar() {
    return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
}

interface Column {
    x: number;
    chars: { char: string; y: number; opacity: number }[];
    speed: number;
}

export function MatrixTextDemo() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = 400;
        canvas.height = 300;

        const fontSize = 14;
        const columns: Column[] = [];
        const columnCount = Math.floor(canvas.width / fontSize);

        // Initialize columns
        for (let i = 0; i < columnCount; i++) {
            columns.push({
                x: i * fontSize,
                chars: [],
                speed: 1 + Math.random() * 2,
            });
        }

        let animationId: number;

        function draw() {
            if (!ctx || !canvas) return;

            // Semi-transparent black for trail effect
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = `${fontSize}px monospace`;

            columns.forEach((column) => {
                // Add new character at random intervals
                if (Math.random() > 0.95) {
                    column.chars.push({
                        char: getRandomChar(),
                        y: 0,
                        opacity: 1,
                    });
                }

                // Update and draw characters
                column.chars.forEach((charObj, charIndex) => {
                    // First character is bright green, others fade
                    const isFirst = charIndex === column.chars.length - 1;
                    const green = isFirst ? 255 : 150;
                    const alpha = charObj.opacity;

                    ctx.fillStyle = `rgba(0, ${green}, 70, ${alpha})`;
                    ctx.fillText(charObj.char, column.x, charObj.y);

                    // Move character down
                    charObj.y += column.speed * 2;

                    // Occasionally change character
                    if (Math.random() > 0.98) {
                        charObj.char = getRandomChar();
                    }

                    // Fade out
                    charObj.opacity -= 0.005;
                });

                // Remove characters that are off screen or invisible
                column.chars = column.chars.filter(
                    (c) => c.y < canvas.height + 50 && c.opacity > 0
                );
            });

            if (isRunning) {
                animationId = requestAnimationFrame(draw);
            }
        }

        if (isRunning) {
            draw();
        }

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [isRunning]);

    return (
        <div className="flex flex-col items-center gap-6">
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-black">
                <canvas ref={canvasRef} className="block" />
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={() => setIsRunning(!isRunning)}
                    className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                    {isRunning ? "Pause" : "Resume"}
                </button>
            </div>

            <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                Matrix-style falling characters animation
            </p>
        </div>
    );
}
