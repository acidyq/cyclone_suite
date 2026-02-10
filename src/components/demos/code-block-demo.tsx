"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CodeBlockDemo() {
    const code = `function HelloWorld() {
  console.log("Hello, world!");
  return (
    <div>Welcome to Cyclone UI</div>
  );
}`;
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-center justify-center min-h-[300px] p-8 bg-zinc-950 rounded-xl">
            <div className="w-full max-w-md rounded-xl bg-[#1e1e1e] border border-zinc-800 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-zinc-800">
                    <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <button onClick={handleCopy} className="text-zinc-400 hover:text-white transition">
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                </div>
                <div className="p-4 overflow-x-auto">
                    <pre className="text-sm font-mono text-zinc-300">
                        <code>{code}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
}
