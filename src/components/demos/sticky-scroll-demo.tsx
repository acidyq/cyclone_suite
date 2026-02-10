"use client";



export function StickyScrollDemo() {
    return (
        <div className="h-[500px] w-full bg-zinc-950 rounded-xl overflow-y-scroll relative flex border border-zinc-800">
            <div className="w-1/2 p-10 space-y-[40vh]">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-[200px]">
                        <h3 className="text-2xl font-bold text-white mb-4">Version {i + 1}.0</h3>
                        <p className="text-zinc-400 leading-relaxed">
                            Experience smooth scrolling with sticky content. As you scroll, the relevant content stays in view while the description moves. This creates an immersive storytelling experience perfect for product features.
                        </p>
                    </div>
                ))}
            </div>

            <div className="w-1/2 sticky top-0 h-full flex items-center justify-center bg-zinc-900 border-l border-zinc-800">
                <div className="text-6xl">✨</div>
            </div>
        </div>
    );
}
