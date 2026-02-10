"use client";

import { useState, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { Home, Search, MessageCircle, Bell, Settings, User, Folder, Calendar, Music, Mail } from "lucide-react";

const DOCK_ITEMS = [
    { icon: Home, label: "Home" },
    { icon: Search, label: "Search" },
    { icon: MessageCircle, label: "Messages" },
    { icon: Bell, label: "Notifications" },
    { icon: Folder, label: "Files" },
    { icon: Calendar, label: "Calendar" },
    { icon: Music, label: "Music" },
    { icon: Mail, label: "Mail" },
    { icon: Settings, label: "Settings" },
    { icon: User, label: "Profile" },
];

function DockItem({
    icon: Icon,
    label,
    mouseX,
    index,
}: {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    mouseX: number | null;
    index: number;
}) {
    const ref = useRef<HTMLDivElement>(null);

    // Calculate distance from mouse
    const distance = useSpring(0, { stiffness: 400, damping: 30 });

    const getDistance = () => {
        if (mouseX === null || !ref.current) return 100;
        const rect = ref.current.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        return Math.abs(mouseX - itemCenterX);
    };

    // Scale based on distance - closer = larger
    const scale = mouseX !== null ? Math.max(1, 1.5 - getDistance() / 150) : 1;
    const yOffset = mouseX !== null ? Math.max(0, -15 * (1 - getDistance() / 150)) : 0;

    return (
        <motion.div
            ref={ref}
            className="relative group cursor-pointer"
            animate={{
                scale,
                y: yOffset,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
            {/* Tooltip */}
            <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                initial={{ opacity: 0, y: 5 }}
                whileHover={{ opacity: 1, y: 0 }}
            >
                {label}
                <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-zinc-800" />
            </motion.div>

            {/* Icon container */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-zinc-700 to-zinc-800 border border-zinc-600/50 shadow-lg hover:from-zinc-600 hover:to-zinc-700 transition-colors">
                <Icon className="h-6 w-6 text-zinc-200" />
            </div>

            {/* Reflection */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white/10 rounded-full blur-sm" />
        </motion.div>
    );
}

export function DockDemo() {
    const [mouseX, setMouseX] = useState<number | null>(null);
    const dockRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        setMouseX(e.clientX);
    };

    const handleMouseLeave = () => {
        setMouseX(null);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl p-8">
            {/* Label */}
            <div className="mb-8 text-center">
                <h3 className="text-lg font-medium text-white mb-1">macOS-style Dock</h3>
                <p className="text-sm text-zinc-500">Hover to see magnification effect</p>
            </div>

            {/* Dock container */}
            <div
                ref={dockRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="flex items-end gap-2 px-4 py-3 rounded-2xl bg-zinc-800/50 backdrop-blur-xl border border-zinc-700/50 shadow-2xl"
            >
                {DOCK_ITEMS.map((item, index) => (
                    <DockItem
                        key={item.label}
                        icon={item.icon}
                        label={item.label}
                        mouseX={mouseX}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
}
