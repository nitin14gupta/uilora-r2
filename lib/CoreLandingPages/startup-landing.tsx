import { getCode } from "../getCode";
import { Component } from "../types";

// All startup landing page components from the library
// Total: 10 components

export const startupLandingComponents: Component[] = [
  {
    id: "brutalism",
    name: "Brutalism",
    description: "Bold neo-brutalist landing page with high contrast and geometric shapes.",
    category: "Core Landing Pages",
    tags: ["brutalism", "bold", "geometric", "high-contrast"],
    previewUrl: "/CoreLandingPages/StartupLandingPages/Brutalism",
    code: {
      tsx: getCode("src/components/CoreLandingPages/StartupLandingPages/tsx/Brutalism.tsx"),
      jsx: getCode("src/components/CoreLandingPages/StartupLandingPages/jsx/Brutalism.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/StartupLandingPages/Brutalism/page.tsx"),
    },
    dependencies: ["next", "framer-motion", "gsap", "lenis"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#121212",
        description: "Primary dark color.",
      },
      {
        name: "accentColor",
        type: "string",
        default: "#ccff00",
        description: "High contrast accent color (lime).",
      },
      {
        name: "secondaryColor",
        type: "string",
        default: "#a855f7",
        description: "Secondary accent color (purple).",
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
    whenToUse: "Perfect for bold startups, NFT marketplaces, and Next.js applications that want a high-energy 'Brutalism' aesthetic. Use this full-page template for a high-contrast experience with geometric shapes, lime accents, and thick architectural borders.",
    bestPractices: "Maintain scalable component architecture by keeping labels short and colors high-contrast. Follow React best practices by pairing this with bold typography. Optimize for performance by using GSAP for the complex grid transforms.",
    whyMatters: "Neo-brutalist aesthetics communicate structural honesty and digital energy. This production-ready UI template helpsคุณ build an interface that feels solid and unyielding, breaking away from standard 'soft' design trends.",
    faqs: [
      { question: "What is the GSAP dependency?", answer: "This template uses GSAP and Lenis for ultra-smooth layout transitions and performance-optimized geometric animations across the entire page." },
      { question: "Can I change the lime accent?", answer: "Yes, the `accentColor` prop sets the primary highlight tone for all buttons and geometric focal points in the brutalist layout." },
      { question: "Is it mobile responsive?", answer: "The brutalist modules stack into a high-impact vertical grid on mobile, ensuring that the bold lines and shadows remains legible and effective." }
    ],
  },
  {
    id: "brutal-sketch",
    name: "Brutal Sketch",
    description: "Neo-brutalist landing page with hand-drawn sketchy elements and bold design.",
    category: "Core Landing Pages",
    tags: ["brutal", "sketch", "hand-drawn", "bold"],
    previewUrl: "/CoreLandingPages/StartupLandingPages/BrutalSketch",
    code: {
      tsx: getCode("src/components/CoreLandingPages/StartupLandingPages/tsx/BrutalSketch.tsx"),
      jsx: getCode("src/components/CoreLandingPages/StartupLandingPages/jsx/BrutalSketch.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/StartupLandingPages/BrutalSketch/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#000000",
        description: "Primary brutal color (black).",
      },
      {
        name: "accentColor",
        type: "string",
        default: "#ff006e",
        description: "Bold accent color.",
      },
      {
        name: "sketchColor",
        type: "string",
        default: "#1a1a1a",
        description: "Color for sketch lines.",
      },
      {
        name: "sketchRoughness",
        type: "number",
        default: "1",
        description: "Roughness of sketch elements (0.5-2).",
      },
    ],
    whenToUse: "Ideal for creative labs, experimental art projects, and Next.js portfolios that want an organic 'Brutal Sketch' aesthetic. Use this full-page template for a hand-crafted experience with bold black lines, pink pop accents, and rough sketch textures.",
    bestPractices: "Follow React best practices by pairing this with informal typography. Maintain scalable component architecture by keeping branding consistent. Optimize for performance by managed the rough border renders.",
    whyMatters: "Sketchy neo-brutalism breaks the digital barrier by adding a human, tactile touch to your interface. This production-ready UI template helpsคุณ build a brand identity that feels approachable and experimental, improving user affinity through visual novelty.",
    faqs: [
      { question: "How were the lines made?", answer: "The component uses localized CSS filters and SVG masks (`sketchColor`, `sketchRoughness`) to simulate the uneven appearance of physical charcoal or pencil strokes." },
      { question: "Can I change the neon pink?", answer: "Yes, the `accentColor` prop (default #ff006e) allows you to set the primary 'Pop' color for the entire sketchy interface." },
      { question: "Is it good for portfolios?", answer: "Absolutely, 'Brutal Sketch' is specifically designed to showcase creative work where a unique, hand-crafted atmosphere is paramount." }
    ],
  },
  {
    id: "cartoon",
    name: "Cartoon",
    description: "Playful cartoon-style landing page with fun animations and vibrant colors.",
    category: "Core Landing Pages",
    tags: ["cartoon", "playful", "fun", "vibrant"],
    previewUrl: "/CoreLandingPages/StartupLandingPages/Cartoon",
    code: {
      tsx: getCode("src/components/CoreLandingPages/StartupLandingPages/tsx/Cartoon.tsx"),
      jsx: getCode("src/components/CoreLandingPages/StartupLandingPages/jsx/Cartoon.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/StartupLandingPages/Cartoon/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#ff006e",
        description: "Primary playful color.",
      },
      {
        name: "secondaryColor",
        type: "string",
        default: "#8338ec",
        description: "Secondary vibrant color.",
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
    whenToUse: "Perfect for young startups, lifestyle brands, and Next.js projects that want a high-energy 'Cartoon' aesthetic. Use this full-page template for a fun experience with pink/purple gradients, bouncy animations, and vibrant UI modules.",
    bestPractices: "Maintain scalable component architecture by keeping foreground content lightweight and energetic. Follow React best practices by pairing this with bold, playful typography. Optimize for performance by managed the spring-physics animation intensity.",
    whyMatters: "Cartoon-style design (Pop Art) communicates warmth, friendship, and positive energy. This production-ready UI template helpsคุณ build an interface that feels alive and approachable, improving user retention through visual delight.",
    faqs: [
      { question: "What is 'Bounce Intensity'?", answer: "The `bounceIntensity` prop controls the spring-physics values and frequency of the bouncy UI modules, ranging from subtle to high-energy." },
      { question: "Can I adjust the colors?", answer: "Yes, the `primaryColor` and `secondaryColor` props allow you to set the vibrant palette to any energetic brand duo." },
      { question: "Does it work for enterprise?", answer: "While playful, it works exceptionally well for 'Educational' or 'Onboarding' flows that want to feel warm and frictionless." }
    ],
  },
  {
    id: "controlled-chaos",
    name: "Controlled Chaos",
    description: "Dynamic landing page with organized chaos and controlled randomness.",
    category: "Core Landing Pages",
    tags: ["chaos", "controlled", "dynamic", "random"],
    previewUrl: "/CoreLandingPages/StartupLandingPages/ControlledChaos",
    code: {
      tsx: getCode("src/components/CoreLandingPages/StartupLandingPages/tsx/ControlledChaos.tsx"),
      jsx: getCode("src/components/CoreLandingPages/StartupLandingPages/jsx/ControlledChaos.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/StartupLandingPages/ControlledChaos/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "chaosLevel",
        type: "number",
        default: "1",
        description: "Level of chaos/randomness (0.5-2).",
      },
      {
        name: "primaryColor",
        type: "string",
        default: "#3b82f6",
        description: "Primary color for dynamic elements.",
      },
      {
        name: "enableRandomness",
        type: "boolean",
        default: "true",
        description: "Enable controlled random animations.",
      },
      {
        name: "animationSpeed",
        type: "number",
        default: "1",
        description: "Speed of chaos animations.",
      },
    ],
    whenToUse: "Excellent for creative agencies, high-tech labs, and Next.js sites that want a dynamic 'Controlled Chaos' aesthetic. Use this full-page template for an immersive experience with randomized element positions, dynamic grid shifts, and energetic motion.",
    bestPractices: "Maintain scalable component architecture by keeping the chaos level balanced. Follow React best practices by pairing this with high-contrast typography. Optimize for performance by managed the animation-speed multiplier.",
    whyMatters: "Chaotic design (Deconstructivism) communicates energy, structural freedom, and innovation. This production-ready UI template helpsคุณ build an interface that feels alive and unique, adding a distinct 'Dynamic' signature to your brand.",
    faqs: [
      { question: "How 'Chaotic' is it?", answer: "The `chaosLevel` prop defines the degree of randomization applied to element positions and rotation, allowing you to fine-tune the 'Deconstructed' feel." },
      { question: "Can I disable randomness?", answer: "Yes, setting `enableRandomness` to false aligns the elements back to a standard grid while maintaining the dynamic hover states." },
      { question: "Is it readable?", answer: "While the layout is chaotic, the primary content modules remain focused and high-contrast to ensure legibility is never sacrificed for aesthetics." }
    ],
  },
  {
    id: "goo",
    name: "Goo",
    description: "Gooey, organic landing page with fluid animations and slime-like effects.",
    category: "Core Landing Pages",
    tags: ["goo", "organic", "fluid", "slime"],
    previewUrl: "/CoreLandingPages/StartupLandingPages/Goo",
    code: {
      tsx: getCode("src/components/CoreLandingPages/StartupLandingPages/tsx/Goo.tsx"),
      jsx: getCode("src/components/CoreLandingPages/StartupLandingPages/jsx/Goo.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/StartupLandingPages/Goo/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "gooColor",
        type: "string",
        default: "#3b82f6",
        description: "Color of gooey elements.",
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
        description: "Enable fluid animations.",
      },
      {
        name: "animationSpeed",
        type: "number",
        default: "1",
        description: "Speed of goo animations.",
      },
    ],
    whenToUse: "Ideal for creative labs, experimental apps, and Next.js projects that want an organic 'Gooey' aesthetic. Use this full-page template for an immersive experience with liquid background shapes, fluid motion, and organic UI containers.",
    bestPractices: "Follow React best practices by pairing this with high-contrast foreground text. Maintain scalable component architecture by keeping the gooey shapes consistent. Optimize for performance by managed the SVG blob rendering.",
    whyMatters: "Gooey design (Metaballs) communicates creativity and structural freedom. This production-ready UI template helpsคุณ build an interface that feels alive and 'liquid', breaking the standard geometric rules of digital design.",
    faqs: [
      { question: "How does the 'Goo' work?", answer: "The component uses SVG filters to apply a 'blur and contrast' effect to multiple moving circles, creating the illusion of merging liquid drops." },
      { question: "Is the viscosity adjustable?", answer: "Yes, the `viscosity` prop (0.5-2) controls how much the shapes 'stretch' and 'bond' when they pass near each other." },
      { question: "Can I disable the fluid?", answer: "The `enableFluid` prop allows you to toggle the background motion off for a static, but still organic, gooey layout." }
    ],
  },
  {
    id: "kinetic",
    name: "Kinetic",
    description: "Kinetic typography landing page with dynamic text animations and motion.",
    category: "Core Landing Pages",
    tags: ["kinetic", "typography", "dynamic", "motion"],
    previewUrl: "/CoreLandingPages/StartupLandingPages/Kinetic",
    code: {
      tsx: getCode("src/components/CoreLandingPages/StartupLandingPages/tsx/Kinetic.tsx"),
      jsx: getCode("src/components/CoreLandingPages/StartupLandingPages/jsx/Kinetic.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/StartupLandingPages/Kinetic/page.tsx"),
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
        default: "#3b82f6",
        description: "Accent color for highlights.",
      },
      {
        name: "animationSpeed",
        type: "number",
        default: "1",
        description: "Speed of kinetic animations (0.5-2).",
      },
      {
        name: "enableMotion",
        type: "boolean",
        default: "true",
        description: "Enable dynamic motion effects.",
      },
    ],
    whenToUse: "Perfect for high-impact landing pages, design studios, and Next.js portfolios that want a dynamic 'Kinetic' aesthetic. Use this full-page template for an immersive experience with kinetic typography, high-contrast negative space, and energetic animations.",
    bestPractices: "Maintain consistent spacing within your design system by using it for primary brand storytelling. Follow React best practices by pairing it with bold, high-contrast font colors. Optimize for performance by managed the typographic physics.",
    whyMatters: "Kinetic design (International Typographic Style) communicates energy and structural power. This production-ready UI template helpsคุณ build an interface that feels alive and authoritative, focusing the user's focus on your core slogans.",
    faqs: [
      { question: "How does 'Kinetic' work?", answer: "The component features moving, scaling, and interactive typography (`animationSpeed`) that responds to proximity and scroll position." },
      { question: "Can I adjust the motion?", answer: "The `enableMotion` prop allows you to toggle the kinetic background effects if you require a more minimalist typography focus." },
      { question: "Is it mobile responsive?", answer: "The kinetic slogans are designed as liquid typography that maintains its impact and legibility even when compressed for smaller mobile screens." }
    ],
  },
  {
    id: "loo",
    name: "Loo",
    description: "Unique Loo landing page with distinctive design and creative aesthetics.",
    category: "Core Landing Pages",
    tags: ["loo", "unique", "distinctive", "creative"],
    previewUrl: "/CoreLandingPages/StartupLandingPages/loo",
    code: {
      tsx: getCode("src/components/CoreLandingPages/StartupLandingPages/tsx/Loo.tsx"),
      jsx: getCode("src/components/CoreLandingPages/StartupLandingPages/jsx/Loo.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/StartupLandingPages/Loo/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "primaryColor",
        type: "string",
        default: "#3b82f6",
        description: "Primary brand color.",
      },
      {
        name: "accentColor",
        type: "string",
        default: "#ec4899",
        description: "Accent color for highlights.",
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
        description: "Speed of creative animations.",
      },
    ],
    whenToUse: "Perfect for tech startups, product launches, and Next.js applications that want a unique 'Loo' aesthetic. Use this full-page template for a high-fidelity experience with pink/blue highlights, enhanced animations, and vibrant UI modules.",
    bestPractices: "Follow React best practices by pairing this with dark-themed hero sections. Maintain scalable component architecture by keeping branding consistent. Optimize for performance by managed the animation-speed multiplier.",
    whyMatters: "Loo aesthetics communicate evolution and digital momentum. This production-ready UI template helpsคุณ build an interface that feels established and modern, reflecting a brand identity rooted in the future.",
    faqs: [
      { question: "What are 'Loo' animations?", answer: "The component features multi-layered transitions and state-aware interactions (`enableAnimations`) that feel more 'premium' than standard v1 layouts." },
      { question: "Can I adjust the highlight colors?", answer: "Yes, the `primaryColor` and `accentColor` props allow you to set the vibrant 'Nexus' palette to match your brand's data theme." },
      { question: "Is it mobile friendly?", answer: "The Loo modules are optimized to remain visually impactful without sacrificing performance on mobile GPUs." }
    ],
  },
  {
    id: "noise",
    name: "Noise",
    description: "Noisy, textured landing page with grain effects and organic imperfections.",
    category: "Core Landing Pages",
    tags: ["noise", "texture", "grain", "imperfect"],
    previewUrl: "/CoreLandingPages/StartupLandingPages/Noise",
    code: {
      tsx: getCode("src/components/CoreLandingPages/StartupLandingPages/tsx/Noise.tsx"),
      jsx: getCode("src/components/CoreLandingPages/StartupLandingPages/jsx/Noise.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/StartupLandingPages/Noise/page.tsx"),
    },
    dependencies: ["next", "framer-motion"],
    props: [
      {
        name: "noiseIntensity",
        type: "number",
        default: "1",
        description: "Intensity of noise/grain effect (0-2).",
      },
      {
        name: "primaryColor",
        type: "string",
        default: "#1a1a1a",
        description: "Primary text/background color.",
      },
      {
        name: "enableGrain",
        type: "boolean",
        default: "true",
        description: "Enable grain texture overlay.",
      },
      {
        name: "grainOpacity",
        type: "number",
        default: "0.1",
        description: "Opacity of grain effect (0-1).",
      },
    ],
    whenToUse: "Excellent for creative labs, experimental art projects, and Next.js portfolios that want an organic 'Noise' aesthetic. Use this full-page template for an immersive experience with grain textures, organic imperfections, and deep atmospheric depth.",
    bestPractices: "Follow React best practices by pairing this with high-contrast foreground text. Maintain scalable component architecture by keeping the grain intensity balanced. Optimize for performance by managed the noise-canvas render.",
    whyMatters: "Noisy design (Grain Aesthetics) communicates a tactile sense of digital authenticity and warmth. This production-ready UI template helpsคุณ build an interface that feels physical and human, breaking away from the clinical 'perfect' pixels of traditional flat design.",
    faqs: [
      { question: "Is the grain real?", answer: "Yes, the component generates a dynamic SVG or Canvas grain overlay (`enableGrain`) that adds an organic texture to the entire page surface." },
      { question: "Can I adjust the intensity?", answer: "Yes, the `noiseIntensity` and `grainOpacity` props allow you to control how 'thick' and 'visible' the atmospheric noise appears." },
      { question: "Does it affect performance?", answer: "The grain system is highly optimized and localized to secondary layers to ensure smooth scrolling and interaction even on medium-spec devices." }
    ],
  },
  {
    id: "sketch",
    name: "Sketch",
    description: "Hand-drawn sketchy landing page with organic lines and artistic aesthetics.",
    category: "Core Landing Pages",
    tags: ["sketch", "hand-drawn", "organic", "artistic"],
    previewUrl: "/CoreLandingPages/StartupLandingPages/sketch",
    code: {
      tsx: getCode("src/components/CoreLandingPages/StartupLandingPages/tsx/Sketch.tsx"),
      jsx: getCode("src/components/CoreLandingPages/StartupLandingPages/jsx/Sketch.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/CoreLandingPages/StartupLandingPages/Sketch/page.tsx"),
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
    whenToUse: "Ideal for creative studios, illustrators, and Next.js portfolios that want a high-fidelity 'Sketch' aesthetic. Use this full-page template for a hand-crafted experience with rough lines, organic textures, and sketchbook-inspired layouts.",
    bestPractices: "Maintain consistent spacing within your design system by using it on soft earth or paper-grain tones. Follow React best practices by pairing it with informal typography. Optimize for performance by managed the rough border renders.",
    whyMatters: "Sketch design breaks the digital barrier by adding a human, tactile touch to your interface. This production-ready UI template helpsคุณ build a brand identity that feels approachable and experimental, improving user affinity through visual novelty.",
    faqs: [
      { question: "How were the lines made?", answer: "The component uses localized CSS filters and SVG masks to simulate the uneven appearance of physical charcoal or pencil strokes drawn on paper." },
      { question: "Can I adjust the roughness?", answer: "Yes, the `roughness` prop (0.5-2) allows you to control how 'clean' or 'organic' the sketch-lines appear throughout the page." },
      { question: "Is the paper texture adjustable?", answer: "The `paperColor` prop (default white) allows you to set the background tone, while the grain intensity remains optimized for a high-fidelity sketchbook look." }
    ],
  },
];

