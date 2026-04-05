import { Component } from "../types";

// All SaaS dashboard components from the library
// Total: 18 components

export const saasDashboardComponentsMetadata: Component[] = [
    {
        id: "claymorphism",
        name: "Claymorphism",
        description: "Soft clay-like dashboard with organic shapes and tactile design elements.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["clay", "soft", "organic", "tactile"],
        previewUrl: "/CoreLandingPages/SaaSDashboards/Claymorphism",
        code: {
            tsx: "", // Component code - will be filled later
        },
        usageCode: {
            tsx: "", // Usage code - how to import and use - will be filled later
        },
        dependencies: ["next", "framer-motion"],
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
        ],
    },
    {
        id: "frost",
        name: "Frost",
        description: "Frosted glass dashboard with icy aesthetics and cool color palette.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["frost", "glass", "icy", "cool"],
        previewUrl: "/CoreLandingPages/SaaSDashboards/Frost",
        code: {
            tsx: "",
        },
        usageCode: {
            tsx: "",
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "frostColor",
                type: "string",
                default: "#e0f2fe",
                description: "Icy frost color (light blue).",
            },
            {
                name: "glassBlur",
                type: "string",
                default: "20px",
                description: "Blur intensity for frosted glass.",
            },
            {
                name: "glassOpacity",
                type: "number",
                default: "0.3",
                description: "Opacity of glass elements (0-1).",
            },
            {
                name: "enableFrost",
                type: "boolean",
                default: "true",
                description: "Enable frosted glass effects.",
            },
        ],
    },
    {
        id: "gamified",
        name: "Gamified",
        description: "Gamification-focused dashboard with game-like elements and interactive features.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["gamified", "game", "interactive", "fun"],
        previewUrl: "/CoreLandingPages/SaaSDashboards/Gamified",
        code: {
            tsx: "",
        },
        usageCode: {
            tsx: "",
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#f43f5e",
                description: "Primary game color (red/pink).",
            },
            {
                name: "accentColor",
                type: "string",
                default: "#facc15",
                description: "Accent color for rewards (yellow).",
            },
            {
                name: "enableAchievements",
                type: "boolean",
                default: "true",
                description: "Enable achievement badges and rewards.",
            },
            {
                name: "animationSpeed",
                type: "number",
                default: "1",
                description: "Speed of game-like animations.",
            },
        ],
    },
    {
        id: "glassmorphism",
        name: "Glassmorphism",
        description: "Glassmorphism dashboard with frosted glass effects and modern aesthetics.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["glassmorphism", "glass", "frosted", "modern"],
        previewUrl: "/CoreLandingPages/SaaSDashboards/Glassmorphism",
        code: {
            tsx: "",
        },
        usageCode: {
            tsx: "",
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "glassBlur",
                type: "string",
                default: "20px",
                description: "Blur intensity for glass effect.",
            },
            {
                name: "glassOpacity",
                type: "number",
                default: "0.3",
                description: "Opacity of glass elements (0-1).",
            },
            {
                name: "backgroundColor",
                type: "string",
                default: "#0a0a0a",
                description: "Background color behind glass.",
            },
            {
                name: "borderColor",
                type: "string",
                default: "rgba(255,255,255,0.1)",
                description: "Border color for glass elements.",
            },
        ],
    },
    {
        id: "gooey-background",
        name: "Gooey Background",
        description: "Dashboard with gooey, organic background effects and fluid animations.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["gooey", "organic", "fluid", "background"],
        previewUrl: "/CoreLandingPages/SaaSDashboards/GooeyBackground",
        code: {
            tsx: "",
        },
        usageCode: {
            tsx: "",
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "gooColor",
                type: "string",
                default: "#3b82f6",
                description: "Color of gooey background elements.",
            },
            {
                name: "viscosity",
                type: "number",
                default: "1",
                description: "Viscosity of goo effect (0.5-2).",
            },
            {
                name: "enableFluid",
                type: "boolean",
                default: "true",
                description: "Enable fluid background animations.",
            },
            {
                name: "animationSpeed",
                type: "number",
                default: "1",
                description: "Speed of gooey animations.",
            },
        ],
    },
    {
        id: "hyperpop",
        name: "HyperPop",
        description: "Vibrant hyperpop dashboard with bold colors and energetic design.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["hyperpop", "vibrant", "bold", "energetic"],
        previewUrl: "/CoreLandingPages/SaaSDashboards/HyperPop",
        code: {
            tsx: "",
        },
        usageCode: {
            tsx: "",
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#ff006e",
                description: "Vibrant primary color (pink).",
            },
            {
                name: "secondaryColor",
                type: "string",
                default: "#8338ec",
                description: "Energetic secondary color (purple).",
            },
            {
                name: "accentColor",
                type: "string",
                default: "#00f5ff",
                description: "Bold accent color (cyan).",
            },
            {
                name: "energyLevel",
                type: "number",
                default: "1",
                description: "Level of energetic animations (0.5-2).",
            },
        ],
    },
    {
        id: "industry-standard",
        name: "Industry Standard",
        description: "Professional industry-standard dashboard with clean, corporate design.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["industry", "standard", "professional", "corporate"],
        previewUrl: "/CoreLandingPages/SaaSDashboards/IndustryStandard",
        code: {
            tsx: "",
        },
        usageCode: {
            tsx: "",
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#1a1a1a",
                description: "Primary corporate color (dark).",
            },
            {
                name: "accentColor",
                type: "string",
                default: "#3b82f6",
                description: "Professional accent color (blue).",
            },
            {
                name: "fontFamily",
                type: "string",
                default: "sans-serif",
                description: "Corporate font family.",
            },
            {
                name: "enableAnimations",
                type: "boolean",
                default: "true",
                description: "Enable professional animations.",
            },
        ],
    },
    {
        id: "lumina",
        name: "Lumina",
        description: "Luminous dashboard with glowing effects and light-based design elements.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["lumina", "luminous", "glow", "light"],
        previewUrl: "/CoreLandingPages/SaaSDashboards/Lumina",
        code: {
            tsx: "",
        },
        usageCode: {
            tsx: "",
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "glowColor",
                type: "string",
                default: "#fbbf24",
                description: "Luminous glow color (gold/yellow).",
            },
            {
                name: "glowIntensity",
                type: "number",
                default: "1",
                description: "Intensity of glow effects (0-2).",
            },
            {
                name: "backgroundColor",
                type: "string",
                default: "#0a0a0a",
                description: "Dark background for glow contrast.",
            },
            {
                name: "enableGlow",
                type: "boolean",
                default: "true",
                description: "Enable luminous glow effects.",
            },
        ],
    },
    {
        id: "mode-switcher",
        name: "Mode Switcher",
        description: "Dashboard with theme mode switcher and adaptive design elements.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["mode", "switcher", "theme", "adaptive"],
        previewUrl: "/CoreLandingPages/SaaSDashboards/ModeSwitcher",
        code: {
            tsx: "",
        },
        usageCode: {
            tsx: "",
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "lightModeColor",
                type: "string",
                default: "#ffffff",
                description: "Light mode background color.",
            },
            {
                name: "darkModeColor",
                type: "string",
                default: "#0a0a0a",
                description: "Dark mode background color.",
            },
            {
                name: "accentColor",
                type: "string",
                default: "#3b82f6",
                description: "Accent color for both modes.",
            },
            {
                name: "defaultMode",
                type: "string",
                default: "light",
                description: "Default theme mode: 'light' or 'dark'.",
            },
        ],
    },
    {
        id: "paper",
        name: "Paper",
        description: "Paper-textured dashboard with material design aesthetics.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["paper", "material", "texture", "design"],
        previewUrl: "/CoreLandingPages/SaaSDashboards/Paper",
        code: {
            tsx: "",
        },
        usageCode: {
            tsx: "",
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "paperColor",
                type: "string",
                default: "#fefefe",
                description: "Paper background color (off-white).",
            },
            {
                name: "textureIntensity",
                type: "number",
                default: "1",
                description: "Intensity of paper texture (0-2).",
            },
            {
                name: "shadowElevation",
                type: "string",
                default: "2",
                description: "Material design shadow elevation (0-24).",
            },
            {
                name: "enableTexture",
                type: "boolean",
                default: "true",
                description: "Enable paper texture effects.",
            },
        ],
    },
    {
        id: "paper-glass",
        name: "Paper Glass",
        description: "Hybrid dashboard combining paper textures with glassmorphism effects.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["paper", "glass", "hybrid", "texture"],
        previewUrl: "/CoreLandingPages/SaaSDashboards/PaperGlass",
        code: {
            tsx: "",
        },
        usageCode: {
            tsx: "",
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "paperColor",
                type: "string",
                default: "#fefefe",
                description: "Paper background color.",
            },
            {
                name: "glassBlur",
                type: "string",
                default: "20px",
                description: "Blur for glassmorphism effect.",
            },
            {
                name: "glassOpacity",
                type: "number",
                default: "0.3",
                description: "Opacity of glass elements (0-1).",
            },
            {
                name: "textureIntensity",
                type: "number",
                default: "1",
                description: "Intensity of paper texture (0-2).",
            },
        ],
    },
    {
        id: "paper-pop",
        name: "Paper Pop",
        description: "Playful paper-themed dashboard with pop art aesthetics.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["paper", "pop", "playful", "art"],
        previewUrl: "/CoreLandingPages/SaaSDashboards/PaperPop",
        code: {
            tsx: "",
        },
        usageCode: {
            tsx: "",
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "popColor1",
                type: "string",
                default: "#ff006e",
                description: "First pop art color (pink).",
            },
            {
                name: "popColor2",
                type: "string",
                default: "#8338ec",
                description: "Second pop art color (purple).",
            },
            {
                name: "popColor3",
                type: "string",
                default: "#facc15",
                description: "Third pop art color (yellow).",
            },
            {
                name: "enablePop",
                type: "boolean",
                default: "true",
                description: "Enable playful pop art effects.",
            },
        ],
    },
    {
        id: "the-editorial",
        name: "The Editorial",
        description: "Editorial-style dashboard with magazine layout and content-focused design.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["editorial", "magazine", "content", "layout"],
        previewUrl: "/CoreLandingPages/SaaSDashboards/TheEditorial",
        code: {
            tsx: "",
        },
        usageCode: {
            tsx: "",
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#000000",
                description: "Primary text color (black).",
            },
            {
                name: "accentColor",
                type: "string",
                default: "#ef4444",
                description: "Editorial accent color (red).",
            },
            {
                name: "fontFamily",
                type: "string",
                default: "serif",
                description: "Editorial font family.",
            },
            {
                name: "layoutStyle",
                type: "string",
                default: "magazine",
                description: "Layout style: 'magazine', 'grid', or 'asymmetric'.",
            },
        ],
    },
    {
        id: "wozega",
        name: "Wozega",
        description: "Unique Wozega dashboard with distinctive design and modern aesthetics.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["wozega", "unique", "distinctive", "modern"],
        previewUrl: "/CoreLandingPages/SaaSDashboards/Wozega",
        code: {
            tsx: "",
        },
        usageCode: {
            tsx: "",
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#3b82f6",
                description: "Primary modern color.",
            },
            {
                name: "accentColor",
                type: "string",
                default: "#ec4899",
                description: "Distinctive accent color.",
            },
            {
                name: "enableAnimations",
                type: "boolean",
                default: "true",
                description: "Enable distinctive animations.",
            },
            {
                name: "animationSpeed",
                type: "number",
                default: "1",
                description: "Speed of modern animations.",
            },
        ],
    },
    {
        id: "y2k",
        name: "Y2K",
        description: "Y2K-inspired dashboard with millennium aesthetics and futuristic design.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["y2k", "millennium", "futuristic", "retro"],
        previewUrl: "/CoreLandingPages/SaaSDashboards/Y2K",
        code: {
            tsx: "",
        },
        usageCode: {
            tsx: "",
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "y2kColor1",
                type: "string",
                default: "#00f5ff",
                description: "First Y2K color (cyan).",
            },
            {
                name: "y2kColor2",
                type: "string",
                default: "#ff006e",
                description: "Second Y2K color (pink).",
            },
            {
                name: "glowIntensity",
                type: "number",
                default: "1",
                description: "Intensity of futuristic glow (0-2).",
            },
            {
                name: "enableMillennium",
                type: "boolean",
                default: "true",
                description: "Enable Y2K millennium effects.",
            },
        ],
    },
];

