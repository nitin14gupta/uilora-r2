import { getCode } from "../getCode";
import { Component } from "../types";

export const featureSectionComponents: Component[] = [
    {
        id: "uilora-showcase",
        name: "Uilora Showcase",
        description: "Purple gradient feature showcase with white card container and visual mockups.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["feature", "showcase", "gradient", "card", "mockup"],
        previewUrl: "/ContentBlocks/FeatureSections/UiloraShowcase",
        code: {
            tsx: getCode("src/components/ContentBlocks/FeatureSections/tsx/UiloraShowcase.tsx"),
            jsx: getCode("src/components/ContentBlocks/FeatureSections/jsx/UiloraShowcase.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/FeatureSections/UiloraShowcase/page.tsx")
        },
        dependencies: ["framer-motion"],
        props: [
            { name: "features", type: "Array<{label, title, description, visual}>", default: "3 Uilora features", description: "Array of feature items with label, title, description, and visual mockup." },
            { name: "title", type: "string", default: "Our Primary Features", description: "Section heading text." },
            { name: "subtitle", type: "string", default: "Introducing Uilora...", description: "Section subtitle text." },
            { name: "accentColor", type: "string", default: "#5227FF", description: "Accent color for gradient and badge." },
        ],
        whenToUse: "Perfect for product landing pages that want a bold, eye-catching feature showcase with a gradient hero and clean white card layout. Great for SaaS platforms and design tools.",
        bestPractices: "Use 3 features for the best visual balance in the grid. Each feature should have a distinct visual mockup to maintain variety. Keep descriptions concise.",
        whyMatters: "The gradient-to-white contrast creates a strong visual anchor that draws attention to your key features. The visual mockups add credibility by showing real UI patterns.",
        faqs: [
            { question: "Can I customize the gradient?", answer: "Yes, the accentColor prop controls the gradient hue. The gradient transitions from the accent color to a lighter shade." },
            { question: "Are the mockups customizable?", answer: "Each feature accepts a visual prop that can be any React node — you can pass your own mockups or screenshots." },
            { question: "Does it work on mobile?", answer: "Yes, the grid collapses to a single column on mobile with all animations preserved." }
        ],
    },
    {
        id: "uilora-editorial",
        name: "Uilora Editorial",
        description: "Clean editorial feature section with stats row, accent bars, and geometric illustration.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["feature", "editorial", "stats", "minimal", "clean"],
        previewUrl: "/ContentBlocks/FeatureSections/UiloraEditorial",
        code: {
            tsx: getCode("src/components/ContentBlocks/FeatureSections/tsx/UiloraEditorial.tsx"),
            jsx: getCode("src/components/ContentBlocks/FeatureSections/jsx/UiloraEditorial.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/FeatureSections/UiloraEditorial/page.tsx")
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "features", type: "Array<{title, description, icon, color}>", default: "4 Uilora features", description: "Array of feature items with title, description, icon, and accent color." },
            { name: "title", type: "string", default: "Powerful, seamless component personalization", description: "Section heading text." },
            { name: "subtitle", type: "string", default: "Uilora empowers developers...", description: "Section subtitle text." },
            { name: "accentColor", type: "string", default: "#E8546A", description: "Primary accent color for heading bar and highlights." },
        ],
        whenToUse: "Ideal for editorial-style landing pages, SaaS platforms, and enterprise tools that want a clean, data-driven presentation with stats and structured feature cards.",
        bestPractices: "Use meaningful stats that build trust. Keep the 4-feature grid focused on your core value propositions. The accent bars add visual rhythm — use distinct colors for each.",
        whyMatters: "Editorial layouts convey authority and professionalism. The combination of stats, illustration, and structured features creates a complete narrative that builds trust and drives conversion.",
        faqs: [
            { question: "Can I customize the stats?", answer: "Stats are currently part of the component's internal layout. You can modify the component source to make them dynamic via props." },
            { question: "Is the illustration an image?", answer: "No, it's built entirely with CSS and HTML elements — no external images needed." },
            { question: "Can I change the feature accent colors?", answer: "Yes, each feature item has its own color property for the accent bar." }
        ],
    },
    {
        id: "uilora-insights",
        name: "Uilora Insights",
        description: "Scroll-driven accordion feature section with smooth image panel transitions.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["feature", "accordion", "scroll", "insights", "image"],
        previewUrl: "/ContentBlocks/FeatureSections/UiloraInsights",
        code: {
            tsx: getCode("src/components/ContentBlocks/FeatureSections/tsx/UiloraInsights.tsx"),
            jsx: getCode("src/components/ContentBlocks/FeatureSections/jsx/UiloraInsights.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/FeatureSections/UiloraInsights/page.tsx")
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "features", type: "Array<{icon, title, description, visual}>", default: "6 Uilora features", description: "Array of feature items with icon, title, description, and visual panel." },
            { name: "title", type: "string", default: "Track What Matters", description: "Section heading text." },
            { name: "subtitle", type: "string", default: "BUILT-IN-INSIGHTS", description: "Uppercase tag above the heading." },
            { name: "accentColor", type: "string", default: "#1a1a1a", description: "Accent color for active indicator." },
        ],
        whenToUse: "Perfect for product pages that need to showcase multiple features with rich visual context. The accordion + image panel pattern is ideal for health apps, analytics dashboards, and feature-rich platforms.",
        bestPractices: "Use 4-6 features for the best balance. Each feature should have a unique visual that reinforces its purpose. Keep descriptions under 2 sentences for scannability.",
        whyMatters: "The accordion-image pattern lets users explore features at their own pace while maintaining visual engagement. The smooth transitions create a premium, app-like browsing experience.",
        faqs: [
            { question: "How do the image transitions work?", answer: "AnimatePresence from Framer Motion handles smooth fade and scale transitions between visual panels when the active feature changes." },
            { question: "Does hover or click activate features?", answer: "Both — hovering or clicking a feature item activates it and swaps the visual panel." },
            { question: "Can I use real images instead of mockups?", answer: "Yes, each feature accepts a visual prop that can be any React node — including img tags or Next.js Image components." }
        ],
    },
    {
        id: "parallax-feature",
        name: "Editorial Parallax",
        description: "Elegant parallax feature section with scroll-driven animations and editorial typography.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["feature", "parallax", "editorial", "scroll", "luxury"],
        previewUrl: "/ContentBlocks/FeatureSections/ParallaxFeature",
        code: {
            tsx: getCode("src/components/ContentBlocks/FeatureSections/tsx/ParallaxFeature.tsx"),
            jsx: getCode("src/components/ContentBlocks/FeatureSections/jsx/ParallaxFeature.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/FeatureSections/ParallaxFeature/page.tsx")
        },
        dependencies: ["framer-motion"],
        props: [
            { name: "features", type: "Array<{number, title, description}>", default: "3 Uilora steps", description: "Array of numbered feature items." },
            { name: "title", type: "string", default: "Crafted with Precision", description: "Large editorial heading text." },
            { name: "subtitle", type: "string", default: "Every detail matters.", description: "Italic subtitle text." },
            { name: "image", type: "string", default: "Unsplash abstract art", description: "Hero image URL for the parallax panel." },
        ],
        whenToUse: "Perfect for luxury brands, architectural portfolios, and editorial landing pages that want an elegant scroll-driven narrative with parallax depth effects.",
        bestPractices: "Use high-quality, high-resolution images for the parallax panel. Keep features to 3-4 items for a clean editorial flow. Pair with serif or display typography for maximum impact.",
        whyMatters: "Editorial parallax layouts add luxury and depth to digital storytelling. The scroll-driven animations create a cinematic browsing experience that holds attention and conveys premium quality.",
        faqs: [
            { question: "How does the parallax work?", answer: "It uses Framer Motion's useScroll and useTransform hooks for hardware-accelerated scroll-driven transforms on both text and image layers." },
            { question: "Can I use a video instead of an image?", answer: "The image prop accepts any URL. For video, you would need to modify the component to use a video element." },
            { question: "Is it mobile friendly?", answer: "Yes, the layout stacks vertically on mobile with reduced parallax intensity for a smooth experience." }
        ],
    },
    {
        id: "tabs-feature",
        name: "Interactive Tabs",
        description: "Tabbed feature section with smooth transitions and styled visual mockups.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["feature", "tabs", "interactive", "transitions"],
        previewUrl: "/ContentBlocks/FeatureSections/TabsFeature",
        code: {
            tsx: getCode("src/components/ContentBlocks/FeatureSections/tsx/TabsFeature.tsx"),
            jsx: getCode("src/components/ContentBlocks/FeatureSections/jsx/TabsFeature.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/FeatureSections/TabsFeature/page.tsx")
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "tabs", type: "Array<{label, icon, title, description, visual}>", default: "3 Uilora tabs", description: "Array of tab items combining tab label, content, and visual mockup." },
            { name: "title", type: "string", default: "Everything you need to ship faster.", description: "Section heading text." },
            { name: "subtitle", type: "string", default: "Uilora gives you the tools...", description: "Section subtitle text." },
            { name: "accentColor", type: "string", default: "#5227FF", description: "Accent color for active tab indicator and highlights." },
        ],
        whenToUse: "Ideal for organizing complex features into logical categories. Great for product pages, developer tool documentation, and SaaS platforms with multiple feature sets.",
        bestPractices: "Use 3-5 tabs for optimal usability. Each tab should have a clear, distinct category. Include visual mockups to reinforce the content and break up text.",
        whyMatters: "Tabbed interfaces reduce cognitive load by letting users explore features at their own pace. The smooth transitions and sliding indicator add polish that elevates the experience.",
        faqs: [
            { question: "Can I add custom visuals?", answer: "Yes, each tab accepts a visual prop that can be any React node — styled divs, images, or custom components." },
            { question: "Do the tabs animate?", answer: "Yes, the active indicator slides with a spring animation via layoutId, and content transitions use fade+slide effects." },
            { question: "Is the tab bar scrollable on mobile?", answer: "Yes, the tab bar uses horizontal overflow scrolling on smaller screens." }
        ],
    },
    {
        id: "brutalist-feature",
        name: "Neo-Brutalist",
        description: "Bold neo-brutalist feature section with chunky borders, hard shadows, and raw typography.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["feature", "brutalist", "bold", "chunky"],
        previewUrl: "/ContentBlocks/FeatureSections/BrutalistFeature",
        code: {
            tsx: getCode("src/components/ContentBlocks/FeatureSections/tsx/BrutalistFeature.tsx"),
            jsx: getCode("src/components/ContentBlocks/FeatureSections/jsx/BrutalistFeature.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/FeatureSections/BrutalistFeature/page.tsx")
        },
        dependencies: ["framer-motion"],
        props: [
            { name: "features", type: "Array<{title, description, color}>", default: "4 Uilora features", description: "Array of feature items with title, description, and accent color." },
            { name: "title", type: "string", default: "Make it", description: "Section title text." },
            { name: "subtitle", type: "string", default: "Pop.", description: "Section subtitle text." },
            { name: "accentColor", type: "string", default: "#FF3B30", description: "Accent color for hero card and badge." },
        ],
        whenToUse: "Perfect for street-wear brands, experimental agency sites, and high-energy portfolios that embrace a neo-brutalist aesthetic with bold typography and raw geometry.",
        bestPractices: "Pair with thick, monospaced typography and saturated colors. Use 3-4 features with distinct accent colors for visual variety. Keep descriptions punchy and direct.",
        whyMatters: "Neo-brutalist design is a powerful visual statement of raw power and structural honesty. It adds a unique architectural signature that stands out from the sea of generic gradient-filled landing pages.",
        faqs: [
            { question: "Can I adjust the border thickness?", answer: "The component uses border-[3px] by default. You can modify the component source to adjust the thickness." },
            { question: "Is the color palette customizable?", answer: "Yes, each feature card has its own color prop, and the accentColor controls the hero card and badge." },
            { question: "Does it support hover effects?", answer: "Yes, cards lift and tilt on hover using framer-motion spring physics." }
        ],
    },
    {
        id: "accordion-feature",
        name: "Dark Spotlight",
        description: "Dark accordion feature section with sliding indicator and spotlight panel.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["feature", "dark", "spotlight", "accordion"],
        previewUrl: "/ContentBlocks/FeatureSections/AccordionFeature",
        code: {
            tsx: getCode("src/components/ContentBlocks/FeatureSections/tsx/AccordionFeature.tsx"),
            jsx: getCode("src/components/ContentBlocks/FeatureSections/jsx/AccordionFeature.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/FeatureSections/AccordionFeature/page.tsx")
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "features", type: "Array<{title, description, icon}>", default: "4 Uilora features", description: "Array of feature items with title, description, and lucide icon." },
            { name: "title", type: "string", default: "Built for Uilora", description: "Section heading text." },
            { name: "subtitle", type: "string", default: "Everything you need...", description: "Section subtitle text." },
            { name: "accentColor", type: "string", default: "#5227FF", description: "Accent color for active indicator and highlights." },
        ],
        whenToUse: "Excellent for enterprise dashboards, dark-mode landing pages, and applications that want a high-contrast pro aesthetic with an accordion-based feature explorer.",
        bestPractices: "Use on dark backgrounds for maximum impact. Keep features to 3-5 items for optimal scannability. Use descriptive icons that reinforce each feature's purpose.",
        whyMatters: "Accordion-driven spotlights create focus and exclusivity. The sliding indicator and animated panel transitions add a layer of polish that makes the section feel interactive and premium.",
        faqs: [
            { question: "Is the spotlight panel dynamic?", answer: "Yes, the right panel updates with a smooth cross-fade animation whenever a different accordion item is selected." },
            { question: "Can I change the active indicator?", answer: "Yes, the accentColor prop controls the vertical indicator bar and icon highlight color." },
            { question: "Is it accessible?", answer: "The accordion uses proper click handlers and visual focus indicators for accessibility." }
        ],
    },
    {
        id: "event-horizon",
        name: "Event Horizon",
        description: "Cosmic feature section with scroll-driven conic gradient and glassmorphic cards.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["feature", "cosmic", "depth", "glass"],
        previewUrl: "/ContentBlocks/FeatureSections/EventHorizon",
        code: {
            tsx: getCode("src/components/ContentBlocks/FeatureSections/tsx/EventHorizon.tsx"),
            jsx: getCode("src/components/ContentBlocks/FeatureSections/jsx/EventHorizon.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/FeatureSections/EventHorizon/page.tsx")
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "features", type: "Array<{icon, title, description}>", default: "4 Uilora features", description: "Array of feature items with icon, title, and description." },
            { name: "title", type: "string", default: "Beyond the Surface", description: "Section heading text." },
            { name: "subtitle", type: "string", default: "Uilora components go deeper...", description: "Section subtitle text." },
            { name: "accentColor", type: "string", default: "#a855f7", description: "Accent color for gradient glow and hover effects." },
        ],
        whenToUse: "Ideal for deep-tech brands, creative agencies, and landing pages that want a mysterious, volumetric atmosphere with scroll-driven visual depth.",
        bestPractices: "Use on dark backgrounds for the best glow contrast. Keep feature count to 3-4 for a clean grid. The scroll-driven background works best when the section has enough viewport height.",
        whyMatters: "Scroll-driven visual effects create a sense of discovery and wonder. The conic gradient rotation responds to the user's scroll, making the page feel alive and interactive.",
        faqs: [
            { question: "How does the background animation work?", answer: "A conic gradient element is transformed via Framer Motion's useScroll and useTransform hooks — rotation, scale, and opacity all respond to scroll position." },
            { question: "Is it performant?", answer: "Yes, blur elements are sized conservatively (300px max) and use hardware-accelerated transforms only." },
            { question: "Can I change the glow color?", answer: "Yes, the accentColor prop controls the conic gradient accent and card hover glow." }
        ],
    },
];
