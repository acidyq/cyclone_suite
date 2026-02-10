"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "Free",
        description: "Perfect for getting started",
        features: [
            "10 components",
            "Basic animations",
            "Community support",
            "MIT License",
        ],
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Pro",
        price: "$49",
        period: "/month",
        description: "Best for growing teams",
        features: [
            "Unlimited components",
            "Advanced animations",
            "Priority support",
            "Figma files included",
            "Private Discord access",
            "Lifetime updates",
        ],
        cta: "Start Free Trial",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For large organizations",
        features: [
            "Everything in Pro",
            "Custom components",
            "Dedicated account manager",
            "SLA guarantee",
            "On-premise deployment",
            "Custom integrations",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

export function PricingBlockDemo() {
    return (
        <div className="space-y-16">
            {/* Pricing Variant 1: Cards with Popular Badge */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8 md:p-12">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
                    >
                        Simple, transparent pricing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-600 dark:text-zinc-400"
                    >
                        Choose the plan that&apos;s right for you
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * i }}
                            className={`relative p-6 rounded-2xl border ${plan.popular
                                    ? 'border-violet-500 dark:border-violet-400 bg-violet-50 dark:bg-violet-900/10'
                                    : 'border-zinc-200 dark:border-zinc-800'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-semibold rounded-full flex items-center gap-1">
                                    <Sparkles className="w-3 h-3" />
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                                    {plan.name}
                                </h3>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-6">
                                <span className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
                                    {plan.price}
                                </span>
                                {plan.period && (
                                    <span className="text-zinc-600 dark:text-zinc-400">
                                        {plan.period}
                                    </span>
                                )}
                            </div>

                            <ul className="space-y-3 mb-6">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                                        <Check className="w-4 h-4 text-emerald-500" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.popular
                                        ? 'bg-violet-600 text-white hover:bg-violet-700'
                                        : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700'
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Pricing Variant 2: Toggle Comparison */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 p-8 md:p-12">
                <div className="text-center mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2"
                    >
                        Compare Plans
                    </motion.h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-zinc-200 dark:border-zinc-800">
                                <th className="text-left py-4 px-4 font-medium text-zinc-600 dark:text-zinc-400">Feature</th>
                                <th className="text-center py-4 px-4 font-medium text-zinc-600 dark:text-zinc-400">Starter</th>
                                <th className="text-center py-4 px-4 font-medium text-zinc-600 dark:text-zinc-400">
                                    <span className="px-2 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded text-sm">Pro</span>
                                </th>
                                <th className="text-center py-4 px-4 font-medium text-zinc-600 dark:text-zinc-400">Enterprise</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { feature: "Components", starter: "10", pro: "Unlimited", enterprise: "Unlimited" },
                                { feature: "Animations", starter: "Basic", pro: "Advanced", enterprise: "Custom" },
                                { feature: "Support", starter: "Community", pro: "Priority", enterprise: "Dedicated" },
                                { feature: "Updates", starter: "6 months", pro: "Lifetime", enterprise: "Lifetime" },
                                { feature: "Figma Files", starter: false, pro: true, enterprise: true },
                                { feature: "Custom Branding", starter: false, pro: false, enterprise: true },
                            ].map((row, i) => (
                                <motion.tr
                                    key={row.feature}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * i }}
                                    className="border-b border-zinc-100 dark:border-zinc-800/50"
                                >
                                    <td className="py-4 px-4 text-zinc-900 dark:text-zinc-100">{row.feature}</td>
                                    <td className="py-4 px-4 text-center">
                                        {typeof row.starter === 'boolean' ? (
                                            row.starter ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-zinc-400">—</span>
                                        ) : (
                                            <span className="text-zinc-600 dark:text-zinc-400">{row.starter}</span>
                                        )}
                                    </td>
                                    <td className="py-4 px-4 text-center bg-violet-50/50 dark:bg-violet-900/5">
                                        {typeof row.pro === 'boolean' ? (
                                            row.pro ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-zinc-400">—</span>
                                        ) : (
                                            <span className="text-zinc-900 dark:text-zinc-100 font-medium">{row.pro}</span>
                                        )}
                                    </td>
                                    <td className="py-4 px-4 text-center">
                                        {typeof row.enterprise === 'boolean' ? (
                                            row.enterprise ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <span className="text-zinc-400">—</span>
                                        ) : (
                                            <span className="text-zinc-600 dark:text-zinc-400">{row.enterprise}</span>
                                        )}
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pricing Variant 3: Simple Side-by-Side */}
            <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
                >
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Free Forever</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 mb-6">Open source components for everyone</p>
                    <div className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">$0</div>
                    <button className="w-full py-3 rounded-lg border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 font-semibold hover:bg-zinc-900 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-zinc-900 transition-colors">
                        Get Started Free
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-700 text-white"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold">Pro License</h3>
                        <Zap className="w-5 h-5" />
                    </div>
                    <p className="text-white/80 mb-6">One-time payment, lifetime access</p>
                    <div className="text-4xl font-bold mb-6">$199</div>
                    <button className="w-full py-3 rounded-lg bg-white text-violet-600 font-semibold hover:bg-white/90 transition-colors">
                        Buy Pro License
                    </button>
                </motion.div>
            </div>
        </div>
    );
}
