import { Component } from "../types";

export const modalsAndDesignMetadata: Component[] = [
  {
    id: "brutalist-modal",
    name: "Neo-Brutalist Modal",
    description: "High-contrast, bold modal with raw aesthetics.",
    category: "Modals & Design",
    installType: "cli",
    tags: ["modal", "brutalist", "bold", "contrast"],
    previewUrl: "/UIComponents/Modals&Dialogs/BrutalistModal",
    code: { tsx: "" },
    usageCode: { tsx: "" },
    dependencies: ["framer-motion", "lucide-react"],
    props: [
      { name: "open", type: "boolean", default: "false", description: "Modal open state" },
      { name: "onClose", type: "() => void", default: "undefined", description: "Close handler" },
      { name: "title", type: "string", default: "undefined", description: "Modal title" }
    ]
  },
  {
    id: "cyber-modal",
    name: "Cyber Deck Modal",
    description: "Terminal-style side sheet with cyberpunk visuals.",
    category: "Modals & Design",
    installType: "cli",
    tags: ["modal", "cyberpunk", "terminal", "sheet"],
    previewUrl: "/UIComponents/Modals&Dialogs/CyberModal",
    code: { tsx: "" },
    usageCode: { tsx: "" },
    dependencies: ["framer-motion", "lucide-react"],
    props: [
      { name: "open", type: "boolean", default: "false", description: "Modal open state" },
      { name: "onClose", type: "() => void", default: "undefined", description: "Close handler" },
      { name: "title", type: "string", default: "undefined", description: "Modal title" }
    ]
  },
  {
    id: "dynamic-modal",
    name: "Dynamic Island",
    description: "Smooth expanding pill modal similar to Dynamic Island.",
    category: "Modals & Design",
    installType: "cli",
    tags: ["modal", "animation", "clean", "ios"],
    previewUrl: "/UIComponents/Modals&Dialogs/DynamicModal",
    code: { tsx: "" },
    usageCode: { tsx: "" },
    dependencies: ["framer-motion", "lucide-react"],
    props: [
      { name: "open", type: "boolean", default: "false", description: "Modal open state" },
      { name: "onClose", type: "() => void", default: "undefined", description: "Close handler" },
      { name: "title", type: "string", default: "undefined", description: "Modal title" }
    ]
  },
  {
    id: "origami-modal",
    name: "Origami Fold",
    description: "Modal that unfolds like paper.",
    category: "Modals & Design",
    installType: "cli",
    tags: ["modal", "origami", "fold", "animation"],
    previewUrl: "/UIComponents/Modals&Dialogs/OrigamiModal",
    code: { tsx: "" },
    usageCode: { tsx: "" },
    dependencies: ["framer-motion", "lucide-react"],
    props: [
      { name: "open", type: "boolean", default: "false", description: "Modal open state" },
      { name: "onClose", type: "() => void", default: "undefined", description: "Close handler" },
      { name: "title", type: "string", default: "undefined", description: "Modal title" }
    ]
  },
  {
    id: "prism-modal",
    name: "Prism Glass",
    description: "Holographic glass modal with chromatic aberration.",
    category: "Modals & Design",
    installType: "cli",
    tags: ["modal", "glassmorphism", "prism", "holographic"],
    previewUrl: "/UIComponents/Modals&Dialogs/PrismModal",
    code: { tsx: "" },
    usageCode: { tsx: "" },
    dependencies: ["framer-motion", "lucide-react"],
    props: [
      { name: "open", type: "boolean", default: "false", description: "Modal open state" },
      { name: "onClose", type: "() => void", default: "undefined", description: "Close handler" },
      { name: "title", type: "string", default: "undefined", description: "Modal title" }
    ]
  },
  {
    id: "receipt-modal",
    name: "Receipt Sheet",
    description: "Modal that looks like a printed receipt.",
    category: "Modals & Design",
    installType: "cli",
    tags: ["modal", "receipt", "skeuomorphic", "print"],
    previewUrl: "/UIComponents/Modals&Dialogs/ReceiptModal",
    code: { tsx: "" },
    usageCode: { tsx: "" },
    dependencies: ["framer-motion", "lucide-react"],
    props: [
      { name: "open", type: "boolean", default: "false", description: "Modal open state" },
      { name: "onClose", type: "() => void", default: "undefined", description: "Close handler" },
      { name: "title", type: "string", default: "undefined", description: "Modal title" }
    ]
  },
  {
    id: "sketchy-modal",
    name: "Sketchy Note",
    description: "Hand-drawn style modal.",
    category: "Modals & Design",
    installType: "cli",
    tags: ["modal", "hand-drawn", "sketch", "paper"],
    previewUrl: "/UIComponents/Modals&Dialogs/SketchyModal",
    code: { tsx: "" },
    usageCode: { tsx: "" },
    dependencies: ["framer-motion", "lucide-react"],
    props: [
      { name: "open", type: "boolean", default: "false", description: "Modal open state" },
      { name: "onClose", type: "() => void", default: "undefined", description: "Close handler" },
      { name: "title", type: "string", default: "undefined", description: "Modal title" }
    ]
  },
  {
    id: "void-modal",
    name: "The Void",
    description: "Minimal eerie modal with blur effects.",
    category: "Modals & Design",
    installType: "cli",
    tags: ["modal", "minimal", "void", "dark"],
    previewUrl: "/UIComponents/Modals&Dialogs/VoidModal",
    code: { tsx: "" },
    usageCode: { tsx: "" },
    dependencies: ["framer-motion", "lucide-react"],
    props: [
      { name: "open", type: "boolean", default: "false", description: "Modal open state" },
      { name: "onClose", type: "() => void", default: "undefined", description: "Close handler" },
      { name: "title", type: "string", default: "undefined", description: "Modal title" }
    ]
  }
];
