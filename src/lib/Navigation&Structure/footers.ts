import { getCode } from "../getCode";
import { Component } from "../types";

export const footerComponents: Component[] = [
    // From CrazyFooters.tsx
    {
        id: "image-reveal-footer",
        name: "Image Reveal Footer",
        description: "Hovering links reveals a floating image following the cursor. Interactive and engaging.",
        category: "Navigation",
        installType: "cli",
        tags: ["image", "reveal", "interactive", "cursor"],
        previewUrl: "/Navigation&Structures/Footer/ImageRevealFooter",
        code: {
            tsx: getCode("src/components/Navigation&Structures/Footer/tsx/ImageRevealFooter.tsx"),
            jsx: getCode("src/components/Navigation&Structures/Footer/jsx/ImageRevealFooter.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Navigation&Structures/Footer/ImageRevealFooter/page.tsx"),
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "links", type: "string[]", default: '["Mission", "Tech", "Crew", "Contact"]', description: "Array of footer link labels." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color of the footer (hex, rgb, or hsl)." },
            { name: "textColor", type: "string", default: "#ffffff", description: "Text color for links (hex, rgb, or hsl)." },
        ],
    },
    {
        id: "magnetic-footer",
        name: "Magnetic Footer",
        description: "Footer elements that magnetically attract to the cursor. Smooth physics-based interactions.",
        category: "Navigation",
        installType: "cli",
        tags: ["magnetic", "interactive", "physics", "cursor"],
        previewUrl: "/Navigation&Structures/Footer/MagneticFooter",
        code: {
            tsx: getCode("src/components/Navigation&Structures/Footer/tsx/MagneticFooter.tsx"),
            jsx: getCode("src/components/Navigation&Structures/Footer/jsx/MagneticFooter.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Navigation&Structures/Footer/MagneticFooter/page.tsx"),
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "links", type: "string[]", default: '["Mission", "Tech", "Crew", "Contact"]', description: "Array of footer link labels." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color of the footer (hex, rgb, or hsl)." },
            { name: "textColor", type: "string", default: "#ffffff", description: "Text color for links (hex, rgb, or hsl)." },
        ],
    },
    {
        id: "grid-footer",
        name: "Grid Footer",
        description: "Modern grid-based footer layout with animated sections and hover effects.",
        category: "Navigation",
        installType: "cli",
        tags: ["grid", "layout", "modern", "animated"],
        previewUrl: "/Navigation&Structures/Footer/GridFooter",
        code: {
            tsx: getCode("src/components/Navigation&Structures/Footer/tsx/GridFooter.tsx"),
            jsx: getCode("src/components/Navigation&Structures/Footer/jsx/GridFooter.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Navigation&Structures/Footer/GridFooter/page.tsx"),
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "links", type: "string[]", default: '["Mission", "Tech", "Crew", "Contact"]', description: "Array of footer link labels." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color of the footer (hex, rgb, or hsl)." },
            { name: "textColor", type: "string", default: "#ffffff", description: "Text color for links (hex, rgb, or hsl)." },
        ],
    },
    {
        id: "spectrum-footer",
        name: "Spectrum Footer",
        description: "Colorful spectrum gradient footer with smooth color transitions and animations.",
        category: "Navigation",
        installType: "cli",
        tags: ["spectrum", "gradient", "colorful", "animated"],
        previewUrl: "/Navigation&Structures/Footer/SpectrumFooter",
        code: {
            tsx: getCode("src/components/Navigation&Structures/Footer/tsx/SpectrumFooter.tsx"),
            jsx: getCode("src/components/Navigation&Structures/Footer/jsx/SpectrumFooter.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Navigation&Structures/Footer/SpectrumFooter/page.tsx"),
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "links", type: "string[]", default: '["Mission", "Tech", "Crew", "Contact"]', description: "Array of footer link labels." },
            { name: "gradientFrom", type: "string", default: "#ff0000", description: "Starting color for the gradient (hex, rgb, or hsl)." },
            { name: "gradientTo", type: "string", default: "#0000ff", description: "Ending color for the gradient (hex, rgb, or hsl)." },
        ],
    },
    {
        id: "stacked-card-footer",
        name: "Stacked Card Footer",
        description: "Footer with stacked card design. Each section appears as a card with depth.",
        category: "Navigation",
        installType: "cli",
        tags: ["stacked", "cards", "depth", "layered"],
        previewUrl: "/Navigation&Structures/Footer/StackedCardFooter",
        code: {
            tsx: getCode("src/components/Navigation&Structures/Footer/tsx/StackedCardFooter.tsx"),
            jsx: getCode("src/components/Navigation&Structures/Footer/jsx/StackedCardFooter.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Navigation&Structures/Footer/StackedCardFooter/page.tsx"),
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "links", type: "string[]", default: '["Mission", "Tech", "Crew", "Contact"]', description: "Array of footer link labels." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color of the footer (hex, rgb, or hsl)." },
            { name: "cardBgColor", type: "string", default: "#ffffff", description: "Background color for cards (hex, rgb, or hsl)." },
        ],
    },
    {
        id: "circular-footer",
        name: "Circular Footer",
        description: "Unique circular layout footer with radial navigation and smooth animations.",
        category: "Navigation",
        installType: "cli",
        tags: ["circular", "radial", "unique", "animated"],
        previewUrl: "/Navigation&Structures/Footer/CircularFooter",
        code: {
            tsx: getCode("src/components/Navigation&Structures/Footer/tsx/CircularFooter.tsx"),
            jsx: getCode("src/components/Navigation&Structures/Footer/jsx/CircularFooter.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Navigation&Structures/Footer/CircularFooter/page.tsx"),
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "links", type: "string[]", default: '["Mission", "Tech", "Crew", "Contact"]', description: "Array of footer link labels." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color of the footer (hex, rgb, or hsl)." },
            { name: "textColor", type: "string", default: "#ffffff", description: "Text color for links (hex, rgb, or hsl)." },
        ],
    },
    {
        id: "liquid-event-horizon-footer",
        name: "Liquid Event Horizon",
        description: "3D liquid metal/ferrofluid effect footer with WebGL shaders. Mesmerizing visual effect.",
        category: "Navigation",
        installType: "cli",
        tags: ["liquid", "3d", "webgl", "shader", "ferrofluid"],
        previewUrl: "/Navigation&Structures/Footer/LiquidEventHorizonFooter",
        code: {
            tsx: getCode("src/components/Navigation&Structures/Footer/tsx/LiquidEventHorizonFooter.tsx"),
            jsx: getCode("src/components/Navigation&Structures/Footer/jsx/LiquidEventHorizonFooter.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Navigation&Structures/Footer/LiquidEventHorizonFooter/page.tsx"),
        },
        dependencies: ["lucide-react", "framer-motion", "@react-three/fiber", "three"],
        props: [
            { name: "links", type: "string[]", default: '["Mission", "Tech", "Crew", "Contact"]', description: "Array of footer link labels." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color of the footer (hex, rgb, or hsl)." },
            { name: "liquidColor", type: "string", default: "#00ffff", description: "Color of the liquid effect (hex, rgb, or hsl)." },
        ],
    },
    {
        id: "event-horizon-footer",
        name: "Event Horizon Footer",
        description: "Black hole distortion effect. The entire page bends into a singularity as you scroll.",
        category: "Navigation",
        installType: "cli",
        tags: ["event-horizon", "black-hole", "distortion", "3d"],
        previewUrl: "/Navigation&Structures/Footer/EventHorizonFooter",
        code: {
            tsx: getCode("src/components/Navigation&Structures/Footer/tsx/EventHorizonFooter.tsx"),
            jsx: getCode("src/components/Navigation&Structures/Footer/jsx/EventHorizonFooter.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Navigation&Structures/Footer/EventHorizonFooter/page.tsx"),
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "links", type: "string[]", default: '["Mission", "Tech", "Crew", "Contact"]', description: "Array of footer link labels." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color of the footer (hex, rgb, or hsl)." },
            { name: "textColor", type: "string", default: "#ffffff", description: "Text color for links (hex, rgb, or hsl)." },
        ],
    },
    {
        id: "tear-sheet-footer",
        name: "Tear Sheet Footer",
        description: "Paper tear effect footer. Looks like the page is being torn away to reveal content.",
        category: "Navigation",
        installType: "cli",
        tags: ["tear", "paper", "reveal", "creative"],
        previewUrl: "/Navigation&Structures/Footer/TearSheetFooter",
        code: {
            tsx: getCode("src/components/Navigation&Structures/Footer/tsx/TearSheetFooter.tsx"),
            jsx: getCode("src/components/Navigation&Structures/Footer/jsx/TearSheetFooter.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Navigation&Structures/Footer/TearSheetFooter/page.tsx"),
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "links", type: "string[]", default: '["Mission", "Tech", "Crew", "Contact"]', description: "Array of footer link labels." },
            { name: "backgroundColor", type: "string", default: "#ffffff", description: "Background color of the footer (hex, rgb, or hsl)." },
            { name: "textColor", type: "string", default: "#000000", description: "Text color for links (hex, rgb, or hsl)." },
        ],
    },
    {
        id: "curtain-footer",
        name: "Curtain Footer",
        description: "Theater curtain effect that opens to reveal footer content. Dramatic and elegant.",
        category: "Navigation",
        installType: "cli",
        tags: ["curtain", "theater", "reveal", "dramatic"],
        previewUrl: "/Navigation&Structures/Footer/CurtainFooter",
        code: {
            tsx: getCode("src/components/Navigation&Structures/Footer/tsx/CurtainFooter.tsx"),
            jsx: getCode("src/components/Navigation&Structures/Footer/jsx/CurtainFooter.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Navigation&Structures/Footer/CurtainFooter/page.tsx"),
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "links", type: "string[]", default: '["Mission", "Tech", "Crew", "Contact"]', description: "Array of footer link labels." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color of the footer (hex, rgb, or hsl)." },
            { name: "curtainColor", type: "string", default: "#8b0000", description: "Color of the curtain (hex, rgb, or hsl)." },
        ],
    },
    {
        id: "volcano-footer",
        name: "Volcano Footer",
        description: "Hot, distorted atmosphere with heat haze and rising ember particles. Volcanic theme.",
        category: "Navigation",
        installType: "cli",
        tags: ["volcano", "heat", "fire", "particles"],
        previewUrl: "/Navigation&Structures/Footer/VolcanoFooter",
        code: {
            tsx: getCode("src/components/Navigation&Structures/Footer/tsx/VolcanoFooter.tsx"),
            jsx: getCode("src/components/Navigation&Structures/Footer/jsx/VolcanoFooter.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Navigation&Structures/Footer/VolcanoFooter/page.tsx"),
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "links", type: "string[]", default: '["Mission", "Tech", "Crew", "Contact"]', description: "Array of footer link labels." },
            { name: "backgroundColor", type: "string", default: "#1a0500", description: "Background color of the footer (hex, rgb, or hsl)." },
            { name: "textColor", type: "string", default: "#ff4500", description: "Text color for links (hex, rgb, or hsl)." },
        ],
    },
    {
        id: "brutal-footer",
        name: "Brutal Footer",
        description: "Neo-brutalist footer with bold colors, thick borders, and hard shadows. Bold and playful.",
        category: "Navigation",
        installType: "cli",
        tags: ["brutal", "neo-brutalism", "bold", "playful"],
        previewUrl: "/Navigation&Structures/Footer/BrutalFooter",
        code: {
            tsx: getCode("src/components/Navigation&Structures/Footer/tsx/BrutalFooter.tsx"),
            jsx: getCode("src/components/Navigation&Structures/Footer/jsx/BrutalFooter.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Navigation&Structures/Footer/BrutalFooter/page.tsx"),
        },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "links", type: "string[]", default: '["Mission", "Tech", "Crew", "Contact"]', description: "Array of footer link labels." },
            { name: "backgroundColor", type: "string", default: "#ffffff", description: "Background color of the footer (hex, rgb, or hsl)." },
            { name: "textColor", type: "string", default: "#000000", description: "Text color for links (hex, rgb, or hsl)." },
            { name: "borderColor", type: "string", default: "#000000", description: "Border color (hex, rgb, or hsl)." },
        ],
    }
];
