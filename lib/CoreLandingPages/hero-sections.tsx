import { Component } from "../types";
import { getCode } from "../getCode";

// All hero section components from the library
// Total: 11 components

export const heroSectionComponents: Component[] = [
  {
    id: "cartoonish",
    name: "Cartoonish",
    description: "Playful cartoon-style hero section with fun animations and vibrant colors.",
    category: "Core Landing Pages",
    tags: ["cartoonish", "playful", "fun", "vibrant"],
    previewUrl: "/CoreLandingPages/HeroSections/Cartoonish",
    code: {
      tsx: getCode("src/components/CoreLandingPages/HeroSections/tsx/Cartoonish.tsx"),
      jsx: getCode("src/components/CoreLandingPages/HeroSections/jsx/Cartoonish.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/HeroSections/Cartoonish/page.tsx"),
    },
    dependencies: ["lucide-react", "gsap"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#ff006e",
        description: "Primary playful color for main elements.",
      },
      {
        name: "secondaryColor",
        type: "string",
        default: "#8338ec",
        description: "Secondary vibrant color for accents.",
      },
      {
        name: "bounceIntensity",
        type: "number",
        default: "1",
        description: "Intensity of bounce animations (0.5-2).",
      },
      {
        name: "enableAnimations",
        type: "boolean",
        default: "true",
        description: "Enable fun cartoon animations.",
      },
    ],
    whenToUse: "Ideal for kid-friendly apps, toy brands, and Next.js startups that want a playful, vibrant aesthetic. Use this React component for a high-impact hero section with colorful 'bouncing' elements and friendly typography.",
    bestPractices: "Maintain consistent spacing within your design system by pairing this with rounded corners and high-contrast primary colors. Follow React best practices by managed the GSAP animation lifecycles. Optimize for performance by using efficient SVG transforms.",
    whyMatters: "Cartoonish design breaks the formality of digital interfaces, creating a sense of joy and approachability. This production-ready UI component helpsคุณ build an interface that feels energetic and welcoming, improving user affinity with your brand.",
    faqs: [
      { question: "Can I adjust the bounce?", answer: "Yes, the `bounceIntensity` prop allows you to scale the physical 'springiness' of all animated elements simultaneously." },
      { question: "Is it mobile friendly?", answer: "The layout automatically adjusts for smaller screens, ensuring the vibrant characters and text stay centered and legible on touch devices." },
      { question: "Does it use Lottie?", answer: "No, the component uses lightweight GSAP animations for faster load times while maintaining high-fidelity cartoon motion." }
    ],
  },
  {
    id: "draggable",
    name: "Draggable",
    description: "Interactive hero section with draggable elements and smooth physics-based interactions.",
    category: "Core Landing Pages",
    tags: ["draggable", "interactive", "physics", "smooth"],
    previewUrl: "/CoreLandingPages/HeroSections/Draggable",
    code: {
      tsx: getCode("src/components/CoreLandingPages/HeroSections/tsx/Draggable.tsx"),
      jsx: getCode("src/components/CoreLandingPages/HeroSections/jsx/Draggable.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/HeroSections/Draggable/page.tsx"),
    },
    dependencies: ["framer-motion", "lucide-react"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#3b82f6",
        description: "Primary color for draggable elements.",
      },
      {
        name: "dragStiffness",
        type: "number",
        default: "300",
        description: "Stiffness of drag physics (100-500).",
      },
      {
        name: "dragDamping",
        type: "number",
        default: "30",
        description: "Damping of drag physics (10-50).",
      },
      {
        name: "enableConstraints",
        type: "boolean",
        default: "true",
        description: "Enable drag constraints and boundaries.",
      },
    ],
    whenToUse: "Excellent for design tools, creative agencies, and Next.js applications that want an immersive, interactive feel. Use this React component for a hero section where users can physically 'play' with the page elements through smooth, physics-based dragging.",
    bestPractices: "Maintain scalable component architecture by keeping draggable elements within clear boundaries. Follow React best practices by pairing this with Framer Motion. Optimize for performance by managed the drag event listeners.",
    whyMatters: "Draggable interactions increase user sessions by encouraging active exploration. This production-ready component helpsคุณ build an interface that feels deep and tangible, turning a static landing page into an interactive physical space.",
    faqs: [
      { question: "How does the physics work?", answer: "It uses Framer Motion's internal physics engine to handle momentum, friction, and spring-back effects." },
      { question: "Can I lock the elements?", answer: "Yes, setting `enableConstraints` to `true` (default) ensures that elements cannot be dragged off the screen." },
      { question: "Is it good for accessibility?", answer: "All draggable elements include standard pointer event listeners and can be easily adapted for voice or keyboard-driven 'drags'." }
    ],
  },
  {
    id: "glass-operating-system",
    name: "Glass Operating System",
    description: "Glassmorphism hero section with frosted glass effects and modern OS-inspired design.",
    category: "Core Landing Pages",
    tags: ["glass", "glassmorphism", "frosted", "modern"],
    previewUrl: "/CoreLandingPages/HeroSections/GlassOperatingSystem",
    code: {
      tsx: getCode("src/components/CoreLandingPages/HeroSections/tsx/GlassOperatingSystem.tsx"),
      jsx: getCode("src/components/CoreLandingPages/HeroSections/jsx/GlassOperatingSystem.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/HeroSections/GlassOperatingSystem/page.tsx"),
    },
    dependencies: ["framer-motion", "lucide-react"],
    props: [
      {
        name: "glassBlur",
        type: "string",
        default: "20px",
        description: "Blur intensity for glass effect.",
      },
      {
        name: "glassOpacity",
        type: "number",
        default: "0.3",
        description: "Opacity of glass elements (0-1).",
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "#0a0a0a",
        description: "Background color behind glass.",
      },
      {
        name: "borderColor",
        type: "string",
        default: "rgba(255,255,255,0.1)",
        description: "Border color for glass elements.",
      },
    ],
    whenToUse: "Ideal for operating system dashboards, high-fidelity SaaS, and Next.js platforms that want a sophisticated 'Frosted' aesthetic. Use this React component for a glassmorphic hero section with layered window effects and soft background glows.",
    bestPractices: "Maintain consistent spacing within your design system by using it on dark or textured backgrounds to maximize the backdrop-blur effect. Follow React best practices by using light, airy typography. Optimize for performance by managed the `backdrop-filter` impact.",
    whyMatters: "Glassmorphism creates a sense of depth and technical sophistication. This production-ready UI component helpsคุณ build an interface that feels lightweight and premium, mimicking the look of modern desktop environments.",
    faqs: [
      { question: "How is the glass effect created?", answer: "It uses semi-transparent backgrounds and `backdrop-filter: blur()` to simulate physical frosted glass panes." },
      { question: "Can I change the blur intensity?", answer: "Yes, the `glassBlur` prop allows you to control the exact amount of diffusion applied to the background through the glass window." },
      { question: "Is it mobile responsive?", answer: "The layout gracefully collapses into a stacked mobile 'window' view, maintaining its glass effects and accessibility on smaller screens." }
    ],
  },
  {
    id: "holographic-core",
    name: "Holographic Core",
    description: "Futuristic holographic hero section with sci-fi aesthetics and glowing effects.",
    category: "Core Landing Pages",
    tags: ["holographic", "futuristic", "sci-fi", "glow"],
    previewUrl: "/CoreLandingPages/HeroSections/HolographicCore",
    code: {
      tsx: getCode("src/components/CoreLandingPages/HeroSections/tsx/HolographicCore.tsx"),
      jsx: getCode("src/components/CoreLandingPages/HeroSections/jsx/HolographicCore.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/HeroSections/HolographicCore/page.tsx"),
    },
    dependencies: ["framer-motion", "lucide-react", "@react-three/fiber", "@react-three/drei"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#4f46e5",
        description: "Primary holographic color (indigo).",
      },
      {
        name: "glowIntensity",
        type: "number",
        default: "1",
        description: "Intensity of glow effects (0-2).",
      },
      {
        name: "distortAmount",
        type: "number",
        default: "0.4",
        description: "Distortion amount for holographic effect (0-1).",
      },
      {
        name: "rotationSpeed",
        type: "number",
        default: "1",
        description: "Speed of 3D rotation (0.5-2).",
      },
    ],
    whenToUse: "Perfect for deep-tech brands, sci-fi projects, and Next.js experiences that want a futuristic, 'holographic' aesthetic. Use this React component for a 3D hero section with glowing core components and distorted digital overlays.",
    bestPractices: "Maintain scalable component architecture by keeping foreground text bright and readable. Follow React best practices by pairing this with dark-themed layouts. Optimize for performance by managed the React Three Fiber bridge.",
    whyMatters: "Holographic aesthetics create a sense of scale and technical depth. This production-ready UI component helpsคุณ build an interface that feels atmospheric and advanced, adding semantic authority to your project.",
    faqs: [
      { question: "Is it real 3D?", answer: "Yes, it uses React Three Fiber to render an interactive 3D core in the center of the hero section." },
      { question: "Does it slow down the site?", answer: "The 3D elements are highly optimized for WebGL and only render when the component is in the viewport to maintain 60FPS performance." },
      { question: "Can I change the core color?", answer: "The `primaryColor` prop allows you to switch the holographic engine between neon indigo, cyan, or brand-specific colors." }
    ],
  },
  {
    id: "industrial-sentience",
    name: "Industrial Sentience",
    description: "Industrial-themed hero section with mechanical aesthetics and sentient design elements.",
    category: "Core Landing Pages",
    tags: ["industrial", "mechanical", "sentient", "dark"],
    previewUrl: "/CoreLandingPages/HeroSections/IndustrialSentience",
    code: {
      tsx: getCode("src/components/CoreLandingPages/HeroSections/tsx/IndustrialSentience.tsx"),
      jsx: getCode("src/components/CoreLandingPages/HeroSections/jsx/IndustrialSentience.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/HeroSections/IndustrialSentience/page.tsx"),
    },
    dependencies: ["framer-motion", "lucide-react"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#ef4444",
        description: "Primary industrial color (red/orange).",
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "#0a0a0a",
        description: "Dark industrial background color.",
      },
      {
        name: "enableMechanical",
        type: "boolean",
        default: "true",
        description: "Enable mechanical animation effects.",
      },
      {
        name: "animationSpeed",
        type: "number",
        default: "1",
        description: "Speed of industrial animations.",
      },
    ],
    whenToUse: "Excellent for technical equipment, manufacturing tools, and Next.js applications that want a rugged 'Industrial' feel. Use this React component for a hero section with mechanical grids, sentient machine aesthetics, and dark accent lighting.",
    bestPractices: "Maintain consistent spacing within your design system by using it on deep navy or slate backgrounds. Follow React best practices by pairing it with technical, monospaced typography. Optimize for performance by managed the grid transforms.",
    whyMatters: "Industrial aesthetics communicate durability and engineering precision. This production-ready UI component helpsคุณ build an interface that feels built to last, reinforcing a brand identity focused on reliability.",
    faqs: [
      { question: "Are the grid lines real?", answer: "The background features a lightweight CSS-based mechanical grid that responds subtly to mouse movement for added depth." },
      { question: "Can I adjust the mood?", answer: "Yes, the `primaryColor` prop (default red) allows you to set the 'alert' or 'highlight' color of the industrial accents." },
      { question: "Does it support video?", answer: "The component is optimized for high-fidelity animations, but the background can be easily adapted to house a dark ambient video loop." }
    ],
  },
  {
    id: "living-porcelain",
    name: "Living Porcelain",
    description: "Elegant hero section with porcelain-like textures and organic, living animations.",
    category: "Core Landing Pages",
    tags: ["porcelain", "elegant", "organic", "texture"],
    previewUrl: "/CoreLandingPages/HeroSections/LivingPorcelain",
    code: {
      tsx: getCode("src/components/CoreLandingPages/HeroSections/tsx/LivingPorcelain.tsx"),
      jsx: getCode("src/components/CoreLandingPages/HeroSections/jsx/LivingPorcelain.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/HeroSections/LivingPorcelain/page.tsx"),
    },
    dependencies: ["framer-motion", "lucide-react", "@react-three/fiber", "@react-three/drei"],
    props: [
      {
        name: "porcelainColor",
        type: "string",
        default: "#fefefe",
        description: "Porcelain white/cream color.",
      },
      {
        name: "textureIntensity",
        type: "number",
        default: "1",
        description: "Intensity of porcelain texture (0-2).",
      },
      {
        name: "organicSpeed",
        type: "number",
        default: "1",
        description: "Speed of organic living animations.",
      },
      {
        name: "enableBreathing",
        type: "boolean",
        default: "true",
        description: "Enable breathing/living animation effect.",
      },
    ],
    whenToUse: "Ideal for beauty brands, high-end skincare, and Next.js applications that want an elegant, organic aesthetic. Use this React component for a hero section with porcelain-like textures and soft 'breathing' animations.",
    bestPractices: "Maintain consistent spacing within your design system by using it on clean, monochromatic backgrounds. Follow React best practices by pairing it with airy, light-weight typography. Optimize for performance by managed the organic fragment shaders.",
    whyMatters: "Organic aesthetics create a sense of calm and natural beauty. This production-ready UI component helpsคุณ build an interface that feels living and responsive, improving user affinity with your brand through subtle, biological motion.",
    faqs: [
      { question: "How is the texture made?", answer: "It uses a professional WebGL shader to simulate the subtle reflections and surface grain of real kiln-fired porcelain." },
      { question: "Can I adjust the animation speed?", answer: "Yes, the `organicSpeed` prop allows you to control the frequency of the 'breathing' effect to match your brand's mood." },
      { question: "Does it support images?", answer: "The component is designed as a type-and-texture focus, but images can be integrated as floating 'fragments' within the 3D space." }
    ],
  },
  {
    id: "marble",
    name: "Marble",
    description: "Luxurious marble-textured hero section with sophisticated design and premium feel.",
    category: "Core Landing Pages",
    tags: ["marble", "luxury", "sophisticated", "premium"],
    previewUrl: "/CoreLandingPages/HeroSections/Marble",
    code: {
      tsx: getCode("src/components/CoreLandingPages/HeroSections/tsx/Marble.tsx"),
      jsx: getCode("src/components/CoreLandingPages/HeroSections/jsx/Marble.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/HeroSections/Marble/page.tsx"),
    },
    dependencies: ["framer-motion", "lucide-react", "gsap", "@react-three/fiber", "@react-three/drei"],
    props: [
      {
        name: "marbleColor1",
        type: "string",
        default: "#f5f5f5",
        description: "Primary marble color (light).",
      },
      {
        name: "marbleColor2",
        type: "string",
        default: "#d4d4d4",
        description: "Secondary marble color (veins).",
      },
      {
        name: "textureIntensity",
        type: "number",
        default: "1",
        description: "Intensity of marble texture (0-2).",
      },
      {
        name: "enableShimmer",
        type: "boolean",
        default: "true",
        description: "Enable luxury shimmer effects.",
      },
    ],
    whenToUse: "Excellent for luxury fashion, premium concierge services, and Next.js sites that want a sophisticated, high-value feel. Use this React component for a marble-textured hero section with soft shimmer effects and gold-veined aesthetics.",
    bestPractices: "Maintain consistent spacing within your design system by using it on pure white or light gray backgrounds. Follow React best practices by pairing it with classic Serif typography. Optimize for performance by using efficient texture mapping.",
    whyMatters: "Marble represents timeless luxury and structural permanence. This production-ready UI component helpsคุณ build an interface that feels high-end and curated, reflecting a brand identity rooted in quality and tradition.",
    faqs: [
      { question: "Is the marble texture real?", answer: "Yes, it uses an optimized high-resolution texture map with dynamic 'veins' that shimmer as the user moves their mouse." },
      { question: "Can I change the vein color?", answer: "The `marbleColor2` prop allows you to adjust the highlight color of the marble veins to match your brand's accent colors." },
      { question: "Does it include 3D elements?", answer: "Yes, it features a 3D-feeling depth through layered shimmer effects that respond to environmental lighting." }
    ],
  },
  {
    id: "retro-80s",
    name: "Retro 80s",
    description: "Nostalgic 80s-inspired hero section with retro colors, neon effects, and vintage aesthetics.",
    category: "Core Landing Pages",
    tags: ["retro", "80s", "neon", "vintage"],
    previewUrl: "/CoreLandingPages/HeroSections/Retro80s",
    code: {
      tsx: getCode("src/components/CoreLandingPages/HeroSections/tsx/Retro80s.tsx"),
      jsx: getCode("src/components/CoreLandingPages/HeroSections/jsx/Retro80s.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/HeroSections/Retro80s/page.tsx"),
    },
    dependencies: ["lucide-react", "gsap"],
    props: [
      {
        name: "neonColor1",
        type: "string",
        default: "#ff00ff",
        description: "First neon color (magenta).",
      },
      {
        name: "neonColor2",
        type: "string",
        default: "#00ffff",
        description: "Second neon color (cyan).",
      },
      {
        name: "glowIntensity",
        type: "number",
        default: "1",
        description: "Intensity of neon glow effects (0-2).",
      },
      {
        name: "enableScanlines",
        type: "boolean",
        default: "true",
        description: "Enable retro CRT scanline effects.",
      },
    ],
    whenToUse: "Perfect for nostalgic gaming brands, vintage tech reviews, and Next.js applications that want a high-energy '80s' aesthetic. Use this React component for a retro hero section with neon grids, scanlines, and vibrant magenta/cyan glows.",
    bestPractices: "Follow React best practices by pairing this with bold, italicized typography and deep black backgrounds. Maintain scalable component architecture by keeping the neon highlights consistent. Optimize for performance by managed the CRT filter overlays.",
    whyMatters: "Retro aesthetics tap into emotional nostalgia, creating an immediate and powerful visual connection. This production-ready UI component helpsคุณ build an interface that feels energetic and unique, adding a distinct 'Neon' signature to your project.",
    faqs: [
      { question: "Does it have CRT scanlines?", answer: "Yes, the component features a built-in scanline overlay that can be toggled via the `enableScanlines` prop for a true vintage feel." },
      { question: "Can I customize the neon colors?", answer: "The `neonColor1` and `neonColor2` props allow you to switch the primary glow colors between classic pink/blue or any brand neons." },
      { question: "Is it mobile responsive?", answer: "The layout and neon effects are optimized to remain legible and vibrant on smaller screens, maintaining the retro atmosphere on the go." }
    ],
  },
  {
    id: "sketchy2",
    name: "Sketchy 2",
    description: "Hand-drawn sketchy hero section with organic lines and creative, artistic aesthetics.",
    category: "Core Landing Pages",
    tags: ["sketchy", "hand-drawn", "organic", "artistic"],
    previewUrl: "/CoreLandingPages/HeroSections/Sketchy2",
    code: {
      tsx: getCode("src/components/CoreLandingPages/HeroSections/tsx/Sketchy2.tsx"),
      jsx: getCode("src/components/CoreLandingPages/HeroSections/jsx/Sketchy2.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/HeroSections/Sketchy2/page.tsx"),
    },
    dependencies: ["lucide-react", "@react-three/fiber", "@react-three/drei", "three", "gsap"],
    props: [
      {
        name: "sketchColor",
        type: "string",
        default: "#1a1a1a",
        description: "Color for sketch lines.",
      },
      {
        name: "paperColor",
        type: "string",
        default: "#ffffff",
        description: "Background paper color.",
      },
      {
        name: "roughness",
        type: "number",
        default: "1",
        description: "Roughness of sketch lines (0.5-2).",
      },
      {
        name: "enableHandDrawn",
        type: "boolean",
        default: "true",
        description: "Enable hand-drawn sketch effects.",
      },
    ],
    whenToUse: "Ideal for creative studios, educational platforms, and Next.js portfolios that want a playful, hand-crafted aesthetic. Use this React component for a 'sketchbook' hero section with rough borders, wavy underlines, and organic line art.",
    bestPractices: "Follow React best practices by pairing this with playful, informal typography. Maintain consistent spacing within your design system by using it on soft cream or paper-textured backgrounds. Optimize for performance by managed the Three.js sketch shaders.",
    whyMatters: "Sketch aesthetics break the digital barrier by adding a human, tactile touch to your hero section. This production-ready UI component helpsคุณ build an interface that feels approachable and experimental, improving user engagement through visual novelty.",
    faqs: [
      { question: "How are the sketch lines made?", answer: "It uses a combination of GSAP and Three.js fragment shaders to simulate the look of physical pencil or ink strokes on paper." },
      { question: "Can I adjust the 'roughness'?", answer: "Yes, the `roughness` prop allows you to control how 'clean' or 'scribbled' the lines appear, from precise technical drawings to loose sketches." },
      { question: "Is the paper texture included?", answer: "Yes, the background includes a subtle paper grain effect (`paperColor`) that reinforces the sketchbook theme." }
    ],
  },
  {
    id: "swiss-portfolio",
    name: "Swiss Portfolio",
    description: "Swiss design-inspired hero section with clean typography and minimalist aesthetics.",
    category: "Core Landing Pages",
    tags: ["swiss", "portfolio", "typography", "minimal"],
    previewUrl: "/CoreLandingPages/HeroSections/SwissPortfolio",
    code: {
      tsx: getCode("src/components/CoreLandingPages/HeroSections/tsx/SwissPortfolio.tsx"),
      jsx: getCode("src/components/CoreLandingPages/HeroSections/jsx/SwissPortfolio.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/HeroSections/SwissPortfolio/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#000000",
        description: "Primary text color (black).",
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "#ffffff",
        description: "Clean white background.",
      },
      {
        name: "accentColor",
        type: "string",
        default: "#ef4444",
        description: "Minimal accent color for highlights.",
      },
      {
        name: "fontWeight",
        type: "string",
        default: "400",
        description: "Typography weight (300-700).",
      },
      {
        name: "spacing",
        type: "string",
        default: "minimal",
        description: "Spacing style: 'minimal', 'moderate', or 'generous'.",
      },
    ],
    whenToUse: "Excellent for architect portfolios, design studios, and Next.js applications that want a clean, Swiss-minimalist aesthetic. Use this React component for a typography-first hero section with high-contrast colors and precision grids.",
    bestPractices: "Follow React best practices by pairing this with bold, grotesque Sans-Serif typography. Maintain consistent spacing within your design system by using it on pure white or red backgrounds. Optimize for performance by using efficient layout transforms.",
    whyMatters: "Swiss design (International Typographic Style) communicates structural clarity and professional integrity. This production-ready UI component helpsคุณ build an interface that feels authoritative and timeless, focusing the user's focus on your core message.",
    faqs: [
      { question: "Is the typography fixed?", answer: "The component is optimized for bold Sans-Serif fonts like Helvetica or Inter, but the `fontWeight` prop allows for subtle adjustments to the visual weight." },
      { question: "Can I change the layout spacing?", answer: "The `spacing` prop allows you to choose between 'minimal', 'moderate', and 'generous' layouts to fit your content's density requirements." },
      { question: "Does it support accent colors?", answer: "Yes, the `accentColor` prop (default Swiss Red) is used for subtle highlights like arrows or button hover states to maintain the minimalist aesthetic." }
    ],
  },
];

