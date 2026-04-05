"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Eye, Heart, Copy } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const LIBRARY_URL = "https://www.uilora.com";

const CardPreviewIframe = ({ previewUrl, title }: { previewUrl: string; title: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const iframeRef = useRef<HTMLDivElement>(null);

  const fullPreviewUrl = previewUrl.startsWith("http")
    ? previewUrl
    : `${LIBRARY_URL}${previewUrl.startsWith("/") ? previewUrl : `/${previewUrl}`}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "100px" }
    );
    if (iframeRef.current) observer.observe(iframeRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={iframeRef} className="relative w-full h-full bg-neutral-900 overflow-hidden">
      {isInView && (
        <>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 z-10">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/10 border-t-white/30" />
            </div>
          )}
          <iframe
            src={fullPreviewUrl}
            className="w-full h-full border-0 pointer-events-none"
            onLoad={() => setIsLoading(false)}
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
            scrolling="no"
            tabIndex={-1}
          />
        </>
      )}
    </div>
  );
};

const CardPreviewVideo = ({ videoUrl, title }: { videoUrl: string; title: string }) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "100px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full bg-neutral-900 overflow-hidden">
      {isInView && (
        <video src={videoUrl} className="w-full h-full object-cover" autoPlay loop muted playsInline />
      )}
    </div>
  );
};

interface ComponentCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  previewUrl: string;
  imageUrl?: string;
  videoUrl?: string;
  index: number;
  basePath?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export default function ComponentCard({
  id,
  name,
  description,
  category,
  tags,
  previewUrl,
  imageUrl,
  videoUrl,
  index,
  basePath = "/get-started/web/components",
  onClick,
}: ComponentCardProps) {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const componentRoute = basePath.includes(id) ? basePath : `${basePath}/${id}`;

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a") || (e.target as HTMLElement).closest("button")) return;
    router.push(componentRoute);
    if (onClick) onClick(e);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      className="group relative flex flex-col h-full bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-white/10 hover:bg-[#0c0c0c] hover:shadow-2xl hover:shadow-indigo-500/5 cursor-pointer"
    >
      {/* Card Hover Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Preview Area */}
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-900 border-b border-white/5">
        {videoUrl ? (
          <CardPreviewVideo videoUrl={videoUrl} title={name} />
        ) : imageUrl ? (
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <CardPreviewIframe previewUrl={previewUrl} title={name} />
        )}

        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />

        {/* Hover Overlay */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 1.05 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0 bg-black/60 backdrop-blur-2xl flex flex-col items-center justify-center p-6 z-40 pointer-events-none group-hover:pointer-events-auto"
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150 contrast-150" />
          <div className="space-y-3 w-full max-w-[150px]">
            <Link
              href={`${componentRoute}?full=true`}
              className="w-full py-2.5 rounded-xl bg-white text-black font-black text-[9px] uppercase tracking-[0.2em] transform transition-all duration-300 hover:scale-[1.05] active:scale-95 flex items-center justify-center gap-2 shadow-[0_15px_30px_rgba(255,255,255,0.1)]"
            >
              <Eye className="h-4 w-4" />
              Preview
            </Link>
            <Link
              href={`${componentRoute}?view=code`}
              className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-black text-[9px] uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 border border-white/5 hover:border-white/20"
            >
              <Copy className="h-4 w-4" />
              Get Code
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 relative z-10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.15em]">
            {category}
          </span>
        </div>

        <h3 className="text-[17px] font-display font-extrabold text-white mb-2 tracking-tight group-hover:text-indigo-500 transition-colors line-clamp-1">
          {name}
        </h3>

        <p className="text-[13px] text-neutral-400 leading-relaxed mb-4 line-clamp-2 transition-colors font-medium">
          {description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5">
          {tags.slice(0, 2).map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-white/5 text-neutral-400 border border-white/5">
              {tag}
            </span>
          ))}
          {tags.length > 2 && (
            <span className="text-[10px] font-medium text-neutral-600 self-center">
              +{tags.length - 2}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
