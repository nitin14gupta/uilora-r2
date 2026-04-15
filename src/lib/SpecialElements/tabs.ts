import { getCode } from "../getCode";
import { Component } from "../types";

export const tabComponents: Component[] = [
    {
        id: "glassa",
        name: "Glass Floating",
        description: "Glassmorphism tabs with floating effect and animated background images.",
        category: "Special Elements",
        installType: "cli",
        tags: ["tabs", "glass", "floating", "glassmorphism"],
        previewUrl: "/SpecialElements/Tabs/Glass",
        code: {
            tsx: getCode("src/components/SpecialElements/Tabs/tsx/TabsGlass.tsx"),
            jsx: getCode("src/components/SpecialElements/Tabs/jsx/TabsGlass.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Tabs/Glass/page.tsx")
        },
        dependencies: ["framer-motion"],
        props: [
            { name: "tabs", type: "TabItem[]", default: "[{id: '1', label: 'Option 1'}, ...]", description: "Array of tab items with id and label." },
            { name: "backgroundImages", type: "string[]", default: "[url1, url2, url3]", description: "Background image URLs that transition on tab change." },
            { name: "defaultActive", type: "number", default: "0", description: "Index of the initially active tab." },
            { name: "containerHeight", type: "string", default: "16rem", description: "Height of the container." },
            { name: "containerMaxWidth", type: "string", default: "28rem", description: "Maximum width of the container." },
            { name: "borderRadius", type: "string", default: "1rem", description: "Border radius of the container." },
            { name: "buttonTextColor", type: "string", default: "#ffffff", description: "Text color of tab buttons." },
            { name: "activeIndicatorBgColor", type: "string", default: "rgba(255,255,255,0.3)", description: "Background of the active indicator." },
        ],
        whenToUse: "Ideal for high-end digital agencies, creative portfolios, and applications that want a premium glassmorphism aesthetic with immersive background transitions.",
        bestPractices: "Use high-quality images that share a visual language. Keep tab count to 3-5 for optimal UX. Ensure text contrast remains readable over all background images.",
        whyMatters: "Glass-based aesthetics communicate sophistication and high-end craft. The background image transitions create an immersive experience that elevates the entire interface.",
        faqs: [
            { question: "How does the glass effect work?", answer: "The component uses backdrop-filter blur on tab buttons to simulate light refraction through translucent surfaces against the shifting background images." },
            { question: "Can I use custom images?", answer: "Yes — pass any array of image URLs to the backgroundImages prop. Images are cross-faded with a subtle scale transition on tab change." },
            { question: "Is it mobile responsive?", answer: "Yes, the tabs adapt their layout for smaller screens while maintaining the glassmorphism aesthetic." }
        ],
    },
    {
        id: "image",
        name: "Image Backed",
        description: "Tabs with background images that change on selection with smooth transitions.",
        category: "Special Elements",
        installType: "cli",
        tags: ["tabs", "image", "background", "animated"],
        previewUrl: "/SpecialElements/Tabs/Image",
        code: {
            tsx: getCode("src/components/SpecialElements/Tabs/tsx/TabsImage.tsx"),
            jsx: getCode("src/components/SpecialElements/Tabs/jsx/TabsImage.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Tabs/Image/page.tsx")
        },
        dependencies: ["framer-motion"],
        props: [
            { name: "tabs", type: "TabItem[]", default: "[{id: '1', label: 'Scene 1', image?: url}, ...]", description: "Array of tab items with id, label, and optional per-tab image." },
            { name: "images", type: "string[]", default: "[url1, url2, ...]", description: "Fallback array of image URLs if tabs don't have images." },
            { name: "defaultActive", type: "number", default: "0", description: "Index of the initially active tab." },
            { name: "containerBgColor", type: "string", default: "#18181b", description: "Background color of the container." },
            { name: "containerHeight", type: "string", default: "10rem", description: "Height of the container." },
            { name: "containerMaxWidth", type: "string", default: "32rem", description: "Maximum width of the container." },
            { name: "imageOpacity", type: "number", default: "0.5", description: "Opacity of background images (0–1)." },
            { name: "activeButtonBgColor", type: "string", default: "#ffffff", description: "Background color of the active tab button." },
            { name: "activeButtonTextColor", type: "string", default: "#000000", description: "Text color of the active tab button." },
        ],
        whenToUse: "Perfect for media-heavy platforms, portfolio showcases, or any interface where each tab corresponds to a distinct visual scene.",
        bestPractices: "Use images that are visually distinct per tab so the transition is meaningful. Keep imageOpacity balanced so tab labels remain readable.",
        whyMatters: "Image-backed tabs create immediate visual hierarchy and communicate section identity at a glance — far more memorable than text-only navigation.",
        faqs: [
            { question: "Can each tab have its own image?", answer: "Yes — add an 'image' property to each tab item in the tabs array, or use the fallback images array." },
            { question: "How smooth is the transition?", answer: "Images cross-fade using Framer Motion's AnimatePresence with a subtle scale, creating a cinematic feel." },
            { question: "Is it accessible?", answer: "Tab buttons include proper focus states and color contrast. Consider adding aria-label to each tab for screen readers." }
        ],
    },
    {
        id: "swipe",
        name: "Swipe (Mobile)",
        description: "Mobile-optimized swipeable tabs with spring physics and drag gestures.",
        category: "Special Elements",
        installType: "cli",
        tags: ["tabs", "swipe", "mobile", "gesture"],
        previewUrl: "/SpecialElements/Tabs/Swipe",
        code: {
            tsx: getCode("src/components/SpecialElements/Tabs/tsx/TabsSwipe.tsx"),
            jsx: getCode("src/components/SpecialElements/Tabs/jsx/TabsSwipe.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Tabs/Swipe/page.tsx")
        },
        dependencies: ["framer-motion"],
        props: [
            { name: "tabs", type: "TabItem[]", default: "[{id: '1', label: 'View 1', content: '...'}, ...]", description: "Array of tab items with id, label, and optional content node." },
            { name: "defaultActive", type: "number", default: "0", description: "Index of the initially active tab." },
            { name: "containerBgColor", type: "string", default: "#ffffff", description: "Background color of the container." },
            { name: "containerMaxWidth", type: "string", default: "28rem", description: "Maximum width of the container." },
            { name: "activeTabTextColor", type: "string", default: "#2563eb", description: "Text color and underline color of the active tab." },
            { name: "contentHeight", type: "string", default: "10rem", description: "Height of the content area." },
            { name: "springStiffness", type: "number", default: "260", description: "Spring animation stiffness for swipe transitions." },
            { name: "springDamping", type: "number", default: "28", description: "Spring animation damping for swipe transitions." },
        ],
        whenToUse: "Excellent for mobile-first applications and touch interfaces. Use when content should feel like a native swipeable panel, not just a click-to-reveal tab.",
        bestPractices: "Keep content height consistent across tabs to avoid layout jumps. Consider adding swipe hint UI on first load for discoverability.",
        whyMatters: "Swipe-based navigation mirrors native mobile patterns users already know, reducing cognitive friction and making the interface feel immediately intuitive.",
        faqs: [
            { question: "How does the swipe work?", answer: "Framer Motion's drag constraint detects horizontal swipe velocity and direction, then animates the content panel using spring physics." },
            { question: "Can I disable swipe and use click-only?", answer: "Remove the drag props from the inner container — the tab buttons will still work for click-based navigation." },
            { question: "Is it accessible?", answer: "Tab buttons support keyboard navigation. For screen readers, ensure content divs have appropriate aria-live regions." }
        ],
    },
    {
        id: "apple-dock",
        name: "Apple Dock",
        description: "macOS-style magnification dock with spring physics — icons scale based on cursor proximity.",
        category: "Special Elements",
        installType: "cli",
        tags: ["tabs", "dock", "apple", "spring", "magnification"],
        previewUrl: "/SpecialElements/Tabs/AppleDock",
        code: {
            tsx: getCode("src/components/SpecialElements/Tabs/tsx/TabsAppleDock.tsx"),
            jsx: getCode("src/components/SpecialElements/Tabs/jsx/TabsAppleDock.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Tabs/AppleDock/page.tsx")
        },
        dependencies: ["framer-motion"],
        props: [
            { name: "items", type: "DockItem[]", default: "DEFAULT_ITEMS", description: "Array of dock items with id, label, emoji, bg gradient, and content node." },
            { name: "defaultActive", type: "string", default: "items[0].id", description: "ID of the initially active item." },
            { name: "accentColor", type: "string", default: "#a78bfa", description: "Color of the active dot indicator under icons." },
            { name: "dockBg", type: "string", default: "rgba(255,255,255,0.14)", description: "Background of the dock shelf pill." },
        ],
        whenToUse: "Use when you want an iconic, delightful navigation experience that showcases premium interaction design. Perfect for app dashboards, portfolio showcases, or creative tools.",
        bestPractices: "Keep the dock to 4-6 items for best magnification effect. Ensure each item has a distinct emoji and gradient for visual differentiation.",
        whyMatters: "The macOS dock magnification is one of the most recognizable and delightful UI patterns ever created. Bringing it to the web signals exceptional attention to interaction craft.",
        faqs: [
            { question: "How does the magnification work?", answer: "Each icon uses useMotionValue to track cursor X position, then useTransform maps the distance from cursor to icon center onto a size scale, smoothed with useSpring." },
            { question: "Why is DockIcon a module-level component?", answer: "Hooks (useSpring, useTransform) must be called consistently — a nested component would remount on each parent render, breaking hook rules. Module-level ensures stability." },
            { question: "Can I add more items?", answer: "Yes — add objects to the items array with id, label, emoji, bg (CSS gradient string), and a content React node." }
        ],
    },
    {
        id: "floating-nav",
        name: "Floating Nav",
        description: "Floating pill navigation with a neon pip indicator above the active icon.",
        category: "Special Elements",
        installType: "cli",
        tags: ["tabs", "floating", "nav", "pill", "mobile"],
        previewUrl: "/SpecialElements/Tabs/FloatingNav",
        code: {
            tsx: getCode("src/components/SpecialElements/Tabs/tsx/TabsFloatingNav.tsx"),
            jsx: getCode("src/components/SpecialElements/Tabs/jsx/TabsFloatingNav.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Tabs/FloatingNav/page.tsx")
        },
        dependencies: ["framer-motion"],
        props: [
            { name: "items", type: "NavItem[]", default: "DEFAULT_ITEMS", description: "Array of nav items with id, label, icon SVG, and content node." },
            { name: "defaultActive", type: "string", default: "items[0].id", description: "ID of the initially active item." },
            { name: "accentColor", type: "string", default: "#a78bfa", description: "Color used for the active pip, icon, and label." },
            { name: "pillBg", type: "string", default: "rgba(18,18,24,0.95)", description: "Background color of the floating pill." },
        ],
        whenToUse: "Ideal for mobile-first apps, dashboards, and interfaces where bottom navigation is preferred. The floating aesthetic adds premium polish to any dark-themed layout.",
        bestPractices: "Use 4-5 nav items for optimal pill width. Ensure icons are visually distinct at 20px. The pip indicator works best with a bright accent color.",
        whyMatters: "Floating bottom navigation is the dominant pattern in modern mobile apps. This implementation adds the pip indicator detail that signals design sophistication.",
        faqs: [
            { question: "How does the pip indicator work?", answer: "The pip is an absolutely-positioned motion.div above each icon, animated to scale(0)/opacity(0) when inactive and scale(1)/opacity(1) when active via spring physics." },
            { question: "Can I use custom icons?", answer: "Yes — replace the icon property in each item with any React node, including SVGs, Lucide icons, or image components." },
            { question: "Is it responsive?", answer: "The pill stretches to fill the available width up to maxWidth: 400px. Icon and label sizes are fixed for consistent appearance." }
        ],
    },
    {
        id: "neumorphic",
        name: "Neumorphic",
        description: "Soft UI neumorphic circle buttons with inset shadow activation state.",
        category: "Special Elements",
        installType: "cli",
        tags: ["tabs", "neumorphic", "soft-ui", "light"],
        previewUrl: "/SpecialElements/Tabs/Neumorphic",
        code: {
            tsx: getCode("src/components/SpecialElements/Tabs/tsx/TabsNeumorphic.tsx"),
            jsx: getCode("src/components/SpecialElements/Tabs/jsx/TabsNeumorphic.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Tabs/Neumorphic/page.tsx")
        },
        dependencies: ["framer-motion"],
        props: [
            { name: "items", type: "NeuItem[]", default: "DEFAULT_ITEMS", description: "Array of items with id, label, icon SVG, and content node." },
            { name: "defaultActive", type: "string", default: "items[0].id", description: "ID of the initially active item." },
            { name: "accentColor", type: "string", default: "#3b82f6", description: "Color for active icons, labels, and the progress pill." },
            { name: "bgColor", type: "string", default: "#e0e5ec", description: "Base neumorphic background color." },
        ],
        whenToUse: "Use for light-themed dashboards, health/wellness apps, or any interface where a tactile, physical-button feel is desirable. Pairs well with minimal content layouts.",
        bestPractices: "Neumorphism requires a specific mid-tone background (e.g. #e0e5ec) — too light or too dark and the shadows disappear. Keep to 4 items for best balance.",
        whyMatters: "Neumorphism creates the illusion of physical depth on flat screens. The inset shadow on active state provides unmistakable tactile feedback without JavaScript animations.",
        faqs: [
            { question: "Why does the effect require a specific background color?", answer: "Neumorphic shadows use a darker and lighter version of the same hue. The shadows only read correctly when the element background matches the container background." },
            { question: "Can I change the accent color?", answer: "Yes — the accentColor prop controls icon color, label color, and the animated progress pills beneath the buttons." },
            { question: "Is it accessible?", answer: "Focus states are preserved. Consider increasing color contrast for accessibility — neumorphism can have low contrast ratios by design." }
        ],
    },
];

