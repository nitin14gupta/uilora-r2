import { getCode } from "../getCode";
import { Component } from "../types";

export const badgesComponents: Component[] = [
    {
        id: "classic-badges",
        name: "Classic Badges",
        description: "Comprehensive badge system with 10+ variations including glassy status badges, dot indicators, micro glow badges, pastel chips, tech tags, icon pills, blur tags, contrast labels, neon edges, and glossy gradients. Designed for high-density luxury interfaces.",
        category: "Special Elements",
        installType: "cli",
        tags: ["special-elements", "badges", "classic", "status", "tags", "chips", "labels", "indicators"],
        previewUrl: "/SpecialElements/Badges/ClassicBadges",
        code: {
            tsx: getCode("src/components/SpecialElements/Badges/tsx/ClassicBadges.tsx"),
            jsx: getCode("src/components/SpecialElements/Badges/jsx/ClassicBadges.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/SpecialElements/Badges/ClassicBadges/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [],
        whenToUse: "Excellent for e-commerce platforms, SaaS dashboards, and Next.js applications that need a versatile 'Badge' system. Use this collection to display status, categories, or micro-information with high-fidelity visual cues.",
        bestPractices: "Maintain consistent badge heights within your design system by adhering to the predefined size scales. Follow React best practices by pairing these with high-contrast font weights. Optimize for performance by using efficient CSS blur renders.",
        whyMatters: "Standardized badge systems communicate digital excellence, organization, and information hierarchy. This production-ready UI template helpsคุณ build an interface that feels curated and premium, adding a level of technical depth to your tags.",
        faqs: [
            { question: "Are colors dynamic?", answer: "Yes, both the primary 'backgroundColor' and the specific border glows are fully configurable to match your project's specific brand intensity." },
            { question: "Can I use internal icons?", answer: "The components are designed with localized Lucide-react support, allowing you to easily add or swap icons within the micro-pill modules." },
            { question: "Is it mobile responsive?", answer: "The badge scales and typographic weights adapt for mobile, ensuring the micro-information remains legible and impactful on small screens." }
        ],
    },
];

