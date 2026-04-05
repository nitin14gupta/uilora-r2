import { getCode } from "../getCode";
import { Component } from "../types";

// Total: 24 components

export const NavbarComponents: Component[] = [
  {
    id: "apple-glass-nav",
    name: "Apple Glass Nav",
    description: "Glassmorphism navigation with frosted glass effect and smooth transitions. Inspired by Apple's design language.",
    category: "Navigation",
    installType: "cli",
    tags: ["glassmorphism", "apple", "modern", "blur"],
    previewUrl: "/Navigation&Structures/Navbar/AppleGlassNav",
    code: {
      tsx: getCode("src/components/Navigation&Structures/Navbar/tsx/AppleGlassNav.tsx"),
      jsx: getCode("src/components/Navigation&Structures/Navbar/jsx/AppleGlassNav.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/Navigation&Structures/Navbar/AppleGlassNav/page.tsx")
    },
    dependencies: ["lucide-react", "framer-motion"],
    props: [
      { name: "items", type: "Array<{name: string, href: string}>", default: "[]", description: "Array of navigation items with name and href." },
      { name: "className", type: "string", default: "undefined", description: "Additional CSS classes for the nav container." },
      { name: "activeTab", type: "string", default: "undefined", description: "Controlled state for active tab." },
    ],
  },
  {
    id: "sketchy-nav",
    name: "Sketchy Nav",
    description: "Hand-drawn style navigation with organic, wobbly lines. Great for creative and indie projects.",
    category: "Navigation",
    installType: "cli",
    tags: ["sketchy", "hand-drawn", "organic", "creative"],
    previewUrl: "/Navigation&Structures/Navbar/SketchyNav",
    code: {
      tsx: getCode("src/components/Navigation&Structures/Navbar/tsx/SketchyNav.tsx"),
      jsx: getCode("src/components/Navigation&Structures/Navbar/jsx/SketchyNav.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/Navigation&Structures/Navbar/SketchyNav/page.tsx")
    },
    dependencies: ["lucide-react", "framer-motion"],
    props: [
      { name: "items", type: "Array<{name: string, href: string}>", default: "[]", description: "Array of navigation items with name and href." },
      { name: "className", type: "string", default: "undefined", description: "Additional CSS classes for the nav container." },
    ],
  },
  {
    id: "gradient-border-nav",
    name: "Gradient Border Nav",
    description: "Dark, sleek navigation with a moving gradient border. Used by OpenAI, Raycast, and Linear clones.",
    category: "Navigation",
    installType: "cli",
    tags: ["gradient", "border", "ai", "saas"],
    previewUrl: "/Navigation&Structures/Navbar/GradientBorderNav",
    code: {
      tsx: getCode("src/components/Navigation&Structures/Navbar/tsx/GradientBorderNav.tsx"),
      jsx: getCode("src/components/Navigation&Structures/Navbar/jsx/GradientBorderNav.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/Navigation&Structures/Navbar/GradientBorderNav/page.tsx")
    },
    dependencies: ["lucide-react", "framer-motion"],
    props: [
      { name: "items", type: "Array<{name: string, href: string}>", default: "[]", description: "Array of navigation items with name and href." },
      { name: "className", type: "string", default: "undefined", description: "Additional CSS classes for the nav container." },
    ],
  },
  {
    id: "elastic-slider-nav",
    name: "Elastic Slider Nav",
    description: "Smooth spring animation for the active state indicator. Perfect for mobile apps and clean dashboards.",
    category: "Navigation",
    installType: "cli",
    tags: ["elastic", "slider", "mobile", "app"],
    previewUrl: "/Navigation&Structures/Navbar/ElasticSliderNav",
    code: {
      tsx: getCode("src/components/Navigation&Structures/Navbar/tsx/ElasticSliderNav.tsx"),
      jsx: getCode("src/components/Navigation&Structures/Navbar/jsx/ElasticSliderNav.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/Navigation&Structures/Navbar/ElasticSliderNav/page.tsx")
    },
    dependencies: ["lucide-react", "framer-motion"],
    props: [
      { name: "items", type: "Array<{name: string, href: string}>", default: "[]", description: "Array of navigation items with name and href." },
      { name: "className", type: "string", default: "undefined", description: "Additional CSS classes for the nav container." },
      { name: "activeTab", type: "string", default: "undefined", description: "Controlled state for active tab." },
    ],
  },
  {
    id: "swipe-mask-nav",
    name: "Swipe Mask",
    description: "Diagonal color fill mask reveal. Smooth swipe animation on hover.",
    category: "Navigation",
    installType: "cli",
    tags: ["swipe", "mask", "diagonal", "reveal"],
    previewUrl: "/Navigation&Structures/Navbar/SwipeMaskNav",
    code: {
      tsx: getCode("src/components/Navigation&Structures/Navbar/tsx/SwipeMaskNav.tsx"),
      jsx: getCode("src/components/Navigation&Structures/Navbar/jsx/SwipeMaskNav.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/Navigation&Structures/Navbar/SwipeMaskNav/page.tsx")
    },
    dependencies: ["next"],
    props: [
      { name: "items", type: "Array<{name: string, href: string}>", default: "[]", description: "Array of navigation items with name and href." },
      { name: "className", type: "string", default: "undefined", description: "Additional CSS classes for the nav container." },
    ],
  },
  {
    id: "floating-island-nav",
    name: "Floating Island",
    description: "Expands from a single dot to a full menu on hover. Minimal to maximal transformation.",
    category: "Navigation",
    installType: "cli",
    tags: ["floating", "island", "expand", "dot"],
    previewUrl: "/Navigation&Structures/Navbar/FloatingIslandNav",
    code: {
      tsx: getCode("src/components/Navigation&Structures/Navbar/tsx/FloatingIslandNav.tsx"),
      jsx: getCode("src/components/Navigation&Structures/Navbar/jsx/FloatingIslandNav.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/Navigation&Structures/Navbar/FloatingIslandNav/page.tsx")
    },
    dependencies: ["lucide-react", "framer-motion"],
    props: [
      { name: "items", type: "Array<{name: string, href: string}>", default: "[]", description: "Array of navigation items with name and href." },
      { name: "className", type: "string", default: "undefined", description: "Additional CSS classes for the nav container." },
    ],
  },
];
