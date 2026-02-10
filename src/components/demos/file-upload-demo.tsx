"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, File, X, CheckCircle } from "lucide-react";

interface UploadedFile {
    id: string;
    name: string;
    size: string;
    progress: number;
}

export function FileUploadDemo() {
    const [files, setFiles] = useState<UploadedFile[]>([]);
    const [isDragging, setIsDragging] = useState(false);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const droppedFiles = Array.from(e.dataTransfer.files);
        addFiles(droppedFiles);
    }, []);

    const addFiles = (newFiles: File[]) => {
        const uploadedFiles: UploadedFile[] = newFiles.map((file) => ({
            id: Math.random().toString(36).substr(2, 9),
            name: file.name,
            size: formatFileSize(file.size),
            progress: 0,
        }));

        setFiles((prev) => [...prev, ...uploadedFiles]);

        // Simulate upload progress
        uploadedFiles.forEach((file) => {
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 30;
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                }
                setFiles((prev) =>
                    prev.map((f) => (f.id === file.id ? { ...f, progress } : f))
                );
            }, 200);
        });
    };

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return bytes + " B";
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
        return (bytes / (1024 * 1024)).toFixed(1) + " MB";
    };

    const removeFile = (id: string) => {
        setFiles((prev) => prev.filter((f) => f.id !== id));
    };

    return (
        <div className="w-full max-w-md mx-auto p-8">
            {/* Drop zone */}
            <motion.div
                onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                animate={{
                    borderColor: isDragging ? "#3b82f6" : "#e4e4e7",
                    backgroundColor: isDragging ? "rgba(59, 130, 246, 0.05)" : "transparent",
                }}
                className="relative p-8 border-2 border-dashed rounded-xl text-center cursor-pointer transition-colors"
                onClick={() => {
                    // Simulate file selection
                    addFiles([
                        new (globalThis.File)([""], "example-document.pdf", { type: "application/pdf" }),
                    ]);
                }}
            >
                <motion.div
                    animate={{ scale: isDragging ? 1.1 : 1 }}
                    className="flex flex-col items-center"
                >
                    <div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
                        <Upload className="w-8 h-8 text-zinc-500" />
                    </div>
                    <p className="text-zinc-900 dark:text-zinc-100 font-medium mb-1">
                        Drop files here or click to upload
                    </p>
                    <p className="text-sm text-zinc-500">
                        Supports: PDF, PNG, JPG up to 10MB
                    </p>
                </motion.div>
            </motion.div>

            {/* File list */}
            <AnimatePresence>
                {files.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6 space-y-3"
                    >
                        {files.map((file) => (
                            <motion.div
                                key={file.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="relative p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl overflow-hidden"
                            >
                                {/* Progress bar */}
                                <motion.div
                                    className="absolute inset-0 bg-blue-500/10"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${file.progress}%` }}
                                />

                                <div className="relative flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center">
                                        <File className="w-5 h-5 text-zinc-500" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 truncate">
                                            {file.name}
                                        </p>
                                        <p className="text-xs text-zinc-500">{file.size}</p>
                                    </div>
                                    {file.progress >= 100 ? (
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                    ) : (
                                        <span className="text-sm text-zinc-500">
                                            {Math.round(file.progress)}%
                                        </span>
                                    )}
                                    <button
                                        onClick={() => removeFile(file.id)}
                                        className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded"
                                    >
                                        <X className="w-4 h-4 text-zinc-500" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
