import { getCode } from "../getCode";
import { Component } from "../components-data";

export const blurredBackgroundComponents: Component[] = [
    {
        id: "dot-uilora",
        name: "Dot Uilora",
        description: "Sophisticated interactive dot mesh background with fluid warping and halftone depth effects.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["blur", "dots", "mesh", "interactive", "halftone"],
        previewUrl: "/Backgrounds&Visuals/BlurredBackgrounds/DotUilora",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/BlurredBackgrounds/tsx/DotUilora.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/BlurredBackgrounds/jsx/DotUilora.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/BlurredBackgrounds/DotUilora/page.tsx") },
        dependencies: ["ogl"],
        props: [
            { name: "dotColor", type: "string", default: "#50d8f7", description: "The color of the dots" },
            { name: "backgroundColor", type: "string", default: "#020617", description: "Deep background color" },
            { name: "density", type: "number", default: "40.0", description: "Density of the grid (15-60)" },
            { name: "speed", type: "number", default: "0.4", description: "Speed of the movement" },
            { name: "interactive", type: "boolean", default: "true", description: "Responsive to mouse movement" },
        ],
        whenToUse: "Ideal for technical landing pages, dashboard backgrounds, and modern SaaS interfaces that require a subtle, high-tech texture without being distracting.",
        bestPractices: "Keep the density moderate (around 40) for the best balance between detail and performance. Use contrasting colors between the dots and background for maximum 3D depth.",
        whyMatters: "Dot grids provide a sense of structure and precision. This WebGL-based implementation ensures smooth performance even with high densities, unlike SVG-based alternatives.",
        faqs: [
            { question: "How does the warping work?", answer: "It uses layered simplex noise in a GLSL shader to displace the UV coordinates of the dot grid." },
            { question: "Is it mobile friendly?", answer: "Yes, it's highly optimized for GPU rendering and scales perfectly across all screen sizes." },
            { question: "Can I change the dot shape?", answer: "The current shader renders circular dots using a length-based distance function, but the fragment shader can be modified for squares or custom shapes." }
        ],
    },
    {
        id: "uilora-digital-sorting",
        name: "Uilora Digital Sorting",
        description: "Premium pixel-sorting effect with vertical streaks, digital jitter, and subtle scanline textures.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["blur", "digital", "sorting", "glitch", "premium"],
        previewUrl: "/Backgrounds&Visuals/BlurredBackgrounds/UiloraDigitalSorting",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/BlurredBackgrounds/tsx/UiloraDigitalSorting.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/BlurredBackgrounds/jsx/UiloraDigitalSorting.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/BlurredBackgrounds/UiloraDigitalSorting/page.tsx") },
        dependencies: ["ogl"],
        props: [
            { name: "baseColor", type: "string", default: "#050505", description: "The deep background color" },
            { name: "accentColor", type: "string", default: "#1a1a25", description: "Color of the sorted blocks" },
            { name: "blockSize", type: "number", default: "1.0", description: "Width of vertical columns (0.5-2.0)" },
            { name: "speed", type: "number", default: "0.2", description: "Speed of vertical drift" },
        ],
        whenToUse: "Perfect for developer tools, futuristic dashboards, or tech portfolios that want a sophisticated, calculated 'glitch' aesthetic.",
        bestPractices: "Use deep slate or black as the base color to make the accent 'sorted' pixels feel like they're emerging from the void.",
        whyMatters: "Pixel sorting is a hallmark of high-end digital art. This implementation brings that complexity to the web with real-time performance and interactivity.",
        faqs: [
            { question: "What is pixel sorting?", answer: "It's a digital art technique where sections of an image are re-ordered based on their brightness or hue; here we simulate it procedurally." },
            { question: "Does it support RBG splitting?", answer: "Yes, the shader includes a built-in RGB split at the edges of the streaks for a more authentic digital look." }
        ],
    },
    {
        id: "uilora-frosted-glass",
        name: "Uilora Frosted Glass",
        description: "Elegant sandblasted glass effect with organic moving blobs and premium film grain texture.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["blur", "glass", "frosted", "soft", "premium"],
        previewUrl: "/Backgrounds&Visuals/BlurredBackgrounds/UiloraFrostedGlass",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/BlurredBackgrounds/tsx/UiloraFrostedGlass.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/BlurredBackgrounds/jsx/UiloraFrostedGlass.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/BlurredBackgrounds/UiloraFrostedGlass/page.tsx") },
        dependencies: ["ogl"],
        props: [
            { name: "baseColor", type: "string", default: "#080808", description: "Main background color" },
            { name: "accentColor", type: "string", default: "#222222", description: "Color of moving blobs" },
            { name: "speed", type: "number", default: "0.3", description: "Speed of organic movement" },
            { name: "grainAmount", type: "number", default: "0.05", description: "Intensity of frosting (0.0-0.1)" },
        ],
        whenToUse: "Ideal as a sophisticated background for high-end portfolio items, luxurious blog sections, or premium SaaS components.",
        bestPractices: "Keep the grain amount subtle (around 0.05) to avoid a 'noisy' look while maintaining the tactile frosted feel.",
        whyMatters: "Standard backdrop-blur is often too clean. Adding procedural grain and organic movement makes the digital surface feel physically grounded.",
        faqs: [
            { question: "How is the grain generated?", answer: "The grain is calculated per-pixel using a high-frequency hash function in the fragment shader." }
        ],
    },
    {
        id: "uilora-glass-melt",
        name: "Uilora Glass Melt",
        description: "Stunning liquid glass refraction with interactive domain warping and edge highlights.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["blur", "liquid", "glass", "warp", "refraction"],
        previewUrl: "/Backgrounds&Visuals/BlurredBackgrounds/UiloraGlassMelt",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/BlurredBackgrounds/tsx/UiloraGlassMelt.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/BlurredBackgrounds/jsx/UiloraGlassMelt.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/BlurredBackgrounds/UiloraGlassMelt/page.tsx") },
        dependencies: ["ogl"],
        props: [
            { name: "primaryColor", type: "string", default: "#050505", description: "Primary glass tint" },
            { name: "accentColor", type: "string", default: "#1a1a1a", description: "Flowing refraction color" },
            { name: "fluidity", type: "number", default: "0.5", description: "How fast the liquid moves" },
            { name: "refraction", type: "number", default: "0.4", description: "Intensity of distortion" },
        ],
        whenToUse: "Excellent for hero sections that need to feel physically alive and responsive to user input.",
        bestPractices: "Use deep, similar tones for primary and accent colors to ensure the highlights (specular) stand out as the 'glass' surface.",
        whyMatters: "Liquid dynamics are difficult to achieve smoothly. This implementation uses layered simplex noise to simulate complex fluid flow with zero performance cost.",
        faqs: [
            { question: "Is the mouse movement lagging?", answer: "No, the component includes a built-in lerp (linear interpolation) for mouse input to create a smooth 'dragging' feel." }
        ],
    },
    {
        id: "uilora-gradient-background",
        name: "Uilora Gradient Background",
        description: "4-color organic gradient with domain warping and soft CSS-enhanced blurring for ultimate smoothness.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["blur", "gradient", "smooth", "fluid", "color"],
        previewUrl: "/Backgrounds&Visuals/BlurredBackgrounds/UiloraGradientBackground",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/BlurredBackgrounds/tsx/UiloraGradientBackground.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/BlurredBackgrounds/jsx/UiloraGradientBackground.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/BlurredBackgrounds/UiloraGradientBackground/page.tsx") },
        dependencies: ["ogl"],
        props: [
            { name: "colors", type: "string[]", default: "['#4f46e5', '#7c3aed', '#2563eb', '#db2777']", description: "4 Hex colors for the blend" },
            { name: "speed", type: "number", default: "0.5", description: "Animation speed" },
            { name: "intensity", type: "number", default: "0.4", description: "Distortion intensity" },
            { name: "interactive", type: "boolean", default: "true", description: "Follows mouse movement" },
        ],
        whenToUse: "Universal background for landing pages, signup forms, and any section that needs a modern, vibrant pop of color.",
        bestPractices: "Choose colors that are close on the spectrum (e.g., blues and purples) for a calm look, or contrasting colors for high energy.",
        whyMatters: "Static gradients feel dead. Adding domain warping and interactive pull brings life to the most basic element of UI design.",
        faqs: [
            { question: "Why is there extra blur?", answer: "The component combines GLSL noise with a 40px CSS blur filter to achieve a level of softness impossible with shaders alone." }
        ],
    },
    {
        id: "uilora-iridescent-oil",
        name: "Uilora Iridescent Oil",
        description: "Luxurious oil-on-water effect with rainbow iridescence, domain warping, and specular highlights.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["blur", "iridescent", "oil", "color", "premium"],
        previewUrl: "/Backgrounds&Visuals/BlurredBackgrounds/UiloraIridescentOil",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/BlurredBackgrounds/tsx/UiloraIridescentOil.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/BlurredBackgrounds/jsx/UiloraIridescentOil.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/BlurredBackgrounds/UiloraIridescentOil/page.tsx") },
        dependencies: ["ogl"],
        props: [
            { name: "baseColor", type: "string", default: "#050505", description: "The underlying substrate color" },
            { name: "speed", type: "number", default: "0.5", description: "How fast the oil swirls" },
            { name: "vibrancy", type: "number", default: "0.4", description: "Intensity of rainbow effect" },
        ],
        whenToUse: "Perfect for fashion, art galleries, or luxury branding that wants to stand out with a sophisticated, ever-changing color palette.",
        bestPractices: "Keep the backdrop dark (#050505) to allow the interference patterns of the 'oil' to be visible without washed-out highlights.",
        whyMatters: "True iridescence is a complex light behavior. This shader uses cosine gradients to simulate thin-film interference in real-time.",
        faqs: [
            { question: "Can I adjust the colors?", answer: "The rainbow palette is based on a mathematical cosine gradient, ensuring harmonious transitions no matter the input." }
        ],
    },
    {
        id: "uilora-nebula-gossamer",
        name: "Uilora Nebula Gossamer",
        description: "Deep space nebula effect using FBM noise for volumetric smoke simulation and interactive wind.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["blur", "nebula", "smoke", "volumetric", "space"],
        previewUrl: "/Backgrounds&Visuals/BlurredBackgrounds/UiloraNebulaGossamer",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/BlurredBackgrounds/tsx/UiloraNebulaGossamer.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/BlurredBackgrounds/jsx/UiloraNebulaGossamer.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/BlurredBackgrounds/UiloraNebulaGossamer/page.tsx") },
        dependencies: ["ogl"],
        props: [
            { name: "baseColor", type: "string", default: "#020202", description: "Deep space color" },
            { name: "fogColor", type: "string", default: "#222530", description: "Nebula smoke color" },
            { name: "speed", type: "number", default: "0.5", description: "Movement speed" },
            { name: "density", type: "number", default: "0.7", description: "Vissibility of the smoke layers" },
        ],
        whenToUse: "Excellent for sci-fi themes, deep investigative content, or any project that needs a sense of cosmic vastness.",
        bestPractices: "Use very dark colors for the base and muted, desaturated tones for the fog to maintain a realistic volumetric appearance.",
        whyMatters: "Most 'smoke' effects use static images. This uses Fractional Brownian Motion (FBM) to generate unique, never-repeating volumetric clouds.",
        faqs: [
            { question: "Is the mouse effect wind?", answer: "Yes, the shader calculates a displacement vector from the cursor that pushes the smoke layers, simulating a gentle breeze." }
        ],
    },
    {
        id: "uilora-prism-dispersion",
        name: "Uilora Prism Dispersion",
        description: "Sophisticated RGB chromatic aberration effect with spectral splitting and liquid highlights.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["blur", "prism", "dispersion", "chromatic", "light"],
        previewUrl: "/Backgrounds&Visuals/BlurredBackgrounds/UiloraPrismDispersion",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/BlurredBackgrounds/tsx/UiloraPrismDispersion.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/BlurredBackgrounds/jsx/UiloraPrismDispersion.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/BlurredBackgrounds/UiloraPrismDispersion/page.tsx") },
        dependencies: ["ogl"],
        props: [
            { name: "baseColor", type: "string", default: "#030303", description: "Background depth color" },
            { name: "accentColor", type: "string", default: "#202025", description: "Moving highlight color" },
            { name: "dispersion", type: "number", default: "0.05", description: "Intensity of RGB splitting" },
            { name: "speed", type: "number", default: "0.4", description: "Flow speed" },
        ],
        whenToUse: "Ideally suited for photography headers, experimental music sites, or high-concept creative agency portfolios.",
        bestPractices: "Keep the dispersion low (below 0.1) to maintain focus, using it as a subtle edge detail rather than a full-screen distortion.",
        whyMatters: "Chromatic aberration is usually a sign of low-quality lenses, but in digital art, it's used to add a 'raw' photographic quality that feels alive.",
        faqs: [
            { question: "How does the splitting happen?", answer: "We sample the noise function three times with tiny offsets for the Red, Green, and Blue channels respectively." }
        ],
    },
    {
        id: "uilora-topographic-pulse",
        name: "Uilora Topographic Pulse",
        description: "Cinematic topographic map simulation with pulsing isolines, gravity distortion, and film grain.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["blur", "topo", "map", "pulse", "premium"],
        previewUrl: "/Backgrounds&Visuals/BlurredBackgrounds/UiloraTopographicPulse",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/BlurredBackgrounds/tsx/UiloraTopographicPulse.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/BlurredBackgrounds/jsx/UiloraTopographicPulse.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/BlurredBackgrounds/UiloraTopographicPulse/page.tsx") },
        dependencies: ["ogl"],
        props: [
            { name: "baseColor", type: "string", default: "#050505", description: "The deep background color" },
            { name: "lineColor", type: "string", default: "#333333", description: "The color of the topographic lines" },
            { name: "speed", type: "number", default: "0.4", description: "Pulse and flow rate" },
            { name: "complexity", type: "number", default: "1.5", description: "Density of contour lines" },
        ],
        whenToUse: "Perfect for outdoors/adventure brands, architectural firms, or complex data visualization platforms.",
        bestPractices: "Use subtle colors for the lines (like dark grey or muted gold) to make the pulse feel like a heartbeat rather than a flash.",
        whyMatters: "Topographic maps convey depth and journey. Adding a 'pulse' effect and gravity pull makes it an active, participant element of the UI.",
        faqs: [
            { question: "What is the heart-beat effect?", answer: "A sine-wave modulated multiplier that scales the brightness of the lines over time, creating a breathing sensation." }
        ],
    },
];
