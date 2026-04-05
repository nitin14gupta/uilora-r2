import { getCode } from "../getCode";
import { Component } from "../types";

export const featureGridComponents: Component[] = [
    {
        id: "cinematic-grid",
        name: "Cinematic Stack",
        description: "Sticky scroll feature grid with full-bleed cinematic image cards, Uilora-branded feature content, and smooth whileInView animations on a black background.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "cinematic", "sticky", "scroll", "dark"],
        previewUrl: "/Grids&Layouts/FeatureGrids/CinematicGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/CinematicGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/CinematicGrid.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/CinematicGrid/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "title", type: "string", default: "Why teams choose Uilora", description: "Section heading rendered in the top header block." },
            { name: "description", type: "string", default: "Every component is crafted to be production-ready, accessible, and beautiful out of the box.", description: "Subtitle shown below the section heading." },
            { name: "accentColor", type: "string", default: "#6366f1", description: "Hex accent used for the label badge on each sticky card and the header eyebrow." },
        ],
        whenToUse: "Perfect for landing pages with deep narrative-driven feature sections, product launch pages, and any page that benefits from a premium, immersive scroll experience. The cinematic quality signals quality and depth.",
        bestPractices: "Use a dark or neutral page background so the black section blends cleanly. The sticky offset (top-24) assumes a fixed navbar — adjust if your navbar height differs. Keep feature headings concise for the large text to read comfortably at 7xl.",
        whyMatters: "Stacked scroll sequences guide users through complex feature sets with a sense of physical depth and narrative momentum. The cinematic aesthetic elevates perceived product quality immediately.",
        faqs: [
            { question: "How does sticky stacking work?", answer: "Each card uses CSS `sticky` positioning. As you scroll down, earlier cards remain pinned while new ones slide in from below, creating a layered stack effect." },
            { question: "Can I change the feature content?", answer: "The 4 feature items (headings, sub-descriptions, images) are hardcoded in the features array at the top of the component. Clone and edit that array to customize." },
            { question: "Is it responsive?", answer: "Yes — the text scales from text-5xl on mobile to text-7xl on desktop. The sticky offset works on all screen sizes." }
        ],
    },
    {
        id: "elastic-grid",
        name: "Elastic Expansion",
        description: "Hover-to-expand accordion feature grid with image backgrounds, vertical labels on inactive panels, and Uilora-branded content on a light gray background.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "elastic", "expansion", "accordion", "hover"],
        previewUrl: "/Grids&Layouts/FeatureGrids/ElasticGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/ElasticGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/ElasticGrid.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/ElasticGrid/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "title", type: "string", default: "Everything your design system needs", description: "Section heading displayed above the accordion." },
            { name: "description", type: "string", default: "Uilora brings structure, speed, and craft to every product you ship.", description: "Subtitle shown below the heading." },
            { name: "accentColor", type: "string", default: "#6366f1", description: "Hex accent used for label badges on expanded panels and the eyebrow text." },
        ],
        whenToUse: "Ideal for feature comparison sections, capability showcases, and any use case where you want users to actively explore content rather than passively read a list. Works especially well on desktop-first landing pages.",
        bestPractices: "Keep panel labels short (1–2 words) so they read cleanly in the vertical rotated state. Use images with strong visual contrast since they display at 60% opacity over black.",
        whyMatters: "Accordion-style feature grids encourage active engagement — users are drawn to hover and explore, increasing time on page and feature comprehension compared to static lists.",
        faqs: [
            { question: "How do I change the feature content?", answer: "Edit the features array at the top of the component. Each item has label, heading, sub (description), and img (Unsplash URL)." },
            { question: "Can I make it click-to-expand instead of hover?", answer: "Yes — the component uses both onClick and onHoverStart. Remove onHoverStart to make it click-only." },
            { question: "Is it responsive?", answer: "On mobile the panels stack vertically (flex-col) and each shows in the expanded state by default. The horizontal expansion layout activates at md breakpoint." }
        ],
    },
    {
        id: "minimal-grid",
        name: "Ethereal Minimal",
        description: "Editorial 2-column photo grid with desaturated-to-color hover, serif italic headings, and Uilora-branded feature items on a white background.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "minimal", "editorial", "photo", "light"],
        previewUrl: "/Grids&Layouts/FeatureGrids/MinimalGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/MinimalGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/MinimalGrid.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/MinimalGrid/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "title", type: "string", default: "Crafted with intention", description: "Large heading displayed in the top-left of the section header." },
            { name: "description", type: "string", default: "Uilora components aren't generated — they're designed, reviewed, and refined until they feel right.", description: "Short description shown top-right opposite the heading." },
            { name: "accentColor", type: "string", default: "#6366f1", description: "Hex accent used for the numbered labels above each feature item." },
        ],
        whenToUse: "Best for editorial brands, design studios, boutique agencies, and products that want to signal quality through restraint. The desaturate-to-color hover creates an elegant reveal that rewards exploration.",
        bestPractices: "This component is white-background-only — it pairs best with a white or near-white page. The serif italic typography works best with short, evocative headings (3–6 words). Avoid long feature descriptions as the light font-weight requires comfortable line length.",
        whyMatters: "Minimalism signals confidence. This layout communicates that the product doesn't need visual tricks — the work speaks for itself. The alternating vertical offset adds dynamism without breaking the calm aesthetic.",
        faqs: [
            { question: "Why does every other card have a top margin?", answer: "The md:mt-32 offset on odd-indexed cards creates the characteristic staggered editorial grid — each column scrolls into view at a slightly different pace." },
            { question: "Can I use custom images?", answer: "Yes — edit the features array and replace the img URLs. Any 4:3 aspect ratio image works well with the aspect-[4/3] container." },
            { question: "What does the ArrowUpRight icon do?", answer: "It appears on hover as a visual affordance suggesting the item is interactive. Wire it to a router.push() or <Link> for real navigation." }
        ],
    },
    {
        id: "grid-scatter-deck",
        name: "Scatter Deck",
        description: "Draggable card deck with Uilora-branded cards (Uilora, Motion, TypeScript, Design, 700+), spring physics, and a crosshair-grid background.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "scatter", "deck", "drag", "interactive"],
        previewUrl: "/Grids&Layouts/FeatureGrids/GridScatterDeck",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/GridScatterDeck.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/GridScatterDeck.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/GridScatterDeck/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "title", type: "string", default: "Drag. Explore. Build.", description: "Heading displayed at the top of the scatter deck." },
            { name: "description", type: "string", default: "Uilora gives you every piece — drag them into your stack.", description: "Subtitle below the heading." },
            { name: "accentColor", type: "string", default: "#6366f1", description: "Hex accent used for the eyebrow label and hover hint color." },
        ],
        whenToUse: "Best for hero sections that want to create delight and surprise — hackathon pages, creative portfolio landing screens, or component library showcases where interactivity itself is the message. High engagement, high memorability.",
        bestPractices: "The drag area is constrained to the container ref so cards never escape the viewport. Spring physics (bounce: 0.4) feel natural — avoid setting higher bounce values as cards become chaotic. The Asterisk icons use animate-spin-slow which requires a custom Tailwind animation.",
        whyMatters: "Draggable interfaces create a sense of physical ownership — users feel they're interacting with something real. This emotional engagement makes the Uilora brand memorable in a crowded market.",
        faqs: [
            { question: "How do I change the card labels?", answer: "Edit the cards array in the component. Each card has label (display text), color (Tailwind bg class), textColor (Tailwind text class), rotate, and z values." },
            { question: "Can I add more cards?", answer: "Yes — add objects to the cards array. They'll spring in with a delay of i * 0.1s automatically." },
            { question: "Why does animate-spin-slow not work?", answer: "You need to add a custom animation to your Tailwind config: `'spin-slow': 'spin 6s linear infinite'` under `theme.extend.animation`." }
        ],
    },
    {
        id: "uilora-hero-feature",
        name: "Uilora Hero Feature",
        description: "Split hero feature section with gradient headline, CTA buttons, and 3 staggered feature cards — each with a pastel dot-grid background, iOS-style gradient icon, title and description.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "hero", "cards", "saas", "light", "gradient"],
        previewUrl: "/Grids&Layouts/FeatureGrids/UiloraHeroFeature",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/UiloraHeroFeature.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/UiloraHeroFeature.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/UiloraHeroFeature/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "title", type: "string", default: "Build faster: ship with an all-in-one library.", description: "Main headline. The phrase 'all-in-one' is automatically rendered in a gradient — include it in your title string to activate the effect." },
            { name: "description", type: "string", default: "Production-ready component library. Ship beautiful, accessible UIs instantly with Uilora's 700+ components.", description: "Subtitle displayed below the headline." },
            { name: "accentColor", type: "string", default: "#f472b6", description: "Hex color for the gradient on 'all-in-one', the badge icon, the stat card, and CTA button hover." },
        ],
        whenToUse: "Perfect for SaaS landing pages, component library homepages, and product hero sections that need to communicate value immediately. The 3-card stagger creates visual hierarchy without a complex layout.",
        bestPractices: "Include 'all-in-one' in your title string to activate the gradient effect. Pink-to-orange or purple-to-pink accent colors work best against the white card background. Keep the description under 2 lines for the cleanest layout.",
        whyMatters: "The combination of a bold gradient headline, clear CTAs, and three feature cards gives users everything they need to understand the product — immediately. The iOS-style icons add a polished, premium feel without image dependencies.",
        faqs: [
            { question: "How does the gradient on 'all-in-one' work?", answer: "The title string is split on the literal text 'all-in-one'. The middle part is wrapped in a span with background-clip: text and the accentColor gradient. Change the gradientWord const in the component to use a different highlighted word." },
            { question: "Can I change the feature cards?", answer: "The three cards (Components, Design System, Developer DX) and their dot-grid patterns are hardcoded. Clone the component and edit the card content and cardNSpots arrays to customize." },
            { question: "Why does the middle card extend above the others?", answer: "It uses marginTop: -32px and height: calc(100% + 32px) to create the staggered height effect. Adjust these values to change the offset." }
        ],
    },
];
