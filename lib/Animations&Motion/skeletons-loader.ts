import { getCode } from "../getCode";
import { Component } from "../types";

export const skeletonsLoaderComponents: Component[] = [
    {
        id: "classic-skeleton",
        name: "Classic Skeleton",
        description: "Comprehensive skeleton loading components collection with shimmer animations. Includes blocks, text, avatars, cards, list items, buttons, inputs, and loading overlays. High-performance shimmer effects with framer-motion.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["animations-motion", "skeleton", "loader", "loading", "shimmer", "placeholder", "ui"],
        previewUrl: "/Animations&Motion/SkeletonsLoader/Classic",
        code: {
            tsx: getCode("src/components/Animations&Motion/SkeletonsLoader/tsx/Classic.tsx"),
            jsx: getCode("src/components/Animations&Motion/SkeletonsLoader/jsx/Classic.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Animations&Motion/SkeletonsLoader/Classic/page.tsx") },
        dependencies: ["next", "react", "framer-motion"],
        props: [],
        whenToUse: "Essential for all data-driven Next.js applications and SaaS dashboards. Use these React skeleton loaders to reduce perceived latency by showing content placeholders while your actual data is being fetched from an API.",
        bestPractices: "Follow React best practices by matching the skeleton shapes as closely as possible to your final UI layout. Maintain scalable component architecture by creating a global `Skeleton` utility that can be used across your entire design system. Optimize for performance by using efficient shimmer animations that don't block the main thread.",
        whyMatters: "Managing loading states is a critical part of modern frontend development. These production-ready skeleton components provide a polished, high-performance way to bridge the gap between request and response, improving user retention and adding semantic authority to your real-world application architecture.",
        faqs: [
            { question: "Do these support different shapes?", answer: "Yes, the collection includes specialized skeletons for avatars (circles), headers (lines), content blocks (rectangles), and cards." },
            { question: "Is the shimmer animation customizable?", answer: "Absolutely! You can adjust the speed, direction, and color of the shimmer effect to match your brand's specific aesthetic." },
            { question: "How do I use them with async data?", answer: "Simply render the skeleton while your `isLoading` state is true, and then swap it for your actual component once the data arrives." }
        ],
    },
];

