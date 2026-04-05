import { getCode } from "../getCode";
import { Component } from "../types";

export const timelineComponents: Component[] = [
    {
        id: "timeline-luminous",
        name: "Luminous Path",
        description: "Glowing center beam timeline with scroll progress.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["timeline", "luminous", "glow", "scroll"],
        previewUrl: "/ContentBlocks/Timeline/TimelineLuminous",
        code: {
            tsx: getCode("src/components/ContentBlocks/Timeline/tsx/TimelineLuminous.tsx"),
            jsx: getCode("src/components/ContentBlocks/Timeline/jsx/TimelineLuminous.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/Timeline/TimelineLuminous/page.tsx")
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "items", type: "Array<{year: string, title: string, desc: string, category: string}>", default: "[]", description: "Array of timeline items with year, title, description, and category." },
            { name: "backgroundColor", type: "string", default: "#020617", description: "Background color (hex, rgb, or hsl)." },
            { name: "beamColor", type: "string", default: "#3b82f6", description: "Center beam color." },
            { name: "nodeColor", type: "string", default: "#3b82f6", description: "Timeline node color." },
            { name: "cardBgColor", type: "string", default: "rgba(15, 23, 42, 0.5)", description: "Card background color." },
            { name: "cardBorderColor", type: "string", default: "rgba(255,255,255,0.1)", description: "Card border color." },
            { name: "yearColor", type: "string", default: "#60a5fa", description: "Year text color." },
            { name: "titleColor", type: "string", default: "#ffffff", description: "Title text color." },
            { name: "textColor", type: "string", default: "#94a3b8", description: "Text color." },
        ],
        whenToUse: "Ideal for company history sections, product roadmaps, and Next.js applications that want a high-fidelity, futuristic feel. Use this React component for a vertical timeline with a glowing center beam that tracks the user's scroll progress.",
        bestPractices: "Maintain consistent spacing within your design system by using it on dark or deep navy backgrounds. Follow React best practices by pairing it with clear, monospaced typography for 'Year' indicators. Optimize for performance by using hardware-accelerated transforms for the beam growth.",
        whyMatters: "Luminous paths create a sense of momentum and growth. This production-ready UI component helpsคุณ build an interface that feels atmospheric and structured, guiding the user through your brand's journey with visual precision.",
        faqs: [
            { question: "How does the scroll tracking work?", answer: "The center beam expand vertically as the user scrolls, visually connecting each timeline event while providing elegant feedback on progress." },
            { question: "Can I adjust the beam color?", answer: "Yes, the `beamColor` and `nodeColor` props allow you to set the primary glow color to match your brand's highlight color." },
            { question: "Is the layout responsive?", answer: "Absolutely, on mobile the cards and beam stay centered in a single-column layout that is easy to navigate with one hand." }
        ],
    },
    {
        id: "timeline-brutal",
        name: "Neo-Brutal Scroll",
        description: "Neo-brutal scroll timeline with sticky stack cards.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["timeline", "brutalist", "scroll", "sticky"],
        previewUrl: "/ContentBlocks/Timeline/TimelineBrutal",
        code: {
            tsx: getCode("src/components/ContentBlocks/Timeline/tsx/TimelineBrutal.tsx"),
            jsx: getCode("src/components/ContentBlocks/Timeline/jsx/TimelineBrutal.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/Timeline/TimelineBrutal/page.tsx")
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "items", type: "Array<{year: string, title: string, desc: string, category: string}>", default: "[]", description: "Array of timeline items with year, title, description, and category." },
            { name: "backgroundColor", type: "string", default: "#E0E7FF", description: "Background color (hex, rgb, or hsl)." },
            { name: "borderColor", type: "string", default: "#000000", description: "Border color." },
            { name: "cardBgColor", type: "string", default: "#ffffff", description: "Card background color." },
            { name: "textColor", type: "string", default: "#000000", description: "Text color." },
        ],
        whenToUse: "Perfect for high-energy brands, street-wear e-commerce, and experimental Next.js portfolios. Use this React component for a bold, neo-brutalist timeline with sticky stacking cards that pile onto each other during scroll.",
        bestPractices: "Follow React best practices by pairing this with thick, monospaced typography and saturated primary colors. Maintain scalable component architecture by keeping card content concise. Optimize for performance by using efficient `position: sticky` logic.",
        whyMatters: "Neo-brutalist design is a powerful visual statement of raw power and structural honesty. This production-ready UI component helpsคุณ build an interface that feels solid and unyielding, adding a unique architectural signature to your project's roadmap.",
        faqs: [
            { question: "Do the cards actually stack?", answer: "Yes, each card 'sticks' to the top as the user scrolls, creating a dense, physical-feeling stack of historical events." },
            { question: "Can I customize the borders?", answer: "The component uses signature chunky black borders (`borderColor`), which can be adjusted to match your brand's primary dark color." },
            { question: "What happens on mobile?", answer: "The stacking effect is preserved while adjusting the card scale to ensure readability and smooth vertical scrolling on touch devices." }
        ],
    },
    {
        id: "timeline-sketch",
        name: "Sketchbook",
        description: "Hand-drawn sketchbook timeline with paper texture.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["timeline", "sketch", "hand-drawn", "paper"],
        previewUrl: "/ContentBlocks/Timeline/TimelineSketch",
        code: {
            tsx: getCode("src/components/ContentBlocks/Timeline/tsx/TimelineSketch.tsx"),
            jsx: getCode("src/components/ContentBlocks/Timeline/jsx/TimelineSketch.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/Timeline/TimelineSketch/page.tsx")
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "items", type: "Array<{year: string, title: string, desc: string, category: string}>", default: "[]", description: "Array of timeline items with year, title, description, and category." },
            { name: "backgroundColor", type: "string", default: "#fffdf5", description: "Background color (hex, rgb, or hsl)." },
            { name: "paperTextureColor", type: "string", default: "#444", description: "Paper texture pattern color." },
            { name: "lineColor", type: "string", default: "#333", description: "Timeline line color." },
            { name: "cardBgColor", type: "string", default: "#ffffff", description: "Card background color." },
            { name: "cardBorderColor", type: "string", default: "#1e293b", description: "Card border color." },
            { name: "titleColor", type: "string", default: "#0f172a", description: "Title text color." },
            { name: "textColor", type: "string", default: "#475569", description: "Text color." },
            { name: "yearColor", type: "string", default: "rgba(15, 23, 42, 0.1)", description: "Year text color." },
        ],
        whenToUse: "Ideal for creative labs, educational platforms, and Next.js portfolios that want a playful, hand-crafted aesthetic. Use this React component for a 'sketchbook' timeline with rough lines, paper textures, and large background 'Year' watermarks.",
        bestPractices: "Follow React best practices by pairing this with playful, informal typography. Maintain consistent spacing within your design system by using it on soft cream or paper-textured backgrounds. Optimize for performance by using efficient CSS patterns for the paper texture.",
        whyMatters: "Sketch aesthetics break the digital barrier by adding a human, tactile touch to your company history. This production-ready UI component helpsคุณ build an interface that feels approachable and experimental, improving user engagement through visual novelty.",
        faqs: [
            { question: "Is the paper texture an image?", answer: "No, the texture is created using a lightweight CSS SVG pattern (`paperTextureColor`), ensuring fast load times while maintaining the hand-drawn look." },
            { question: "Can I change the line color?", answer: "Yes, the `lineColor` prop allows you to adjust the 'pencil' or 'ink' color used for the central timeline spine." },
            { question: "What is the watermark effect?", answer: "It places a large, semi-transparent year indicator behind each card to reinforce the 'artist's notebook' layout." }
        ],
    },
    {
        id: "timeline-glass",
        name: "Glass Helix",
        description: "Glass helix timeline with rotating cards.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["timeline", "glass", "helix", "rotating"],
        previewUrl: "/ContentBlocks/Timeline/TimelineGlass",
        code: {
            tsx: getCode("src/components/ContentBlocks/Timeline/tsx/TimelineGlass.tsx"),
            jsx: getCode("src/components/ContentBlocks/Timeline/jsx/TimelineGlass.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/ContentBlocks/Timeline/TimelineGlass/page.tsx")
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "items", type: "Array<{year: string, title: string, desc: string, category: string}>", default: "[]", description: "Array of timeline items with year, title, description, and category." },
            { name: "backgroundColor", type: "string", default: "#0f172a", description: "Background color (hex, rgb, or hsl)." },
            { name: "cardBgColor", type: "string", default: "rgba(255,255,255,0.05)", description: "Card background color." },
            { name: "borderColor", type: "string", default: "rgba(255,255,255,0.1)", description: "Border color." },
            { name: "accentColor", type: "string", default: "#a855f7", description: "Accent color for hover effects." },
        ],
        whenToUse: "Excellent for modern tech brands, AI platforms, and Next.js applications that want a high-fidelity, immersive aesthetic. Use this React component for a glassmorphic timeline where cards rotate and blur into place along a glowing central helix.",
        bestPractices: "Maintain consistent spacing within your design system by using it on dark or textured backgrounds. Follow React best practices by pairing it with high-contrast font colors. Optimize for performance by using hardware-accelerated transforms and `backdrop-filter` sparingly.",
        whyMatters: "Glassmorphic helixes create a sense of depth and technical sophistication. This production-ready UI component helpsคุณ build an interface that feels lightweight and premium, turning a standard timeline into a 3D-feeling experience.",
        faqs: [
            { question: "How is the glass effect made?", answer: "It uses semi-transparent backgrounds and `backdrop-blur` filters to simulate physical frosted glass panes." },
            { question: "Do the cards rotate?", answer: "The cards feature a subtle perspective rotation that shifts as the user scrolls, creating an immersive sense of 3D depth along the timeline." },
            { question: "Is it mobile responsive?", answer: "Yes, the 3D rotations are typically simplified on mobile to ensure legibility while maintaining the premium glass aesthetic." }
        ],
    },
    {
        id: "uilora-scroll-timeline",
        name: "Uilora Scroll",
        description: "Scroll-driven image timeline with parallax and progress indicator.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["timeline", "scroll", "parallax", "image", "dark"],
        previewUrl: "/ContentBlocks/Timeline/UiloraScroll",
        code: {
            tsx: getCode("src/components/ContentBlocks/Timeline/tsx/UiloraScroll.tsx"),
            jsx: getCode("src/components/ContentBlocks/Timeline/jsx/UiloraScroll.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/ContentBlocks/Timeline/UiloraScroll/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "events", type: "Array<{date, title, description, image}>", default: "5 Uilora milestones", description: "Timeline events with images." },
            { name: "title", type: "string", default: "The Uilora Story", description: "Section heading." },
            { name: "subtitle", type: "string", default: "OUR JOURNEY", description: "Tag above heading." },
            { name: "accentColor", type: "string", default: "#5227FF", description: "Progress line and dot accent color." },
        ],
        whenToUse: "Perfect for company about pages, product histories, and portfolios that want a cinematic scroll-driven timeline with large images.",
        bestPractices: "Use high-quality landscape images. Keep to 4-6 events for smooth scroll performance.",
        whyMatters: "Scroll-driven parallax creates a cinematic storytelling experience that holds attention and makes company history feel engaging.",
        faqs: [
            { question: "How does the progress line work?", answer: "It uses framer-motion's useScroll and useTransform to fill a vertical line based on scroll position within the timeline section." },
            { question: "Can I use custom images?", answer: "Yes, each event accepts an image URL. Use high-quality images for the best visual impact." },
        ],
    },
    {
        id: "uilora-horizontal-timeline",
        name: "Uilora Horizontal",
        description: "Horizontal draggable timeline with snap-to behavior.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["timeline", "horizontal", "drag", "interactive"],
        previewUrl: "/ContentBlocks/Timeline/UiloraHorizontal",
        code: {
            tsx: getCode("src/components/ContentBlocks/Timeline/tsx/UiloraHorizontal.tsx"),
            jsx: getCode("src/components/ContentBlocks/Timeline/jsx/UiloraHorizontal.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/ContentBlocks/Timeline/UiloraHorizontal/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "events", type: "Array<{date, title, description, image}>", default: "6 Uilora milestones", description: "Timeline events with thumbnails." },
            { name: "title", type: "string", default: "Our Timeline", description: "Section heading." },
            { name: "subtitle", type: "string", default: "MILESTONES", description: "Tag above heading." },
            { name: "accentColor", type: "string", default: "#5227FF", description: "Active dot and highlight color." },
        ],
        whenToUse: "Great for interactive roadmaps, product launch histories, and portfolios where users want to scrub through time horizontally.",
        bestPractices: "Use 5-8 events for comfortable horizontal browsing. Include thumbnail images for visual variety.",
        whyMatters: "Horizontal timelines break the vertical scroll pattern, creating a unique interactive experience that encourages exploration.",
        faqs: [
            { question: "Is it touch-friendly?", answer: "Yes, the drag interaction works on both mouse and touch devices with momentum scrolling." },
            { question: "Does it work on mobile?", answer: "On mobile it switches to a vertical layout for better usability on narrow screens." },
        ],
    },
    {
        id: "uilora-cards-timeline",
        name: "Uilora Cards",
        description: "Stacked overlapping cards timeline with hover expand.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["timeline", "cards", "stacked", "hover", "expand"],
        previewUrl: "/ContentBlocks/Timeline/UiloraCards",
        code: {
            tsx: getCode("src/components/ContentBlocks/Timeline/tsx/UiloraCards.tsx"),
            jsx: getCode("src/components/ContentBlocks/Timeline/jsx/UiloraCards.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/ContentBlocks/Timeline/UiloraCards/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "events", type: "Array<{date, title, description, image, color}>", default: "5 Uilora milestones", description: "Timeline events with colored borders." },
            { name: "title", type: "string", default: "Our Journey So Far", description: "Section heading." },
            { name: "subtitle", type: "string", default: "Every milestone that shaped Uilora.", description: "Section subtitle." },
            { name: "accentColor", type: "string", default: "#1a1a1a", description: "Header text color." },
        ],
        whenToUse: "Ideal for company histories that want a playful, layered card aesthetic. The stacking creates visual depth without a traditional timeline line.",
        bestPractices: "Use distinct accent colors for each card to create visual rhythm. Keep to 4-6 events for clean stacking.",
        whyMatters: "Stacked cards create a sense of history building on itself — each milestone sits on top of the previous, visually representing growth.",
        faqs: [
            { question: "How does the overlap work?", answer: "Cards use negative top margin to create a deck-like overlap. On mobile, the overlap is removed for clarity." },
            { question: "Can I click to expand?", answer: "Yes, clicking a card expands it with increased padding and a glowing border accent." },
        ],
    },
    {
        id: "uilora-minimal-timeline",
        name: "Uilora Minimal",
        description: "Ultra-minimal editorial timeline with typography-only design.",
        category: "Content Blocks",
        installType: "cli",
        tags: ["timeline", "minimal", "editorial", "typography"],
        previewUrl: "/ContentBlocks/Timeline/UiloraMinimal",
        code: {
            tsx: getCode("src/components/ContentBlocks/Timeline/tsx/UiloraMinimal.tsx"),
            jsx: getCode("src/components/ContentBlocks/Timeline/jsx/UiloraMinimal.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/ContentBlocks/Timeline/UiloraMinimal/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "events", type: "Array<{year, title, description}>", default: "5 Uilora milestones", description: "Timeline events with year and text." },
            { name: "title", type: "string", default: "TIMELINE", description: "Small tag label." },
            { name: "subtitle", type: "string", default: "", description: "Optional subtitle." },
            { name: "accentColor", type: "string", default: "#000000", description: "Title and hover accent color." },
        ],
        whenToUse: "Perfect for luxury brands, editorial portfolios, and minimalist agency sites that want history told through typography alone.",
        bestPractices: "Less is more — keep descriptions to 1-2 sentences. The large year numbers are the visual anchor, let them breathe.",
        whyMatters: "Typography-only design forces clarity and confidence. It says 'we don't need decoration to be impressive' — which is the ultimate premium statement.",
        faqs: [
            { question: "Why no timeline line?", answer: "The design intentionally removes all visual chrome. The large year numbers and horizontal rules provide enough structure." },
            { question: "Can I add images?", answer: "This version is pure typography. For image-rich timelines, use Uilora Scroll or Uilora Cards." },
        ],
    },
];

