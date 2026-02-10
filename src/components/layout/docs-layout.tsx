"use client";

import { useState, useEffect } from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

export function DocsLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Load sidebar state from localStorage
        const savedState = localStorage.getItem("sidebar-open");
        if (savedState !== null) {
            setSidebarOpen(savedState === "true");
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem("sidebar-open", String(sidebarOpen));
        }
    }, [sidebarOpen, mounted]);

    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950">
            <Header onToggleSidebar={toggleSidebar} />
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <main
                className={`transition-all duration-300 ${sidebarOpen ? "lg:pl-64" : "lg:pl-0"
                    }`}
            >
                <div className="container mx-auto max-w-4xl px-4 py-8 md:px-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
