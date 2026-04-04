import { getCode } from "../getCode";
import { Component } from "../types";

export const imageGalleryComponents: Component[] = [
    {
        id: "gallery-mosaic",
        name: "Mosaic",
        description: "Floating parallax mosaic gallery with soft minimal design.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "mosaic", "parallax", "minimal"],
        previewUrl: "/Media/ImageGalleries/GalleryMosaic",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryMosaic.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryMosaic.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryMosaic/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[...array of image URLs]", description: "Array of image source URLs." },
            { name: "backgroundColor", type: "string", default: "#FDFBF7", description: "Background color (hex, rgb, or hsl)." },
            { name: "viewText", type: "string", default: "View", description: "Text displayed on hover overlay." },
            { name: "scrollSpeed1", type: "number", default: "-200", description: "Scroll speed for first column (negative = up, positive = down)." },
            { name: "scrollSpeed2", type: "number", default: "150", description: "Scroll speed for second column." },
            { name: "scrollSpeed3", type: "number", default: "-100", description: "Scroll speed for third column." },
        ],
        whenToUse: "Perfect for fashion editorials, interior design portfolios, and travel blogs that want a light, airy 'Mosaic' aesthetic. Use this gallery to showcase a collection of images with a sense of depth and organic movement.",
        bestPractices: "Maintain consistent spacing within your design system by keeping the column gaps uniform. Follow React best practices by pairing this with high-fidelity, professional photography. Optimize for performance by using efficient image loading patterns.",
        whyMatters: "Mosaic layouts communicate digital elegance, sophistication, and attention to detail. This production-ready UI template helpsคุณ build an interface that feels curated and premium, leaving a lasting visual impression on high-value clients.",
        faqs: [
            { question: "How does the parallax work?", answer: "The gallery uses localized scroll-driven animations with varying speeds for each column, creating a high-fidelity 'depth' effect as the user navigates the page." },
            { question: "Can I adjust the speeds?", answer: "Absolutely, both the direction and intensity of the column movement (scrollSpeed1, 2, 3) are fully configurable to match your scroll intensity." },
            { question: "Is it mobile responsive?", answer: "Yes, the multi-column mosaic adapts its spans dynamically for mobile, Ensuring the organic flow remains impactful and readable on small screens." }
        ],
    },
    {
        id: "gallery-diagonal",
        name: "Diagonal",
        description: "Diagonal slice gallery with neo-brutalism and cyber aesthetics.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "diagonal", "brutalist", "cyber"],
        previewUrl: "/Media/ImageGalleries/GalleryDiagonal",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryDiagonal.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryDiagonal.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryDiagonal/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[...array of image URLs]", description: "Array of image source URLs." },
            { name: "backgroundColor", type: "string", default: "#09090b", description: "Background color (hex, rgb, or hsl)." },
            { name: "labelPrefix", type: "string", default: "IMG", description: "Prefix text for image labels." },
            { name: "overlayColor", type: "string", default: "#a855f7", description: "Overlay accent color (hex, rgb, or hsl)." },
            { name: "badgeColor", type: "string", default: "#84cc16", description: "Badge background color (hex, rgb, or hsl)." },
            { name: "badgeTextColor", type: "string", default: "#000000", description: "Badge text color (hex, rgb, or hsl)." },
            { name: "rows", type: "number", default: "3", description: "Number of diagonal rows to display." },
        ],
        whenToUse: "Ideal for edgy streetwear brands, experimental art portfolios, and Next.js applications that want an energetic 'Diagonal' aesthetic. Use this gallery to showcase project collections with a high-intensity, industrial 'Raw' vibe.",
        bestPractices: "Maintain consistent spacing within your design system by using it for aggressive brand storytelling. Follow React best practices by pairing it with bold, technical typography. Optimize for performance by managed the marquee intensity.",
        whyMatters: "Diagonal-based aesthetics communicate power, mystery, and structural honesty. This production-ready UI template helpsคุณ build an interface that feels authoritative and solid, breaking the 'standard' web layout rules.",
        faqs: [
            { question: "Why 'Diagonal'?", answer: "The gallery features skewed containers and slanted text paths to simulate the raw structural honesty of the brutalist architectural movement." },
            { question: "Can I adjust colors?", answer: "Yes, both the primary 'overlayColor' and the specific 'badgeColor' are fully configurable, allowing you to create 'Cyber' or 'Industrial' pop effects." },
            { question: "Is it mobile responsive?", answer: "The diagonal rows adapt their spans dynamically for mobile, ensuring the bold narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "gallery-broken",
        name: "Broken Grid",
        description: "Broken grid gallery with asymmetric layout.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "broken", "grid", "asymmetric"],
        previewUrl: "/Media/ImageGalleries/GalleryBroken",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryBroken.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryBroken.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryBroken/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[...array of image URLs]", description: "Array of image source URLs." },
            { name: "backgroundColor", type: "string", default: "#050505", description: "Background color (hex, rgb, or hsl)." },
            { name: "textColor", type: "string", default: "#ffffff", description: "Text color (hex, rgb, or hsl)." },
            { name: "borderColor", type: "string", default: "rgba(255,255,255,0.1)", description: "Border color (hex, rgb, or rgba)." },
            { name: "exploreText", type: "string", default: "Explore", description: "Text displayed in the explore section." },
        ],
        whenToUse: "Excellent for technical portfolios, edgy agencies, and Next.js platforms that want a dramatic 'Broken Grid' aesthetic. Use this layout to communicate structural scale and digital craft through architectural modules.",
        bestPractices: "Maintain consistent spacing within your design system by using variable, organic grid gaps. Follow React best practices by pairing this with bold, technical typography. Optimize for performance by using efficient image textures.",
        whyMatters: "Broken layouts communicate power, mystery, and structural honesty. This production-ready UI template helpsคุณ build an interface that feels authoritative and solid, breaking the 'standard' web layout rules.",
        faqs: [
            { question: "How is it 'Broken'?", answer: "The grid uses non-uniform column spans and staggered vertical offsets (y-translation) to simulate the raw structural honesty of architectural blueprint failures." },
            { question: "Can I add more text?", answer: "Absolutely, while optimized for high-contrast imagery, you can expand the text cards to include project descriptions or technical metadata." },
            { question: "Is it mobile responsive?", answer: "The grid's asymmetric spans adapt dynamically for mobile, Ensuring the structural narrative remains impactful on small screens." }
        ],
    },
    {
        id: "gallery-deck",
        name: "Z-Stack",
        description: "Z-stack deck gallery with layered cards.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "deck", "stack", "layered"],
        previewUrl: "/Media/ImageGalleries/GalleryDeck",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryDeck.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryDeck.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryDeck/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[...array of image URLs]", description: "Array of image source URLs." },
            { name: "backgroundColor", type: "string", default: "#e0e5ec", description: "Background color (hex, rgb, or hsl)." },
            { name: "title", type: "string", default: "The Stack.", description: "Main title text." },
            { name: "description", type: "string", default: "Hover to expand the collection. A playful take on depth.", description: "Description text." },
            { name: "cardCount", type: "number", default: "5", description: "Number of cards to display in the stack." },
            { name: "shadowColor", type: "string", default: "#bebebe", description: "Shadow color for neumorphic effect (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for wellness apps, lifestyle brands, and Next.js platforms that want a soft 'Clay' aesthetic. Use this gallery for an engaging 'Deck' experience where images feel 'Physical' and 'Stacked' like real paper cards.",
        bestPractices: "Maintain consistent spacing within your design system by adhering to the soft neumorphic shadows. Follow React best practices by using pure Tailwind for the layout structure. Optimize for performance by using systematic typography scales.",
        whyMatters: "Neumorphic 'Clay' aesthetics communicate technical reliability, clarity, and timeless craft. This production-ready UI template helpsคุณ build an interface that feels organized and professional, reflecting a brand identity rooted in design purity.",
        faqs: [
            { question: "What is 'Clay Case'?", answer: "The component uses localized CSS box-shadows and subtle inner glows to simulate the soft, matte surfaces found in high-fidelity 3D clay renders." },
            { question: "How does it expand?", answer: "The deck uses localized mouse coordinates to fan out the cards during hover, creating a high-fidelity 'physical' expansion of the underlying project detail." },
            { question: "Is it mobile responsive?", answer: "The stack count and typographic scales adapt for mobile, ensuring the 'Deck' feel remains consistent on high-density mobile screens." }
        ],
    },
    {
        id: "gallery-cinematic",
        name: "Cinematic",
        description: "Cinematic gallery with widescreen presentation.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "cinematic", "widescreen", "presentation"],
        previewUrl: "/Media/ImageGalleries/GalleryCinematic",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryCinematic.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryCinematic.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryCinematic/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2700&auto=format&fit=crop", description: "Main image source URL." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color (hex, rgb, or hsl)." },
            { name: "title", type: "string", default: "Élégance", description: "Main title text." },
            { name: "subtitle", type: "string", default: "Cinematic Experience", description: "Subtitle text." },
            { name: "triggerTexts", type: "string[]", default: "['Zoom.', 'Expand.', 'Immerse.']", description: "Array of trigger text strings displayed during scroll." },
            { name: "scrollHeight", type: "string", default: "250vh", description: "Total scroll height for the component." },
        ],
        whenToUse: "Excellent for high-end fashion campaigns, award-winning portfolios, and Next.js applications that want a meaningful 'Cinematic' aesthetic. Use this layout to communicate digital excellence and sophisticated storytelling through widescreen modules.",
        bestPractices: "Maintain consistent spacing within your design system by using it for focal narratives. Follow React best practices by pairing this with bold, professional typography. Optimize for performance by using efficient image textures.",
        whyMatters: "Cinematic-based aesthetics communicate technical reliability, clarity, and timeless craft. This production-ready UI template helpsคุณ build an interface that feels organized and professional, reflecting a brand identity rooted in design purity.",
        faqs: [
            { question: "How does it scale?", answer: "The component uses localized scroll-driven transforms (scale, blur) to simulate a high-fidelity 'Camera Zoom' into the heart of the project narrative." },
            { question: "Can I adjust scroll?", answer: "Yes, both the direction and intensity of the zoom (scrollHeight) are fully configurable to match your scroll intensity." },
            { question: "Is it mobile responsive?", answer: "The cinematic scale and typographic scales adapt for mobile, ensuring the objective clarity remains consistent on high-density mobile screens." }
        ],
    },
    {
        id: "uilora-gallery-film-strip",
        name: "Film Strip",
        description: "Film strip gallery with horizontal scrolling.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "film", "strip", "scrolling"],
        previewUrl: "/Media/ImageGalleries/GalleryFilmStrip",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryFilmStrip.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryFilmStrip.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryFilmStrip/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[...array of image URLs]", description: "Array of image source URLs." },
            { name: "backgroundColor", type: "string", default: "#f0f0f0", description: "Background color (hex, rgb, or hsl)." },
            { name: "archiveText", type: "string", default: "Archive 2024", description: "Archive label text displayed at top." },
            { name: "figurePrefix", type: "string", default: "FIG.", description: "Prefix for figure labels." },
            { name: "isoText", type: "string", default: "ISO 400", description: "ISO text displayed on each image." },
            { name: "scrollHeight", type: "string", default: "300vh", description: "Total scroll height for the component." },
        ],
        whenToUse: "Ideal for creative studios, experimental art projects, and Next.js portfolios that want an organic 'Film-Strip' aesthetic. Use this layout for an engaging experience where content feels 'Mailed' and 'Drafted' by physical film borders.",
        bestPractices: "Maintain scalable component architecture by keeping the archive labels consistent. Follow React best practices by pairing this with bold, technical typography. Optimize for performance by managed the marquee intensity.",
        whyMatters: "Hand-drawn film animations create a sense of digital 'Authenticity' and human touch. This production-ready UI template helpsคุณ build an interface that feels alive and 'Drafted', adding a unique signatures to your brand structure.",
        faqs: [
            { question: "Are those film labels real?", answer: "The component features localized metadata strings (ISO 400, FIG.) and rough film-strip borders to simulate the raw structural honesty of architectural blueprint failures." },
            { question: "How does it scroll?", answer: "The strip uses localized scroll-driven animations with varying offsets for each row, creating a high-fidelity 'physical' movement as the user navigates the page." },
            { question: "Is it mobile responsive?", answer: "The horizontal flow and typographic scales adapt for mobile, ensuring the 'Draft' narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "uilora-gallery-bento",
        name: "Bento",
        description: "Bento grid gallery with masonry layout.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "bento", "grid", "masonry"],
        previewUrl: "/Media/ImageGalleries/GalleryBento",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryBento.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryBento.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryBento/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[...array of image URLs]", description: "Array of image source URLs." },
            { name: "backgroundColor", type: "string", default: "#0f172a", description: "Background color (hex, rgb, or hsl)." },
            { name: "mainTitle", type: "string", default: "Studio Life", description: "Main hero section title." },
            { name: "mainSubtitle", type: "string", default: "Design System", description: "Main hero section subtitle." },
            { name: "accentColor1", type: "string", default: "#BFA3D2", description: "First accent color for decorative elements (hex, rgb, or hsl)." },
            { name: "accentColor2", type: "string", default: "#5C3D74", description: "Second accent color for decorative elements (hex, rgb, or hsl)." },
            { name: "accentColor3", type: "string", default: "#fb923c", description: "Third accent color for decorative elements (hex, rgb, or hsl)." },
            { name: "accentColor4", type: "string", default: "#2dd4bf", description: "Fourth accent color for decorative elements (hex, rgb, or hsl)." },
            { name: "moreText", type: "string", default: "More +", description: "Text displayed in the 'more' card." },
        ],
        whenToUse: "Excellent for technical portfolios, edgy agencies, and Next.js applications that want a high-tech 'Bento' aesthetic. Use this layout to communicate power, security, and digital intelligence through dark themes and architectural grid modules.",
        bestPractices: "Maintain scalable component architecture by pairing this with sharp, technical typography. Follow React best practices by using Framer Motion for the module reveal transitions. Optimize for performance by managed the border renders.",
        whyMatters: "Bento-based layouts communicate technical authority, sophistication, and digital craft. This production-ready UI template helpsคุณ build an interface that feels organized and high-end, adding a unique 'Corporate' signature to your brand.",
        faqs: [
            { question: "How does the 'Bento' work?", answer: "The gallery is designed with technical 'Indices' and architectural aesthetics to simulate a high-quality technical repository for your project details." },
            { question: "Can I adjust the grid?", answer: "Yes, both the Tailwind col-spans and primary background colors can be adjusted to create 'Industrial' or 'Cyber' agency effects." },
            { question: "Is it mobile responsive?", answer: "The grid spans adapt dynamically for mobile, ensuring the bold narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "gallery-editorial",
        name: "Editorial",
        description: "Editorial gallery with magazine-style layout.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "editorial", "magazine", "layout"],
        previewUrl: "/Media/ImageGalleries/GalleryEditorial",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryEditorial.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryEditorial.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryEditorial/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "items", type: "Array<{image: string, chapter?: string, title?: string, titleItalic?: string, description?: string}>", default: "[{image: '...', chapter: 'CHAPTER 01', title: 'The Silent', titleItalic: 'Symphony', description: '...'}, ...]", description: "Array of editorial items with image, chapter, title, titleItalic, and description." },
            { name: "backgroundColor", type: "string", default: "#1a1a1a", description: "Background color (hex, rgb, or hsl)." },
            { name: "textColor", type: "string", default: "#e5e5e5", description: "Text color (hex, rgb, or hsl)." },
            { name: "accentColor", type: "string", default: "#d4af37", description: "Accent color for chapter labels (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for high-end fashion portfolios, editorial magazines, and creative agencies that want a sharp 'Editorial' aesthetic. Use this layout to showcase project collections with a mix of asymmetrical heights and technical typography.",
        bestPractices: "Follow React best practices by pairing this with professional, high-contrast photography. Maintain consistent spacing within your design system by keeping the grid gaps uniform. Optimize for performance by using efficient image loading patterns.",
        whyMatters: "Editorial layouts communicate digital excellence, fashion-forward thinking, and attention to detail. This production-ready UI template helpsคุณ build an interface that feels curated and premium, leaving a lasting visual impression on high-value clients.",
        faqs: [
            { question: "How does the 'Chapter' work?", answer: "The gallery is designed with an indexing feel (Chapter 01, 02) to simulate a technical feature repository or architectural project repository." },
            { question: "Can I adjust the typography?", answer: "Absolutely, both the primary 'title' and the specific 'titleItalic' weights are fully configurable, allowing you to create 'High-Contrast' magazine effects." },
            { question: "Is it mobile responsive?", answer: "The vertical flow and typographic scales adapt for mobile, ensuring the 'Draft' narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "gallery-asymmetric",
        name: "Asymmetric",
        description: "Asymmetric gallery with dynamic positioning.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "asymmetric", "dynamic", "positioning"],
        previewUrl: "/Media/ImageGalleries/GalleryAsymmetric",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryAsymmetric.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryAsymmetric.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryAsymmetric/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "Array<{src: string, width?: string, height?: string, top?: string, left?: string, right?: string, bottom?: string, rotate?: number, label?: string, grayscale?: boolean, decoration?: React.ReactNode}>", default: "[{src: '...', width: '300px', height: '350px', top: '20', left: '10', rotate: -6, label: 'Summer 23', grayscale: true}, ...]", description: "Array of image objects with positioning and styling properties." },
            { name: "backgroundColor", type: "string", default: "#fcf8f3", description: "Background color (hex, rgb, or hsl)." },
            { name: "patternUrl", type: "string", default: "https://www.transparenttextures.com/patterns/cubes.png", description: "URL for background pattern texture." },
            { name: "title", type: "string", default: "COLLAGE", description: "Large background title text." },
            { name: "titleColor", type: "string", default: "rgba(0,0,0,0.05)", description: "Title text color (hex, rgb, or rgba)." },
        ],
        whenToUse: "Ideal for creative studios, experimental art projects, and Next.js portfolios that want an organic 'Asymmetric' aesthetic. Use this layout for an engaging 'Collage' experience where content feels 'Mailed' and 'Drafted' by physical sketch lines.",
        bestPractices: "Maintain scalable component architecture by keeping the sketch colors consistent with your primary palette. Follow React best practices by pairing this with bold, technical typography. Optimize for performance by managed the grid renders.",
        whyMatters: "Asymmetric collage animations create a sense of digital 'Authenticity' and human touch. This production-ready UI template helpsคุณ build an interface that feels alive and 'Drafted', adding a unique signatures to your brand structure.",
        faqs: [
            { question: "Why 'Asymmetric'?", answer: "The gallery features rough CSS borders and non-uniform positioning (top, left, rotate) to simulate the raw structural honesty of physical art boards." },
            { question: "Can I adjust textures?", answer: "Absolutely, you can change both the `backgroundColor` and `patternUrl` to create 'Graph-Paper' or 'Industrial' sketch effects." },
            { question: "Is it mobile responsive?", answer: "The grid spans and organic offsets scale for mobile, ensuring the 'Draft' narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "gallery-radial",
        name: "Radial",
        description: "Radial gallery with circular arrangement.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "radial", "circular", "arrangement"],
        previewUrl: "/Media/ImageGalleries/GalleryRadial",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryRadial.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryRadial.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryRadial/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[...array of image URLs]", description: "Array of image source URLs." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color (hex, rgb, or hsl)." },
            { name: "radius", type: "number", default: "350", description: "Radius of the circular arrangement in pixels." },
            { name: "count", type: "number", default: "8", description: "Number of images to display in the circle." },
            { name: "rotationSpeed", type: "number", default: "0.2", description: "Speed multiplier for scroll-based rotation." },
            { name: "centerText", type: "string", default: "ORBITAL", description: "Center text displayed in the orb." },
            { name: "centerSubtext", type: "string", default: "SYSTEM READY", description: "Center subtext displayed below main text." },
            { name: "borderColor", type: "string", default: "#06b6d4", description: "Border and accent color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Perfect for high-octane brands, gaming labs, and Next.js platforms that want an immersive 'Radial' aesthetic. Use this layout for a tactile experience with organic orbital animations and heat-gradient effects.",
        bestPractices: "Maintain scalable component architecture by keeping the orb count balanced. Follow React best practices by using Framer Motion for the fluid advection renders. Optimize for performance by managed the gradient intensity.",
        whyMatters: "Organic liquid aesthetics communicate digital complexity, flow, and digital craft. This production-ready UI template helpsคุณ build an interface that feels advanced and 'Breathing', adding a unique 'Orbital' signature to your project.",
        faqs: [
            { question: "Is the orbit real?", answer: "The component uses localized SVG filters and spring physics to simulate organic 'Metaballs' that merge and split smoothly as they 'orbit' through the grid." },
            { question: "Can I adjust radius?", answer: "Absolutely, you can customize both the primary `radius` and the specific `rotationSpeed` to match your brand's specific intensity." },
            { question: "Is it mobile responsive?", answer: "The liquid flows and orb spans adapt for mobile, ensuring the 'Orbital' feel remains consistent on high-density mobile screens." }
        ],
    },
];

