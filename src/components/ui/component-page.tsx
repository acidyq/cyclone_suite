import { cn } from "@/lib/utils";

interface ComponentPageProps {
    title: string;
    description: string;
    children: React.ReactNode;
    installSection?: React.ReactNode;
    techBadge?: string;
    className?: string;
}

export function ComponentPage({
    title,
    description,
    children,
    installSection,
    techBadge,
    className,
}: ComponentPageProps) {
    return (
        <div className={cn("space-y-8", className)}>
            {/* Header */}
            <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {title}
                </h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">{description}</p>
            </div>

            {/* Install Command Section */}
            {installSection && <div className="space-y-2">{installSection}</div>}

            {/* Demo Area */}
            <div className="relative rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden">
                <div className="min-h-[400px] flex items-center justify-center p-8">
                    {children}
                </div>
            </div>

            {/* Tech Badge */}
            {techBadge && (
                <div className="flex justify-start">
                    <a
                        href="https://motion.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium text-sm hover:opacity-90 transition-opacity"
                    >
                        {techBadge}
                    </a>
                </div>
            )}
        </div>
    );
}
