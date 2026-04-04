import { Component } from "../types";

// All complete landing page components from the library
// Total: 21 components

export const completeLandingPageComponentsMetadata: Component[] = [
  {
    id: "awwwards",
    name: "Awwwards",
    description:
      "Award-winning complete landing page with premium design and smooth animations. Inspired by Awwwards showcases.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["awwwards", "premium", "award-winning", "showcase"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/Awwwards",
    code: { tsx: "" },
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
  },
  {
    id: "brutalism",
    name: "Brutalism",
    description:
      "Bold, high-contrast landing page with neo-brutalist design principles. Thick borders and hard shadows.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["brutalism", "bold", "high-contrast", "neo-brutalist"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/Brutalism",
    code: {
      tsx: "", // Component code - will be filled later
    },
    usageCode: {
      tsx: "", // Usage code - how to import and use - will be filled later
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
  },
  {
    id: "chrome-liquid",
    name: "Chrome Liquid",
    description:
      "Liquid chrome effect landing page with metallic reflections and fluid animations.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["chrome", "liquid", "metallic", "reflection"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/ChromeLiquid",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
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
  },
  {
    id: "dimensions",
    name: "Dimensions",
    description:
      "Multi-dimensional landing page with depth and perspective effects.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["dimensions", "3d", "depth", "perspective"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/DIMENSIONS",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
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
  },
  {
    id: "disordered-grid",
    name: "Disordered Grid",
    description:
      "Asymmetric grid layout landing page with dynamic positioning and organic flow.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["grid", "asymmetric", "organic", "dynamic"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/DisorderedGrid",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
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
  },
  {
    id: "energy-beam",
    name: "Energy Beam",
    description:
      "Futuristic landing page with energy beam effects and sci-fi aesthetics.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["energy", "beam", "futuristic", "sci-fi"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/EnergyBeam",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
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
  },
  {
    id: "hand-drawn",
    name: "Hand Drawn",
    description:
      "Sketchy, hand-drawn style landing page with organic, wobbly lines and creative aesthetics.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["hand-drawn", "sketchy", "organic", "creative"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/HandDrawn",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
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
  },
  {
    id: "huly",
    name: "Huly",
    description:
      "Modern, minimalist landing page with clean design and smooth animations.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["minimal", "modern", "clean", "smooth"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/Huly",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
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
  },
  {
    id: "invisible-dimension",
    name: "Invisible Dimension",
    description:
      "Abstract landing page with invisible elements and dimensional effects.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["abstract", "invisible", "dimensional", "experimental"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/InvisibleDimension",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
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
  },
  {
    id: "kinetic-void",
    name: "Kinetic Void",
    description:
      "Dynamic landing page with kinetic typography and void space effects.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["kinetic", "void", "typography", "dynamic"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/KineticVoid",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
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
  },
  {
    id: "magazine",
    name: "Magazine",
    description:
      "Editorial-style landing page inspired by magazine layouts and print design.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["magazine", "editorial", "print", "layout"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/Magazine",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
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
  },
  {
    id: "magnetic-cursor",
    name: "Magnetic Cursor",
    description:
      "Interactive landing page with magnetic cursor effects that attract elements.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["magnetic", "cursor", "interactive", "attraction"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/MagneticCursor",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
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
  },
  {
    id: "neo-brutalist",
    name: "Neo Brutalist",
    description:
      "Modern neo-brutalist landing page with bold colors and geometric shapes.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["neo-brutalist", "bold", "geometric", "modern"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/Neo-Brutalist",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
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
  },
  {
    id: "neo-brutalism",
    name: "Neo Brutalism",
    description:
      "Classic neo-brutalism landing page with high contrast and raw aesthetics.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["neo-brutalism", "high-contrast", "raw", "bold"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/NeoBrutalism",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
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
  },
  {
    id: "parallax-masonry",
    name: "Parallax Masonry",
    description:
      "Masonry grid landing page with parallax scrolling effects and dynamic layouts.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["parallax", "masonry", "grid", "scrolling"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/ParallaxMasonry",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
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
  },
  {
    id: "playful-brutal",
    name: "Playful Brutal",
    description:
      "Playful neo-brutalist landing page with fun colors and interactive elements.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["playful", "brutal", "fun", "interactive"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/PlayfulBrutal",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
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
  },
  {
    id: "sketchy",
    name: "Sketchy",
    description:
      "Hand-drawn sketchy landing page with organic lines and creative aesthetics.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["sketchy", "hand-drawn", "organic", "creative"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/Sketchy",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
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
  },
  {
    id: "swiss-style",
    name: "Swiss Style",
    description:
      "Swiss design-inspired landing page with clean typography and grid-based layouts.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["swiss", "typography", "grid", "minimal"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/SwissStyle",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
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
  },
  {
    id: "the-edit",
    name: "The Edit",
    description:
      "Editorial landing page with sophisticated design and content-focused layout.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["editorial", "sophisticated", "content", "layout"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/TheEdit",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
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
  },
  {
    id: "wabi-sabi",
    name: "Wabi Sabi",
    description:
      "Japanese aesthetic landing page with imperfect beauty and minimal design.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["wabi-sabi", "japanese", "minimal", "imperfect"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/WabiSabi",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
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
  },
  {
    id: "uilora-mindloop",
    name: "Uilora Mindloop",
    description:
      "A premium, dark monochrome landing page for newsletters and content platforms with cinematic HLS video backgrounds.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["mindloop", "monochrome", "premium", "newsletter", "cinematic"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/UiloraMindloop",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
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
  },
  {
    id: "uilora-velorah",
    name: "Uilora Velorah",
    description:
      "A cinematic hero section with a fullscreen looping background video, glassmorphic navigation, and deep navy blue aesthetics.",
    category: "Core Landing Pages",
    installType: "cli",
    tags: ["velorah", "cinematic", "hero", "glassmorphism", "fullscreen-video"],
    previewUrl: "/CoreLandingPages/CompleteLandingPages/UiloraVelorah",
    code: {
      tsx: "",
    },
    usageCode: {
      tsx: "",
    },
    dependencies: ["framer-motion", "lucide-react"],
    props: [],
  },
];
