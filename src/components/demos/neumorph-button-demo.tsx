"use client";

export function NeumorphButtonDemo() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[300px] p-8 bg-[#e0e5ec] rounded-xl space-y-8">
            <h3 className="text-xl font-bold text-zinc-700">Neumorphism</h3>

            <div className="flex gap-8">
                <button className="px-8 py-3 rounded-xl bg-[#e0e5ec] text-zinc-600 font-semibold shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] transition-all">
                    Button
                </button>

                <button className="w-12 h-12 rounded-full bg-[#e0e5ec] text-zinc-600 flex items-center justify-center shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#b8b9be,inset_-4px_-4px_8px_#ffffff] transition-all">
                    ❤️
                </button>
            </div>
        </div>
    );
}
