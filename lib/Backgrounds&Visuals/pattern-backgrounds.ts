import { getCode } from "../getCode";
import { Component } from "../components-data";

export const patternBackgroundComponents: Component[] = [
    {
        id: "uilora-kinetic-raster",
        name: "Uilora Kinetic Raster",
        description: "A dynamic Halftone-inspired grid featuring elastic mouse interaction and fluid noise-driven movement.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["pattern", "raster", "grid", "halftone", "interactive", "ogl"],
        previewUrl: "/Backgrounds&Visuals/PatternBackgrounds/UiloraKineticRaster",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/PatternBackgrounds/tsx/UiloraKineticRaster.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/PatternBackgrounds/jsx/UiloraKineticRaster.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/PatternBackgrounds/UiloraKineticRaster/page.tsx") },
        dependencies: ["next", "ogl"],
        props: [
            { name: "dotColor", type: "string", default: "#222222", description: "Base color of the dots" },
            { name: "accentColor", type: "string", default: "#ffffff", description: "Color of dots near the mouse" },
            { name: "density", type: "number", default: "30", description: "Grid density (number of dots)" },
            { name: "speed", type: "number", default: "1.0", description: "Animation speed" },
        ],
        whenToUse: "Perfect for minimalist high-fidelity designs, technical portfolios, and premium SaaS backgrounds where you want a reactive, tactile feel without high GPU load.",
        bestPractices: "Keep the `density` around 30-50 for optimal balance between detail and performance. Use high-contrast colors like deep grays and near-whites for a professional 'Blueprint' look.",
        whyMatters: "Unlike static patterns, the Kinetic Raster feels 'alive' due to the combination of noise-based drift and elastic mouse lerping, creating a deeper user connection.",
        faqs: [
            { question: "Is it mobile responsive?", answer: "Yes, it uses internal aspect correction to maintain circular dots on any screen ratio." },
            { question: "Can I use more than two colors?", answer: "The shader currently interpolates between base and accent, but you can wrap the component in a CSS backdrop-filter for more complexity." }
        ],
    },
    {
        id: "uilora-moire-interference",
        name: "Uilora Moire Interference",
        description: "A sophisticated mathematical interference pattern with chromatic aberration and liquid mouse distortion.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["pattern", "moire", "interference", "prism", "interactive", "ogl"],
        previewUrl: "/Backgrounds&Visuals/PatternBackgrounds/UiloraMoireInterference",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/PatternBackgrounds/tsx/UiloraMoireInterference.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/PatternBackgrounds/jsx/UiloraMoireInterference.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/PatternBackgrounds/UiloraMoireInterference/page.tsx") },
        dependencies: ["next", "ogl"],
        props: [
            { name: "lineColor", type: "string", default: "#ffffff", description: "Color of the interference rings" },
            { name: "density", type: "number", default: "40.0", description: "Frequency of the rings" },
            { name: "strength", type: "number", default: "0.2", description: "Distortion intensity" },
            { name: "opacity", type: "number", default: "0.5", description: "Overall transparency" },
        ],
        whenToUse: "Ideal for creative headers, abstract technical backgrounds, and landing pages that aim for a futuristic, 'Prism' or physics-inspired aesthetic.",
        bestPractices: "Use low `opacity` (0.1 - 0.3) if placing text directly on top. The chromatic aberration (RGB split) is most visible on dark backgrounds.",
        whyMatters: "Moire patterns create an emergent complexity that looks complex but is mathematically lightweight, providing high visual impact for low performance cost.",
        faqs: [
            { question: "What is the RGB split?", answer: "The shader samples the pattern with tiny spatial offsets for red, green, and blue, mimicking the way light refracts through a lens." },
            { question: "Does it support custom rotation?", answer: "The pattern rotates automatically based on the `uTime` uniform, ensuring it never feels static." }
        ],
    },
    {
        id: "uilora-sdf-pattern",
        name: "Uilora SDF Pattern",
        description: "A multi-layered shape-morphing grid using Signed Distance Fields (SDF) for ultra-sharp, anti-aliased geometry.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["pattern", "sdf", "morphing", "geometry", "interactive", "ogl"],
        previewUrl: "/Backgrounds&Visuals/PatternBackgrounds/UiloraSDFPattern",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/PatternBackgrounds/tsx/UiloraSDFPattern.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/PatternBackgrounds/jsx/UiloraSDFPattern.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/PatternBackgrounds/UiloraSDFPattern/page.tsx") },
        dependencies: ["next", "ogl"],
        props: [
            { name: "gridSize", type: "number", default: "20", description: "Number of cells across" },
            { name: "color", type: "string", default: "#333333", description: "Base shape color" },
            { name: "accentColor", type: "string", default: "#ffffff", description: "Active shape color" },
            { name: "mouseRadius", type: "number", default: "0.25", description: "Radius of mouse influence" },
            { name: "interactionStrength", type: "number", default: "1.0", description: "Elastic warp amount" },
        ],
        whenToUse: "Best for grid-based UIs, dashboard backgrounds, and developer-centric landing pages that value mathematical precision and sharp visuals.",
        bestPractices: "Leverage the `mouseRadius` to control how many shapes react simultaneously. Pair with mono-spaced fonts for a complete 'Technical' design language.",
        whyMatters: "Using SDFs allows for smooth morphing between different shapes (like circles to plus signs) that is impossible with standard SVG or CSS grids.",
        faqs: [
            { question: "Are these SVG shapes?", answer: "No, they are rendered via Fragment Shaders, which means they are resolution-independent and perfectly sharp on Retina displays." },
            { question: "Can I change the shapes?", answer: "The current implementation morphs between circles and plus signs, but the SDF logic can be extended to any closed geometry." }
        ],
    },
    {
        id: "uilora-vector-grid",
        name: "Uilora Vector Grid",
        description: "A responsive grid of vector needles that react both to global noise 'wind' and local mouse magnetic pulls.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["pattern", "vector", "grid", "magnet", "interactive", "ogl"],
        previewUrl: "/Backgrounds&Visuals/PatternBackgrounds/UiloraVectorGrid",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/PatternBackgrounds/tsx/UiloraVectorGrid.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/PatternBackgrounds/jsx/UiloraVectorGrid.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/PatternBackgrounds/UiloraVectorGrid/page.tsx") },
        dependencies: ["next", "ogl"],
        props: [
            { name: "gridSize", type: "number", default: "35", description: "Density of the needle grid" },
            { name: "color", type: "string", default: "#333333", description: "Idle needle color" },
            { name: "accentColor", type: "string", default: "#ffffff", description: "Magnetic needle color" },
            { name: "mouseRadius", type: "number", default: "0.25", description: "Magnet attraction radius" },
        ],
        whenToUse: "Perfect for data visualization tools, system-monitoring dashboards, and AI-themed websites where 'Flow' and 'Direction' are key concepts.",
        bestPractices: "Use a high `gridSize` (40+) for a 'Field' effect, or a low size (15-20) for a more 'Structural' or 'Compass' look.",
        whyMatters: "The needles follow a simplex noise 'Wind' by default, creating a calm natural movement that instantly reacts with mechanical precision to mouse input.",
        faqs: [
            { question: "Do the needles rotate?", answer: "Yes, they calculate a 360-degree orientation based on the combined influence of noise vector and mouse vector." },
            { question: "Is it GPU intensive?", answer: "It is highly optimized to run as a single draw-call on the GPU, making it suitable for low-power devices." }
        ],
    },
    {
        id: "reactive-dots",
        name: "Reactive Dot Matrix",
        description: "Interactive canvas-based dot matrix that responds to mouse movement.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["pattern", "dots", "matrix", "interactive", "canvas"],
        previewUrl: "/Backgrounds&Visuals/PatternBackgrounds/ReactiveDots",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/PatternBackgrounds/tsx/ReactiveDots.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/PatternBackgrounds/jsx/ReactiveDots.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/PatternBackgrounds/ReactiveDots/page.tsx") },
        dependencies: ["next"],
        props: [
            { name: "backgroundColor", type: "string", default: "#09090b", description: "Background color" },
            { name: "dotColor", type: "string", default: "#3b82f6", description: "Dot color" },
            { name: "dotBaseRadius", type: "number", default: "1.5", description: "Base radius of dots" },
            { name: "spacing", type: "number", default: "30", description: "Spacing between dots" },
            { name: "interactionDistance", type: "number", default: "200", description: "Mouse interaction distance" },
            { name: "interactionStrength", type: "number", default: "40", description: "Interaction strength" },
            { name: "className", type: "string", default: "", description: "Additional CSS classes" },
        ],
        whenToUse: "Ideal for tech-focused landing pages, developer tools, and Next.js sites that want a subtle, interactive pattern. Use this React component for a canvas-based dot matrix that responds elegantly to user mouse movements.",
        bestPractices: "Maintain consistent spacing within your design system by adjusting the `spacing` and `dotBaseRadius` to match your layout density. Follow React best practices by pairing it with dark-mode themes. Optimize for performance by using the high-performance Canvas API for rendering the hundreds of reactive dots.",
        whyMatters: "Interactive backgrounds improve user engagement and create a premium, 'custom-built' feel. This production-ready component helps build an interface that feels alive and responsive to human input, adding a layer of technical polish to your project.",
        faqs: [
            { question: "How does the interaction work?", answer: "Dots within the `interactionDistance` of the mouse cursor are repelled and increased in size based on the `interactionStrength` prop." },
            { question: "Is it high-performance?", answer: "Yes, it uses a highly optimized Canvas rendering loop with `requestAnimationFrame`, ensuring smooth 60fps interaction even with thousands of dots." },
            { question: "Can I change the dot colors?", answer: "Yes, you can customize the `dotColor` and `backgroundColor` to match any brand identity or UI theme." }
        ],
    },
];
