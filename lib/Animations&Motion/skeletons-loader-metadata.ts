import { Component } from "../types";

export const skeletonsLoaderComponentsMetadata: Component[] = [
    {
        id: "classic-skeleton",
        name: "Classic Skeleton",
        description: "Comprehensive skeleton loading components collection with shimmer animations. Includes blocks, text, avatars, cards, list items, buttons, inputs, and loading overlays. High-performance shimmer effects with framer-motion.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["animations-motion", "skeleton", "loader", "loading", "shimmer", "placeholder", "ui"],
        previewUrl: "/Animations&Motion/SkeletonsLoader/Classic",
        code: { tsx: "" },
        usageCode: { tsx: "" },
        dependencies: ["next", "react", "framer-motion"],
        props: [],
        whenToUse: "Essential for modern web applications and SaaS dashboards to improve perceived performance. Use this React component during data fetching states to prevent layout shifts and keep the user engaged while content is loading.",
        bestPractices: "Follow React best practices by matching the skeleton's shape and size exactly to the final content structure. Maintain scalable component architecture by creating reusable skeleton wrappers for your complex components. Optimize for performance by using efficient shimmer animations that don't tax the CPU unnecessarily.",
        whyMatters: "Skeleton loaders are a key part of premium frontend development, providing a smoother transition from loading to ready states. This customizable UI component helps built robust real-world application architecture that feels fast and reliable, even on slower network connections.",
        faqs: [
            { question: "Does it support custom colors?", answer: "Yes, you can easily customize the background and shimmer colors via the `className` or CSS variables to match your design system's theme." },
            { question: "Is it accessible?", answer: "The component is designed to be purely visual, but you should still follow accessibility compliance by adding 'aria-busy' and 'aria-live' attributes to the parent container." },
            { question: "How many skeleton types are included?", answer: "This collection includes placeholders for text, blocks, avatars, buttons, and even full bento-style cards." }
        ],
    },
];

