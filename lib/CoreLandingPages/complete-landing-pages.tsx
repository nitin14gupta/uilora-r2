import { getCode } from "../getCode";
import { Component } from "../types";

// All complete landing page components from the library
// Total: 21 components

export const completeLandingPageComponents: Component[] = [
  {
    id: "awwwards",
    name: "Awwwards",
    description:
      "Award-winning complete landing page with premium design and smooth animations. Inspired by Awwwards showcases.",
    category: "Core Landing Pages",
    tags: ["awwwards", "premium", "award-winning", "showcase"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/Awwwards",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/Awwwards.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/Awwwards.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/Awwwards/page.tsx"
      ),
    },
    dependencies: ["framer-motion", "lucide-react"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#16a34a",
        description: "Primary brand color (green in default theme).",
      },
      {
        name: "title",
        type: "string",
        default: "Your Title Here",
        description: "Main hero title text.",
      },
      {
        name: "subtitle",
        type: "string",
        default: "Your subtitle description",
        description: "Hero subtitle or description text.",
      },
      {
        name: "enableCursor",
        type: "boolean",
        default: "true",
        description: "Enable custom cursor effect.",
      },
      {
        name: "enableGrain",
        type: "boolean",
        default: "true",
        description: "Enable grainy texture overlay.",
      },
      {
        name: "animationSpeed",
        type: "number",
        default: "1",
        description: "Animation speed multiplier (0.5-2).",
      },
    ],
    whenToUse: "Ideal for high-end digital agencies, award-winning portfolios, and Next.js platforms that want a premium 'Awwwards' aesthetic. Use this full-page template for an immersive experience with smooth scroll animations, grainy textures, and localized cursor effects.",
    bestPractices: "Maintain consistent spacing within your design system by using generous, variable padding. Follow React best practices by managed the grain-shader lifecycle. Optimize for performance by using efficient Framer Motion layout transforms.",
    whyMatters: "Award-winning design communicates digital excellence and high-end craft. This production-ready UI template helpsคุณ build an interface that feels curated and premium, leaving a lasting visual impression on high-value clients.",
    faqs: [
      { question: "Is the grainy texture real?", answer: "Yes, the component features a built-in noise overlay (`enableGrain`) that adds a subtle, high-fidelity tactile feel to all background layers." },
      { question: "Can I use it for a portfolio?", answer: "Absolutely, it features responsive showcases and project-focused sections specifically designed for deep visual storytelling." },
      { question: "How does the custom cursor work?", answer: "The `enableCursor` prop triggers a localized, animated pointer that morphs and scales as the user interacts with primary links and images." }
    ],
  },
  {
    id: "brutalism",
    name: "Brutalism",
    description:
      "Bold, high-contrast landing page with neo-brutalist design principles. Thick borders and hard shadows.",
    category: "Core Landing Pages",
    tags: ["brutalism", "bold", "high-contrast", "neo-brutalist"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/Brutalism",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/Brutalism.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/Brutalism.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/Brutalism/page.tsx"
      ),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#000000",
        description: "Primary bold color (black).",
      },
      {
        name: "accentColor",
        type: "string",
        default: "#ffff00",
        description: "High contrast accent color (yellow).",
      },
      {
        name: "shadowOffset",
        type: "string",
        default: "8px",
        description: "Offset for brutalist shadow effects.",
      },
      {
        name: "borderWidth",
        type: "string",
        default: "4px",
        description: "Border width for geometric elements.",
      },
    ],
    whenToUse: "Perfect for edgy startups, lifestyle brands, and Next.js applications that want a bold 'Neo-Brutalist' aesthetic. Use this full-page template for a high-contrast experience with thick borders, hard shadows, and vibrant primary colors.",
    bestPractices: "Maintain scalable component architecture by keeping foreground text thick and bold. Follow React best practices by pairing this with high-contrast, primary colors. Optimize for performance by using efficient box-shadow renders.",
    whyMatters: "Neo-brutalist design is a powerful visual statement of raw energy and structural honesty. This production-ready UI template helpsคุณ build an interface that feels solid and unyielding, adding a unique architectural signature to your project.",
    faqs: [
      { question: "Can I adjust the shadow depth?", answer: "The `shadowOffset` prop allows you to control how 'thick' the hard shadows are, defining the level of 'Brutalist' impact." },
      { question: "What is the accent color for?", answer: "The `accentColor` (typically bright yellow) is used for focal points like buttons and section highlights to ensure they pop against the black borders." },
      { question: "Is it mobile responsive?", answer: "The geometric cards stack into a solid vertical grid on mobile, ensuring the high-contrast lines and hard shadows remain impactful." }
    ],
  },
  {
    id: "chrome-liquid",
    name: "Chrome Liquid",
    description:
      "Liquid chrome effect landing page with metallic reflections and fluid animations.",
    category: "Core Landing Pages",
    tags: ["chrome", "liquid", "metallic", "reflection"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/ChromeLiquid",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/ChromeLiquid.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/ChromeLiquid.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/ChromeLiquid/page.tsx"
      ),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "chromeColor",
        type: "string",
        default: "#c0c0c0",
        description: "Chrome metallic color (silver).",
      },
      {
        name: "reflectionIntensity",
        type: "number",
        default: "1",
        description: "Intensity of metallic reflections (0-2).",
      },
      {
        name: "liquidSpeed",
        type: "number",
        default: "1",
        description: "Speed of liquid animations (0.5-2).",
      },
      {
        name: "enableReflections",
        type: "boolean",
        default: "true",
        description: "Enable metallic reflection effects.",
      },
    ],
    whenToUse: "Excellent for high-end fashion, 3D modeling agencies, and Next.js landing pages that want a 'Chrome Liquid' aesthetic. Use this full-page template for an immersive experience with metallic reflections, fluid animations, and high-fidelity reflections.",
    bestPractices: "Follow React best practices by pairing this with high-contrast, dark-themed hero sections. Maintain consistent spacing within your design system by using it for premium product launches. Optimize for performance by managed the metallic shader intensity.",
    whyMatters: "Liquid chrome aesthetics create a sense of digital mystery and high-fidelity depth. This production-ready UI template helpsคุณ build an interface that feels expensive and innovative, reflecting a brand identity rooted in the future.",
    faqs: [
      { question: "How were the reflections made?", answer: "The background uses layered, animated CSS mask-images and high-contrast gradients (`chromeColor`) to simulate physical metallic surfaces." },
      { question: "Is the liquid speed adjustable?", answer: "Yes, the `liquidSpeed` prop allows you to control the rotational frequency of the metallic waves, from slow/calm to high-energy." },
      { question: "Can it be any color?", answer: "While optimized for silver/chrome, you can adjust the `chromeColor` to create 'Liquid Gold', 'Liquid Copper', or 'Anodized' effects." }
    ],
  },
  {
    id: "dimensions",
    name: "Dimensions",
    description:
      "Multi-dimensional landing page with depth and perspective effects.",
    category: "Core Landing Pages",
    tags: ["dimensions", "3d", "depth", "perspective"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/DIMENSIONS",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/Dimensions.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/Dimensions.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/Dimensions/page.tsx"
      ),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#3b82f6",
        description: "Primary color for dimensional elements.",
      },
      {
        name: "depthIntensity",
        type: "number",
        default: "1",
        description: "Intensity of depth/perspective effects (0-2).",
      },
      {
        name: "enable3D",
        type: "boolean",
        default: "true",
        description: "Enable 3D transformation effects.",
      },
      {
        name: "animationSpeed",
        type: "number",
        default: "1",
        description: "Speed of dimensional animations.",
      },
    ],
    whenToUse: "Ideal for deep-tech brands, VR/AR startups, and Next.js portfolios that want an interactive 'Dimensional' aesthetic. Use this full-page template for an immersive experience with 3D perspectives, structural depth, and technical data overlays.",
    bestPractices: "Maintain scalable component architecture by keeping text high-contrast against the 3D containers. Follow React best practices by using Framer Motion 3D transforms. Optimize for performance by managed the focus-depth renders.",
    whyMatters: "Dimensional design communicates structural complexity and spatial power. This production-ready UI template helpsคุณ build an interface that feels advanced and immersive, adding a distinct 'Depth' signature to your project.",
    faqs: [
      { question: "Is the 3D real?", answer: "The component features stylized 3D perspective shifts (`enable3D`) that respond to environmental light and scroll position for a deep spatial feel." },
      { question: "Can I adjust the depth?", answer: "Yes, the `depthIntensity` prop allows you to control how 'thick' the dimensional sections appear, ranging from flat grid-work to extreme 3D stacks." },
      { question: "Is it good for mobile?", answer: "The perspective shifts are subtly scaled down on mobile to ensure that text remains legible while maintaining the atmospheric depth." }
    ],
  },
  {
    id: "disordered-grid",
    name: "Disordered Grid",
    description:
      "Asymmetric grid layout landing page with dynamic positioning and organic flow.",
    category: "Core Landing Pages",
    tags: ["grid", "asymmetric", "organic", "dynamic"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/DisorderedGrid",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/DisorderedGrid.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/DisorderedGrid.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/DisorderedGrid/page.tsx"
      ),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#1a1a1a",
        description: "Primary color for grid elements.",
      },
      {
        name: "gridGap",
        type: "string",
        default: "24px",
        description: "Gap between grid items.",
      },
      {
        name: "disorderLevel",
        type: "number",
        default: "1",
        description: "Level of grid disorder/asymmetry (0.5-2).",
      },
      {
        name: "enableAnimations",
        type: "boolean",
        default: "true",
        description: "Enable dynamic positioning animations.",
      },
    ],
    whenToUse: "Excellent for creative labs, experimental studios, and Next.js portfolios that want an organic 'Disordered Grid' aesthetic. Use this full-page template for an asymmetric experience with dynamic positioning and organic layout flow.",
    bestPractices: "Maintain consistent spacing within your design system by respecting the intentional asymmetry. Follow React best practices by pairing it with clear, high-contrast typography. Optimize for performance by using efficient CSS grid transforms.",
    whyMatters: "Asymmetric design communicates creativity and structural freedom. This production-ready UI template helpsคุณ build an interface that feels experimental and alive, breaking the standard 'boring' grid mold.",
    faqs: [
      { question: "Is the grid actually random?", answer: "The layout uses a controlled 'Disorder' logic where items drift from their grid center according to the `disorderLevel` prop." },
      { question: "Can I adjust the spacing?", answer: "Yes, the `gridGap` prop allows you to control the 'airiness' between the asymmetric modules across the entire page." },
      { question: "Is it readable?", answer: "While the modules are asymmetric, the internal content follows a strict focus-hierarchy to ensure primary information remains front and center." }
    ],
  },
  {
    id: "energy-beam",
    name: "Energy Beam",
    description:
      "Futuristic landing page with energy beam effects and sci-fi aesthetics.",
    category: "Core Landing Pages",
    tags: ["energy", "beam", "futuristic", "sci-fi"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/EnergyBeam",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/EnergyBeam.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/EnergyBeam.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/EnergyBeam/page.tsx"
      ),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "beamColor",
        type: "string",
        default: "#00ffff",
        description: "Energy beam color (cyan).",
      },
      {
        name: "glowIntensity",
        type: "number",
        default: "1",
        description: "Intensity of energy glow effects (0-2).",
      },
      {
        name: "beamSpeed",
        type: "number",
        default: "1",
        description: "Speed of energy beam animations.",
      },
      {
        name: "enableParticles",
        type: "boolean",
        default: "true",
        description: "Enable energy particle effects.",
      },
    ],
    whenToUse: "Ideal for high-tech SaaS, energy companies, and Next.js applications that want a futuristic 'Energy Beam' aesthetic. Use this full-page template for an immersive experience with glowing beam paths, ambient particles, and sci-fi data readouts.",
    bestPractices: "Maintain scalable component architecture by keeping beam colors consistent with your primary brand palette. Follow React best practices by using Framer Motion for the fluid energy animations. Optimize for performance by managed the particle density.",
    whyMatters: "Energy beam aesthetics communicate power, flow, and technical momentum. This production-ready UI template helpsคุณ build an interface that feels advanced and high-energy, adding a distinct 'Neon' signature to your project.",
    faqs: [
      { question: "How were the beams made?", answer: "The component uses layered, animated linear gradients with extreme glow filters to simulate high-energy beams passing through the background." },
      { question: "Can I adjust the speed?", answer: "Yes, the `beamSpeed` prop allows you to control the flow frequency of the energy pulses across the entire page." },
      { question: "Is the glow adjustable?", answer: "The `glowIntensity` prop (0-2) controls the localized environmental lighting effect around each energy beam." }
    ],
  },
  {
    id: "hand-drawn",
    name: "Hand Drawn",
    description:
      "Sketchy, hand-drawn style landing page with organic, wobbly lines and creative aesthetics.",
    category: "Core Landing Pages",
    tags: ["hand-drawn", "sketchy", "organic", "creative"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/HandDrawn",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/HandDrawn.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/HandDrawn.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/HandDrawn/page.tsx"
      ),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "sketchColor",
        type: "string",
        default: "#1a1a1a",
        description: "Color for hand-drawn lines.",
      },
      {
        name: "paperColor",
        type: "string",
        default: "#ffffff",
        description: "Background paper color.",
      },
      {
        name: "wobbleIntensity",
        type: "number",
        default: "1",
        description: "Intensity of wobbly/organic lines (0.5-2).",
      },
      {
        name: "enableHandDrawn",
        type: "boolean",
        default: "true",
        description: "Enable hand-drawn sketch effects.",
      },
    ],
    whenToUse: "Perfect for creative studios, education platforms, and Next.js applications that want an organic 'Hand Drawn' aesthetic. Use this full-page template for a hand-crafted experience with paper-grain backgrounds, wobbly lines, and creative workspace elements.",
    bestPractices: "Maintain consistent spacing within your design system by using it on soft cream or off-white background tones. Follow React best practices by pairing it with informal typography. Optimize for performance by managed the wobbly border transforms.",
    whyMatters: "Hand-drawn design breaks the digital barrier by adding a human, tactile touch to your interface. This production-ready UI template helpsคุณ build a brand identity that feels approachable and experimental, improving user affinity through visual novelty.",
    faqs: [
      { question: "How are the borders made?", answer: "The component uses localized SVG paths with `wobbleIntensity` variants to simulate the uneven appearance of physical ink or pencil lines drawn on paper." },
      { question: "Can I change the ink color?", answer: "Yes, the `sketchColor` prop allows you to set the primary 'Ink' hue to match your brand's sketching style." },
      { question: "Is the paper texture real?", answer: "Yes, the background includes a subtle paper grain overlay that reinforces the tactile, sketchbook-inspired atmospheric mood." }
    ],
  },
  {
    id: "huly",
    name: "Huly",
    description:
      "Modern, minimalist landing page with clean design and smooth animations.",
    category: "Core Landing Pages",
    tags: ["minimal", "modern", "clean", "smooth"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/Huly",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/Huly.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/Huly.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/Huly/page.tsx"
      ),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#000000",
        description: "Primary text color.",
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "#ffffff",
        description: "Clean background color.",
      },
      {
        name: "accentColor",
        type: "string",
        default: "#3b82f6",
        description: "Minimal accent color.",
      },
      {
        name: "animationSpeed",
        type: "number",
        default: "1",
        description: "Speed of smooth animations.",
      },
    ],
    whenToUse: "Excellent for professional services, architecture firms, and Next.js corporate sites that want a clean 'Huly Minimalist' aesthetic. Use this full-page template for a sophisticated experience with generous whitespace, sharp typography, and smooth state transitions.",
    bestPractices: "Maintain consistent spacing within your design system by respecting the 'minimal' layout padding. Follow React best practices by pairing it with bold Sans-Serif typography. Optimize for performance by using efficient layout transforms.",
    whyMatters: "Minimalist design (Swiss-inspired) communicates structural clarity and professional integrity. This production-ready UI template helpsคุณ build an interface that feels authoritative and timeless, focusing the user's entire attention on your core message.",
    faqs: [
      { question: "Is it good for long text?", answer: "The Huly aesthetic is optimized for clarity; use it for editorial-style content where whitespace is as important as the text itself." },
      { question: "Can I change the accent color?", answer: "Yes, the `accentColor` (default blue) is used for subtle interactive highlights like buttons and links to maintain the focus-first philosophy." },
      { question: "How 'Minimalist' is it?", answer: "The design removes all non-essential decorative elements, relying on precise grids and high-contrast typography to create a premium atmosphere." }
    ],
  },
  {
    id: "invisible-dimension",
    name: "Invisible Dimension",
    description:
      "Abstract landing page with invisible elements and dimensional effects.",
    category: "Core Landing Pages",
    tags: ["abstract", "invisible", "dimensional", "experimental"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/InvisibleDimension",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/InvisibleDimension.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/InvisibleDimension.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/InvisibleDimension/page.tsx"
      ),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#3b82f6",
        description: "Primary color for visible elements.",
      },
      {
        name: "opacity",
        type: "number",
        default: "0.5",
        description: "Opacity of invisible elements (0-1).",
      },
      {
        name: "enableDimensional",
        type: "boolean",
        default: "true",
        description: "Enable dimensional transformation effects.",
      },
      {
        name: "animationSpeed",
        type: "number",
        default: "1",
        description: "Speed of abstract animations.",
      },
    ],
    whenToUse: "Ideal for creative labs, experimental art projects, and Next.js portfolios that want an abstract 'Invisible Dimension' aesthetic. Use this full-page template for an immersive experience with semi-transparent elements, floating 3D layers, and experimental animations.",
    bestPractices: "Follow React best practices by pairing this with high-contrast foreground text. Maintain scalable component architecture by keeping the dimensional layers lightweight. Optimize for performance by managed the opacity-heavy background renders.",
    whyMatters: "Abstract dimensional design creates a sense of spatial mystery and innovation. This production-ready UI template helpsคุณ build an interface that feels futuristic and unique, adding a distinct 'Dimension' signature to your project.",
    faqs: [
      { question: "What are 'Invisible' elements?", answer: "The component features low-opacity, floating geometric containers (`opacity`) that only become fully visible when the user interacts with them or scrolls into their depth field." },
      { question: "Is the 3D real?", answer: "The template features stylized 3D perspective shifts (`enableDimensional`) that respond to the user's scroll position for a deep spatial feel." },
      { question: "Can it be any color?", answer: "While optimized for technical blue, you can adjust the `primaryColor` to fit any brand identity that requires atmospheric depth." }
    ],
  },
  {
    id: "kinetic-void",
    name: "Kinetic Void",
    description:
      "Dynamic landing page with kinetic typography and void space effects.",
    category: "Core Landing Pages",
    tags: ["kinetic", "void", "typography", "dynamic"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/KineticVoid",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/KineticVoid.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/KineticVoid.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/KineticVoid/page.tsx"
      ),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#000000",
        description: "Primary text color.",
      },
      {
        name: "voidColor",
        type: "string",
        default: "#ffffff",
        description: "Void space background color.",
      },
      {
        name: "kineticSpeed",
        type: "number",
        default: "1",
        description: "Speed of kinetic typography animations.",
      },
      {
        name: "enableVoid",
        type: "boolean",
        default: "true",
        description: "Enable void space effects.",
      },
    ],
    whenToUse: "Perfect for high-impact landing pages, design studios, and Next.js portfolios that want a dynamic 'Kinetic Void' aesthetic. Use this full-page template for an immersive experience with kinetic typography, high-contrast void spaces, and energetic animations.",
    bestPractices: "Maintain consistent spacing within your design system by using it for primary brand storytelling. Follow React best practices by pairing it with bold, high-contrast font colors. Optimize for performance by managed the typographic physics.",
    whyMatters: "Kinetic design (International Typographic Style) communicates energy and structural power. This production-ready UI template helpsคุณ build an interface that feels alive and authoritative, focusing the user's focus on your core slogans.",
    faqs: [
      { question: "How does 'Kinetic' work?", answer: "The component features moving, scaling, and interactive typography (`kineticSpeed`) that responds to proximity and scroll position." },
      { question: "What is 'Void' space?", answer: "In design, 'Void' refers to the intentional use of high-contrast negative space (`voidColor`) to emphasize the typographic motion." },
      { question: "Is it mobile responsive?", answer: "The kinetic slogans are designed as liquid typography that maintains its impact and legibility even when compressed for smaller mobile screens." }
    ],
  },
  {
    id: "magazine",
    name: "Magazine",
    description:
      "Editorial-style landing page inspired by magazine layouts and print design.",
    category: "Core Landing Pages",
    tags: ["magazine", "editorial", "print", "layout"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/Magazine",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/Magazine.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/Magazine.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/Magazine/page.tsx"
      ),
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
        name: "accentColor",
        type: "string",
        default: "#ef4444",
        description: "Editorial accent color (red).",
      },
      {
        name: "fontFamily",
        type: "string",
        default: "serif",
        description: "Typography family (serif, sans-serif).",
      },
      {
        name: "layoutStyle",
        type: "string",
        default: "editorial",
        description: "Layout style: 'editorial', 'grid', or 'asymmetric'.",
      },
    ],
    whenToUse: "Ideal for fashion blogs, editorial projects, and Next.js sites that want a sophisticated 'Magazine' aesthetic. Use this full-page template for a content-rich experience with print-inspired typography, multi-column layouts, and red accent highlights.",
    bestPractices: "Maintain scalable component architecture by keeping typography weights consistent. Follow React best practices by pairing Serif headers with Sans-Serif body text. Optimize for performance by managed the multi-column layout on mobile.",
    whyMatters: "Editorial aesthetics communicate cultural authority and high-end design. This production-ready UI template helpsคุณ build an interface that feels curated and professional, focusing the user's focus on deep-dive content and visual stories.",
    faqs: [
      { question: "Can I change the font?", answer: "The `fontFamily` prop allows you to toggle between classic 'Serif' for that print feel or modern 'Sans-Serif' for a digital-first editorial look." },
      { question: "What is the 'Editorial' layout?", answer: "The `layoutStyle` prop triggers a specific asymmetric grid that mimics the varied page layouts found in high-end design magazines." },
      { question: "Is it good for SEO?", answer: "Yes, the template uses semantic HTML5 headings and multi-column semantic structures that are easily parsed by search engine crawlers." }
    ],
  },
  {
    id: "magnetic-cursor",
    name: "Magnetic Cursor",
    description:
      "Interactive landing page with magnetic cursor effects that attract elements.",
    category: "Core Landing Pages",
    tags: ["magnetic", "cursor", "interactive", "attraction"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/MagneticCursor",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/MagneticCursor.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/MagneticCursor.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/MagneticCursor/page.tsx"
      ),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "magneticStrength",
        type: "number",
        default: "1",
        description: "Strength of magnetic attraction (0.5-2).",
      },
      {
        name: "cursorColor",
        type: "string",
        default: "#3b82f6",
        description: "Magnetic cursor color.",
      },
      {
        name: "attractionRadius",
        type: "number",
        default: "100",
        description: "Radius of magnetic attraction in pixels.",
      },
      {
        name: "enableMagnetic",
        type: "boolean",
        default: "true",
        description: "Enable magnetic cursor effects.",
      },
    ],
    whenToUse: "Excellent for creative agencies, high-end portfolios, and Next.js applications that want an interactive 'Magnetic' aesthetic. Use this full-page template for an engaging experience where elements 'pull' the cursor, creating a tactile sense of interaction.",
    bestPractices: "Maintain consistent spacing within your design system to avoid over-crowding interactive points. Follow React best practices by managed the mouse-event listeners globally. Optimize for performance by using efficient Framer Motion springs.",
    whyMatters: "Magnetic interactions create a sense of digital 'gravity' and playfulness. This production-ready UI template helpsคุณ build an interface that feels alive and responsive, improving user engagement through localized micro-interactions.",
    faqs: [
      { question: "What is 'Magnetic Strength'?", answer: "The `magneticStrength` prop defines the pixel-distance and pull-force applied to the cursor when it enters a target's `attractionRadius`." },
      { question: "Can I use it with custom icons?", answer: "Yes, the magnetic logic can be applied to any SVG or image element on the page by wrapping it in the interactive container." },
      { question: "Does it work on mobile?", answer: "Magnetic effects are automatically disabled on touch devices to ensure standard swipe/tap behaviors remain predictable and friction-free." }
    ],
  },
  {
    id: "neo-brutalist",
    name: "Neo Brutalist",
    description:
      "Modern neo-brutalist landing page with bold colors and geometric shapes.",
    category: "Core Landing Pages",
    tags: ["neo-brutalist", "bold", "geometric", "modern"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/NeoBrutalist",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/NeoBrutalist.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/NeoBrutalist.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/NeoBrutalist/page.tsx"
      ),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#000000",
        description: "Primary bold color (black).",
      },
      {
        name: "accentColor",
        type: "string",
        default: "#ffff00",
        description: "High contrast accent color.",
      },
      {
        name: "shadowOffset",
        type: "string",
        default: "8px",
        description: "Offset for brutalist shadows.",
      },
      {
        name: "borderWidth",
        type: "string",
        default: "4px",
        description: "Border width for geometric elements.",
      },
    ],
    whenToUse: "Perfect for bold startups, NFT marketplaces, and Next.js applications that want a modern 'Neo-Brutalist' aesthetic. Use this full-page template for a high-contrast experience with geometric shapes, vibrant accents, and thick architectural borders.",
    bestPractices: "Maintain scalable component architecture by keeping labels short and colors high-contrast. Follow React best practices by pairing this with bold typography. Optimize for performance by using efficient grid transforms for the geometric modules.",
    whyMatters: "Neo-brutalist aesthetics communicate structural honesty and high energy. This production-ready UI template helpsคุณ build an interface that feels solid and unyielding, adding a unique 'Graphic' signature to your brand.",
    faqs: [
      { question: "How were the 'Shadows' made?", answer: "The component uses hard-coded CSS box-shadows (`shadowOffset`) without blur to create that distinct, architectural neo-brutalist depth." },
      { question: "Is the accent color global?", answer: "Yes, the `accentColor` prop sets the highlight tone for all primary buttons and geometric focal points across the entire page." },
      { question: "Can I adjust the borders?", answer: "The `borderWidth` prop (default 4px) allows you to control the 'thickness' of the architectural lines defining the layout." }
    ],
  },
  {
    id: "neo-brutalism",
    name: "Neo Brutalism",
    description:
      "Classic neo-brutalism landing page with high contrast and raw aesthetics.",
    category: "Core Landing Pages",
    tags: ["neo-brutalism", "high-contrast", "raw", "bold"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/NeoBrutalism",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/NeoBrutalism.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/NeoBrutalism.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/NeoBrutalism/page.tsx"
      ),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#000000",
        description: "Primary raw color (black).",
      },
      {
        name: "accentColor",
        type: "string",
        default: "#ff006e",
        description: "High contrast accent color.",
      },
      {
        name: "shadowOffset",
        type: "string",
        default: "8px",
        description: "Offset for brutalist shadows.",
      },
      {
        name: "borderWidth",
        type: "string",
        default: "4px",
        description: "Border width for raw elements.",
      },
    ],
    whenToUse: "Ideal for high-energy brands, edgy portfolios, and Next.js platforms that want a raw 'Neo-Brutalism' aesthetic. Use this full-page template for a high-contrast experience with pink accents, heavy black borders, and uncompromised structural depth.",
    bestPractices: "Maintain consistent spacing within your design system by respecting the 'bold' layout philosophy. Follow React best practices by pairing this with high-contrast typography. Optimize for performance by managed the multi-layer card renders.",
    whyMatters: "Raw neo-brutalism is a visual statement of digital authenticity and power. This production-ready UI template helpsคุณ build an interface that feels loud and established, breaking away from standard 'soft' design trends.",
    faqs: [
      { question: "What is the difference from 'Neo-Brutalist'?", answer: "The 'Neo-Brutalism' variant focuses on higher contrast and raw, vibrant color pairings (like black and hot pink) compared to the more geometric variant." },
      { question: "Can I change the primary neon?", answer: "Yes, the `accentColor` prop (default #ff006e) allows you to set the primary 'Pop' color for the entire raw interface." },
      { question: "Is it mobile friendly?", answer: "The raw elements stack into a high-impact vertical grid on mobile, ensuring that the bold lines and shadows remain legible and effective." }
    ],
  },
  {
    id: "parallax-masonry",
    name: "Parallax Masonry",
    description:
      "Masonry grid landing page with parallax scrolling effects and dynamic layouts.",
    category: "Core Landing Pages",
    tags: ["parallax", "masonry", "grid", "scrolling"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/ParallaxMasonry",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/ParallaxMasonry.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/ParallaxMasonry.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/ParallaxMasonry/page.tsx"
      ),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#1a1a1a",
        description: "Primary color for grid items.",
      },
      {
        name: "parallaxSpeed",
        type: "number",
        default: "1",
        description: "Speed of parallax scrolling (0.5-2).",
      },
      {
        name: "gridGap",
        type: "string",
        default: "16px",
        description: "Gap between masonry items.",
      },
      {
        name: "enableParallax",
        type: "boolean",
        default: "true",
        description: "Enable parallax scrolling effects.",
      },
    ],
    whenToUse: "Excellent for image-heavy portfolios, architecture firms, and Next.js sites that want a dynamic 'Masonry' aesthetic. Use this full-page template for an immersive experience with varied grid heights, smooth parallax scrolls, and dynamic layouts.",
    bestPractices: "Maintain scalable component architecture by using high-resolution imagery for the parallax layers. Follow React best practices by pairing this with minimalist typography. Optimize for performance by managed the transition lifecycle of the grid items.",
    whyMatters: "Masonry layouts combined with parallax create a sense of momentum and structural depth. This production-ready UI template helpsคุณ build a gallery experience that feels alive and premium, adding visual interest to standard image grids.",
    faqs: [
      { question: "How does the parallax work?", answer: "The component uses Framer Motion's `useScroll` and `useTransform` to apply variable vertical offsets to grid items based on their scroll depth." },
      { question: "Can I adjust the grid gap?", answer: "Yes, the `gridGap` prop allows you to control the 'white space' between the masonry modules for a tighter or airier feel." },
      { question: "Is the masonry true masonry?", answer: "The layout calculates heights dynamically to ensure a clean, alternating masonry flow that adapts to varied image aspect ratios." }
    ],
  },
  {
    id: "playful-brutal",
    name: "Playful Brutal",
    description:
      "Playful neo-brutalist landing page with fun colors and interactive elements.",
    category: "Core Landing Pages",
    tags: ["playful", "brutal", "fun", "interactive"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/PlayfulBrutal",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/PlayfulBrutal.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/PlayfulBrutal.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/PlayfulBrutal/page.tsx"
      ),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#ff006e",
        description: "Playful primary color (pink).",
      },
      {
        name: "secondaryColor",
        type: "string",
        default: "#8338ec",
        description: "Secondary fun color (purple).",
      },
      {
        name: "shadowOffset",
        type: "string",
        default: "8px",
        description: "Offset for brutalist shadows.",
      },
      {
        name: "enableInteractions",
        type: "boolean",
        default: "true",
        description: "Enable playful interactive elements.",
      },
    ],
    whenToUse: "Perfect for young startups, lifestyle brands, and Next.js applications that want a high-energy 'Playful Brutalist' aesthetic. Use this full-page template for a fun experience with pink/purple gradients, bouncy animations, and interactive geometric focal points.",
    bestPractices: "Maintain scalable component architecture by keeping foreground content lightweight and energetic. Follow React best practices by pairing this with bold, playful typography. Optimize for performance by managed the spring-physics animation intensity.",
    whyMatters: "Playful design communicates warmth, friendship, and positive energy. This production-ready UI template helpsคุณ build an interface that feels alive and approachable, improving user retention through visual delight and 'bouncy' interactions.",
    faqs: [
      { question: "What are 'Playful Interactions'?", answer: "The `enableInteractions` prop toggles bouncy hover states and spring-physics animations for all buttons and decorative geometric modules." },
      { question: "Can I adjust the colors?", answer: "Yes, the `primaryColor` and `secondaryColor` props allow you to set the playful palette to any vibrant brand duo." },
      { question: "Is it mobile responsive?", answer: "The playful modules stack into a vertical bouncy grid on mobile, ensuring the high-energy vibe is maintained for touch users." }
    ],
  },
  {
    id: "sketchy",
    name: "Sketchy",
    description:
      "Hand-drawn sketchy landing page with organic lines and creative aesthetics.",
    category: "Core Landing Pages",
    tags: ["sketchy", "hand-drawn", "organic", "creative"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/Sketchy",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/Sketchy.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/Sketchy.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/Sketchy/page.tsx"
      ),
    },
    dependencies: ["next", "framer-motion"],
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
    whenToUse: "Ideal for creative studios, illustrators, and Next.js portfolios that want a high-fidelity 'Sketchy' aesthetic. Use this full-page template for a hand-crafted experience with rough lines, organic textures, and sketchbook-inspired layouts.",
    bestPractices: "Maintain consistent spacing within your design system by using it on soft earth or paper-grain tones. Follow React best practices by pairing it with informal typography. Optimize for performance by managed the rough border renders.",
    whyMatters: "Sketchy design breaks the digital barrier by adding a human, tactile touch to your interface. This production-ready UI template helpsคุณ build a brand identity that feels approachable and experimental, improving user affinity through visual novelty.",
    faqs: [
      { question: "How were the lines made?", answer: "The component uses localized CSS filters and SVG masks to simulate the uneven appearance of physical charcoal or pencil strokes drawn on paper." },
      { question: "Can I adjust the roughness?", answer: "Yes, the `roughness` prop allows you to control how 'clean' or 'organic' the sketch-lines appear throughout the page." },
      { question: "Is the paper texture adjustable?", answer: "The `paperColor` prop allows you to set the background tone, while the grain intensity remains optimized for a high-fidelity sketchbook look." }
    ],
  },
  {
    id: "swiss-style",
    name: "Swiss Style",
    description:
      "Swiss design-inspired landing page with clean typography and grid-based layouts.",
    category: "Core Landing Pages",
    tags: ["swiss", "typography", "grid", "minimal"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/SwissStyle",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/SwissStyle.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/SwissStyle.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/SwissStyle/page.tsx"
      ),
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
        description: "Minimal accent color (red).",
      },
      {
        name: "fontWeight",
        type: "string",
        default: "400",
        description: "Typography weight (300-700).",
      },
      {
        name: "gridColumns",
        type: "number",
        default: "12",
        description: "Number of grid columns.",
      },
    ],
    whenToUse: "Excellent for professional services, architecture firms, and Next.js corporate sites that want a clean 'Swiss Style' aesthetic. Use this full-page template for a sophisticated experience with precise grids, bold Sans-Serif typography, and red accent highlights.",
    bestPractices: "Maintain consistent spacing within your design system by respecting the strict 12-column grid. Follow React best practices by pairing it with bold Helvetica-style typography. Optimize for performance by using efficient CSS grid transforms.",
    whyMatters: "Swiss design (International Typographic Style) communicates structural clarity and professional integrity. This production-ready UI template helpsคุณ build an interface that feels authoritative and timeless, focusing the user's focus on your core message.",
    faqs: [
      { question: "What is the primary font?", answer: "The Swiss aesthetic works best with heavy Sans-Serif fonts; the template is designed to scale with weight-balanced typography (`fontWeight`)." },
      { question: "Can I change the grid columns?", answer: "Yes, the `gridColumns` prop (default 12) allows you to adjust the underlying layout system for more or less complex content structures." },
      { question: "How 'Swiss' is the design?", answer: "The design removes all non-essential decorative elements, relying on precise grids and high-contrast typography to create a premium, editorial atmosphere." }
    ],
  },
  {
    id: "the-edit",
    name: "The Edit",
    description:
      "Editorial landing page with sophisticated design and content-focused layout.",
    category: "Core Landing Pages",
    tags: ["editorial", "sophisticated", "content", "layout"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/TheEdit",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/TheEdit.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/TheEdit.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/TheEdit/page.tsx"
      ),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#000000",
        description: "Primary text color.",
      },
      {
        name: "accentColor",
        type: "string",
        default: "#d4af37",
        description: "Sophisticated accent color (gold).",
      },
      {
        name: "fontFamily",
        type: "string",
        default: "serif",
        description: "Editorial font family.",
      },
      {
        name: "contentWidth",
        type: "string",
        default: "max-w-4xl",
        description: "Content width for focused layout.",
      },
    ],
    whenToUse: "Ideal for selective agencies, high-end portfolios, and Next.js sites that want a sophisticated 'Editorial' aesthetic. Use this full-page template for a content-focused experience with gold accents, Serif typography, and narrow-focus layouts.",
    bestPractices: "Maintain scalable component architecture by keeping typography weights consistent. Follow React best practices by pairing Serif headers with minimal accents. Optimize for performance by managed the centralized content width.",
    whyMatters: "Editorial aesthetics communicate cultural authority and high-end design. This production-ready UI template helpsคุณ build an interface that feels curated and professional, focusing the user's focus on deep-dive content and visual stories.",
    faqs: [
      { question: "What is 'The Edit' style?", answer: "It focuses on a high-fidelity, centered layout (`contentWidth`) that mimics the experience of reading a premium physical design digest." },
      { question: "Can I change the accent?", answer: "Yes, the `accentColor` (default gold) is used for subtle interactive highlights to maintain the premium, editorial atmosphere." },
      { question: "Is it good for long text?", answer: "Absolutely, 'The Edit' is specifically designed for long-form case studies and project summaries where focus is paramount." }
    ],
  },
  {
    id: "wabi-sabi",
    name: "Wabi Sabi",
    description:
      "Japanese aesthetic landing page with imperfect beauty and minimal design.",
    category: "Core Landing Pages",
    tags: ["wabi-sabi", "japanese", "minimal", "imperfect"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/WabiSabi",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/WabiSabi.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/WabiSabi.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/WabiSabi/page.tsx"
      ),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#2d3436",
        description: "Primary natural color (dark gray).",
      },
      {
        name: "accentColor",
        type: "string",
        default: "#a29bfe",
        description: "Subtle accent color (lavender).",
      },
      {
        name: "imperfectionLevel",
        type: "number",
        default: "1",
        description: "Level of imperfect beauty (0.5-2).",
      },
      {
        name: "enableOrganic",
        type: "boolean",
        default: "true",
        description: "Enable organic, imperfect shapes.",
      },
    ],
    whenToUse: "Excellent for wellness apps, creative studios, and Next.js portfolios that want an organic 'Wabi Sabi' aesthetic. Use this full-page template for an immersive experience with imperfect beauty, minimal design, and warm, variable textures.",
    bestPractices: "Maintain consistent spacing within your design system by using it on warm, off-white background tones. Follow React best practices by pairing it with minimal typography. Optimize for performance by managed the organic layer renders.",
    whyMatters: "Wabi-Sabi aesthetics celebrate imperfection and digital warmth. This production-ready UI template helpsคุณ build an interface that feels human and 'lived-in', reflecting a brand identity rooted in simplicity and depth.",
    faqs: [
      { question: "What is 'Wabi Sabi' design?", answer: "It is a Japanese aesthetic centered on the acceptance of transience and imperfection, visually represented here through asymmetric modules and organic tones." },
      { question: "Can I adjust the warmth?", answer: "Yes, the `primaryColor` and `accentColor` props allow you to set the earthy palette to match your brand's atmospheric mood." },
      { question: "Is it good for corporate?", answer: "It works exceptionally well for 'Human-Centered' brands (wellness, architecture, craft) that want to emphasize their organic process over clinical precision." }
    ],
  },
  {
    id: "uilora-mindloop",
    name: "Uilora Mindloop",
    description:
      "A premium, dark monochrome landing page for newsletters and content platforms with cinematic HLS video backgrounds.",
    category: "Core Landing Pages",
    tags: ["mindloop", "monochrome", "premium", "newsletter", "cinematic"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/UiloraMindloop",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/UiloraMindloop.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/UiloraMindloop.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/UiloraMindloop/page.tsx"
      ),
    },
    dependencies: ["framer-motion", "lucide-react", "hls.js"],
    props: [
      {
        name: "className",
        type: "string",
        default: "''",
        description: "Additional CSS classes for the container.",
      },
    ],
    whenToUse: "Perfect for newsletters, content platforms, and technical blogs that want a high-end 'Mindloop' aesthetic. Use this full-page template for an immersive, monochrome experience with cinematic video backgrounds and scroll-driven word animations.",
    bestPractices: "Maintain the monochrome theme by avoiding bright colors. Use high-quality looping videos for the background. Pair with Inter and Instrument Serif fonts for the full premium experience.",
    whyMatters: "Premium monochrome design coupled with cinematic motion creates a deep sense of focus and authority. This production-ready UI template helps you build an interface that feels like a shared journey toward depth and direction.",
    faqs: [
      { question: "How does the HLS video work?", answer: "The CTA section uses `hls.js` to stream cinematic background video, ensuring smooth playback and optimized delivery." },
      { question: "Can I change the videos?", answer: "Yes, you can easily swap the source URLs throughout the component to match your specific brand narrative." },
      { question: "Is it mobile responsive?", answer: "Absolutely, all sections are designed to reflow gracefully while maintaining the atmospheric depth and clarity." }
    ],
  },
  {
    id: "uilora-velorah",
    name: "Uilora Velorah",
    description:
      "A cinematic hero section with a fullscreen looping background video, glassmorphic navigation, and deep navy blue aesthetics.",
    category: "Core Landing Pages",
    tags: ["velorah", "cinematic", "hero", "glassmorphism", "fullscreen-video"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/UiloraVelorah",
    code: {
      tsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/tsx/UiloraVelorah.tsx"
      ),
      jsx: getCode(
        "src/components/CoreLandingPages/CompleteLandingPages/jsx/UiloraVelorah.jsx"
      ),
    },
    usageCode: {
      tsx: getCode(
        "src/app/(routes)/CoreLandingPages/CompleteLandingPages/UiloraVelorah/page.tsx"
      ),
    },
    dependencies: ["framer-motion", "lucide-react"],
    props: [],
    whenToUse: "Ideal for premium brand hero sections, studio portfolios, and high-impact landing pages that want a cinematic, vertically centered focus point.",
    bestPractices: "Use high-quality loopable videos. Pair with Instrument Serif for headings to maintain the high-end editorial look.",
    whyMatters: "Cinematic design creates instantaneous emotional resonance and brand authority. This UI template focuses on the core message while letting the visual depth of video provide the atmosphere.",
    faqs: [
      { question: "Is the video background responsive?", answer: "Yes, it uses `object-cover` to ensure it always fills the viewport regardless of screen size." },
      { question: "How do I change the logo text?", answer: "You can easily edit the 'Uilora' text in the Navbar component within the file." }
    ],
  },
];
