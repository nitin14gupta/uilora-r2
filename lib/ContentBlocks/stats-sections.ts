import { getCode } from "../getCode";
import { Component } from "../types";

export const statsSectionComponents: Component[] = [
    {
        id: "stats-luxury",
        name: "Luxury Gold",
        description: "Luxury gold stats section with serif typography and gradients.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["stats", "luxury", "gold", "serif"],
        previewUrl: "/ContentBlocks/StatsSections/StatsLuxury",
        code: {
            tsx: getCode("src/components/ContentBlocks/StatsSections/tsx/StatsLuxury.tsx"),
            jsx: getCode("src/components/ContentBlocks/StatsSections/jsx/StatsLuxury.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/StatsSections/StatsLuxury/page.tsx")
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "badgeText", type: "string", default: "Performance Metrics", description: "Badge text displayed above title." },
            { name: "title", type: "string", default: "Our Legacy in Numbers", description: "Section title text." },
            { name: "stats", type: "Array<{value: number, suffix?: string, label: string}>", default: "[]", description: "Array of stat items with value, optional suffix, and label." },
            { name: "backgroundColor", type: "string", default: "#0a0a0a", description: "Background color (hex, rgb, or hsl)." },
            { name: "dividerColor", type: "string", default: "#D4AF37", description: "Divider line color." },
            { name: "badgeColor", type: "string", default: "#D4AF37", description: "Badge text color." },
            { name: "titleColor", type: "string", default: "#ffffff", description: "Title text color." },
            { name: "dividerLineColor", type: "string", default: "rgba(255,255,255,0.1)", description: "Vertical divider line color." },
            { name: "valueGradientFrom", type: "string", default: "#D4AF37", description: "Value gradient start color." },
            { name: "valueGradientTo", type: "string", default: "#8a7020", description: "Value gradient end color." },
            { name: "labelColor", type: "string", default: "rgba(163, 163, 163, 1)", description: "Label text color." },
            { name: "labelHoverColor", type: "string", default: "#ffffff", description: "Label text color on hover." },
        ],
        whenToUse: "Ideal for luxury brands, high-end real estate, and Next.js applications that want a sophisticated 'Legacy' aesthetic. Use this React component for a stats section that highlights premium performance metrics with Serif typography and gold gradients.",
        bestPractices: "Maintain consistent spacing within your design system by using it on deep navy or black backgrounds. Follow React best practices by pairing it with elegant, light-weight Serif fonts. Optimize for performance by using efficient linear-gradients for the numerical highlights.",
        whyMatters: "Luxury aesthetics communicate exclusivity and history. This production-ready UI component helpsคุณ build an interface that feels established and high-value, improving the perceived quality of your brand's growth.",
        faqs: [
            { question: "Is the Serif font required?", answer: "While designed for Serif, you can swap it via your CSS theme for a more modern Sans-Serif look while keeping the gold accents." },
            { question: "Can I change the divider color?", answer: "Yes, the `dividerColor` prop allows you to set the highlight color of the top divider to match your brand's primary color." },
            { question: "Does it support long labels?", answer: "The layout is optimized for 2-4 word labels like 'Global Transactions' or 'Trusted Partners' to maintain its editorial feel." }
        ],
    },
    {
        id: "stats-brutal",
        name: "Neo-Brutalism",
        description: "Bold neo-brutalist stats section with graphic design.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["stats", "brutalist", "bold", "graphic"],
        previewUrl: "/ContentBlocks/StatsSections/StatsBrutal",
        code: {
            tsx: getCode("src/components/ContentBlocks/StatsSections/tsx/StatsBrutal.tsx"),
            jsx: getCode("src/components/ContentBlocks/StatsSections/jsx/StatsBrutal.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/StatsSections/StatsBrutal/page.tsx")
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "title", type: "string", default: "Hard Numbers", description: "Section title text." },
            { name: "stats", type: "Array<{label: string, value: number, color?: string}>", default: "[]", description: "Array of stat items with label, value, and optional color." },
            { name: "backgroundColor", type: "string", default: "#FDFD96", description: "Background color (hex, rgb, or hsl)." },
            { name: "titleColor", type: "string", default: "#000000", description: "Title text color." },
            { name: "cardBgColor", type: "string", default: "#ffffff", description: "Card background color." },
            { name: "cardBorderColor", type: "string", default: "#000000", description: "Card border color." },
            { name: "cardShadowColor", type: "string", default: "rgba(0,0,0,1)", description: "Card shadow color." },
            { name: "cardHoverShadowColor", type: "string", default: "rgba(0,0,0,1)", description: "Card hover shadow color." },
            { name: "iconBgColor", type: "string", default: "#FF6B6B", description: "Icon background color." },
            { name: "iconColor", type: "string", default: "#000000", description: "Icon color." },
            { name: "valueColor", type: "string", default: "#000000", description: "Value text color." },
            { name: "labelBgColor", type: "string", default: "#000000", description: "Label background color." },
            { name: "labelTextColor", type: "string", default: "#ffffff", description: "Label text color." },
        ],
        whenToUse: "Perfect for high-energy brands, street-wear e-commerce, and experimental Next.js portfolios. Use this React component for a bold, neo-brutalist stats section with solid shadows, high-contrast borders, and playful color-coding.",
        bestPractices: "Follow React best practices by pairing this with thick, monospaced typography and saturated primary colors. Maintain scalable component architecture by using it for high-impact metrics. Optimize for performance by using CSS-based box-shadows.",
        whyMatters: "Neo-brutalist design is a powerful visual statement of raw power and structural honesty. This production-ready UI component helpsคุณ build an interface that feels solid and unyielding, adding a unique architectural signature to your project.",
        faqs: [
            { question: "Can I adjust the shadow depth?", answer: "The shadow depth is set to a fixed premium 'Brutalist' thickness, but can be customized via the `cardShadowColor` and internal CSS variables." },
            { question: "Is it mobile responsive?", answer: "Absolutely, the grid of cards stacks vertically on mobile devices while maintaining its bold shadows and high-contrast lines." },
            { question: "Can I use custom icons?", answer: "Yes, the icon background and primary color can be fully customized for each card to match the specific metric theme." }
        ],
    },
    {
        id: "stats-circular",
        name: "Circular Rings",
        description: "Circular ring stats section with radial progress indicators.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["stats", "circular", "rings", "radial"],
        previewUrl: "/ContentBlocks/StatsSections/StatsCircular",
        code: {
            tsx: getCode("src/components/ContentBlocks/StatsSections/tsx/StatsCircular.tsx"),
            jsx: getCode("src/components/ContentBlocks/StatsSections/jsx/StatsCircular.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/StatsSections/StatsCircular/page.tsx")
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "stats", type: "Array<{value: number, label: string, color?: string}>", default: "[]", description: "Array of stat items with value, label, and optional color." },
            { name: "backgroundColor", type: "string", default: "#0a0a0a", description: "Background color (hex, rgb, or hsl)." },
            { name: "circleBgColor", type: "string", default: "#333333", description: "Circle background color." },
            { name: "circleSize", type: "number", default: "160", description: "Circle size in pixels." },
            { name: "circleRadius", type: "number", default: "70", description: "Circle radius in pixels." },
            { name: "valueColor", type: "string", default: "#ffffff", description: "Value text color." },
            { name: "labelColor", type: "string", default: "#a3a3a3", description: "Label text color." },
        ],
        whenToUse: "Ideal for performance dashboards, fitness apps, and Next.js sites that want clear, percentage-based visual data. Use this React component for a stats section with radial progress indicators and vibrant ring animations.",
        bestPractices: "Maintain consistent spacing within your design system by using it for circular-focused layouts. Follow React best practices by using high-contrast colors for the progress rings. Optimize for performance by managed the SVG stroke-dasharray animations.",
        whyMatters: "Circular indicators provide a fast, intuitive way for users to understand how close a project or metric is to reaching its goal. This production-ready UI component helpsคุณ build an interface that feels energetic and data-driven.",
        faqs: [
            { question: "Can I customize the ring size?", answer: "Yes, the `circleSize` and `circleRadius` props allow you to adjust the physical scale and thickness of the progress indicators." },
            { question: "Do the rings animate on load?", answer: "Yes, the progress bars animate from 0 to their specific value using smooth spring physics to create an engaging visual reveal." },
            { question: "Is it good for non-percentage data?", answer: "While best for percentages, it can be used for any data point by adjusting the label and treating the 'full ring' as the metric's target." }
        ],
    },
    {
        id: "stats-editorial",
        name: "Editorial Split",
        description: "Editorial split stats section with typography focus.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["stats", "editorial", "split", "typography"],
        previewUrl: "/ContentBlocks/StatsSections/StatsEditorial",
        code: {
            tsx: getCode("src/components/ContentBlocks/StatsSections/tsx/StatsEditorial.tsx"),
            jsx: getCode("src/components/ContentBlocks/StatsSections/jsx/StatsEditorial.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/StatsSections/StatsEditorial/page.tsx")
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", description: "Background image URL." },
            { name: "title", type: "string", default: "Building the future,", description: "Section title text (first part)." },
            { name: "titleItalic", type: "string", default: "one block at a time.", description: "Section title text (italic part)." },
            { name: "stats", type: "Array<{value: number, label: string}>", default: "[]", description: "Array of stat items with value and label." },
            { name: "backgroundColor", type: "string", default: "#ffffff", description: "Background color (hex, rgb, or hsl)." },
            { name: "imageOverlayColor", type: "string", default: "rgba(0,0,0,0.1)", description: "Image overlay color." },
            { name: "titleColor", type: "string", default: "#000000", description: "Title text color." },
            { name: "titleItalicColor", type: "string", default: "#737373", description: "Italic title text color." },
            { name: "statValueColor", type: "string", default: "#000000", description: "Stat value text color." },
            { name: "statLabelColor", type: "string", default: "#525252", description: "Stat label text color." },
            { name: "borderColor", type: "string", default: "#000000", description: "Border color." },
        ],
        whenToUse: "Ideal for artistic agencies, architecture firms, and Next.js sites that want a sophisticated, editorial-split aesthetic. Use this React component for a stats section that halves the screen between high-impact monochromatic imagery and bold typography.",
        bestPractices: "Follow React best practices by pairing this with high-contrast Serif typography. Maintain consistent spacing within your design system by using it on pure white or light gray backgrounds. Optimize for performance by lazy-loading the side-panel images.",
        whyMatters: "Editorial layouts add a sense of authority and timelessness to your data. This production-ready UI component helpsคุณ build an interface that feels like a high-end publication, improving the perceived exclusivity of your product.",
        faqs: [
            { question: "Why is it split 50/50?", answer: "The split layout provides a cinematic balance between human imagery (the 'Why') and hard data (the 'What'), making the stats feel grounded in reality." },
            { question: "Can I use color images?", answer: "Yes, while designed for monochromatic impact via the `imageOverlayColor`, you can use full-color images by setting the overlay to transparent." },
            { question: "Is it responsive?", answer: "Yes, the component elegantly stacks the image on top of the stats on mobile while maintaining the editorial typography." }
        ],
    },
    {
        id: "stats-clay",
        name: "Clay Physics",
        description: "Organic clay physics stats section with morphing shapes.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["stats", "clay", "physics", "morphing"],
        previewUrl: "/ContentBlocks/StatsSections/StatsClay",
        code: {
            tsx: getCode("src/components/ContentBlocks/StatsSections/tsx/StatsClay.tsx"),
            jsx: getCode("src/components/ContentBlocks/StatsSections/jsx/StatsClay.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/StatsSections/StatsClay/page.tsx")
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "stats", type: "Array<{icon: LucideIcon, value: number, label: string, suffix?: string, iconColor?: string}>", default: "[]", description: "Array of stat items with icon, value, label, optional suffix, and iconColor." },
            { name: "backgroundColor", type: "string", default: "#e0e5ec", description: "Background color (hex, rgb, or hsl)." },
            { name: "cardBgColor", type: "string", default: "#e0e5ec", description: "Card background color." },
            { name: "cardShadowLight", type: "string", default: "rgba(255,255,255,0.5)", description: "Card light shadow color for neumorphic effect." },
            { name: "cardShadowDark", type: "string", default: "rgb(163,177,198)", description: "Card dark shadow color for neumorphic effect." },
            { name: "iconBgColor", type: "string", default: "#e0e5ec", description: "Icon background color." },
            { name: "iconShadowLight", type: "string", default: "#ffffff", description: "Icon light shadow color." },
            { name: "iconShadowDark", type: "string", default: "#bebebe", description: "Icon dark shadow color." },
            { name: "valueColor", type: "string", default: "#475569", description: "Value text color." },
            { name: "labelColor", type: "string", default: "#64748b", description: "Label text color." },
        ],
        whenToUse: "Excellent for friendly mobile apps, design portfolios, and Next.js startups that want a tactile, 'soft' aesthetic. Use this React component for a neumorphic stats section with organic, morphing card shapes.",
        bestPractices: "Maintain consistent spacing within your design system by using it on light, monochromatic backgrounds. Follow React best practices by pairing it with clear, rounded typography. Optimize for performance by managed the shadow-blur radii.",
        whyMatters: "Neumorphism (Claymorphism) creates a sense of approachability and physical presence. This production-ready UI component helpsคุณ build an interface that feels tactile and friendly, improving user affinity with your brand.",
        faqs: [
            { question: "How are the morphing shapes made?", answer: "The cards use internal animation loops for their `border-radius`, creating a soft, shifting 'clay-like' appearance." },
            { question: "Is the neumorphic effect customizable?", answer: "Yes, the `cardShadowLight` and `cardShadowDark` props allow you to fine-tune the depth and 'softness' of the elevation." },
            { question: "Can I use it on dark backgrounds?", answer: "While optimized for light mode (`#e0e5ec`), the colors can be adjusted to create a similar tactile effect on dark gray backgrounds." }
        ],
    },
    {
        id: "stats-minimal",
        name: "Minimal Scale",
        description: "Minimal scale stats section with clean design.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["stats", "minimal", "scale", "clean"],
        previewUrl: "/ContentBlocks/StatsSections/StatsMinimal",
        code: {
            tsx: getCode("src/components/ContentBlocks/StatsSections/tsx/StatsMinimal.tsx"),
            jsx: getCode("src/components/ContentBlocks/StatsSections/jsx/StatsMinimal.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/StatsSections/StatsMinimal/page.tsx")
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "stats", type: "Array<{label: string, value: number}>", default: "[]", description: "Array of stat items with label and value." },
            { name: "backgroundColor", type: "string", default: "#ffffff", description: "Background color (hex, rgb, or hsl)." },
            { name: "labelColor", type: "string", default: "#737373", description: "Label text color." },
            { name: "labelHoverColor", type: "string", default: "#000000", description: "Label text color on hover." },
            { name: "valueColor", type: "string", default: "#000000", description: "Value text color." },
            { name: "borderColor", type: "string", default: "#e5e5e5", description: "Border color." },
            { name: "rowBgColor", type: "string", default: "#ffffff", description: "Row background color." },
            { name: "rowHoverBgColor", type: "string", default: "#f5f5f5", description: "Row hover background color." },
        ],
        whenToUse: "Perfect for minimalist blogs, editorial portfolios, and Next.js applications that want a clean, type-focused aesthetic. Use this React component for a minimal scale stats section with smooth row transitions and subtle border highlights.",
        bestPractices: "Follow React best practices by pairing this with bold, high-contrast typography. Maintain consistent spacing within your design system by using it on light, neutral backgrounds. Optimize for performance by using efficient state management for the transitions.",
        whyMatters: "Clean typography focuses the user's entire attention on the numbers. This production-ready UI component helpsคุณ build an interface that feels sincere and authoritative, without distracting from the message.",
        faqs: [
            { question: "How does the hover effect work?", answer: "Each metric row features a subtle background shift and text color transition to indicate the user's focus." },
            { question: "Can I add more metrics?", answer: "The component is built to handle a vertical list of stats, making it extremely scalable for long data summaries." },
            { question: "Is it mobile responsive?", answer: "The layout automatically adjusts for smaller screens, ensuring the labels and values remain aligned and legible." }
        ],
    },
    {
        id: "stats-gravity",
        name: "Gravity Chaos",
        description: "Gravity chaos stats section with dynamic animations.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["stats", "gravity", "chaos", "dynamic"],
        previewUrl: "/ContentBlocks/StatsSections/StatsGravity",
        code: {
            tsx: getCode("src/components/ContentBlocks/StatsSections/tsx/StatsGravity.tsx"),
            jsx: getCode("src/components/ContentBlocks/StatsSections/jsx/StatsGravity.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/StatsSections/StatsGravity/page.tsx")
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "stats", type: "Array<{value: number, label: string, color?: string, size?: string, x?: number, y?: number}>", default: "[]", description: "Array of stat items with value, label, optional color, size, x, and y positions." },
            { name: "backgroundColor", type: "string", default: "#111111", description: "Background color (hex, rgb, or hsl)." },
            { name: "patternColor", type: "string", default: "#222222", description: "Grid pattern color." },
            { name: "containerBorderColor", type: "string", default: "rgba(255,255,255,0.2)", description: "Container border color." },
            { name: "hintText", type: "string", default: "DRAG_THE_DATA // PHYSICS_ENABLED", description: "Hint text displayed in container." },
            { name: "hintTextColor", type: "string", default: "rgba(255,255,255,0.5)", description: "Hint text color." },
            { name: "statValueColor", type: "string", default: "#000000", description: "Stat value text color." },
            { name: "statLabelColor", type: "string", default: "#000000", description: "Stat label text color." },
            { name: "statShadowColor", type: "string", default: "rgba(0,0,0,0.5)", description: "Stat shadow color." },
            { name: "statBorderColor", type: "string", default: "#000000", description: "Stat border color." },
        ],
        whenToUse: "Excellent for gaming products, deep-tech apps, and Next.js portfolios that want an interactive, volumetric feel. Use this React component for a gravity-based stats section where data points are dynamic, draggable physics objects.",
        bestPractices: "Maintain scalable component architecture by keeping foreground text bright and readable. Follow React best practices by pairing this with dark-themed layouts. Optimize for performance by managed the physics engine for mobile views.",
        whyMatters: "Dynamic physics increases the perceived value and interactivity of a digital interface. This production-ready component helpsคุณ build an interface that feels deep and tangible, turning standard data into an interactive playground.",
        faqs: [
            { question: "How does the gravity work?", answer: "The data points are treated as physical objects in a boundary box, responding to gravity, collisions, and user drag interactions." },
            { question: "Is it draggable on mobile?", answer: "Yes, the physics engine is optimized for touch interactions, allowing users to toss and move the data 'bubbles' across the screen." },
            { question: "Can I change the object sizes?", answer: "Each stat can be assigned a specific 'scale' to visually represent its relative importance or size in the dataset." }
        ],
    },
    {
        id: "stats-gooey",
        name: "The Gooey",
        description: "Gooey blob stats section with liquid animations.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["stats", "gooey", "blob", "liquid"],
        previewUrl: "/ContentBlocks/StatsSections/StatsGooey",
        code: {
            tsx: getCode("src/components/ContentBlocks/StatsSections/tsx/StatsGooey.tsx"),
            jsx: getCode("src/components/ContentBlocks/StatsSections/jsx/StatsGooey.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/StatsSections/StatsGooey/page.tsx")
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "stats", type: "Array<{value: number, label: string}>", default: "[]", description: "Array of stat items with value and label." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color (hex, rgb, or hsl)." },
            { name: "blobColor", type: "string", default: "#ffffff", description: "Blob color." },
            { name: "blobSize", type: "number", default: "256", description: "Blob size in pixels." },
            { name: "mainBlobSize", type: "number", default: "256", description: "Main blob size in pixels." },
            { name: "valueColor", type: "string", default: "#000000", description: "Value text color." },
            { name: "labelColor", type: "string", default: "#000000", description: "Label text color." },
            { name: "animationDuration", type: "number", default: "4", description: "Animation duration in seconds." },
            { name: "animationDelay", type: "number", default: "0", description: "Animation delay in seconds." },
        ],
        whenToUse: "Ideal for creative labs, innovative agencies, and Next.js sites that want a playful, liquid aesthetic. Use this React component for a gooey-blob stats section where values reside inside shifting, organic liquid shapes.",
        bestPractices: "Follow React best practices by using high-contrast colors for the blobs. Maintain consistent spacing within your design system by using it for focal point sections. Optimize for performance by managed the SVG gooey filters.",
        whyMatters: "Liquid animations create a sense of flow and organic growth. This production-ready UI component helpsคุณ build an interface that feels alive and experimental, improving user engagement through visual novelty.",
        faqs: [
            { question: "How is the 'gooey' effect made?", answer: "It uses a professional SVG contrast/blur filter to make standard circles appear as if they are merging like a liquid." },
            { question: "Can I change the blob colors?", answer: "Yes, the `blobColor` prop allows you to set the primary liquid color, typically paired with a dark background for maximum contrast." },
            { question: "Does it support multiple stats?", answer: "The component is optimized for 3-5 key metrics to maintain the visual clarity of the liquid animations." }
        ],
    },
    {
        id: "stats-matrix",
        name: "Data Rain",
        description: "Matrix data rain stats section with falling characters.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["stats", "matrix", "rain", "characters"],
        previewUrl: "/ContentBlocks/StatsSections/StatsMatrix",
        code: {
            tsx: getCode("src/components/ContentBlocks/StatsSections/tsx/StatsMatrix.tsx"),
            jsx: getCode("src/components/ContentBlocks/StatsSections/jsx/StatsMatrix.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/StatsSections/StatsMatrix/page.tsx")
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "stats", type: "Array<{value: number, label: string}>", default: "[]", description: "Array of stat items with value and label." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color (hex, rgb, or hsl)." },
            { name: "canvasTextColor", type: "string", default: "#0F0", description: "Canvas text color for matrix effect." },
            { name: "canvasOpacity", type: "number", default: "0.5", description: "Canvas opacity (0-1)." },
            { name: "cardBgColor", type: "string", default: "rgba(0,0,0,0.8)", description: "Card background color." },
            { name: "cardBorderColor", type: "string", default: "rgba(0,255,0,0.5)", description: "Card border color." },
            { name: "cardShadowColor", type: "string", default: "rgba(0,255,0,0.3)", description: "Card shadow color." },
            { name: "promptTextColor", type: "string", default: "rgba(0,255,0,0.7)", description: "Prompt text color." },
            { name: "valueColor", type: "string", default: "#4ade80", description: "Value text color." },
            { name: "progressBarBgColor", type: "string", default: "#14532d", description: "Progress bar background color." },
            { name: "progressBarColor", type: "string", default: "#22c55e", description: "Progress bar fill color." },
            { name: "labelTextColor", type: "string", default: "#16a34a", description: "Label text color." },
            { name: "labelText", type: "string", default: "initialized", description: "Label text." },
        ],
        whenToUse: "Perfect for deep-tech brands, developer tools, and Next.js experiences that want a futuristic, 'hacker' aesthetic. Use this React component for a matrix-themed stats section with falling character rain and terminal-style cards.",
        bestPractices: "Maintain scalable component architecture by keeping foreground text bright and readable. Follow React best practices by pairing this with dark-themed layouts. Optimize for performance by managed the canvas-based character rain.",
        whyMatters: "Cyber aesthetics create a sense of scale and technical depth. This production-ready UI component helpsคุณ build an interface that feels atmospheric and advanced, adding semantic authority to your project's digital architecture.",
        faqs: [
            { question: "Is the matrix rain real?", answer: "Yes, it's rendered on a transparent HTML5 canvas behind the stat cards, providing a dynamic and immersive 'digital rain' effect." },
            { question: "Can I customize the falling text?", answer: "The `canvasTextColor` prop allows you to change the character color from classic Matrix green to any brand-specific neon color." },
            { question: "Do the cards have progress bars?", answer: "Yes, each stat card features a terminal-style progress indicator that pulses as if data is being actively decoded." }
        ],
    },
];

