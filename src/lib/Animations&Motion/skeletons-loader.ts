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
        props: [
            { name: "theme", type: '"dark" | "light"', default: '"dark"', description: 'Switches the entire color palette. "dark" uses neutral-950 backgrounds; "light" uses neutral-50 backgrounds.' },
            { name: "shimmer", type: "boolean", default: "true", description: "Toggles the shimmer animation globally across all skeleton pieces in the demo." },
        ],
        whenToUse: "Essential for all data-driven Next.js applications and SaaS dashboards. Use these React skeleton loaders to reduce perceived latency by showing content placeholders while your actual data is being fetched from an API.",
        bestPractices: "Follow React best practices by matching the skeleton shapes as closely as possible to your final UI layout. Maintain scalable component architecture by creating a global `Skeleton` utility that can be used across your entire design system. Optimize for performance by using efficient shimmer animations that don't block the main thread.",
        whyMatters: "Managing loading states is a critical part of modern frontend development. These production-ready skeleton components provide a polished, high-performance way to bridge the gap between request and response, improving user retention and adding semantic authority to your real-world application architecture.",
        faqs: [
            { question: "Do these support different shapes?", answer: "Yes, the collection includes specialized skeletons for avatars (circles), headers (lines), content blocks (rectangles), and cards." },
            { question: "Is the shimmer animation customizable?", answer: "Absolutely! The shimmer prop toggles animation globally, and the theme prop switches between dark and light palettes. For deeper customization, fork the component and adjust the token objects." },
            { question: "How do I use them with async data?", answer: "Simply render the skeleton while your `isLoading` state is true, and then swap it for your actual component once the data arrives." }
        ],
    },
    {
        id: "uilora-dashboard-skeleton",
        name: "Uilora Dashboard",
        description: "Full SaaS dashboard skeleton with sidebar navigation, topbar, KPI stat cards, chart placeholder, and a data table — all shimmering in sync.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["animations-motion", "skeleton", "loader", "dashboard", "saas", "shimmer"],
        previewUrl: "/Animations&Motion/SkeletonsLoader/UiloraDashboard",
        code: {
            tsx: getCode("src/components/Animations&Motion/SkeletonsLoader/tsx/UiloraDashboard.tsx"),
            jsx: getCode("src/components/Animations&Motion/SkeletonsLoader/jsx/UiloraDashboard.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Animations&Motion/SkeletonsLoader/UiloraDashboard/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "theme", type: '"dark" | "light"', default: '"dark"', description: 'Color palette. "dark" uses deep navy tones; "light" uses neutral gray-white.' },
            { name: "accentColor", type: "string", default: '"#6366f1"', description: "Brand accent color applied as a subtle hairline ring on the content area and tint in the shimmer gradient." },
            { name: "sidebarCollapsed", type: "boolean", default: "false", description: "Collapses the sidebar from 220px (icon + label) to 48px (icon-only) with a smooth transition." },
            { name: "statCards", type: "number", default: "4", description: "Number of KPI stat cards to render (clamped 2–5). Drives a CSS grid-cols-N layout." },
        ],
        whenToUse: "Ideal for SaaS admin panels, analytics dashboards, and CRM tools. Drop it in as the loading state for your entire app shell — sidebar, topbar, metrics, chart, and table all load together, preventing layout shift.",
        bestPractices: "Match statCards to your actual KPI count so the skeleton layout mirrors the real UI perfectly. Use sidebarCollapsed=true for apps that default to a collapsed nav on first load.",
        whyMatters: "A full-layout skeleton prevents jarring reflows as content loads. When the sidebar, header, and body areas appear instantly as skeletons, the app feels fast even before a single API call resolves.",
        faqs: [
            { question: "How do I add more table rows?", answer: "The table rows are driven by a baked constant inside the component. Fork it and increase the array length — each row is a single reusable component call." },
            { question: "Can I animate each section separately?", answer: "Yes. Each major section (topbar, KPI cards, chart, table) has its own stagger delay baked in. Adjust the `d(n)` delay multiplier at the top of the component." },
            { question: "Does sidebarCollapsed affect content layout?", answer: "Yes — when collapsed, the main content area expands to fill the freed sidebar space via CSS transition." }
        ],
    },
    {
        id: "uilora-feed-skeleton",
        name: "Uilora Feed",
        description: "Social / news feed skeleton with a stories row and staggered post cards — avatar, content lines, optional image, and action pill rows.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["animations-motion", "skeleton", "loader", "feed", "social", "shimmer"],
        previewUrl: "/Animations&Motion/SkeletonsLoader/UiloraFeed",
        code: {
            tsx: getCode("src/components/Animations&Motion/SkeletonsLoader/tsx/UiloraFeed.tsx"),
            jsx: getCode("src/components/Animations&Motion/SkeletonsLoader/jsx/UiloraFeed.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Animations&Motion/SkeletonsLoader/UiloraFeed/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "theme", type: '"dark" | "light"', default: '"dark"', description: 'Color palette. "dark" uses near-black cards; "light" uses white cards on a gray page background.' },
            { name: "accentColor", type: "string", default: '"#10b981"', description: "Brand accent applied as a subtle ring on story avatars and tint in the shimmer." },
            { name: "postCount", type: "number", default: "4", description: "Number of post skeleton cards to render (clamped 2–6)." },
            { name: "showStories", type: "boolean", default: "true", description: "Shows or hides the horizontal stories/highlights row at the top of the feed." },
        ],
        whenToUse: "Perfect for social platforms, news aggregators, content feeds, and community products. The alternating image/no-image pattern mirrors real feed variance, making the skeleton feel authentic rather than templated.",
        bestPractices: "Set postCount to match the number of posts visible above the fold at your target viewport so the skeleton fills the screen exactly. Disable showStories for feeds without a highlights mechanic.",
        whyMatters: "Staggered entrance animations on each post create a natural cascade that communicates progressive loading. Users perceive content as arriving in a sensible order, reducing anxiety during long data fetches.",
        faqs: [
            { question: "Which posts show an image bone?", answer: "Posts at even indices (0, 2, 4...) include an image bone. Odd-index posts skip the image, matching the natural variance of a real feed." },
            { question: "How do I adjust the story count?", answer: "The stories row renders 6 items. Fork the component and change the `Array.from({ length: 6 })` call to your preferred count." },
            { question: "Can I use this for a comment thread?", answer: "Yes — disable showStories and set postCount to match your comment depth. Nest PostCard components for threaded replies." }
        ],
    },
    {
        id: "uilora-kanban-skeleton",
        name: "Uilora Kanban",
        description: "Project-management Kanban skeleton with multi-column layout, varied card heights, tag pills, avatar stacks, and a dashed add-card button.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["animations-motion", "skeleton", "loader", "kanban", "project", "shimmer"],
        previewUrl: "/Animations&Motion/SkeletonsLoader/UiloraKanban",
        code: {
            tsx: getCode("src/components/Animations&Motion/SkeletonsLoader/tsx/UiloraKanban.tsx"),
            jsx: getCode("src/components/Animations&Motion/SkeletonsLoader/jsx/UiloraKanban.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Animations&Motion/SkeletonsLoader/UiloraKanban/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "theme", type: '"dark" | "light"', default: '"dark"', description: 'Color palette. "dark" uses deep navy column backgrounds; "light" uses off-white panels.' },
            { name: "accentColor", type: "string", default: '"#f59e0b"', description: "Brand accent tinting the shimmer gradient at low opacity and the board title accent." },
            { name: "columns", type: "number", default: "4", description: "Number of Kanban columns to render (clamped 2–5)." },
            { name: "cardsPerColumn", type: "number", default: "3", description: "Number of skeleton cards per column (clamped 2–5). Cards cycle through 4 visual variants for natural height variation." },
        ],
        whenToUse: "Use as the loading state for Linear-style boards, Jira sprint views, CRM pipeline screens, and any drag-and-drop task manager. The varied card heights make it indistinguishable from a real board loading.",
        bestPractices: "Match columns to your actual board column count. Leave cardsPerColumn at 3 for the best visual balance — too many cards per column creates an artificially uniform skeleton that looks templated.",
        whyMatters: "Kanban boards have complex, varied card heights. A skeleton that mirrors this variance (full cards, minimal cards, tagged cards) tells users that real varied content is coming — not a uniform placeholder grid.",
        faqs: [
            { question: "How do the card variants work?", answer: "Cards cycle through 4 patterns via (colIdx + cardIdx) % 4: full (tags + content + footer), minimal (title + footer), compact (title + content), tagged (3 tags + footer). This produces organic height variation across every column." },
            { question: "Can I add a board header above the columns?", answer: "Yes — the board header with title and action buttons is already rendered above the column grid. Fork the component and update the BOARD_TITLE constant." },
            { question: "Does it support horizontal scrolling?", answer: "Yes — the column container uses overflow-x-auto, so adding more columns than fit the viewport triggers native horizontal scroll." }
        ],
    },
    {
        id: "uilora-email-skeleton",
        name: "Uilora Email",
        description: "3-pane email client skeleton — sidebar folders, inbox list with active-item state, and a full email preview with header, body, attachments, and reply box.",
        category: "Animations & Motion",
        installType: "cli",
        tags: ["animations-motion", "skeleton", "loader", "email", "inbox", "shimmer"],
        previewUrl: "/Animations&Motion/SkeletonsLoader/UiloraEmail",
        code: {
            tsx: getCode("src/components/Animations&Motion/SkeletonsLoader/tsx/UiloraEmail.tsx"),
            jsx: getCode("src/components/Animations&Motion/SkeletonsLoader/jsx/UiloraEmail.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Animations&Motion/SkeletonsLoader/UiloraEmail/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "theme", type: '"dark" | "light"', default: '"dark"', description: 'Color palette. "dark" uses deep navy panes; "light" uses white panels on a neutral page.' },
            { name: "accentColor", type: "string", default: '"#0ea5e9"', description: "Brand accent applied to the compose button background and subtle shimmer tint." },
            { name: "emailCount", type: "number", default: "6", description: "Number of inbox list items to render (clamped 3–10)." },
            { name: "previewOpen", type: "boolean", default: "true", description: "Shows or hides the right email preview pane. Set false for mobile-first list-only layouts." },
        ],
        whenToUse: "Use for email clients, support inboxes, notification centers, and any 3-pane messaging layout. The active-item highlight on the first list item communicates the selected-state clearly even in skeleton form.",
        bestPractices: "Set previewOpen=false on mobile breakpoints to match your responsive layout. Match emailCount to the number of items visible in your inbox at typical viewport heights.",
        whyMatters: "Email clients are among the most complex UIs to skeleton correctly. A 3-pane layout with proper column widths, folder badges, active states, and a realistic preview pane immediately communicates the app's information architecture before any data loads.",
        faqs: [
            { question: "How does the active email state work?", answer: "The first email list item uses the active-item background color token (slightly lighter/purple-tinted) to simulate the selected state, matching how real email clients behave during load." },
            { question: "Can I remove the preview pane?", answer: "Yes — set previewOpen=false. The component renders only the sidebar and inbox list, which is ideal for mobile or narrow-viewport email views." },
            { question: "Are the folder badges always visible?", answer: "Badge pills appear on alternating folder items (Inbox and Drafts by default). Fork the component and adjust the badge condition in the sidebar folder map." }
        ],
    },
];
