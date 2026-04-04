import { getCode } from "../getCode";
import { Component } from "../types";
export const carouselComponents: Component[] = [
    {
        id: "depth",
        name: "Depth Parallax",
        description: "Carousel with depth parallax scrolling effects.",
        category: "Special Elements",
        installType: "cli",
        tags: ["carousel", "parallax", "depth", "scroll"],
        previewUrl: "/SpecialElements/Carousels/Depth",
        code: {
            tsx: getCode("src/components/SpecialElements/Carousels/tsx/CarouselDepth.tsx"),
            jsx: getCode("src/components/SpecialElements/Carousels/jsx/CarouselDepth.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Carousels/Depth/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[url1, url2, ...]", description: "Array of image URLs to display in the carousel." },
            { name: "labels", type: "string[]", default: "[]", description: "Optional array of labels for each slide (overrides default 'SLIDE 0X' format)." },
            { name: "defaultIndex", type: "number", default: "0", description: "Initial active slide index." },
            { name: "backgroundColor", type: "string", default: "transparent", description: "Background color of the component (hex, rgb, or hsl)." },
            { name: "containerBgColor", type: "string", default: "#000000", description: "Background color of the carousel container (hex, rgb, or hsl)." },
            { name: "borderRadius", type: "string", default: "1rem", description: "Border radius of the container (CSS value)." },
            { name: "imageOpacity", type: "number", default: "0.6", description: "Opacity of background images (0-1)." },
            { name: "textColor", type: "string", default: "#ffffff", description: "Color of slide labels (hex, rgb, or hsl)." },
            { name: "buttonBgColor", type: "string", default: "rgba(255,255,255,0.2)", description: "Background color of navigation buttons (hex, rgb, or hsl)." },
            { name: "buttonHoverBgColor", type: "string", default: "rgba(255,255,255,0.4)", description: "Background color of buttons on hover (hex, rgb, or hsl)." },
            { name: "buttonTextColor", type: "string", default: "#ffffff", description: "Text/icon color of buttons (hex, rgb, or hsl)." },
            { name: "buttonBorderRadius", type: "string", default: "9999px", description: "Border radius of buttons (CSS value)." },
            { name: "transitionDuration", type: "number", default: "0.8", description: "Duration of slide transitions in seconds." },
            { name: "height", type: "string", default: "16rem", description: "Height of the carousel container (CSS value)." },
            { name: "maxWidth", type: "string", default: "28rem", description: "Maximum width of the carousel container (CSS value)." },
        ],
        whenToUse: "Excellent for luxury brand landing pages, cinematic portfolios, and Next.js applications that want a meaningful 'Depth' aesthetic. Use this carousel to provide immersive image exploration with subtle parallax layers and glow effects.",
        bestPractices: "Maintain consistent spacing within your design system by using it for high-fidelity focal imagery. Follow React best practices by pairing this with sharp, technical typography. Optimize for performance by managed the image opacity renders.",
        whyMatters: "Depth-based aesthetics communicate technical reliability, clarity, and timeless craft. This production-ready UI template helpsคุณ build an interface that feels organized and professional, reflecting a brand identity rooted in design purity.",
        faqs: [
            { question: "How does the 'Depth' work?", answer: "The component uses localized scale offsets and layout-id transitions to move the background layers at different speeds, creating a high-fidelity 'opening' 3D effect." },
            { question: "Can I adjust the parallax intensity?", answer: "Absolutely, you can customize the Framer Motion transition properties to adjust how dramatically the images scale and move during scrolling." },
            { question: "Is it mobile responsive?", answer: "The depth scales and typographic scales adapt for mobile, ensuring the objective clarity remains consistent on high-density mobile screens." }
        ],
    },
    {
        id: "coverflow",
        name: "Coverflow",
        description: "3D coverflow carousel with perspective transforms.",
        category: "Special Elements",
        installType: "cli",
        tags: ["carousel", "coverflow", "3d", "perspective"],
        previewUrl: "/SpecialElements/Carousels/Coverflow",
        code: {
            tsx: getCode("src/components/SpecialElements/Carousels/tsx/CarouselCoverflow.tsx"),
            jsx: getCode("src/components/SpecialElements/Carousels/jsx/CarouselCoverflow.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Carousels/Coverflow/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[url1, url2, url3]", description: "Array of image URLs to display in the carousel." },
            { name: "defaultActive", type: "number", default: "1", description: "Initial active slide index." },
            { name: "backgroundColor", type: "string", default: "transparent", description: "Background color of the component (hex, rgb, or hsl)." },
            { name: "imageBorderColor", type: "string", default: "#ffffff", description: "Border color of carousel images (hex, rgb, or hsl)." },
            { name: "imageBorderWidth", type: "number", default: "4", description: "Border width of carousel images in pixels." },
            { name: "imageShadowColor", type: "string", default: "rgba(0,0,0,0.5)", description: "Shadow color of carousel images (hex, rgb, or hsl)." },
            { name: "activeScale", type: "number", default: "1", description: "Scale of the active slide." },
            { name: "inactiveScale", type: "number", default: "0.8", description: "Scale of inactive slides." },
            { name: "activeOpacity", type: "number", default: "1", description: "Opacity of the active slide (0-1)." },
            { name: "inactiveOpacity", type: "number", default: "0.5", description: "Opacity of inactive slides (0-1)." },
            { name: "rotationAngle", type: "number", default: "45", description: "Rotation angle for inactive slides in degrees." },
            { name: "offsetDistance", type: "number", default: "40", description: "Horizontal offset distance between slides in pixels." },
            { name: "height", type: "string", default: "12rem", description: "Height of carousel images (CSS value)." },
            { name: "width", type: "string", default: "12rem", description: "Width of carousel images (CSS value)." },
            { name: "borderRadius", type: "string", default: "0.75rem", description: "Border radius of carousel images (CSS value)." },
        ],
        whenToUse: "Ideal for edges fashion editorials, technical archives, and Next.js platforms that want a dramatic 'Coverflow' aesthetic. Use this layout to communicate structural scale and digital craft through 3D perspective transforms.",
        bestPractices: "Maintain consistent spacing within your design system by using it for focal content blocks. Follow React best practices by pairing it with bold, professional typography. Optimize for performance by managed the perspective renders.",
        whyMatters: "Coverflow-based layouts communicate power, mystery, and structural honesty. This production-ready UI template helpsคุณ build an interface that feels authoritative and solid, breaking the 'standard' flat list rules.",
        faqs: [
            { question: "Why 'Coverflow'?", answer: "The component features localized 3D rotation and scaling that allow users to 'flip' through content, simulating the raw structural honesty of physical media archives." },
            { question: "Can I adjust colors?", answer: "Yes, both the primary 'imageBorderColor' and background colors are fully configurable allowedคุณ to create 'Industrial' or 'Cyber' agency effects." },
            { question: "Is it mobile responsive?", answer: "The 3D spans and rotation angles adapt dynamically for mobile, Ensuring the bold narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "panorama",
        name: "Panorama",
        description: "Draggable panorama carousel with smooth scrolling.",
        category: "Special Elements",
        installType: "cli",
        tags: ["carousel", "panorama", "drag", "scroll"],
        previewUrl: "/SpecialElements/Carousels/Panorama",
        code: {
            tsx: getCode("src/components/SpecialElements/Carousels/tsx/CarouselPanorama.tsx"),
            jsx: getCode("src/components/SpecialElements/Carousels/jsx/CarouselPanorama.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Carousels/Panorama/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[url1, url2, ...]", description: "Array of image URLs to display in the carousel." },
            { name: "backgroundColor", type: "string", default: "transparent", description: "Background color of the component (hex, rgb, or hsl)." },
            { name: "borderRadius", type: "string", default: "1rem", description: "Border radius of the container (CSS value)." },
            { name: "imageBorderRadius", type: "string", default: "0.75rem", description: "Border radius of carousel images (CSS value)." },
            { name: "imageHeight", type: "string", default: "16rem", description: "Height of carousel images (CSS value)." },
            { name: "imageWidth", type: "string", default: "12rem", description: "Width of carousel images (CSS value)." },
            { name: "imageGap", type: "string", default: "1rem", description: "Gap between carousel images (CSS value)." },
            { name: "dragConstraints", type: "{left: number, right: number}", default: "{left: -500, right: 0}", description: "Drag constraints for horizontal scrolling." },
            { name: "cursorGrab", type: "string", default: "grab", description: "Cursor style when hovering (CSS cursor value)." },
            { name: "cursorGrabbing", type: "string", default: "grabbing", description: "Cursor style when dragging (CSS cursor value)." },
        ],
        whenToUse: "Excellent for wide-format photography, technical archives, and Next.js applications that want an organic 'Panorama' aesthetic. Use this layout to communicate power and digital intelligence through smooth, draggable image streams.",
        bestPractices: "Maintain scalable component architecture by pairing this with sharp, technical typography. Follow React best practices by using Framer Motion for the drag physics. Optimize for performance by managed the image gap renders.",
        whyMatters: "Panorama-based layouts communicate technical authority, sophistication, and digital craft. This production-ready UI template helpsคุณ build an interface that feels organized and high-end, adding a unique 'Studio' signatures to your brand.",
        faqs: [
            { question: "How does drag work?", answer: "The component features localized drag-constraints and spring physics to allow users to smoothly 'scrub' through the project archive with high-fidelity scrubbing interactions." },
            { question: "Are colors dynamic?", answer: "Absolutely, you can adjust both the primary `backgroundColor` and specific borders to match your brand's specific high-intensity palette." },
            { question: "Is it mobile responsive?", answer: "The image widths and typographic scales adapt for mobile, ensuring the bold narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "infinite",
        name: "Infinite Loop",
        description: "Seamless infinite scrolling carousel.",
        category: "Special Elements",
        installType: "cli",
        tags: ["carousel", "infinite", "loop", "scroll"],
        previewUrl: "/SpecialElements/Carousels/Infinite",
        code: {
            tsx: getCode("src/components/SpecialElements/Carousels/tsx/CarouselInfinite.tsx"),
            jsx: getCode("src/components/SpecialElements/Carousels/jsx/CarouselInfinite.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Carousels/Infinite/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[url1, url2, ...]", description: "Array of image URLs to display in the carousel." },
            { name: "backgroundColor", type: "string", default: "transparent", description: "Background color of the component (hex, rgb, or hsl)." },
            { name: "imageBgColor", type: "string", default: "#e4e4e7", description: "Background color of image containers (hex, rgb, or hsl)." },
            { name: "imageBorderRadius", type: "string", default: "0.5rem", description: "Border radius of carousel images (CSS value)." },
            { name: "imageOpacity", type: "number", default: "0.8", description: "Opacity of carousel images (0-1)." },
            { name: "imageGap", type: "string", default: "0.5rem", description: "Gap between carousel images (CSS value)." },
            { name: "imageHeight", type: "string", default: "6rem", description: "Height of carousel images (CSS value)." },
            { name: "imageWidth", type: "string", default: "8rem", description: "Width of carousel images (CSS value)." },
            { name: "animationDuration", type: "number", default: "20", description: "Duration of the infinite scroll animation in seconds." },
            { name: "maskGradient", type: "string", default: "linear-gradient(to_right,transparent,black_20%,black_80%,transparent)", description: "CSS mask gradient for fade edges." },
            { name: "maxWidth", type: "string", default: "32rem", description: "Maximum width of the carousel container (CSS value)." },
        ],
        whenToUse: "Ideal for logo walls, sponsor strips, and Next.js platforms that want an organic 'Infinite Loop' aesthetic. Use this layout for an engaging experience where content feels 'Moving' and 'Drafted' by physical film borders.",
        bestPractices: "Maintain scalable component architecture by keeping the scroll speed balanced. Follow React best practices by pairing this with bold, technical typography. Optimize for performance by managed the marquee intensity.",
        whyMatters: "Infinite-loop animations create a sense of digital 'Authenticity' and human touch. This production-ready UI template helpsคุณ build an interface that feels alive and 'Drafted', adding a unique signatures to your brand structure.",
        faqs: [
            { question: "How does 'Loop' work?", answer: "The component features seamless horizontal scrolling that clones items, allowedคุณ to create high-fidelity 'infinite' visual flows without visual breaks." },
            { question: "Can I adjust colors?", answer: "Yes, both the primary background and specific borders are fully configurable to match your brand's specific intensity." },
            { question: "Is it mobile responsive?", answer: "The horizontal flow and typographic scales adapt for mobile, ensuring the 'Draft' narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "story",
        name: "Vertical Story",
        description: "Vertical story-style carousel with progress indicators.",
        category: "Special Elements",
        installType: "cli",
        tags: ["carousel", "story", "vertical", "progress"],
        previewUrl: "/SpecialElements/Carousels/Story",
        code: {
            tsx: getCode("src/components/SpecialElements/Carousels/tsx/CarouselStory.tsx"),
            jsx: getCode("src/components/SpecialElements/Carousels/jsx/CarouselStory.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Carousels/Story/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[url1, url2, ...]", description: "Array of image URLs to display in the carousel." },
            { name: "labels", type: "{title?: string, subtitle?: string}[]", default: "[]", description: "Optional array of labels with title and subtitle for each slide." },
            { name: "backgroundColor", type: "string", default: "transparent", description: "Background color of the component (hex, rgb, or hsl)." },
            { name: "containerBgColor", type: "string", default: "#000000", description: "Background color of the carousel container (hex, rgb, or hsl)." },
            { name: "borderRadius", type: "string", default: "1rem", description: "Border radius of the container (CSS value)." },
            { name: "progressBarBgColor", type: "string", default: "rgba(255,255,255,0.3)", description: "Background color of progress bars (hex, rgb, or hsl)." },
            { name: "progressBarFillColor", type: "string", default: "#ffffff", description: "Fill color of progress bars (hex, rgb, or hsl)." },
            { name: "progressBarHeight", type: "string", default: "0.25rem", description: "Height of progress bars (CSS value)." },
            { name: "progressBarGap", type: "string", default: "0.25rem", description: "Gap between progress bars (CSS value)." },
            { name: "titleColor", type: "string", default: "#ffffff", description: "Color of slide titles (hex, rgb, or hsl)." },
            { name: "subtitleColor", type: "string", default: "rgba(255,255,255,0.7)", description: "Color of slide subtitles (hex, rgb, or hsl)." },
            { name: "overlayGradientFrom", type: "string", default: "rgba(0,0,0,0.8)", description: "Start color of the overlay gradient (hex, rgb, or hsl)." },
            { name: "overlayGradientTo", type: "string", default: "transparent", description: "End color of the overlay gradient (hex, rgb, or hsl)." },
            { name: "autoPlayInterval", type: "number", default: "100", description: "Auto-play interval in milliseconds." },
            { name: "progressIncrement", type: "number", default: "2", description: "Progress increment per interval (percentage)." },
            { name: "height", type: "string", default: "24rem", description: "Height of the carousel container (CSS value)." },
            { name: "width", type: "string", default: "16rem", description: "Width of the carousel container (CSS value)." },
        ],
        whenToUse: "Excellent for street-style blogs, edgy agencies, and Next.js applications that want an energetic 'Story' aesthetic. Use this layout for an engaging experience where content feels 'Mailed' and 'Drafted' by physical film borders.",
        bestPractices: "Follow React best practices by pairing this with bold, professional typography. Maintain consistent spacing within your design system by keeping the progress bars aligned. Optimize for performance by managed the image-scaling intensity.",
        whyMatters: "Social-media animations communicate energy, flow, and digital momentum. This production-ready UI template helpsคุณ build an interface that feels alive and energetic, adding a distinct 'Moving' signature to your brand.",
        faqs: [
            { question: "How does progress work?", answer: "The component features localized progress-bars spanning the top of the view, allowedคุณ to track the project narrative with high-fidelity visual timing cues." },
            { question: "Can I adjust timing?", answer: "Absolutely, you can adjust both the `autoPlayInterval` and the primary 'backgroundColor' (gradient or solid) to match your brand's specific high-intensity palette." },
            { question: "Is it mobile responsive?", answer: "The vertical flow and typographic scales adapt for mobile, ensuring the bold narrative remains impactful and structural on small screens." }
        ],
    }
];

