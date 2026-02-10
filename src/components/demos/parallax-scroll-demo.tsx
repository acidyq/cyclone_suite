"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function ParallaxScrollDemo() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ container: ref });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

    const images = [
        "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        "https://images.unsplash.com/photo-1620121692029-d088224ddc74",
        "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d",
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca4",
    ];

    return (
        <div ref={ref} className="h-[500px] w-full bg-zinc-950 rounded-xl overflow-y-scroll p-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-4">
                    {images.map((img, i) => (
                        <motion.div style={{ y: y1 }} key={i} className="rounded-xl overflow-hidden aspect-[3/4] relative">
                            <Image src={`${img}?w=500&h=800&fit=crop`} alt="Parallax" fill className="object-cover" />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-4">
                    {images.reverse().map((img, i) => (
                        <motion.div style={{ y: y2 }} key={i} className="rounded-xl overflow-hidden aspect-[3/4] relative">
                            <Image src={`${img}?w=500&h=800&fit=crop`} alt="Parallax" fill className="object-cover" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
