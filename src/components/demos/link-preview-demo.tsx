"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function LinkPreviewDemo() {
    return (
        <div className="flex items-center justify-center min-h-[300px] p-8 bg-zinc-950 rounded-xl">
            <p className="text-zinc-400 text-lg">
                Built with{" "}
                <LinkItem url="https://nextjs.org" title="Next.js" image="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png">Next.js</LinkItem>
                {" "}and{" "}
                <LinkItem url="https://tailwindcss.com" title="Tailwind CSS" image="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg">Tailwind CSS</LinkItem>
                .
            </p>
        </div>
    );
}

function LinkItem({ children, title, image, url }: { children: React.ReactNode, title: string, image: string, url: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative inline-block" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <a href={url} target="_blank" className="text-white font-bold hover:underline decoration-zinc-500 underline-offset-4 cursor-pointer">
                {children}
            </a>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-white dark:bg-zinc-900 rounded-xl shadow-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 z-50"
                    >
                        <div className="h-24 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center p-4 relative">
                            <Image src={image} alt={title} fill className="object-contain p-4" />
                        </div>
                        <div className="p-3">
                            <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{title}</h4>
                            <p className="text-xs text-zinc-500 mt-0.5 truncate">{url}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
