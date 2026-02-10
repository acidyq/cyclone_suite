"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "Frontend Lead @ Vercel",
        content: "Cyclone Suite has completely transformed how we build UIs. The animations are buttery smooth and the components are incredibly well-designed.",
        avatar: "SC",
        rating: 5,
    },
    {
        name: "Michael Rodriguez",
        role: "CTO @ Startup",
        content: "We cut our development time in half. The components just work, and they look amazing out of the box.",
        avatar: "MR",
        rating: 5,
    },
    {
        name: "Emily Watson",
        role: "Design Engineer @ Linear",
        content: "Finally, a component library that understands good design. The attention to detail is remarkable.",
        avatar: "EW",
        rating: 5,
    },
    {
        name: "David Kim",
        role: "Indie Hacker",
        content: "As a solo developer, Cyclone Suite is a game-changer. Professional UI in minutes, not days.",
        avatar: "DK",
        rating: 5,
    },
];

export function TestimonialsBlockDemo() {
    return (
        <div className="space-y-16">
            {/* Testimonials Variant 1: Grid Cards */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8 md:p-12">
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-2 block"
                    >
                        Testimonials
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
                    >
                        Loved by developers worldwide
                    </motion.h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className="p-6 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, j) => (
                                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                                &ldquo;{testimonial.content}&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-semibold text-sm">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-sm text-zinc-500 dark:text-zinc-400">
                                        {testimonial.role}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Testimonials Variant 2: Highlight Quote */}
            <div className="rounded-2xl bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-700 p-8 md:p-12 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <Quote className="w-12 h-12 text-white/30 mx-auto mb-6" />
                    <p className="text-2xl md:text-3xl font-medium text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                        &ldquo;Cyclone Suite is hands down the best component library I&apos;ve ever used.
                        The animations are incredible, the code is clean, and the documentation is top-notch.&rdquo;
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-lg">
                            AJ
                        </div>
                        <div className="text-left">
                            <div className="font-semibold text-white">Alex Johnson</div>
                            <div className="text-white/70">Engineering Manager @ Stripe</div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Testimonials Variant 3: Marquee Style */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-8 overflow-hidden">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                        What people are saying
                    </h2>
                </div>

                <div className="relative">
                    <motion.div
                        className="flex gap-6"
                        animate={{ x: [0, -800] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, i) => (
                            <div
                                key={`${testimonial.name}-${i}`}
                                className="flex-shrink-0 w-80 p-5 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
                            >
                                <p className="text-sm text-zinc-700 dark:text-zinc-300 mb-4 line-clamp-3">
                                    &ldquo;{testimonial.content}&rdquo;
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white text-xs font-semibold">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                            {testimonial.name}
                                        </div>
                                        <div className="text-xs text-zinc-500">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Testimonials Variant 4: Twitter/X Style */}
            <div className="grid md:grid-cols-3 gap-4">
                {testimonials.slice(0, 3).map((testimonial, i) => (
                    <motion.div
                        key={testimonial.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
                    >
                        <div className="flex items-start gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                                {testimonial.avatar}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="font-semibold text-zinc-900 dark:text-zinc-100 truncate">
                                    {testimonial.name}
                                </div>
                                <div className="text-sm text-zinc-500 truncate">
                                    @{testimonial.name.toLowerCase().replace(' ', '')}
                                </div>
                            </div>
                            <svg className="w-5 h-5 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </div>
                        <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                            {testimonial.content}
                        </p>
                        <div className="mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500">
                            9:41 AM · Feb 8, 2026
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
