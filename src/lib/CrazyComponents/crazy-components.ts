import { getCode } from "../getCode";
import { Component } from "../types";

export const crazyComponents: Component[] = [
    {
        id: "404",
        name: "404 Page",
        description: "Interactive 404 error page featuring a cinematic canyon layout with multi-layered parallax cacti. Built with SVG and custom mouse-tracking logic for a deep 3D immersive feel.",
        category: "Crazy Components",
        tags: ["crazy-components", "404", "error", "page", "parallax", "cactus", "canyon", "svg", "animation"],
        previewUrl: "/CrazyComponents/404",
        code: {
            tsx: getCode("src/components/CrazyComponents/tsx/404.tsx"),
            jsx: getCode("src/components/CrazyComponents/jsx/404.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/CrazyComponents/404/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "errorCode", type: "string", default: "404", description: "The error code to display." },
        ],
        whenToUse: "Ideal for desert-themed projects, edgy brand sites, and Next.js applications that want a high-fidelity 'Empty State' experience. Now fully customizable via props to support 400, 404, or 500 error variations.",
        bestPractices: "Use high-contrast text for the error code to ensure readability against the dark canyon background. Pair with dramatic fonts to match the cinematic aesthetic. Optimize for performance by using efficient SVG transforms.",
        whyMatters: "A cinematic 404 page turns a negative user experience into a moment of brand delight. This production-ready UI template helps you build an interface that feels polished and thoughtful, improving user retention during navigation errors.",
        faqs: [
            { question: "How does the parallax work?", answer: "The component uses a custom 'useMouseParallax' hook that calculates normalized cursor coordinates to offset multiple SVG layers at varied depths." },
            { question: "Can I change the error code?", answer: "Absolutely. Use the `errorCode` prop to display any numeric error (e.g., '404', '500', '403') within the parallax canyon." },
            { question: "Is it mobile responsive?", answer: "Yes, the SVG uses 'preserveAspectRatio' to ensure the canyon and cacti layers stay centered and impactful across all screen widths." }
        ],
    },
    {
        id: "dig-hole",
        name: "Dig Hole",
        description: "Interactive video-based website with scroll-triggered reveals and smooth transitions. Features a cinematic video background with menu items that reveal content on scroll.",
        category: "Crazy Components",
        tags: ["crazy-components", "video", "scroll", "reveal", "interactive", "cinematic"],
        previewUrl: "/CrazyComponents/DigHole",
        code: {
            tsx: getCode("src/components/CrazyComponents/tsx/DigHole.tsx"),
            jsx: getCode("src/components/CrazyComponents/jsx/DigHole.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/CrazyComponents/DigHole/page.tsx") },
        dependencies: ["next", "react"],
        props: [
            { name: "heroVideo", type: "string", default: "https://www.pexels.com/download/video/857131/", description: "The main hero background video." },
            { name: "storyVideo", type: "string", default: "https://www.pexels.com/download/video/4434242/", description: "The video for the story reveal section." },
            { name: "accentColor", type: "string", default: "#bc9cff", description: "The primary accent color for logos and UI elements." },
            { name: "menuItems", type: "VideoData[]", default: "undefined", description: "Custom menu items with title, label, and video source." },
        ],
        inspiredBy: {
            name: "animmaster_studio",
            url: "https://www.instagram.com/animmaster_studio/"
        },
        whenToUse: "Perfect for cinematic agency landing pages, deep-scroll portfolios, and Next.js sites that want a mysterious 'Dig Hole' aesthetic. Now supports custom hero/story videos and accent colors via props.",
        bestPractices: "Use high-fidelity video assets for the `heroVideo` and `storyVideo` props. Pair the `accentColor` with your brand's primary palette for a cohesive experience. Optimize for performance by using efficient CSS mask-image transforms.",
        whyMatters: "Scroll-triggered video reveals create a sense of physical 'Digging' and exploration. This production-ready UI template helps you build an interface that feels architectural and cinematic, leaving a lasting impression on tech-savvy clients.",
        faqs: [
            { question: "How does the 'Hole' work?", answer: "The component uses localized CSS masks that 'expand' based on scroll depth, revealing the cinematic video background underneath the menu layer." },
            { question: "Can I use my own videos?", answer: "Yes, use the `heroVideo` and `storyVideo` props to pass any direct video URL. It is optimized to remain smooth while the reveal animations triggers across the scroll-axis." },
            { question: "How do I customize the menu?", answer: "The `menuItems` prop allows you to pass an array of video data objects, each with its own title and reveal video for a fully custom navigation experience." }
        ],
    },
    {
        id: "image-slider",
        name: "Image Slider",
        description: "Advanced WebGL-powered image slider with shader-based transitions. Features smooth displacement effects, Three.js rendering, and GSAP animations for seamless image transitions.",
        category: "Crazy Components",
        tags: ["crazy-components", "slider", "webgl", "three", "shader", "transition", "gsap"],
        previewUrl: "/CrazyComponents/ImageSlider",
        code: {
            tsx: getCode("src/components/CrazyComponents/tsx/ImageSlider.tsx"),
            jsx: getCode("src/components/CrazyComponents/jsx/ImageSlider.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/CrazyComponents/ImageSlider/page.tsx") },
        dependencies: ["three", "gsap"],
        props: [
            { name: "slides", type: "SlideItem[]", default: "DEFAULT_SLIDES", description: "Array of images and titles for the slider." },
            { name: "autoPlay", type: "boolean", default: "true", description: "Enable or disable automatic slide transitions." },
            { name: "interval", type: "number", default: "5000", description: "Time in milliseconds between slides." },
            { name: "accentColor", type: "string", default: "#ef4444", description: "The color of the status indicator and border." },
            { name: "showPagination", type: "boolean", default: "true", description: "Show or hide the slide indicators." },
        ],
        inspiredBy: {
            name: "animmaster_studio",
            url: "https://www.instagram.com/animmaster_studio/"
        },
        whenToUse: "Ideal for high-end fashion portfolios, 3D labs, and Next.js sites that want an interactive 'WebGL' aesthetic. Now fully controllable with props for autoplay, intervals, and accent colors.",
        bestPractices: "Use high-contrast, bold imagery for the `slides` prop. Adjust the `interval` to balance between viewing time and engagement. Optimize for performance by managing the Three.js renderer lifecycle.",
        whyMatters: "WebGL-powered transitions create a sense of digital 'Fluidity' and craft. This production-ready UI template helps you build an interface that feels expensive and innovative, reflecting a brand identity rooted in technical excellence.",
        faqs: [
            { question: "How were the transitions made?", answer: "The component uses Three.js displacement shaders that 'warp' the image texture during transitions for a high-fidelity liquid feel." },
            { question: "Is the autoplay configurable?", answer: "Yes, use the `autoPlay` (boolean) and `interval` (number) props to control the automatic progression and timing of slides." },
            { question: "Can I show/hide indicators?", answer: "The `showPagination` prop allows you to toggle the slide indicators on or off depending on your UI's minimalism requirements." }
        ],
    },
    {
        id: "flower-animation",
        name: "Flower Animation",
        description: "Beautiful CSS-based flower animation with multiple blooming flowers, glowing lights, and smooth animations. Features intricate CSS animations creating a mesmerizing night garden effect.",
        category: "Crazy Components",
        tags: ["crazy-components", "flower", "animation", "css", "bloom", "glow"],
        previewUrl: "/CrazyComponents/FlowerAnimation",
        code: {
            tsx: getCode("src/components/CrazyComponents/tsx/FlowerAnimation.tsx"),
            jsx: getCode("src/components/CrazyComponents/jsx/FlowerAnimation.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/CrazyComponents/FlowerAnimation/page.tsx") },
        dependencies: ["next", "react"],
        props: [
            { name: "flowerColor", type: "string", default: "#e6f331", description: "The color of the flower petals." },
            { name: "nightColor", type: "string", default: "#010113", description: "The background color of the night sky." },
            { name: "scale", type: "number", default: "0.9", description: "Overall scale of the flower garden." },
        ],
        inspiredBy: {
            name: "animmaster_studio",
            url: "https://www.instagram.com/animmaster_studio/"
        },
        whenToUse: "Perfect for wellness apps, creative portfolios, and Next.js landing pages that want a mesmerizing 'Night Garden' aesthetic. Now includes props for custom flower colors, backgrounds, and overall scaling.",
        bestPractices: "Use the `scale` prop to adjust the garden density for different screen sizes. Stagger the `flowerColor` and `nightColor` to create specific atmospheric moods. Optimize for performance by managing glowing layers on mobile.",
        whyMatters: "Organic bloom animations communicate growth, tranquility, and digital craft. This production-ready UI template helps you build an interface that feels alive and 'breathing', adding a unique atmospheric signature to your project.",
        faqs: [
            { question: "Is it pure CSS?", answer: "The core bloom logic is built with complex CSS animations and SVG gradients, ensuring high performance without heavy JS overhead." },
            { question: "Can I change the colors via props?", answer: "Yes, utilize the `flowerColor` and `nightColor` props to dynamically update the entire theme of the garden without touching the CSS." },
            { question: "Does it scale easily?", answer: "Absolutely. The `scale` prop (default 0.9) transforms the entire garden container, making it easy to fit into smaller hero sections or full-page backgrounds." }
        ],
    },
    {
        id: "image-trail-effect",
        name: "Image Trail Effect",
        description: "Interactive mouse trail effect that follows cursor movement with image elements. Features smooth lerp animations, dynamic z-index management, and GSAP-powered transitions.",
        category: "Crazy Components",
        tags: ["crazy-components", "trail", "mouse", "interactive", "animation", "gsap"],
        previewUrl: "/CrazyComponents/ImageTrailEffect",
        code: {
            tsx: getCode("src/components/CrazyComponents/tsx/ImageTrailEffect.tsx"),
            jsx: getCode("src/components/CrazyComponents/jsx/ImageTrailEffect.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/CrazyComponents/ImageTrailEffect/page.tsx") },
        dependencies: ["gsap"],
        props: [
            { name: "images", type: "string[]", default: "unsplashImages", description: "Array of image URLs for the trail." },
            { name: "trailDistance", type: "number", default: "100", description: "The distance in pixels between trail items." },
            { name: "className", type: "string", default: "undefined", description: "Additional CSS classes for styling." },
        ],
        whenToUse: "Ideal for creative studios, experimental art projects, and Next.js portfolios that want an interactive 'Mouse Trail' aesthetic. Now supports custom image sets and adjustable trail distances via props.",
        bestPractices: "Maintain consistent design by passing your own work through the `images` prop. Use the `trailDistance` prop to control how 'thick' or 'sparse' the mouse trail feels. Optimize for performance by using efficient GSAP lerp animations.",
        whyMatters: "Mouse-triggered image trails create a sense of direct engagement and playfulness. This production-ready UI template helps you build an interface that feels responsive and unique, turning a standard cursor into a tool for visual discovery.",
        faqs: [
            { question: "How were the images customized?", answer: "Use the `images` prop to pass an array of your own URLs. The component will cycle through them as the user moves their cursor." },
            { question: "What does trailDistance do?", answer: "The `trailDistance` prop (default 100) sets the pixel delta required to trigger a new image spawn, allowing you to control the trail's density." },
            { question: "Can I add custom styling?", answer: "Yes, use the `className` prop to apply additional CSS for positioning, borders, or specific z-index overrides within your layout." }
        ],
    },
    {
        id: "liquid-reveal",
        name: "Liquid Reveal",
        description: "WebGL-based liquid reveal effect with fluid simulation shaders. Features advanced advection and pressure calculations creating realistic liquid flow animations.",
        category: "Crazy Components",
        tags: ["crazy-components", "liquid", "reveal", "webgl", "shader", "fluid", "simulation"],
        previewUrl: "/CrazyComponents/LiquidReveal",
        code: {
            tsx: getCode("src/components/CrazyComponents/tsx/LiquidReveal.tsx"),
            jsx: getCode("src/components/CrazyComponents/jsx/LiquidReveal.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/CrazyComponents/LiquidReveal/page.tsx") },
        dependencies: ["next", "react"],
        props: [],
        inspiredBy: {
            name: "animmaster_studio",
            url: "https://www.instagram.com/animmaster_studio/"
        },
        whenToUse: "Excellent for tech labs, high-fidelity landing pages, and Next.js applications that want a fluid 'Liquid Reveal' aesthetic. Use this reveal for an immersive experience with shader-based pressure and fluid flow simulations.",
        bestPractices: "Follow React best practices by pairing this with dark-themed hero backgrounds. Maintain scalable component architecture by keeping the fluid intensity balanced. Optimize for performance by managed the WebGL pressure-buffer renders.",
        whyMatters: "Liquid reveal shaders communicate technical complexity and digital power. This production-ready UI template helpsคุณ build an interface that feels advanced and high-end, adding a distinct 'Fluid' signature to your brand.",
        faqs: [
            { question: "Is the fluid simulation real?", answer: "Yes, the component uses localized WebGL shaders to calculate advection and pressure in real-time, creating realistic fluid curls and flow paths." },
            { question: "Can I change the fluid color?", answer: "The liquid hue is managed via the shader's gradient variables, allowing you to create 'Toxic Neon', 'Liquid Metal', or 'Ether' effects." },
            { question: "Does it work on phone?", answer: "The shader is optimized for mobile GPUs, but we recommend lowering the simulation resolution for ultra-high-density mobile screens to maintain fluid motion." }
        ],
    },
    {
        id: "prism",
        name: "Prism",
        description: "WebGL shader-based prism effect with ray marching and distance field calculations. Features procedural 3D geometry, interactive mouse controls, and advanced lighting effects.",
        category: "Crazy Components",
        tags: ["crazy-components", "prism", "webgl", "shader", "raymarching", "3d", "procedural"],
        previewUrl: "/CrazyComponents/Prism",
        code: {
            tsx: getCode("src/components/CrazyComponents/tsx/Prism.tsx"),
            jsx: getCode("src/components/CrazyComponents/jsx/Prism.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/CrazyComponents/Prism/page.tsx") },
        dependencies: ["next", "react"],
        props: [],
        inspiredBy: {
            name: "animmaster_studio",
            url: "https://www.instagram.com/animmaster_studio/"
        },
        whenToUse: "Ideal for deep-tech SaaS, scientific platforms, and Next.js landing pages that want a prismatic 'Ray-Marching' aesthetic. Use this 3D component for an immersive experience with procedural geometry and interactive lighting refraction.",
        bestPractices: "Maintain scalable component architecture by keeping the prism at focal points. Follow React best practices by pairing this with sharp, technical typography. Optimize for performance by managed the ray-march iteration depth.",
        whyMatters: "Prismatic ray-marching aesthetics create a sense of spatial power and innovation. This production-ready UI template helpsคุณ build an interface that feels advanced and immersive, adding a distinct '3D' signature to your project.",
        faqs: [
            { question: "How does 'Ray-Marching' work?", answer: "Unlike traditional mesh 3D, this component calculates distance fields per-pixel to render complex, perfect geometric refractions in a single shader pass." },
            { question: "Can I adjust the lighting?", answer: "Yes, the ambient and specular light properties can be customized in the shader uniforms to match your project's environmental lighting." },
            { question: "IS it heavy?", answer: "While conceptually complex, ray-marching is highly efficient on modern GPUs, allowing for high-fidelity 3D effects without loading large .obj or .gltf assets." }
        ],
    },
    {
        id: "russian-website",
        name: "Russian Website",
        description: "Cinematic scroll-triggered website with Russian terminal-style boot sequence and sliced image reveals. Features GSAP ScrollTrigger animations and dramatic text reveals.",
        category: "Crazy Components",
        tags: ["crazy-components", "scroll", "terminal", "russian", "gsap", "scrolltrigger", "cinematic"],
        previewUrl: "/CrazyComponents/RussianWebsite",
        code: {
            tsx: getCode("src/components/CrazyComponents/tsx/RussianWebsite.tsx"),
            jsx: getCode("src/components/CrazyComponents/jsx/RussianWebsite.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/CrazyComponents/RussianWebsite/page.tsx") },
        dependencies: ["gsap"],
        props: [
            { name: "bootSequence", type: "string[]", default: "BOOT_SEQUENCE", description: "Array of strings for the terminal preloader typing animation." },
            { name: "images", type: "ImageItem[]", default: "IMAGES", description: "Array of images for the sliced image gallery." },
            { name: "heroTitle", type: "React.ReactNode", default: "ПУТЬ ВОИНА", description: "Main hero title text or element." },
            { name: "heroSubtitle", type: "string", default: "Scroll to Initialize", description: "Subtitle above the main hero text." },
            { name: "aboutText", type: "string", default: "ABOUT_TEXT", description: "Text for the about/mission statement section." },
            { name: "features", type: "FeatureItem[]", default: "FEATURES", description: "Array of feature objects containing title and description." },
            { name: "footerTitle", type: "string", default: "КОНЕЦ СВЯЗИ", description: "Large title used in the footer." },
            { name: "footerSubtitle", type: "string", default: "SYSTEM SHUTDOWN", description: "Subtitle used in the footer." }
        ],
        whenToUse: "Perfect for edgy brands, experimental studios, and Next.js portfolios that want a dramatic 'Russian Site' aesthetic. Use this full-page template for a high-intensity experience with terminal boot sequences and sliced-image reveal animations.",
        bestPractices: "Maintain consistent spacing within your design system by using it for aggressive brand storytelling. Follow React best practices by pairing it with bold, technical typography. Optimize for performance by using GSAP ScrollTrigger for the slice offsets.",
        whyMatters: "Dramatic scroll-sequences communicate power, mystery, and structural honesty. This production-ready UI template helpsคุณ build an interface that feels authoritative and solid, breaking the 'standard' web layout rules.",
        faqs: [
            { question: "What is the 'Boot Sequence'?", answer: "The component features an animated terminal CLI-style intro overlay that simulates a technical system startup before revealing the branding." },
            { question: "How were the slices made?", answer: "The reveal uses alternating CSS clip-paths and horizontal offsets driven by ScrollTrigger to 'deconstruct' and re-assemble images as you scroll." },
            { question: "Is the text editable?", answer: "Yes, all data readouts and branding labels are fully configurable to match your project's specific terminology and technical theme." }
        ],
    },
    {
        id: "sketchy-line",
        name: "Sketchy Line",
        description: "Harmonic stream animation creating flowing cable-like lines that follow mouse movement. Features physics-based strand simulation with smooth interpolation and trail effects.",
        category: "Crazy Components",
        tags: ["crazy-components", "line", "sketchy", "animation", "mouse", "trail", "canvas"],
        previewUrl: "/CrazyComponents/SketchyLine",
        code: {
            tsx: getCode("src/components/CrazyComponents/tsx/SketchyLine.tsx"),
            jsx: getCode("src/components/CrazyComponents/jsx/SketchyLine.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/CrazyComponents/SketchyLine/page.tsx") },
        dependencies: ["next", "react"],
        props: [],
        whenToUse: "Excellent for creative agencies, high-end portfolios, and Next.js applications that want an organic 'Sketchy Line' aesthetic. Use this canvas animation for an Engaging experience with physics-based strand simulations following the cursor.",
        bestPractices: "Maintain scalable component architecture by keeping line colors consistent with your primary palette. Follow React best practices by managed the canvas-buffer lifecycle. Optimize for performance by using efficient physics-lerp calculations.",
        whyMatters: "Physics-based strand animations create a sense of digital 'Hand-Craft' and flow. This production-ready UI template helpsคุณ build an interface that feels alive and 'Tethered' to the user's focus, improving interaction affinity.",
        faqs: [
            { question: "How does 'Sketchy Line' work?", answer: "The component simulates multiple harmonic oscillators (strands) that are 'pulled' by cursor gravity and 'recoil' with varied elasticity for a natural cable feel." },
            { question: "Can I change the thickness?", answer: "Yes, the stroke weight and harmonic frequency can be tuned to create either fine charcoal-like lines or thick, neon-rope effects." },
            { question: "Does it work with touch?", answer: "Yes, the strand physics respond to touch-move events, allowing mobile users to 'drag' the organic lines across the screen with their fingers." }
        ],
    },
    {
        id: "slider-page",
        name: "Slider Page",
        description: "Advanced WebGL image slider with multiple shader effects (glass, frost, ripple, plasma, timeshift). Features Tweakpane controls, auto-slide functionality, and smooth transitions with GSAP.",
        category: "Crazy Components",
        tags: ["crazy-components", "slider", "webgl", "three", "shader", "effects", "tweakpane", "gsap"],
        previewUrl: "/CrazyComponents/SliderPage",
        code: {
            tsx: getCode("src/components/CrazyComponents/tsx/SliderPage.tsx"),
            jsx: getCode("src/components/CrazyComponents/jsx/SliderPage.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/CrazyComponents/SliderPage/page.tsx") },
        dependencies: ["three", "gsap", "tweakpane"],
        props: [],
        inspiredBy: {
            name: "animmaster_studio",
            url: "https://www.instagram.com/animmaster_studio/"
        },
        whenToUse: "Ideal for selective agencies, award-winning portfolios, and Next.js platforms that want a premium 'Slider Page' aesthetic. Use this WebGL template for an immersive experience with glass, frost, and plasma shader transitions.",
        bestPractices: "Maintain consistent spacing within your design system by using high-resolution, high-contrast imagery. Follow React best practices by pairing this with bold typography. Optimize for performance by managed the Tweakpane-debug visibility.",
        whyMatters: "Advanced shader transitions communicate digital excellence and high-end craft. This production-ready UI template helpsคุณ build an interface that feels curated and professional, leaving a lasting visual impression on high-value clients.",
        faqs: [
            { question: "What are the effects?", answer: "The component includes localized shaders for 'Glass' (blur), 'Frost' (crystalline), 'Plasma' (heat-map), and 'Time-Shift' (pixel delay) transitions." },
            { question: "What is 'Tweakpane' for?", answer: "It allows you or your clients to fine-tune the shader uniforms (intensity, blur, speed) in real-time to find the 'Perfect' atmospheric look for your brand." },
            { question: "Can I use external images?", answer: "Absolutely, it's designed as a production-ready WebGL container that accepts any high-fidelity image textures for the slide sequence." }
        ],
    },
    {
        id: "neon-ribbon",
        name: "Neon Ribbon",
        description: "Neon-colored ribbon cursor trail effect that follows mouse movement. Features dynamic color gradients, smooth interpolation, and configurable ribbon length and spread.",
        category: "Crazy Components",
        tags: ["crazy-components", "neon", "ribbon", "cursor", "trail", "mouse", "canvas"],
        previewUrl: "/CrazyComponents/NeonRibbon",
        code: {
            tsx: getCode("src/components/CrazyComponents/tsx/NeonRibbon.tsx"),
            jsx: getCode("src/components/CrazyComponents/jsx/NeonRibbon.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/CrazyComponents/NeonRibbon/page.tsx") },
        dependencies: ["next", "react"],
        props: [],
        inspiredBy: {
            name: "animmaster_studio",
            url: "https://www.instagram.com/animmaster_studio/"
        },
        whenToUse: "Perfect for futuristic brands, high-tech SaaS, and Next.js applications that want a vibrant 'Neon Ribbon' aesthetic. Use this canvas animation for an immersive experience with dynamic color gradients and smooth cursor trails.",
        bestPractices: "Maintain scalable component architecture by keeping ribbon colors consistent with your primary tech-palette. Follow React best practices by using Canvas for high-performance ribbon renders. Optimize for performance by managed the trail-history length.",
        whyMatters: "Neon ribbon aesthetics communicate energy, flow, and digital momentum. This production-ready UI template helpsคุณ build an interface that feels alive and energetic, adding a distinct 'Neon' signature to your brand.",
        faqs: [
            { question: "How does the 'Ribbon' work?", answer: "The component records a localized history of cursor coordinates and renders a textured, gradient-filled ribbon that 'tails' behind with physics-based interpolation." },
            { question: "Can I change the neon colors?", answer: "Yes, the primary color-stop array can be customized to create 'Electric Blue', 'Cyber-Pink', or 'Toxic Green' ribbon flows." },
            { question: "Is it mobile responsive?", answer: "The ribbon adapts to touch-move events, though it's most impactful as a mouse-driven cursor trail for high-fidelity desktop browsing experiences." }
        ],
    },
    {
        id: "grid-distortion",
        name: "Grid Distortion",
        description: "WebGL-based grid distortion effect that warps images based on mouse interaction. Features Three.js shader materials, configurable grid size, and smooth relaxation effects.",
        category: "Crazy Components",
        tags: ["crazy-components", "grid", "distortion", "webgl", "three", "shader", "interactive"],
        previewUrl: "/CrazyComponents/GridDistortion",
        code: {
            tsx: getCode("src/components/CrazyComponents/tsx/GridDistortion.tsx"),
            jsx: getCode("src/components/CrazyComponents/jsx/GridDistortion.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/CrazyComponents/GridDistortion/page.tsx") },
        dependencies: ["three"],
        props: [
            { name: "grid", type: "number", default: "20", description: "Grid size for distortion effect." },
            { name: "mouse", type: "number", default: "0.3", description: "Mouse influence strength." },
            { name: "strength", type: "number", default: "0.15", description: "Distortion strength multiplier." },
            { name: "relaxation", type: "number", default: "0.1", description: "Relaxation speed for smooth transitions." },
            { name: "imageSrc", type: "string", default: "undefined", description: "Source URL of the image to distort." },
            { name: "className", type: "string", default: "undefined", description: "Additional CSS classes for custom styling." },
        ],
        whenToUse: "Ideal for creative studios, experimental art projects, and Next.js portfolios that want an interactive 'Grid Distortion' aesthetic. Use this shader effect for an immersive experience where images warp and 'melt' based on cursor movement.",
        bestPractices: "Follow React best practices by pairing this with high-contrast, bold imagery. Maintain consistent spacing within your design system by keeping the grid resolution balanced. Optimize for performance by managed the Three.js relaxation cycle.",
        whyMatters: "Interactive grid distortion creates a sense of digital 'Fluidity' and spatial power. This production-ready UI template helpsคุณ build an interface that feels responsive and high-end, adding a unique architectural signature to your brand imagery.",
        faqs: [
            { question: "What is 'Relaxation'?", answer: "The `relaxation` prop (0.1) controls how fast the grid 'recoils' back to its original state after the cursor ceases movement, ensuring smooth motion." },
            { question: "Can I adjust the grid density?", answer: "Yes, the `grid` prop (default 20) allows you to control how 'chunky' or 'fluid' the distortion feels across the image surface." },
            { question: "How heavy is the shader?", answer: "The component uses localized vertex shaders that are optimized for high performance, ensuring 60FPS even with complex interactive warping on modern GPUs." }
        ],
    },
];

