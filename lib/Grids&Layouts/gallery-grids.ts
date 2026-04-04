import { getCode } from "../getCode";
import { Component } from "../types";

export const galleryGridComponents: Component[] = [
    {
        id: "gallery-parallax-columns",
        name: "Parallax Columns",
        description: "Fashion editorial gallery with parallax scrolling columns.",
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
        whyMatters: "Parallax columns communicate digital power, depth, and structural complexity. This production-ready UI template helpsคุณ build an interface that feels architectural and premium, leaving a lasting visual impression on high-value clients.",
        faqs: [
            { question: "How does the parallax work?", answer: "The component uses localized column groups that move at varying parallax speeds during scroll, creating an 'Immersive' physical depth effect." },
            { question: "Is it mobile responsive?", answer: "Yes, the column counts and parallax offsets scale dynamically for mobile, Ensuring the editorial flow remains impactful on small screens." },
            { question: "Can I use color images?", answer: "Absolutely, while optimized for high-fidelity monochrome, you can apply any visual assets to the column layers effectively." }
        ],
    },
    {
        id: "gallery-shattered",
        name: "Shattered Mosaic",
        description: "Abstract broken mosaic gallery with shattered tile effects.",
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
            { name: "labelPrefix", type: "string", default: "Abstract", description: "Prefix text for item labels." },
        ],
        whenToUse: "Perfect for edgy brands, experimental studios, and Next.js platforms that want an abstract 'Shattered' aesthetic. Use this gallery to showcase project collections with a mix of asymmetrical spans and structural honesty.",
        bestPractices: "Maintain consistent spacing within your design system by using it for aggressive brand storytelling. Follow React best practices by pairing it with bold, technical typography. Optimize for performance by using efficient image loading patterns.",
        whyMatters: "Shattered layouts communicate power, mystery, and digital confidence. This production-ready UI template helpsคุณ build an interface that feels energetic and alive, breaking the 'standard' minimalist web rules.",
        faqs: [
            { question: "Why 'Shattered'?", answer: "The grid uses non-uniform column spans and staggered offsets to simulate the organic imperfections found in physical mosaics and abstract art." },
            { question: "Can I adjust the grid?", answer: "Yes, both the Tailwind col-spans and the primary background color can be customized to create 'Industrial' or 'Cyber' mosaic effects." },
            { question: "Is it mobile responsive?", answer: "The shattered spans adapt dynamically for mobile, ensuring the abstract narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "gallery-bentoa",
        name: "Bento Focus",
        description: "Interactive bento gallery with expandable focus cards.",
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
            { name: "items", type: "Array<{id: number, title: string, img: string}>", default: "[{id: 1, title: 'Architecture', img: '...'}, ...]", description: "Array of gallery items with id, title, and image URL." },
            { name: "backgroundColor", type: "string", default: "#f9fafb", description: "Background color (hex, rgb, or hsl)." },
            { name: "description", type: "string", default: "Exploring the fundamental connection between space, light, and structure. This collection dives deep into modern aesthetic principles.", description: "Description text shown when item is expanded." },
        ],
        whenToUse: "Excellent for creative agencies, interactive showrooms, and Next.js applications that want a smooth 'Bento' aesthetic. Use this feature grid for an engaging experience where cards expand and contract with organic Framer Motion transitions.",
        bestPractices: "Maintain consistent spacing within your design system by keeping the grid items centered. Follow React best practices by managed the layout-id for the 'Shared Element' transition. Optimize for performance by using efficient Tailwind col-spans.",
        whyMatters: "Bento-based animations communicate digital excellence, playfulness, and digital craft. This production-ready UI template helpsคุณ build an interface that feels responsive and alive, adding a unique architectural signature to your brand interaction.",
        faqs: [
            { question: "How does the expand work?", answer: "The component uses Framer Motion's `layoutId` to animate the transition between the small grid card and the full-page expanded view seamlessly." },
            { question: "Are colors dynamic?", answer: "While the background is typically neutral, each item's specific imagery and typography can be adjusted to fit your project's environmental theme." },
            { question: "Is it mobile responsive?", answer: "Absolutely, the col-spans and expansion logic scale for mobile, ensuring the 'Focus' transition remains impactful on small screens." }
        ],
    },
    {
        id: "gallery-spotlight",
        name: "Spotlight Matrix",
        description: "Spotlight matrix gallery with dynamic lighting effects.",
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
            { name: "imageLabelPrefix", type: "string", default: "IMG", description: "Prefix text for image labels." },
        ],
        whenToUse: "Excellent for tech labs, high-fidelity portfolios, and Next.js platforms that want a dramatic 'Spotlight Matrix' aesthetic. Use this gallery reveal for an immersive experience where images light up and 'activate' based on cursor movement.",
        bestPractices: "Follow React best practices by pairing this with dark-themed hero backgrounds. Maintain scalable component architecture by keeping the light intensity balanced. Optimize for performance by managed the gradient coordinates.",
        whyMatters: "Spotlight-based aesthetics communicate technical depth, focus, and digital power. This production-ready UI template helpsคุณ build an interface that feels advanced and high-end, adding a distinct 'Matrix' signature to your brand.",
        faqs: [
            { question: "How does the 'Spotlight' work?", answer: "The component tracks the cursor to localized mask coordinates, creating a physical light beam that follows the user across the image collection." },
            { question: "Can I change the glow?", answer: "Yes, both the spotlight size and the primary background color can be adjusted to match your brand's specific environmental lighting." },
            { question: "Does it work on phone?", answer: "The light beam responds to touch-move events, though it's most impactful as a mouse-driven interactive element on desktop." }
        ],
    },
    {
        id: "gallery-film-stripa",
        name: "Film Strip",
        description: "Vintage film strip gallery with horizontal scrolling.",
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
        whyMatters: "Film-based aesthetics create a sense of digital 'Authenticity' and human touch. This production-ready UI template helpsคุณ build an interface that feels alive and 'Scanned', adding a unique signatures to your brand narrative.",
        faqs: [
            { question: "Are colors editable?", answer: "Absolutely, you can change both the `backgroundColor` and `borderColor` (strip color) to create 'Noir' or 'Kodak' film effects." },
            { question: "How does the scroll work?", answer: "The component features a localized horizontal scroll container that simulates a continuous negative strip being 'Pulled' through a projector." },
            { question: "Is it mobile responsive?", answer: "Yes, the film height and sprocket spans scale for mobile, ensuring the vintage narrative remains consistent on small screens." }
        ],
    },
    {
        id: "gallery-fan",
        name: "Z-Stack Fan",
        description: "3D fan-stacked gallery with z-depth and perspective.",
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
            { name: "collectionPrefix", type: "string", default: "Collection", description: "Prefix text for collection labels." },
            { name: "hintText", type: "string", default: "HOVER TO EXPAND DECK", description: "Hint text displayed at bottom." },
        ],
        whenToUse: "Excellent for interactive portfolios, playful brands, and Next.js applications that want a tactile 'Fan-Stack' aesthetic. Use this gallery for an engaging experience where cards can be 'Inspected' with organic 3D perspective shifts.",
        bestPractices: "Maintain scalable component architecture by keeping the card count balanced. Follow React best practices by using Framer Motion for the fan-expansion physics. Optimize for performance by managed the Z-index transitions.",
        whyMatters: "Stacked card decks create a sense of direct engagement and playfulness. This production-ready UI template helpsคุณ build an interface that feels responsive and unique, turning static details into items for digital manipulation.",
        faqs: [
            { question: "Is it really 3D?", answer: "Yes, the component uses localized CSS 3D transforms and Z-axis depth to create a realistic physical card fan that reacts to cursor focus." },
            { question: "Can I use images?", answer: "Absolutely, each card is a container that supports high-fidelity imagery or colorful Tailwind gradients for the collection reveal." },
            { question: "Does it work on mobile?", answer: "The deck responds to touch-move events, though it's most impactful as a mouse-driven interactive element on desktop browsers." }
        ],
    },
    {
        id: "gallery-velocity",
        name: "Velocity Scroll",
        description: "High-velocity scrolling gallery with momentum effects.",
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
            { name: "titleText", type: "string", default: "STREET", description: "Large title text displayed in center." },
            { name: "imageLabelPrefix", type: "string", default: "FIG", description: "Prefix text for image labels." },
        ],
        whenToUse: "Perfect for street-style blogs, edgy agencies, and Next.js applications that want a high-octane 'Velocity' aesthetic. Use this gallery to communicate speed, confidence, and digital craft through technical marquees and high-speed scrolling.",
        bestPractices: "Follow React best practices by pairing this with bold, professional typography. Maintain consistent spacing within your design system by keeping the marquee speed uniform. Optimize for performance by managed the image-repeat multiplier.",
        whyMatters: "High-velocity animations communicate energy, flow, and digital momentum. This production-ready UI template helpsคุณ build an interface that feels alive and energetic, adding a distinct 'Moving' signature to your brand.",
        faqs: [
            { question: "How fast is it?", answer: "The marquee frequency is hard-coded for cinematic impact but can be adjusted in the internal Framer Motion motion controller to create slower, 'moody' loops." },
            { question: "Are colors editable?", answer: "Absolutely, you can adjust both the `backgroundColor` and the primary `accentColor` (default yellow) to match your brand's specific high-intensity palette." },
            { question: "What is 'Velocity Warp'?", answer: "The component features localized distortion peaks during scroll, simulating a real-time 'Stretch' effect common in high-end creative websites." }
        ],
    },
    {
        id: "gallery-velocity-warp",
        name: "Velocity Warp",
        description: "Warp-speed velocity gallery with distortion effects.",
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
            { name: "labelPrefix", type: "string", default: "Figure", description: "Prefix text for image labels." },
        ],
        whenToUse: "Ideal for deep-tech SaaS, scientific platforms, and Next.js applications that want an immersive 'Velocity Warp' aesthetic. Use this gallery to communicate spatial speed, energy, and digital flow through technical grids and warped UI cues.",
        bestPractices: "Maintain scalable component architecture by pairing this with sharp, technical typography. Follow React best practices by using Framer Motion for the warp transitions. Optimize for performance by managed the background text pattern renders.",
        whyMatters: "Warp-based aesthetics communicate technical authority, sophistication, and digital craft. This production-ready UI template helpsคุณ build an interface that feels technical and high-end, adding a unique 'Aura' signature to your brand.",
        faqs: [
            { question: "What is 'Warp Distortion'?", answer: "The component features localized CSS filters and motion paths that 'Bend' the grid modules as the user scrolls, creating a spatial warp-speed effect." },
            { question: "Can I adjust the speed?", answer: "Absolutely, both the warp frequency and the primary background text pattern can be configured to match your project's specific terminology." },
            { question: "Is the text real?", answer: "Yes, the large background pattern (default: WARP) is an editable string that serves as the architectural foundation for the distortion sequence." }
        ],
    },
    {
        id: "gallery-flashlight",
        name: "Flashlight Reveal",
        description: "Flashlight reveal gallery with spotlight interactions.",
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
            { name: "hintText", type: "string", default: "USE CURSOR TO ILLUMINATE ARCHIVE", description: "Hint text displayed at bottom." },
        ],
        whenToUse: "Excellent for mystery brands, technical archives, and Next.js platforms that want a dramatic 'Flashlight Reveal' aesthetic. Use this gallery for an immersive experience where images 'Illuminate' and activate based on cursor focus.",
        bestPractices: "Follow React best practices by pairing this with dark-themed hero backgrounds. Maintain scalable component architecture by keeping the lens size balanced. Optimize for performance by managed the mask coordinates.",
        whyMatters: "Flashlight-based aesthetics communicate digital focus, discovery, and power. This production-ready UI template helpsคุณ build an interface that feels advanced and high-end, adding a distinct 'Archive' signature to your brand.",
        faqs: [
            { question: "How does the 'Flashlight' work?", answer: "The component tracks the cursor to localized mask coordinates, creating a physical 'Beam' of light that follows the user across the dark feature grid." },
            { question: "Can I change the intensity?", answer: "Yes, both the lens size and the primary background color can be adjusted to match your brand's specific environmental lighting." },
            { question: "Does it work with touch?", answer: "The flashlight responds to touch-move events, though it's most impactful as a mouse-driven cursor beam for high-fidelity desktop discovery." }
        ],
    },
    {
        id: "gallery-tunnel",
        name: "Parallax Tunnel",
        description: "Parallax tunnel gallery with depth and perspective.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["gallery", "tunnel", "parallax", "depth"],
        previewUrl: "/Grids&Layouts/GalleryGrids/GalleryTunnel",
        code: {
            tsx: getCode("src/components/Grids&Layouts/GalleryGrids/tsx/GalleryTunnel.tsx"),
            jsx: getCode("src/components/Grids&Layouts/GalleryGrids/jsx/GalleryTunnel.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/GalleryGrids/GalleryTunnel/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "mainImage", type: "string", default: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800&q=80", description: "Main center image URL." },
            { name: "middleImages", type: "string[]", default: "[...2 image URLs]", description: "Array of middle layer image URLs." },
            { name: "backgroundColor", type: "string", default: "#1a1a1a", description: "#1a1a1a Background color (hex, rgb, or hsl)." },
            { name: "enterText", type: "string", default: "ENTER", description: "Text displayed on main image." },
            { name: "scrollHint", type: "string", default: "SCROLL TO DIVE", description: "Scroll instruction text." },
        ],
        whenToUse: "Ideal for deep-tech SaaS, scientific platforms, and Next.js applications that want an immersive 'Parallax Tunnel' aesthetic. Use this gallery to communicate structural depth, innovation, and digital power through technical layer offsets.",
        bestPractices: "Maintain scalable component architecture by pairing this with sharp, technical typography. Follow React best practices by using Framer Motion for the tunnel transitions. Optimize for performance by managed the layer coordinates.",
        whyMatters: "Tunnel-based aesthetics communicate spatial authority, sophistication, and digital craft. This production-ready UI template helpsคุณ build an interface that feels technical and high-end, adding a unique 'Depth' signature to your brand.",
        faqs: [
            { question: "What is 'Parallax Tunnel'?", answer: "The component features localized image groups that move at varying parallax speeds on the Z-axis, creating an 'Immersive' physical dive effect as the user scrolls." },
            { question: "Can I adjust the speed?", answer: "Absolutely, the parallax frequency is hard-coded for cinematic impact but can be tuned in the internal Framer Motion motion controller." },
            { question: "Is the center image real?", answer: "Yes, the primary 'Focus' image serves as the architectural core of the tunnel sequence, leading the user's focus during the dive." }
        ],
    },
    {
        id: "gallery-sliced",
        name: "Sliced Hover",
        description: "Sliced hover gallery with split-screen effects.",
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
            { name: "descriptionTemplate", type: "string", default: "An immersive exploration into the depths of {title} aesthetics.", description: "Description template (use {title} placeholder)." },
            { name: "buttonText", type: "string", default: "Explore Collection", description: "Button text for expanded view." },
        ],
        whenToUse: "Excellent for fashion editorial, lifestyle brands, and Next.js platforms that want a smooth 'Sliced' aesthetic. Use this gallery for an engaging experience where cards split and reveal their narrative with organic Framer Motion transitions.",
        bestPractices: "Maintain consistent spacing within your design system by keeping the grid items centered. Follow React best practices by managed the layout-id for the 'Shared Element' transition. Optimize for performance by using efficient Tailwind col-spans.",
        whyMatters: "Sliced animations communicate digital excellence, playfulness, and digital craft. This production-ready UI template helpsคุณ build an interface that feels responsive and alive, adding a unique architectural signature to your brand interaction.",
        faqs: [
            { question: "How does the split work?", answer: "The component uses localized mask coordinates to 'Slice' the card surface during hover, creating a high-fidelity physical reveal of the underlying feature detail." },
            { question: "Are colors dynamic?", answer: "While the core theme is minimalist, each item's specific imagery and primary background color can be adjusted to fit your project's environmental theme." },
            { question: "Is it mobile responsive?", answer: "Absolutely, the col-spans and slice logic scale for mobile, ensuring the 'Reveal' transition remains impactful on small screens." }
        ],
    },
    {
        id: "gallery-perspective-wall",
        name: "Perspective Wall",
        description: "3D perspective wall gallery with depth illusions.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["gallery", "perspective", "wall", "3d"],
        previewUrl: "/Grids&Layouts/GalleryGrids/GalleryPerspectiveWall",
        code: {
            tsx: getCode("src/components/Grids&Layouts/GalleryGrids/tsx/GalleryPerspectiveWall.tsx"),
            jsx: getCode("src/components/Grids&Layouts/GalleryGrids/jsx/GalleryPerspectiveWall.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/GalleryGrids/GalleryPerspectiveWall/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[...16 image URLs]", description: "Array of image URLs to display in wall." },
            { name: "backgroundColor", type: "string", default: "#f5f5f5", description: "#f5f5f5 Background color (hex, rgb, or hsl)." },
            { name: "gridCols", type: "number", default: "4", description: "Number of grid columns (2, 3, 4, 5, or 6)." },
        ],
        whenToUse: "Ideal for high-end digital agencies, artistic portfolios, and Next.js applications that want a meaningful 'Perspective Wall' aesthetic. Use this gallery to communicate structural scale, tranquility, and natural craft through 3D architectural grids.",
        bestPractices: "Maintain consistent spacing within your design system by using variable, organic grid gaps. Follow React best practices by pairing this with serif typography. Optimize for performance by using efficient image textures.",
        whyMatters: "Perspective-based wall aesthetics communicate wisdom, tranquility, and digital craft. This production-ready UI template helpsคุณ build an interface that feels personal and alive, adding a unique signatures to your brand narrative.",
        faqs: [
            { question: "Is it really 3D?", answer: "Yes, the component uses localized CSS 3D perspectives to tilt the entire image grid, simulating a physical 'Art Wall' that reacts to cursor focus." },
            { question: "Can I use color images?", answer: "While optimized for high-contrast, moody photography, you can apply any visual assets to the wall layers effectively." },
            { question: "Does it work on phone?", answer: "The 3D tilt is subtly scaled down on mobile to maintain usable touch-areas, ensuring the 'Art Wall' feel remains consistent across all devices." }
        ],
    },
    {
        id: "gallery-pin-reveal",
        name: "Pin & Reveal",
        description: "Pin and reveal gallery with interactive pinning effects.",
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
            { name: "cards", type: "Array<{color: string, title: string, img: string}>", default: "[{color: '#FF5733', title: 'Ignite', img: '...'}, ...]", description: "Array of card objects with color (hex), title, and image URL." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "#000000 Background color (hex, rgb, or hsl)." },
            { name: "scrollHintText", type: "string", default: "Scroll Down", description: "Scroll hint main text." },
            { name: "scrollHintSubtext", type: "string", default: "↓", description: "Scroll hint subtext/arrow." },
        ],
        whenToUse: "Excellent for technical dashboards, AI processing platforms, and Next.js applications that want a high-tech 'Pin & Reveal' aesthetic. Use this gallery to communicate power, security, and digital intelligence through dark themes and architectural sequences.",
        bestPractices: "Maintain scalable component architecture by pairing this with sharp, technical typography. Follow React best practices by using Framer Motion for the pin reveal transitions. Optimize for performance by managed the layer renders.",
        whyMatters: "Pin-based reveal sequences communicate technical authority, sophistication, and digital craft. This production-ready UI template helpsคุณ build an interface that feels organized and high-end, adding a unique 'Safe' signature to your brand.",
        faqs: [
            { question: "What is 'Interactive Pinning'?", answer: "The component uses localized sticky triggers that 'Pin' content in place during scroll, allowing overlapping features to 'Reveal' themselves in a physical, stacked sequence." },
            { question: "Can I adjust the speed?", answer: "Absolutely, both the reveal frequency and the scroll hint text can be configured to match your project's specific terminology." },
            { question: "Is it dark mode only?", answer: "While optimized for the 'Onyx' (neutral-950) palette, the component's card colors and accents can be adjusted to fit other dark themes." }
        ],
    },
    {
        id: "gallery-diagonal-marquee",
        name: "Diagonal Marquee",
        description: "Diagonal marquee gallery with scrolling text effects.",
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
            { name: "badgePrefix", type: "string", default: "A", description: "Prefix text for badge labels." },
        ],
        whenToUse: "Perfect for street-style blogs, edgy agencies, and Next.js applications that want a high-octane 'Diagonal Marquee' aesthetic. Use this gallery to communicate speed, confidence, and digital craft through technical marquees and high-speed scrolling.",
        bestPractices: "Follow React best practices by pairing this with bold, professional typography. Maintain consistent spacing within your design system by keeping the marquee speed uniform. Optimize for performance by managed the image-repeat multiplier.",
        whyMatters: "Diagonal animations communicate energy, flow, and digital momentum. This production-ready UI template helpsคุณ build an interface that feels alive and energetic, adding a distinct 'Moving' signature to your brand.",
        faqs: [
            { question: "Why 'Diagonal'?", answer: "The grid is tilted at a cinematic angle to create a sense of unconventional digital flow and high-speed energy common in high-end streetwear and creative labs." },
            { question: "Are colors editable?", answer: "Absolutely, you can adjust both the `backgroundColor` and the primary badge accents to match your brand's specific high-intensity palette." },
            { question: "How does the scroll work?", answer: "The component features localized horizontal scroll containers that move in 'Opposite' directions during scroll, creating an 'Immersive' physical movement effect." }
        ],
    },
    {
        id: "gallery-click-expand",
        name: "Hero Expand",
        description: "Click-to-expand hero gallery with fullscreen interactions.",
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
            { name: "items", type: "Array<{id: string, title: string, col: string, img: string}>", default: "[{id: '1', title: 'Cyber', col: 'col-span-2 row-span-2', img: '...'}, ...]", description: "Array of items with id, title, grid span classes, and image URL (empty img for empty slots)." },
            { name: "backgroundColor", type: "string", default: "#18181b", description: "#18181b Background color (hex, rgb, or hsl)." },
            { name: "emptySlotText", type: "string", default: "Empty", description: "Text displayed in empty grid slots." },
            { name: "fullScreenText", type: "string", default: "Full screen immersive view active. Click anywhere to return to the grid matrix.", description: "Text displayed in fullscreen view." },
        ],
        whenToUse: "Excellent for technical dashboards, AI processing platforms, and Next.js applications that want a high-tech 'Hero Expand' aesthetic. Use this layout to communicate power, security, and digital intelligence through dark themes and architectural grid modules.",
        bestPractices: "Maintain scalable component architecture by pairing this with sharp, technical typography. Follow React best practices by using Framer Motion for the module expansion. Optimize for performance by managed the border pattern renders.",
        whyMatters: "Expanding grid layouts communicate technical authority, sophistication, and digital craft. This production-ready UI template helpsคุณ build an interface that feels organized and high-end, adding a unique 'Safe' signature to your brand.",
        faqs: [
            { question: "Is the expansion 'Shared'?", answer: "Yes, the component uses Framer Motion's `layoutId` to animate the transition between the small grid module and the fullscreen immersive view seamlessly." },
            { question: "Can I adjust the grid?", answer: "Absolutely, both the Tailwind col-spans and the primary background colors can be adjusted to create 'Industrial' or 'Cyber' expansion effects." },
            { question: "How does the 'Empty' state work?", answer: "The grid supports architectural 'Negative Space' modules (default text: Empty) to maintain visual balance and structural honesty within the technical matrix." }
        ],
    },
];

