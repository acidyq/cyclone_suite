"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="flex items-center gap-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 p-1">
                <div className="h-8 w-8" />
                <div className="h-8 w-8" />
                <div className="h-8 w-8" />
            </div>
        );
    }

    return (
        <div className="flex items-center gap-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 p-1 border border-zinc-200 dark:border-zinc-700/50">
            <button
                onClick={() => setTheme("light")}
                className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-md transition-all duration-200",
                    theme === "light"
                        ? "bg-white dark:bg-zinc-700 text-amber-500 shadow-sm"
                        : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                )}
                aria-label="Light mode"
            >
                <Sun className="h-4 w-4" />
            </button>
            <button
                onClick={() => setTheme("dark")}
                className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-md transition-all duration-200",
                    theme === "dark"
                        ? "bg-white dark:bg-zinc-700 text-blue-500 shadow-sm"
                        : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                )}
                aria-label="Dark mode"
            >
                <Moon className="h-4 w-4" />
            </button>
            <button
                onClick={() => setTheme("system")}
                className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-md transition-all duration-200",
                    theme === "system"
                        ? "bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 shadow-sm"
                        : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                )}
                aria-label="System mode"
            >
                <Monitor className="h-4 w-4" />
            </button>
        </div>
    );
}
