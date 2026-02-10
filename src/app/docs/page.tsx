import Link from "next/link";
import { ArrowRight, Sparkles, Code2 } from "lucide-react";

export default function InstallationPage() {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    Installation
                </h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
                    Get started with Cyclone Suite by installing the components you need.
                    All components are built with React, Tailwind CSS, and Framer Motion.
                </p>
            </div>

            {/* Quick Start Cards */}
            <div className="grid gap-6 md:grid-cols-2">
                <div className="group relative rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                            <Sparkles className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                                Browse Components
                            </h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                Explore our collection of 100+ components
                            </p>
                        </div>
                    </div>
                    <Link
                        href="/docs/components/loader"
                        className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 group-hover:gap-3 transition-all"
                    >
                        View Components
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                <div className="group relative rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                            <Code2 className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                                Using shadcn/ui
                            </h3>
                            <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                Install components via the CLI
                            </p>
                        </div>
                    </div>
                    <a
                        href="https://ui.shadcn.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all"
                    >
                        Learn about shadcn/ui
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </div>

            {/* Installation Steps */}
            <div className="space-y-8">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    Getting Started
                </h2>

                <div className="space-y-6">
                    {/* Step 1 */}
                    <div className="flex gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-sm font-semibold">
                            1
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                                Set up your project
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                Make sure you have a React project with Tailwind CSS configured.
                                We recommend using Next.js with the App Router.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-sm font-semibold">
                            2
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                                Install dependencies
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                Install Framer Motion for animations:
                            </p>
                            <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-900 dark:bg-zinc-950 p-4">
                                <code className="text-sm text-emerald-400">
                                    npm install framer-motion
                                </code>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-sm font-semibold">
                            3
                        </div>
                        <div className="space-y-3">
                            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                                Add components
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                Use the shadcn CLI to add components to your project:
                            </p>
                            <div className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-900 dark:bg-zinc-950 p-4">
                                <code className="text-sm text-emerald-400">
                                    npx shadcn@latest add @cyclonesuite/loader
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ready to Start */}
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-r from-emerald-500/5 via-green-500/5 to-teal-500/5 p-8 text-center">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    Ready to build?
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                    Start exploring our component library and build beautiful interfaces.
                </p>
                <Link
                    href="/docs/components/loader"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium hover:opacity-90 transition-opacity"
                >
                    View Components
                    <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
