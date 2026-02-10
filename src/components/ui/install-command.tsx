"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, ExternalLink } from "lucide-react";
import { cn, copyToClipboard, getPackageCommand } from "@/lib/utils";

interface InstallCommandProps {
    packageName: string;
}

type PackageManager = "npm" | "bun" | "pnpm";

export function InstallCommand({ packageName }: InstallCommandProps) {
    const [activeTab, setActiveTab] = useState<PackageManager>("npm");
    const [copied, setCopied] = useState(false);

    const command = getPackageCommand(activeTab, packageName);

    const handleCopy = async () => {
        await copyToClipboard(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const tabs: { id: PackageManager; label: string }[] = [
        { id: "npm", label: "npm" },
        { id: "bun", label: "bun" },
        { id: "pnpm", label: "pnpm" },
    ];

    return (
        <div className="space-y-3">
            {/* Tabs and Actions Row */}
            <div className="flex items-center justify-between">
                {/* Package Manager Tabs */}
                <div className="flex items-center rounded-lg bg-zinc-100 dark:bg-zinc-800/50 p-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                "relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                                activeTab === tab.id
                                    ? "text-zinc-900 dark:text-zinc-100"
                                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300"
                            )}
                        >
                            {activeTab === tab.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-white dark:bg-zinc-700 rounded-md shadow-sm"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                                />
                            )}
                            <span className="relative z-10">{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                    {/* Open in v0 Button */}
                    <a
                        href={`https://v0.dev/chat?code=${encodeURIComponent(JSON.stringify({ component: packageName }))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-lg transition-colors"
                    >
                        Open in
                        <span className="font-mono font-semibold">v0</span>
                        <ExternalLink className="h-3 w-3" />
                    </a>

                    {/* Copy Button */}
                    <button
                        onClick={handleCopy}
                        className={cn(
                            "inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200",
                            copied
                                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                        )}
                    >
                        {copied ? (
                            <>
                                <Check className="h-4 w-4" />
                                Copied
                            </>
                        ) : (
                            <>
                                <Copy className="h-4 w-4" />
                                Copy
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Command Box */}
            <div className="relative rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-4">
                <code className="text-sm font-mono text-zinc-800 dark:text-zinc-200 break-all">
                    {command}
                </code>
            </div>
        </div>
    );
}
