import { getCode } from "../getCode";
import { Component } from "../types";

export const toastsComponents: Component[] = [
    {
        id: "uilora-glass",
        name: "Glass Toast",
        description: "Modern glassmorphism toast with backdrop blur and shimmer effect.",
        category: "UI Components",
        installType: "cli",
        tags: ["toast", "glass", "glassmorphism", "blur", "notification"],
        previewUrl: "/UIComponents/Toasts/Glass",
        code: {
            tsx: getCode("src/components/UIComponents/Toasts/tsx/ToastGlass.tsx"),
            jsx: getCode("src/components/UIComponents/Toasts/jsx/ToastGlass.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/UIComponents/Toasts/Glass/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "title", type: "string", default: "undefined", description: "Toast title text." },
            { name: "description", type: "string", default: "undefined", description: "Toast description text." },
            { name: "variant", type: "ToastVariant", default: "neutral", description: "Toast variant: success, error, warning, info, destructive, or neutral." },
            { name: "icon", type: "React.ReactNode", default: "undefined", description: "Custom icon component." },
            { name: "duration", type: "number", default: "4000", description: "Auto-dismiss duration in milliseconds (0 for no auto-dismiss)." },
        ],
    },
    {
        id: "brutal",
        name: "Brutal Toast",
        description: "Neo-brutalist toast with high contrast borders and bold typography.",
        category: "UI Components",
        installType: "cli",
        tags: ["toast", "brutal", "neo-brutalism", "bold", "notification"],
        previewUrl: "/UIComponents/Toasts/Brutal",
        code: {
            tsx: getCode("src/components/UIComponents/Toasts/tsx/ToastBrutal.tsx"),
            jsx: getCode("src/components/UIComponents/Toasts/jsx/ToastBrutal.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/UIComponents/Toasts/Brutal/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "title", type: "string", default: "undefined", description: "Toast title text." },
            { name: "description", type: "string", default: "undefined", description: "Toast description text." },
            { name: "variant", type: "ToastVariant", default: "neutral", description: "Toast variant: success, error, warning, info, destructive, or neutral." },
            { name: "icon", type: "React.ReactNode", default: "undefined", description: "Custom icon component." },
            { name: "duration", type: "number", default: "4000", description: "Auto-dismiss duration in milliseconds (0 for no auto-dismiss)." },
        ],
    },
    {
        id: "clay",
        name: "Clay Toast",
        description: "Soft 3D claymorphism toast with inner shadows and rounded design.",
        category: "UI Components",
        installType: "cli",
        tags: ["toast", "clay", "claymorphism", "3d", "notification"],
        previewUrl: "/UIComponents/Toasts/Clay",
        code: {
            tsx: getCode("src/components/UIComponents/Toasts/tsx/ToastClay.tsx"),
            jsx: getCode("src/components/UIComponents/Toasts/jsx/ToastClay.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/UIComponents/Toasts/Clay/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "title", type: "string", default: "undefined", description: "Toast title text." },
            { name: "description", type: "string", default: "undefined", description: "Toast description text." },
            { name: "variant", type: "ToastVariant", default: "neutral", description: "Toast variant: success, error, warning, info, destructive, or neutral." },
            { name: "icon", type: "React.ReactNode", default: "undefined", description: "Custom icon component." },
            { name: "duration", type: "number", default: "4000", description: "Auto-dismiss duration in milliseconds (0 for no auto-dismiss)." },
        ],
    },
    {
        id: "pill",
        name: "Pill Toast",
        description: "Dynamic Island-style pill toast with rounded design and action button.",
        category: "UI Components",
        installType: "cli",
        tags: ["toast", "pill", "dynamic-island", "rounded", "notification"],
        previewUrl: "/UIComponents/Toasts/Pill",
        code: {
            tsx: getCode("src/components/UIComponents/Toasts/tsx/ToastPill.tsx"),
            jsx: getCode("src/components/UIComponents/Toasts/jsx/ToastPill.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/UIComponents/Toasts/Pill/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "title", type: "string", default: "undefined", description: "Toast title text." },
            { name: "variant", type: "ToastVariant", default: "neutral", description: "Toast variant: success, error, warning, info, destructive, or neutral." },
            { name: "icon", type: "React.ReactNode", default: "undefined", description: "Custom icon component." },
            { name: "duration", type: "number", default: "4000", description: "Auto-dismiss duration in milliseconds (0 for no auto-dismiss)." },
            { name: "actionLabel", type: "string", default: "undefined", description: "Label for the action button." },
        ],
    },
    {
        id: "minimal",
        name: "Minimal Toast",
        description: "Clean minimal toast with utility white background and left border accent.",
        category: "UI Components",
        installType: "cli",
        tags: ["toast", "minimal", "clean", "utility", "notification"],
        previewUrl: "/UIComponents/Toasts/Minimal",
        code: {
            tsx: getCode("src/components/UIComponents/Toasts/tsx/ToastMinimal.tsx"),
            jsx: getCode("src/components/UIComponents/Toasts/jsx/ToastMinimal.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/UIComponents/Toasts/Minimal/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "title", type: "string", default: "undefined", description: "Toast title text." },
            { name: "variant", type: "ToastVariant", default: "neutral", description: "Toast variant: success, error, warning, info, destructive, or neutral." },
            { name: "icon", type: "React.ReactNode", default: "undefined", description: "Custom icon component." },
            { name: "duration", type: "number", default: "4000", description: "Auto-dismiss duration in milliseconds (0 for no auto-dismiss)." },
        ],
    },
    {
        id: "holo",
        name: "Holo Toast",
        description: "Iridescent holographic toast with gradient borders and shimmer effects.",
        category: "UI Components",
        installType: "cli",
        tags: ["toast", "holo", "holographic", "gradient", "iridescent", "notification"],
        previewUrl: "/UIComponents/Toasts/Holo",
        code: {
            tsx: getCode("src/components/UIComponents/Toasts/tsx/ToastHolo.tsx"),
            jsx: getCode("src/components/UIComponents/Toasts/jsx/ToastHolo.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/UIComponents/Toasts/Holo/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "title", type: "string", default: "undefined", description: "Toast title text." },
            { name: "description", type: "string", default: "undefined", description: "Toast description text." },
            { name: "variant", type: "ToastVariant", default: "neutral", description: "Toast variant: success, error, warning, info, destructive, or neutral." },
            { name: "icon", type: "React.ReactNode", default: "undefined", description: "Custom icon component." },
            { name: "duration", type: "number", default: "4000", description: "Auto-dismiss duration in milliseconds (0 for no auto-dismiss)." },
        ],
    },
    {
        id: "cyber",
        name: "Cyber Toast",
        description: "Retro terminal-style toast with monospace font and green terminal aesthetic.",
        category: "UI Components",
        installType: "cli",
        tags: ["toast", "cyber", "terminal", "retro", "cli", "notification"],
        previewUrl: "/UIComponents/Toasts/Cyber",
        code: {
            tsx: getCode("src/components/UIComponents/Toasts/tsx/ToastCyber.tsx"),
            jsx: getCode("src/components/UIComponents/Toasts/jsx/ToastCyber.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/UIComponents/Toasts/Cyber/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "title", type: "string", default: "undefined", description: "Toast title text." },
            { name: "description", type: "string", default: "undefined", description: "Toast description text." },
            { name: "variant", type: "ToastVariant", default: "neutral", description: "Toast variant: success, error, warning, info, destructive, or neutral." },
            { name: "icon", type: "React.ReactNode", default: "undefined", description: "Custom icon component." },
            { name: "duration", type: "number", default: "4000", description: "Auto-dismiss duration in milliseconds (0 for no auto-dismiss)." },
        ],
    },
    {
        id: "luxe",
        name: "Luxe Toast",
        description: "Elegant gold-themed toast with serif typography and luxury aesthetic.",
        category: "UI Components",
        installType: "cli",
        tags: ["toast", "luxe", "gold", "elegant", "serif", "notification"],
        previewUrl: "/UIComponents/Toasts/Luxe",
        code: {
            tsx: getCode("src/components/UIComponents/Toasts/tsx/ToastLuxe.tsx"),
            jsx: getCode("src/components/UIComponents/Toasts/jsx/ToastLuxe.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/UIComponents/Toasts/Luxe/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "title", type: "string", default: "undefined", description: "Toast title text." },
            { name: "description", type: "string", default: "undefined", description: "Toast description text." },
            { name: "variant", type: "ToastVariant", default: "neutral", description: "Toast variant: success, error, warning, info, destructive, or neutral." },
            { name: "icon", type: "React.ReactNode", default: "undefined", description: "Custom icon component." },
            { name: "duration", type: "number", default: "4000", description: "Auto-dismiss duration in milliseconds (0 for no auto-dismiss)." },
        ],
    },
];

