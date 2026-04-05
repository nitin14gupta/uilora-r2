import { getCode } from "../getCode";
import { Component } from "../types";

export const fileUploads: Component[] = [
  {
    id: "cyber-stack-upload",
    name: "Cyber Stack",
    description: "3D stacked file list with heavy cyberpunk aesthetics.",
    category: "File Uploads",
    installType: "cli",
    tags: ["upload", "3d", "cyberpunk", "stack"],
    previewUrl: "/UIComponents/FileUploads/CyberStackUpload",
    code: {
      tsx: getCode("src/components/UIComponents/FileUploads/tsx/CyberStackUpload.tsx"),
      jsx: getCode("src/components/UIComponents/FileUploads/jsx/CyberStackUpload.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/UIComponents/FileUploads/CyberStackUpload/page.tsx"),
    },
    dependencies: ["framer-motion", "lucide-react", "react-dropzone"],
    props: [
      { name: "maxFiles", type: "number", default: "5", description: "Maximum number of files" },
      { name: "onUpload", type: "(files: File[]) => void", default: "undefined", description: "Upload callback" }
    ]
  },
  {
    id: "holographic-upload",
    name: "Holographic Drop",
    description: "Futuristic holographic upload zone with scanlines.",
    category: "File Uploads",
    installType: "cli",
    tags: ["upload", "hologram", "futuristic", "scanline"],
    previewUrl: "/UIComponents/FileUploads/HolographicUpload",
    code: {
      tsx: getCode("src/components/UIComponents/FileUploads/tsx/HolographicUpload.tsx"),
      jsx: getCode("src/components/UIComponents/FileUploads/jsx/HolographicUpload.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/UIComponents/FileUploads/HolographicUpload/page.tsx"),
    },
    dependencies: ["framer-motion", "lucide-react", "react-dropzone"],
    props: [
      { name: "accentColor", type: "string", default: "undefined", description: "Main accent color" },
      { name: "disabled", type: "boolean", default: "false", description: "Disable interactions" }
    ]
  },
  {
    id: "liquid-upload",
    name: "Liquid Blob",
    description: "Organic liquid blob that absorbs dropped files.",
    category: "File Uploads",
    installType: "cli",
    tags: ["upload", "liquid", "organic", "animation"],
    previewUrl: "/UIComponents/FileUploads/LiquidUpload",
    code: {
      tsx: getCode("src/components/UIComponents/FileUploads/tsx/LiquidUpload.tsx"),
      jsx: getCode("src/components/UIComponents/FileUploads/jsx/LiquidUpload.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/UIComponents/FileUploads/LiquidUpload/page.tsx"),
    },
    dependencies: ["framer-motion", "lucide-react", "react-dropzone"],
    props: [
      { name: "variant", type: "'liquid'", default: "'liquid'", description: "Visual variant (optional override)" }
    ]
  },
  {
    id: "minimal-glass-upload",
    name: "Minimal Glass",
    description: "Clean, frosted glass file uploader.",
    category: "File Uploads",
    installType: "cli",
    tags: ["upload", "glassmorphism", "clean", "minimal"],
    previewUrl: "/UIComponents/FileUploads/MinimalGlassUpload",
    code: {
      tsx: getCode("src/components/UIComponents/FileUploads/tsx/MinimalGlassUpload.tsx"),
      jsx: getCode("src/components/UIComponents/FileUploads/jsx/MinimalGlassUpload.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/UIComponents/FileUploads/MinimalGlassUpload/page.tsx"),
    },
    dependencies: ["framer-motion", "lucide-react", "react-dropzone"],
    props: [
      { name: "theme", type: "'light' | 'dark'", default: "'dark'", description: "Color theme" }
    ]
  },
  {
    id: "neon-grid-upload",
    name: "Neon Grid",
    description: "Retro-wave 80s neon grid upload zone.",
    category: "File Uploads",
    installType: "cli",
    tags: ["upload", "neon", "retro", "grid"],
    previewUrl: "/UIComponents/FileUploads/NeonGridUpload",
    code: {
      tsx: getCode("src/components/UIComponents/FileUploads/tsx/NeonGridUpload.tsx"),
      jsx: getCode("src/components/UIComponents/FileUploads/jsx/NeonGridUpload.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/UIComponents/FileUploads/NeonGridUpload/page.tsx"),
    },
    dependencies: ["framer-motion", "lucide-react", "react-dropzone"],
    props: [
      { name: "accentColor", type: "string", default: "undefined", description: "Neon glow color" }
    ]
  },
  {
    id: "orbital-upload",
    name: "Orbital System",
    description: "Files orbit the central core upload zone.",
    category: "File Uploads",
    installType: "cli",
    tags: ["upload", "space", "orbital", "animation"],
    previewUrl: "/UIComponents/FileUploads/OrbitalUpload",
    code: {
      tsx: getCode("src/components/UIComponents/FileUploads/tsx/OrbitalUpload.tsx"),
      jsx: getCode("src/components/UIComponents/FileUploads/jsx/OrbitalUpload.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/UIComponents/FileUploads/OrbitalUpload/page.tsx"),
    },
    dependencies: ["framer-motion", "lucide-react", "react-dropzone"],
    props: [
      { name: "maxFiles", type: "number", default: "5", description: "Max orbiting items" }
    ]
  },
  {
    id: "quantum-upload",
    name: "Quantum Loader",
    description: "Circular quantum-inspired progress loader.",
    category: "File Uploads",
    installType: "cli",
    tags: ["upload", "sci-fi", "quantum", "loader"],
    previewUrl: "/UIComponents/FileUploads/QuantumUpload",
    code: {
      tsx: getCode("src/components/UIComponents/FileUploads/tsx/QuantumUpload.tsx"),
      jsx: getCode("src/components/UIComponents/FileUploads/jsx/QuantumUpload.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/UIComponents/FileUploads/QuantumUpload/page.tsx"),
    },
    dependencies: ["framer-motion", "lucide-react", "react-dropzone"],
    props: [
      { name: "accentColor", type: "string", default: "undefined", description: "Energy color" }
    ]
  },
  {
    id: "scanner-upload",
    name: "Bio-Scanner",
    description: "Sci-fi scanning effect for file verification.",
    category: "File Uploads",
    installType: "cli",
    tags: ["upload", "sci-fi", "scanner", "green"],
    previewUrl: "/UIComponents/FileUploads/ScannerUpload",
    code: {
      tsx: getCode("src/components/UIComponents/FileUploads/tsx/ScannerUpload.tsx"),
      jsx: getCode("src/components/UIComponents/FileUploads/jsx/ScannerUpload.jsx"),
    },
    usageCode: {
      tsx: getCode("src/app/(routes)/UIComponents/FileUploads/ScannerUpload/page.tsx"),
    },
    dependencies: ["framer-motion", "lucide-react", "react-dropzone"],
    props: [
      { name: "theme", type: "'dark'", default: "'dark'", description: "Scanner theme" }
    ]
  }
];
