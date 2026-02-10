"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Loader2,
    Sparkles,
    Type,
    MousePointer2,
    ExternalLink,
    BookOpen,
    LayoutGrid,
    Zap,
    Palette,
    Hand,
    Cpu,
    Star,
    MonitorPlay,
    ToggleLeft
} from "lucide-react";
import { cn } from "@/lib/utils";
import { NAVIGATION } from "@/lib/constants";

interface SidebarProps {
    isOpen: boolean;
    onClose?: () => void;
}

function SidebarSection({
    title,
    icon: Icon,
    children,
}: {
    title: string;
    icon?: React.ComponentType<{ className?: string }>;
    children: React.ReactNode;
}) {
    return (
        <div className="mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                {Icon && <Icon className="h-3.5 w-3.5" />}
                {title}
            </div>
            <div className="mt-1 space-y-0.5">{children}</div>
        </div>
    );
}

function SidebarLink({
    href,
    children,
    isActive,
    isNew,
    isExternal,
}: {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
    isNew?: boolean;
    isExternal?: boolean;
}) {
    const linkContent = (
        <span
            className={cn(
                "group flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all duration-150",
                isActive
                    ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium"
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100"
            )}
        >
            <span className="flex-1 truncate">{children}</span>
            {isNew && (
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                    New
                </span>
            )}
            {isExternal && (
                <ExternalLink className="h-3 w-3 text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
        </span>
    );

    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {linkContent}
            </a>
        );
    }

    return <Link href={href}>{linkContent}</Link>;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
    const pathname = usePathname();

    const sidebarContent = (
        <div className="flex h-full flex-col">
            {/* Brand Badge */}
            <div className="px-4 py-4 border-b border-zinc-200 dark:border-zinc-800">
                <div className="flex items-start gap-2 p-3 rounded-lg bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                    <div className="flex flex-col">
                        <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">Cyclone Suite</span>
                        <span className="text-[10px] text-zinc-500 dark:text-zinc-400">Open Source Components</span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto px-3 py-4">
                {/* Get Started */}
                <SidebarSection title="Get Started" icon={BookOpen}>
                    {NAVIGATION.getStarted.map((item) => (
                        <SidebarLink
                            key={item.slug}
                            href={item.slug}
                            isActive={pathname === item.slug}
                        >
                            {item.name}
                        </SidebarLink>
                    ))}
                </SidebarSection>

                {/* Blocks */}
                <SidebarSection title="Blocks" icon={LayoutGrid}>
                    {NAVIGATION.blocks.map((item) => (
                        <SidebarLink
                            key={item.slug}
                            href={item.slug}
                            isActive={pathname === item.slug}
                            isNew={item.isNew}
                        >
                            {item.name}
                        </SidebarLink>
                    ))}
                </SidebarSection>

                {/* Motion */}
                <SidebarSection title="Motion" icon={Zap}>
                    {NAVIGATION.motion.map((item) => (
                        <SidebarLink
                            key={item.slug}
                            href={item.slug}
                            isActive={pathname === item.slug}
                            isNew={item.isNew}
                        >
                            {item.name}
                        </SidebarLink>
                    ))}
                </SidebarSection>

                {/* Effects */}
                <SidebarSection title="Effects" icon={Palette}>
                    {NAVIGATION.effects.map((item) => (
                        <SidebarLink
                            key={item.slug}
                            href={item.slug}
                            isActive={pathname === item.slug}
                            isNew={item.isNew}
                        >
                            {item.name}
                        </SidebarLink>
                    ))}
                </SidebarSection>

                {/* Components */}
                <SidebarSection title="Components" icon={Sparkles}>
                    {NAVIGATION.components.map((item) => (
                        <SidebarLink
                            key={item.slug}
                            href={item.slug}
                            isActive={pathname === item.slug}
                        >
                            {item.name}
                        </SidebarLink>
                    ))}
                </SidebarSection>

                {/* Texts */}
                <SidebarSection title="Texts" icon={Type}>
                    {NAVIGATION.texts.map((item) => (
                        <SidebarLink
                            key={item.slug}
                            href={item.slug}
                            isActive={pathname === item.slug}
                        >
                            {item.name}
                        </SidebarLink>
                    ))}
                </SidebarSection>

                {/* Buttons */}
                <SidebarSection title="Buttons" icon={MousePointer2}>
                    {NAVIGATION.buttons.map((item) => (
                        <SidebarLink
                            key={item.slug}
                            href={item.slug}
                            isActive={pathname === item.slug}
                        >
                            {item.name}
                        </SidebarLink>
                    ))}
                </SidebarSection>

                {/* Interactive */}
                <SidebarSection title="Interactive" icon={Hand}>
                    {NAVIGATION.interactive.map((item) => (
                        <SidebarLink
                            key={item.slug}
                            href={item.slug}
                            isActive={pathname === item.slug}
                        >
                            {item.name}
                        </SidebarLink>
                    ))}
                </SidebarSection>

                {/* AI */}
                <SidebarSection title="AI" icon={Cpu}>
                    {NAVIGATION.ai.map((item) => (
                        <SidebarLink
                            key={item.slug}
                            href={item.slug}
                            isActive={pathname === item.slug}
                        >
                            {item.name}
                        </SidebarLink>
                    ))}
                </SidebarSection>

                {/* Special */}
                <SidebarSection title="Special" icon={Star}>
                    {NAVIGATION.special.map((item) => (
                        <SidebarLink
                            key={item.slug}
                            href={item.slug}
                            isActive={pathname === item.slug}
                        >
                            {item.name}
                        </SidebarLink>
                    ))}
                </SidebarSection>

                {/* Primitives */}
                <SidebarSection title="Primitives" icon={ToggleLeft}>
                    {NAVIGATION.primitives.map((item) => (
                        <SidebarLink
                            key={item.slug}
                            href={item.slug}
                            isActive={pathname === item.slug}
                        >
                            {item.name}
                        </SidebarLink>
                    ))}
                </SidebarSection>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside
                className={cn(
                    "hidden lg:flex fixed left-0 top-0 z-30 h-screen w-64 flex-col border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 pt-14 transition-transform duration-300",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {sidebarContent}
            </aside>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                            onClick={onClose}
                        />

                        {/* Drawer */}
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed left-0 top-0 z-50 h-screen w-64 bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 lg:hidden"
                        >
                            {sidebarContent}
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
