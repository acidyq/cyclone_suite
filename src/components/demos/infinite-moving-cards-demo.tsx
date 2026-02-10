"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function InfiniteMovingCard({ quote, author, role }: { quote: string; author: string; role: string }) {
    return (
        <div className="flex-shrink-0 w-[350px] rounded-2xl border border-zinc-800 bg-zinc-900 p-6 mx-3">
            <p className="text-zinc-300 text-sm mb-4 leading-relaxed">&ldquo;{quote}&rdquo;</p>
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
                <div>
                    <p className="text-white text-sm font-medium">{author}</p>
                    <p className="text-zinc-500 text-xs">{role}</p>
                </div>
            </div>
        </div>
    );
}

const testimonials = [
    { quote: "This saved us hundreds of hours. The components just work out of the box.", author: "Sarah Chen", role: "CTO at Startup" },
    { quote: "Best component library I've used. The animations are buttery smooth.", author: "Marco Polo", role: "Frontend Lead" },
    { quote: "Dropped it into our app and the design instantly leveled up.", author: "Aisha Patel", role: "Product Designer" },
    { quote: "Finally, a library that doesn't fight against your own design system.", author: "James Wright", role: "Full-Stack Dev" },
    { quote: "The attention to detail is insane. Every interaction feels intentional.", author: "Lin Zhang", role: "UX Engineer" },
    { quote: "Copy-paste components that actually look production-ready.", author: "Kate Morrison", role: "Indie Hacker" },
];

export function InfiniteMovingCardsDemo() {
    return (
        <div className="min-h-[400px] bg-zinc-950 rounded-xl overflow-hidden flex flex-col items-center justify-center py-12 space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4">What people are saying</h3>

            {/* Row 1 - scrolling left */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                >
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <InfiniteMovingCard key={i} {...t} />
                    ))}
                </motion.div>
            </div>

            {/* Row 2 - scrolling right */}
            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    {[...testimonials.reverse(), ...testimonials].map((t, i) => (
                        <InfiniteMovingCard key={i} {...t} />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
