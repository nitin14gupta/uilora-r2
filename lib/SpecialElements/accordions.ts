import { getCode } from "../getCode";
import { Component } from "../types";


export const accordionComponents: Component[] = [
    {
        id: "uilora-liquid",
        name: "Liquid Stretch",
        description: "Smooth liquid motion accordion with natural spring animations.",
        category: "Special Elements",
        installType: "cli",
        tags: ["accordion", "liquid", "motion", "spring"],
        previewUrl: "/SpecialElements/Accordions/Liquid",
        code: {
            tsx: getCode("src/components/SpecialElements/Accordions/tsx/AccordionLiquid.tsx"),
            jsx: getCode("src/components/SpecialElements/Accordions/jsx/AccordionLiquid.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Accordions/Liquid/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "items", type: "AccordionItem[]", default: "[{id: '1', label: 'Module 1', content: '...'}, ...]", description: "Array of accordion items with id, label, and optional content." },
            { name: "backgroundColor", type: "string", default: "transparent", description: "Background color of the component (hex, rgb, or hsl)." },
            { name: "containerBgColor", type: "string", default: "#ffffff", description: "Background color of the container (hex, rgb, or hsl)." },
            { name: "containerShadowColor", type: "string", default: "rgba(0,0,0,0.1)", description: "Shadow color of the container (hex, rgb, or hsl)." },
            { name: "itemBgColor", type: "string", default: "#f4f4f5", description: "Background color of accordion items (hex, rgb, or hsl)." },
            { name: "itemTextColor", type: "string", default: "#18181b", description: "Text color of item labels (hex, rgb, or hsl)." },
            { name: "contentTextColor", type: "string", default: "#71717a", description: "Text color of item content (hex, rgb, or hsl)." },
            { name: "iconColor", type: "string", default: "#18181b", description: "Color of the chevron icon (hex, rgb, or hsl)." },
            { name: "defaultActive", type: "number | null", default: "0", description: "Index of the initially active item (null for none)." },
            { name: "borderRadius", type: "string", default: "1rem", description: "Border radius of the container (CSS value)." },
        ],
        whenToUse: "Excellent for high-end digital agencies, creative portfolios, and Next.js applications that want a soft, organic 'Liquid' aesthetic. Use this accordion to present FAQ sections or feature lists with a sense of fluid weight and tactile depth.",
        bestPractices: "Maintain consistent spacing within your design system by keeping the accordion items organized and legible. Follow React best practices by pairing this with soft, neutral colors. Optimize for performance by using efficient Framer Motion layout transitions.",
        whyMatters: "Liquid animations create a sense of digital excellence, fluidity, and modern craft. This production-ready UI template helpsคุณ build an interface that feels alive and premium, adding a unique architectural signature to your brand interaction.",
        faqs: [
            { question: "How does the 'Liquid' feel work?", answer: "The component uses localized spring physics and staggered layout transitions to simulate the soft, fluid movement of liquid surfaces during expansion and contraction." },
            { question: "Can I adjust the expansion speed?", answer: "Absolutely, you can customize the Framer Motion transition properties to adjust both the damping and stiffness of the 'liquid' stretch effect." },
            { question: "Is it mobile responsive?", answer: "The accordion items adapt their widths and padding for mobile, ensuring the fluid narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "split",
        name: "Split Screen",
        description: "Split screen accordion with expanding partitions.",
        category: "Special Elements",
        installType: "cli",
        tags: ["accordion", "split", "screen", "layout"],
        previewUrl: "/SpecialElements/Accordions/Split",
        code: {
            tsx: getCode("src/components/SpecialElements/Accordions/tsx/AccordionSplit.tsx"),
            jsx: getCode("src/components/SpecialElements/Accordions/jsx/AccordionSplit.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/SpecialElements/Accordions/Split/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "items", type: "AccordionItem[]", default: "[{id: '1', label: '01', title: '...', description: '...'}, ...]", description: "Array of accordion items with id, label, optional title, description, and content." },
            { name: "backgroundColor", type: "string", default: "transparent", description: "Background color of the component (hex, rgb, or hsl)." },
            { name: "containerBorderColor", type: "string", default: "#e4e4e7", description: "Border color of the container (hex, rgb, or hsl)." },
            { name: "activeItemBgColor", type: "string", default: "#f4f4f5", description: "Background color of the active item (hex, rgb, or hsl)." },
            { name: "inactiveItemBgColor", type: "string", default: "#ffffff", description: "Background color of inactive items (hex, rgb, or hsl)." },
            { name: "itemHoverBgColor", type: "string", default: "#fafafa", description: "Background color of items on hover (hex, rgb, or hsl)." },
            { name: "itemBorderColor", type: "string", default: "#e4e4e7", description: "Border color between items (hex, rgb, or hsl)." },
            { name: "labelColor", type: "string", default: "#18181b", description: "Color of item labels (hex, rgb, or hsl)." },
            { name: "titleColor", type: "string", default: "#18181b", description: "Color of item titles (hex, rgb, or hsl)." },
            { name: "descriptionColor", type: "string", default: "#71717a", description: "Color of item descriptions (hex, rgb, or hsl)." },
            { name: "defaultActive", type: "number | null", default: "null", description: "Index of the initially active item (null for none)." },
            { name: "height", type: "string", default: "20rem", description: "Height of the accordion container (CSS value)." },
            { name: "borderRadius", type: "string", default: "0.75rem", description: "Border radius of the container (CSS value)." },
        ],
        whenToUse: "Ideal for edgy fashion editorials, technical archives, and Next.js platforms that want a dramatic 'Split Screen' aesthetic. Use this layout to communicate structural scale and digital craft through large, expanding partitions.",
        bestPractices: "Maintain consistent spacing within your design system by using it for focal content blocks. Follow React best practices by pairing it with bold, professional typography. Optimize for performance by using efficient layout-id transitions.",
        whyMatters: "Split-screen layouts communicate power, mystery, and structural honesty. This production-ready UI template helpsคุณ build an interface that feels authoritative and solid, breaking the 'standard' vertical list rules.",
        faqs: [
            { question: "Why 'Split Screen'?", answer: "The component features large horizontal partitions that 'push' each other aside, simulating the raw structural honesty of architectural blueprint expansion." },
            { question: "Can I adjust colors?", answer: "Yes, both the primary 'activeItemBgColor' and background colors are fully configurable allowedคุณ to create 'Industrial' or 'Cyber' agency effects." },
            { question: "Is it mobile responsive?", answer: "The partitions and typographic scales adapt dynamically for mobile, Ensuring the bold narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "audio",
        name: "Audio Reactive",
        description: "Audio-reactive accordion with waveform visualization.",
        category: "Special Elements",
        installType: "cli",
        tags: ["accordion", "audio", "reactive", "waveform"],
        previewUrl: "/SpecialElements/Accordions/Audio",
        code: {
            tsx: getCode("src/components/SpecialElements/Accordions/tsx/AccordionAudio.tsx"),
            jsx: getCode("src/components/SpecialElements/Accordions/jsx/AccordionAudio.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/SpecialElements/Accordions/Audio/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "items", type: "AccordionItem[]", default: "[{id: '1', label: 'Track 01'}, ...]", description: "Array of accordion items with id, label, and optional content." },
            { name: "backgroundColor", type: "string", default: "transparent", description: "Background color of the component (hex, rgb, or hsl)." },
            { name: "itemBgColor", type: "string", default: "#18181b", description: "Background color of accordion items (hex, rgb, or hsl)." },
            { name: "itemHoverBgColor", type: "string", default: "#27272a", description: "Background color of items on hover (hex, rgb, or hsl)." },
            { name: "itemTextColor", type: "string", default: "#ffffff", description: "Text color of item labels (hex, rgb, or hsl)." },
            { name: "activeBarColor", type: "string", default: "#4ade80", description: "Color of active waveform bars (hex, rgb, or hsl)." },
            { name: "inactiveBarColor", type: "string", default: "#52525b", description: "Color of inactive waveform bars (hex, rgb, or hsl)." },
            { name: "progressBarBgColor", type: "string", default: "#3f3f46", description: "Background color of progress bar (hex, rgb, or hsl)." },
            { name: "progressBarFillColor", type: "string", default: "#4ade80", description: "Fill color of progress bar (hex, rgb, or hsl)." },
            { name: "iconColor", type: "string", default: "#ffffff", description: "Color of play/pause icons (hex, rgb, or hsl)." },
            { name: "defaultActive", type: "number | null", default: "null", description: "Index of the initially active item (null for none)." },
        ],
        whenToUse: "Excellent for music platforms, podcast archives, and Next.js applications that want a high-tech 'Audio-Reactive' aesthetic. Use this accordion to present tracklists or audio snippets with a high-fidelity visual context.",
        bestPractices: "Maintain scalable component architecture by pairing this with sharp, technical typography. Follow React best practices by using Framer Motion for the waveform reveal transitions. Optimize for performance by managed the bar renders.",
        whyMatters: "Audio-reactive aesthetics communicate technical authority, sophistication, and digital craft. This production-ready UI template helpsคุณ build an interface that feels organized and high-end, adding a unique 'Studio' signatures to your brand.",
        faqs: [
            { question: "Is the waveform real?", answer: "The component uses localized SVG paths and spring physics to simulate organic 'Waveforms' that visually 'react' to the project's digital intensity." },
            { question: "Can I adjust the colors?", answer: "Absolutely, you can customize both the primary `activeBarColor` and background colors to match your brand's specific high-intensity palette." },
            { question: "Is it mobile responsive?", answer: "The waveform spans and typographic scales adapt for mobile, ensuring the objective clarity remains consistent on high-density mobile screens." }
        ],
    },
];

