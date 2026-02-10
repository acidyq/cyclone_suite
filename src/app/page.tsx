"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  ArrowRight,
  Sparkles,
  Terminal,
  Bot,
  Code2,
  Zap,
  Copy,
  Github,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

// Simulated terminal typing effect
function TerminalTyper() {
  const lines = [
    { prefix: "~", cmd: "npx shadcn@latest add @cyclonesuite/hero", delay: 0 },
    { prefix: "", cmd: "✓ Component installed successfully", delay: 1800, isOutput: true },
    { prefix: "", cmd: "✓ Dependencies resolved", delay: 2200, isOutput: true },
    { prefix: "~", cmd: "npm run dev", delay: 3000 },
    { prefix: "", cmd: "▲ Ready on localhost:3000", delay: 4200, isOutput: true },
  ];

  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (visibleLines >= lines.length) {
      // Reset after a pause
      const timer = setTimeout(() => {
        setVisibleLines(0);
        setTypingIndex(0);
        setCurrentText("");
      }, 4000);
      return () => clearTimeout(timer);
    }

    const currentLine = lines[visibleLines];

    if (currentLine.isOutput) {
      // Output lines appear after their delay from start
      const timer = setTimeout(() => {
        setCurrentText("");
        setTypingIndex(0);
        setVisibleLines((v) => v + 1);
      }, 400);
      return () => clearTimeout(timer);
    }

    // Type character by character
    if (typingIndex < currentLine.cmd.length) {
      const timer = setTimeout(() => {
        setCurrentText(currentLine.cmd.slice(0, typingIndex + 1));
        setTypingIndex((i) => i + 1);
      }, 30 + Math.random() * 40);
      return () => clearTimeout(timer);
    } else {
      // Finished typing, pause then show as complete
      const timer = setTimeout(() => {
        setCurrentText("");
        setTypingIndex(0);
        setVisibleLines((v) => v + 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [visibleLines, typingIndex, lines.length]);

  return (
    <div className="font-mono text-sm space-y-1">
      {lines.slice(0, visibleLines).map((line, i) => (
        <div key={i} className="flex items-center gap-2">
          {line.isOutput ? (
            <span className="text-emerald-400">{line.cmd}</span>
          ) : (
            <>
              <span className="text-zinc-500">{line.prefix} $</span>
              <span className="text-zinc-300">{line.cmd}</span>
            </>
          )}
        </div>
      ))}
      {visibleLines < lines.length && !lines[visibleLines].isOutput && (
        <div className="flex items-center gap-2">
          <span className="text-zinc-500">{lines[visibleLines].prefix} $</span>
          <span className="text-zinc-300">{currentText}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            className="w-2 h-4 bg-emerald-400 inline-block"
          />
        </div>
      )}
    </div>
  );
}

// Floating component previews
function FloatingPreviews() {
  const previews = [
    { label: "Animated Tabs", color: "from-violet-500 to-indigo-500", x: -40, y: 20, delay: 0 },
    { label: "Text Morph", color: "from-pink-500 to-rose-500", x: 40, y: -30, delay: 0.3 },
    { label: "Shimmer Button", color: "from-emerald-500 to-teal-500", x: -20, y: 60, delay: 0.6 },
    { label: "Card Stack", color: "from-amber-500 to-orange-500", x: 50, y: 40, delay: 0.9 },
  ];

  return (
    <div className="relative w-full h-full">
      {previews.map((p, i) => (
        <motion.div
          key={p.label}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { delay: p.delay + 0.5, duration: 0.4 },
            scale: { delay: p.delay + 0.5, duration: 0.4 },
            y: { delay: p.delay + 1, duration: 3 + i * 0.5, repeat: Infinity },
          }}
          className="absolute"
          style={{
            left: `${45 + p.x * 0.6}%`,
            top: `${35 + p.y * 0.5}%`,
          }}
        >
          <div className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${p.color} text-white text-xs font-medium shadow-lg shadow-black/20 whitespace-nowrap`}>
            {p.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Stats that feel honest
function HonestStat({ number, label, delay }: { number: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="text-center"
    >
      <div className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100">{number}</div>
      <div className="text-sm text-zinc-500 dark:text-zinc-400">{label}</div>
    </motion.div>
  );
}

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npx shadcn@latest add @cyclonesuite/hero");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* ─── Top bar with theme toggle ─── */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* ─── HERO ──────────────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
              backgroundSize: "24px 24px",
            }}
          />
          {/* Glow */}
          <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-violet-500/8 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 pt-20 pb-16 lg:pt-28 lg:pb-24">
          <div className="max-w-6xl mx-auto">
            {/* Top section: Text + Terminal side by side */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: The story */}
              <div className="space-y-6">
                {/* Identity badge - honest, not corporate */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm"
                >
                  <span className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    solo dev
                  </span>
                  <span className="text-zinc-300 dark:text-zinc-700">×</span>
                  <span className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400">
                    <Bot className="w-3.5 h-3.5" />
                    AI-assisted
                  </span>
                </motion.div>

                {/* Headline - not the usual "Build X faster" */}
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.1]"
                >
                  One person.{" "}
                  <br className="hidden sm:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
                    100+ components.
                  </span>
                  <br />
                  <span className="text-zinc-400 dark:text-zinc-500 text-3xl md:text-4xl lg:text-[2.75rem] font-medium">
                    No excuses.
                  </span>
                </motion.h1>

                {/* Subheading - personal, real */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed"
                >
                  A curated collection of animated React components I built (with a lot of help from AI).
                  Free, open source, and ready to drop into your next project.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap items-center gap-3 pt-2"
                >
                  <Link
                    href="/docs"
                    className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium text-sm hover:opacity-90 transition-all"
                  >
                    Browse Components
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <a
                    href="https://github.com/cyclonesuite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </motion.div>

                {/* Quick install */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-2"
                >
                  <button
                    onClick={handleCopy}
                    className="group inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                  >
                    <code className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                      npx shadcn@latest add @cyclonesuite/hero
                    </code>
                    <span className="text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                      {copied ? (
                        <motion.span
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          className="text-emerald-500 text-xs font-medium"
                        >
                          Copied!
                        </motion.span>
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </span>
                  </button>
                </motion.div>
              </div>

              {/* Right: Terminal window */}
              <motion.div
                initial={{ opacity: 0, x: 20, rotateY: -5 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative"
              >
                <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/10 dark:shadow-black/40 overflow-hidden">
                  {/* Terminal header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-xs text-zinc-500 font-mono">terminal — zsh</span>
                    </div>
                  </div>
                  {/* Terminal body */}
                  <div className="p-5 min-h-[200px]">
                    <TerminalTyper />
                  </div>
                </div>

                {/* Floating component labels */}
                <div className="absolute -inset-8 -z-10 hidden lg:block pointer-events-none">
                  <FloatingPreviews />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── HONEST STATS ──────────────────────────────────────── */}
      <div className="border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
            <HonestStat number="100+" label="Components" delay={0.1} />
            <HonestStat number="12" label="Block Templates" delay={0.2} />
            <HonestStat number="1" label="Developer" delay={0.3} />
            <HonestStat number="∞" label="AI Conversations" delay={0.4} />
          </div>
        </div>
      </div>

      {/* ─── THE REAL STORY ────────────────────────────────────── */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
              Not your typical component library
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              No VC funding. No team of 20. Just curiosity, late nights, and conversations with AI.
              Here&apos;s what actually makes this different.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Bot,
                title: "AI-First Workflow",
                description: "Every component is designed and iterated through AI collaboration. It's not about replacing developers — it's about what one person can build when the barriers drop.",
                gradient: "from-violet-500 to-indigo-500",
              },
              {
                icon: Code2,
                title: "Copy & Paste. That's It.",
                description: "No complex dependency trees. No config hell. Just grab the component, drop it in your project, and tweak it however you want.",
                gradient: "from-emerald-500 to-teal-500",
              },
              {
                icon: Sparkles,
                title: "Curated, Not Created",
                description: "The best ideas from shadcn/ui, Motion Primitives, Aceternity UI, and Cult UI — remixed and unified into one cohesive system.",
                gradient: "from-pink-500 to-rose-500",
              },
              {
                icon: Zap,
                title: "Actually Free",
                description: "Open source, MIT licensed. No freemium traps, no gated features, no \"contact sales\". Everything is right here.",
                gradient: "from-amber-500 to-orange-500",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
              >
                {/* Subtle gradient on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />
                <div className="relative">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── COMPONENT BROWSER PREVIEW ─────────────────────────── */}
      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 overflow-hidden"
          >
            {/* Browser-like header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="flex items-center gap-2 px-4 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-xs text-zinc-500 font-mono">
                  <span>cyclonesuite.dev/docs</span>
                </div>
              </div>
            </div>

            {/* Component grid */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {[
                  { name: "Loader", category: "Motion", color: "bg-violet-500" },
                  { name: "Text Effect", category: "Effects", color: "bg-pink-500" },
                  { name: "Shimmer", category: "Buttons", color: "bg-emerald-500" },
                  { name: "Card Stack", category: "Components", color: "bg-amber-500" },
                  { name: "Accordion", category: "Interactive", color: "bg-blue-500" },
                  { name: "Timeline", category: "Components", color: "bg-rose-500" },
                  { name: "Carousel", category: "Motion", color: "bg-teal-500" },
                  { name: "3D Card", category: "Special", color: "bg-indigo-500" },
                ].map((comp, i) => (
                  <motion.div
                    key={comp.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -2, scale: 1.02 }}
                    className="group p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-pointer"
                  >
                    <div className={`w-full h-16 rounded-lg ${comp.color}/10 flex items-center justify-center mb-3`}>
                      <div className={`w-8 h-8 rounded-md ${comp.color} opacity-80`} />
                    </div>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{comp.name}</p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">{comp.category}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/docs"
                  className="inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-medium"
                >
                  Explore all 100+ components
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ─── CTA / FOOTER ──────────────────────────────────────── */}
      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100"
            >
              Start building something cool
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-zinc-600 dark:text-zinc-400"
            >
              Whether you&apos;re a solo dev like me, or part of a team — these components are yours.
              Fork it, break it, make it better.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <Link
                href="/docs"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:opacity-90 transition-opacity"
              >
                Get Started
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href="https://github.com/cyclonesuite"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
              >
                <Github className="h-4 w-4" />
                Star on GitHub
              </a>
            </motion.div>
          </div>
        </div>

        {/* Minimal footer */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 py-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-emerald-500" />
              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Cyclone Suite</span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Built by one person and a lot of AI conversations. Open source under MIT.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/cyclonesuite" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
