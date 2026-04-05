import { Component } from "../types";

// All startup landing page components from the library
// Total: 10 components

export const startupLandingComponentsMetadata: Component[] = [
    {
        id: "brutalism",
        name: "Brutalism",
        description: "Bold neo-brutalist landing page with high contrast and geometric shapes.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["brutalism", "bold", "geometric", "high-contrast"],
        previewUrl: "/CoreLandingPages/StartupLandingPages/Brutalism",
        code: {
            tsx: "",
        },
        usageCode: {
            tsx: "",
        },
        dependencies: ["next", "framer-motion", "gsap", "lenis"],
        props: [
            {
                name: "primaryColor",
                type: "string",
                default: "#121212",
                description: "Primary dark color.",
            },
            {
                name: "accentColor",
                type: "string",
                default: "#ccff00",
                description: "High contrast accent color (lime).",
            },
            {
                name: "secondaryColor",
                type: "string",
                default: "#a855f7",
                description: "Secondary accent color (purple).",
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
    },
    {
        id: "brutal-sketch",
        name: "Brutal Sketch",
        description: "Neo-brutalist landing page with hand-drawn sketchy elements and bold design.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["brutal", "sketch", "hand-drawn", "bold"],
        previewUrl: "/CoreLandingPages/StartupLandingPages/BrutalSketch",
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
                description: "Primary brutal color (black).",
            },
            {
                name: "accentColor",
                type: "string",
                default: "#ff006e",
                description: "Bold accent color.",
            },
            {
                name: "sketchColor",
                type: "string",
                default: "#1a1a1a",
                description: "Color for sketch lines.",
            },
            {
                name: "sketchRoughness",
                type: "number",
                default: "1",
                description: "Roughness of sketch elements (0.5-2).",
            },
        ],
    },
    {
        id: "cartoon",
        name: "Cartoon",
        description: "Playful cartoon-style landing page with fun animations and vibrant colors.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["cartoon", "playful", "fun", "vibrant"],
        previewUrl: "/CoreLandingPages/StartupLandingPages/Cartoon",
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
                description: "Primary playful color.",
            },
            {
                name: "secondaryColor",
                type: "string",
                default: "#8338ec",
                description: "Secondary vibrant color.",
            },
            {
                name: "bounceIntensity",
                type: "number",
                default: "1",
                description: "Intensity of bounce animations (0.5-2).",
            },
            {
                name: "enableAnimations",
                type: "boolean",
                default: "true",
                description: "Enable fun cartoon animations.",
            },
        ],
    },
    {
        id: "controlled-chaos",
        name: "Controlled Chaos",
        description: "Dynamic landing page with organized chaos and controlled randomness.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["chaos", "controlled", "dynamic", "random"],
        previewUrl: "/CoreLandingPages/StartupLandingPages/ControlledChaos",
        code: {
            tsx: "",
        },
        usageCode: {
            tsx: "",
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "chaosLevel",
                type: "number",
                default: "1",
                description: "Level of chaos/randomness (0.5-2).",
            },
            {
                name: "primaryColor",
                type: "string",
                default: "#3b82f6",
                description: "Primary color for dynamic elements.",
            },
            {
                name: "enableRandomness",
                type: "boolean",
                default: "true",
                description: "Enable controlled random animations.",
            },
            {
                name: "animationSpeed",
                type: "number",
                default: "1",
                description: "Speed of chaos animations.",
            },
        ],
    },
    {
        id: "goo",
        name: "Goo",
        description: "Gooey, organic landing page with fluid animations and slime-like effects.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["goo", "organic", "fluid", "slime"],
        previewUrl: "/CoreLandingPages/StartupLandingPages/Goo",
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
                description: "Color of gooey elements.",
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
                description: "Enable fluid animations.",
            },
            {
                name: "animationSpeed",
                type: "number",
                default: "1",
                description: "Speed of goo animations.",
            },
        ],
    },
    {
        id: "kinetic",
        name: "Kinetic",
        description: "Kinetic typography landing page with dynamic text animations and motion.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["kinetic", "typography", "dynamic", "motion"],
        previewUrl: "/CoreLandingPages/StartupLandingPages/Kinetic",
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
                description: "Primary text color.",
            },
            {
                name: "accentColor",
                type: "string",
                default: "#3b82f6",
                description: "Accent color for highlights.",
            },
            {
                name: "animationSpeed",
                type: "number",
                default: "1",
                description: "Speed of kinetic animations (0.5-2).",
            },
            {
                name: "enableMotion",
                type: "boolean",
                default: "true",
                description: "Enable dynamic motion effects.",
            },
        ],
    },
    {
        id: "loo",
        name: "Loo",
        description: "Unique Loo landing page with distinctive design and creative aesthetics.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["loo", "unique", "distinctive", "creative"],
        previewUrl: "/CoreLandingPages/StartupLandingPages/loo",
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
                description: "Primary brand color.",
            },
            {
                name: "accentColor",
                type: "string",
                default: "#ec4899",
                description: "Accent color for highlights.",
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
                description: "Speed of creative animations.",
            },
        ],
    },
    {
        id: "noise",
        name: "Noise",
        description: "Noisy, textured landing page with grain effects and organic imperfections.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["noise", "texture", "grain", "imperfect"],
        previewUrl: "/CoreLandingPages/StartupLandingPages/Noise",
        code: {
            tsx: "",
        },
        usageCode: {
            tsx: "",
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "noiseIntensity",
                type: "number",
                default: "1",
                description: "Intensity of noise/grain effect (0-2).",
            },
            {
                name: "primaryColor",
                type: "string",
                default: "#1a1a1a",
                description: "Primary text/background color.",
            },
            {
                name: "enableGrain",
                type: "boolean",
                default: "true",
                description: "Enable grain texture overlay.",
            },
            {
                name: "grainOpacity",
                type: "number",
                default: "0.1",
                description: "Opacity of grain effect (0-1).",
            },
        ],
    },
    {
        id: "sketch",
        name: "Sketch",
        description: "Hand-drawn sketchy landing page with organic lines and artistic aesthetics.",
        category: "Core Landing Pages",
        installType: "cli",
        tags: ["sketch", "hand-drawn", "organic", "artistic"],
        previewUrl: "/CoreLandingPages/StartupLandingPages/sketch",
        code: {
            tsx: "",
        },
        usageCode: {
            tsx: "",
        },
        dependencies: ["next", "framer-motion"],
        props: [
            {
                name: "sketchColor",
                type: "string",
                default: "#1a1a1a",
                description: "Color for sketch lines.",
            },
            {
                name: "paperColor",
                type: "string",
                default: "#ffffff",
                description: "Background paper color.",
            },
            {
                name: "roughness",
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
    },
];

