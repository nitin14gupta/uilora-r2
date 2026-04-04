import { getCode } from "../getCode";
import { Component } from "../types";

export const featureGridComponents: Component[] = [
    {
        id: "cinematic-grid",
        name: "Cinematic Stack",
        description: "Cinematic scroll-stacked feature grid with sticky cards and smooth transitions.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "cinematic", "sticky", "scroll"],
        previewUrl: "/Grids&Layouts/FeatureGrids/CinematicGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/CinematicGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/CinematicGrid.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/CinematicGrid/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "features", type: "Array<{title: string, desc: string, icon?: React.ReactNode, img?: string}>", default: "[{title: 'Global Edge', desc: 'Latency is a choice. We chose zero.', img: '...'}, ...]", description: "Array of feature items with title, description, optional icon, and optional image." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color (hex, rgb, or hsl)." },
            { name: "stickyTop", type: "string", default: "top-24", description: "Sticky positioning class (Tailwind class)." },
        ],
        whenToUse: "Perfect for landing pages with deep narrative-driven features, product launch sites, and Next.js portfolios that want a cinematic 'Stacked' aesthetic. Use this grid to guide users through complex feature sets with a sense of layered momentum.",
        bestPractices: "Maintain scalable component architecture by using high-fidelity imagery for each stack item. Follow React best practices by managed the sticky-positioning Z-index. Optimize for performance by using efficient image loading patterns for the background layers.",
        whyMatters: "Stacked scroll sequences communicate digital power, depth, and structural complexity. This production-ready UI template helpsคุณ build an interface that feels architectural and premium, leaving a lasting impression on technical stakeholders.",
        faqs: [
            { question: "How does the 'Stack' work?", answer: "The component uses sticky positioning combined with Framer Motion scroll-offsets to 'lock' cards as the user scrolls, creating a physical stacking effect." },
            { question: "Can I use videos?", answer: "Absolutely, each card is a container that supports high-fidelity video backgrounds or cinematic static textures for the feature reveal." },
            { question: "Is it mobile responsive?", answer: "Yes, the stacking depth and sticky offsets scale dynamically for mobile, Ensuring the cinematic narrative remains impactful on small screens." }
        ],
    },
    {
        id: "bento-grid",
        name: "Cyber Bento",
        description: "Cyberpunk-inspired bento feature grid with glitch effects.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "bento", "cyber", "glitch"],
        previewUrl: "/Grids&Layouts/FeatureGrids/BentoGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/BentoGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/BentoGrid.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/BentoGrid/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "features", type: "Array<{title: string, desc: string, icon?: React.ReactNode, img?: string}>", default: "[{title: 'Global Edge', desc: 'Latency is a choice. We chose zero.', icon: Activity}, ...]", description: "Array of feature items with title, description, optional icon, and optional image." },
            { name: "backgroundColor", type: "string", default: "#0a0a0a", description: "Background color (hex, rgb, or hsl)." },
            { name: "mainCardTitle", type: "string", default: "Neural Engine", description: "Main card title text." },
            { name: "mainCardStatus", type: "string", default: "ACTIVE", description: "Main card status text." },
            { name: "mainCardSubtitle", type: "string", default: "Processing matrix loaded.", description: "Main card subtitle text." },
            { name: "analyticsValue", type: "string", default: "99.9%", description: "Analytics card value display." },
            { name: "analyticsLabel", type: "string", default: "Uptime", description: "Analytics card label text." },
            { name: "networkValue", type: "string", default: "240ms", description: "Network card value display." },
            { name: "networkLabel", type: "string", default: "Latency", description: "Network card label text." },
            { name: "latencyValue", type: "string", default: "12ms", description: "Latency value display." },
            { name: "regionsValue", type: "string", default: "42", description: "Regions count display." },
            { name: "throughputValue", type: "string", default: "2.4TB/s", description: "Throughput value display." },
            { name: "deployText", type: "string", default: "Deploy", description: "Deploy button text." },
        ],
        whenToUse: "Ideal for technical SaaS, crypto-platforms, and Next.js applications that want a high-octane 'Cyber Bento' aesthetic. Use this layout to communicate digital speed, security, and technical authority through neon accents and data-rich grid modules.",
        bestPractices: "Maintain consistent spacing within your design system by pairing this with sharp, technical typography. Follow React best practices by using pure CSS for the glitch-effect cycles. Optimize for performance by managed the amount of glowing UI layers.",
        whyMatters: "Cyberpunk-based bento layouts communicate technical complexity, power, and digital craft. This production-ready UI template helpsคุณ build an interface that feels advanced and technical, adding a unique 'Matrix' signature to your brand.",
        faqs: [
            { question: "What are the effects?", answer: "The component features localized glitched text, flickering status badges, and technical grid scanlines to simulate a high-fidelity technical mainframe." },
            { question: "Is the data real?", answer: "The metrics are configurable props, allowing you to feed in real Uptime, Latency, and Throughput values from your system API." },
            { question: "Can I adjust the colors?", answer: "While optimized for the 'Cyber' (neutral-950) palette, the component supports custom accent hues for highlights and CTAs." }
        ],
    },
    {
        id: "elastic-grid",
        name: "Elastic Expansion",
        description: "Elastic expanding feature grid with smooth morphing animations.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "elastic", "expansion", "morph"],
        previewUrl: "/Grids&Layouts/FeatureGrids/ElasticGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/ElasticGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/ElasticGrid.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/ElasticGrid/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "features", type: "Array<{title: string, desc: string, icon?: React.ReactNode, img?: string}>", default: "[{title: 'Global Edge', desc: 'Latency is a choice. We chose zero.', img: '...'}, ...]", description: "Array of feature items with title, description, optional icon, and optional image." },
            { name: "backgroundColor", type: "string", default: "#f5f5f5", description: "Background color (hex, rgb, or hsl)." },
            { name: "buttonText", type: "string", default: "Explore Capability", description: "Button text for expanded cards." },
        ],
        whenToUse: "Excellent for creative agencies, interactive showrooms, and Next.js applications that want a smooth 'Elastic' aesthetic. Use this feature grid for an engaging experience where cards expand and contract with organic, morphing Framer Motion transitions.",
        bestPractices: "Maintain scalable component architecture by keeping the grid items centered. Follow React best practices by managed the layout-id for the 'Shared Element' transition. Optimize for performance by using efficient Tailwind col-spans.",
        whyMatters: "Elastic animations communicate digital excellence, playfulness, and digital craft. This production-ready UI template helpsคุณ build an interface that feels responsive and alive, adding a unique architectural signature to your brand interaction.",
        faqs: [
            { question: "How does the expand work?", answer: "The component uses Framer Motion's `layoutId` to animate the transition between the small grid card and the full-page expanded view seamlessly." },
            { question: "Is it morphing?", answer: "Yes, the cards 'stretch' and 'morph' their dimensions based on organic spring physics, creating a high-fidelity tactile feel." },
            { question: "Does it support images?", answer: "Absolutely, each feature item can include a background image that reveals itself during the expansion sequence." }
        ],
    },
    {
        id: "glass-prism-grid",
        name: "Glass Prism",
        description: "Glassmorphic prism feature grid with light refraction effects.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "glass", "prism", "refraction"],
        previewUrl: "/Grids&Layouts/FeatureGrids/GlassPrismGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/GlassPrismGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/GlassPrismGrid.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/GlassPrismGrid/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "features", type: "Array<{title: string, desc: string, icon?: React.ReactNode, img?: string}>", default: "[{title: 'Global Edge', desc: 'Latency is a choice. We chose zero.', img: '...'}, ...]", description: "Array of feature items with title, description, optional icon, and optional image." },
            { name: "backgroundColor", type: "string", default: "#0a0a0a", description: "Background color (hex, rgb, or hsl)." },
            { name: "accentColor", type: "string", default: "cyan", description: "Accent color theme: 'cyan', 'purple', 'blue', 'green', or 'pink'." },
        ],
        whenToUse: "Ideal for high-end digital agencies, award-winning portfolios, and Next.js platforms that want a premium 'Glass Prism' aesthetic. Use this feature grid for an immersive experience with glassmorphism, blur effects, and light refraction cues.",
        bestPractices: "Follow React best practices by pairing this with high-contrast, bold imagery. Maintain consistent spacing within your design system by keeping the grid gaps uniform. Optimize for performance by managed the amount of blur renders.",
        whyMatters: "Glass prism aesthetics communicate digital excellence, sophistication, and high-end craft. This production-ready UI template helpsคุณ build an interface that feels curated and premium, leaving a lasting visual impression on high-value clients.",
        faqs: [
            { question: "What is 'Glass Prism'?", answer: "The component uses localized CSS backdrops and gradient borders to simulate the refraction and depth found in high-fidelity glass surfaces." },
            { question: "Can I adjust the glow?", answer: "Yes, the `accentColor` (default Cyan) is used for the primary refractive highlights and glows within the grid modules." },
            { question: "Is it mobile responsive?", answer: "The glass cards adapt their spans for mobile, ensuring the 'Refractive' narrative remains impactful and legible on small screens." }
        ],
    },
    {
        id: "brutalist-grida",
        name: "Brutalist Archive",
        description: "Brutalist feature grid with bold typography and stark contrasts.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "brutalist", "bold", "typography"],
        previewUrl: "/Grids&Layouts/FeatureGrids/BrutalistGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/BrutalistGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/BrutalistGrid.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/BrutalistGrid/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "features", type: "Array<{title: string, desc: string, icon?: React.ReactNode, img?: string}>", default: "[{title: 'Global Edge', desc: 'Latency is a choice. We chose zero.', img: '...'}, ...]", description: "Array of feature items with title, description, optional icon, and optional image." },
            { name: "backgroundColor", type: "string", default: "#EBEBEB", description: "Background color (hex, rgb, or hsl)." },
            { name: "hoverColor", type: "string", default: "#FF3333", description: "Hover state color (hex, rgb, or hsl)." },
            { name: "borderColor", type: "string", default: "#000000", description: "Border color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Perfect for edgy brands, experimental studios, and Next.js portfolios that want a dramatic 'Brutalist' aesthetic. Use this feature archive for a high-intensity experience with bold typography and high-contrast 'Raw' design elements.",
        bestPractices: "Maintain consistent spacing within your design system by using it for aggressive brand storytelling. Follow React best practices by pairing it with bold, technical typography. Optimize for performance by using efficient hover transforms.",
        whyMatters: "Brutalist aesthetics communicate power, mystery, and structural honesty. This production-ready UI template helpsคุณ build an interface that feels authoritative and solid, breaking the 'standard' web layout rules.",
        faqs: [
            { question: "Why is it 'Archive'?", answer: "The grid is designed with an indexing feel (01, 02) to simulate a technical feature repository or architectural project archive." },
            { question: "Is the hover color editable?", answer: "Yes, the primary hover state (default Red) can be customized to match your brand's specific high-intensity accent palette." },
            { question: "How does the alignment work?", answer: "It uses a rigid asymmetric grid system that ensures perfect alignment while maintaining that intentionally uncomfortable brutalist tension." }
        ],
    },
    {
        id: "minimal-grid",
        name: "Ethereal Minimal",
        description: "Minimalist feature grid with ethereal aesthetics and subtle animations.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "minimal", "ethereal", "subtle"],
        previewUrl: "/Grids&Layouts/FeatureGrids/MinimalGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/MinimalGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/MinimalGrid.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/MinimalGrid/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "features", type: "Array<{title: string, desc: string, icon?: React.ReactNode, img?: string}>", default: "[{title: 'Global Edge', desc: 'Latency is a choice. We chose zero.', img: '...'}, ...]", description: "Array of feature items with title, description, optional icon, and optional image." },
            { name: "backgroundColor", type: "string", default: "#ffffff", description: "Background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for wellness apps, lifestyle brands, and Next.js platforms that want an 'Ethereal' aesthetic. Use this minimalist grid to communicate objective clarity, tranquility, and structural honesty through subtle animations and void spaces.",
        bestPractices: "Maintain consistent spacing within your design system by adhering to the rigid 8px grid. Follow React best practices by using pure Tailwind for the layout structure. Optimize for performance by using systematic typography scales.",
        whyMatters: "Minimalist aesthetics communicate technical reliability, clarity, and timeless craft. This production-ready UI template helpsคุณ build an interface that feels organized and professional, reflecting a brand identity rooted in design purity.",
        faqs: [
            { question: "Is it pure CSS?", answer: "The grid core is built with pure Tailwind, ensuring high performance while the ethereal fade-ins are orchestrated by lightweight Framer Motion variants." },
            { question: "Can I use color images?", answer: "While optimized for high-contrast, moody photography, you can apply any visual assets to the main image container." },
            { question: "What is 'Ethereal'?", answer: "The layout features subtle staggering and soft-entry animations that create a peaceful, slightly spatial feel during user interactions." }
        ],
    },
    {
        id: "blueprint-grid",
        name: "Tech Blueprint",
        description: "Technical blueprint-style feature grid with engineering aesthetics.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "blueprint", "tech", "engineering"],
        previewUrl: "/Grids&Layouts/FeatureGrids/BlueprintGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/BlueprintGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/BlueprintGrid.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/BlueprintGrid/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "features", type: "Array<{title: string, desc: string, icon?: React.ReactNode, img?: string}>", default: "[{title: 'Global Edge', desc: 'Latency is a choice. We chose zero.', img: '...'}, ...]", description: "Array of feature items with title, description, optional icon, and optional image." },
            { name: "backgroundColor", type: "string", default: "#0f172a", description: "Background color (hex, rgb, or hsl)." },
            { name: "gridColor", type: "string", default: "#1e293b", description: "Grid pattern color (hex, rgb, or hsl)." },
            { name: "borderColor", type: "string", default: "#3b82f6", description: "Border and accent color (hex, rgb, or hsl)." },
            { name: "commandText", type: "string", default: "EXECUTE_PROTOCOL", description: "Command text displayed in scanning line." },
        ],
        whenToUse: "Excellent for technical command centers, cybersecurity platforms, and Next.js applications that want a high-tech 'Blueprint' aesthetic. Use this layout to communicate digital speed, encryption, and system power through technical grids and scanning UI lines.",
        bestPractices: "Maintain scalable component architecture by pairing this with sharp, technical typography. Follow React best practices by using Framer Motion for the scanning line animations. Optimize for performance by managed the grid pattern renders.",
        whyMatters: "Blueprint-based aesthetics communicate technical authority, sophistication, and digital craft. This production-ready UI template helpsคุณ build an interface that feels technical and high-end, adding a unique 'Engineering' signature to your brand.",
        faqs: [
            { question: "What is the 'Scanning Line'?", answer: "The component features a vertical scanning beam that moves across the grid modules, simulating a real-time data inspection sequence." },
            { question: "Can I adjust the grid?", answer: "Yes, both the `gridColor` and primary `borderColor` can be customized to create 'Industrial' or 'Cyber' blueprint effects." },
            { question: "Is the command text real?", answer: "Absolutely, you can configure the terminal string (default: EXECUTE_PROTOCOL) to match your project's specific terminology." }
        ],
    },
    {
        id: "uilora-spotlight-grid",
        name: "Focus Spotlight",
        description: "Spotlight-focused feature grid with dynamic lighting effects.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "spotlight", "lighting", "focus"],
        previewUrl: "/Grids&Layouts/FeatureGrids/SpotlightGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/SpotlightGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/SpotlightGrid.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/SpotlightGrid/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "features", type: "Array<{title: string, desc: string, icon?: React.ReactNode, img?: string}>", default: "[{title: 'Global Edge', desc: 'Latency is a choice. We chose zero.', img: '...'}, ...]", description: "Array of feature items with title, description, optional icon, and optional image." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color (hex, rgb, or hsl)." },
            { name: "hoverGradientFrom", type: "string", default: "purple-900", description: "Hover gradient start color (Tailwind color name)." },
            { name: "hoverGradientTo", type: "string", default: "blue-900", description: "Hover gradient end color (Tailwind color name)." },
        ],
        whenToUse: "Excellent for tech labs, high-fidelity landing pages, and Next.js applications that want a dramatic 'Focus Spotlight' aesthetic. Use this feature reveal for an immersive experience where modules light up and 'activate' based on cursor movement.",
        bestPractices: "Follow React best practices by pairing this with dark-themed hero backgrounds. Maintain scalable component architecture by keeping the light intensity balanced. Optimize for performance by managed the gradient renders.",
        whyMatters: "Spotlight-based aesthetics communicate technical depth, focus, and digital power. This production-ready UI template helpsคุณ build an interface that feels advanced and high-end, adding a distinct 'Cinematic' signature to your brand.",
        faqs: [
            { question: "How does the 'Spotlight' work?", answer: "The component tracks the cursor to localized gradient coordinates, creating a physical light beam that follows the user's focus across the grid." },
            { question: "Can I change the glow?", answer: "Yes, the hover gradients (default Purple/Blue) can be tuned to create 'Emerald', 'Amber', or 'Cyber' lighting effects." },
            { question: "Does it work on phone?", answer: "The light beam responds to touch-move events, though it's most impactful as a mouse-driven interactive element on desktop." }
        ],
    },
    {
        id: "grid-scatter-deck",
        name: "Scatter Deck",
        description: "Scattered card deck feature grid with random positioning.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "scatter", "deck", "random"],
        previewUrl: "/Grids&Layouts/FeatureGrids/GridScatterDeck",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/GridScatterDeck.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/GridScatterDeck.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/GridScatterDeck/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "cards", type: "Array<{title: string, color: string, rotate: number, z: number}>", default: "[{title: 'Motion', color: 'bg-[#ff4d4d]', rotate: -5, z: 10}, ...]", description: "Array of card objects with title, color (Tailwind class), rotation angle, and z-index." },
            { name: "backgroundColor", type: "string", default: "#e5e5e5", description: "Background color (hex, rgb, or hsl)." },
            { name: "gridSize", type: "number", default: "400", description: "Grid size in pixels for positioning." },
            { name: "dragText", type: "string", default: "Drag Me", description: "Text displayed on draggable cards." },
            { name: "backgroundText", type: "string", default: "SCATTER", description: "Background text pattern." },
        ],
        whenToUse: "Ideal for creative studios, experimental art projects, and Next.js portfolios that want an interactive 'Scatter Deck' aesthetic. Use this feature layout for an Engaging experience where cards can be 'Thrown' and 'Dragged' across a physical canvas.",
        bestPractices: "Maintain scalable component architecture by keeping the card count balanced. Follow React best practices by using Framer Motion for the drag-physics. Optimize for performance by managed the background text pattern repeats.",
        whyMatters: "Draggable card decks create a sense of direct engagement and playfulness. This production-ready UI template helpsคุณ build an interface that feels tactile and unique, turning static features into items for digital manipulation.",
        faqs: [
            { question: "Is it really draggable?", answer: "Yes, each card features full Framer Motion drag functionality with physics-based momentum (constraints: true) for a realistic physical feel." },
            { question: "Can I adjust the rotation?", answer: "Absolutely, each card's specific rotation and z-index can be configured in the data array to create the perfect 'Scattered' layout look." },
            { question: "Does it work on mobile?", answer: "Yes, it supports standard touch-drag events, allowing mobile users to 'flick' cards across the screen with their fingers." }
        ],
    },
    {
        id: "grid-kinetic",
        name: "Kinetic Type",
        description: "Kinetic typography feature grid with animated text effects.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "kinetic", "typography", "animated"],
        previewUrl: "/Grids&Layouts/FeatureGrids/GridKinetic",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/GridKinetic.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/GridKinetic.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/GridKinetic/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "features", type: "Array<{title: string, desc: string, icon?: React.ReactNode, img?: string}>", default: "[{title: 'Global Edge', desc: 'Latency is a choice. We chose zero.', img: '...'}, ...]", description: "Array of feature items with title, description, optional icon, and optional image." },
            { name: "backgroundColor", type: "string", default: "#ffffff", description: "Background color (hex, rgb, or hsl)." },
            { name: "repeatCount", type: "number", default: "8", description: "Number of times to repeat text in marquee." },
        ],
        whenToUse: "Perfect for typography-heavy brands, selective agencies, and Next.js applications that want an energetic 'Kinetic Type' aesthetic. Use this feature grid to communicate movement, confidence, and digital craft through technical marquees.",
        bestPractices: "Follow React best practices by pairing this with bold, professional typography. Maintain consistent spacing within your design system by keeping the marquee speed uniform. Optimize for performance by managed the text-repeat multiplier.",
        whyMatters: "Kinetic typography aesthetics communicate energy, flow, and digital momentum. This production-ready UI template helpsคุณ build an interface that feels alive and energetic, adding a distinct 'Moving' signature to your brand.",
        faqs: [
            { question: "Is the marquee editable?", answer: "Absolutely, both the primary feature text and the background repeat strings can be customized for your project's specific terminology." },
            { question: "Can I adjust the speed?", answer: "The marquee frequency is hard-coded for high-fidelity impact but can be adjusted in the internal Framer Motion motion controller." },
            { question: "Does it support icons?", answer: "Yes, each feature item includes a localized icon placeholder that stays fixed relative to the kinetic text flow for structural clarity." }
        ],
    },
    {
        id: "grid-liquid",
        name: "Liquid Magma",
        description: "Liquid magma feature grid with flowing animations and heat effects.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "liquid", "magma", "flowing"],
        previewUrl: "/Grids&Layouts/FeatureGrids/GridLiquid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/GridLiquid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/GridLiquid.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/GridLiquid/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "itemCount", type: "number", default: "8", description: "Number of liquid blob items to display." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color (hex, rgb, or hsl)." },
            { name: "gradientFrom", type: "string", default: "#6366f1", description: "Gradient start color (hex, rgb, or hsl)." },
            { name: "gradientTo", type: "string", default: "#9333ea", description: "Gradient end color (hex, rgb, or hsl)." },
            { name: "hoverGradientFrom", type: "string", default: "#f97316", description: "Hover gradient start color (hex, rgb, or hsl)." },
            { name: "hoverGradientTo", type: "string", default: "#ec4899", description: "Hover gradient end color (hex, rgb, or hsl)." },
            { name: "itemPrefix", type: "string", default: "Fluidity", description: "Prefix text for item labels." },
        ],
        whenToUse: "Excellent for high-end digital agencies, 3D labs, and Next.js platforms that want an immersive 'Liquid Magma' aesthetic. Use this feature grid for a tactile experience with organic blob animations and heat-gradient effects.",
        bestPractices: "Maintain scalable component architecture by keeping the blob count balanced. Follow React best practices by using Framer Motion for the fluid advection renders. Optimize for performance by managed the gradient intensity.",
        whyMatters: "Organic liquid aesthetics communicate digital complexity, flow, and digital craft. This production-ready UI template helpsคุณ build an interface that feels advanced and 'Breathing', adding a unique 'Magma' signature to your project.",
        faqs: [
            { question: "How were the blobs made?", answer: "The component uses localized SVG filters and Framer Motion spring physics to simulate organic 'Metaballs' that merge and split smoothly." },
            { question: "Can I change the magma colors?", answer: "Absolutely, the primary gradients (default Indigo/Purple) and the hover heat-gradients can be customized to create 'Toxic' or 'Nebula' effects." },
            { question: "Does it work on phone?", answer: "The SVG filters and motion paths are optimized for mobile, ensuring the 'Fluidity' remains consistent on high-density mobile screens." }
        ],
    },
    {
        id: "grid-bento-vault",
        name: "Bento Vault",
        description: "Vault-style bento feature grid with secure aesthetics.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "bento", "vault", "secure"],
        previewUrl: "/Grids&Layouts/FeatureGrids/GridBentoVault",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/GridBentoVault.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/GridBentoVault.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/GridBentoVault/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "items", type: "Array<{id: number, col: string, row: string, title: string, icon: React.ComponentType}>", default: "[{id: 1, col: 'md:col-span-2', row: 'md:row-span-2', title: 'Mainframe', icon: Fingerprint}, ...]", description: "Array of grid items with id, column span, row span, title, and icon component." },
            { name: "backgroundColor", type: "string", default: "#18181b", description: "Background color (hex, rgb, or hsl)." },
            { name: "borderColor", type: "string", default: "#27272a", description: "Border color (hex, rgb, or hsl)." },
            { name: "closeText", type: "string", default: "Close", description: "Close button text." },
        ],
        whenToUse: "Ideal for technical dashboards, AI processing platforms, and Next.js applications that want a high-tech 'Bento Vault' aesthetic. Use this layout to communicate power, security, and digital intelligence through dark themes and architectural grid modules.",
        bestPractices: "Maintain scalable component architecture by pairing this with sharp, technical typography. Follow React best practices by using Framer Motion for the module expansion. Optimize for performance by managed the border pattern renders.",
        whyMatters: "Bento-based vault layouts communicate technical authority, sophistication, and digital craft. This production-ready UI template helpsคุณ build an interface that feels organized and high-end, adding a unique 'Safe' signature to your brand.",
        faqs: [
            { question: "Is the 'Vault' really secure?", answer: "The grid is designed with a technical 'Fingerprint' and architectural aesthetic to simulate a high-security technical repository for your project details." },
            { question: "Can I adjust the grid?", answer: "Yes, both the col-spans and primary background colors can be adjusted to create 'Industrial' or 'Cyber' vault effects." },
            { question: "Is the close button real?", answer: "Absolutely, it's designed to manage the expanded state of individual grid modules during user inspection." }
        ],
    },
    {
        id: "grid-parallax-slice",
        name: "Parallax Slice",
        description: "Parallax sliced feature grid with depth and movement.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "parallax", "slice", "depth"],
        previewUrl: "/Grids&Layouts/FeatureGrids/GridParallaxSlice",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/GridParallaxSlice.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/GridParallaxSlice.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/GridParallaxSlice/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "columns", type: "Array<Array<{image: string, alt: string, hoverText?: string}>>", default: "[[{image: '...', alt: 'Architecture 1'}, ...], ...]", description: "2D array of column items, each containing image URL, alt text, and optional hover text." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color (hex, rgb, or hsl)." },
            { name: "title", type: "string", default: "ARCHITECTURE", description: "Title text displayed above columns." },
            { name: "subtitle", type: "string", default: "Exploring spatial relationships", description: "Subtitle text displayed above columns." },
        ],
        whenToUse: "Excellent for architectural portfolios, lifestyle brands, and Next.js applications that want a dramatic 'Parallax Slice' aesthetic. Use this feature grid to communicate spatial depth, innovation, and digital power through technical columns and movement.",
        bestPractices: "Follow React best practices by pairing this with high-contrast, professional photography. Maintain scalable component architecture by keeping the column counts deep. Optimize for performance by managed the scroll-trigger renders.",
        whyMatters: "Parallax-based slice aesthetics communicate spatial authority, sophistication, and digital craft. This production-ready UI template helpsคุณ build an interface that feels architectural and high-end, adding a unique 'Depth' signature to your project.",
        faqs: [
            { question: "How does the 'Slice' work?", answer: "The component uses localized column groups that move at varying parallax speeds during scroll, creating an 'Immersive' physical depth effect." },
            { question: "Can I adjust the speed?", answer: "The parallax frequency is hard-coded for cinematic impact but can be tuned in the internal Framer Motion motion controller." },
            { question: "Are colors editable?", answer: "Absolutely, both the primary background and specific text colors can be tuned to match your brand's specific color palette." }
        ],
    },
    {
        id: "grid-cursor-lens",
        name: "Cursor Lens",
        description: "Cursor lens feature grid with magnifying glass effects.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "cursor", "lens", "magnify"],
        previewUrl: "/Grids&Layouts/FeatureGrids/GridCursorLens",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/GridCursorLens.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/GridCursorLens.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/GridCursorLens/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "features", type: "Array<{title: string, description: string}>", default: "[{title: 'Vision', description: 'Seeing beyond the visible spectrum.'}, ...]", description: "Array of feature items with title and description." },
            { name: "backgroundColor", type: "string", default: "#f5f5f4", description: "Background color (hex, rgb, or hsl)." },
            { name: "lensColor", type: "string", default: "#f97316", description: "Lens reveal color (hex, rgb, or hsl)." },
            { name: "gridText", type: "string", default: "Create", description: "Text to repeat in background grid." },
            { name: "gridTextCount", type: "number", default: "100", description: "Number of times to repeat grid text." },
        ],
        whenToUse: "Ideal for creative studios, experimental art projects, and Next.js portfolios that want an interactive 'Cursor Lens' aesthetic. Use this feature grid for an Engaging experience where modules light up and 'activate' based on cursor movement.",
        bestPractices: "Maintain scalable component architecture by keeping the grid items centered. Follow React best practices by using Framer Motion for the lens reveal. Optimize for performance by managed the background text pattern repeats.",
        whyMatters: "Interactive lens triggers create a sense of direct engagement and playfulness. This production-ready UI template helpsคุณ build an interface that feels responsive and unique, turning a standard cursor into a tool for visual discovery.",
        faqs: [
            { question: "How does the 'Lens' work?", answer: "The component tracks the cursor to localized mask coordinates, creating a physical 'Spotlight' lens that follows the user across the feature grid." },
            { question: "Can I adjust the colors?", answer: "Yes, both the background and the primary lens-reveal color can be customized to match your project's specific brand theme." },
            { question: "Does it work with touch?", answer: "The lens responds to touch-move events, though it's most impactful as a mouse-driven cursor magnifying glass for high-fidelity desktop browsing." }
        ],
    },
    {
        id: "grid-elastic-tape",
        name: "Elastic Tape",
        description: "Elastic tape feature grid with stretchy animations.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["feature", "elastic", "tape", "stretchy"],
        previewUrl: "/Grids&Layouts/FeatureGrids/GridElasticTape",
        code: {
            tsx: getCode("src/components/Grids&Layouts/FeatureGrids/tsx/GridElasticTape.tsx"),
            jsx: getCode("src/components/Grids&Layouts/FeatureGrids/jsx/GridElasticTape.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/FeatureGrids/GridElasticTape/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "items", type: "Array<{image: string, title: string, subtitle: string, description: string}>", default: "[{image: '...', title: 'Section', subtitle: '1', description: 'Drag to interact. Scroll to seek.'}, ...]", description: "Array of tape items with image URL, title, subtitle, and description." },
            { name: "backgroundColor", type: "string", default: "#facc15", description: "Background color (hex, rgb, or hsl)." },
            { name: "tapeColor", type: "string", default: "#000000", description: "Tape border and text color (hex, rgb, or hsl)." },
            { name: "warningText", type: "string", default: "WARNING: HEAVY LOAD // ", description: "Warning text to repeat on tape." },
            { name: "scrollText", type: "string", default: "SCROLL TO SEEK", description: "Scroll instruction text." },
        ],
        whenToUse: "Perfect for edgy brands, experimental studios, and Next.js portfolios that want an organic 'Elastic Tape' aesthetic. Use this feature layout for an Engaging experience where content feels 'Mailed' and 'Tethered' by physical hazard tape.",
        bestPractices: "Maintain scalable component architecture by keeping the tape colors consistent with your primary palette. Follow React best practices by pairing this with bold, technical typography. Optimize for performance by using efficient physics-lerp calculations.",
        whyMatters: "Tape-based physics animations create a sense of digital 'Authenticity' and human touch. This production-ready UI template helpsคุณ build an interface that feels alive and 'Drafted', adding a unique signatures to your brand structure.",
        faqs: [
            { question: "Is the 'Tape' real?", answer: "The component features localized hazard-tape borders and warning-repeat marquees to simulate a high-fidelity physical tape wrap." },
            { question: "Are colors editable?", answer: "Absolutely, you can change both the `backgroundColor` (default yellow) and `tapeColor` (default black) to create 'Police-Tape' or 'Industrial' effects." },
            { question: "How does the 'Seek' work?", answer: "The component uses horizontal scroll-sync combined with spring physics, allowing the user to 'Seek' across the feature timeline with organic momentum." }
        ],
    },
];

