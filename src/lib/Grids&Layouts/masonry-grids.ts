import { getCode } from "../getCode";
import { Component } from "../types";

export const masonryGridComponents: Component[] = [
    {
        id: "masonry-editorial",
        name: "Editorial Stagger",
        description: "Sharp monochrome editorial masonry grid with high-fashion aesthetics.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "editorial", "monochrome", "fashion"],
        previewUrl: "/Grids&Layouts/MasonryGrids/MasonryEditorial",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/MasonryEditorial.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/MasonryEditorial.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/MasonryEditorial/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "items", type: "Array<{h: string, title: string, sub: string}>", default: "[{h: 'h-64', title: 'Vogue', sub: 'Collection 01'}, ...]", description: "Array of editorial items with height class (h), title, and subtitle." },
            { name: "backgroundColor", type: "string", default: "#f4f4f0", description: "Background color (hex, rgb, or hsl)." },
            { name: "imageSeed", type: "number", default: "50", description: "Seed number for generating placeholder images." },
        ],
        whenToUse: "Ideal for high-end fashion portfolios, editorial magazines, and creative agencies that want a sharp 'Editorial' aesthetic. Use this masonry grid to showcase project collections with a mix of asymmetrical heights and technical typography.",
        bestPractices: "Follow React best practices by pairing this with professional, high-contrast photography. Maintain consistent spacing within your design system by keeping the grid gaps uniform. Optimize for performance by using efficient image loading patterns.",
        whyMatters: "Editorial stagger layouts communicate digital excellence, fashion-forward thinking, and attention to detail. This production-ready UI template helpsคุณ build an interface that feels curated and premium, leaving a lasting visual impression on high-value clients.",
        faqs: [
            { question: "How does the 'Stagger' work?", answer: "The grid uses non-uniform item heights (h-64, h-96, etc.) to simulate the organic, asymmetrical flow found in physical fashion magazines and editorial lookbooks." },
            { question: "Are colors editable?", answer: "Absolutely, both the primary background and specific text colors can be tuned to match your brand's specific color palette (default: neutral-look)." },
            { question: "Is it mobile responsive?", answer: "Yes, the masonry columns adapt dynamically for mobile, Ensuring the editorial flow remains impactful and structural on small screens." }
        ],
    },
    {
        id: "masonry-neo-brutal",
        name: "Neo-Brutalist Pop",
        description: "Chunky bold neo-brutalist masonry grid with marquee effects.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "neo-brutal", "bold", "marquee"],
        previewUrl: "/Grids&Layouts/MasonryGrids/MasonryNeoBrutal",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/MasonryNeoBrutal.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/MasonryNeoBrutal.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/MasonryNeoBrutal/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "tiles", type: "Array<{span: string, bg: string, text: string, textCol?: string}>", default: "[{span: 'col-span-1 row-span-1', bg: '#FF6B6B', text: 'POP'}, ...]", description: "Array of tile objects with grid span, background color (hex), text, and optional text color (hex)." },
            { name: "backgroundColor", type: "string", default: "#E0E0E0", description: "Background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Perfect for edgy brands, experimental studios, and Next.js portfolios that want an energetic 'Neo-Brutalist' aesthetic. Use this masonry grid for a high-intensity experience with bold colors and high-contrast 'Raw' design elements.",
        bestPractices: "Maintain consistent spacing within your design system by using it for aggressive brand storytelling. Follow React best practices by pairing it with bold, technical typography. Optimize for performance by managed the border pattern renders.",
        whyMatters: "Neo-brutalist aesthetics communicate power, mystery, and structural honesty. This production-ready UI template helpsคุณ build an interface that feels authoritative and solid, breaking the 'standard' web layout rules.",
        faqs: [
            { question: "Why 'Neo-Brutalist'?", answer: "The grid features thick borders (8px), vibrant primary colors, and intentional 'uncomfortable' spacing to simulate the raw structural honesty of the brutalist architectural movement." },
            { question: "Can I adjust the colors?", answer: "Yes, the specific background color for each tile (bg-prop) is fully configurable, allowing you to create 'Cyber' or 'High-Contrast' pop effects." },
            { question: "Is it mobile responsive?", answer: "The grid spans adapt dynamically for mobile, ensuring the bold narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "masonry-swiss",
        name: "Swiss Precision",
        description: "Swiss design masonry grid with precise typography and clean lines.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "swiss", "precision", "typography"],
        previewUrl: "/Grids&Layouts/MasonryGrids/MasonrySwiss",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/MasonrySwiss.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/MasonrySwiss.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/MasonrySwiss/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "backgroundColor", type: "string", default: "#E5E5E5", description: "Background color (hex, rgb, or hsl)." },
            { name: "accentColor", type: "string", default: "#FF3B30", description: "Accent color for highlights (hex, rgb, or hsl)." },
            { name: "mainTitle", type: "string", default: "HELV.", description: "Main title text." },
            { name: "subtitle", type: "string", default: "INTERNATIONAL\\nSTYLE", description: "Subtitle text (supports \\n for line breaks)." },
            { name: "year", type: "string", default: "(1957)", description: "Year text displayed in sidebar." },
            { name: "coordinates", type: "{x: string, y: string}", default: "{x: '1024', y: '0768'}", description: "Coordinate values displayed in bottom section." },
        ],
        whenToUse: "Ideal for high-end digital agencies, artistic portfolios, and Next.js applications that want a meaningful 'Swiss Precision' aesthetic. Use this grid to communicate objective clarity, tranquility, and technical craft through rigid 8px modules.",
        bestPractices: "Maintain consistent spacing within your design system by adhering to the rigid grid. Follow React best practices by using systematic typography scales. Optimize for performance by using pure Tailwind for the layout structure.",
        whyMatters: "Swiss-based aesthetics communicate technical reliability, clarity, and timeless craft. This production-ready UI template helpsคุณ build an interface that feels organized and professional, reflecting a brand identity rooted in design purity.",
        faqs: [
            { question: "What is 'Swiss Design'?", answer: "The component follows the International Typographic Style (Swiss Style), focusing on readability, objective layout structure, and sans-serif typography (Helvetica-inspired)." },
            { question: "Are colors editable?", answer: "Absolutely, you can adjust both the `backgroundColor` and the primary `accentColor` (default red) to create 'Noir' or 'High-Contrast' Swiss effects." },
            { question: "Is it mobile responsive?", answer: "The grid spans and typographic scales adapt for mobile, ensuring the objective clarity remains consistent on high-density mobile screens." }
        ],
    },
    {
        id: "masonry-prism",
        name: "Prism Grid",
        description: "Prismatic masonry grid with light refraction and glass effects.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "prism", "glass", "refraction"],
        previewUrl: "/Grids&Layouts/MasonryGrids/MasonryPrism",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/MasonryPrism.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/MasonryPrism.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/MasonryPrism/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "shards", type: "Array<{clip: string, img: string, title?: string}>", default: "[{clip: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)', img: '...'}, ...]", description: "Array of shard objects with CSS clip-path, image URL, and optional title." },
            { name: "backgroundColor", type: "string", default: "#0f172a", description: "Background color (hex, rgb, or hsl)." },
            { name: "titlePrefix", type: "string", default: "Prism", description: "Prefix text for shard titles." },
        ],
        whenToUse: "Excellent for high-end digital agencies, award-winning portfolios, and Next.js platforms that want a premium 'Prism Grid' aesthetic. Use this masonry grid for an immersive experience with glassmorphism, blur effects, and light refraction cues.",
        bestPractices: "Follow React best practices by pairing this with high-contrast, bold imagery. Maintain consistent spacing within your design system by keeping the grid gaps uniform. Optimize for performance by managed the amount of blur renders.",
        whyMatters: "Prismatic aesthetics communicate digital excellence, sophistication, and high-end craft. This production-ready UI template helpsคุณ build an interface that feels curated and premium, leaving a lasting visual impression on high-value clients.",
        faqs: [
            { question: "What are 'Shards'?", answer: "The component uses localized CSS `clip-path` polygons to create non-uniform 'glass' shapes into which your content is projected, simulating light refraction." },
            { question: "Can I adjust the glow?", answer: "Yes, both the shard clipping and the primary background colors can be adjusted to create 'Emerald', 'Amber', or 'Cyber' prism effects." },
            { question: "Does it work on phone?", answer: "The prism shards adapt their spans for mobile, ensuring the refractive narrative remains impactful and legible on small screens." }
        ],
    },
    {
        id: "masonry-magma",
        name: "Magma Flow",
        description: "Liquid magma masonry grid with flowing animations and heat effects.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "magma", "flow", "liquid"],
        previewUrl: "/Grids&Layouts/MasonryGrids/MasonryMagma",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/MasonryMagma.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/MasonryMagma.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/MasonryMagma/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "items", type: "Array<{title?: string, subtitle?: string, buttonText?: string}>", default: "", description: "Array of magma items with optional title, subtitle, and button text. If not provided, items are auto-generated." },
            { name: "itemCount", type: "number", default: "6", description: "Number of items to generate if items array is not provided." },
            { name: "backgroundColor", type: "string", default: "#110000", description: "Background color (hex, rgb, or hsl)." },
            { name: "titlePrefix", type: "string", default: "Flow State", description: "Prefix text for auto-generated item titles." },
        ],
        whenToUse: "Perfect for high-octane brands, gaming labs, and Next.js platforms that want an immersive 'Magma Flow' aesthetic. Use this masonry grid for a tactile experience with organic blob animations and heat-gradient effects.",
        bestPractices: "Maintain scalable component architecture by keeping the blob count balanced. Follow React best practices by using Framer Motion for the fluid advection renders. Optimize for performance by managed the gradient intensity.",
        whyMatters: "Organic liquid aesthetics communicate digital complexity, flow, and digital craft. This production-ready UI template helpsคุณ build an interface that feels advanced and 'Breathing', adding a unique 'Magma' signature to your project.",
        faqs: [
            { question: "Is the flow real?", answer: "The component uses localized SVG filters and spring physics to simulate organic 'Metaballs' that merge and split smoothly as they 'flow' through the grid." },
            { question: "Can I adjust the heat?", answer: "Absolutely, you can customize the primary background color and the specific 'magma' gradients to match your brand's specific heat intensity." },
            { question: "Is it mobile responsive?", answer: "The liquid flows and blob spans adapt for mobile, ensuring the 'Magma' feel remains consistent on high-density mobile screens." }
        ],
    },
    {
        id: "uilora-brutalist-grid",
        name: "Brutalist Grid",
        description: "Brutalist masonry grid with stark contrasts and bold shapes.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "brutalist", "bold", "contrast"],
        previewUrl: "/Grids&Layouts/MasonryGrids/BrutalistGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/BrutalistGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/BrutalistGrid.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/BrutalistGrid/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[...12 image URLs]", description: "Array of image URLs." },
            { name: "content", type: "Array<{type: 'img'|'text', src?: string, title?: string, text?: string, span?: string}>", default: "", description: "Array of content items (images or text cards). If not provided, default content is generated from images." },
            { name: "backgroundColor", type: "string", default: "#f5f5f5", description: "Background color (hex, rgb, or hsl)." },
            { name: "indexPrefix", type: "string", default: "Index", description: "Prefix text for item index labels." },
            { name: "hoverColor", type: "string", default: "#facc15", description: "Hover state color for text cards (hex, rgb, or hsl)." },
        ],
        whenToUse: "Excellent for technical portfolios, edgy agencies, and Next.js applications that want a dramatic 'Brutalist' aesthetic. Use this grid to communicate structural scale, and natural craft through architectural modules.",
        bestPractices: "Maintain consistent spacing within your design system by using variable, organic grid gaps. Follow React best practices by pairing this with bold, technical typography. Optimize for performance by using efficient image textures.",
        whyMatters: "Brutalist-based aesthetics communicate power, mystery, and structural honesty. This production-ready UI template helpsคุณ build an interface that feels authoritative and solid, breaking the 'standard' web layout rules.",
        faqs: [
            { question: "Why is it 'Archive'?", answer: "The grid is designed with an indexing feel (Index 01, 02) to simulate a technical feature repository or architectural project repository." },
            { question: "Can I use color images?", answer: "Absolutely, while optimized for high-contrast, moody photography, you can apply any visual assets to the grid layers effectively." },
            { question: "Is the hover color real?", answer: "Yes, the primary hover state (default yellow) for text tiles is configurable to match your brand's specific high-intensity accent palette." }
        ],
    },
    {
        id: "clay-grid",
        name: "Clay Grid",
        description: "Soft clay masonry grid with organic shapes and earthy tones.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "clay", "organic", "soft"],
        previewUrl: "/Grids&Layouts/MasonryGrids/ClayGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/ClayGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/ClayGrid.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/ClayGrid/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[...9 image URLs]", description: "Array of image URLs." },
            { name: "content", type: "Array<{type: 'img'|'text', src?: string, title?: string, text?: string, span?: string}>", default: "", description: "Array of content items (images or text cards). If not provided, default content is generated from images." },
            { name: "backgroundColor", type: "string", default: "#e0e5ec", description: "Background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for wellness apps, lifestyle brands, and Next.js platforms that want a 'Clay' aesthetic. Use this grid to communicate objective clarity, tranquility, and structural honesty through soft, organic shapes and earthy tones.",
        bestPractices: "Maintain consistent spacing within your design system by adhering to the rigid 8px grid. Follow React best practices by using pure Tailwind for the layout structure. Optimize for performance by using systematic typography scales.",
        whyMatters: "Neumorphic 'Clay' aesthetics communicate technical reliability, clarity, and timeless craft. This production-ready UI template helpsคุณ build an interface that feels organized and professional, reflecting a brand identity rooted in design purity.",
        faqs: [
            { question: "What is 'Clay Design'?", answer: "The component uses localized CSS box-shadows and subtle inner glows to simulate the soft, matte surfaces found in high-fidelity 3D clay renders." },
            { question: "Are colors dynamic?", answer: "Absolutely, while the background is typically neutral, each item's specific imagery and primary background color can be adjusted to fit your project's environmental theme." },
            { question: "Is it mobile responsive?", answer: "The grid spans and typographic scales adapt for mobile, ensuring the objective clarity remains consistent on high-density mobile screens." }
        ],
    },
    {
        id: "agency-grid",
        name: "Agency Grid",
        description: "Professional agency masonry grid with corporate aesthetics.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "agency", "professional", "corporate"],
        previewUrl: "/Grids&Layouts/MasonryGrids/AgencyGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/AgencyGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/AgencyGrid.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/AgencyGrid/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[...12 image URLs]", description: "Array of image URLs." },
            { name: "content", type: "Array<{type: 'img'|'text', src?: string, title?: string, text?: string, span?: string}>", default: "", description: "Array of content items (images or text cards). If not provided, default content is generated from images." },
            { name: "backgroundColor", type: "string", default: "#0a0a0a", description: "Background color (hex, rgb, or hsl)." },
            { name: "projectPrefix", type: "string", default: "Project", description: "Prefix text for project labels." },
        ],
        whenToUse: "Excellent for technical dashboards, AI processing platforms, and Next.js applications that want a high-tech 'Agency' aesthetic. Use this layout to communicate power, security, and digital intelligence through dark themes and architectural grid modules.",
        bestPractices: "Maintain scalable component architecture by pairing this with sharp, technical typography. Follow React best practices by using Framer Motion for the module reveal transitions. Optimize for performance by managed the border renders.",
        whyMatters: "Masonry-based agency layouts communicate technical authority, sophistication, and digital craft. This production-ready UI template helpsคุณ build an interface that feels organized and high-end, adding a unique 'Corporate' signature to your brand.",
        faqs: [
            { question: "Is the 'Agency' really professional?", answer: "The grid is designed with technical 'Indices' and architectural aesthetics to simulate a high-quality technical repository for your project details." },
            { question: "Can I adjust the grid?", answer: "Yes, both the Tailwind col-spans and primary background colors can be adjusted to create 'Industrial' or 'Cyber' agency effects." },
            { question: "Is the project prefix real?", answer: "Absolutely, you can configure the terminal string (default: Project) to match your project's specific terminology." }
        ],
    },
    {
        id: "sketch-grid",
        name: "Sketch Grid",
        description: "Hand-drawn sketch masonry grid with rough aesthetics.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "sketch", "hand-drawn", "rough"],
        previewUrl: "/Grids&Layouts/MasonryGrids/SketchGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/SketchGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/SketchGrid.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/SketchGrid/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[...9 image URLs]", description: "Array of image URLs." },
            { name: "content", type: "Array<{type: 'img'|'text', src?: string, title?: string, text?: string, span?: string}>", default: "", description: "Array of content items (images or text cards). If not provided, default content is generated from images." },
            { name: "backgroundColor", type: "string", default: "#f0f0f0", description: "Background color (hex, rgb, or hsl)." },
            { name: "gridColor", type: "string", default: "#ccc", description: "Grid pattern color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for creative studios, experimental art projects, and Next.js portfolios that want an organic 'Sketch' aesthetic. Use this layout for an engaging experience where content feels 'Mailed' and 'Drafted' by physical sketch lines.",
        bestPractices: "Maintain scalable component architecture by keeping the sketch colors consistent with your primary palette. Follow React best practices by pairing this with bold, technical typography. Optimize for performance by managed the grid renders.",
        whyMatters: "Hand-drawn sketch animations create a sense of digital 'Authenticity' and human touch. This production-ready UI template helpsคุณ build an interface that feels alive and 'Drafted', adding a unique signatures to your brand structure.",
        faqs: [
            { question: "Are the lines real?", answer: "The component features localized SVG filters and rough CSS borders to simulate organic 'Sketch' lines that react to user focus." },
            { question: "Can I adjust the grit?", answer: "Absolutely, you can change both the `backgroundColor` and `gridColor` to create 'Graph-Paper' or 'Industrial' sketch effects." },
            { question: "Is it mobile responsive?", answer: "The grid spans and organic offsets scale for mobile, ensuring the 'Draft' narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "pop-grid",
        name: "Pop Grid",
        description: "Pop art masonry grid with vibrant colors and bold patterns.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "pop", "vibrant", "bold"],
        previewUrl: "/Grids&Layouts/MasonryGrids/PopGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/PopGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/PopGrid.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/PopGrid/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[...12 image URLs]", description: "Array of image URLs." },
            { name: "content", type: "Array<{type: 'img'|'text', src?: string, title?: string, text?: string, span?: string}>", default: "", description: "Array of content items (images or text cards). If not provided, default content is generated from images." },
            { name: "backgroundColor", type: "string", default: "#FFE5E5", description: "Background color (hex, rgb, or hsl)." },
            { name: "itemPrefix", type: "string", default: "ITEM", description: "Prefix text for item labels." },
            { name: "badgeText", type: "string", default: "POP", description: "Badge text displayed on images." },
            { name: "colors", type: "string[]", default: "['#A3E635', '#60A5FA', '#F472B6']", description: "Array of background colors (hex) for alternating items." },
        ],
        whenToUse: "Perfect for street-style blogs, edgy agencies, and Next.js applications that want an energetic 'Pop' aesthetic. Use this masonry grid to communicate speed, confidence, and digital craft through vibrant colors and bold patterns.",
        bestPractices: "Follow React best practices by pairing this with bold, professional typography. Maintain consistent spacing within your design system by keeping the color offsets uniform. Optimize for performance by managed the image-repeat multiplier.",
        whyMatters: "Pop-art animations communicate energy, flow, and digital momentum. This production-ready UI template helpsคุณ build an interface that feels alive and energetic, adding a distinct 'Moving' signature to your brand.",
        faqs: [
            { question: "Why 'Pop-Art'?", answer: "The grid features thick borders (4px), vibrant primary colors, and intentional 'uncomfortable' spacing to simulate the raw structural honesty of the pop-art movement." },
            { question: "Can I adjust the colors?", answer: "Absolutely, you can adjust both the `backgroundColor` and the primary `colors` array (default: vibrant mix) to match your brand's specific high-intensity palette." },
            { question: "Is it mobile responsive?", answer: "The grid spans and typographic scales adapt for mobile, ensuring the bold narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "sliced-grid",
        name: "Abstract Sliced",
        description: "Abstract sliced masonry grid with split-screen effects.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "sliced", "abstract", "split"],
        previewUrl: "/Grids&Layouts/MasonryGrids/SlicedGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/SlicedGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/SlicedGrid.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/SlicedGrid/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[...12 image URLs]", description: "Array of image URLs." },
            { name: "content", type: "Array<{type: 'img'|'text', src?: string, title?: string, text?: string, span?: string}>", default: "", description: "Array of content items (images or text cards). If not provided, default content is generated from images." },
            { name: "backgroundColor", type: "string", default: "#171717", description: "Background color (hex, rgb, or hsl)." },
            { name: "overlayColor", type: "string", default: "#dc2626", description: "Overlay color for hover effects (hex, rgb, or hsl)." },
        ],
        whenToUse: "Excellent for mysterious brands, technical archives, and Next.js platforms that want a dramatic 'Sliced' aesthetic. Use this masonry grid for an immersive experience where images 'Slice' and reveal their narrative with organic transitions.",
        bestPractices: "Maintain consistent spacing within your design system by keeping the grid items centered. Follow React best practices by managed the layout-id for the 'Shared Element' transition. Optimize for performance by using efficient Tailwind col-spans.",
        whyMatters: "Abstract sliced animations communicate digital excellence, mystery, and digital craft. This production-ready UI template helpsคุณ build an interface that feels responsive and alive, adding a unique architectural signature to your brand interaction.",
        faqs: [
            { question: "How does the split work?", answer: "The component uses localized mask coordinates to 'Slice' the card surface during hover, creating a high-fidelity physical reveal of the underlying feature detail." },
            { question: "Are colors dynamic?", answer: "Absolutely, you can adjust both the `backgroundColor` and the primary `overlayColor` (default red) to match your brand's specific high-intensity palette." },
            { question: "Is it mobile responsive?", answer: "The grid spans and organic offsets adapt for mobile, ensuring the 'Reveal' transition remains impactful and structural on small screens." }
        ],
    },
];

