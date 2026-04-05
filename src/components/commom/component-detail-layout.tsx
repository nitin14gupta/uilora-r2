"use client";

import { useState, useEffect, useRef } from "react";
import {
  Eye,
  Code2,
  Copy,
  Check,
  Maximize2,
  ChevronDown,
  ChevronUp,
  FolderOpen,
  Heart,
  Play,
  Sparkles,
  User,
  Info,
  CheckCircle2,
  Zap,
  HelpCircle,
  X,
  ArrowRight,
  ArrowLeft,
  LogIn as LoginIcon,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { buildPrompt } from "@/src/lib/promptBuilder";
import { promptPresets } from "@/src/lib/promptPresets";
import {
  getFavorites,
  toggleFavorite as toggleFavoriteUtil,
} from "@/src/lib/favorites";
import { useToast } from "@/src/context/ToastContext";
import { API_CONFIG } from "@/src/api/config";
import { useComponents } from "@/src/hooks/use-components";
import { trackCopyAction } from "@/src/lib/analytics";
import { useAuth } from "@/src/context/AuthContext";
import { useSidebar } from "@/src/context/sidebar-context";

interface ComponentDetailLayoutProps {
  title: string;
  description: string;
  category: string;
  tags: string[];
  previewUrl: string;
  code: {
    tsx: string;
    jsx?: string;
  };
  usageCode?: {
    tsx: string;
    jsx?: string;
  };
  dependencies?: string[];
  props?: Array<{
    name: string;
    type: string;
    default: string;
    description: string;
    required?: boolean;
  }>;
  hasApp?: boolean;
  appPreviewUrl?: string;
  inspiredBy?: {
    name: string;
    url?: string;
  };
  contributedBy?: {
    name: string;
    url?: string;
  };
  installType?: "manual" | "cli";
  whenToUse?: string;
  bestPractices?: string;
  whyMatters?: string;
  faqs?: { question: string; answer: string; }[];
}

export default function ComponentDetailLayout({
  title,
  description,
  category,
  tags,
  previewUrl,
  code,
  usageCode,
  dependencies,
  props,
  hasApp = false,
  appPreviewUrl,
  inspiredBy,
  contributedBy,
  installType = "manual",
  whenToUse,
  bestPractices,
  whyMatters,
  faqs,
}: ComponentDetailLayoutProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [cliCommandCopied, setCliCommandCopied] = useState(false);
  const [codeType, setCodeType] = useState<"tsx" | "jsx">("tsx");
  const [usageCodeType, setUsageCodeType] = useState<"tsx" | "jsx">("tsx");
  const [descExpanded, setDescExpanded] = useState(false);
  const [packageManager, setPackageManager] = useState<
    "npm" | "pnpm" | "yarn" | "bun"
  >("npm");
  const [installCopied, setInstallCopied] = useState(false);
  const [usageCopied, setUsageCopied] = useState(false);
  const [componentCodeCopied, setComponentCodeCopied] = useState(false);
  const [usageCodeExpanded, setUsageCodeExpanded] = useState(false);
  const [componentCodeExpanded, setComponentCodeExpanded] = useState(false);
  const [showUsageCodeTypeDropdown, setShowUsageCodeTypeDropdown] =
    useState(false);
  const [showComponentCodeTypeDropdown, setShowComponentCodeTypeDropdown] =
    useState(false);
  const [showPromptDropdown, setShowPromptDropdown] = useState(false);
  const [promptCopied, setPromptCopied] = useState<string | null>(null);
  const [utilsCopied, setUtilsCopied] = useState(false);
  const [previewType, setPreviewType] = useState<"web" | "app">(
    hasApp ? "web" : "web"
  );

  const { isFullPreview, setFullPreview } = useSidebar();
  const [isFavorite, setIsFavorite] = useState(false);
  const { showSuccess, showInfo } = useToast();
  const { isAuthenticated } = useAuth();
  const usageDropdownRef = useRef<HTMLDivElement>(null);
  const componentDropdownRef = useRef<HTMLDivElement>(null);
  const promptDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [scale, setScale] = useState(1);
  const iframeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!iframeContainerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const isMobileOrTablet = typeof window !== 'undefined' && window.innerWidth < 1024;

        if (isFullPreview || isMobileOrTablet) {
          setScale(1);
          continue;
        }

        const containerWidth = entry.contentRect.width;
        if (containerWidth === 0) continue;

        const targetWidth = 1440; // Desktop reference width
        if (containerWidth < targetWidth) {
          setScale(containerWidth / targetWidth);
        } else {
          setScale(1);
        }
      }
    });

    resizeObserver.observe(iframeContainerRef.current);
    return () => resizeObserver.disconnect();
  }, [isFullPreview, activeTab]);

  // Switch to code tab or full preview if params are present
  useEffect(() => {
    const view = searchParams.get("view");
    const full = searchParams.get("full");

    if (view === "code") {
      setActiveTab("code");
    }

    if (full === "true") {
      setFullPreview(true);
    }
  }, [searchParams]);

  // Extract component ID from URL pathname
  const getComponentId = (): string => {
    const pathSegments = pathname.split("/").filter(Boolean);
    return pathSegments[pathSegments.length - 1] || "";
  };

  const cliCommand = `npx uilora@latest add ${getComponentId()}`;

  const handleCliCommandCopy = async () => {
    await navigator.clipboard.writeText(cliCommand);
    setCliCommandCopied(true);
    trackCopyAction("cli", getComponentId());
    showSuccess("Copied CLI command");
    setTimeout(() => setCliCommandCopied(false), 2000);
  };

  // Check if component is favorite on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const componentId = getComponentId();
      setIsFavorite(getFavorites().includes(componentId));
    }
  }, [pathname]);

  const toggleFavorite = () => {
    const componentId = getComponentId();
    toggleFavoriteUtil(componentId);
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);

    if (newFavoriteStatus) {
      showSuccess("Added to favorites");
    } else {
      showInfo("Removed from favorites");
    }
  };

  const { getNextComponent, getPreviousComponent, getRelatedComponents, getComponentUrl } = useComponents();
  const currentId = getComponentId();
  const nextComponent = getNextComponent(currentId);
  const previousComponent = getPreviousComponent(currentId);
  const relatedComponents = getRelatedComponents(currentId, category);

  const ComponentPagination = () => {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 w-full pt-10 border-t border-white/5">
        {previousComponent ? (
          <Link
            href={getComponentUrl(previousComponent)}
            className="group flex items-center gap-4 w-full sm:w-auto px-2 py-2 -ml-2 rounded-xl transition-colors hover:bg-white/[0.02]"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <ArrowLeft className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
            </div>
            <div className="flex flex-col items-start pt-0.5">
              <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-widest mb-0.5">Previous</span>
              <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">
                {previousComponent.name}
              </span>
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block flex-1" />
        )}

        {nextComponent ? (
          <Link
            href={getComponentUrl(nextComponent)}
            className="group flex items-center gap-4 w-full sm:w-auto justify-end px-2 py-2 -mr-2 rounded-xl transition-colors hover:bg-white/[0.02] text-right"
          >
            <div className="flex flex-col items-end pt-0.5">
              <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-widest mb-0.5">Next</span>
              <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">
                {nextComponent.name}
              </span>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
            </div>
          </Link>
        ) : (
          <div className="hidden sm:block flex-1" />
        )}
      </div>
    );
  };

  const RelatedComponentsGrid = () => {
    if (relatedComponents.length === 0) return null;
    return (
      <div>
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <h3 className="text-lg font-bold text-white">Related Components</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {relatedComponents.map((comp: any) => (
            <Link
              key={comp.id}
              href={getComponentUrl(comp)}
              className="group flex flex-col p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300"
            >
              <h4 className="text-base font-semibold text-neutral-200 group-hover:text-white mb-1 transition-colors">
                {comp.name}
              </h4>
              <p className="text-xs text-neutral-500 line-clamp-2 mb-3">
                {comp.description}
              </p>
              <div className="mt-auto flex items-center text-xs font-medium text-indigo-400 opacity-60 group-hover:opacity-100 transition-opacity">
                View Component <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        usageDropdownRef.current &&
        !usageDropdownRef.current.contains(event.target as Node)
      ) {
        setShowUsageCodeTypeDropdown(false);
      }
      if (
        componentDropdownRef.current &&
        !componentDropdownRef.current.contains(event.target as Node)
      ) {
        setShowComponentCodeTypeDropdown(false);
      }
      if (
        promptDropdownRef.current &&
        !promptDropdownRef.current.contains(event.target as Node)
      ) {
        setShowPromptDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Get current code based on selected type
  const getCurrentUsageCode = () => {
    if (!usageCode) return "";
    return usageCodeType === "tsx" ? usageCode.tsx : usageCode.jsx || usageCode.tsx;
  };

  const getCurrentComponentCode = () => {
    return codeType === "tsx" ? code.tsx : code.jsx || code.tsx;
  };

  // Build prompts
  const getPrompts = () => {
    const usage = getCurrentUsageCode();
    const component = getCurrentComponentCode();
    const lang = codeType;

    return {
      v0: buildPrompt({
        intro: promptPresets.v0.intro,
        usageCode: usage,
        componentCode: component,
        outro: promptPresets.v0.outro,
        language: lang,
      }),
      cursor: buildPrompt({
        intro: promptPresets.cursor.intro,
        usageCode: usage,
        componentCode: component,
        outro: promptPresets.cursor.outro,
        language: lang,
      }),
      lovable: buildPrompt({
        intro: promptPresets.lovable.intro,
        usageCode: usage,
        componentCode: component,
        outro: promptPresets.lovable.outro,
        language: lang,
      }),
    };
  };

  const handlePromptCopy = async (platform: "v0" | "cursor" | "lovable") => {
    const prompts = getPrompts();
    const promptText = prompts[platform];
    await navigator.clipboard.writeText(promptText);
    setPromptCopied(platform);
    trackCopyAction("prompt", getComponentId(), { platform });
    showSuccess("Copied prompt to clipboard");
    setShowPromptDropdown(false);
    setTimeout(() => setPromptCopied(null), 2000);
  };

  const getPreviewUrl = () => {
    const libraryUrl = API_CONFIG.LIBRARY_URL;
    if (previewUrl.startsWith("https")) {
      return previewUrl;
    }
    return `${libraryUrl}${previewUrl}`;
  };

  const getInstallCommand = () => {
    if (!dependencies || dependencies.length === 0) return "";
    const deps = dependencies.join(" ");

    switch (packageManager) {
      case "yarn":
        return `yarn add ${deps}`;
      case "pnpm":
        return `pnpm install ${deps}`;
      case "bun":
        return `bun install ${deps}`;
      case "npm":
      default:
        return `npm install ${deps}`;
    }
  };

  const handleInstallCopy = async () => {
    if (!dependencies || dependencies.length === 0) return;
    const installCmd = getInstallCommand();
    await navigator.clipboard.writeText(installCmd);
    setInstallCopied(true);
    trackCopyAction("install", getComponentId(), { packageManager });
    showSuccess("Copied install command");
    setTimeout(() => setInstallCopied(false), 2000);
  };

  const handleUsageCopy = async () => {
    if (!usageCode) return;
    const codeToCopy =
      usageCodeType === "tsx" ? usageCode.tsx : usageCode.jsx || usageCode.tsx;
    await navigator.clipboard.writeText(codeToCopy);
    setUsageCopied(true);
    trackCopyAction("usage", getComponentId(), { type: usageCodeType });
    showSuccess("Copied usage code");
    setTimeout(() => setUsageCopied(false), 2000);
  };

  const handleComponentCodeCopy = async () => {
    const codeToCopy = codeType === "tsx" ? code.tsx : code.jsx || code.tsx;
    await navigator.clipboard.writeText(codeToCopy);
    setComponentCodeCopied(true);
    trackCopyAction("component", getComponentId(), { type: codeType });
    showSuccess("Copied component code");
    setTimeout(() => setComponentCodeCopied(false), 2000);
  };

  const handleUsageCodeTypeChange = async (newType: "tsx" | "jsx") => {
    setUsageCodeType(newType);
    setShowUsageCodeTypeDropdown(false);
    if (usageCode) {
      const codeToCopy =
        newType === "tsx" ? usageCode.tsx : usageCode.jsx || usageCode.tsx;
      await navigator.clipboard.writeText(codeToCopy);
      setUsageCopied(true);
      trackCopyAction("usage_type_change", getComponentId(), { newType });
      setTimeout(() => setUsageCopied(false), 2000);
    }
  };

  const handleComponentCodeTypeChange = async (newType: "tsx" | "jsx") => {
    setCodeType(newType);
    setShowComponentCodeTypeDropdown(false);
    const codeToCopy = newType === "tsx" ? code.tsx : code.jsx || code.tsx;
    await navigator.clipboard.writeText(codeToCopy);
    setComponentCodeCopied(true);
    trackCopyAction("component_type_change", getComponentId(), { newType });
    setTimeout(() => setComponentCodeCopied(false), 2000);
    showSuccess("Copied component code");
  };

  const truncateCode = (
    code: string,
    maxLines: number = 20
  ): { code: string; isLong: boolean } => {
    const lines = code.split("\n");
    const isLong = lines.length > maxLines;
    const truncated = isLong ? lines.slice(0, maxLines).join("\n") : code;
    return { code: truncated, isLong };
  };

  const getUsageCode = () => {
    if (!usageCode) return { code: "", isLong: false };
    const fullCode =
      usageCodeType === "tsx" ? usageCode.tsx : usageCode.jsx || usageCode.tsx;
    const truncated = truncateCode(fullCode, 20);
    if (usageCodeExpanded) {
      return { code: fullCode, isLong: truncated.isLong };
    }
    return truncated;
  };

  const getComponentCode = () => {
    const fullCode = codeType === "tsx" ? code.tsx : code.jsx || code.tsx;
    const truncated = truncateCode(fullCode, 20);
    if (componentCodeExpanded) {
      return { code: fullCode, isLong: truncated.isLong };
    }
    return truncated;
  };

  return (
    <div
      className={`space-y-2 ${isFullPreview ? "px-0" : "px-4 sm:px-5 md:px-6"}`}
    >
      {/* Header Section */}
      <AnimatePresence mode="wait">
        {!isFullPreview && (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 pt-0"
          >
            <div className="flex-1 min-w-0">
              <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
                {title}
              </h1>
              <div
                className="cursor-pointer group/desc relative"
                onClick={() => setDescExpanded(!descExpanded)}
              >
                <p
                  className={`text-sm sm:text-base text-neutral-400 max-w-3xl leading-relaxed transition-all duration-300 ${descExpanded ? "" : "line-clamp-2"
                    }`}
                >
                  {description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 shrink-0">
              {/* Tab Switcher */}
              <div className="flex items-center p-1 bg-white/5 backdrop-blur-xl rounded-xl">
                <button
                  onClick={() => setActiveTab("preview")}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-semibold transition-all duration-300 ${activeTab === "preview"
                    ? "text-white"
                    : "text-neutral-500 hover:text-neutral-300"
                    }`}
                >
                  <Eye className="h-4 w-4" />
                  Preview
                  {activeTab === "preview" && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-white/10 rounded-lg -z-10 shadow-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("code")}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-semibold transition-all duration-300 ${activeTab === "code"
                    ? "text-white"
                    : "text-neutral-500 hover:text-neutral-300"
                    }`}
                >
                  <Code2 className="h-4 w-4" />
                  Code
                  {activeTab === "code" && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-white/10 rounded-lg -z-10 shadow-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              </div>

              <button
                onClick={toggleFavorite}
                className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300 ${isFavorite
                  ? "bg-pink-500/10 border-pink-500/20"
                  : "bg-white/5 border-white/10 hover:bg-white/10"} border`}
              >
                <Heart
                  className={`h-5 w-5 transition-colors ${isFavorite
                    ? "fill-pink-500 text-pink-500"
                    : "text-neutral-400"
                    }`}
                />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Area */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {activeTab === "preview" ? (
            <motion.div
              key="preview-tab"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className={isFullPreview ? "space-y-0" : "space-y-8"}
            >
              {/* Preview Window */}
              <motion.div
                layout
                className={`relative bg-[#080808] ${isFullPreview ? "rounded-none border-0" : "rounded-2xl border border-white/5 shadow-3xl"} overflow-hidden`}
                transition={{ type: "spring", bounce: 0, duration: 0.6 }}
              >
                <div className={`flex items-center justify-between px-4 ${isFullPreview ? "py-2" : "py-3"} bg-white/[0.02] border-b border-white/5`}>
                  <div className="flex space-x-2 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                    <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                  </div>

                  <div className="flex items-center gap-3">
                    {hasApp && (
                      <div className="flex items-center gap-1 bg-black rounded-lg p-1 border border-white/5">
                        <button
                          onClick={() => setPreviewType("web")}
                          className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all ${previewType === "web" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"}`}
                        >
                          WEB
                        </button>
                        <button
                          onClick={() => setPreviewType("app")}
                          className={`px-3 py-1 rounded-md text-[11px] font-bold transition-all ${previewType === "app" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"}`}
                        >
                          APP
                        </button>
                      </div>
                    )}

                    <div className="flex items-center gap-2">
                      {usageCode && (
                        <div className="relative" ref={promptDropdownRef}>
                          <button
                            onClick={() => {
                              if (isAuthenticated) {
                                setShowPromptDropdown(!showPromptDropdown);
                              } else {
                                showInfo("Please login to copy prompts");
                              }
                            }}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-white transition-all font-bold text-[11px] shadow-lg ${isAuthenticated ? "bg-[#5227FF] hover:bg-[#5227FF]/80 shadow-[#5227FF]/20" : "bg-neutral-800 text-neutral-500 cursor-not-allowed"}`}
                          >
                            COPY PROMPT
                            <ChevronDown className="h-3 w-3" />
                          </button>
                          <AnimatePresence>
                            {showPromptDropdown && (
                              <motion.div
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 5 }}
                                className="absolute right-0 top-full mt-2 rounded-xl bg-neutral-900 border border-white/10 p-1 shadow-2xl z-20 min-w-[150px]"
                              >
                                {(["lovable", "cursor", "v0"] as const).map((p) => (
                                  <button
                                    key={p}
                                    onClick={() => handlePromptCopy(p)}
                                    className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg w-full transition-colors"
                                  >
                                    <Image src={`/${p}.svg`} alt={p} width={14} height={14} />
                                    <span className="capitalize">{p}</span>
                                    {promptCopied === p && <Check className="h-3 w-3 text-emerald-400 ml-auto" />}
                                  </button>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                      <button
                        onClick={() => setFullPreview(!isFullPreview)}
                        className={`p-2 rounded-lg transition-all duration-300 ${isFullPreview
                          ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20'
                          : 'bg-white/5 hover:bg-white/10 text-neutral-400'}`}
                      >
                        {isFullPreview ? <X className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className={`relative w-full ${isFullPreview ? 'h-[calc(100vh-45px)]' : 'h-[400px] sm:h-[600px] lg:h-[750px]'} bg-black transition-all duration-300`}>
                  <div ref={iframeContainerRef} className="w-full h-full overflow-hidden relative">
                    <motion.div
                      animate={{
                        width: (isFullPreview || scale === 1) ? '100%' : '1440px',
                        height: (isFullPreview || scale === 1) ? '100%' : `${100 / scale}%`,
                        scale: scale,
                      }}
                      initial={false}
                      transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                      style={{
                        transformOrigin: 'top left',
                      }}
                      className="absolute inset-0"
                    >
                      {previewType === "web" ? (
                        <iframe
                          src={getPreviewUrl()}
                          className="w-full h-full border-0"
                          sandbox="allow-scripts allow-same-origin"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          {appPreviewUrl ? (
                            <iframe src={appPreviewUrl} className="w-full h-full border-0" />
                          ) : (
                            <p className="text-neutral-500">App preview not available</p>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {!isFullPreview && (
                <>
                  {/* Props Table */}
                  {props && props.length > 0 && (
                    <div className="rounded-2xl border-2 border-white/10 bg-black/50 overflow-hidden">
                      <div className="p-6 border-b border-white/10">
                        <h2 className="text-2xl font-bold text-white">Props</h2>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left">
                          <thead>
                            <tr className="bg-white/5 text-xs font-semibold text-neutral-300 uppercase tracking-wider">
                              <th className="px-6 py-4">Property</th>
                              <th className="px-6 py-4">Type</th>
                              <th className="px-6 py-4">Default</th>
                              <th className="px-6 py-4">Description</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/10 text-sm">
                            {props.map((prop, idx) => (
                              <tr key={idx} className="hover:bg-white/5">
                                <td className="px-6 py-4">
                                  <span className="font-mono text-indigo-400">{prop.name}</span>
                                  {prop.required && <span className="ml-2 text-red-400 text-[10px]">REQUIRED</span>}
                                </td>
                                <td className="px-6 py-4 font-mono text-neutral-200">{prop.type}</td>
                                <td className="px-6 py-4 font-mono text-neutral-400">{prop.default}</td>
                                <td className="px-6 py-4 text-neutral-300">{prop.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Credits Section */}
                  {(inspiredBy || contributedBy) && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                      className="flex flex-wrap gap-4 mt-6"
                    >
                      {inspiredBy && (
                        <div className="flex items-center gap-2 text-sm text-neutral-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                          <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                          <span>Inspired by</span>
                          {inspiredBy.url ? (
                            <a
                              href={inspiredBy.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-indigo-400 transition-colors font-medium hover:underline decoration-indigo-400/30 underline-offset-4"
                            >
                              @{inspiredBy.name}
                            </a>
                          ) : (
                            <span className="text-white font-medium">
                              @{inspiredBy.name}
                            </span>
                          )}
                        </div>
                      )}
                      {contributedBy && (
                        <div className="flex items-center gap-2 text-sm text-neutral-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                          <User className="w-3.5 h-3.5 text-indigo-400" />
                          <span>Contributed by</span>
                          {contributedBy.url ? (
                            <a
                              href={contributedBy.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white hover:text-indigo-400 transition-colors font-medium hover:underline decoration-indigo-400/30 underline-offset-4"
                            >
                              @{contributedBy.name}
                            </a>
                          ) : (
                            <span className="text-white font-medium">
                              @{contributedBy.name}
                            </span>
                          )}
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* Documentation Sections */}
                  <div className="grid gap-8">
                    {whenToUse && (
                      <section className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Info className="w-4 h-4 text-indigo-400" />
                          <h3 className="text-xl font-bold text-white">When to Use</h3>
                        </div>
                        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-neutral-400 leading-relaxed">
                          {whenToUse}
                        </div>
                      </section>
                    )}
                    {bestPractices && (
                      <section className="space-y-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <h3 className="text-xl font-bold text-white">Best Practices</h3>
                        </div>
                        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-neutral-400 leading-relaxed">
                          {bestPractices}
                        </div>
                      </section>
                    )}
                    {whyMatters && (
                      <section className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-amber-400" />
                          <h3 className="text-xl font-bold text-white">Why This Component Matters</h3>
                        </div>
                        <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-neutral-400 leading-relaxed">
                          {whyMatters}
                        </div>
                      </section>
                    )}
                    {faqs && faqs.length > 0 && (
                      <section className="space-y-6">
                        <div className="flex items-center gap-2">
                          <HelpCircle className="w-4 h-4 text-pink-400" />
                          <h3 className="text-xl font-bold text-white">Frequently Asked Questions</h3>
                        </div>
                        <div className="grid gap-4">
                          {faqs.map((faq, index) => (
                            <div key={index} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] transition-colors">
                              <h4 className="text-white font-semibold mb-2 flex items-center gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-[10px] text-neutral-400 font-bold">Q</span>
                                {faq.question}
                              </h4>
                              <p className="text-neutral-400 text-sm pl-9 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          ))}
                        </div>
                      </section>
                    )}
                  </div>

                  {/* Pagination & Related */}
                  <ComponentPagination />
                  <RelatedComponentsGrid />
                </>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-8"
            >
              {/* Add with CLI Section - only when installType === "cli" */}
              {installType === "cli" && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-white tracking-tight">Add with CLI</h2>
                  <p className="text-sm text-neutral-400">
                    Install this component and its dependencies with one command. Dependencies will be installed automatically.
                  </p>
                  <div className="relative bg-white/[0.02] rounded-2xl border border-white/5 overflow-hidden group/terminal">
                    <div className="flex items-center justify-between px-5 py-2.5 border-b border-white/5 bg-white/[0.01]">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      </div>
                      <span className="text-[10px] font-mono text-neutral-500">TERMINAL</span>
                    </div>
                    <div className="px-5 py-4 flex items-center justify-between">
                      <code className="text-[13px] font-mono text-indigo-300">
                        <span className="opacity-50">$</span> {cliCommand}
                      </code>
                      <button
                        onClick={handleCliCommandCopy}
                        className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {cliCommandCopied ? (
                          <Check className="h-4 w-4 text-emerald-400" />
                        ) : (
                          <Copy className="h-4 w-4 text-neutral-500" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Manual install: Install Section */}
              {(installType === "cli" || dependencies?.length) ? (
                <div className="space-y-4">
                  {installType === "cli" && (
                    <h2 className="text-xl font-bold text-white tracking-tight">Manual install</h2>
                  )}
                  {dependencies && dependencies.length > 0 && (
                    <>
                      {installType !== "cli" && (
                        <h2 className="text-xl font-bold text-white tracking-tight">Install</h2>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {(["npm", "pnpm", "yarn", "bun"] as const).map((pm) => (
                          <button
                            key={pm}
                            onClick={() => setPackageManager(pm)}
                            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all border ${packageManager === pm
                              ? "bg-white/10 border-white/20 text-white"
                              : "bg-white/5 border-white/5 text-neutral-500 hover:text-neutral-300 hover:border-white/10"
                              }`}
                          >
                            {pm}
                          </button>
                        ))}
                      </div>
                      <div className="relative bg-white/[0.02] rounded-2xl border border-white/5 overflow-hidden group/terminal">
                        <div className="flex items-center justify-between px-5 py-2.5 border-b border-white/5 bg-white/[0.01]">
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                            <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                          </div>
                          <span className="text-[10px] font-mono text-neutral-500">TERMINAL</span>
                        </div>
                        <div className="px-5 py-4 flex items-center justify-between">
                          <code className="text-[13px] font-mono text-indigo-300">
                            <span className="opacity-50">$</span> {packageManager} {packageManager === "yarn" ? "add" : "install"} {dependencies.join(" ")}
                          </code>
                          <button
                            onClick={handleInstallCopy}
                            className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                          >
                            {installCopied ? (
                              <Check className="h-4 w-4 text-emerald-400" />
                            ) : (
                              <Copy className="h-4 w-4 text-neutral-500" />
                            )}
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : null}



              {/* Usage Section */}
              {usageCode && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white tracking-tight">Usage</h2>
                    {usageCode.jsx && (
                      <div className="flex items-center p-1 bg-white/5 rounded-lg border border-white/5">
                        <button
                          onClick={() => handleUsageCodeTypeChange("tsx")}
                          className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all ${usageCodeType === "tsx" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"}`}
                        >
                          TS
                        </button>
                        <button
                          onClick={() => handleUsageCodeTypeChange("jsx")}
                          className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all ${usageCodeType === "jsx" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"}`}
                        >
                          JS
                        </button>
                      </div>
                    )}
                  </div>
                  <div className="relative bg-white/[0.02] rounded-2xl border border-white/5 overflow-hidden group/code">
                    <div className="flex items-center justify-between px-5 py-2.5 border-b border-white/5 bg-white/[0.01]">
                      <span className="text-[10px] font-mono text-neutral-500">usage.{usageCodeType}</span>
                      <button
                        onClick={() => {
                          if (isAuthenticated) {
                            handleUsageCopy();
                          } else {
                            showInfo("Please login to copy code");
                          }
                        }}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-[11px] font-semibold ${isAuthenticated ? "bg-white/5 hover:bg-white/10 text-white" : "bg-white/5 text-neutral-500 cursor-not-allowed"}`}
                      >
                        {usageCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                        {usageCopied ? "Copied" : "Copy"}
                      </button>
                    </div>
                    <div className={`relative overflow-x-auto ${!usageCodeExpanded && getUsageCode().isLong ? "max-h-[400px]" : ""} ${!isAuthenticated ? "min-h-[350px]" : ""}`}>
                      <div className={!isAuthenticated ? "blur-[2px] select-none pointer-events-none" : ""}>
                        <SyntaxHighlighter
                          language={usageCodeType === "tsx" ? "tsx" : "jsx"}
                          style={vscDarkPlus}
                          customStyle={{
                            margin: 0,
                            padding: "1.5rem",
                            fontSize: "0.8rem",
                            lineHeight: "1.6",
                            background: "transparent",
                          }}
                        >
                          {getUsageCode().code}
                        </SyntaxHighlighter>
                      </div>

                      {!isAuthenticated && (
                        <div className="absolute inset-0 z-20 backdrop-blur-sm bg-black/10 flex flex-col items-center justify-center p-4 text-center rounded-2xl overflow-hidden">
                          <div className="relative bg-[#111111]/95 border border-white/10 p-5 sm:p-8 rounded-3xl sm:rounded-[2.5rem] shadow-2xl max-w-[280px] sm:max-w-sm overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#5227FF]/10 blur-[80px] -z-10" />
                            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#5227FF]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-5 border border-[#5227FF]/20">
                              <LoginIcon className="w-5 h-5 sm:w-7 sm:h-7 text-[#5227FF]" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Login to Access</h3>
                            <p className="text-[11px] sm:text-sm text-neutral-400 mb-4 sm:mb-8 leading-relaxed line-clamp-2 sm:line-clamp-none">
                              Join Uilora for free to unlock full access to premium components.
                            </p>
                            <Link
                              href="/login"
                              className="block w-full py-2.5 sm:py-4 bg-[#5227FF] hover:bg-[#5227FF]/90 text-white text-xs sm:text-base font-bold rounded-xl sm:rounded-2xl transition-all shadow-xl shadow-[#5227FF]/20 active:scale-95"
                            >
                              Get Started
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                    {!usageCodeExpanded && getUsageCode().isLong && (
                      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black via-black/80 to-transparent flex items-end justify-center pb-6">
                        <button
                          onClick={() => setUsageCodeExpanded(true)}
                          className="px-6 py-2 rounded-xl bg-white text-black text-[12px] font-bold hover:bg-neutral-200 transition-all shadow-xl"
                        >
                          Show Full Snippet
                        </button>
                      </div>
                    )}
                    {usageCodeExpanded && getUsageCode().isLong && (
                      <div className="flex justify-center py-4 border-t border-white/5">
                        <button
                          onClick={() => setUsageCodeExpanded(false)}
                          className="px-4 py-2 text-neutral-500 hover:text-white transition-all text-xs font-semibold"
                        >
                          Show Less
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Utils Section */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                  Utils File
                </h3>
                <p className="text-zinc-400 text-sm mb-4">
                  Create a{" "}
                  <code className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200 text-xs font-mono">
                    lib/utils.ts
                  </code>{" "}
                  file.
                </p>
                <div className="relative group max-w-full">
                  <div className="absolute -inset-0.5 rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-500 bg-white" />
                  <div className="relative bg-[#0c0c0e] rounded-lg border border-white/10 overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-2 bg-white/3 border-b border-white/5">
                      <span className="text-xs text-zinc-500">utils.ts</span>
                    </div>
                    <div className="p-4 overflow-x-auto">
                      <pre className="text-sm font-mono text-zinc-300 leading-relaxed">
                        <code>{`import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}`}</code>
                      </pre>
                    </div>
                    <div className="px-4 py-2 bg-white/2 border-t border-white/5 flex justify-end">
                      <button
                        onClick={async () => {
                          const utilsCode = `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}`;
                          await navigator.clipboard.writeText(utilsCode);
                          setUtilsCopied(true);
                          setTimeout(() => setUtilsCopied(false), 2000);
                          showSuccess("Copied to clipboard");
                        }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-300 transition-colors"
                      >
                        {utilsCopied ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-emerald-400" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copy Code</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Component Code Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-white tracking-tight">Component Code</h2>
                  {code.jsx && (
                    <div className="flex items-center p-1 bg-white/5 rounded-lg border border-white/5">
                      <button
                        onClick={() => handleComponentCodeTypeChange("tsx")}
                        className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all ${codeType === "tsx" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"}`}
                      >
                        TS
                      </button>
                      <button
                        onClick={() => handleComponentCodeTypeChange("jsx")}
                        className={`px-3 py-1 rounded-md text-[10px] font-bold transition-all ${codeType === "jsx" ? "bg-white/10 text-white" : "text-neutral-500 hover:text-white"}`}
                      >
                        JS
                      </button>
                    </div>
                  )}
                </div>
                <div className="relative bg-white/[0.02] rounded-2xl border border-white/5 overflow-hidden group/code">
                  <div className="flex items-center justify-between px-5 py-2.5 border-b border-white/5 bg-white/[0.01]">
                    <span className="text-[10px] font-mono text-neutral-500">component.{codeType}</span>
                    <button
                      onClick={() => {
                        if (isAuthenticated) {
                          handleComponentCodeCopy();
                        } else {
                          showInfo("Please login to copy code");
                        }
                      }}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all text-[11px] font-semibold ${isAuthenticated ? "bg-white/5 hover:bg-white/10 text-white" : "bg-white/5 text-neutral-500 cursor-not-allowed"}`}
                    >
                      {componentCodeCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                      {componentCodeCopied ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className={`relative overflow-x-auto ${!componentCodeExpanded && getComponentCode().isLong ? "max-h-[500px]" : ""} ${!isAuthenticated ? "min-h-[450px]" : ""}`}>
                    <div className={!isAuthenticated ? "blur-[6px] select-none pointer-events-none" : ""}>
                      <SyntaxHighlighter
                        language={codeType === "tsx" ? "tsx" : "jsx"}
                        style={vscDarkPlus}
                        customStyle={{
                          margin: 0,
                          padding: "1.5rem",
                          fontSize: "0.8rem",
                          lineHeight: "1.6",
                          background: "transparent",
                        }}
                      >
                        {getComponentCode().code}
                      </SyntaxHighlighter>
                    </div>

                    {!isAuthenticated && (
                      <div className="absolute inset-0 z-20 backdrop-blur-sm bg-black/10 flex flex-col items-center justify-center p-4 text-center rounded-2xl overflow-hidden">
                        <div className="relative bg-[#111111]/95 border border-white/10 p-5 sm:p-8 rounded-3xl sm:rounded-[2.5rem] shadow-2xl max-w-[280px] sm:max-w-sm overflow-hidden">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#5227FF]/10 blur-[80px] -z-10" />
                          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#5227FF]/10 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-5 border border-[#5227FF]/20">
                            <LoginIcon className="w-5 h-5 sm:w-7 sm:h-7 text-[#5227FF]" />
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Login to Access</h3>
                          <p className="text-[11px] sm:text-sm text-neutral-400 mb-4 sm:mb-8 leading-relaxed line-clamp-2 sm:line-clamp-none">
                            Join Uilora for free to unlock full access to premium components.
                          </p>
                          <Link
                            href="/login"
                            className="block w-full py-2.5 sm:py-4 bg-[#5227FF] hover:bg-[#5227FF]/90 text-white text-xs sm:text-base font-bold rounded-xl sm:rounded-2xl transition-all shadow-xl shadow-[#5227FF]/20 active:scale-95"
                          >
                            Get Started
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                  {!componentCodeExpanded && getComponentCode().isLong && (
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black via-black/80 to-transparent flex items-end justify-center pb-6">
                      <button
                        onClick={() => setComponentCodeExpanded(true)}
                        className="px-6 py-2 rounded-xl bg-white text-black text-[12px] font-bold hover:bg-neutral-200 transition-all shadow-xl"
                      >
                        Show Full Component
                      </button>
                    </div>
                  )}
                  {componentCodeExpanded && getComponentCode().isLong && (
                    <div className="flex justify-center py-4 border-t border-white/5">
                      <button
                        onClick={() => setComponentCodeExpanded(false)}
                        className="px-4 py-2 text-neutral-500 hover:text-white transition-all text-xs font-semibold"
                      >
                        Show Less
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
