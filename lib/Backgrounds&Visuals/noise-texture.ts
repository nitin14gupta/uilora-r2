import { getCode } from "../getCode";
import { Component } from "../components-data";

export const noiseTextureComponents: Component[] = [
    {
        id: "uilora-biolume-grain",
        name: "Uilora Biolume Grain",
        description: "An organic micro-grain field that breathes and wakes up with bioluminescent glows upon mouse interaction.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["noise", "grain", "biolume", "interactive", "organic", "ogl"],
        previewUrl: "/Backgrounds&Visuals/NoiseTexture/UiloraBiolumeGrain",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/NoiseTexture/tsx/UiloraBiolumeGrain.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/NoiseTexture/jsx/UiloraBiolumeGrain.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/NoiseTexture/UiloraBiolumeGrain/page.tsx") },
        dependencies: ["next", "ogl"],
        props: [
            { name: "baseColor", type: "string", default: "#020202", description: "Background depth color" },
            { name: "glowColor", type: "string", default: "#ffffff", description: "Bioluminescent grain tint" },
            { name: "breatheSpeed", type: "number", default: "0.8", description: "Natural pulse frequency" },
            { name: "sensitivity", type: "number", default: "1.0", description: "Mouse wakeup intensity" },
            { name: "grainScale", type: "number", default: "1024", description: "Frequency of micro-dots" },
        ],
        whenToUse: "Perfect for deep, atmospheric interfaces, nature-inspired portfolios, and premium dark modes that need a 'living' texture.",
        bestPractices: "Use near-black base colors and high-contrast glow colors for the most dramatic 'Dark Sea' effect.",
        whyMatters: "Standard grain is static; Biolume Grain breathes. It uses a simplex-mapped pulse that creates a feeling of biological life beneath the surface.",
        faqs: [
            { question: "Can I change the grain size?", answer: "Yes, increase the `grainScale` for finer, dust-like particles or decrease it for a more digital/pixelated look." },
            { question: "Is it GPU heavy?", answer: "No, it uses a single-pass fragment shader for all noise calculations, making it very performant." }
        ],
    },
    {
        id: "uilora-cloud-background",
        name: "Uilora Cloud Background",
        description: "A high-fidelity domain-warped noise field that creates the appearance of swirling nebula clouds or marble veins.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["noise", "clouds", "nebula", "warping", "interactive", "ogl"],
        previewUrl: "/Backgrounds&Visuals/NoiseTexture/UiloraCloudBackground",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/NoiseTexture/tsx/UiloraCloudBackground.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/NoiseTexture/jsx/UiloraCloudBackground.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/NoiseTexture/UiloraCloudBackground/page.tsx") },
        dependencies: ["next", "ogl"],
        props: [
            { name: "baseColor", type: "string", default: "#000000", description: "Deep sky/background color" },
            { name: "cloudColor", type: "string", default: "#ffffff", description: "Color of the swirling veins" },
            { name: "speed", type: "number", default: "0.2", description: "Animation flow speed" },
            { name: "intensity", type: "number", default: "1.8", description: "Vein contrast and thickness" },
        ],
        whenToUse: "Ideal for heroic backgrounds, cosmic themes, and luxury brand websites that want a smooth, evolving structural backdrop.",
        bestPractices: "Pair with thin, elegant typography and high-contrast overlays to make the marble effect truly pop.",
        whyMatters: "Domain warping allows one noise function to distort another, creating complex fluid-like shapes that feel much more natural than standard Perlin noise.",
        faqs: [
            { question: "Does it respond to mouse?", answer: "Yes, the mouse acts as a subtle 'Wind' that pushes and pulls the cloud coordinates in real-time." },
            { question: "Can it be a primary background?", answer: "Absolutely, it is designed to be non-distracting but deeply engaging when noticed." }
        ],
    },
    {
        id: "uilora-ink-grain",
        name: "Uilora Ink Grain",
        description: "A viscous liquid simulation that combines domain-warped clouds with high-precision micro-ink particles.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["noise", "ink", "grain", "fluid", "interactive", "ogl"],
        previewUrl: "/Backgrounds&Visuals/NoiseTexture/UiloraInkGrain",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/NoiseTexture/tsx/UiloraInkGrain.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/NoiseTexture/jsx/UiloraInkGrain.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/NoiseTexture/UiloraInkGrain/page.tsx") },
        dependencies: ["next", "ogl"],
        props: [
            { name: "baseColor", type: "string", default: "#050505", description: "Liquid depth color" },
            { name: "inkColor", type: "string", default: "#ffffff", description: "Ink particle color" },
            { name: "viscosity", type: "number", default: "0.4", description: "Heaviness of the liquid flow" },
            { name: "grainDensity", type: "number", default: "0.6", description: "Particle visibility" },
            { name: "turbulence", type: "number", default: "0.5", description: "Mouse-driven stir amount" },
        ],
        whenToUse: "Best for artistic headers, brand storytelling sections, and 'Hand-crafted' digital experiences.",
        bestPractices: "Use a slow `viscosity` to give the background a heavy, premium feel. The grain is most visible in the 'Mid-range' of the noise layers.",
        whyMatters: "It mimics the way powdered ink dissolves in water, creating a tactile texture that bridges the gap between digital and physical art.",
        faqs: [
            { question: "Is the interaction smooth?", answer: "It uses heavy lerping (0.03) to ensure the mouse interaction feels like stirring a thick liquid like oil or honey." },
            { question: "Can I use bright colors?", answer: "Yes, but deep charcoal or navy bases usually yield the most authentic ink-in-water aesthetic." }
        ],
    },
    {
        id: "uilora-liquid-chrome",
        name: "Uilora Liquid Chrome",
        description: "A molten metal simulation using procedural height-maps to calculate real-time chrome reflections and specular peaks.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["noise", "chrome", "molten", "metal", "interactive", "ogl"],
        previewUrl: "/Backgrounds&Visuals/NoiseTexture/UiloraLiquidChrome",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/NoiseTexture/tsx/UiloraLiquidChrome.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/NoiseTexture/jsx/UiloraLiquidChrome.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/NoiseTexture/UiloraLiquidChrome/page.tsx") },
        dependencies: ["next", "ogl"],
        props: [
            { name: "baseColor", type: "string", default: "#020202", description: "Deep shadow tint" },
            { name: "chromeColor", type: "string", default: "#ffffff", description: "Highlight/Metal color" },
            { name: "speed", type: "number", default: "0.5", description: "Rate of flow" },
            { name: "viscosity", type: "number", default: "0.4", description: "Liquid 'Thickness'" },
            { name: "distortion", type: "number", default: "0.8", description: "Mouse wake intensity" },
        ],
        whenToUse: "Perfect for high-tech product pages, gaming websites, and 3D-heavy UI designs that want a 'Liquid Mercury' look.",
        bestPractices: "The effect relies on normals, so use a pure white `chromeColor` to get the most realistic 'Studio Lighting' reflection.",
        whyMatters: "Achieving high-quality chrome usually requires heavy textures; this component does it entirely with math in a few kilobytes.",
        faqs: [
            { question: "How are the reflections calculated?", answer: "It uses a central-difference algorithm to find the surface slope from the noise height-map, then applies a virtual studio light dot product." },
            { question: "Is it responsive?", answer: "Yes, the normals automatically adjust to maintain their 3D shape across any screen resolution." }
        ],
    },
    {
        id: "uilora-parchment",
        name: "Uilora Parchment",
        description: "A tactile paper synthesis system that recreates organic fibers, pulp clumps, and 3D shadow depth for an authentic physical feel.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["noise", "parchment", "paper", "tactile", "texture", "ogl"],
        previewUrl: "/Backgrounds&Visuals/NoiseTexture/UiloraParchment",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/NoiseTexture/tsx/UiloraParchment.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/NoiseTexture/jsx/UiloraParchment.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/NoiseTexture/UiloraParchment/page.tsx") },
        dependencies: ["next", "ogl"],
        props: [
            { name: "paperColor", type: "string", default: "#f4f4f2", description: "The base pulp tint" },
            { name: "fiberColor", type: "string", default: "#000000", description: "Tint of the microscopic fibers" },
            { name: "pulpIntensity", type: "number", default: "0.5", description: "Clumpiness of the paper" },
            { name: "shadowDepth", type: "number", default: "0.02", description: "Tactile relief strength" },
        ],
        whenToUse: "Ideal for blogging platforms, history-themed sites, and 'Analog' portfolios that want a physically grounding background.",
        bestPractices: "Use `#f4f4f2` for vintage ivory or `#0a0a0a` for a premium 'Charcoal Paper' look. Pair with serif typography.",
        whyMatters: "Most paper backgrounds are just grainy images. Uilora Parchment calculates 'Normal Shadows' based on a virtual mouse light, making the paper feel real to the touch.",
        faqs: [
            { question: "Is the paper static?", answer: "The fibers are static to feel like real paper, but the shadows subtly move with your mouse, creating a 3D tactile sense." },
            { question: "Can I make it look like cardboard?", answer: "Yes, increase the `pulpIntensity` and use a tan `paperColor` like `#d2b48c`." }
        ],
    },
    {
        id: "uilora-refractive-deep",
        name: "Uilora Refractive Deep",
        description: "A layered aquatic simulation featuring surface ripples, caustics, and refracted sediment grain.",
        category: "Backgrounds & Visuals",
        installType: "cli",
        tags: ["noise", "refractive", "water", "deep", "caustics", "ogl"],
        previewUrl: "/Backgrounds&Visuals/NoiseTexture/UiloraRefractiveDeep",
        code: {
            tsx: getCode("src/components/Backgrounds&Visuals/NoiseTexture/tsx/UiloraRefractiveDeep.tsx"),
            jsx: getCode("src/components/Backgrounds&Visuals/NoiseTexture/jsx/UiloraRefractiveDeep.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Backgrounds&Visuals/NoiseTexture/UiloraRefractiveDeep/page.tsx") },
        dependencies: ["next", "ogl"],
        props: [
            { name: "baseColor", type: "string", default: "#080808", description: "Bottom depth color" },
            { name: "grainColor", type: "string", default: "#ffffff", description: "Sediment particle color" },
            { name: "refractionIndex", type: "number", default: "0.4", description: "Light bending intensity" },
            { name: "waveSpeed", type: "number", default: "0.5", description: "Surface ripple speed" },
            { name: "grainScale", type: "number", default: "800", description: "Sediment density" },
        ],
        whenToUse: "Perfect for pool-themed sections, luxury travel sites, and meditative app backgrounds.",
        bestPractices: "Use deep blue or black bases. The `refractionIndex` should be kept below 0.6 for the most realistic liquid look.",
        whyMatters: "It simulates physics: the grain on the 'bottom' is visibly distorted by the ripples on the 'top', creating a professional sense of volume and depth.",
        faqs: [
            { question: "Are those ripples real?", answer: "Yes, they are calculated using multi-octave simplex noise combined with a mouse-driven sine-wave wake." },
            { question: "What are caustics?", answer: "They are the bright 'peaks' of light that appear where the water surface concentrates sunlight, added here as a procedural highlight layer." }
        ],
    }
];
