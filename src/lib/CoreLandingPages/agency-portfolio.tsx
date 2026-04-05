import { getCode } from "../getCode";
import { Component } from "../types";

// All agency portfolio components from the library
// Total: 21 components

export const agencyPortfolioComponents: Component[] = [
    {
        id: "arcadeos",
        name: "Arcade OS",
        description: "Retro arcade-inspired portfolio with gaming aesthetics and pixel-perfect design.",
        category: "Core Landing Pages",
        tags: ["arcade", "retro", "gaming", "pixel"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/ARCADEOS",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/ARCADEOS.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/ARCADEOS.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/ARCADEOS/page.tsx"),
        },
        dependencies: ["next", "framer-motion", "recharts"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#f43f5e",
                description: "Primary accent color for buttons and highlights (hex, rgb, or hsl).",
            },
            {
                name: "secondaryColor",
                type: "string",
                default: "#433c57",
                description: "Secondary color for borders and backgrounds.",
            },
            {
                name: "accentColor",
                type: "string",
                default: "#facc15",
                description: "Accent color for highlights and special elements.",
            },
            {
                name: "companyName",
                type: "string",
                default: "ARCADE.OS",
                description: "Your company or portfolio name displayed in the header.",
            },
            {
                name: "score",
                type: "string",
                default: "$84,230",
                description: "Revenue or score value displayed in the header.",
            },
            {
                name: "coins",
                type: "number",
                default: "420",
                description: "Coins or cash value displayed in the header.",
            },
            {
                name: "enableCRTEffect",
                type: "boolean",
                default: "true",
                description: "Enable CRT scanline effect for retro aesthetic.",
            },
            {
                name: "animationSpeed",
                type: "number",
                default: "1",
                description: "Animation speed multiplier (higher = faster).",
            },
        ],
        whenToUse: "Perfect for game developers, creative studios, and Next.js portfolios that want a high-energy, nostalgic 'Arcade' aesthetic. Use this full-page template for an immersive experience with pixel-perfect design and retro gaming UI elements.",
        bestPractices: "Maintain consistent spacing within your design system by pairing this with 8-bit or pixelated typography. Follow React best practices by managed the Recharts data lifecycle for the 'High Score' sections. Optimize for performance by using efficient CSS scanline filters.",
        whyMatters: "Arcade aesthetics tap into deep nostalgia and playful engagement. This production-ready UI template helpsคุณ build an interface that feels energetic and unique, turning a standard portfolio into a playable brand journey.",
        faqs: [
            { question: "Is the CRT effect optional?", answer: "Yes, the `enableCRTEffect` prop allows you to toggle the scanlines and visual distortion for a cleaner, modern pixel-art look." },
            { question: "Can I use it for SaaS?", answer: "While gaming-focused, its 'High Score' and 'Level' metaphors work exceptionally well for fintech or productivity dashboards that want a gamified feel." },
            { question: "Are the charts functional?", answer: "Yes, the component integrates Recharts to show real-time or static project data with a stylized arcade theme." }
        ],
    },
    {
        id: "aurora-command",
        name: "Aurora Command",
        description: "Futuristic portfolio with aurora effects and command center aesthetics.",
        category: "Core Landing Pages",
        tags: ["aurora", "futuristic", "command", "glow"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/AuroraCommand",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/AuroraCommand.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/AuroraCommand.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/AuroraCommand/page.tsx"),
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#00f0ff",
                description: "Primary neon color for aurora effects and highlights.",
            },
            {
                name: "secondaryColor",
                type: "string",
                default: "#ff0055",
                description: "Secondary neon color for contrast and depth.",
            },
            {
                name: "glowIntensity",
                type: "number",
                default: "1",
                description: "Intensity of glow effects (0-2).",
            },
            {
                name: "animationSpeed",
                type: "number",
                default: "1",
                description: "Speed of aurora animations (0.5-2).",
            },
            {
                name: "darkMode",
                type: "boolean",
                default: "true",
                description: "Enable dark mode background.",
            },
        ],
        whenToUse: "Ideal for deep-tech brands, cybersecurity firms, and Next.js landing pages that want a futuristic 'Command Center' aesthetic. Use this template for a high-fidelity experience with vibrant aurora glows and technical data displays.",
        bestPractices: "Maintain scalable component architecture by keeping text high-contrast against the glowing backgrounds. Follow React best practices by using Framer Motion for the aurora fluidity. Optimize for performance by managed the blur-heavy background elements.",
        whyMatters: "Aurora aesthetics create a sense of advanced intelligence and technical scale. This production-ready UI template helpsคุณ build an interface that feels atmospheric and high-end, improving the perceived authority of your tech brand.",
        faqs: [
            { question: "How is the aurora made?", answer: "It uses layered, semi-transparent gradients with extreme blur and CSS animations to simulate the shifting lights of the northern sky." },
            { question: "Can I change the neon colors?", answer: "Yes, the `primaryColor` and `secondaryColor` props allow you to set the 'Aurora' palette to match your brand's specific neon theme." },
            { question: "Does it work in light mode?", answer: "The template features a `darkMode` prop to toggle the background, but the aurora effects are most impactful on deep indigo or black bases." }
        ],
    },
    {
        id: "black-box",
        name: "Black Box",
        description: "Minimalist dark portfolio with mysterious black box design elements.",
        category: "Core Landing Pages",
        tags: ["black", "minimal", "dark", "mysterious"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/BlackBox",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/BlackBox.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/BlackBox.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/BlackBox/page.tsx"),
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "accentColor",
                type: "string",
                default: "#ffffff",
                description: "Accent color for highlights and borders (typically white or light color).",
            },
            {
                name: "glowColor",
                type: "string",
                default: "#3b82f6",
                description: "Glow effect color for interactive elements.",
            },
            {
                name: "enableGlow",
                type: "boolean",
                default: "true",
                description: "Enable glow effects on hover and focus.",
            },
            {
                name: "borderWidth",
                type: "string",
                default: "2px",
                description: "Border width for black box elements.",
            },
        ],
        whenToUse: "Excellent for luxury fashion, mysterious brand launches, and Next.js portfolios that want a minimalist 'Obsidian' aesthetic. Use this template for a sophisticated experience with sharp lines, deep blacks, and localized glow highlights.",
        bestPractices: "Follow React best practices by pairing this with high-contrast, thin-weight typography. Maintain consistent spacing within your design system by using it for high-end product showcases. Optimize for performance by using efficient box-shadow renders.",
        whyMatters: "Minimalist dark design communicates exclusivity and modern luxury. This production-ready UI template helpsคุณ build an interface that feels solid and curated, focusing the user's entire attention on your core visual content.",
        faqs: [
            { question: "Why is it called 'Black Box'?", answer: "The design system is built around 'perfect cubes' and deep shadows, giving the interface a sense of physical weight and structural mystery." },
            { question: "Can I adjust the glow?", answer: "Yes, the `glowColor` and `enableGlow` props allow you to add subtle interactive aura around your primary containers and buttons." },
            { question: "Is it mobile responsive?", answer: "The 'Box' modules are designed as a vertical stack on mobile, ensuring the sharp borders and deep shadows remain impactful on smaller screens." }
        ],
    },
    {
        id: "claymorphism",
        name: "Claymorphism",
        description: "Soft clay-like portfolio with organic shapes and tactile design.",
        category: "Core Landing Pages",
        tags: ["clay", "soft", "organic", "tactile"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/Claymorphism",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/Claymorphism.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/Claymorphism.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/Claymorphism/page.tsx"),
        },
        dependencies: ["next", "framer-motion", "recharts"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#6c5ce7",
                description: "Primary brand color for buttons and accents.",
            },
            {
                name: "backgroundColor",
                type: "string",
                default: "#e0e5ec",
                description: "Background color (light mode neumorphic base).",
            },
            {
                name: "shadowIntensity",
                type: "number",
                default: "1",
                description: "Intensity of clay shadow effects (0.5-2).",
            },
            {
                name: "borderRadius",
                type: "string",
                default: "32px",
                description: "Border radius for clay cards.",
            },
            {
                name: "enableAnimations",
                type: "boolean",
                default: "true",
                description: "Enable smooth animations and transitions.",
            },
        ],
        whenToUse: "Ideal for friendly startups, design tools, and Next.js platforms that want a tactile, 'soft' aesthetic. Use this template for a playful experience with organic, morphing clay shapes and deep neumorphic elevations.",
        bestPractices: "Maintain consistent spacing within your design system by using it on soft, neutral background tones. Follow React best practices by pairing it with rounded, approachable typography. Optimize for performance by managed the complex box-shadow values.",
        whyMatters: "Claymorphism (tactile neumorphism) creates a sense of approachability and physical presence. This production-ready UI template helpsคุณ build an interface that feels friendly and deep, improving user affinity with your digital product.",
        faqs: [
            { question: "How are the clay cards made?", answer: "The component uses layered `box-shadow` (light/dark) and high `border-radius` to simulate the soft, squishy appearance of physical clay pieces." },
            { question: "Can I use it for data?", answer: "Yes, the template integrates Recharts with a custom 'Clay' theme, making it perfect for friendly analytics dashboards." },
            { question: "Is the color customizable?", answer: "Yes, the `backgroundColor` prop should be matched with your primary shadow colors to maintain the seamless 'elevated' neumorphic effect." }
        ],
    },
    {
        id: "commerce-hud",
        name: "Commerce HUD",
        description: "E-commerce focused portfolio with HUD (Heads-Up Display) interface elements.",
        category: "Core Landing Pages",
        tags: ["commerce", "hud", "interface", "ecommerce"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/COMMERCE_HUD",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/Commerce_HUD.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/Commerce_HUD.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/COMMERCE_HUD/page.tsx"),
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#00ff88",
                description: "Primary HUD color for data displays and highlights.",
            },
            {
                name: "backgroundColor",
                type: "string",
                default: "#0a0a0a",
                description: "Background color for the HUD interface.",
            },
            {
                name: "enableGrid",
                type: "boolean",
                default: "true",
                description: "Enable background grid pattern.",
            },
            {
                name: "animationSpeed",
                type: "number",
                default: "1",
                description: "Speed of HUD animations and transitions.",
            },
        ],
        whenToUse: "Perfect for hardware brands, automotive tech, and Next.js e-commerce sites that want a futuristic 'Heads-Up Display' aesthetic. Use this template for a high-fidelity experience with digital grids, data readouts, and medical/tech overlays.",
        bestPractices: "Maintain scalable component architecture by keeping text bright and legible against the dark HUD. Follow React best practices by pairing this with monospaced typography. Optimize for performance by managed the background grid transforms.",
        whyMatters: "HUD aesthetics communicate technical precision and real-time power. This production-ready UI template helpsคุณ build an interface that feels advanced and 'mission-critical', improving the perceived quality of your tech product.",
        faqs: [
            { question: "Are the data displays real?", answer: "The component features stylized meters and grid readouts that can be connected to real-time props to show live system metrics." },
            { question: "Can I turn off the grid?", answer: "Yes, the `enableGrid` prop allows you to toggle the clinical technical background for a cleaner, floating UI look." },
            { question: "Is it good for long text?", answer: "The HUD aesthetic works best for high-density data and short labels; use it for product specs or technical summaries rather than long blog posts." }
        ],
    },
    {
        id: "executive",
        name: "Executive",
        description: "Professional executive portfolio with sophisticated design and corporate aesthetics.",
        category: "Core Landing Pages",
        tags: ["executive", "professional", "corporate", "sophisticated"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/EXECUTIVE",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/Executive.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/Executive.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/EXECUTIVE/page.tsx"),
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#1a1a1a",
                description: "Primary brand color for headers and accents.",
            },
            {
                name: "accentColor",
                type: "string",
                default: "#d4af37",
                description: "Accent color for highlights and CTAs (gold/sophisticated tone).",
            },
            {
                name: "fontFamily",
                type: "string",
                default: "serif",
                description: "Font family (serif, sans-serif, or custom).",
            },
            {
                name: "enableAnimations",
                type: "boolean",
                default: "true",
                description: "Enable smooth scroll and fade animations.",
            },
        ],
        whenToUse: "Ideal for consulting firms, law offices, and Next.js corporate portals that want a sophisticated 'Executive' aesthetic. Use this template for a professional experience with elegant Serif/Sans-Serif typography and muted, authoritative color palettes.",
        bestPractices: "Maintain consistent spacing within your design system by using generous padding and clear vertical hierarchy. Follow React best practices by pairing it with high-contrast, premium font pairings. Optimize for performance by managed the smooth-scroll intensity.",
        whyMatters: "Executive design communicates trust, history, and professional integrity. This production-ready UI template helpsคุณ build an interface that feels established and elite, improving the perceived reliability of your high-end service.",
        faqs: [
            { question: "Can I swap the Serif font?", answer: "Yes, the `fontFamily` prop (serif, sans-serif) allows you to toggle the aesthetic between 'Traditional Professional' and 'Modern Corporate'." },
            { question: "What is the accent color for?", answer: "The `accentColor` (default gold) is used for subtle highlights like buttons, drop-caps, and dividers to add a sense of luxury without clutter." },
            { question: "Is it mobile responsive?", answer: "The template maintains its sophisticated hierarchy by ensuring typography scales elegantly and sections stack with consistent margins on mobile." }
        ],
    },
    {
        id: "luminous-horizon",
        name: "Luminous Horizon",
        description: "Ethereal portfolio with luminous effects and horizon-inspired design.",
        category: "Core Landing Pages",
        tags: ["luminous", "horizon", "ethereal", "glow"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/LuminousHorizon",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/LuminousHorizon.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/LuminousHorizon.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/LuminousHorizon/page.tsx"),
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "gradientStart",
                type: "string",
                default: "#ff6b6b",
                description: "Start color of the horizon gradient.",
            },
            {
                name: "gradientEnd",
                type: "string",
                default: "#4ecdc4",
                description: "End color of the horizon gradient.",
            },
            {
                name: "glowIntensity",
                type: "number",
                default: "1",
                description: "Intensity of luminous glow effects (0-2).",
            },
            {
                name: "animationSpeed",
                type: "number",
                default: "1",
                description: "Speed of horizon animations.",
            },
        ],
        whenToUse: "Perfect for creative labs, innovative agencies, and Next.js applications that want an ethereal, 'Skyline' aesthetic. Use this template for a serene experience with soft horizon gradients and floating luminous points.",
        bestPractices: "Follow React best practices by using high-contrast text against the vibrant gradients. Maintain scalable component architecture by keeping foreground content lightweight. Optimize for performance by managed the background particle density.",
        whyMatters: "Luminous horizons create a sense of infinite potential and calm. This production-ready UI template helpsคุณ build an interface that feels visionary and immersive, adding a distinct 'Aura' signature to your project.",
        faqs: [
            { question: "How do the animations work?", answer: "The component features localized luminous points and slow-pulsing background gradients that simulate a living, breathing digital horizon." },
            { question: "Can I customize the gradient?", answer: "Yes, the `gradientStart` and `gradientEnd` props allow you to set the primary horizon colors to match your brand's atmosphere." },
            { question: "Is it good for long pages?", answer: "The 'Horizon' focus is best for high-impact landing sections or single-page portfolios where the atmospheric transition can be fully appreciated." }
        ],
    },
    {
        id: "maison-digital",
        name: "Maison Digital",
        description: "Elegant digital house portfolio with refined design and luxury aesthetics.",
        category: "Core Landing Pages",
        tags: ["maison", "digital", "elegant", "luxury"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/MAISONDIGITAL",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/MaisonDigital.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/MaisonDigital.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/MAISONDIGITAL/page.tsx"),
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#1a1a1a",
                description: "Primary elegant color (typically dark/black).",
            },
            {
                name: "accentColor",
                type: "string",
                default: "#c9a961",
                description: "Luxury accent color (gold/champagne tone).",
            },
            {
                name: "spacing",
                type: "string",
                default: "generous",
                description: "Spacing style: 'generous', 'compact', or 'minimal'.",
            },
            {
                name: "enableParallax",
                type: "boolean",
                default: "true",
                description: "Enable parallax scrolling effects.",
            },
        ],
        whenToUse: "Excellent for luxury fashion houses, architectural studios, and Next.js sites that want a refined 'Maison' aesthetic. Use this template for an elegant experience with generous white space, luxury accents, and sophisticated parallax transitions.",
        bestPractices: "Maintain consistent spacing within your design system by respecting the 'generous' layout padding. Follow React best practices by pairing it with classic, high-end font colors. Optimize for performance by lazy-loading the high-resolution site imagery.",
        whyMatters: "Maison design represents curated luxury and structural elegance. This production-ready UI template helpsคุณ build an interface that feels high-end and timeless, reflecting a brand identity focused on quality over quantity.",
        faqs: [
            { question: "What does 'Maison' mean?", answer: "In design, 'Maison' (House) refers to a curated, high-end collection or studio. The interface reflects this through precision grids and luxury-focused spacing." },
            { question: "Is the parallax customizable?", answer: "Yes, the `enableParallax` prop allows you to toggle the depth effects for a more static, stable editorial look." },
            { question: "How does 'Spacing' work?", answer: "The `spacing` prop (generous, compact, minimal) allows you to control the entire section's airiness to fit your content's specific density." }
        ],
    },
    {
        id: "neo-brutalism",
        name: "Neo Brutalism",
        description: "Bold neo-brutalist portfolio with high contrast and geometric shapes.",
        category: "Core Landing Pages",
        tags: ["neo-brutalism", "bold", "geometric", "high-contrast"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/NeoBrutalism",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/NeoBrutalism.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/NeoBrutalism.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/NeoBrutalism/page.tsx"),
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#000000",
                description: "Primary bold color (typically black).",
            },
            {
                name: "accentColor",
                type: "string",
                default: "#ffff00",
                description: "High contrast accent color (typically bright yellow).",
            },
            {
                name: "shadowOffset",
                type: "string",
                default: "8px",
                description: "Offset for brutalist shadow effects.",
            },
            {
                name: "borderWidth",
                type: "string",
                default: "4px",
                description: "Border width for geometric elements.",
            },
        ],
        whenToUse: "Ideal for edgy startups, gaming products, and Next.js portfolios that want an aggressive, high-contrast 'Brutalist' aesthetic. Use this template for a bold experience with thick borders, hard shadows, and vibrant geometric containers.",
        bestPractices: "Maintain scalable component architecture by keeping foreground text thick and bold. Follow React best practices by pairing this with high-contrast, primary colors. Optimize for performance by using efficient box-shadow renders.",
        whyMatters: "Neo-brutalist design is a powerful visual statement of raw power and structural honesty. This production-ready UI template helpsคุณ build an interface that feels solid and unyielding, adding a unique architectural signature to your project.",
        faqs: [
            { question: "Can I adjust the shadow depth?", answer: "The `shadowOffset` prop allows you to control how 'thick' the hard shadows are, defining the level of 'Brutalist' impact." },
            { question: "What is the accent color for?", answer: "The `accentColor` (typically bright yellow) is used for focal points like buttons and section highlights to ensure they pop against the black borders." },
            { question: "Is it mobile responsive?", answer: "The geometric cards stack into a solid vertical grid on mobile, ensuring the high-contrast lines and hard shadows remain impactful." }
        ],
    },
    {
        id: "obsidian-nebulas",
        name: "Obsidian & Nebulas",
        description: "Dark cosmic portfolio with obsidian textures and nebula effects.",
        category: "Core Landing Pages",
        tags: ["obsidian", "nebula", "cosmic", "dark"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/Obsidian&Nebulas",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/Obsidian&Nebulas.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/Obsidian&Nebulas.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/Obsidian&Nebulas/page.tsx"),
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "nebulaColor1",
                type: "string",
                default: "#8b5cf6",
                description: "First nebula color (purple).",
            },
            {
                name: "nebulaColor2",
                type: "string",
                default: "#ec4899",
                description: "Second nebula color (pink).",
            },
            {
                name: "nebulaColor3",
                type: "string",
                default: "#06b6d4",
                description: "Third nebula color (cyan).",
            },
            {
                name: "particleDensity",
                type: "number",
                default: "1",
                description: "Density of cosmic particles (0.5-2).",
            },
            {
                name: "animationSpeed",
                type: "number",
                default: "1",
                description: "Speed of nebula animations.",
            },
        ],
        whenToUse: "Perfect for science apps, space startups, and Next.js portfolios that want an atmospheric 'Cosmic' aesthetic. Use this template for an immersive experience with deep obsidian textures, colorful nebula gasses, and moving star particles.",
        bestPractices: "Maintain consistent spacing within your design system by keeping content inside the clear-window obsidian cards. Follow React best practices by using high-contrast text over dark backgrounds. Optimize for performance by managed the particle count.",
        whyMatters: "Cosmic aesthetics create a sense of scale and infinite depth. This production-ready UI template helpsคุณ build an interface that feels advanced and atmospheric, adding semantic authority to your scientific or technical data.",
        faqs: [
            { question: "How are the nebulae made?", answer: "The background uses layered, animated CSS radial gradients (`nebulaColor1`, etc.) with heavy blur to simulate the look of shifting cosmic gas clouds." },
            { question: "Can I adjust particle count?", answer: "Yes, the `particleDensity` prop allows you to control the 'star field' intensity, from sparse/minimal to a dense, sparkling galaxy." },
            { question: "Is it good for mobile?", answer: "The particles and colored nebulae remain energetic on mobile while the obsidian navigation cards stack vertically for touch accessibility." }
        ],
    },
    {
        id: "operatoros",
        name: "Operator OS",
        description: "Technical operator-themed portfolio with OS-inspired interface design.",
        category: "Core Landing Pages",
        tags: ["operator", "os", "technical", "interface"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/OPERATOROS",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/OperatorOS.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/OperatorOS.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/OPERATOROS/page.tsx"),
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "terminalColor",
                type: "string",
                default: "#00ff00",
                description: "Terminal text color (typically green).",
            },
            {
                name: "backgroundColor",
                type: "string",
                default: "#0a0a0a",
                description: "Terminal background color.",
            },
            {
                name: "enableTypingEffect",
                type: "boolean",
                default: "true",
                description: "Enable typing animation effects.",
            },
            {
                name: "fontFamily",
                type: "string",
                default: "monospace",
                description: "Font family (monospace for terminal feel).",
            },
        ],
        whenToUse: "Ideal for developer portfolios, cybersecurity tools, and Next.js applications that want a high-fidelity 'Operating System' aesthetic. Use this template for a technical experience with terminal-style typing effects, monospaced grids, and command-line navigation.",
        bestPractices: "Maintain scalable component architecture by keeping foreground text bright (typically neon green) against deep black backgrounds. Follow React best practices by managed the async typing animations. Optimize for performance by managed the terminal window transforms.",
        whyMatters: "OS aesthetics communicate technical authority and system-level power. This production-ready UI template helpsคุณ build an interface that feels immersive and advanced, adding semantic depth to your technical data or code-based projects.",
        faqs: [
            { question: "Can I use color images?", answer: "The 'Operator' aesthetic works best with stylized, high-contrast or monochromatic imagery that fits the low-fi technical theme." },
            { question: "Is the typing effect global?", answer: "Yes, the `enableTypingEffect` prop triggers a sequential reveal for all primary headers and terminal logs to simulate real command input." },
            { question: "How were the 'Windows' made?", answer: "The interface uses a localized 'Window' architecture where content lives in collapsible, terminal-style modules with technical meta-tags." }
        ],
    },
    {
        id: "orbital-command",
        name: "Orbital Command",
        description: "Space-themed portfolio with orbital mechanics and command center design.",
        category: "Core Landing Pages",
        tags: ["orbital", "space", "command", "mechanics"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/OrbitalCommand",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/OrbitalCommand.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/OrbitalCommand.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/OrbitalCommand/page.tsx"),
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#00d4ff",
                description: "Primary space blue for UI elements.",
            },
            {
                name: "accentColor",
                type: "string",
                default: "#ff006e",
                description: "Accent color for highlights and alerts.",
            },
            {
                name: "orbitSpeed",
                type: "number",
                default: "1",
                description: "Speed of orbital animations (0.5-2).",
            },
            {
                name: "enable3D",
                type: "boolean",
                default: "true",
                description: "Enable 3D orbital effects.",
            },
        ],
        whenToUse: "Excellent for aerospace startups, deep-tech apps, and Next.js portfolios that want an interactive 'Orbital' aesthetic. Use this template for an immersive experience with rotating celestial bodies, orbital flight paths, and futuristic command UI.",
        bestPractices: "Follow React best practices by pairing this with high-contrast text over dark, starry backgrounds. Maintain scalable component architecture by keeping 3D elements lightweight. Optimize for performance by managed the React Three Fiber bridge.",
        whyMatters: "Orbital aesthetics create a sense of scale and momentum. This production-ready UI template helpsคุณ build an interface that feels atmospheric and expansive, improving the perceived quality of your tech brand's vision.",
        faqs: [
            { question: "Is the 3D real?", answer: "Yes, it uses React Three Fiber to render an interactive 3D solar system or orbital field in the center of the hero and navigation sections." },
            { question: "Can I adjust the speed?", answer: "Yes, the `orbitSpeed` prop allows you to control the rotational frequency of all planets and UI rings simultaneously." },
            { question: "Does it work without WebGL?", answer: "The component includes a high-fidelity 2D fallback, but the `enable3D` prop is best used for modern desktop browsers with GPU acceleration." }
        ],
    },
    {
        id: "prismos",
        name: "Prism OS",
        description: "Prismatic portfolio with light refraction effects and colorful design.",
        category: "Core Landing Pages",
        tags: ["prism", "light", "refraction", "colorful"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/PRISMOS",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/PrismOS.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/PrismOS.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/PRISMOS/page.tsx"),
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "prismColor1",
                type: "string",
                default: "#ff0080",
                description: "First prism color (magenta).",
            },
            {
                name: "prismColor2",
                type: "string",
                default: "#00ff80",
                description: "Second prism color (green).",
            },
            {
                name: "prismColor3",
                type: "string",
                default: "#0080ff",
                description: "Third prism color (blue).",
            },
            {
                name: "refractionIntensity",
                type: "number",
                default: "1",
                description: "Intensity of light refraction effects (0-2).",
            },
            {
                name: "animationSpeed",
                type: "number",
                default: "1",
                description: "Speed of prism animations.",
            },
        ],
        whenToUse: "Ideal for creative studios, vibrant startups, and Next.js platforms that want a sophisticated 'Glass Refraction' aesthetic. Use this template for a high-fidelity experience with prismatic light effects and colorful, crystal-like UI modules.",
        bestPractices: "Maintain consistent spacing within your design system by using it on dark or textured backgrounds. Follow React best practices by pairing it with airy, light-weight typography. Optimize for performance by managed the `backdrop-filter` impact.",
        whyMatters: "Prismatic design communicates structural complexity and vibrant energy. This production-ready UI template helpsคุณ build an interface that feels lightweight and premium, reflecting a brand identity rooted in innovation and light.",
        faqs: [
            { question: "How were the rainbows made?", answer: "The component features localized refraction points (`prismColor1`, etc.) that simulate the look of white light splitting through a physical glass prism." },
            { question: "Is the refraction interactive?", answer: "Yes, the light patterns shift as the user scrolls or moves their cursor, creating a deep sense of environmental light and depth." },
            { question: "Are the 'Glass' modules real?", answer: "They use semi-transparent backgrounds and `backdrop-blur` filters to simulate physical frosted glass panes with prismatic edges." }
        ],
    },
    {
        id: "quantumanalytics",
        name: "Quantum Analytics",
        description: "Data-driven portfolio with quantum-inspired design and analytics aesthetics.",
        category: "Core Landing Pages",
        tags: ["quantum", "analytics", "data", "scientific"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/QUANTUMANALYTICS",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/QuantumAnalytics.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/QuantumAnalytics.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/QUANTUMANALYTICS/page.tsx"),
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#00f5ff",
                description: "Primary quantum blue for data visualizations.",
            },
            {
                name: "accentColor",
                type: "string",
                default: "#ff00ff",
                description: "Accent color for highlights and metrics.",
            },
            {
                name: "enableParticles",
                type: "boolean",
                default: "true",
                description: "Enable quantum particle effects.",
            },
            {
                name: "dataAnimationSpeed",
                type: "number",
                default: "1",
                description: "Speed of data visualization animations.",
            },
        ],
        whenToUse: "Perfect for data-science tools, AI platforms, and Next.js portfolios that want a professional 'Quantum Analytics' aesthetic. Use this template for a clinical experience with technical charts, particle clouds, and data-heavy UI modules.",
        bestPractices: "Maintain scalable component architecture by keeping data labels high-contrast and legible. Follow React best practices by pairing this with monospaced typography and clinical color palettes. Optimize for performance by managed the chart render lifecycle.",
        whyMatters: "Analytics aesthetics communicate structural honesty and professional depth. This production-ready UI template helpsคุณ build an interface that feels established and data-rich, improving the perceived quality of your technical product.",
        faqs: [
            { question: "Are the charts functional?", answer: "The template integrates modern charting libraries with a stylized 'Quantum' theme, making it perfect for real-time analytics or static data summaries." },
            { question: "Is the particle cloud distracting?", answer: "The `enableParticles` prop allows you to toggle the background quantum energy field for a cleaner, more focused focus on the data." },
            { question: "Can I change the primary color?", answer: "Yes, the `primaryColor` prop allows you to set the clinical 'Quantum' highlight color (default cyan) to match your brand's data theme." }
        ],
    },
    {
        id: "socialpulse",
        name: "Social Pulse",
        description: "Social media focused portfolio with pulse animations and network aesthetics.",
        category: "Core Landing Pages",
        tags: ["social", "pulse", "network", "media"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/SOCIALPULSE",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/SocialPulse.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/SocialPulse.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/SOCIALPULSE/page.tsx"),
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#1da1f2",
                description: "Primary social media color (Twitter blue).",
            },
            {
                name: "pulseColor",
                type: "string",
                default: "#ff006e",
                description: "Color for pulse animations.",
            },
            {
                name: "pulseSpeed",
                type: "number",
                default: "1",
                description: "Speed of pulse animations (0.5-2).",
            },
            {
                name: "enableNetwork",
                type: "boolean",
                default: "true",
                description: "Enable network connection visualizations.",
            },
        ],
        whenToUse: "Excellent for social media platforms, communication tools, and Next.js applications that want an energetic 'Network' aesthetic. Use this template for a high-fidelity experience with pulse animations, moving social clusters, and vibrant branding.",
        bestPractices: "Maintain consistent spacing within your design system by using it for high-impact social hubs. Follow React best practices by pairing it with high-contrast font colors. Optimize for performance by managed the background network physics.",
        whyMatters: "Network aesthetics communicate connectivity and human energy. This production-ready UI template helpsคุณ build an interface that feels alive and social, reflecting a brand identity rooted in community and real-time interaction.",
        faqs: [
            { question: "What is the 'Pulse' effect?", answer: "The component features localized circular ripples (`pulseColor`) that move through the network, simulating data packets or user activity." },
            { question: "Can I adjust the speed?", answer: "Yes, the `pulseSpeed` prop allows you to control the frequency of social transitions and network animations simultaneously." },
            { question: "Does it support avatars?", answer: "Yes, the social cluster modules are designed to house user avatars or brand icons within the interactive network visualization." }
        ],
    },
    {
        id: "task-management",
        name: "Task Management",
        description: "Productivity-focused portfolio with task management interface elements.",
        category: "Core Landing Pages",
        tags: ["task", "management", "productivity", "interface"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/TaskManagement",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/TaskManagement.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/TaskManagement.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/TaskManagement/page.tsx"),
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#3b82f6",
                description: "Primary color for task cards and buttons.",
            },
            {
                name: "completedColor",
                type: "string",
                default: "#10b981",
                description: "Color for completed tasks.",
            },
            {
                name: "pendingColor",
                type: "string",
                default: "#f59e0b",
                description: "Color for pending tasks.",
            },
            {
                name: "enableDragDrop",
                type: "boolean",
                default: "true",
                description: "Enable drag and drop functionality.",
            },
        ],
        whenToUse: "Ideal for productivity tools, project management SaaS, and Next.js portfolios that want a high-utility 'Dashboard' aesthetic. Use this template for a functional experience with interactive task cards, progress metrics, and drag-and-drop metaphors.",
        bestPractices: "Maintain scalable component architecture by keeping task labels short and actionable. Follow React best practices by managed the drag-and-drop state locally before syncing. Optimize for performance by using efficient re-ordering logic.",
        whyMatters: "Task management aesthetics communicate utility and organizational power. This production-ready UI template helpsคุณ build an interface that feels productive and 'hands-on', improving the perceived value of your management software.",
        faqs: [
            { question: "Is drag and drop functional?", answer: "The UI includes the handles and layout for drag-and-drop; implementation requires connecting the `enableDragDrop` logic to a library like `dnd-kit` or `react-beautiful-dnd`." },
            { question: "Can I use custom statuses?", answer: "Yes, you can adjust the `completedColor` and `pendingColor` props and extend the internal mapping to support more status types." },
            { question: "Is it good for mobile?", answer: "The task cards stack into a clean vertical list on mobile, ensuring that priorities remain visible and actionable on smaller screens." }
        ],
    },
    {
        id: "the-atelier",
        name: "The Atelier",
        description: "Artistic atelier portfolio with creative workspace aesthetics.",
        category: "Core Landing Pages",
        tags: ["atelier", "artistic", "creative", "workspace"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/TheAtelier",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/TheAtelier.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/TheAtelier.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/TheAtelier/page.tsx"),
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#8b4513",
                description: "Primary artistic color (brown/earth tone).",
            },
            {
                name: "accentColor",
                type: "string",
                default: "#ff6b6b",
                description: "Accent color for creative highlights.",
            },
            {
                name: "textureIntensity",
                type: "number",
                default: "1",
                description: "Intensity of artistic textures (0-2).",
            },
            {
                name: "enableSketch",
                type: "boolean",
                default: "true",
                description: "Enable sketch/hand-drawn effects.",
            },
        ],
        whenToUse: "Perfect for creative studios, illustrators, and Next.js applications that want an organic 'Atelier' aesthetic. Use this template for a hand-crafted experience with rough textures, hand-drawn strokes, and artistic workspace UI.",
        bestPractices: "Maintain consistent spacing within your design system by using it on paper-textured or earthy backgrounds. Follow React best practices by pairing it with informal, handwritten-style typography. Optimize for performance by managed the texture overlay density.",
        whyMatters: "Atelier aesthetics break the digital barrier by adding a human, tactile touch to your interface. This production-ready UI template helpsคุณ build a brand identity that feels approachable and experimental, improving user engagement through visual novelty.",
        faqs: [
            { question: "How were the sketches made?", answer: "The component uses GSAP and CSS mask-image filters to simulate the appearance of physical ink or pencil strokes appearing on a canvas." },
            { question: "Can I adjust the texture?", answer: "Yes, the `textureIntensity` prop allows you to control the 'grain' of the paper and the 'roughness' of the background layers." },
            { question: "Is it good for corporate use?", answer: "It works exceptionally well for 'Creative Corporate' brands (design agencies, architecture firms) that want to emphasize their craft over clinical precision." }
        ],
    },
    {
        id: "the-mainframe",
        name: "The Mainframe",
        description: "Mainframe-inspired portfolio with retro computing aesthetics.",
        category: "Core Landing Pages",
        tags: ["mainframe", "retro", "computing", "vintage"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/THEMAINFRAME",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/TheMainframe.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/TheMainframe.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/THEMAINFRAME/page.tsx"),
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "terminalColor",
                type: "string",
                default: "#00ff00",
                description: "Terminal green color for text.",
            },
            {
                name: "backgroundColor",
                type: "string",
                default: "#000000",
                description: "Mainframe background color (black).",
            },
            {
                name: "enableScanlines",
                type: "boolean",
                default: "true",
                description: "Enable CRT scanline effects.",
            },
            {
                name: "fontFamily",
                type: "string",
                default: "monospace",
                description: "Monospace font for retro computing feel.",
            },
        ],
        whenToUse: "Ideal for vintage tech blogs, retro gaming projects, and Next.js portfolios that want a high-fidelity '1970s Computing' aesthetic. Use this template for a nostalgic experience with green CRT phosphors, terminal scanlines, and heavy-iron UI containers.",
        bestPractices: "Maintain scalable component architecture by keeping text monospaced and bright green. Follow React best practices by pairing this with deep black or dark gray backgrounds. Optimize for performance by managed the scanline animation frequency.",
        whyMatters: "Mainframe aesthetics tap into the origins of computing, communicating structural history and raw power. This production-ready UI template helpsคุณ build an interface that feels energetic and unique, adding a distinct 'Vintage' signature to your project.",
        faqs: [
            { question: "Does it have flicker?", answer: "The component features a subtle, low-frequency phosphor flicker that can be toggled via the `enableScanlines` prop for a true retro feel." },
            { question: "Can I change the terminal color?", answer: "Yes, the `terminalColor` prop allows you to switch between classic 'P1 Green', 'Amber', or 'White' phosphor modes." },
            { question: "Is it mobile responsive?", answer: "The 'Terminal' windows are designed as liquid containers that maintain their technical borders and scanlines while resizing for mobile screens." }
        ],
    },
    {
        id: "the-oracle",
        name: "The Oracle",
        description: "Mystical oracle-themed portfolio with prophetic design elements.",
        category: "Core Landing Pages",
        tags: ["oracle", "mystical", "prophetic", "ancient"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/THEORACLE",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/TheOracle.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/TheOracle.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/THEORACLE/page.tsx"),
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#6b46c1",
                description: "Mystical purple color for oracle elements.",
            },
            {
                name: "accentColor",
                type: "string",
                default: "#fbbf24",
                description: "Golden accent color for mystical highlights.",
            },
            {
                name: "enableMysticalEffects",
                type: "boolean",
                default: "true",
                description: "Enable mystical glow and particle effects.",
            },
            {
                name: "animationSpeed",
                type: "number",
                default: "1",
                description: "Speed of mystical animations.",
            },
        ],
        whenToUse: "Excellent for wellness apps, astrology platforms, and Next.js portfolios that want a mystical 'Oracle' aesthetic. Use this template for an immersive experience with deep purples, golden glow points, and prophetic digital interface elements.",
        bestPractices: "Follow React best practices by using high-contrast text against the dark, glowing backgrounds. Maintain consistent spacing within your design system by using it for atmospheric landing pages. Optimize for performance by managed the particle glow intensity.",
        whyMatters: "Prophetic aesthetics create a sense of discovery and deeper meaning. This production-ready UI template helpsคุณ build an interface that feels visionary and 'enchanted', adding a unique emotional layer to your brand identity.",
        faqs: [
            { question: "What are 'Mystical Effects'?", answer: "The `enableMysticalEffects` prop toggles stylized particle clouds and floating light points that simulate a prophetic energy field around your content." },
            { question: "Can I adjust the purple tone?", answer: "Yes, the `primaryColor` prop allows you to set the base mystical hue, while `accentColor` (default gold) controls the 'glow' of the divine elements." },
            { question: "Is it good for tech brands?", answer: "It works well for 'Visionary Tech'—companies dealing with prediction, high-level AI, or future-focused research." }
        ],
    },
    {
        id: "the-sketchbook",
        name: "The Sketchbook",
        description: "Hand-drawn sketchbook portfolio with artistic and creative aesthetics.",
        category: "Core Landing Pages",
        tags: ["sketchbook", "hand-drawn", "artistic", "creative"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/THESKETCHBOOK",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/TheSketchbook.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/TheSketchbook.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/THESKETCHBOOK/page.tsx"),
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "sketchColor",
                type: "string",
                default: "#2d3436",
                description: "Color for sketch lines and drawings.",
            },
            {
                name: "paperColor",
                type: "string",
                default: "#fefefe",
                description: "Background paper color (off-white/cream).",
            },
            {
                name: "sketchRoughness",
                type: "number",
                default: "1",
                description: "Roughness of sketch lines (0.5-2).",
            },
            {
                name: "enableHandDrawn",
                type: "boolean",
                default: "true",
                description: "Enable hand-drawn sketch effects.",
            },
        ],
        whenToUse: "Ideal for educational platforms, creative studios, and Next.js portfolios that want a playful 'Sketchbook' aesthetic. Use this template for a hand-crafted experience with paper-grain backgrounds, wavy hand-drawn borders, and organic pencil sketch UI.",
        bestPractices: "Maintain consistent spacing within your design system by using it on soft cream or off-white background tones. Follow React best practices by pairing it with informal typography. Optimize for performance by managed the hand-drawn border transforms.",
        whyMatters: "Hand-drawn design breaks the digital barrier by adding a human, tactile touch to your interface. This production-ready UI template helpsคุณ build a brand identity that feels approachable and experimental, improving user affinity through visual novelty.",
        faqs: [
            { question: "How are the borders made?", answer: "The component uses localized SVG paths with `roughness` variants to simulate the uneven appearance of physical pencil lines drawn on paper." },
            { question: "Can I change the ink color?", answer: "Yes, the `sketchColor` prop allows you to set the primary 'Ink' hue to match your brand's sketching style (e.g., blue ink, charcoal, or pencil gray)." },
            { question: "Is the paper texture real?", answer: "Yes, the `paperColor` prop is used in combination with a subtle overlay grain to simulate high-fidelity sketchbook paper." }
        ],
    },
    {
        id: "xoxo",
        name: "XOXO",
        description: "Playful portfolio with XOXO design elements and fun interactions.",
        category: "Core Landing Pages",
        tags: ["xoxo", "playful", "fun", "interactive"],
        previewUrl: "/CoreLandingPages/AgencyPortfolio/XOXO",
        code: {
            tsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/tsx/XOXO.tsx"),
            jsx: getCode("src/components/CoreLandingPages/AgencyPortfolio/jsx/XOXO.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/CoreLandingPages/AgencyPortfolio/XOXO/page.tsx"),
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#ff006e",
                description: "Playful pink color for XOXO elements.",
            },
            {
                name: "secondaryColor",
                type: "string",
                default: "#8338ec",
                description: "Secondary playful color for variety.",
            },
            {
                name: "interactionIntensity",
                type: "number",
                default: "1",
                description: "Intensity of playful interactions (0.5-2).",
            },
            {
                name: "enableAnimations",
                type: "boolean",
                default: "true",
                description: "Enable fun animations and transitions.",
            },
        ],
        whenToUse: "Perfect for young startups, lifestyle brands, and Next.js apps that want a playful 'XOXO' aesthetic. Use this template for a fun, high-energy experience with vibrant pinks/purples, interactive 'hugs/kisses' metaphors, and bouncy animations.",
        bestPractices: "Maintain scalable component architecture by keeping foreground content lightweight and energetic. Follow React best practices by pairing this with bold, playful typography. Optimize for performance by managed the spring-physics animation intensity.",
        whyMatters: "Playful design communicates warmth, friendship, and positive energy. This production-ready UI template helpsคุณ build an interface that feels alive and approachable, improving user retention through visual delight and 'bouncy' interactions.",
        faqs: [
            { question: "What is 'Interaction Intensity'?", answer: "The `interactionIntensity` prop controls the spring-physics values of the bouncy buttons and hover effects, ranging from subtle to high-energy." },
            { question: "Can I adjust the colors?", answer: "Yes, the `primaryColor` and `secondaryColor` props allow you to set the playful palette to any vibrant brand duo." },
            { question: "Is it mobile responsive?", answer: "The 'XOXO' modules are designed as a vertical bouncy stack on mobile, ensuring the playful energy is maintained on touch screens." }
        ],
    },
];

