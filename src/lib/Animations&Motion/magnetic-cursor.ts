import { getCode } from "../getCode";
import { Component } from "../components-data";

export const magneticCursorComponents: Component[] = [
    {
        id: "molten",
        name: "Molten Core",
        description: "Fire particle burst trails your cursor with glowing ember physics.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["cursor", "magnetic", "fire", "particles", "canvas"],
        previewUrl: "/Animations&Motion/MagneticCursor/Molten",
        code: {
            tsx: getCode("src/components/Animations&Motion/MagneticCursor/tsx/Molten.tsx"),
            jsx: getCode("src/components/Animations&Motion/MagneticCursor/jsx/Molten.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/MagneticCursor/Molten/page.tsx")
        },
        dependencies: ["next"],
        props: [
            { name: "color", type: "string", default: "#ff6600", description: "Base color of the fire particles" },
            { name: "particlesPerFrame", type: "number", default: "3", description: "How many particles spawn per animation frame" },
        ],
        whenToUse: "Perfect for dark hero sections, gaming sites, and high-energy landing pages where you want the cursor to feel like it's on fire.",
        bestPractices: "Works best on dark backgrounds where the additive blend mode (lighter) can glow. Keep particlesPerFrame between 2-5 for smooth performance.",
        whyMatters: "Particle effects driven by cursor velocity create a sense of physical energy that makes the interface feel viscerally alive.",
        faqs: [
            { question: "Does it work on mobile?", answer: "The canvas tracks mousemove — on touch devices the effect won't appear, but the hero section still renders." },
            { question: "Does it need any library?", answer: "No — pure canvas API with requestAnimationFrame. Zero dependencies." }
        ],
    },
    {
        id: "string",
        name: "String Theory",
        description: "An elastic thread trails your cursor like a snake through space.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["cursor", "magnetic", "string", "trail", "elastic"],
        previewUrl: "/Animations&Motion/MagneticCursor/String",
        code: {
            tsx: getCode("src/components/Animations&Motion/MagneticCursor/tsx/String.tsx"),
            jsx: getCode("src/components/Animations&Motion/MagneticCursor/jsx/String.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/MagneticCursor/String/page.tsx")
        },
        dependencies: ["next"],
        props: [
            { name: "color", type: "string", default: "#f472b6", description: "Color of the trailing string" },
            { name: "trailLength", type: "number", default: "20", description: "Number of points in the string — more points = longer tail" },
        ],
        whenToUse: "Great for creative portfolios, design tools, and any site that wants a fluid, organic cursor effect that doesn't overwhelm the content.",
        bestPractices: "Keep trailLength between 10-30. Higher values create a longer, more serpentine string. Brightens to white on button hover automatically.",
        whyMatters: "The elastic string creates a sense of physical connection between cursor and pointer that feels genuinely tactile.",
        faqs: [
            { question: "Does it interact with hover states?", answer: "Yes — hovering the Get Started button brightens the string to white and thickens it." },
            { question: "Can I use multiple colors?", answer: "The current implementation uses one stroke color. For multi-color gradient strings, modify the strokeStyle in source." }
        ],
    },
    {
        id: "shatter",
        name: "Crystalline",
        description: "Crystal shards burst from the cursor on fast movement, fall with gravity.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["cursor", "magnetic", "shatter", "particles", "canvas"],
        previewUrl: "/Animations&Motion/MagneticCursor/Shatter",
        code: {
            tsx: getCode("src/components/Animations&Motion/MagneticCursor/tsx/Shatter.tsx"),
            jsx: getCode("src/components/Animations&Motion/MagneticCursor/jsx/Shatter.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/MagneticCursor/Shatter/page.tsx")
        },
        dependencies: ["next"],
        props: [
            { name: "color", type: "string", default: "#ffffff", description: "Color of the crystal shards" },
            { name: "velocityThreshold", type: "number", default: "5", description: "Cursor speed required to spawn shards — lower = more sensitive" },
        ],
        whenToUse: "Ideal for luxury brands, tech showcases, and any site where you want an 'explosive' cursor that rewards fast, confident movement.",
        bestPractices: "Keep velocityThreshold between 3-10. Lower values spawn shards more easily. Use light shard colors on dark backgrounds for maximum contrast.",
        whyMatters: "Velocity-triggered effects create a reward loop — users move faster to see more shards, naturally engaging more deeply with the page.",
        faqs: [
            { question: "When do shards appear?", answer: "Only when cursor velocity exceeds the velocityThreshold. Slow movement produces nothing — fast movement shatters." },
            { question: "Do shards have gravity?", answer: "Yes — shards fall downward and spin as they fade out." }
        ],
    },
    {
        id: "echo",
        name: "Snake Trail",
        description: "A living kinematic snake with sine-wave slither follows your pointer.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["cursor", "magnetic", "snake", "kinematic", "canvas"],
        previewUrl: "/Animations&Motion/MagneticCursor/Echo",
        code: {
            tsx: getCode("src/components/Animations&Motion/MagneticCursor/tsx/Echo.tsx"),
            jsx: getCode("src/components/Animations&Motion/MagneticCursor/jsx/Echo.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/MagneticCursor/Echo/page.tsx")
        },
        dependencies: ["next"],
        props: [
            { name: "color", type: "string", default: "#a855f7", description: "Body color of the snake" },
            { name: "segmentCount", type: "number", default: "32", description: "Number of body segments — more = longer snake" },
        ],
        whenToUse: "Perfect for experimental brands, bio-tech sites, gaming, and any context where a living creature cursor adds memorable personality.",
        bestPractices: "Keep segmentCount between 20-48. The snake uses mix-blend-screen so it glows beautifully over dark backgrounds. Desktop only — requires pointer:fine.",
        whyMatters: "A kinematic snake is one of the most technically impressive cursor effects — it demonstrates organic physics that static cursors simply cannot achieve.",
        faqs: [
            { question: "Does it work on mobile?", answer: "No — it requires a fine pointer (mouse). On touch devices the snake is hidden and the hero section renders normally." },
            { question: "Why does the head glow lime green?", answer: "The head uses a contrasting #a3e635 color so it's visually distinct from the body. This can be changed in source." }
        ],
    },
    {
        id: "chroma-trail",
        name: "Chroma Trail",
        description: "A hue-cycling rainbow comet trails every movement of your cursor.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["cursor", "trail", "rainbow", "hue", "canvas"],
        previewUrl: "/Animations&Motion/MagneticCursor/ChromaTrail",
        code: {
            tsx: getCode("src/components/Animations&Motion/MagneticCursor/tsx/ChromaTrail.tsx"),
            jsx: getCode("src/components/Animations&Motion/MagneticCursor/jsx/ChromaTrail.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/MagneticCursor/ChromaTrail/page.tsx")
        },
        dependencies: ["next"],
        props: [
            { name: "speed", type: "number", default: "2", description: "How fast the hue cycles per frame — higher = faster color rotation" },
            { name: "trailLength", type: "number", default: "28", description: "Number of trail points — more = longer comet tail" },
        ],
        whenToUse: "Perfect for creative portfolios, music visualizers, and any site that wants an instantly eye-catching cursor that makes every mouse movement feel like painting.",
        bestPractices: "Keep speed between 1-4 for smooth cycling. Works best on dark backgrounds. Set trailLength to 20-40 for optimal performance.",
        whyMatters: "A constantly shifting hue trail is one of the most visually arresting cursor effects — impossible to ignore and impossible to mistake for a default cursor.",
        faqs: [
            { question: "Does it slow down performance?", answer: "No — it draws a small array of circles per frame. Even with 40 trail points, the GPU cost is negligible." },
            { question: "Can I slow the color cycle?", answer: "Yes — set speed to 0.5 or 1 for a slow, mesmerizing shift. Set to 5+ for a rapid disco effect." }
        ],
    },
    {
        id: "ripple-cursor",
        name: "Ripple Cursor",
        description: "Concentric rings expand from the cursor like water ripples with every move.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["cursor", "ripple", "rings", "water", "canvas"],
        previewUrl: "/Animations&Motion/MagneticCursor/RippleCursor",
        code: {
            tsx: getCode("src/components/Animations&Motion/MagneticCursor/tsx/RippleCursor.tsx"),
            jsx: getCode("src/components/Animations&Motion/MagneticCursor/jsx/RippleCursor.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/MagneticCursor/RippleCursor/page.tsx")
        },
        dependencies: ["next"],
        props: [
            { name: "color", type: "string", default: "#38bdf8", description: "Color of the ripple rings" },
            { name: "maxRings", type: "number", default: "12", description: "Maximum concurrent rings on screen at once" },
        ],
        whenToUse: "Great for clean SaaS products, fintech, and any interface where elegance matters. The ripple gives precise cursor feedback without being distracting.",
        bestPractices: "Keep maxRings between 8-16. Works on both dark and light backgrounds — adjust color for contrast. A small dot is drawn at the exact cursor position for precision.",
        whyMatters: "Water ripples are universally understood as a reaction to touch — using them on cursor movement creates an unconscious sense of physical interaction with the screen.",
        faqs: [
            { question: "Do rings appear on every pixel of movement?", answer: "No — rings only spawn when the cursor moves more than 6px from the last ring origin, preventing ring flooding." },
            { question: "Does it work on click too?", answer: "Currently movement-triggered only. Adding click triggers requires a small addEventListener('click') addition in source." }
        ],
    },
    {
        id: "glow-orb",
        name: "Glow Orb",
        description: "A soft ambient light orb follows the cursor with gentle easing — the Vercel effect.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["cursor", "glow", "ambient", "light", "orb"],
        previewUrl: "/Animations&Motion/MagneticCursor/GlowOrb",
        code: {
            tsx: getCode("src/components/Animations&Motion/MagneticCursor/tsx/GlowOrb.tsx"),
            jsx: getCode("src/components/Animations&Motion/MagneticCursor/jsx/GlowOrb.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/MagneticCursor/GlowOrb/page.tsx")
        },
        dependencies: ["next"],
        props: [
            { name: "color", type: "string", default: "#818cf8", description: "Color of the ambient glow" },
            { name: "size", type: "number", default: "520", description: "Diameter of the glow orb in pixels" },
        ],
        whenToUse: "The go-to effect for premium SaaS hero sections — used by Vercel, Linear, Raycast, and others. Adds subtle depth without distracting from content.",
        bestPractices: "Keep size between 400-700. Subtle colors (low saturation or low opacity) work best — the effect should feel like ambience, not spotlight. Use alongside a small dot cursor.",
        whyMatters: "Ambient cursor glow is one of the most widely adopted techniques in premium UI design — it makes dark hero sections feel three-dimensional and warm.",
        faqs: [
            { question: "Why does it lag behind the cursor?", answer: "Intentionally — the 0.06 easing factor creates a soft, organic follow that feels premium. The small dot follows precisely." },
            { question: "Does it need canvas?", answer: "No — it's a pure div with a radial-gradient background and requestAnimationFrame position updates. No canvas overhead." }
        ],
    },
];
