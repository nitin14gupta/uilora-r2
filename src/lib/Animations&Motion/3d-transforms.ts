import { getCode } from "../getCode";
import { Component } from "../components-data";

export const transform3DComponents: Component[] = [
    {
        id: "tilt-card",
        name: "Tilt Card",
        description: "Mouse-tracked CSS 3D perspective tilt card with holographic rainbow sheen and glare.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["3d", "tilt", "holographic", "card", "mouse", "css", "perspective"],
        previewUrl: "/Animations&Motion/3DTransforms/UiloraTiltCard",
        code: {
            tsx: getCode("src/components/Animations&Motion/3DTransforms/tsx/UiloraTiltCard.tsx"),
            jsx: getCode("src/components/Animations&Motion/3DTransforms/jsx/UiloraTiltCard.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/3DTransforms/UiloraTiltCard/page.tsx"),
        },
        dependencies: [],
        props: [
            { name: "accentColor", type: "string", default: "#6366f1", description: "Accent color used for glow, progress bars, and spectrum sheen" },
            { name: "glareOpacity", type: "number", default: "0.3", description: "Intensity of the holographic glare overlay (0–1)" },
            { name: "maxTilt", type: "number", default: "20", description: "Maximum tilt angle in degrees on each axis" },
        ],
        whenToUse: "Perfect for product feature cards, pricing cards, and any showcase where you want the card to feel physically present. The holographic sheen makes it feel premium and interactive.",
        bestPractices: "Works best on dark backgrounds. Keep maxTilt between 12–25 degrees. Lower glareOpacity (0.15–0.2) for subtlety, higher (0.4+) for dramatic gloss. The spectrum sheen appears automatically on hover.",
        whyMatters: "Mouse-tracked tilt creates a sense of physicality that flat cards simply can't achieve. Used on premium SaaS sites like Linear and Stripe to communicate craftsmanship.",
        faqs: [
            { question: "Does it use any animation library?", answer: "No — it's pure CSS 3D transforms driven by mouse position with requestAnimationFrame. Zero dependencies." },
            { question: "Does the rainbow sheen color the content?", answer: "No — the sheen uses mix-blend-mode: color so it tints only the card surface without obscuring text or UI." },
        ],
    },
    {
        id: "flip-reveal",
        name: "Flip Reveal",
        description: "Spring-physics 3D card flip that reveals hidden back content on click — with full front/back design.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["3d", "flip", "card", "reveal", "spring", "framer-motion"],
        previewUrl: "/Animations&Motion/3DTransforms/UiloraFlipReveal",
        code: {
            tsx: getCode("src/components/Animations&Motion/3DTransforms/tsx/UiloraFlipReveal.tsx"),
            jsx: getCode("src/components/Animations&Motion/3DTransforms/jsx/UiloraFlipReveal.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/3DTransforms/UiloraFlipReveal/page.tsx"),
        },
        dependencies: ["framer-motion"],
        props: [
            { name: "flipAxis", type: '"x" | "y"', default: '"y"', description: "Axis to flip the card on — y for horizontal flip, x for vertical" },
            { name: "accentColor", type: "string", default: "#f59e0b", description: "Primary accent color for gradients, icons, and the CTA button" },
            { name: "perspective", type: "number", default: "1200", description: "CSS perspective depth in pixels — higher = more subtle 3D effect" },
        ],
        whenToUse: "Ideal for pricing cards that reveal plan details, team member bios, product feature reveals, and any UI where a secondary state deserves dramatic presentation.",
        bestPractices: "Use flipAxis='y' for the classic card flip feel. Set perspective between 800–1400 — lower values create a more dramatic fish-eye 3D effect. The spring physics (stiffness: 70, damping: 14) gives a natural bounce.",
        whyMatters: "A 3D flip creates a clear mental model of front/back — users understand there's hidden content to discover, making it a powerful interaction for reveals and onboarding.",
        faqs: [
            { question: "Can I customize the front and back content?", answer: "Yes — edit the JSX inside the FRONT and BACK sections. The flip mechanism is purely the outer motion.div wrapper." },
            { question: "Does it work on mobile / touch?", answer: "Yes — the onClick handler fires on tap. Touch devices get the full spring flip animation." },
        ],
    },
    {
        id: "depth-stack",
        name: "Depth Stack",
        description: "CSS perspective-3D stacked card deck that fans apart in a 3D arc on click, revealing layered content with spring easing.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["3d", "stack", "cards", "depth", "css", "perspective", "fan"],
        previewUrl: "/Animations&Motion/3DTransforms/UiloraDepthStack",
        code: {
            tsx: getCode("src/components/Animations&Motion/3DTransforms/tsx/UiloraDepthStack.tsx"),
            jsx: getCode("src/components/Animations&Motion/3DTransforms/jsx/UiloraDepthStack.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/3DTransforms/UiloraDepthStack/page.tsx"),
        },
        dependencies: [],
        props: [
            { name: "accentColor", type: "string", default: "#10b981", description: "Theme color for background radial glow and badge accents" },
            { name: "cardCount", type: "number", default: "4", description: "Number of cards in the stack (2–5)" },
            { name: "spread", type: "number", default: "55", description: "Fan spread angle in degrees — how wide the cards arc when expanded" },
        ],
        whenToUse: "Great for showcasing a set of product features, services, or team members as a stacked deck. The fan reveal creates intrigue and encourages interaction.",
        bestPractices: "Keep cardCount between 3–5. Spread of 45–70 degrees works best. The top card (last in array) is the most visible in stacked state — put your hero item there.",
        whyMatters: "Stacked cards with 3D depth communicate that there's more to discover. The spring-eased fan reveal turns a static list into a delightful interactive moment.",
        faqs: [
            { question: "Does it use any library?", answer: "No — pure CSS 3D transforms with CSS transitions. Zero dependencies." },
            { question: "Can I customize card content?", answer: "Yes — edit the CARD_DATA array at the top of the component. Each entry accepts title, tag, color, icon, metric, and label." },
        ],
    },
    {
        id: "hologram",
        name: "Hologram",
        description: "React Three Fiber wireframe icosahedron with nested geometry, equatorial rings, a glowing core, and heavy bloom — the signature sci-fi hologram.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["3d", "three.js", "r3f", "hologram", "wireframe", "bloom", "sci-fi", "canvas"],
        previewUrl: "/Animations&Motion/3DTransforms/UiloraHologram",
        code: {
            tsx: getCode("src/components/Animations&Motion/3DTransforms/tsx/UiloraHologram.tsx"),
            jsx: getCode("src/components/Animations&Motion/3DTransforms/jsx/UiloraHologram.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/3DTransforms/UiloraHologram/page.tsx"),
        },
        dependencies: ["@react-three/fiber", "@react-three/postprocessing", "three"],
        props: [
            { name: "color", type: "string", default: "#00e5ff", description: "Wireframe and ring color — drives the bloom glow hue" },
            { name: "bloomIntensity", type: "number", default: "2", description: "Bloom glow intensity — higher values bleed more light into the scene" },
            { name: "rotationSpeed", type: "number", default: "0.5", description: "Multiplier for all rotation speeds — higher = faster spin" },
        ],
        whenToUse: "The go-to hero for AI products, blockchain projects, and any tech brand that wants to communicate cutting-edge capability. The hologram immediately signals 'advanced technology'.",
        bestPractices: "Use on near-black backgrounds (#010306 or darker). The scanline overlay is subtle — increase its opacity for a more retro CRT look. Keep bloomIntensity between 1.5–3 for maximum impact without washing out the scene.",
        whyMatters: "The wireframe hologram is one of the most potent visual metaphors in technology — instantly communicating that something complex and powerful is at work.",
        faqs: [
            { question: "Why are there two icosahedrons?", answer: "The outer (detail=1) has subdivided triangles for a complex wireframe. The inner (detail=0) rotates in the opposite direction, creating a dynamic nested effect." },
            { question: "Can I change the geometry?", answer: "Yes — replace icosahedronGeometry with dodecahedronGeometry, torusKnotGeometry, or any Three.js geometry for a different silhouette." },
        ],
    },
];
