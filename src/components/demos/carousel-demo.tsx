"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
    { id: 1, color: "from-purple-500 to-pink-500", title: "Slide One", subtitle: "Beautiful gradients" },
    { id: 2, color: "from-blue-500 to-cyan-500", title: "Slide Two", subtitle: "Smooth animations" },
    { id: 3, color: "from-orange-500 to-red-500", title: "Slide Three", subtitle: "Modern design" },
    { id: 4, color: "from-green-500 to-teal-500", title: "Slide Four", subtitle: "Premium components" },
];

export function CarouselDemo() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const goToNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    };

    const goToPrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    };

    // Auto-play
    useEffect(() => {
        const timer = setInterval(goToNext, 5000);
        return () => clearInterval(timer);
    }, []);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
        }),
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-8">
            <div className="relative h-64 rounded-2xl overflow-hidden">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={`absolute inset-0 bg-gradient-to-br ${SLIDES[currentIndex].color} flex items-center justify-center`}
                    >
                        <div className="text-center text-white">
                            <motion.h3
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl font-bold mb-2"
                            >
                                {SLIDES[currentIndex].title}
                            </motion.h3>
                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-white/80"
                            >
                                {SLIDES[currentIndex].subtitle}
                            </motion.p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation arrows */}
                <button
                    onClick={goToPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-4">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                        className="relative"
                    >
                        <div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                        {index === currentIndex && (
                            <motion.div
                                layoutId="dot"
                                className="absolute inset-0 w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}
