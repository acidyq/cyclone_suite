"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight, FileText, Palette, Type, MousePointer2, Zap, Star, Hand, Cpu, LayoutGrid } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAVIGATION, COMPONENT_DATA } from "@/lib/constants";

interface SearchResult {
    name: string;
    slug: string;
    category: string;
    description?: string;
}

function getAllSearchItems(): SearchResult[] {
    const items: SearchResult[] = [];

    // Installation
    items.push({
        name: "Installation",
        slug: "/docs",
        category: "Get Started",
        description: "Get started with Cyclone Suite",
    });

    // Blocks
    NAVIGATION.blocks.forEach((item) => {
        items.push({
            name: item.name,
            slug: item.slug,
            category: "Blocks",
            description: item.description,
        });
    });

    // Motion
    NAVIGATION.motion.forEach((item) => {
        items.push({
            name: item.name,
            slug: item.slug,
            category: "Motion",
            description: item.description,
        });
    });

    // Effects
    NAVIGATION.effects.forEach((item) => {
        items.push({
            name: item.name,
            slug: item.slug,
            category: "Effects",
            description: item.description,
        });
    });

    // Components
    NAVIGATION.components.forEach((item) => {
        items.push({
            name: item.name,
            slug: item.slug,
            category: "Components",
            description: item.description,
        });
    });

    // Texts
    NAVIGATION.texts.forEach((item) => {
        items.push({
            name: item.name,
            slug: item.slug,
            category: "Texts",
            description: item.description,
        });
    });

    // Buttons
    NAVIGATION.buttons.forEach((item) => {
        items.push({
            name: item.name,
            slug: item.slug,
            category: "Buttons",
            description: item.description,
        });
    });

    // Interactive
    NAVIGATION.interactive.forEach((item) => {
        items.push({
            name: item.name,
            slug: item.slug,
            category: "Interactive",
            description: item.description,
        });
    });

    // AI
    NAVIGATION.ai.forEach((item) => {
        items.push({
            name: item.name,
            slug: item.slug,
            category: "AI",
            description: item.description,
        });
    });

    // Special
    NAVIGATION.special.forEach((item) => {
        items.push({
            name: item.name,
            slug: item.slug,
            category: "Special",
            description: item.description,
        });
    });

    // Primitives
    NAVIGATION.primitives.forEach((item) => {
        items.push({
            name: item.name,
            slug: item.slug,
            category: "Primitives",
            description: item.description,
        });
    });

    return items;
}

function getCategoryIcon(category: string) {
    switch (category) {
        case "Blocks":
            return <LayoutGrid className="h-4 w-4" />;
        case "Motion":
            return <Zap className="h-4 w-4" />;
        case "Effects":
            return <Palette className="h-4 w-4" />;
        case "Components":
            return <Palette className="h-4 w-4" />;
        case "AI":
            return <Cpu className="h-4 w-4" />;
        case "Texts":
            return <Type className="h-4 w-4" />;
        case "Buttons":
            return <MousePointer2 className="h-4 w-4" />;
        case "Interactive":
            return <Hand className="h-4 w-4" />;
        case "Special":
            return <Star className="h-4 w-4" />;
        case "Primitives":
            return <Hand className="h-4 w-4" />;
        default:
            return <FileText className="h-4 w-4" />;
    }
}

export function SearchModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const [mounted, setMounted] = useState(false);

    const allItems = getAllSearchItems();
    const filteredItems = query.trim()
        ? allItems.filter(
            (item) =>
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.category.toLowerCase().includes(query.toLowerCase()) ||
                item.description?.toLowerCase().includes(query.toLowerCase())
        )
        : allItems;

    // Group by category
    const groupedItems = filteredItems.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {} as Record<string, SearchResult[]>);

    const flattenedItems = Object.values(groupedItems).flat();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen(true);
            }
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    const handleKeyNavigation = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex((prev) =>
                    prev < flattenedItems.length - 1 ? prev + 1 : prev
                );
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
            } else if (e.key === "Enter" && flattenedItems[selectedIndex]) {
                e.preventDefault();
                router.push(flattenedItems[selectedIndex].slug);
                setIsOpen(false);
                setQuery("");
            }
        },
        [flattenedItems, selectedIndex, router]
    );

    const handleSelect = (item: SearchResult) => {
        router.push(item.slug);
        setIsOpen(false);
        setQuery("");
    };

    if (!mounted) return null;

    return (
        <>
            {/* Search Trigger Button */}
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/50 rounded-lg transition-colors w-56"
            >
                <Search className="h-4 w-4" />
                <span className="flex-1 text-left">Search</span>
                <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 text-xs font-medium bg-zinc-200 dark:bg-zinc-700 rounded">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>

            {/* Modal */}
            {createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                                onClick={() => setIsOpen(false)}
                            />

                            {/* Modal Content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                                transition={{ duration: 0.15 }}
                                className="fixed left-1/2 top-[20%] z-50 w-full max-w-lg -translate-x-1/2 p-4"
                            >
                                <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-2xl">
                                    {/* Search Input */}
                                    <div className="flex items-center gap-3 border-b border-zinc-200 dark:border-zinc-800 px-4 py-3">
                                        <Search className="h-5 w-5 text-zinc-400" />
                                        <input
                                            ref={inputRef}
                                            type="text"
                                            value={query}
                                            onChange={(e) => setQuery(e.target.value)}
                                            onKeyDown={handleKeyNavigation}
                                            placeholder="Search documentation..."
                                            className="flex-1 bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-500 outline-none"
                                        />
                                        <button
                                            onClick={() => setIsOpen(false)}
                                            className="rounded bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-xs text-zinc-500"
                                        >
                                            ESC
                                        </button>
                                    </div>

                                    {/* Results */}
                                    <div className="max-h-[60vh] overflow-y-auto p-2">
                                        {Object.entries(groupedItems).map(([category, items]) => (
                                            <div key={category} className="mb-4">
                                                <div className="px-2 py-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                                                    {category}
                                                </div>
                                                <div className="space-y-1">
                                                    {items.map((item) => {
                                                        const globalIndex = flattenedItems.indexOf(item);
                                                        return (
                                                            <button
                                                                key={item.slug}
                                                                onClick={() => handleSelect(item)}
                                                                onMouseEnter={() => setSelectedIndex(globalIndex)}
                                                                className={cn(
                                                                    "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors",
                                                                    globalIndex === selectedIndex
                                                                        ? "bg-zinc-100 dark:bg-zinc-800"
                                                                        : "hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                                                                )}
                                                            >
                                                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-500">
                                                                    {getCategoryIcon(category)}
                                                                </span>
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                                                                        {item.name}
                                                                    </div>
                                                                    {item.description && (
                                                                        <div className="text-xs text-zinc-500 dark:text-zinc-400 truncate">
                                                                            {item.description}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <ArrowRight className="h-4 w-4 text-zinc-400 flex-shrink-0" />
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        ))}
                                        {flattenedItems.length === 0 && (
                                            <div className="px-4 py-8 text-center text-sm text-zinc-500">
                                                No results found for &ldquo;{query}&rdquo;
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}
