import { getCode } from "../getCode";
import { Component } from "../types";

export const avatarsComponents: Component[] = [
    {
        id: "classic-avatar",
        name: "Classic Avatar",
        description: "Comprehensive avatar collection with multiple styles including cinematic, minimal, status indicators, initials, grouped stacks, and hover effects. Showcase of 10+ avatar variations.",
        category: "Special Elements",
        installType: "cli",
        tags: ["special-elements", "avatar", "classic", "variants", "status", "grouped", "showcase"],
        previewUrl: "/SpecialElements/Avatars/ClassicAvatar",
        code: {
            tsx: getCode("src/components/SpecialElements/Avatars/tsx/ClassicAvatar.tsx"),
            jsx: getCode("src/components/SpecialElements/Avatars/jsx/ClassicAvatar.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/SpecialElements/Avatars/ClassicAvatar/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [],
        whenToUse: "Excellent for CRM dashboards, social media feeds, and Next.js platforms that need a versatile 'Classic' avatar system. Use this collection to display user profiles with various interactive cues like status indicators and group stacks.",
        bestPractices: "Maintain consistent avatar proportions within your design system by using predefined size scales. Follow React best practices by pairing these with high-contrast status colors. Optimize for performance by using optimized image delivery.",
        whyMatters: "Standardized avatar systems communicate digital reliability, community, and personal identity. This production-ready UI template helpsคุณ build an interface that feels human and organized, adding a layer of social trust to your brand.",
        faqs: [
            { question: "Are status colors customizable?", answer: "Yes, both the status ring colors (Online/Away/Offline) and the underlying border widths are fully configurable to match your brand's specific high-intensity palette." },
            { question: "How does the 'Initials' fallback work?", answer: "The component includes localized logic to automatically generate initials from the username if the primary image URL fails to load, ensuring 100% UI uptime." },
            { question: "Is it mobile responsive?", answer: "The avatar scales and grouped offsets adapt for mobile, ensuring the individual identities remain impactful and legible on small screens." }
        ],
    },
    {
        id: "stacked-hover-card",
        name: "Stacked Hover Card",
        description: "Stacked avatar group with hover cards showing user information. Features glassmorphism cards that appear on hover with smooth animations and user details.",
        category: "Special Elements",
        installType: "cli",
        tags: ["special-elements", "avatar", "stacked", "hover", "card", "group", "glassmorphism"],
        previewUrl: "/SpecialElements/Avatars/StackedHoverCard",
        code: {
            tsx: getCode("src/components/SpecialElements/Avatars/tsx/StackedHoverCard.tsx"),
            jsx: getCode("src/components/SpecialElements/Avatars/jsx/StackedHoverCard.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/SpecialElements/Avatars/StackedHoverCard/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [],
        whenToUse: "Ideal for team pages, collaboration tools, and Next.js applications that want a premium 'Hover Card' aesthetic. Use this stacked group to showcase multiple users while providing rich contextual details on demand.",
        bestPractices: "Maintain consistent spacing within your design system by keeping the stack offsets uniform. Follow React best practices by using Framer Motion for the card reveal transitions. Optimize for performance by managed the blur renders.",
        whyMatters: "Interactive hover cards communicate digital excellence, depth, and information transparency. This production-ready UI template helpsคุณ build an interface that feels sophisticated and alive, adding a unique signature to your team showcase.",
        faqs: [
            { question: "Is the 'Glass' effect real?", answer: "The component uses localized backdrop-filter blur and subtle inner glows (glass-shadows) to simulate light refraction through high-fidelity translucent surfaces." },
            { question: "Can I adjust the card delay?", answer: "Absolutely, you can customize the Framer Motion transition properties to adjust how quickly the info cards appear and disappear during interactions." },
            { question: "Is it mobile responsive?", answer: "The stack layout and transition triggers adapt for mobile, ensuring the informative narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "spotlight-group",
        name: "Spotlight Group",
        description: "Large group of avatars with spotlight effect on hover. Features dimming overlay, scale animations, and detailed user cards with role information.",
        category: "Special Elements",
        installType: "cli",
        tags: ["special-elements", "avatar", "spotlight", "group", "hover", "dimming", "animation"],
        previewUrl: "/SpecialElements/Avatars/SpotlightGroup",
        code: {
            tsx: getCode("src/components/SpecialElements/Avatars/tsx/SpotlightGroup.tsx"),
            jsx: getCode("src/components/SpecialElements/Avatars/jsx/SpotlightGroup.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/SpecialElements/Avatars/SpotlightGroup/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [],
        whenToUse: "Perfect for member directories, high-end agency backgrounds, and Next.js platforms that want a dramatic 'Spotlight' aesthetic. Use this group to create an immersive exploration experience for large sets of users.",
        bestPractices: "Follow React best practices by pairing this with bold imagery. Maintain consistent spacing within your design system by keeping the grid items centered. Optimize for performance by managed the amount of dimming renders.",
        whyMatters: "Spotlight-based aesthetics communicate power, focus, and digital craft. This production-ready UI template helpsคุณ build an interface that feels curated and premium, leaving a lasting visual impression on high-value clients.",
        faqs: [
            { question: "Why 'Spotlight'?", answer: "The component features localized dimming backgrounds that 'isolate' the hovered item, creating a high-fidelity 'physical' focus on the individual user detail." },
            { question: "Can I adjust dimming?", answer: "Yes, both the primary 'overlayOpacity' and background colors can be adjusted to create 'Industrial' or 'Cyber' agency effects." },
            { question: "Is it mobile responsive?", answer: "The grid spans and scaling behaviors adapt for mobile, ensuring the bold narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "slide-out-stack",
        name: "Slide Out Stack",
        description: "Vertical stack of avatars with sliding name tags on hover. Features smooth slide animations and compact vertical layout with role information.",
        category: "Special Elements",
        installType: "cli",
        tags: ["special-elements", "avatar", "slide", "stack", "vertical", "hover", "animation"],
        previewUrl: "/SpecialElements/Avatars/SlideOutStack",
        code: {
            tsx: getCode("src/components/SpecialElements/Avatars/tsx/SlideOutStack.tsx"),
            jsx: getCode("src/components/SpecialElements/Avatars/jsx/SlideOutStack.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/SpecialElements/Avatars/SlideOutStack/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [],
        whenToUse: "Excellent for side-navigation menus, compact team lists, and Next.js applications that want an organic 'Slide Out' aesthetic. Use this vertical stack to save space while maintaining easy access to user names.",
        bestPractices: "Maintain scalable component architecture by pairing this with sharp, technical typography. Follow React best practices by using Framer Motion for the label reveal transitions. Optimize for performance by managed the layout-id.",
        whyMatters: "Slide-out animations communicate digital flow, efficiency, and modern craft. This production-ready UI template helpsคุณ build an interface that feels responsive and organized, adding a unique 'Moving' signature to your brand.",
        faqs: [
            { question: "How does 'Slide' work?", answer: "The component uses localized x-offsets and spring physics to 'reveal' the name tags as users interaction with the stack, creating a high-fidelity 'opening' effect." },
            { question: "Are colors dynamic?", answer: "Absolutely, you can adjust both the primary `backgroundColor` and specific tag colors to match your brand's specific high-intensity palette." },
            { question: "Is it mobile responsive?", answer: "The vertical spans and typographic scales adapt for mobile, ensuring the 'Slide' narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "horizontal-lift-stack",
        name: "Horizontal Lift Stack",
        description: "Horizontal avatar stack with lift animation and glassy info cards. Features 3D lift effect, blur on inactive items, and detailed hover cards.",
        category: "Special Elements",
        installType: "cli",
        tags: ["special-elements", "avatar", "horizontal", "lift", "3d", "glassy", "blur"],
        previewUrl: "/SpecialElements/Avatars/HorizontalLiftStack",
        code: {
            tsx: getCode("src/components/SpecialElements/Avatars/tsx/HorizontalLiftStack.tsx"),
            jsx: getCode("src/components/SpecialElements/Avatars/jsx/HorizontalLiftStack.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/SpecialElements/Avatars/HorizontalLiftStack/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [],
        whenToUse: "Ideal for creative studios, award-winning portfolios, and Next.js platforms that want a meaningful 'Lift' aesthetic. Use this horizontal stack to communicate digital excellence through 3D modules and light refraction cues.",
        bestPractices: "Maintain consistent spacing within your design system by using it for focal narratives. Follow React best practices by pairing this with bold, professional typography. Optimize for performance by using efficient image textures.",
        whyMatters: "Perspective-based aesthetics communicate technical reliability, clarity, and timeless craft. This production-ready UI template helpsคุณ build an interface that feels organized and professional, reflecting a brand identity rooted in design purity.",
        faqs: [
            { question: "How does 'Lift' work?", answer: "The component uses localized mouse coordinates to tilt the primary image card, creating a high-fidelity 'physical' 3D lift effect into the heart of the user narrative." },
            { question: "Can I adjust labels?", answer: "Absolutely, you can adjust both the original `username` and specific `role` labels to match your project's specific terminology." },
            { question: "Is it mobile responsive?", answer: "The 3D scale and typographic scales adapt for mobile, ensuring the objective clarity remains consistent on high-density mobile screens." }
        ],
    },
];

