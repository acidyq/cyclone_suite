"use client";

export function SeparatorDemo() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-zinc-950 rounded-xl space-y-8">
            <h3 className="text-xl font-bold text-white">Separator</h3>
            <div className="w-full max-w-sm space-y-6">
                {/* Horizontal */}
                <div className="space-y-3">
                    <p className="text-zinc-400 text-sm">Default horizontal</p>
                    <div className="h-px bg-zinc-800" />
                    <p className="text-zinc-400 text-sm">With gradient</p>
                    <div className="h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent" />
                    <p className="text-zinc-400 text-sm">Dashed</p>
                    <div className="border-t border-dashed border-zinc-700" />
                </div>
                {/* With text */}
                <div className="flex items-center gap-3">
                    <div className="flex-1 h-px bg-zinc-800" />
                    <span className="text-zinc-500 text-xs uppercase tracking-wider">or continue with</span>
                    <div className="flex-1 h-px bg-zinc-800" />
                </div>
                {/* Vertical */}
                <div className="flex items-center gap-4 h-10">
                    <span className="text-zinc-400 text-sm">Home</span>
                    <div className="w-px h-full bg-zinc-700" />
                    <span className="text-zinc-400 text-sm">About</span>
                    <div className="w-px h-full bg-zinc-700" />
                    <span className="text-zinc-400 text-sm">Contact</span>
                </div>
            </div>
        </div>
    );
}
