"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const blogPosts = [
    {
        title: "Building Beautiful UIs with Framer Motion",
        excerpt: "Learn how to create stunning animations that delight users and improve engagement.",
        category: "Tutorials",
        author: "Sarah Chen",
        date: "Feb 8, 2026",
        readTime: "5 min read",
        image: "from-pink-500 to-rose-500",
    },
    {
        title: "The Future of React Component Libraries",
        excerpt: "Exploring trends and predictions for the next generation of UI frameworks.",
        category: "Insights",
        author: "Michael Rodriguez",
        date: "Feb 6, 2026",
        readTime: "8 min read",
        image: "from-violet-500 to-purple-500",
    },
    {
        title: "Dark Mode Done Right",
        excerpt: "Best practices for implementing accessible dark mode in your applications.",
        category: "Design",
        author: "Emily Watson",
        date: "Feb 4, 2026",
        readTime: "6 min read",
        image: "from-blue-500 to-cyan-500",
    },
    {
        title: "Performance Optimization Tips",
        excerpt: "Speed up your React applications with these proven optimization techniques.",
        category: "Performance",
        author: "David Kim",
        date: "Feb 2, 2026",
        readTime: "7 min read",
        image: "from-emerald-500 to-teal-500",
    },
];

export function BlogBlockDemo() {
    return (
        <div className="space-y-16">
            {/* Blog Variant 1: Featured + Grid */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8 md:p-12">
                <div className="text-center mb-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-2 block"
                    >
                        Blog
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4"
                    >
                        Latest Articles
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                    {/* Featured Post */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="group rounded-xl border border-zinc-100 dark:border-zinc-800 overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <div className={`h-48 bg-gradient-to-br ${blogPosts[0].image} relative`}>
                            <span className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                                Featured
                            </span>
                        </div>
                        <div className="p-6">
                            <span className="text-xs font-medium text-violet-600 dark:text-violet-400 mb-2 block">
                                {blogPosts[0].category}
                            </span>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                {blogPosts[0].title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                                {blogPosts[0].excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white text-xs font-semibold">
                                        {blogPosts[0].author.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                                        {blogPosts[0].author}
                                    </span>
                                </div>
                                <span className="text-sm text-zinc-500">{blogPosts[0].readTime}</span>
                            </div>
                        </div>
                    </motion.article>

                    {/* Secondary Posts */}
                    <div className="space-y-4">
                        {blogPosts.slice(1, 4).map((post, i) => (
                            <motion.article
                                key={post.title}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                                className="group flex gap-4 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-colors"
                            >
                                <div className={`w-20 h-20 rounded-lg bg-gradient-to-br ${post.image} flex-shrink-0`} />
                                <div className="flex-1 min-w-0">
                                    <span className="text-xs font-medium text-violet-600 dark:text-violet-400">
                                        {post.category}
                                    </span>
                                    <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 truncate group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                        {post.title}
                                    </h3>
                                    <div className="flex items-center gap-3 mt-1 text-xs text-zinc-500">
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {post.date}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            {post.readTime}
                                        </span>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <button className="text-violet-600 dark:text-violet-400 font-medium hover:underline flex items-center gap-1 mx-auto">
                        View All Posts
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Blog Variant 2: Card Grid */}
            <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-900 p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                        Recent Posts
                    </h2>
                    <button className="text-sm font-medium text-violet-600 dark:text-violet-400 hover:underline">
                        View All →
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {blogPosts.map((post, i) => (
                        <motion.article
                            key={post.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.05 * i }}
                            className="group bg-white dark:bg-zinc-950 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-shadow"
                        >
                            <div className={`h-32 bg-gradient-to-br ${post.image}`} />
                            <div className="p-4">
                                <span className="text-xs font-medium text-violet-600 dark:text-violet-400">
                                    {post.category}
                                </span>
                                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mt-1 mb-2 line-clamp-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                    {post.title}
                                </h3>
                                <div className="flex items-center gap-2 text-xs text-zinc-500">
                                    <User className="w-3 h-3" />
                                    <span>{post.author}</span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            {/* Blog Variant 3: Minimal List */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-8">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                    Archive
                </h2>
                <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                    {blogPosts.map((post, i) => (
                        <motion.article
                            key={post.title}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.05 * i }}
                            className="group py-4 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-900 -mx-4 px-4 rounded-lg transition-colors cursor-pointer"
                        >
                            <div>
                                <h3 className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-zinc-500 mt-1">
                                    {post.date} · {post.readTime}
                                </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}
