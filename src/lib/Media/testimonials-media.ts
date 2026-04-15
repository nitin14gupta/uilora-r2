import { getCode } from "../getCode";
import { Component } from "../types";

export const testimonialsMediaComponents: Component[] = [
    {
        id: "clay-stack",
        name: "Clay Stack",
        description: "Draggable claymation-style testimonial cards with swipe gestures.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "draggable", "clay", "stack"],
        previewUrl: "/Media/TestimonialsMedia/ClayStack",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/ClayStack.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/ClayStack.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/ClayStack/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "cards", type: "Array<{id: number, text: string, author: string, color: string}>", default: "[{id: 1, text: 'Uilora changed how our team ships...', author: 'Mike T.', color: '#fef08a'}, ...]", description: "Array of card objects with id, text, author, and background color." },
            { name: "backgroundColor", type: "string", default: "#f0f0f0", description: "Background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for product landing pages, SaaS platforms, and Uilora-powered apps that want a tactile, physical testimonial experience. The draggable deck mechanic makes passive content feel interactive and memorable.",
        bestPractices: "Keep the card stack to 3–5 items. Use distinct pastel colors per card so each testimonial feels like its own visual identity. Pair with bold Uilora typography for maximum contrast.",
        whyMatters: "Physical drag interactions create a sense of weight and authenticity that static quotes can't match. Users spend more time engaging with draggable content, increasing the credibility signal of each testimonial.",
        faqs: [
            { question: "How does the drag work?", answer: "Each card uses Framer Motion's drag constraints and spring physics. Dragging past a threshold fans the card out and dismisses it, revealing the next one underneath." },
            { question: "Can I use images in the cards?", answer: "The cards prop accepts any content — extend the card shape to include an optional image field and render it inside the card body." },
            { question: "Is it mobile responsive?", answer: "Yes. The stack scales to fit the container width and touch drag works natively on mobile via Framer Motion's pointer events." }
        ],
    },
    {
        id: "expanding-gallery",
        name: "Expanding Gallery",
        description: "Luxury testimonial gallery with expanding card animations.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "gallery", "expanding", "luxury"],
        previewUrl: "/Media/TestimonialsMedia/ExpandingGallery",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/ExpandingGallery.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/ExpandingGallery.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/ExpandingGallery/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "items", type: "Array<{id: string, title: string, img: string, quote: string}>", default: "[{id: '1', title: 'Elegant Workflow', img: '...', quote: '...'}, ...]", description: "Array of gallery items with id, title, image URL, and quote." },
            { name: "backgroundColor", type: "string", default: "#f5f5f4", description: "Background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Perfect for premium brands, creative agencies, and Uilora portfolio sites that want an editorial testimonial experience. The expanding interaction transforms a passive quote list into an immersive story.",
        bestPractices: "Use high-resolution, high-contrast photography for each gallery item. Keep quotes concise (1–2 sentences) — the expansion animation is the storytelling mechanism, not the text length.",
        whyMatters: "Shared-element transitions create a seamless visual continuity that communicates design craftsmanship. When a testimonial expands smoothly from a thumbnail, it signals that the product itself has the same level of polish.",
        faqs: [
            { question: "How does the expansion work?", answer: "Each item uses Framer Motion's layoutId to share geometry between the thumbnail and the expanded state, creating a fluid morph without any position calculations." },
            { question: "How many items should I use?", answer: "3–6 items work best. Too few loses the gallery feel; too many makes the row feel cluttered before any interaction." },
            { question: "Is it mobile responsive?", answer: "On small screens the items stack vertically and the expansion fills the screen width, maintaining the immersive feel." }
        ],
    },
    {
        id: "monolith",
        name: "The Monolith",
        description: "Architectural 3D reveal testimonial that cracks open to show content.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "3d", "architectural", "reveal"],
        previewUrl: "/Media/TestimonialsMedia/Monolith",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/Monolith.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/Monolith.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/Monolith/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "video", type: "string", default: "https://assets.mixkit.co/videos/mixkit-ink-swirling-in-water-2056-large.mp4", description: "Background video source URL." },
            { name: "backgroundColor", type: "string", default: "#0a0a0a", description: "Background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Built for enterprise SaaS, technical agencies, and high-stakes product launches. The cracking reveal mechanic communicates structural confidence — this is what a product looks like when it has nothing to hide.",
        bestPractices: "Use dark, abstract video content (smoke, ink, particles) for the background to maximize the monolithic feel. The baked Uilora stats and quote are production-ready — swap out the video URL for your own brand asset.",
        whyMatters: "Architectural reveal animations communicate authority and permanence. When a testimonial feels like it's been carved from stone, the endorsement carries more weight than a standard quote card.",
        faqs: [
            { question: "How does the crack animation work?", answer: "Two halves of the monolith are positioned with perspective transforms. On hover/interaction, they rotate apart on the Y axis, revealing the testimonial content behind them." },
            { question: "Can I change the stats?", answer: "The stats (efficiency, deploy time) are baked as module-level constants inside the component. Fork the file and update the STATS array to reflect your product metrics." },
            { question: "Is it mobile responsive?", answer: "The perspective depth scales down gracefully on mobile. The crack animation still fires on tap, maintaining the reveal mechanic on touch devices." }
        ],
    },
    {
        id: "kinetic-stream",
        name: "Kinetic Stream",
        description: "Interactive typography testimonial with expanding word context.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "typography", "interactive", "stream"],
        previewUrl: "/Media/TestimonialsMedia/KineticStream",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/KineticStream.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/KineticStream.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/KineticStream/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "words", type: "Array<{text: string, video: string, quote: string}>", default: "[{text: 'Fast.', video: '...', quote: '...'}, ...]", description: "Array of word objects — each word expands on hover to reveal a video and quote." },
            { name: "backgroundColor", type: "string", default: "#ffffff", description: "Background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for product feature showcases, Uilora brand storytelling pages, and editorial-style landing pages. Each word becomes a portal into a specific benefit or customer story.",
        bestPractices: "Keep words to single impactful adjectives or short phrases (Fast., Beautiful., Reliable.). Use short looping videos for each word — 5–10 seconds works best. The contrast between minimal text and rich video creates the tension that drives engagement.",
        whyMatters: "Kinetic typography transforms passive reading into active discovery. When hovering a word reveals the human story behind it, the testimonial feels earned rather than placed.",
        faqs: [
            { question: "How does the hover expansion work?", answer: "Each word is a motion element that expands its width and height on hover, revealing a video and quote via AnimatePresence. The layout shift is handled by Framer Motion's layout prop." },
            { question: "How many words should I use?", answer: "3–5 words is the sweet spot. Each word should represent a distinct product dimension — speed, design, support, etc." },
            { question: "Is it mobile responsive?", answer: "On mobile, words expand on tap. The video preview scales to fill the expanded word card without overflow." }
        ],
    },
    {
        id: "sonic-orb",
        name: "Sonic Orb",
        description: "High-end audio testimonial with mesmerizing orb visualization.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "audio", "orb", "visualization"],
        previewUrl: "/Media/TestimonialsMedia/SonicOrb",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/SonicOrb.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/SonicOrb.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/SonicOrb/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80", description: "Speaker portrait image URL." },
            { name: "backgroundColor", type: "string", default: "#111111", description: "Background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Best for audio-first products, podcast platforms, creator tools, and Uilora premium brand moments where a testimonial needs to feel alive. The orb visualization communicates that something is being said, not just written.",
        bestPractices: "Use a clean, high-contrast portrait photo for the speaker image. The dark default background maximizes the orb glow effect — lighter backgrounds reduce the visual impact of the rings.",
        whyMatters: "Audio testimonials have higher credibility than text, but most sites only use static quotes. The Sonic Orb bridges the gap — it gives the impression of an audio experience through motion alone, with none of the playback complexity.",
        faqs: [
            { question: "Is there real audio?", answer: "No — the orb rings animate independently to simulate a speaking visualization. This keeps the component lightweight with no audio file dependency." },
            { question: "Can I change the number of rings?", answer: "The ring count is baked as a constant inside the component (default 6). Fork the file and update RING_COUNT to add or remove rings." },
            { question: "Is it mobile responsive?", answer: "The orb and portrait scale proportionally. On small screens the layout switches to a vertical stack with the orb above the quote." }
        ],
    },
    {
        id: "prism-card",
        name: "Prism Card",
        description: "Premium holographic foil card testimonial with color-shifting effects.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "card", "holographic", "premium"],
        previewUrl: "/Media/TestimonialsMedia/PrismCard",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/PrismCard.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/PrismCard.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/PrismCard/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "backgroundColor", type: "string", default: "#f5f5f4", description: "Background color (hex, rgb, or hsl)." },
            { name: "accentColor", type: "string", default: "#7c3aed", description: "Accent color for avatar, stars, and button (hex, rgb, or hsl)." },
        ],
        whenToUse: "Excellent for SaaS product pages, Uilora premium showcases, and any context where a single standout testimonial needs to feel like a collectible artifact — not just a quote block.",
        bestPractices: "Use on a neutral or light background so the holographic foil effect has maximum contrast. The default Uilora purple accent pairs well with both light and dark page backgrounds.",
        whyMatters: "A holographic card communicates rarity and exclusivity. When a testimonial looks like a trading card, readers instinctively treat the endorsement as more valuable — it's a collector's item, not generic social proof.",
        faqs: [
            { question: "How does the foil effect work?", answer: "A conic-gradient overlay shifts position based on mouse movement using Framer Motion's useMotionValue and useTransform hooks, simulating light hitting a reflective surface." },
            { question: "Can I change the testimonial content?", answer: "The quote, author, and role are baked as Uilora-branded constants inside the component. Fork the file and update the QUOTE, AUTHOR, and ROLE constants." },
            { question: "Is it mobile responsive?", answer: "The card scales to fit mobile screens. The foil effect switches to a static tilt animation on touch devices since mousemove is not available." }
        ],
    },
    {
        id: "wave-flow",
        name: "Wave Flow",
        description: "Dark gradient edtech testimonials with animated SVG wave streams and floating avatars.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "wave", "dark", "animated"],
        previewUrl: "/Media/TestimonialsMedia/WaveFlow",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/WaveFlow.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/WaveFlow.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/WaveFlow/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "accentColor", type: "string", default: "#818cf8", description: "Wave stroke, heading accent, and avatar ring color (hex, rgb, or hsl)." },
            { name: "backgroundColor", type: "string", default: "#0f0c29", description: "Gradient start color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Perfect for edtech platforms, SaaS products, and Uilora pages that want a high-energy testimonial section that communicates scale and momentum. The flowing wave streams visualize the network effect of thousands of users.",
        bestPractices: "Keep the background dark — the wave and avatar effects lose impact on light backgrounds. The 3-column card grid works best with quotes under 40 words to prevent uneven card heights.",
        whyMatters: "Wave streams suggest connection and flow, not static content. When testimonials are embedded in a living visual system, readers feel they are joining something in motion — not reading marketing copy.",
        faqs: [
            { question: "How do the avatars float?", answer: "Each avatar is a motion.div with animate={{ y: [0, -8, 0] }} on an infinite loop, staggered by index * 0.35s delay so they ripple asynchronously along the wave." },
            { question: "Can I add more testimonial cards?", answer: "The TESTIMONIALS array is baked as a module constant. Add items to the array — the grid auto-expands. For more than 3, switch the grid to grid-cols-2 for better readability." },
            { question: "What is the arrow button in the middle card?", answer: "A navigation affordance for the active/featured testimonial. Wire it to a modal or expanded view in your implementation." }
        ],
    },
    {
        id: "stat-split",
        name: "Stat Split",
        description: "Clean fintech testimonial rows pairing portrait photos with quotes and bold stat numbers.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "stats", "fintech", "minimal"],
        previewUrl: "/Media/TestimonialsMedia/StatSplit",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/StatSplit.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/StatSplit.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/StatSplit/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "backgroundColor", type: "string", default: "#f8f8f8", description: "Page background color (hex, rgb, or hsl)." },
            { name: "accentColor", type: "string", default: "#e53e3e", description: "Color for the large stat numbers (hex, rgb, or hsl)." },
        ],
        whenToUse: "Built for fintech, banking, and SaaS products that need to pair human testimonials with quantitative proof. The stat column anchors each quote with a number that is impossible to ignore.",
        bestPractices: "Use real portrait photography for maximum credibility — the full-height photo column makes low-quality images obvious. Keep stats to 2–3 characters maximum so the number reads at a glance.",
        whyMatters: "Combining a human face with a hard number creates the highest-trust testimonial format. The face provides emotional resonance; the stat provides rational justification. Together they close skeptics.",
        faqs: [
            { question: "How are the rows structured?", answer: "Each row is a flex container: photo section | divider | quote section | divider | stat section. The dividers are 1px borders that create visual separation without heavy UI chrome." },
            { question: "Can I add more rows?", answer: "Add items to the TESTIMONIALS array and the layout will extend. Match each item with a STATS entry for the corresponding row stat and label." },
            { question: "Is it mobile responsive?", answer: "On mobile the rows stack vertically — photo on top, quote below, stat as a bold accent line at the bottom of each row." }
        ],
    },
    {
        id: "trend-showcase",
        name: "Trend Showcase",
        description: "Fashion editorial testimonial with bento-grid panels, overlapping photos, and a quote card.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "fashion", "editorial", "bento"],
        previewUrl: "/Media/TestimonialsMedia/TrendShowcase",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/TrendShowcase.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/TrendShowcase.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/TrendShowcase/page.tsx") },
        dependencies: ["lucide-react"],
        props: [
            { name: "backgroundColor", type: "string", default: "#f5f0e8", description: "Outer page background color (hex, rgb, or hsl)." },
            { name: "accentColor", type: "string", default: "#f59e0b", description: "Accent color for badges, CTA panel, and decorative elements (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for fashion e-commerce, lifestyle brands, and Uilora portfolio showcases that want testimonials embedded in an editorial layout — not isolated in a card row.",
        bestPractices: "Use high-contrast fashion photography with warm tones to complement the cream/amber palette. Pair the quote section with a short, punchy testimonial — the layout itself is the storytelling vehicle.",
        whyMatters: "Fashion consumers are visually driven. A testimonial surrounded by product imagery and editorial photography creates context — the endorsement feels like part of the product experience, not an add-on.",
        faqs: [
            { question: "How does the bento grid work?", answer: "The component uses two flex rows with percentage-based width splits. Each panel is a flex child — no grid CSS, so the proportions reflow naturally at different container widths." },
            { question: "Can I change the photos?", answer: "All image URLs are baked as module-level constants (PANEL_IMAGES). Fork the file and swap the URLs to match your brand's photography." },
            { question: "Is it mobile responsive?", answer: "On mobile the panels stack vertically in order: dark heading panel, main photo, quote card, CTA, product image. The bento feel becomes a clean vertical story." }
        ],
    },
    {
        id: "proof-grid",
        name: "Proof Grid",
        description: "Clean social-proof section with a bold stat, avatar stack, CTA buttons, and a bottom-fading testimonial grid.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "grid", "stats", "social-proof"],
        previewUrl: "/Media/TestimonialsMedia/ProofGrid",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/ProofGrid.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/ProofGrid.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/ProofGrid/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "backgroundColor", type: "string", default: "#ffffff", description: "Page background color (hex, rgb, or hsl)." },
            { name: "accentColor", type: "string", default: "#000000", description: "Color for the stat number, headings, and primary button (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for SaaS platforms, website builders, and Uilora-powered landing pages that need to pair a large social-proof number with real customer quotes. The grid format makes many testimonials scannable without overwhelming the page.",
        bestPractices: "Keep the STAT to 3–5 characters for maximum visual impact. Use 6–9 testimonial cards — the bottom fade naturally hides the last row, creating an infinite depth effect that invites scrolling. Match accentColor to your brand's primary CTA color.",
        whyMatters: "A single large number ('250K+ websites') anchors the testimonial section with a quantitative claim that is impossible to ignore. Pairing it with real voices immediately validates the number, converting skeptics who might dismiss the stat alone.",
        faqs: [
            { question: "How does the bottom fade work?", answer: "A CSS maskImage gradient fades the grid from fully visible at the top to transparent at the bottom. The fade starts at 60% of the grid height, making the last row visually dissolve rather than hard-cut." },
            { question: "Can I change the stat and label?", answer: "The STAT, STAT_LABEL, TAGLINE, and TAGLINE_SUB are all module-level constants at the top of the file. Fork the component and update them to match your product metrics." },
            { question: "Is it mobile responsive?", answer: "Yes. The header switches from a side-by-side layout to a vertical stack on mobile. The grid collapses from 3 columns to 2 on tablet and 1 on mobile, with the fade effect preserved on all sizes." }
        ],
    },
    {
        id: "founder-badge",
        name: "Founder Badge",
        description: "Auto-cycling ID badge testimonials with lanyard clip and physical card stack.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "badge", "auto", "founder"],
        previewUrl: "/Media/TestimonialsMedia/FounderBadge",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/FounderBadge.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/FounderBadge.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/FounderBadge/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "backgroundColor", type: "string", default: "#f2f2ee", description: "Page background color (hex, rgb, or hsl)." },
            { name: "accentColor", type: "string", default: "#9aaa1f", description: "Section label accent color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Built for founder-led products, SaaS companies, and Uilora showcase pages that want credibility through recognizable brand logos and real voices. The auto-cycling keeps the section alive without any user action.",
        bestPractices: "Keep quotes to 2–4 sentences — the card height is fixed and longer quotes get clipped. Use the DiceBear notionists style for avatars to maintain a consistent illustrated-portrait aesthetic across all 6 testimonials.",
        whyMatters: "An ID badge carries institutional weight. When a testimonial arrives in a physical card format with a lanyard clip, it feels like a credential — not a marketing quote. The auto-cycling creates momentum without pagination friction.",
        faqs: [
            { question: "How does the auto-cycling work?", answer: "A setInterval fires every 2 seconds and advances the current index. AnimatePresence handles the enter/exit spring animation between cards. The interval clears on unmount." },
            { question: "Can I change the cycle speed?", answer: "The AUTO_ADVANCE_MS constant at the top of the file controls the interval. Change it to any value in milliseconds — 3000 for a slower pace, 1000 for rapid cycling." },
            { question: "What is the badge clip?", answer: "A Framer Motion div whose width animates to a different value per testimonial, simulating different physical clip widths. The inset box-shadow gives it a stamped metal appearance." }
        ],
    },
];
