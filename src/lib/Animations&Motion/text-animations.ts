import { getCode } from "../getCode";
import { Component } from "../components-data";

export const textAnimationComponents: Component[] = [
    {
        id: "magnetic-hover",
        name: "Magnetic Hover",
        description: "Variable font weight responds to mouse proximity creating magnetic effect.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["text", "animation", "magnetic", "hover", "interactive"],
        previewUrl: "/Animations&Motion/TextAnimations/MagneticHover",
        code: {
            tsx: getCode("src/components/Animations&Motion/TextAnimations/tsx/MagneticHover.tsx"),
            jsx: getCode("src/components/Animations&Motion/TextAnimations/jsx/MagneticHover.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/TextAnimations/MagneticHover/page.tsx")
        },
        dependencies: ["next", "framer-motion"],
        props: [
            { name: "text", type: "string", default: "MAGNETIC", description: "Text to display" },
            { name: "color", type: "string", default: "#ffffff", description: "Active character color when near cursor" },
        ],
        whenToUse: "Ideal for landing page headlines, luxury brands, and high-impact web applications where a tactile, responsive header is needed.",
        bestPractices: "Use with a variable font that supports weight axes for the smoothest effect. Keep text to a single short word or phrase for maximum impact.",
        whyMatters: "Variable fonts are at the forefront of modern UI typography. This component makes your interface feel alive and premium.",
        faqs: [
            { question: "Does this require a special font?", answer: "Yes, it works best with variable fonts that support weight axes." },
            { question: "Is it mobile-friendly?", answer: "Yes, it supports touch move events for a similar experience on mobile." }
        ],
    },
    {
        id: "vertical-loop",
        name: "Vertical Loop",
        description: "Seamless vertical carousel of words with smooth looping animation.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["text", "animation", "loop", "carousel", "vertical"],
        previewUrl: "/Animations&Motion/TextAnimations/VerticalLoop",
        code: {
            tsx: getCode("src/components/Animations&Motion/TextAnimations/tsx/VerticalLoop.tsx"),
            jsx: getCode("src/components/Animations&Motion/TextAnimations/jsx/VerticalLoop.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/TextAnimations/VerticalLoop/page.tsx")
        },
        dependencies: ["next", "framer-motion"],
        props: [
            { name: "words", type: "string[]", default: "[\"DREAM\", \"BUILD\", \"CREATE\", \"SHIP\", \"REPEAT\"]", description: "Array of words to loop through" },
            { name: "duration", type: "number", default: "4", description: "Duration in seconds for each word" },
        ],
        whenToUse: "Perfect for hero sections, elevator pitches, and feature summaries. Cycle through key value propositions in a compact, energetic way.",
        bestPractices: "Provide words of similar length to avoid sudden layout shifts. Use 3-7 words for the best rhythm.",
        whyMatters: "Vertical loops are a hallmark of modern SaaS homepages, adding momentum and authority to your messaging.",
        faqs: [
            { question: "How many words can I include?", answer: "Optimized for 3-7 words. Too many can make the loop feel too slow or fast." },
            { question: "Does it support custom fonts?", answer: "Yes, it inherits all global typography styles." }
        ],
    },
    {
        id: "flag-wave",
        name: "Flag Wave",
        description: "Characters animate in wave motion creating a flag-like undulation.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["text", "animation", "wave", "flag", "undulation"],
        previewUrl: "/Animations&Motion/TextAnimations/FlagWave",
        code: {
            tsx: getCode("src/components/Animations&Motion/TextAnimations/tsx/FlagWave.tsx"),
            jsx: getCode("src/components/Animations&Motion/TextAnimations/jsx/FlagWave.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/TextAnimations/FlagWave/page.tsx")
        },
        dependencies: ["next", "framer-motion"],
        props: [
            { name: "text", type: "string", default: "UNDULATION", description: "Text to display" },
            { name: "color", type: "string", default: "#60a5fa", description: "Color of the text" },
        ],
        whenToUse: "Great for titles that need an organic, rhythmic animation as if blowing in the wind. Works well on travel, maritime, or lifestyle sites.",
        bestPractices: "Keep amplitude subtle (10-20px) for readability. Use uppercase short words for the strongest visual impact.",
        whyMatters: "Fluid wave motion adds visual rhythm that draws the eye naturally across your headline.",
        faqs: [
            { question: "Is the wave speed adjustable?", answer: "The wave timing is baked in but works consistently across font sizes." },
            { question: "Does it work with special characters?", answer: "Yes, every character including spaces and symbols is animated independently." }
        ],
    },
    {
        id: "masked-reveal",
        name: "Masked Reveal",
        description: "Staggered word reveal with 3D rotation and gradient fade.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["text", "animation", "mask", "stagger", "3d"],
        previewUrl: "/Animations&Motion/TextAnimations/MaskedReveal",
        code: {
            tsx: getCode("src/components/Animations&Motion/TextAnimations/tsx/MaskedReveal.tsx"),
            jsx: getCode("src/components/Animations&Motion/TextAnimations/jsx/MaskedReveal.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/TextAnimations/MaskedReveal/page.tsx")
        },
        dependencies: ["next", "framer-motion"],
        props: [
            { name: "text", type: "string", default: "Orchestrated Chaos", description: "Text to reveal" },
            { name: "stagger", type: "number", default: "0.12", description: "Delay in seconds between each word" },
        ],
        whenToUse: "Perfect for elegant brand introductions, minimalist landing pages, and cinematic web experiences.",
        bestPractices: "Use with multi-word phrases for maximum stagger impact. Works best with large, bold font sizes.",
        whyMatters: "Orchestrated reveals are a staple of premium modern UI, adding a layer of polish to your content entry.",
        faqs: [
            { question: "Can I reveal character by character?", answer: "Currently word-based; the logic can be adapted for characters." },
            { question: "Is the 3D rotation mandatory?", answer: "No — set initialRotateX to 0 for a simple vertical slide reveal." }
        ],
    },
    {
        id: "perspective-hover",
        name: "Perspective Hover",
        description: "3D perspective tilt effect on hover with depth layers.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["text", "animation", "perspective", "3d", "hover"],
        previewUrl: "/Animations&Motion/TextAnimations/PerspectiveHover",
        code: {
            tsx: getCode("src/components/Animations&Motion/TextAnimations/tsx/PerspectiveHover.tsx"),
            jsx: getCode("src/components/Animations&Motion/TextAnimations/jsx/PerspectiveHover.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/TextAnimations/PerspectiveHover/page.tsx")
        },
        dependencies: ["next", "framer-motion"],
        props: [
            { name: "text", type: "string", default: "Depth", description: "Text to display" },
            { name: "maxRotation", type: "number", default: "17.5", description: "Maximum rotation angle in degrees for the tilt effect" },
        ],
        whenToUse: "Ideal for artistic portfolios, luxury brands, and interactive apps that want to emphasize depth and dimension.",
        bestPractices: "Keep maxRotation under 25° to avoid extreme distortion. Works best as a single, short, bold word.",
        whyMatters: "Parallax depth adds sophistication that static text simply cannot match.",
        faqs: [
            { question: "Does it follow the mouse or scroll?", answer: "Mouse-based for a reactive, holographic feel on hover." },
            { question: "How many depth layers can I add?", answer: "Optimized for 2-3 layers for best performance." }
        ],
    },
    {
        id: "velocity-scroll",
        name: "Velocity Scroll",
        description: "Infinite scrolling text that responds to scroll velocity.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["text", "animation", "velocity", "scroll", "infinite"],
        previewUrl: "/Animations&Motion/TextAnimations/VelocityScroll",
        code: {
            tsx: getCode("src/components/Animations&Motion/TextAnimations/tsx/VelocityScroll.tsx"),
            jsx: getCode("src/components/Animations&Motion/TextAnimations/jsx/VelocityScroll.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/TextAnimations/VelocityScroll/page.tsx")
        },
        dependencies: ["next", "framer-motion"],
        props: [
            { name: "texts", type: "[string, string]", default: "[\"Kinetic Motion\", \"Scroll Velocity\"]", description: "Two text strings for the top and bottom marquee rows" },
            { name: "baseVelocity", type: "number", default: "3", description: "Base scroll speed — top row goes left, bottom row goes right" },
        ],
        whenToUse: "Perfect for news tickers, event announcements, and dynamic hero sections that respond to user scroll behavior.",
        bestPractices: "Keep baseVelocity between 2-5 for comfortable reading speed. Use uppercase bold text for maximum visual impact.",
        whyMatters: "Velocity-based interaction makes the site feel responsive to user behavior, adding energy and momentum.",
        faqs: [
            { question: "Can I reverse the scroll direction?", answer: "Yes, using a negative baseVelocity reverses the direction." },
            { question: "How does it handle different screen sizes?", answer: "Uses percentage-based wrapping for seamless loops across all screen widths." }
        ],
    },
    {
        id: "stroke-fill",
        name: "Stroke Fill",
        description: "SVG text animates from stroke to fill with smooth transition.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["text", "animation", "svg", "stroke", "fill"],
        previewUrl: "/Animations&Motion/TextAnimations/StrokeFill",
        code: {
            tsx: getCode("src/components/Animations&Motion/TextAnimations/tsx/StrokeFill.tsx"),
            jsx: getCode("src/components/Animations&Motion/TextAnimations/jsx/StrokeFill.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/TextAnimations/StrokeFill/page.tsx")
        },
        dependencies: ["next", "framer-motion"],
        props: [
            { name: "text", type: "string", default: "Elegance", description: "Text to animate" },
            { name: "duration", type: "number", default: "3", description: "Total animation duration in seconds" },
        ],
        whenToUse: "Excellent for luxury brand logos, cinematic intros, and high-impact reveals where text starts as an outline and fills solid.",
        bestPractices: "Use short, single-word or two-word phrases. Larger font sizes make the stroke animation more legible.",
        whyMatters: "SVG stroke animations are a classic mark of quality UI — they create anticipation and add narrative to your content reveal.",
        faqs: [
            { question: "Does it work with any font?", answer: "Yes, any web font works as the SVG paths are generated from the rendered text." },
            { question: "Can I trigger the fill on hover?", answer: "The current implementation is time-based; hover triggering requires a small state change." }
        ],
    },
    {
        id: "shimmer-text",
        name: "Shimmer Text",
        description: "A bright glint sweeps continuously across bold text like light reflecting off metal.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["text", "animation", "shimmer", "glint", "gradient"],
        previewUrl: "/Animations&Motion/TextAnimations/ShimmerText",
        code: {
            tsx: getCode("src/components/Animations&Motion/TextAnimations/tsx/ShimmerText.tsx"),
            jsx: getCode("src/components/Animations&Motion/TextAnimations/jsx/ShimmerText.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/TextAnimations/ShimmerText/page.tsx")
        },
        dependencies: ["next"],
        props: [
            { name: "text", type: "string", default: "LUMINOUS", description: "Text to display" },
            { name: "color", type: "string", default: "#e879f9", description: "Base color of the text — the shimmer glint sweeps across this" },
        ],
        whenToUse: "Perfect for luxury brands, loading states, feature callouts, and any headline that needs to feel alive without being distracting.",
        bestPractices: "Use uppercase, single bold words for the sharpest glint effect. Choose a color that contrasts well against the dark background.",
        whyMatters: "A perpetual shimmer communicates premium quality with zero user interaction — it works even on static pages and adds life to hero sections at no cognitive cost.",
        faqs: [
            { question: "Does this need Framer Motion?", answer: "No — it uses a pure CSS background-position animation, keeping the bundle size minimal." },
            { question: "Can I slow down the sweep?", answer: "Yes, change the animation duration (3.5s default) in the injected style tag in the component source." }
        ],
    },
    {
        id: "scramble-reveal",
        name: "Scramble Reveal",
        description: "Characters cycle through random symbols before resolving to the final text on viewport entry.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["text", "animation", "scramble", "decode", "reveal"],
        previewUrl: "/Animations&Motion/TextAnimations/ScrambleReveal",
        code: {
            tsx: getCode("src/components/Animations&Motion/TextAnimations/tsx/ScrambleReveal.tsx"),
            jsx: getCode("src/components/Animations&Motion/TextAnimations/jsx/ScrambleReveal.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/TextAnimations/ScrambleReveal/page.tsx")
        },
        dependencies: ["next"],
        props: [
            { name: "text", type: "string", default: "UILORA", description: "Final text to reveal after scrambling" },
            { name: "duration", type: "number", default: "1.8", description: "Seconds to complete the full decode from left to right" },
        ],
        whenToUse: "Ideal for tech dashboards, developer tools, security-themed sites, and any headline where you want a moment of intrigue before the message lands.",
        bestPractices: "Use short uppercase words (4-8 chars) for maximum readability during the scramble phase. Monospace font is applied automatically for stable character widths.",
        whyMatters: "The scramble-to-reveal creates anticipation and reward — the user watches chaos resolve into order, making the final word feel earned and memorable.",
        faqs: [
            { question: "Does it replay on scroll?", answer: "No — it fires once via IntersectionObserver when 30% of the element enters the viewport." },
            { question: "Does it need any library?", answer: "No — pure React with requestAnimationFrame. No Framer Motion dependency." }
        ],
    },
    {
        id: "pressure-test",
        name: "Pressure Test",
        description: "Variable font axes shift in real-time based on mouse proximity to each character.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["text", "animation", "variable-font", "interactive", "proximity"],
        previewUrl: "/Animations&Motion/TextAnimations/PressureTest",
        code: {
            tsx: getCode("src/components/Animations&Motion/TextAnimations/tsx/PressureTest.tsx"),
            jsx: getCode("src/components/Animations&Motion/TextAnimations/jsx/PressureTest.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/TextAnimations/PressureTest/page.tsx")
        },
        dependencies: ["next"],
        props: [
            { name: "text", type: "string", default: "UILORA", description: "Text to display — each character responds independently to cursor proximity" },
            { name: "className", type: "string", default: "text-white", description: "Tailwind class for text color" },
        ],
        whenToUse: "Perfect for hero sections and interactive brand moments where you want text that feels physically responsive to the user's cursor.",
        bestPractices: "Use a variable font (the built-in Compressa VF is loaded automatically). Works best with short, uppercase words. Set className to control text color.",
        whyMatters: "Variable font interactivity is a frontier technique that makes typography feel tactile and alive — impossible to achieve with static text.",
        faqs: [
            { question: "Does it require a specific font?", answer: "It loads the Compressa VF variable font automatically via the fontUrl prop. You can swap it for any variable font that supports wght, wdth, and ital axes." },
            { question: "Is it mobile-friendly?", answer: "Yes, it supports touchmove events so the effect also works on touch devices." }
        ],
    },
    {
        id: "type-writer",
        name: "TypeWriter",
        description: "Classic typewriter effect cycles through words with a blinking cursor.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["text", "animation", "typewriter", "cursor", "cycle"],
        previewUrl: "/Animations&Motion/TextAnimations/TypeWriter",
        code: {
            tsx: getCode("src/components/Animations&Motion/TextAnimations/tsx/TypeWriter.tsx"),
            jsx: getCode("src/components/Animations&Motion/TextAnimations/jsx/TypeWriter.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/TextAnimations/TypeWriter/page.tsx")
        },
        dependencies: ["next"],
        props: [
            { name: "words", type: "string[]", default: "[\"Design.\", \"Build.\", \"Ship.\", \"Scale.\"]", description: "Array of words to cycle through" },
            { name: "typingSpeed", type: "number", default: "80", description: "Milliseconds per character when typing" },
        ],
        whenToUse: "A versatile staple for hero sections, CTAs, and any context where you want to cycle through multiple values or actions dynamically.",
        bestPractices: "Keep words short (1-2 words) for the smoothest effect. Use words that share a grammatical structure for cohesive reading.",
        whyMatters: "Typewriter effects communicate dynamism and list multiple value propositions without cluttering the layout.",
        faqs: [
            { question: "Can I control the delete speed?", answer: "Deleting runs at half the typing speed automatically for a natural feel." },
            { question: "How long does it pause between words?", answer: "1800ms pause after each word is fully typed before deleting begins." }
        ],
    },
    {
        id: "text-morph",
        name: "Text Morph",
        description: "Words blur and cross-fade into each other with smooth AnimatePresence transitions.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["text", "animation", "morph", "blur", "crossfade"],
        previewUrl: "/Animations&Motion/TextAnimations/TextMorph",
        code: {
            tsx: getCode("src/components/Animations&Motion/TextAnimations/tsx/TextMorph.tsx"),
            jsx: getCode("src/components/Animations&Motion/TextAnimations/jsx/TextMorph.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/Animations&Motion/TextAnimations/TextMorph/page.tsx")
        },
        dependencies: ["next", "framer-motion"],
        props: [
            { name: "words", type: "string[]", default: "[\"Innovative\", \"Scalable\", \"Production-Ready\", \"Beautiful\"]", description: "Array of words to morph between" },
            { name: "duration", type: "number", default: "2.5", description: "Seconds each word is displayed before morphing" },
        ],
        whenToUse: "Great for hero adjective cycling, feature description carousels, and any place a smooth, cinematic word transition is desired.",
        bestPractices: "Use single adjectives or short phrases of similar length. Pair with a static prefix/suffix for full sentence flow.",
        whyMatters: "Blur morphing creates an organic transition that feels designed rather than mechanical — elevating a simple word cycle to a premium experience.",
        faqs: [
            { question: "How is this different from TypeWriter?", answer: "TextMorph uses blur cross-fades instead of character-by-character typing — it's more cinematic and less mechanical." },
            { question: "Can I use it for phrases?", answer: "Yes, multi-word phrases work well — keep them short enough to fit on one line." }
        ],
    },
];
