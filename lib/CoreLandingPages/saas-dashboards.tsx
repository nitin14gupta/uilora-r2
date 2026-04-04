import { getCode } from "../getCode";
import { Component } from "../types";

// All SaaS dashboard components from the library
// Total: 18 components

export const saasDashboardComponents: Component[] = [
  {
    id: "claymorphism",
    name: "Claymorphism",
    description: "Soft clay-like dashboard with organic shapes and tactile design elements.",
    category: "Core Landing Pages",
    tags: ["clay", "soft", "organic", "tactile"],
    previewUrl: "/CoreLandingPages/SaaSDashboards/Claymorphism",
    code: {
      tsx: getCode("src/components/CoreLandingPages/SaaSDashboards/tsx/Claymorphism.tsx"),
      jsx: getCode("src/components/CoreLandingPages/SaaSDashboards/jsx/Claymorphism.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/SaaSDashboards/Claymorphism/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#6c5ce7",
        description: "Primary brand color for buttons and accents.",
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "#e0e5ec",
        description: "Background color (light mode neumorphic base).",
      },
      {
        name: "shadowIntensity",
        type: "number",
        default: "1",
        description: "Intensity of clay shadow effects (0.5-2).",
      },
      {
        name: "borderRadius",
        type: "string",
        default: "32px",
        description: "Border radius for clay cards.",
      },
    ],
    whenToUse: "Ideal for creative SaaS, children's apps, and Next.js projects that want a soft, tactile 'Claymorphism' aesthetic. Use this dashboard template for an approachable experience with rounded corners, soft shadows, and organic shapes.",
    bestPractices: "Maintain consistent spacing within your design system by using large border radii and soft colors. Follow React best practices by pairing this with bold, friendly typography. Optimize for performance by using efficient shadow-mask renders.",
    whyMatters: "Claymorphism (Soft Design) communicates warmth and approachability. This production-ready UI template helpsคุณ build an interface that feels tactile and 'friendly', improving user affinity through visual novelty and soft depth.",
    faqs: [
      { question: "What is Claymorphism?", answer: "It is a design trend characterized by soft, rounded elements with inner and outer shadows that simulate the appearance of clay or inflated plastic." },
      { question: "Can I adjust the 'Softness'?", answer: "Yes, the `shadowIntensity` and `borderRadius` props allow you to control how 'squishy' or 'geometric' the modules appear." },
      { question: "Is it mobile responsive?", answer: "The clay cards stack into a clean vertical list on mobile, ensuring the soft tactile feel is maintained for touch interactions." }
    ],
  },
  {
    id: "frost",
    name: "Frost",
    description: "Frosted glass dashboard with icy aesthetics and cool color palette.",
    category: "Core Landing Pages",
    tags: ["frost", "glass", "icy", "cool"],
    previewUrl: "/CoreLandingPages/SaaSDashboards/Frost",
    code: {
      tsx: getCode("src/components/CoreLandingPages/SaaSDashboards/tsx/Frost.tsx"),
      jsx: getCode("src/components/CoreLandingPages/SaaSDashboards/jsx/Frost.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/SaaSDashboards/Frost/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "frostColor",
        type: "string",
        default: "#e0f2fe",
        description: "Icy frost color (light blue).",
      },
      {
        name: "glassBlur",
        type: "string",
        default: "20px",
        description: "Blur intensity for frosted glass.",
      },
      {
        name: "glassOpacity",
        type: "number",
        default: "0.3",
        description: "Opacity of glass elements (0-1).",
      },
      {
        name: "enableFrost",
        type: "boolean",
        default: "true",
        description: "Enable frosted glass effects.",
      },
    ],
    whenToUse: "Excellent for professional services, health apps, and Next.js sites that want a clean 'Frost' aesthetic. Use this dashboard template for a sophisticated experience with semi-transparent modules, icy blues, and smooth blur effects.",
    bestPractices: "Follow React best practices by pairing this with high-contrast foreground text. Maintain scalable component architecture by keeping the glass-blur consistent. Optimize for performance by managed the `backdrop-filter` intensity.",
    whyMatters: "Frost aesthetics create a sense of digital clarity and professional premium. This production-ready UI template helpsคุณ build an interface that feels lightweight and high-end, improving the perceived quality of your SaaS platform.",
    faqs: [
      { question: "How is 'Frost' different from Glass?", answer: "The Frost aesthetic uses cooler, icy blue tints (`frostColor`) and higher blur values to simulate a colder, frosted glass surface." },
      { question: "Can I change the transparency?", answer: "Yes, the `glassOpacity` prop (default 0.3) allows you to control how much of the background is visible through the frosted containers." },
      { question: "Does it work on dark mode?", answer: "While designed for 'Icy' light themes, you can adjust the `frostColor` to darker tones for a premium 'Night Frost' feel." }
    ],
  },
  {
    id: "gamified",
    name: "Gamified",
    description: "Gamification-focused dashboard with game-like elements and interactive features.",
    category: "Core Landing Pages",
    tags: ["gamified", "game", "interactive", "fun"],
    previewUrl: "/CoreLandingPages/SaaSDashboards/Gamified",
    code: {
      tsx: getCode("src/components/CoreLandingPages/SaaSDashboards/tsx/Gamified.tsx"),
      jsx: getCode("src/components/CoreLandingPages/SaaSDashboards/jsx/Gamified.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/SaaSDashboards/Gamified/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#f43f5e",
        description: "Primary game color (red/pink).",
      },
      {
        name: "accentColor",
        type: "string",
        default: "#facc15",
        description: "Accent color for rewards (yellow).",
      },
      {
        name: "enableAchievements",
        type: "boolean",
        default: "true",
        description: "Enable achievement badges and rewards.",
      },
      {
        name: "animationSpeed",
        type: "number",
        default: "1",
        description: "Speed of game-like animations.",
      },
    ],
    whenToUse: "Perfect for education tools, fitness apps, and Next.js platforms that want an engaging 'Gamified' aesthetic. Use this dashboard template for an interactive experience with reward badges, progress bars, and high-energy animations.",
    bestPractices: "Maintain scalable component architecture by keeping reward labels actionable and clear. Follow React best practices by managed the achievement states locally. Optimize for performance by managed the spring-physics animation cycles.",
    whyMatters: "Gamification improves user retention and engagement through positive feedback loops. This production-ready UI template helpsคุณ build an interface that feels rewarding and fun, turning data entry into a game-like experience.",
    faqs: [
      { question: "What are achievement badges?", answer: "The `enableAchievements` prop toggles stylized reward modules that can be connected to your backend to show user milestones and progress." },
      { question: "Can I adjust the energy level?", answer: "Yes, the `animationSpeed` prop allows you to control the frequency and 'bounce' of the game-inspired UI transitions." },
      { question: "Is it good for corporations?", answer: "It works well for 'Internal Corporate' tools (training, HR portals) that want to increase employee engagement through visual rewards." }
    ],
  },
  {
    id: "glassmorphism",
    name: "Glassmorphism",
    description: "Glassmorphism dashboard with frosted glass effects and modern aesthetics.",
    category: "Core Landing Pages",
    tags: ["glassmorphism", "glass", "frosted", "modern"],
    previewUrl: "/CoreLandingPages/SaaSDashboards/Glassmorphism",
    code: {
      tsx: getCode("src/components/CoreLandingPages/SaaSDashboards/tsx/Glassmorphism.tsx"),
      jsx: getCode("src/components/CoreLandingPages/SaaSDashboards/jsx/Glassmorphism.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/SaaSDashboards/Glassmorphism/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
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
    whenToUse: "Ideal for high-end digital products, portfolios, and Next.js dashboards that want a modern 'Glassmorphism' aesthetic. Use this template for a sophisticated experience with frosty blurs, gradient borders, and deep background contrasts.",
    bestPractices: "Maintain consistent spacing within your design system by using it on vibrant or photo-based backgrounds. Follow React best practices by pairing it with clear typography. Optimize for performance by managed the backdrop-blur intensity.",
    whyMatters: "Glassmorphism creates a sense of spatial depth and digital premium. This production-ready UI template helpsคุณ build an interface that feels lightweight and advanced, reflecting a brand identity rooted in innovation.",
    faqs: [
      { question: "How is the glass effect made?", answer: "The component uses `backdrop-filter: blur()` and semi-transparent backgrounds to simulate physical frosted glass panes." },
      { question: "Can I change the background?", answer: "Yes, the `backgroundColor` prop defines the canvas behind the glass, which is vital for achieving the desired contrast and reflection." },
      { question: "Is it accessible?", answer: "The `borderColor` prop (default 10% white) ensures that glass containers remain structurally visible even on varied background patterns." }
    ],
  },
  {
    id: "gooey-background",
    name: "Gooey Background",
    description: "Dashboard with gooey, organic background effects and fluid animations.",
    category: "Core Landing Pages",
    tags: ["gooey", "organic", "fluid", "background"],
    previewUrl: "/CoreLandingPages/SaaSDashboards/GooeyBackground",
    code: {
      tsx: getCode("src/components/CoreLandingPages/SaaSDashboards/tsx/GooeyBackground.tsx"),
      jsx: getCode("src/components/CoreLandingPages/SaaSDashboards/jsx/GooeyBackground.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/SaaSDashboards/GooeyBackground/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "gooColor",
        type: "string",
        default: "#3b82f6",
        description: "Color of gooey background elements.",
      },
      {
        name: "viscosity",
        type: "number",
        default: "1",
        description: "Viscosity of goo effect (0.5-2).",
      },
      {
        name: "enableFluid",
        type: "boolean",
        default: "true",
        description: "Enable fluid background animations.",
      },
      {
        name: "animationSpeed",
        type: "number",
        default: "1",
        description: "Speed of gooey animations.",
      },
    ],
    whenToUse: "Excellent for creative labs, experimental apps, and Next.js projects that want an organic 'Gooey' aesthetic. Use this dashboard template for an immersive experience with liquid background shapes, fluid motion, and organic UI containers.",
    bestPractices: "Follow React best practices by pairing this with high-contrast foreground text. Maintain scalable component architecture by keeping the gooey shapes consistent. Optimize for performance by managed the SVG blob rendering.",
    whyMatters: "Gooey design (Metaballs) communicates creativity and structural freedom. This production-ready UI template helpsคุณ build an interface that feels alive and 'liquid', breaking the standard geometric rules of digital design.",
    faqs: [
      { question: "How does the 'Goo' work?", answer: "The component uses SVG filters to apply a 'blur and contrast' effect to multiple moving circles, creating the illusion of merging liquid drops." },
      { question: "Is the viscosity adjustable?", answer: "Yes, the `viscosity` prop (0.5-2) controls how much the shapes 'stretch' and 'bond' when they pass near each other." },
      { question: "Can I disable the fluid?", answer: "The `enableFluid` prop allows you to toggle the background motion off for a static, but still organic, gooey layout." }
    ],
  },
  {
    id: "hyperpop",
    name: "HyperPop",
    description: "Vibrant hyperpop dashboard with bold colors and energetic design.",
    category: "Core Landing Pages",
    tags: ["hyperpop", "vibrant", "bold", "energetic"],
    previewUrl: "/CoreLandingPages/SaaSDashboards/HyperPop",
    code: {
      tsx: getCode("src/components/CoreLandingPages/SaaSDashboards/tsx/HyperPop.tsx"),
      jsx: getCode("src/components/CoreLandingPages/SaaSDashboards/jsx/HyperPop.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/SaaSDashboards/HyperPop/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#ff006e",
        description: "Vibrant primary color (pink).",
      },
      {
        name: "secondaryColor",
        type: "string",
        default: "#8338ec",
        description: "Energetic secondary color (purple).",
      },
      {
        name: "accentColor",
        type: "string",
        default: "#00f5ff",
        description: "Bold accent color (cyan).",
      },
      {
        name: "energyLevel",
        type: "number",
        default: "1",
        description: "Level of energetic animations (0.5-2).",
      },
    ],
    whenToUse: "Perfect for young music startups, vibrant portfolios, and Next.js projects that want a high-energy 'HyperPop' aesthetic. Use this dashboard template for a bold experience with neon pinks, energetic purples, and high-speed animations.",
    bestPractices: "Maintain scalable component architecture by keeping foreground content lightweight and loud. Follow React best practices by pairing this with bold typography. Optimize for performance by managed the animation intensity.",
    whyMatters: "HyperPop aesthetics communicate vibrancy, community, and digital energy. This production-ready UI template helpsคุณ build an interface that feels loud and APPROACHABLE, improving user retention through visual delight.",
    faqs: [
      { question: "What is the 'Energy Level'?", answer: "The `energyLevel` prop controls the spring-physics values and frequency of the bouncy UI modules, ranging from subtle to high-energy." },
      { question: "Can I adjust the neon tones?", answer: "Yes, the `primaryColor`, `secondaryColor`, and `accentColor` props allow you to set the vibrant 'Pop' palette to any brand trio." },
      { question: "Is it mobile responsive?", answer: "The HyperPop modules stack into a high-energy vertical list on mobile, ensuring the vibrant energy is maintained for touch users." }
    ],
  },
  {
    id: "industry-standard",
    name: "Industry Standard",
    description: "Professional industry-standard dashboard with clean, corporate design.",
    category: "Core Landing Pages",
    tags: ["industry", "standard", "professional", "corporate"],
    previewUrl: "/CoreLandingPages/SaaSDashboards/IndustryStandard",
    code: {
      tsx: getCode("src/components/CoreLandingPages/SaaSDashboards/tsx/IndustryStandard.tsx"),
      jsx: getCode("src/components/CoreLandingPages/SaaSDashboards/jsx/IndustryStandard.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/SaaSDashboards/IndustryStandard/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#1a1a1a",
        description: "Primary corporate color (dark).",
      },
      {
        name: "accentColor",
        type: "string",
        default: "#3b82f6",
        description: "Professional accent color (blue).",
      },
      {
        name: "fontFamily",
        type: "string",
        default: "sans-serif",
        description: "Corporate font family.",
      },
      {
        name: "enableAnimations",
        type: "boolean",
        default: "true",
        description: "Enable professional animations.",
      },
    ],
    whenToUse: "Ideal for enterprise tools, B2B platforms, and Next.js applications that want an 'Industry Standard' aesthetic. Use this dashboard template for a professional experience with clean grids, corporate typography, and localized blue accents.",
    bestPractices: "Maintain consistent spacing within your design system by respecting the strict corporate guidelines. Follow React best practices by pairing this with standard Sans-Serif typography. Optimize for performance by using efficient layout transforms.",
    whyMatters: "Industry-standard design communicates professional integrity and structural clarity. This production-ready UI template helpsคุณ build an interface that feels authoritative and trustworthy, reflecting a brand identity rooted in excellence.",
    faqs: [
      { question: "Is it good for complex data?", answer: "Yes, the 'Industry Standard' layout is specifically optimized for high-density data tables and analytics modules common in corporate SaaS." },
      { question: "Can I adjust the primary tone?", answer: "The `primaryColor` (default dark) sets the tone for sidebar and header elements, allowing you to match any corporate brand identity." },
      { question: "What animations are included?", answer: "The `enableAnimations` prop toggles professional, low-friction transitions that improve UX without feeling distracting or 'unprofessional'." }
    ],
  },
  {
    id: "lumina",
    name: "Lumina",
    description: "Luminous dashboard with glowing effects and light-based design elements.",
    category: "Core Landing Pages",
    tags: ["lumina", "luminous", "glow", "light"],
    previewUrl: "/CoreLandingPages/SaaSDashboards/Lumina",
    code: {
      tsx: getCode("src/components/CoreLandingPages/SaaSDashboards/tsx/Lumina.tsx"),
      jsx: getCode("src/components/CoreLandingPages/SaaSDashboards/jsx/Lumina.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/SaaSDashboards/Lumina/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "glowColor",
        type: "string",
        default: "#fbbf24",
        description: "Luminous glow color (gold/yellow).",
      },
      {
        name: "glowIntensity",
        type: "number",
        default: "1",
        description: "Intensity of glow effects (0-2).",
      },
      {
        name: "backgroundColor",
        type: "string",
        default: "#0a0a0a",
        description: "Dark background for glow contrast.",
      },
      {
        name: "enableGlow",
        type: "boolean",
        default: "true",
        description: "Enable luminous glow effects.",
      },
    ],
    whenToUse: "Excellent for gaming dashboards, creative labs, and Next.js projects that want a 'Lumina' aesthetic. Use this dashboard template for an immersive experience with glowing focal points, dark background contrasts, and luminous UI elements.",
    bestPractices: "Follow React best practices by pairing this with dark themes only (for glow contrast). Maintain scalable component architecture by keeping the glow intensity balanced. Optimize for performance by managed the filter-blur renders.",
    whyMatters: "Luminous design (Lumina) communicates energy and digital 'light'. This production-ready UI template helpsคุณ build an interface that feels advanced and high-energy, adding a distinct 'Neon' signature to your SaaS platform.",
    faqs: [
      { question: "How does the 'Glow' work?", answer: "The component uses layered box-shadows and CSS filters (`glowColor`) to simulate localized environmental lighting around primary modules." },
      { question: "Can I adjust the brightness?", answer: "Yes, the `glowIntensity` prop (0-2) allows you to control the 'Heat' of the luminous effects across the entire dashboard." },
      { question: "Is it accessible?", answer: "While glowy, the primary text remains high-contrast against the `backgroundColor` to ensure legibility is never sacrificed for aesthetics." }
    ],
  },
  {
    id: "mode-switcher",
    name: "Mode Switcher",
    description: "Dashboard with theme mode switcher and adaptive design elements.",
    category: "Core Landing Pages",
    tags: ["mode", "switcher", "theme", "adaptive"],
    previewUrl: "/CoreLandingPages/SaaSDashboards/ModeSwitcher",
    code: {
      tsx: getCode("src/components/CoreLandingPages/SaaSDashboards/tsx/ModeSwitcher.tsx"),
      jsx: getCode("src/components/CoreLandingPages/SaaSDashboards/jsx/ModeSwitcher.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/SaaSDashboards/ModeSwitcher/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "lightModeColor",
        type: "string",
        default: "#ffffff",
        description: "Light mode background color.",
      },
      {
        name: "darkModeColor",
        type: "string",
        default: "#0a0a0a",
        description: "Dark mode background color.",
      },
      {
        name: "accentColor",
        type: "string",
        default: "#3b82f6",
        description: "Accent color for both modes.",
      },
      {
        name: "defaultMode",
        type: "string",
        default: "light",
        description: "Default theme mode: 'light' or 'dark'.",
      },
    ],
    whenToUse: "Perfect for developer tools, content platforms, and Next.js applications that require a robust 'Mode Switcher' aesthetic. Use this dashboard template for an adaptive experience where users can toggle between light and dark themes seamlessly.",
    bestPractices: "Maintain consistent spacing within your design system by using it for primary user settings. Follow React best practices by managed the global theme state. Optimize for performance by using CSS variables for theme-aware tokens.",
    whyMatters: "Theme switching (Mode Switcher) improves user comfort and accessibility. This production-ready UI template helpsคุณ build an interface that respects user preferences, improving long-term engagement and reducing eye strain.",
    faqs: [
      { question: "How does the toggle work?", answer: "The component handles the transition between `lightModeColor` and `darkModeColor` using smooth Framer Motion transitions and adaptive CSS tokens." },
      { question: "Can I set a default?", answer: "Yes, the `defaultMode` prop allows you to force a 'light' or 'dark' initial state for first-time visitors to your SaaS dashboard." },
      { question: "Is the accent color shared?", answer: "The `accentColor` (default blue) remains consistent across both modes to ensure brand continuity during the theme transition." }
    ],
  },
  {
    id: "paper",
    name: "Paper",
    description: "Paper-textured dashboard with material design aesthetics.",
    category: "Core Landing Pages",
    tags: ["paper", "material", "texture", "design"],
    previewUrl: "/CoreLandingPages/SaaSDashboards/Paper",
    code: {
      tsx: getCode("src/components/CoreLandingPages/SaaSDashboards/tsx/Paper.tsx"),
      jsx: getCode("src/components/CoreLandingPages/SaaSDashboards/jsx/Paper.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/SaaSDashboards/Paper/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "paperColor",
        type: "string",
        default: "#fefefe",
        description: "Paper background color (off-white).",
      },
      {
        name: "textureIntensity",
        type: "number",
        default: "1",
        description: "Intensity of paper texture (0-2).",
      },
      {
        name: "shadowElevation",
        type: "string",
        default: "2",
        description: "Material design shadow elevation (0-24).",
      },
      {
        name: "enableTexture",
        type: "boolean",
        default: "true",
        description: "Enable paper texture effects.",
      },
    ],
    whenToUse: "Ideal for note-taking apps, creative journals, and Next.js projects that want a tactile 'Paper' aesthetic. Use this dashboard template for a hand-crafted experience with material elevation, soft paper textures, and off-white tones.",
    bestPractices: "Maintain scalable component architecture by keeping typography informal but clean. Follow React best practices by pairing this with material-design icons. Optimize for performance by managed the grain-overlay intensity.",
    whyMatters: "Paper aesthetics (Material Design inspired) celebrate the tactile history of communication. This production-ready UI template helpsคุณ build an interface that feels physical and 'real', improving user focus through familiar textures.",
    faqs: [
      { question: "Is the texture real?", answer: "Yes, the component features a subtle `textureIntensity` overlay that simulates the organic grain of premium physical paper stock." },
      { question: "What is elevation?", answer: "The `shadowElevation` prop (0-24) uses standard Material Design shadow logic to define how much a 'Paper' module 'floats' above the canvas." },
      { question: "Can I change the paper tone?", answer: "The `paperColor` prop allows you to adjust the base white to more earthy or warmer 'Parchment' tones while keeping the texture depth." }
    ],
  },
  {
    id: "paper-glass",
    name: "Paper Glass",
    description: "Hybrid dashboard combining paper textures with glassmorphism effects.",
    category: "Core Landing Pages",
    tags: ["paper", "glass", "hybrid", "texture"],
    previewUrl: "/CoreLandingPages/SaaSDashboards/PaperGlass",
    code: {
      tsx: getCode("src/components/CoreLandingPages/SaaSDashboards/tsx/PaperGlass.tsx"),
      jsx: getCode("src/components/CoreLandingPages/SaaSDashboards/jsx/PaperGlass.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/SaaSDashboards/PaperGlass/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "paperColor",
        type: "string",
        default: "#fefefe",
        description: "Paper background color.",
      },
      {
        name: "glassBlur",
        type: "string",
        default: "20px",
        description: "Blur for glassmorphism effect.",
      },
      {
        name: "glassOpacity",
        type: "number",
        default: "0.3",
        description: "Opacity of glass elements (0-1).",
      },
      {
        name: "textureIntensity",
        type: "number",
        default: "1",
        description: "Intensity of paper texture (0-2).",
      },
    ],
    whenToUse: "Excellent for modern journals, fashion SaaS, and Next.js labs that want a hybrid 'Paper Glass' aesthetic. Use this dashboard template for an immersive experience with semi-transparent glass modules layered over tactile paper textures.",
    bestPractices: "Follow React best practices by pairing this with high-contrast foreground text. Maintain scalable component architecture by keeping the paper/glass ratio balanced. Optimize for performance by managed the multi-layer blur renders.",
    whyMatters: "Hybrid design (Paper + Glass) communicates creativity and digital innovation. This production-ready UI template helpsคุณ build an interface that feels both tactile and futuristic, adding a unique signature to your SaaS platform.",
    faqs: [
      { question: "How does the hybrid work?", answer: "The template layers `glassBlur` containers over a textured `paperColor` background, creating a deep spatial sense of semi-transparent layers on top of physical stock." },
      { question: "Can I adjust the blur?", answer: "Yes, the `glassBlur` prop allows you to control the depth of the transparency effect for the foreground UI modules." },
      { question: "Is it mobile responsive?", answer: "The hybrid modules are optimized for mobile, ensuring that the complex blur and texture layers maintain performance on touch devices." }
    ],
  },
  {
    id: "paper-pop",
    name: "Paper Pop",
    description: "Playful paper-themed dashboard with pop art aesthetics.",
    category: "Core Landing Pages",
    tags: ["paper", "pop", "playful", "art"],
    previewUrl: "/CoreLandingPages/SaaSDashboards/PaperPop",
    code: {
      tsx: getCode("src/components/CoreLandingPages/SaaSDashboards/tsx/PaperPop.tsx"),
      jsx: getCode("src/components/CoreLandingPages/SaaSDashboards/jsx/PaperPop.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/SaaSDashboards/PaperPop/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "popColor1",
        type: "string",
        default: "#ff006e",
        description: "First pop art color (pink).",
      },
      {
        name: "popColor2",
        type: "string",
        default: "#8338ec",
        description: "Second pop art color (purple).",
      },
      {
        name: "popColor3",
        type: "string",
        default: "#facc15",
        description: "Third pop art color (yellow).",
      },
      {
        name: "enablePop",
        type: "boolean",
        default: "true",
        description: "Enable playful pop art effects.",
      },
    ],
    whenToUse: "Perfect for young startups, creative portfolios, and Next.js projects that want a high-energy 'Paper Pop' aesthetic. Use this dashboard template for a fun experience with pop-art colors, paper textures, and vibrant geometric focal points.",
    bestPractices: "Maintain scalable component architecture by keeping foreground content lightweight and energetic. Follow React best practices by pairing this with bold, playful typography. Optimize for performance by managed the pop-art color contrasts.",
    whyMatters: "Pop art design communicates warmth, friendship, and positive energy. This production-ready UI template helpsคุณ build an interface that feels alive and approachable, improving user retention through visual delight.",
    faqs: [
      { question: "What are 'Pop' colors?", answer: "The `popColor1-3` props allow you to set the vibrant trio that defines the energetic, pop-inspired highlights throughout the paper interface." },
      { question: "Can I adjust the energy?", answer: "The `enablePop` prop allows you to toggle the vibrant accents off if you require a more minimalist paper-focused layout." },
      { question: "Is it mobile responsive?", answer: "The pop-art modules stack into a high-energy vertical list on mobile, ensuring the vibrant energy is maintained for touch users." }
    ],
  },
  {
    id: "the-editorial",
    name: "The Editorial",
    description: "Editorial-style dashboard with magazine layout and content-focused design.",
    category: "Core Landing Pages",
    tags: ["editorial", "magazine", "content", "layout"],
    previewUrl: "/CoreLandingPages/SaaSDashboards/TheEditorial",
    code: {
      tsx: getCode("src/components/CoreLandingPages/SaaSDashboards/tsx/TheEditorial.tsx"),
      jsx: getCode("src/components/CoreLandingPages/SaaSDashboards/jsx/TheEditorial.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/SaaSDashboards/TheEditorial/page.tsx"),
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
        description: "Editorial font family.",
      },
      {
        name: "layoutStyle",
        type: "string",
        default: "magazine",
        description: "Layout style: 'magazine', 'grid', or 'asymmetric'.",
      },
    ],
    whenToUse: "Excellent for marketing dashboards, editorial projects, and Next.js sites that want a sophisticated 'Editorial' aesthetic. Use this dashboard template for a content-rich experience with print-inspired typography, multi-column layouts, and red accent highlights.",
    bestPractices: "Maintain scalable component architecture by keeping typography weights consistent. Follow React best practices by pairing Serif headers with minimal design elements. Optimize for performance by managed the multi-column layout logic.",
    whyMatters: "Editorial aesthetics communicate cultural authority and high-end design. This production-ready UI template helpsคุณ build an interface that feels curated and professional, focusing the user's focus on deep-dive analytics and visual stories.",
    faqs: [
      { question: "Can I change the font?", answer: "The `fontFamily` prop (default 'Serif') allows you to toggle the dashboard's typography to match your brand's editorial or technical style." },
      { question: "What is the 'Magazine' layout?", answer: "The `layoutStyle` prop triggers a specific asymmetric grid that mimics the varied page layouts found in high-end design magazines." },
      { question: "Is it good for SEO?", answer: "Yes, the template uses semantic HTML structures that ensure your dashboard content is easily parsed and prioritized by search engine crawlers." }
    ],
  },
  {
    id: "wozega",
    name: "Wozega",
    description: "Unique Wozega dashboard with distinctive design and modern aesthetics.",
    category: "Core Landing Pages",
    tags: ["wozega", "unique", "distinctive", "modern"],
    previewUrl: "/CoreLandingPages/SaaSDashboards/Wozega",
    code: {
      tsx: getCode("src/components/CoreLandingPages/SaaSDashboards/tsx/Wozega.tsx"),
      jsx: getCode("src/components/CoreLandingPages/SaaSDashboards/jsx/Wozega.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/SaaSDashboards/Wozega/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#3b82f6",
        description: "Primary modern color.",
      },
      {
        name: "accentColor",
        type: "string",
        default: "#ec4899",
        description: "Distinctive accent color.",
      },
      {
        name: "enableAnimations",
        type: "boolean",
        default: "true",
        description: "Enable distinctive animations.",
      },
      {
        name: "animationSpeed",
        type: "number",
        default: "1",
        description: "Speed of modern animations.",
      },
    ],
    whenToUse: "Perfect for tech startups, product launches, and Next.js applications that want a unique 'Wozega' aesthetic. Use this dashboard template for a high-fidelity experience with pink/blue highlights, distinctive animations, and modern UI modules.",
    bestPractices: "Follow React best practices by pairing this with dark-themed hero sections. Maintain scalable component architecture by keeping branding consistent. Optimize for performance by managed the animation-speed multiplier.",
    whyMatters: "Wozega aesthetics communicate evolution and digital momentum. This production-ready UI template helpsคุณ build an interface that feels established and modern, reflecting a brand identity rooted in the future.",
    faqs: [
      { question: "What are 'Distinctive' animations?", answer: "The component features multi-layered transitions and state-aware interactions (`enableAnimations`) that feel more 'premium' than standard v1 layouts." },
      { question: "Can I adjust the highlight colors?", answer: "Yes, the `primaryColor` and `accentColor` props allow you to set the vibrant 'Nexus' palette to match your brand's data theme." },
      { question: "Is it mobile friendly?", answer: "The Wozega modules are optimized to remain visually impactful without sacrificing performance on mobile GPUs." }
    ],
  },
  {
    id: "y2k",
    name: "Y2K",
    description: "Y2K-inspired dashboard with millennium aesthetics and futuristic design.",
    category: "Core Landing Pages",
    tags: ["y2k", "millennium", "futuristic", "retro"],
    previewUrl: "/CoreLandingPages/SaaSDashboards/Y2K",
    code: {
      tsx: getCode("src/components/CoreLandingPages/SaaSDashboards/tsx/Y2K.tsx"),
      jsx: getCode("src/components/CoreLandingPages/SaaSDashboards/jsx/Y2K.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/SaaSDashboards/Y2K/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "y2kColor1",
        type: "string",
        default: "#00f5ff",
        description: "First Y2K color (cyan).",
      },
      {
        name: "y2kColor2",
        type: "string",
        default: "#ff006e",
        description: "Second Y2K color (pink).",
      },
      {
        name: "glowIntensity",
        type: "number",
        default: "1",
        description: "Intensity of futuristic glow (0-2).",
      },
      {
        name: "enableMillennium",
        type: "boolean",
        default: "true",
        description: "Enable Y2K millennium effects.",
      },
    ],
    whenToUse: "Excellent for gaming dashboards, creative labs, and Next.js projects that want a futuristic 'Y2K' aesthetic. Use this dashboard template for an immersive experience with cyan/pink highlights, futuristic glow effects, and millennium-inspired design elements.",
    bestPractices: "Follow React best practices by pairing this with dark themes only (for glow contrast). Maintain scalable component architecture by keeping the glow intensity balanced. Optimize for performance by managed the filter-blur renders.",
    whyMatters: "Y2K aesthetics communicate energy and digital 'light'. This production-ready UI template helpsคุณ build an interface that feels advanced and high-energy, adding a distinct 'Millennium' signature to your SaaS platform.",
    faqs: [
      { question: "How does the 'Y2K' glow work?", answer: "The component uses layered box-shadows and localized CSS filters to simulate the environmental lighting of futuristic millennium interfaces." },
      { question: "Can I adjust the brightness?", answer: "Yes, the `glowIntensity` prop (0-2) allows you to control the 'Heat' of the futuristic effects across the entire Y2K dashboard." },
      { question: "Is the millennium effect real?", answer: "The `enableMillennium` prop toggles stylized Y2K-inspired UI ornaments and patterns that reinforce the futuristic, millennium-era mood." }
    ],
  },
];

