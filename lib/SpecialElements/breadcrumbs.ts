import { getCode } from "../getCode";
import { Component } from "../types";

export const breadcrumbsComponents: Component[] = [
    {
        id: "underlined-breadcrumb",
        name: "Underlined Breadcrumb",
        description: "Breadcrumb navigation with animated underline effects on hover. Features smooth underline transitions and active state indicators with glow effects.",
        category: "Special Elements",
        installType: "cli",
        tags: ["special-elements", "breadcrumb", "navigation", "underline", "animated", "hover"],
        previewUrl: "/SpecialElements/Breadcrumbs/UnderlinedBreadcrumb",
        code: {
            tsx: getCode("src/components/SpecialElements/Breadcrumbs/tsx/UnderlinedBreadcrumb.tsx"),
            jsx: getCode("src/components/SpecialElements/Breadcrumbs/jsx/UnderlinedBreadcrumb.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/SpecialElements/Breadcrumbs/UnderlinedBreadcrumb/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [],
        whenToUse: "Excellent for text-heavy documentation, deep blog hierarchies, and Next.js platforms that want a sophisticated 'Underline' navigation aesthetic. Use this breadcrumb to provide clear location cues with subtle interactive feedback.",
        bestPractices: "Maintain consistent spacing within your design system by keeping the breadcrumb paths aligned. Follow React best practices by pairing this with sharp, technical typography. Optimize for performance by using efficient Framer Motion line animations.",
        whyMatters: "Underline-based navigation communicates digital flow, clarity, and modern craft. This production-ready UI template helpsคุณ build an interface that feels responsive and organized, adding a unique 'Moving' signature to your page headers.",
        faqs: [
            { question: "How does the 'Underline' work?", answer: "The component uses localized x-offsets and layout-id transitions to move the active underline between items, creating a high-fidelity 'opening' effect." },
            { question: "Can I adjust the speed?", answer: "Absolutely, you can customize the Framer Motion transition properties to adjust both the damping and stiffness of the line animation." },
            { question: "Is it mobile responsive?", answer: "The path items and typographic scales adapt for mobile, ensuring the navigation remains impactful and structural on small screens." }
        ],
    },
    {
        id: "minimal-floating-breadcrumb",
        name: "Minimal Floating Breadcrumb",
        description: "Minimal floating breadcrumb with glassmorphism design. Features subtle hover glows, ambient blur effects, and compact uppercase typography.",
        category: "Special Elements",
        installType: "cli",
        tags: ["special-elements", "breadcrumb", "minimal", "floating", "glassmorphism", "blur"],
        previewUrl: "/SpecialElements/Breadcrumbs/MinimalFloatingBreadcrumb",
        code: {
            tsx: getCode("src/components/SpecialElements/Breadcrumbs/tsx/MinimalFloatingBreadcrumb.tsx"),
            jsx: getCode("src/components/SpecialElements/Breadcrumbs/jsx/MinimalFloatingBreadcrumb.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/SpecialElements/Breadcrumbs/MinimalFloatingBreadcrumb/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [],
        whenToUse: "Ideal for high-end digital agencies, creative portfolios, and Next.js applications that want a premium 'Floating Glass' aesthetic. Use this breadcrumb for an immersive experience with blur effects and light refraction cues.",
        bestPractices: "Maintain consistent spacing within your design system by keeping the path items organized. Follow React best practices by pairing this with soft, neutral colors. Optimize for performance by managed the amount of blur renders.",
        whyMatters: "Glass-based aesthetics communicate digital excellence, sophistication, and high-end craft. This production-ready UI template helpsคุณ build an interface that feels curated and premium, leaving a lasting visual impression on high-value clients.",
        faqs: [
            { question: "Is the 'Glass' effect real?", answer: "The component uses localized backdrop-filter blur and subtle inner glows (glass-shadows) to simulate light refraction through high-fidelity translucent surfaces." },
            { question: "Can I change the backdrop?", answer: "Absolutely, both the primary 'backgroundColor' (gradient or solid) and the persistent blur intensity are fully configurable to match your digital brand." },
            { question: "Is it mobile responsive?", answer: "The floating cards adapt their spans and layouts for mobile, ensuring the refractive narrative remains impactful and legible on small screens." }
        ],
    },
    {
        id: "icon-breadcrumb",
        name: "Icon Breadcrumb",
        description: "Icon-enhanced breadcrumb with icon badges for each step. Features icon containers with hover states and micro-glow effects on interaction.",
        category: "Special Elements",
        installType: "cli",
        tags: ["special-elements", "breadcrumb", "icon", "badge", "enhanced", "hover"],
        previewUrl: "/SpecialElements/Breadcrumbs/IconBreadcrumb",
        code: {
            tsx: getCode("src/components/SpecialElements/Breadcrumbs/tsx/IconBreadcrumb.tsx"),
            jsx: getCode("src/components/SpecialElements/Breadcrumbs/jsx/IconBreadcrumb.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/SpecialElements/Breadcrumbs/IconBreadcrumb/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [],
        whenToUse: "Perfect for complex dashboard systems, file browsers, and Next.js platforms that want a high-tech 'Icon-Enhanced' aesthetic. Use this breadcrumb to communicate hierarchical power and digital intelligence through micro-icons.",
        bestPractices: "Maintain scalable component architecture by pairing this with sharp, technical typography. Follow React best practices by using Lucide-react for the individual step icons. Optimize for performance by managed the icon renders.",
        whyMatters: "Icon-enhanced layouts communicate technical authority, sophistication, and digital craft. This production-ready UI template helpsคุณ build an interface that feels organized and high-end, adding a unique 'Corporate' signatures to your brand navigation.",
        faqs: [
            { question: "How do icons work?", answer: "The component is designed with localized Lucide-react support, allowedคุณ to easily assign unique icons to each path segment within the array." },
            { question: "Are colors dynamic?", answer: "Yes, both the primary 'iconColor' and background glows can be adjusted to create 'Industrial' or 'Cyber' agency effects." },
            { question: "Is it mobile responsive?", answer: "The icon spans and typographic scales adapt for mobile, ensuring the bold narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "boxed-segmented-breadcrumb",
        name: "Boxed Segmented Breadcrumb",
        description: "Boxed segmented breadcrumb with individual containers for each step. Features shine effects on hover, scale animations, and clean segmented layout.",
        category: "Special Elements",
        installType: "cli",
        tags: ["special-elements", "breadcrumb", "boxed", "segmented", "shine", "animation"],
        previewUrl: "/SpecialElements/Breadcrumbs/BoxedSegmentedBreadcrumb",
        code: {
            tsx: getCode("src/components/SpecialElements/Breadcrumbs/tsx/BoxedSegmentedBreadcrumb.tsx"),
            jsx: getCode("src/components/SpecialElements/Breadcrumbs/jsx/BoxedSegmentedBreadcrumb.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/SpecialElements/Breadcrumbs/BoxedSegmentedBreadcrumb/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [],
        whenToUse: "Ideal for edgy e-commerce sites, technical archives, and Next.js platforms that want a dramatic 'Segmented' aesthetic. Use this layout to communicate structural scale and digital craft through individual containers.",
        bestPractices: "Maintain consistent spacing within your design system by using it for focal navigation blocks. Follow React best practices by pairing it with bold, professional typography. Optimize for performance by managed the container renders.",
        whyMatters: "Segmented-based navigation communicates power, mystery, and structural honesty. This production-ready UI template helpsคุณ build an interface that feels authoritative and solid, breaking the 'standard' line navigation rules.",
        faqs: [
            { question: "Why 'Segmented'?", answer: "The component features individual boxes for each path step that 'reveal' on hover, simulating the raw structural honesty of architectural blueprint modules." },
            { question: "Can I adjust colors?", answer: "Yes, both the primary 'backgroundColor' and the specific border highlights are fully configurable allowedคุณ to create 'Industrialpop' effects." },
            { question: "Is it mobile responsive?", answer: "The segment rows adapt their spans dynamically for mobile, Ensuring the bold narrative remains impactful and structural on small screens." }
        ],
    },
];

