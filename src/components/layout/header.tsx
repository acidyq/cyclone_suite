"use client";

import Link from "next/link";
import { PanelLeft, Github } from "lucide-react";
import { SearchModal } from "@/components/ui/search-modal";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SITE_CONFIG } from "@/lib/constants";

interface HeaderProps {
    onToggleSidebar?: () => void;
}

export function Header({ onToggleSidebar }: HeaderProps) {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl">
            {/* Main Header */}
            <div className="flex h-14 items-center gap-4 px-4 md:px-6">
                {/* Sidebar Toggle */}
                <button
                    onClick={onToggleSidebar}
                    className="flex items-center justify-center h-9 w-9 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    aria-label="Toggle sidebar"
                >
                    <PanelLeft className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                </button>

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-100">
                    <span className="text-xl">⚡</span>
                    <span className="text-lg tracking-tight">{SITE_CONFIG.name}</span>
                </Link>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Search */}
                <SearchModal />

                {/* GitHub */}
                <a
                    href={SITE_CONFIG.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-9 w-9 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    aria-label="GitHub"
                >
                    <Github className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                </a>

                {/* Theme Toggle */}
                <ThemeToggle />
            </div>
        </header>
    );
}
