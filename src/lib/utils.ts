import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}

export function getPackageCommand(
  manager: "npm" | "bun" | "pnpm",
  packageName: string
): string {
  const commands = {
    npm: `npx shadcn@latest add ${packageName}`,
    bun: `bunx --bun shadcn@latest add ${packageName}`,
    pnpm: `pnpm dlx shadcn@latest add ${packageName}`,
  };
  return commands[manager];
}
