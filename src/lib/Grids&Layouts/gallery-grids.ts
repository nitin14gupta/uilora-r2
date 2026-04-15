import { getCode } from "../getCode";
import { Component } from "../types";

export const galleryGridComponents: Component[] = [
    {
        id: "gallery-parallax-columns",
        name: "Parallax Columns",
        description: "Uilora Parallax Columns — cinematic scroll-driven gallery with three independent layers.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["gallery", "parallax", "columns", "fashion"],
        previewUrl: "/Grids&Layouts/GalleryGrids/GalleryParallaxColumns",
        code: {
            tsx: getCode("src/components/Grids&Layouts/GalleryGrids/tsx/GalleryParallaxColumns.tsx"),
            jsx: getCode("src/components/Grids&Layouts/GalleryGrids/jsx/GalleryParallaxColumns.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/GalleryGrids/GalleryParallaxColumns/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[...9 image URLs]", description: "Array of image URLs to display in columns." },
            { name: "backgroundColor", type: "string", default: "#f5f5f4", description: "Background color (hex, rgb, or hsl)." },
            { name: "columnCount", type: "number", default: "3", description: "Number of columns (2, 3, or 4)." },
        ],
        whenToUse: "Ideal for high-end fashion portfolios, editorial magazines, and creative agencies that want a cinematic 'Parallax' aesthetic. Use this gallery to showcase photography with a sense of layered movement and sophisticated depth.",
        bestPractices: "Follow React best practices by pairing this with professional, high-contrast photography. Maintain consistent spacing within your design system by keeping the column gaps uniform. Optimize for performance by managed the scroll-trigger renders.",
        whyMatters: "Parallax columns communicate digital power, depth, and structural complexity. This Uilora-ready template helps you build an interface that feels architectural and premium, leaving a lasting visual impression on high-value clients.",
        faqs: [
            { question: "How does the parallax work?", answer: "The component uses localized column groups that move at varying parallax speeds during scroll, creating an 'Immersive' physical depth effect." },
            { question: "Is it mobile responsive?", answer: "Yes, the column counts and parallax offsets scale dynamically for mobile, Ensuring the editorial flow remains impactful on small screens." },
            { question: "Can I use color images?", answer: "Absolutely, while optimized for high-fidelity monochrome, you can apply any visual assets to the column layers effectively." }
        ],
    },
    {
        id: "gallery-shattered",
        name: "Shattered Mosaic",
        description: "Uilora Shattered Mosaic — abstract broken-tile gallery with staggered hover reveals.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["gallery", "shattered", "mosaic", "abstract"],
        previewUrl: "/Grids&Layouts/GalleryGrids/GalleryShattered",
        code: {
            tsx: getCode("src/components/Grids&Layouts/GalleryGrids/tsx/GalleryShattered.tsx"),
            jsx: getCode("src/components/Grids&Layouts/GalleryGrids/jsx/GalleryShattered.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/GalleryGrids/GalleryShattered/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "items", type: "Array<{span: string, img: string}>", default: "[{span: 'col-span-2 row-span-2', img: '...'}, ...]", description: "Array of items with grid span classes and image URLs." },
            { name: "backgroundColor", type: "string", default: "#0a0a0a", description: "Background color (hex, rgb, or hsl)." },
            { name: "labelPrefix", type: "string", default: "Uilora", description: "Prefix text for item labels." },
        ],
        whenToUse: "Perfect for edgy brands, experimental studios, and Next.js platforms that want an abstract 'Shattered' aesthetic. Use this gallery to showcase project collections with a mix of asymmetrical spans and structural honesty.",
        bestPractices: "Maintain consistent spacing within your design system by using it for aggressive brand storytelling. Follow React best practices by pairing it with bold, technical typography. Optimize for performance by using efficient image loading patterns.",
        whyMatters: "Shattered layouts communicate power, mystery, and digital confidence. This Uilora-ready template helps you build an interface that feels energetic and alive, breaking the standard minimalist web rules.",
        faqs: [
            { question: "Why 'Shattered'?", answer: "The grid uses non-uniform column spans and staggered offsets to simulate the organic imperfections found in physical mosaics and abstract art." },
            { question: "Can I adjust the grid?", answer: "Yes, both the Tailwind col-spans and the primary background color can be customized to create 'Industrial' or 'Cyber' mosaic effects." },
            { question: "Is it mobile responsive?", answer: "The shattered spans adapt dynamically for mobile, ensuring the abstract narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "gallery-bentoa",
        name: "Bento Focus",
        description: "Uilora Bento Focus — interactive bento grid with shared-element expand animations.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["gallery", "bento", "focus", "expandable"],
        previewUrl: "/Grids&Layouts/GalleryGrids/GalleryBento",
        code: {
            tsx: getCode("src/components/Grids&Layouts/GalleryGrids/tsx/GalleryBento.tsx"),
            jsx: getCode("src/components/Grids&Layouts/GalleryGrids/jsx/GalleryBento.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/GalleryGrids/GalleryBento/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "items", type: "Array<{id: number, title: string, category: string, img: string}>", default: "[{id: 1, title: 'Uilora Solitude', category: 'Uilora Landscape', img: '...'}, ...]", description: "Array of gallery items with id, title, category label, and image URL." },
            { name: "backgroundColor", type: "string", default: "#0a0a0a", description: "Background color (hex, rgb, or hsl)." },
            { name: "heading", type: "string", default: "Uilora — Selected Works", description: "Section heading displayed above the gallery grid." },
            { name: "subheading", type: "string", default: "A curated collection of space, texture, and light by Uilora.", description: "Subtitle shown below the section heading." },
        ],
        whenToUse: "Excellent for creative agencies, interactive showrooms, and Next.js applications that want a smooth 'Bento' aesthetic. Use this feature grid for an engaging experience where cards expand and contract with organic Framer Motion transitions.",
        bestPractices: "Maintain consistent spacing within your design system by keeping the grid items centered. Follow React best practices by managed the layout-id for the 'Shared Element' transition. Optimize for performance by using efficient Tailwind col-spans.",
        whyMatters: "Bento-based animations communicate digital excellence, playfulness, and craft. This Uilora-ready template helps you build an interface that feels responsive and alive, adding a unique architectural signature to your brand interaction.",
        faqs: [
            { question: "How does the expand work?", answer: "The component uses Framer Motion's `layoutId` to animate the transition between the small grid card and the full-page expanded view seamlessly." },
            { question: "Are colors dynamic?", answer: "While the background is typically neutral, each item's specific imagery and typography can be adjusted to fit your project's environmental theme." },
            { question: "Is it mobile responsive?", answer: "Absolutely, the col-spans and expansion logic scale for mobile, ensuring the 'Focus' transition remains impactful on small screens." }
        ],
    },
    {
        id: "gallery-spotlight",
        name: "Spotlight Matrix",
        description: "Uilora Spotlight Matrix — cursor-lit gallery that illuminates images as you move.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["gallery", "spotlight", "matrix", "lighting"],
        previewUrl: "/Grids&Layouts/GalleryGrids/GallerySpotlight",
        code: {
            tsx: getCode("src/components/Grids&Layouts/GalleryGrids/tsx/GallerySpotlight.tsx"),
            jsx: getCode("src/components/Grids&Layouts/GalleryGrids/jsx/GallerySpotlight.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/GalleryGrids/GallerySpotlight/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[...16 image URLs]", description: "Array of image URLs to display in grid." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "#000000 Background color (hex, rgb, or hsl)." },
            { name: "spotlightSize", type: "number", default: "600", description: "Size of spotlight effect in pixels." },
            { name: "imageLabelPrefix", type: "string", default: "UIL", description: "Prefix text for image labels." },
        ],
        whenToUse: "Excellent for tech labs, high-fidelity portfolios, and Next.js platforms that want a dramatic Uilora Spotlight Matrix aesthetic. Use this gallery reveal for an immersive experience where images light up and 'activate' based on cursor movement.",
        bestPractices: "Follow React best practices by pairing this with dark-themed hero backgrounds. Maintain scalable component architecture by keeping the light intensity balanced. Optimize for performance by managed the gradient coordinates.",
        whyMatters: "Spotlight-based aesthetics communicate technical depth, focus, and digital power. This Uilora-ready template helps you build an interface that feels advanced and high-end, adding a distinct matrix signature to your brand.",
        faqs: [
            { question: "How does the 'Spotlight' work?", answer: "The component tracks the cursor to localized mask coordinates, creating a physical light beam that follows the user across the image collection." },
            { question: "Can I change the glow?", answer: "Yes, both the spotlight size and the primary background color can be adjusted to match your brand's specific environmental lighting." },
            { question: "Does it work on phone?", answer: "The light beam responds to touch-move events, though it's most impactful as a mouse-driven interactive element on desktop." }
        ],
    },
    {
        id: "gallery-film-stripa",
        name: "Film Strip",
        description: "Uilora Film Strip — vintage horizontal scroll gallery with sprocket-hole framing.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["gallery", "film", "strip", "vintage"],
        previewUrl: "/Grids&Layouts/GalleryGrids/GalleryFilmStrip",
        code: {
            tsx: getCode("src/components/Grids&Layouts/GalleryGrids/tsx/GalleryFilmStrip.tsx"),
            jsx: getCode("src/components/Grids&Layouts/GalleryGrids/jsx/GalleryFilmStrip.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/GalleryGrids/GalleryFilmStrip/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[...5 image URLs]", description: "Array of image URLs to display in film strips." },
            { name: "backgroundColor", type: "string", default: "#111", description: "#111 Background color (hex, rgb, or hsl)." },
            { name: "borderColor", type: "string", default: "#222", description: "#222 Film strip border color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for vintage storytelling, film archives, and Next.js applications that want a nostalgic 'Film Strip' aesthetic. Use this gallery to communicate cinematic history, process, and digital 'Draft' culture through horizontal scrolling.",
        bestPractices: "Maintain scalable component architecture by keeping the film spacing consistent. Follow React best practices by pairing this with high-contrast, moody photography. Optimize for performance by using efficient image textures.",
        whyMatters: "Film-based aesthetics create a sense of authenticity and human touch. This Uilora-ready template helps you build an interface that feels alive and scanned, adding a unique cinematic signature to your brand narrative.",
        faqs: [
            { question: "Are colors editable?", answer: "Absolutely, you can change both the `backgroundColor` and `borderColor` (strip color) to create 'Noir' or 'Kodak' film effects." },
            { question: "How does the scroll work?", answer: "The component features a localized horizontal scroll container that simulates a continuous negative strip being 'Pulled' through a projector." },
            { question: "Is it mobile responsive?", answer: "Yes, the film height and sprocket spans scale for mobile, ensuring the vintage narrative remains consistent on small screens." }
        ],
    },
    {
        id: "gallery-fan",
        name: "Z-Stack Fan",
        description: "Uilora Z-Stack Fan — 3D card deck that fans open on hover with spring physics.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["gallery", "fan", "3d", "stack"],
        previewUrl: "/Grids&Layouts/GalleryGrids/GalleryFan",
        code: {
            tsx: getCode("src/components/Grids&Layouts/GalleryGrids/tsx/GalleryFan.tsx"),
            jsx: getCode("src/components/Grids&Layouts/GalleryGrids/jsx/GalleryFan.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/GalleryGrids/GalleryFan/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "cards", type: "Array<{title: string, color: string}>", default: "[{title: 'Air', color: 'bg-blue-200'}, ...]", description: "Array of card objects with title and color (Tailwind class)." },
            { name: "backgroundColor", type: "string", default: "#f5f5f5", description: "#f5f5f5 Background color (hex, rgb, or hsl)." },
            { name: "collectionPrefix", type: "string", default: "Uilora Collection", description: "Prefix text for collection labels." },
            { name: "hintText", type: "string", default: "HOVER TO EXPAND DECK", description: "Hint text displayed at bottom." },
        ],
        whenToUse: "Excellent for interactive portfolios, playful brands, and Next.js applications that want a tactile 'Fan-Stack' aesthetic. Use this gallery for an engaging experience where cards can be 'Inspected' with organic 3D perspective shifts.",
        bestPractices: "Maintain scalable component architecture by keeping the card count balanced. Follow React best practices by using Framer Motion for the fan-expansion physics. Optimize for performance by managed the Z-index transitions.",
        whyMatters: "Stacked card decks create a sense of direct engagement and playfulness. This Uilora-ready template helps you build an interface that feels responsive and unique, turning static details into items for digital manipulation.",
        faqs: [
            { question: "Is it really 3D?", answer: "Yes, the component uses localized CSS 3D transforms and Z-axis depth to create a realistic physical card fan that reacts to cursor focus." },
            { question: "Can I use images?", answer: "Absolutely, each card is a container that supports high-fidelity imagery or colorful Tailwind gradients for the collection reveal." },
            { question: "Does it work on mobile?", answer: "The deck responds to touch-move events, though it's most impactful as a mouse-driven interactive element on desktop browsers." }
        ],
    },
    {
        id: "gallery-velocity",
        name: "Velocity Scroll",
        description: "Uilora Velocity Scroll — high-octane marquee gallery driven by scroll momentum.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["gallery", "velocity", "scroll", "momentum"],
        previewUrl: "/Grids&Layouts/GalleryGrids/GalleryVelocity",
        code: {
            tsx: getCode("src/components/Grids&Layouts/GalleryGrids/tsx/GalleryVelocity.tsx"),
            jsx: getCode("src/components/Grids&Layouts/GalleryGrids/jsx/GalleryVelocity.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/GalleryGrids/GalleryVelocity/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[...4 image URLs]", description: "Array of image URLs to display in marquee." },
            { name: "backgroundColor", type: "string", default: "#ffffff", description: "#ffffff Background color (hex, rgb, or hsl)." },
            { name: "borderColor", type: "string", default: "#000000", description: "#000000 Border color (hex, rgb, or hsl)." },
            { name: "accentColor", type: "string", default: "#facc15", description: "#facc15 Accent color for marquee background (hex, rgb, or hsl)." },
            { name: "titleText", type: "string", default: "UILORA", description: "Large title text displayed in center." },
            { name: "imageLabelPrefix", type: "string", default: "UIL", description: "Prefix text for image labels." },
        ],
        whenToUse: "Perfect for street-style blogs, edgy agencies, and Next.js applications that want a high-octane 'Velocity' aesthetic. Use this gallery to communicate speed, confidence, and digital craft through technical marquees and high-speed scrolling.",
        bestPractices: "Follow React best practices by pairing this with bold, professional typography. Maintain consistent spacing within your design system by keeping the marquee speed uniform. Optimize for performance by managed the image-repeat multiplier.",
        whyMatters: "High-velocity animations communicate energy, flow, and digital momentum. This Uilora-ready template helps you build an interface that feels alive and energetic, adding a distinct moving signature to your brand.",
        faqs: [
            { question: "How fast is it?", answer: "The marquee frequency is hard-coded for cinematic impact but can be adjusted in the internal Framer Motion motion controller to create slower, 'moody' loops." },
            { question: "Are colors editable?", answer: "Absolutely, you can adjust both the `backgroundColor` and the primary `accentColor` (default yellow) to match your brand's specific high-intensity palette." },
            { question: "What is 'Velocity Warp'?", answer: "The component features localized distortion peaks during scroll, simulating a real-time 'Stretch' effect common in high-end creative websites." }
        ],
    },
    {
        id: "gallery-velocity-warp",
        name: "Velocity Warp",
        description: "Uilora Velocity Warp — warp-speed grid with skew and distortion on scroll.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["gallery", "velocity", "warp", "distortion"],
        previewUrl: "/Grids&Layouts/GalleryGrids/GalleryVelocityWarp",
        code: {
            tsx: getCode("src/components/Grids&Layouts/GalleryGrids/tsx/GalleryVelocityWarp.tsx"),
            jsx: getCode("src/components/Grids&Layouts/GalleryGrids/jsx/GalleryVelocityWarp.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/GalleryGrids/GalleryVelocityWarp/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[...9 image URLs]", description: "Array of image URLs to display in grid." },
            { name: "backgroundColor", type: "string", default: "#0a0a0a", description: "#0a0a0a Background color (hex, rgb, or hsl)." },
            { name: "backgroundText", type: "string", default: "WARP", description: "Large background text pattern." },
            { name: "labelPrefix", type: "string", default: "Uilora", description: "Prefix text for image labels." },
        ],
        whenToUse: "Ideal for deep-tech SaaS, scientific platforms, and Next.js applications that want an immersive 'Velocity Warp' aesthetic. Use this gallery to communicate spatial speed, energy, and digital flow through technical grids and warped UI cues.",
        bestPractices: "Maintain scalable component architecture by pairing this with sharp, technical typography. Follow React best practices by using Framer Motion for the warp transitions. Optimize for performance by managed the background text pattern renders.",
        whyMatters: "Warp-based aesthetics communicate technical authority, sophistication, and digital craft. This Uilora-ready template helps you build an interface that feels technical and high-end, adding a unique aura signature to your brand.",
        faqs: [
            { question: "What is 'Warp Distortion'?", answer: "The component features localized CSS filters and motion paths that 'Bend' the grid modules as the user scrolls, creating a spatial warp-speed effect." },
            { question: "Can I adjust the speed?", answer: "Absolutely, both the warp frequency and the primary background text pattern can be configured to match your project's specific terminology." },
            { question: "Is the text real?", answer: "Yes, the large background pattern (default: WARP) is an editable string that serves as the architectural foundation for the distortion sequence." }
        ],
    },
    {
        id: "gallery-flashlight",
        name: "Flashlight Reveal",
        description: "Uilora Flashlight Reveal — cursor-torch that illuminates hidden images in the dark.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["gallery", "flashlight", "reveal", "spotlight"],
        previewUrl: "/Grids&Layouts/GalleryGrids/GalleryFlashlight",
        code: {
            tsx: getCode("src/components/Grids&Layouts/GalleryGrids/tsx/GalleryFlashlight.tsx"),
            jsx: getCode("src/components/Grids&Layouts/GalleryGrids/jsx/GalleryFlashlight.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/GalleryGrids/GalleryFlashlight/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[...12 image URLs]", description: "Array of image URLs to display in grid." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "#000000 Background color (hex, rgb, or hsl)." },
            { name: "lensSize", type: "number", default: "300", description: "Size of flashlight lens in pixels." },
            { name: "hintText", type: "string", default: "MOVE CURSOR TO ILLUMINATE THE UILORA ARCHIVE", description: "Hint text displayed at bottom." },
        ],
        whenToUse: "Excellent for mystery brands, technical archives, and Next.js platforms that want a dramatic 'Flashlight Reveal' aesthetic. Use this gallery for an immersive experience where images 'Illuminate' and activate based on cursor focus.",
        bestPractices: "Follow React best practices by pairing this with dark-themed hero backgrounds. Maintain scalable component architecture by keeping the lens size balanced. Optimize for performance by managed the mask coordinates.",
        whyMatters: "Flashlight-based aesthetics communicate digital focus, discovery, and power. This Uilora-ready template helps you build an interface that feels advanced and high-end, adding a distinct archive signature to your brand.",
        faqs: [
            { question: "How does the 'Flashlight' work?", answer: "The component tracks the cursor to localized mask coordinates, creating a physical 'Beam' of light that follows the user across the dark feature grid." },
            { question: "Can I change the intensity?", answer: "Yes, both the lens size and the primary background color can be adjusted to match your brand's specific environmental lighting." },
            { question: "Does it work with touch?", answer: "The flashlight responds to touch-move events, though it's most impactful as a mouse-driven cursor beam for high-fidelity desktop discovery." }
        ],
    },
    {
        id: "gallery-sliced",
        name: "Sliced Hover",
        description: "Uilora Sliced Hover — full-height sliced panels that expand and reveal on hover.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["gallery", "sliced", "hover", "split"],
        previewUrl: "/Grids&Layouts/GalleryGrids/GallerySliced",
        code: {
            tsx: getCode("src/components/Grids&Layouts/GalleryGrids/tsx/GallerySliced.tsx"),
            jsx: getCode("src/components/Grids&Layouts/GalleryGrids/jsx/GallerySliced.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/GalleryGrids/GallerySliced/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "items", type: "Array<{title: string, img: string}>", default: "[{title: 'NATURE', img: '...'}, ...]", description: "Array of items with title and image URL." },
            { name: "backgroundColor", type: "string", default: "#ffffff", description: "#ffffff Background color (hex, rgb, or hsl)." },
            { name: "descriptionTemplate", type: "string", default: "A Uilora editorial — an immersive dive into the world of {title}.", description: "Description template (use {title} placeholder)." },
            { name: "buttonText", type: "string", default: "Explore Collection", description: "Button text for expanded view." },
        ],
        whenToUse: "Excellent for fashion editorial, lifestyle brands, and Next.js platforms that want a smooth 'Sliced' aesthetic. Use this gallery for an engaging experience where cards split and reveal their narrative with organic Framer Motion transitions.",
        bestPractices: "Maintain consistent spacing within your design system by keeping the grid items centered. Follow React best practices by managed the layout-id for the 'Shared Element' transition. Optimize for performance by using efficient Tailwind col-spans.",
        whyMatters: "Sliced animations communicate digital excellence, playfulness, and craft. This Uilora-ready template helps you build an interface that feels responsive and alive, adding a unique architectural signature to your brand interaction.",
        faqs: [
            { question: "How does the split work?", answer: "The component uses localized mask coordinates to 'Slice' the card surface during hover, creating a high-fidelity physical reveal of the underlying feature detail." },
            { question: "Are colors dynamic?", answer: "While the core theme is minimalist, each item's specific imagery and primary background color can be adjusted to fit your project's environmental theme." },
            { question: "Is it mobile responsive?", answer: "Absolutely, the col-spans and slice logic scale for mobile, ensuring the 'Reveal' transition remains impactful on small screens." }
        ],
    },
    {
        id: "gallery-pin-reveal",
        name: "Pin & Reveal",
        description: "Uilora Pin & Reveal — sticky scroll sequence that stacks and pins full-screen cards.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["gallery", "pin", "reveal", "interactive"],
        previewUrl: "/Grids&Layouts/GalleryGrids/GalleryPinReveal",
        code: {
            tsx: getCode("src/components/Grids&Layouts/GalleryGrids/tsx/GalleryPinReveal.tsx"),
            jsx: getCode("src/components/Grids&Layouts/GalleryGrids/jsx/GalleryPinReveal.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/GalleryGrids/GalleryPinReveal/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "cards", type: "Array<{color: string, title: string, img: string}>", default: "[{color: '#c8a882', title: 'Uilora Ignite', img: '...'}, ...]", description: "Array of card objects with color (hex), title, and image URL." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "#000000 Background color (hex, rgb, or hsl)." },
            { name: "scrollHintText", type: "string", default: "Scroll Down", description: "Scroll hint main text." },
            { name: "scrollHintSubtext", type: "string", default: "↓", description: "Scroll hint subtext/arrow." },
        ],
        whenToUse: "Excellent for technical dashboards, AI processing platforms, and Next.js applications that want a high-tech 'Pin & Reveal' aesthetic. Use this gallery to communicate power, security, and digital intelligence through dark themes and architectural sequences.",
        bestPractices: "Maintain scalable component architecture by pairing this with sharp, technical typography. Follow React best practices by using Framer Motion for the pin reveal transitions. Optimize for performance by managed the layer renders.",
        whyMatters: "Pin-based reveal sequences communicate technical authority, sophistication, and digital craft. This Uilora-ready template helps you build an interface that feels organized and high-end, adding a unique signature to your brand.",
        faqs: [
            { question: "What is 'Interactive Pinning'?", answer: "The component uses localized sticky triggers that 'Pin' content in place during scroll, allowing overlapping features to 'Reveal' themselves in a physical, stacked sequence." },
            { question: "Can I adjust the speed?", answer: "Absolutely, both the reveal frequency and the scroll hint text can be configured to match your project's specific terminology." },
            { question: "Is it dark mode only?", answer: "While optimized for the 'Onyx' (neutral-950) palette, the component's card colors and accents can be adjusted to fit other dark themes." }
        ],
    },
    {
        id: "gallery-diagonal-marquee",
        name: "Diagonal Marquee",
        description: "Uilora Diagonal Marquee — three offset diagonal image ribbons scrolling at different speeds.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["gallery", "diagonal", "marquee", "scrolling"],
        previewUrl: "/Grids&Layouts/GalleryGrids/GalleryDiagonalMarquee",
        code: {
            tsx: getCode("src/components/Grids&Layouts/GalleryGrids/tsx/GalleryDiagonalMarquee.tsx"),
            jsx: getCode("src/components/Grids&Layouts/GalleryGrids/jsx/GalleryDiagonalMarquee.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/GalleryGrids/GalleryDiagonalMarquee/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "row1Images", type: "string[]", default: "[...10 image URLs]", description: "Array of image URLs for first row." },
            { name: "row2Images", type: "string[]", default: "[...10 image URLs]", description: "Array of image URLs for second row." },
            { name: "row3Images", type: "string[]", default: "[...10 image URLs]", description: "Array of image URLs for third row." },
            { name: "backgroundColor", type: "string", default: "#e0e0e0", description: "#e0e0e0 Background color (hex, rgb, or hsl)." },
            { name: "badgePrefix", type: "string", default: "U", description: "Prefix text for badge labels." },
        ],
        whenToUse: "Perfect for street-style blogs, edgy agencies, and Next.js applications that want a high-octane 'Diagonal Marquee' aesthetic. Use this gallery to communicate speed, confidence, and digital craft through technical marquees and high-speed scrolling.",
        bestPractices: "Follow React best practices by pairing this with bold, professional typography. Maintain consistent spacing within your design system by keeping the marquee speed uniform. Optimize for performance by managed the image-repeat multiplier.",
        whyMatters: "Diagonal animations communicate energy, flow, and digital momentum. This Uilora-ready template helps you build an interface that feels alive and energetic, adding a distinct moving signature to your brand.",
        faqs: [
            { question: "Why 'Diagonal'?", answer: "The grid is tilted at a cinematic angle to create a sense of unconventional digital flow and high-speed energy common in high-end streetwear and creative labs." },
            { question: "Are colors editable?", answer: "Absolutely, you can adjust both the `backgroundColor` and the primary badge accents to match your brand's specific high-intensity palette." },
            { question: "How does the scroll work?", answer: "The component features localized horizontal scroll containers that move in 'Opposite' directions during scroll, creating an 'Immersive' physical movement effect." }
        ],
    },
    {
        id: "gallery-click-expand",
        name: "Hero Expand",
        description: "Uilora Hero Expand — bento grid where any card expands to a full-bleed immersive view.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["gallery", "expand", "hero", "fullscreen"],
        previewUrl: "/Grids&Layouts/GalleryGrids/GalleryClickExpand",
        code: {
            tsx: getCode("src/components/Grids&Layouts/GalleryGrids/tsx/GalleryClickExpand.tsx"),
            jsx: getCode("src/components/Grids&Layouts/GalleryGrids/jsx/GalleryClickExpand.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/GalleryGrids/GalleryClickExpand/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "items", type: "Array<{id: string, title: string, col: string, img: string}>", default: "[{id: '1', title: 'Uilora Dusk', col: 'col-span-2 row-span-2', img: '...'}, ...]", description: "Array of items with id, title, grid span classes, and image URL." },
            { name: "backgroundColor", type: "string", default: "#18181b", description: "#18181b Background color (hex, rgb, or hsl)." },
            { name: "emptySlotText", type: "string", default: "Empty", description: "Text displayed in empty grid slots." },
            { name: "fullScreenText", type: "string", default: "Uilora — immersive full-screen view. Click anywhere to return.", description: "Text displayed in fullscreen view." },
        ],
        whenToUse: "Excellent for technical dashboards, AI processing platforms, and Next.js applications that want a high-tech 'Hero Expand' aesthetic. Use this layout to communicate power, security, and digital intelligence through dark themes and architectural grid modules.",
        bestPractices: "Maintain scalable component architecture by pairing this with sharp, technical typography. Follow React best practices by using Framer Motion for the module expansion. Optimize for performance by managed the border pattern renders.",
        whyMatters: "Expanding grid layouts communicate technical authority, sophistication, and digital craft. This Uilora-ready template helps you build an interface that feels organized and high-end, adding a unique immersive signature to your brand.",
        faqs: [
            { question: "Is the expansion 'Shared'?", answer: "Yes, the component uses Framer Motion's `layoutId` to animate the transition between the small grid module and the fullscreen immersive view seamlessly." },
            { question: "Can I adjust the grid?", answer: "Absolutely, both the Tailwind col-spans and the primary background colors can be adjusted to create 'Industrial' or 'Cyber' expansion effects." },
            { question: "How does the 'Empty' state work?", answer: "The grid supports architectural 'Negative Space' modules (default text: Empty) to maintain visual balance and structural honesty within the technical matrix." }
        ],
    },
    {
        id: "gallery-depth-stack",
        name: "Depth Stack",
        description: "Uilora Depth Stack — each image zooms from distant to full-screen as you scroll through.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["gallery", "scroll", "zoom", "cinematic", "depth"],
        previewUrl: "/Grids&Layouts/GalleryGrids/GalleryDepthStack",
        code: {
            tsx: getCode("src/components/Grids&Layouts/GalleryGrids/tsx/GalleryDepthStack.tsx"),
            jsx: getCode("src/components/Grids&Layouts/GalleryGrids/jsx/GalleryDepthStack.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/GalleryGrids/GalleryDepthStack/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[...6 image URLs]", description: "Array of images. Each zooms from far away to full-screen and flies past." },
            { name: "backgroundColor", type: "string", default: "#060606", description: "Background color (hex, rgb, or hsl)." },
            { name: "label", type: "string", default: "Uilora Archive", description: "Monospace label shown top-left as a HUD overlay." },
        ],
        whenToUse: "Use for premium editorial portfolios, photography showcases, or cinematic landing pages where you want each image to demand full attention. Best paired with 4–8 high-resolution hero images.",
        bestPractices: "Use wide-format landscape images at 1600px+ width for the sharpest result at full scale. The blur-to-sharp transition means even slightly soft images look intentional.",
        whyMatters: "The depth-zoom pattern triggers a physiological sense of forward motion — viewers feel pulled through a sequence rather than browsing a static grid. Photography becomes a spatial experience.",
        faqs: [
            { question: "How many images work best?", answer: "4–8 is the sweet spot. Scroll height is images.length × 120vh." },
            { question: "Can I control zoom speed?", answer: "Adjust the scale output range [0.48, 1, 1.72] in the DepthLayer sub-component." },
            { question: "Does it work on mobile?", answer: "Yes — touch-scroll works identically to mouse-scroll." },
        ],
    },
    {
        id: "gallery-ribbon-scroll",
        name: "Ribbon Scroll",
        description: "Uilora Ribbon Scroll — three rotated editorial bands drifting in opposite directions on scroll.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["gallery", "ribbon", "diagonal", "marquee", "editorial"],
        previewUrl: "/Grids&Layouts/GalleryGrids/GalleryRibbonScroll",
        code: {
            tsx: getCode("src/components/Grids&Layouts/GalleryGrids/tsx/GalleryRibbonScroll.tsx"),
            jsx: getCode("src/components/Grids&Layouts/GalleryGrids/jsx/GalleryRibbonScroll.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/GalleryGrids/GalleryRibbonScroll/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "band1", type: "string[]", default: "[...6 image URLs]", description: "Images for the top angled band (scrolls left)." },
            { name: "band2", type: "string[]", default: "[...6 image URLs]", description: "Images for the middle reverse band — taller portrait cards (scrolls right)." },
            { name: "band3", type: "string[]", default: "[...6 image URLs]", description: "Images for the bottom angled band (scrolls left)." },
            { name: "backgroundColor", type: "string", default: "#080808", description: "Background color (hex, rgb, or hsl)." },
            { name: "angle", type: "number", default: "12", description: "Diagonal tilt angle in degrees for the outer bands." },
        ],
        whenToUse: "Perfect for fashion brands, creative agencies, and editorial-style portfolios. The three-band layout works best for presenting 18+ images in a single impactful viewport.",
        bestPractices: "Use portrait images for the tall middle band and landscape for outer bands. Keep images tonally consistent per band. Increase `angle` for more dramatic tension.",
        whyMatters: "Diagonal motion fights the left-right reading pattern, creating productive tension. Alternating scroll directions add controlled chaos that signals creative confidence.",
        faqs: [
            { question: "Can I change scroll speed per band?", answer: "Adjust the useTransform output ranges for x1, x2, x3 in the component." },
            { question: "How many images per band?", answer: "Each array is tripled internally — 4–8 per band gives a good loop without obvious repetition." },
            { question: "Can I add a 4th band?", answer: "Yes — add a Band component with a new useTransform for x4 and pick an angle." },
        ],
    },
    {
        id: "gallery-reveal-wipe",
        name: "Reveal Wipe",
        description: "Uilora Reveal Wipe — full-viewport chapters that wipe in with unique clip-path animations.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["gallery", "clip-path", "reveal", "wipe", "scroll"],
        previewUrl: "/Grids&Layouts/GalleryGrids/GalleryRevealWipe",
        code: {
            tsx: getCode("src/components/Grids&Layouts/GalleryGrids/tsx/GalleryRevealWipe.tsx"),
            jsx: getCode("src/components/Grids&Layouts/GalleryGrids/jsx/GalleryRevealWipe.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/GalleryGrids/GalleryRevealWipe/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "items", type: "Array<{img: string, title: string, label: string}>", default: "[{img: '...', title: 'Serenity', label: 'Uilora — I'}, ...]", description: "4 sections — each gets a distinct clip-path reveal: horizontal wipe, radial burst, vertical split." },
            { name: "backgroundColor", type: "string", default: "#080808", description: "Background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for sequential storytelling — case studies, lookbooks, or magazine-style features. Each chapter gets its own reveal signature that builds editorial structure.",
        bestPractices: "Use exactly 4 items. Images should have strong focal points near center since the radial clip-path reveals outward from center. Keep titles short (1–2 words).",
        whyMatters: "Clip-path animations create visceral discovery — the image doesn't fade in, it physically materialises. Each variant gives each chapter a unique visual identity.",
        faqs: [
            { question: "Can I use more than 4 items?", answer: "Yes — items beyond index 3 reuse the horizontal wipe. Add more clips to the clips array in RevealSlide for custom styles." },
            { question: "How do I change reveal speed?", answer: "Adjust segEnd = Math.min(segStart + 0.32, 1) — a smaller number makes the reveal snap faster." },
            { question: "Can I change when the title appears?", answer: "Adjust the [50, 85] input range in titleY / titleOp useTransform calls inside RevealSlide." },
        ],
    },
    {
        id: "gallery-drift-grid",
        name: "Drift Grid",
        description: "Uilora Drift Grid — 12 tilted photos that float and drift in response to cursor movement.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["gallery", "cursor", "drift", "interactive", "spring"],
        previewUrl: "/Grids&Layouts/GalleryGrids/GalleryDriftGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/GalleryGrids/tsx/GalleryDriftGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/GalleryGrids/jsx/GalleryDriftGrid.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/GalleryGrids/GalleryDriftGrid/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[...12 image URLs]", description: "12 images displayed as a tilted, floating photo grid." },
            { name: "backgroundColor", type: "string", default: "#f0ece4", description: "Background color (hex, rgb, or hsl). Light cream tones work best." },
            { name: "label", type: "string", default: "Uilora", description: "Ghost outline watermark text rendered behind the grid in Georgia serif." },
        ],
        whenToUse: "Best for portfolio landing pages, about sections, and brand galleries where you want imagery to feel tactile and alive. The light cream background evokes physical prints on a table.",
        bestPractices: "Use square or portrait images. The spring physics are tuned for a weighty analog feel — tighten stiffness for snappier drift. Keep the label short (1–2 words) for clean watermark typography.",
        whyMatters: "Mouse-reactive layouts reward curiosity. The scatter + tilt mimics physical photographs, creating an emotional connection between the digital and physical worlds.",
        faqs: [
            { question: "Why no Math.random() for tilts?", answer: "Deterministic SLOTS values prevent React hydration mismatches between server and client renders." },
            { question: "Can I show more than 12 images?", answer: "Add more SLOTS entries and remove the .slice(0, 12) to support larger grids." },
            { question: "How do I tune drift physics?", answer: "Adjust useSpring config: stiffness 48, damping 18. Lower stiffness = heavier drift, higher damping = less oscillation." },
        ],
    },
];

