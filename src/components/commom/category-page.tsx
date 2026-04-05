"use client";

import { useState, useRef, useEffect } from "react";
import ComponentCard from "@/src/components/commom/component-card";
import { Search, X, ChevronDown, Check } from "lucide-react";
import { Component } from "@/src/lib/components-data";
import { ComponentGroup } from "@/src/lib/categories";
import { motion, AnimatePresence } from "framer-motion";

interface CategoryPageProps {
    title: string;
    description: string;
    components: Component[];
    basePath: string;
    groups?: ComponentGroup[];
}

export default function CategoryPage({
    title,
    description,
    components,
    basePath,
    groups,
}: CategoryPageProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const hasGroups = groups && groups.length > 0;

    // Close dropdown on outside click
    useEffect(() => {
        if (!dropdownOpen) return;
        const handler = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [dropdownOpen]);

    const activeGroupComponents: Component[] = selectedGroup
        ? (groups?.find((g) => g.label === selectedGroup)?.components ?? components)
        : components;

    const filteredComponents = activeGroupComponents.filter((component) => {
        if (!searchQuery) return true;
        const q = searchQuery.toLowerCase();
        return (
            component.name.toLowerCase().includes(q) ||
            component.description.toLowerCase().includes(q) ||
            component.tags.some((tag) => tag.toLowerCase().includes(q))
        );
    });

    return (
        <div className="relative min-h-screen">
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-linear-to-b from-indigo-500/[0.03] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 relative z-10">
                {/* Header */}
                <div className="mb-16 sm:mb-20">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                        <div className="max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tighter mb-6 leading-[1.05]">
                                    {title}
                                </h1>
                                <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed font-medium">
                                    {description}
                                </p>
                            </motion.div>
                        </div>

                        {/* Controls row: dropdown + search */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
                        >
                            {/* Group dropdown */}
                            {hasGroups && (
                                <div ref={dropdownRef} className="relative">
                                    <button
                                        onClick={() => setDropdownOpen((o) => !o)}
                                        className="flex items-center gap-2 w-full sm:w-48 bg-white/[0.03] border border-white/5 rounded-2xl py-3 px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/40 transition-all hover:border-white/10"
                                    >
                                        <span className="flex-1 text-left truncate text-sm font-medium">
                                            {selectedGroup ?? "All types"}
                                        </span>
                                        <ChevronDown
                                            className={`h-4 w-4 text-neutral-500 shrink-0 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                                        />
                                    </button>

                                    <AnimatePresence>
                                        {dropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -6, scale: 0.97 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -6, scale: 0.97 }}
                                                transition={{ duration: 0.15, ease: "easeOut" }}
                                                className="absolute top-full mt-2 left-0 w-52 bg-[#111] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden z-50"
                                            >
                                                {/* All option */}
                                                <button
                                                    onClick={() => { setSelectedGroup(null); setDropdownOpen(false); }}
                                                    className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-left hover:bg-white/5 transition-colors"
                                                >
                                                    <span className={selectedGroup === null ? "text-white font-semibold" : "text-neutral-400"}>
                                                        All types
                                                    </span>
                                                    {selectedGroup === null && <Check className="h-3.5 w-3.5 text-indigo-400" />}
                                                </button>
                                                <div className="h-px bg-white/5 mx-3" />
                                                {groups.map((g) => (
                                                    <button
                                                        key={g.label}
                                                        onClick={() => { setSelectedGroup(g.label); setDropdownOpen(false); }}
                                                        className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-left hover:bg-white/5 transition-colors"
                                                    >
                                                        <span className={selectedGroup === g.label ? "text-white font-semibold" : "text-neutral-400"}>
                                                            {g.label}
                                                        </span>
                                                        <span className="text-[10px] text-neutral-600 font-medium">{g.components.length}</span>
                                                        {selectedGroup === g.label && <Check className="h-3.5 w-3.5 text-indigo-400 ml-1" />}
                                                    </button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )}

                            {/* Search */}
                            <div className="relative w-full sm:w-80 group">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500 group-focus-within:text-white transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Find components..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-3 pl-11 pr-10 text-sm text-white placeholder:text-neutral-600 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500/40 transition-all"
                                />
                                <AnimatePresence>
                                    {searchQuery && (
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            onClick={() => setSearchQuery("")}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-white/10 text-neutral-500 hover:text-white transition-all"
                                        >
                                            <X className="h-3 w-3" />
                                        </motion.button>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>

                    {/* Stats divider */}
                    <div className="flex items-center gap-4 text-[10px] font-bold text-neutral-600 uppercase tracking-[0.2em] mb-8">
                        <div className="h-px flex-1 bg-white/5" />
                        <span>
                            {selectedGroup
                                ? `${selectedGroup} · `
                                : ""}
                            {filteredComponents.length} {filteredComponents.length === 1 ? "result" : "results"}
                        </span>
                        <div className="h-px flex-1 bg-white/5" />
                    </div>
                </div>

                {/* Grid */}
                <div className="relative">
                    {filteredComponents.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {filteredComponents.map((component, index) => (
                                <ComponentCard
                                    key={component.id}
                                    id={component.id}
                                    name={component.name}
                                    description={component.description}
                                    category={component.category}
                                    tags={component.tags}
                                    previewUrl={component.previewUrl}
                                    imageUrl={component.imageUrl}
                                    videoUrl={component.videoUrl}
                                    index={index}
                                    basePath={basePath}
                                />
                            ))}
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-32 text-center">
                            <div className="p-4 rounded-full bg-white/5 mb-4">
                                <Search className="h-8 w-8 text-neutral-600" />
                            </div>
                            <h3 className="text-xl font-display font-extrabold text-white mb-2 tracking-tight">No components found</h3>
                            <p className="text-neutral-500 max-w-xs font-medium">
                                {searchQuery
                                    ? `No results for "${searchQuery}". Try a different search term.`
                                    : "Nothing here yet."}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
