"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useRef } from "react";

export function ResizableNavbarDemo() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    const lastScrollY = useRef(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const diff = latest - lastScrollY.current;
        if (Math.abs(diff) > 5) {
            setHidden(diff > 0 && latest > 50);
        }
        lastScrollY.current = latest;
    });

    return (
        <div className="relative h-[400px] w-full bg-zinc-950 overflow-y-scroll rounded-xl border border-zinc-800">
            <motion.nav
                variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="sticky top-0 left-0 right-0 z-50 flex justify-center pt-4"
            >
                <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-full px-6 py-3 flex gap-6 shadow-lg">
                    <span className="text-white text-sm font-medium hover:text-blue-400 cursor-pointer">Home</span>
                    <span className="text-white text-sm font-medium hover:text-blue-400 cursor-pointer">Products</span>
                    <span className="text-white text-sm font-medium hover:text-blue-400 cursor-pointer">About</span>
                    <span className="text-white text-sm font-medium hover:text-blue-400 cursor-pointer">Contact</span>
                </div>
            </motion.nav>

            <div className="p-8 space-y-8 pt-20">
                <h3 className="text-2xl font-bold text-white text-center">Scroll Down to Hide</h3>
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-32 rounded-xl bg-zinc-900/50 border border-zinc-800/50" />
                ))}
            </div>
        </div>
    );
}
