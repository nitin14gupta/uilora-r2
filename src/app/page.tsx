import Link from "next/link";
import { CATEGORIES } from "@/src/lib/categories";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-linear-to-b from-indigo-500/[0.04] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 relative z-10">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Component Library
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tighter leading-[1.02] mb-6">
            Build faster with
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-violet-400">
              ready-made UI
            </span>
          </h1>
          <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-medium">
            {CATEGORIES.reduce((acc, c) => acc + (c.count ?? 0), 0)}+ components across{" "}
            {CATEGORIES.length} categories. Copy, paste, ship.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/${category.slug}`}
              className="group relative flex flex-col bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10 hover:shadow-xl hover:shadow-black/50 hover:-translate-y-0.5"
            >
              {/* Accent gradient */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${category.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Card content */}
              <div className="relative p-6 flex flex-col flex-1 z-10">
                {/* Component count badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[10px] font-bold text-neutral-500 uppercase tracking-[0.15em]">
                    {category.count} components
                  </span>
                </div>

                <h2 className="text-[18px] font-display font-extrabold text-white tracking-tight mb-2 group-hover:text-white transition-colors leading-tight">
                  {category.name}
                </h2>

                <p className="text-[13px] text-neutral-500 leading-relaxed font-medium flex-1">
                  {category.description}
                </p>

                {/* Arrow */}
                <div className="mt-5 flex items-center gap-1.5 text-[11px] font-bold text-neutral-600 group-hover:text-indigo-400 transition-colors uppercase tracking-[0.15em]">
                  Explore
                  <svg
                    className="h-3 w-3 translate-x-0 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
