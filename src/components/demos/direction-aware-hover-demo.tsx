"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

function DirectionAwareCard({ title, description, image }: { title: string; description: string; image: string }) {
    const [isHovered, setIsHovered] = useState(false);
    const dirRef = useRef<"top" | "bottom" | "left" | "right">("top");

    function getDirection(e: React.MouseEvent): "top" | "bottom" | "left" | "right" {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / width;
        const y = (e.clientY - top - height / 2) / height;
        if (Math.abs(x) > Math.abs(y)) return x > 0 ? "right" : "left";
        return y > 0 ? "bottom" : "top";
    }

    const getVariants = (d: "top" | "bottom" | "left" | "right") => ({
        hidden: {
            x: d === "left" ? "-100%" : d === "right" ? "100%" : "0%",
            y: d === "top" ? "-100%" : d === "bottom" ? "100%" : "0%",
        },
        visible: { x: "0%", y: "0%" },
        exit: {
            x: d === "left" ? "-100%" : d === "right" ? "100%" : "0%",
            y: d === "top" ? "-100%" : d === "bottom" ? "100%" : "0%",
        },
    });

    return (
        <div
            className="relative w-full h-48 rounded-xl overflow-hidden cursor-pointer"
            style={{ background: image }}
            onMouseEnter={(e) => {
                dirRef.current = getDirection(e);
                setIsHovered(true);
            }}
            onMouseLeave={(e) => {
                dirRef.current = getDirection(e);
                setIsHovered(false);
            }}
        >
            {/* Base content visible by default */}
            <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white font-bold text-lg drop-shadow-lg">{title}</h3>
            </div>
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center p-4"
                        variants={getVariants(dirRef.current)}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <h3 className="text-white font-bold text-lg">{title}</h3>
                        <p className="text-zinc-300 text-sm text-center mt-2">{description}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export function DirectionAwareHoverDemo() {
    const cards = [
        { title: "Mountain", description: "Enter from any direction", image: "linear-gradient(135deg, #667eea, #764ba2)" },
        { title: "Ocean", description: "Overlay slides in dynamically", image: "linear-gradient(135deg, #0077b6, #0096c7)" },
        { title: "Forest", description: "Direction-aware transition", image: "linear-gradient(135deg, #2d6a4f, #40916c)" },
        { title: "Sunset", description: "Hover to see the effect", image: "linear-gradient(135deg, #e76f51, #f4a261)" },
        { title: "Galaxy", description: "Smooth and responsive", image: "linear-gradient(135deg, #7209b7, #3a0ca3)" },
        { title: "Desert", description: "Framer Motion powered", image: "linear-gradient(135deg, #c2a676, #967543)" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-8 min-h-[400px]">
            {cards.map((card) => (
                <DirectionAwareCard key={card.title} {...card} />
            ))}
        </div>
    );
}
