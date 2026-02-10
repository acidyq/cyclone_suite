"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Simplified world map as dots/points - major cities
const CITIES = [
    { name: "New York", x: 28, y: 40, connections: ["London", "São Paulo"] },
    { name: "London", x: 48, y: 32, connections: ["New York", "Paris", "Dubai"] },
    { name: "Paris", x: 50, y: 35, connections: ["London"] },
    { name: "Dubai", x: 60, y: 44, connections: ["London", "Mumbai", "Singapore"] },
    { name: "Mumbai", x: 68, y: 50, connections: ["Dubai", "Singapore"] },
    { name: "Singapore", x: 76, y: 56, connections: ["Mumbai", "Tokyo", "Sydney"] },
    { name: "Tokyo", x: 85, y: 38, connections: ["Singapore", "Sydney"] },
    { name: "Sydney", x: 88, y: 72, connections: ["Singapore", "Tokyo"] },
    { name: "São Paulo", x: 32, y: 68, connections: ["New York"] },
    { name: "Los Angeles", x: 15, y: 42, connections: ["New York", "Tokyo"] },
];

export function WorldMapDemo() {
    const [activeCity, setActiveCity] = useState<string | null>(null);

    const getCity = (name: string) => CITIES.find((c) => c.name === name);

    return (
        <div className="relative w-full h-[400px] bg-zinc-950 rounded-xl overflow-hidden p-4">
            {/* Background grid */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: "50px 50px",
                }}
            />

            {/* Continent shapes (simplified) */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                {/* North America */}
                <ellipse cx="20" cy="35" rx="12" ry="10" fill="rgba(59, 130, 246, 0.2)" />
                {/* South America */}
                <ellipse cx="28" cy="65" rx="6" ry="12" fill="rgba(59, 130, 246, 0.2)" />
                {/* Europe */}
                <ellipse cx="50" cy="30" rx="8" ry="6" fill="rgba(59, 130, 246, 0.2)" />
                {/* Africa */}
                <ellipse cx="52" cy="55" rx="8" ry="12" fill="rgba(59, 130, 246, 0.2)" />
                {/* Asia */}
                <ellipse cx="72" cy="38" rx="15" ry="12" fill="rgba(59, 130, 246, 0.2)" />
                {/* Australia */}
                <ellipse cx="85" cy="70" rx="6" ry="5" fill="rgba(59, 130, 246, 0.2)" />
            </svg>

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
                {CITIES.map((city) =>
                    city.connections.map((connName) => {
                        const conn = getCity(connName);
                        if (!conn) return null;
                        const isActive = activeCity === city.name || activeCity === connName;
                        return (
                            <motion.line
                                key={`${city.name}-${connName}`}
                                x1={city.x}
                                y1={city.y}
                                x2={conn.x}
                                y2={conn.y}
                                stroke={isActive ? "#3b82f6" : "rgba(59, 130, 246, 0.3)"}
                                strokeWidth={isActive ? 0.3 : 0.15}
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: Math.random() }}
                            />
                        );
                    })
                )}

                {/* Animated pulses along connections */}
                {activeCity &&
                    getCity(activeCity)?.connections.map((connName) => {
                        const city = getCity(activeCity)!;
                        const conn = getCity(connName);
                        if (!conn) return null;
                        return (
                            <motion.circle
                                key={`pulse-${activeCity}-${connName}`}
                                r="0.5"
                                fill="#60a5fa"
                                initial={{ cx: city.x, cy: city.y }}
                                animate={{ cx: conn.x, cy: conn.y }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                        );
                    })}
            </svg>

            {/* City dots */}
            {CITIES.map((city) => (
                <motion.div
                    key={city.name}
                    className="absolute cursor-pointer"
                    style={{
                        left: `${city.x}%`,
                        top: `${city.y}%`,
                        transform: "translate(-50%, -50%)",
                    }}
                    onMouseEnter={() => setActiveCity(city.name)}
                    onMouseLeave={() => setActiveCity(null)}
                >
                    <motion.div
                        className="relative"
                        animate={{
                            scale: activeCity === city.name ? 1.5 : 1,
                        }}
                    >
                        <div
                            className={`w-2 h-2 rounded-full ${activeCity === city.name ? "bg-blue-400" : "bg-blue-500"
                                }`}
                        />
                        {/* Pulse ring */}
                        <motion.div
                            className="absolute inset-0 rounded-full border border-blue-400"
                            animate={{
                                scale: [1, 2, 1],
                                opacity: [0.8, 0, 0.8],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        />
                    </motion.div>

                    {/* City label */}
                    {activeCity === city.name && (
                        <motion.div
                            className="absolute left-4 top-0 whitespace-nowrap bg-zinc-800 px-2 py-1 rounded text-xs text-white"
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            {city.name}
                        </motion.div>
                    )}
                </motion.div>
            ))}

            {/* Title */}
            <div className="absolute top-4 left-4">
                <h3 className="text-white font-semibold">World Map</h3>
                <p className="text-zinc-400 text-sm">Hover over cities to see connections</p>
            </div>
        </div>
    );
}
