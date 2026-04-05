import { getCode } from "../getCode";
import { Component } from "../types";

export const bentoGridComponents: Component[] = [
    {
        id: "layout-editorial",
        name: "Editorial Layout",
        description: "Asymmetric fashion-inspired bento grid with sharp edges and editorial styling, branded for Uilora.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["bento", "editorial", "fashion", "asymmetric"],
        previewUrl: "/Grids&Layouts/BentoGrids/LayoutEditorial",
        code: {
            tsx: getCode("src/components/Grids&Layouts/BentoGrids/tsx/LayoutEditorial.tsx"),
            jsx: getCode("src/components/Grids&Layouts/BentoGrids/jsx/LayoutEditorial.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/BentoGrids/LayoutEditorial/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "title", type: "string", default: "Uilora Design System", description: "Hero section title displayed over the image." },
            { name: "description", type: "string", default: "Crafting beautiful, production-ready components for the modern web.", description: "Hero section subtitle/description." },
            { name: "accentColor", type: "string", default: "bg-orange-600", description: "Tailwind background class for the quote accent block (e.g. 'bg-orange-600', 'bg-indigo-500')." },
        ],
        whenToUse: "Ideal for high-end fashion portfolios, editorial magazines, and creative agencies that want an asymmetric 'Awwwards' aesthetic. Use this layout to showcase Uilora's component collection with a mix of high-fidelity imagery and technical data readout.",
        bestPractices: "Pair with high-contrast, professional photography. Keep grid gaps uniform for design system consistency. Use efficient image loading patterns for performance.",
        whyMatters: "Editorial layouts communicate digital excellence and attention to detail. This Uilora-branded template leaves a lasting visual impression while showcasing your component library in a curated, premium way.",
        faqs: [
            { question: "Is the grid responsive?", answer: "Yes, the asymmetric grid adapts its spans dynamically for mobile, ensuring the editorial flow remains impactful on small screens." },
            { question: "Can I change the accent color?", answer: "Pass any Tailwind background class to the accentColor prop, e.g. 'bg-violet-600' or 'bg-emerald-500'." },
            { question: "Are the stats hardcoded?", answer: "Yes, the stats (700+ Components, 12.5K Downloads, 0.02s Load Time) are Uilora brand defaults. To show custom data, clone and extend the component." }
        ],
    },
    {
        id: "layout-swiss",
        name: "Swiss Layout",
        description: "Clean Swiss design bento grid with precise typography and minimal aesthetics, branded for Uilora.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["bento", "swiss", "minimal", "typography"],
        previewUrl: "/Grids&Layouts/BentoGrids/LayoutSwiss",
        code: {
            tsx: getCode("src/components/Grids&Layouts/BentoGrids/tsx/LayoutSwiss.tsx"),
            jsx: getCode("src/components/Grids&Layouts/BentoGrids/jsx/LayoutSwiss.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/BentoGrids/LayoutSwiss/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "title", type: "string", default: "UILORA", description: "Large header title text (displayed in 6xl bold)." },
            { name: "description", type: "string", default: "Precision-crafted component library for modern web interfaces.", description: "Main block description text." },
            { name: "accentColor", type: "string", default: "#ff3b30", description: "Accent color hex for the floating circle and bottom dot highlight." },
        ],
        whenToUse: "Perfect for typography showcases, design systems, and Next.js applications that want a clean Swiss-style aesthetic. Use this layout to communicate objective clarity, precision, and structural honesty.",
        bestPractices: "Adhere to a strict 8px grid for consistent spacing. Use sans-serif fonts to maintain the Swiss feel. The accentColor should be used sparingly — one vivid pop against the neutral grey grid.",
        whyMatters: "Swiss design aesthetics communicate technical reliability and timeless craft. This Uilora-branded template reflects a brand identity rooted in design history while staying modern and production-ready.",
        faqs: [
            { question: "Is the grid rigid?", answer: "Yes, the layout follows a strict Swiss column system to ensure perfect alignment and mathematical balance across all screen sizes." },
            { question: "What does the accent color control?", answer: "It drives the floating red circle in the large block and the third color dot in the bottom row — used sparingly per Swiss design philosophy." },
            { question: "Can I change the year?", answer: "The year '(2024)' is hardcoded as a Swiss editorial convention. Clone the component to make it dynamic." }
        ],
    },
    {
        id: "layout-wabi-sabi",
        name: "Wabi Sabi Layout",
        description: "Japanese-inspired bento grid with wabi-sabi aesthetics, imperfections, and Uilora branding.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["bento", "wabi-sabi", "japanese", "imperfect"],
        previewUrl: "/Grids&Layouts/BentoGrids/LayoutWabiSabi",
        code: {
            tsx: getCode("src/components/Grids&Layouts/BentoGrids/tsx/LayoutWabiSabi.tsx"),
            jsx: getCode("src/components/Grids&Layouts/BentoGrids/jsx/LayoutWabiSabi.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/BentoGrids/LayoutWabiSabi/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "title", type: "string", default: "Uilora Studio", description: "Title overlaid on the main image in large serif italic." },
            { name: "quote", type: "string", default: '"Crafted with intention, refined with care."', description: "Italic serif quote displayed in the text block." },
            { name: "accentColor", type: "string", default: "#4A5D4F", description: "Background color of the small color accent block (hex)." },
        ],
        whenToUse: "Ideal for artistic portfolios, lifestyle brands, and applications that want a meaningful Wabi Sabi aesthetic. Use this layout to communicate imperfection, tranquility, and natural craft.",
        bestPractices: "Pair with high-contrast moody photography. Use serif fonts to contrast the raw earthy textures. Keep the quote short and evocative for maximum impact.",
        whyMatters: "Wabi Sabi aesthetics communicate wisdom, tranquility, and digital craft. This Uilora-branded template feels personal and alive, adding a unique architectural signature to your brand narrative.",
        faqs: [
            { question: "Is the texture real?", answer: "Yes, an SVG fractal noise overlay adds a subtle earthy grain texture across the warm background." },
            { question: "Can I swap the image?", answer: "The image URL is hardcoded as a default. Clone the component and add an imageSrc prop if you need it dynamic." },
            { question: "What's the bottom card text?", answer: "It shows 'Uilora Showcase' and 'Welcome to Uilora, Nitin – Founder' — fixed brand content in this layout." }
        ],
    },
    {
        id: "layout-botanic",
        name: "Botanic Layout",
        description: "Organic bento grid with botanical themes, curved shapes, and Uilora branding.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["bento", "botanic", "organic", "curved"],
        previewUrl: "/Grids&Layouts/BentoGrids/LayoutBotanic",
        code: {
            tsx: getCode("src/components/Grids&Layouts/BentoGrids/tsx/LayoutBotanic.tsx"),
            jsx: getCode("src/components/Grids&Layouts/BentoGrids/jsx/LayoutBotanic.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/BentoGrids/LayoutBotanic/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "title", type: "string", default: "Uilora", description: "Main title displayed in serif italic over the image." },
            { name: "description", type: "string", default: "Where beautiful components grow.", description: "Subtitle text displayed below the title on the image." },
            { name: "accentColor", type: "string", default: "#1a3c28", description: "Primary dark green color used for backgrounds, text, and gradient overlays (hex)." },
        ],
        whenToUse: "Ideal for eco-conscious brands, design showcases, and applications that want an organic curved aesthetic. Use this layout to communicate growth, quality, and natural elegance.",
        bestPractices: "Use deep, earthy accent colors that contrast well with the light background. Pair with approachable serif typography. The organic curves look best with nature-themed photography.",
        whyMatters: "Organic aesthetics communicate health, sustainability, and digital craft. This Uilora-branded template feels alive and breathing, adding a unique structural signature to your project.",
        faqs: [
            { question: "What are the hardcoded stats?", answer: "The component shows 'Uilora Library v2.0', '700+ Components', and '99% Uptime' as Uilora brand defaults." },
            { question: "Can I change the image?", answer: "The image URL is hardcoded as a default botanical photo. Clone the component and add an imageSrc prop for custom images." },
            { question: "Is it mobile responsive?", answer: "Yes, the organic curves and grid spans are fully responsive across all device sizes." }
        ],
    },
    {
        id: "uilora-service-grid",
        name: "Uilora Service Grid",
        description: "3×2 pastel bento with unique geometric SVG illustrations per card — mint, lavender, dark (featured), gray, light-blue, and cream variants.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["bento", "pastel", "geometric", "services", "portfolio", "minimal"],
        previewUrl: "/Grids&Layouts/BentoGrids/UiloraServiceGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/BentoGrids/tsx/UiloraServiceGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/BentoGrids/jsx/UiloraServiceGrid.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/BentoGrids/UiloraServiceGrid/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "title", type: "string", default: "Focus on developer experience", description: "Title text for the dark featured card (center-right)." },
            { name: "description", type: "string", default: "Prioritizing clean APIs and intuitive integration, ensuring developers ship beautiful UIs with Uilora.", description: "Description text for the dark featured card." },
            { name: "accentColor", type: "string", default: "#22d3ee", description: "Color of the crosshair/plus symbol on the dark featured card." },
        ],
        whenToUse: "Perfect for agency portfolios, service pages, and component library feature sections that want a visually rich, pastel-toned 3×2 grid with unique geometric illustrations per card.",
        bestPractices: "The dark featured card stands out most with a vivid accentColor (cyan, violet, lime). Keep card text concise — 1 line title, 2 lines description — to maintain visual balance across all 6 cards.",
        whyMatters: "The contrast between the 5 soft pastel cards and 1 dark featured card creates instant visual hierarchy. The unique SVG illustrations (diamond chain, arrow pattern, crosshair, dash grid, resize arrows) give each card a distinct identity without photos.",
        faqs: [
            { question: "Can I change individual card colors?", answer: "Card background colors are hardcoded as Uilora's pastel palette. Clone the component and edit the cards array to customize each card's bg." },
            { question: "What do the SVG illustrations represent?", answer: "Diamond chain = connection/integration, ascending arrows = growth/APIs, crosshair = precision/DX, dash grid = quality, resize arrows = flexibility, diamond chain again = solutions." },
            { question: "Is the grid responsive?", answer: "Yes — it collapses to 2 columns on tablet and 1 column on mobile." }
        ],
    },
    {
        id: "uilora-light-bento",
        name: "Uilora Light Bento",
        description: "Light fintech-inspired bento grid with portfolio chart, donut pie, transaction list, code block, and integration logo grid on a soft gray background.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["bento", "light", "fintech", "dashboard", "portfolio", "saas"],
        previewUrl: "/Grids&Layouts/BentoGrids/UiloraLightBento",
        code: {
            tsx: getCode("src/components/Grids&Layouts/BentoGrids/tsx/UiloraLightBento.tsx"),
            jsx: getCode("src/components/Grids&Layouts/BentoGrids/jsx/UiloraLightBento.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/BentoGrids/UiloraLightBento/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "title", type: "string", default: "Customize at will", description: "Headline shown in the accent-colored CTA card (bottom-left)." },
            { name: "description", type: "string", default: "For anyone to start building their design system, no matter the size of your team.", description: "Description shown below the title in the CTA card." },
            { name: "accentColor", type: "string", default: "#bbf451", description: "Lime/neon accent hex — used for the CTA card background, portfolio badge, donut chart segment, and expected-reach icon." },
        ],
        whenToUse: "Perfect for SaaS product pages, component library landing sections, and fintech-style feature showcases that want a clean, light aesthetic. Use this as the light companion to UiloraFeatureGrid.",
        bestPractices: "Keep accentColor vivid — muted colors lose contrast on the white cards. The CTA card title works best at 2–4 words. The chart, donut, code block, and logos are Uilora-branded defaults; fork the component to customize the inner UI mocks.",
        whyMatters: "Light bento layouts balance information density with visual breathing room. The fintech-inspired UI mocks inside each card add instant credibility and make abstract features feel tangible.",
        faqs: [
            { question: "What controls the donut chart colors?", answer: "The first segment uses accentColor, the second is purple (#a855f7), the third is gray, and the fourth is near-black — hardcoded for the Uilora brand palette." },
            { question: "Can I change the line chart data?", answer: "The chart uses a fixed 13-point wavy dataset. Clone the component and replace rawData with your own values." },
            { question: "Are the logos real brand logos?", answer: "No — they are colored rounded squares with text abbreviations that visually reference popular tools. This avoids trademark issues while keeping the design recognizable." }
        ],
    },
    {
        id: "uilora-feature-grid",
        name: "Uilora Feature Grid",
        description: "Dark bento feature section with animated chart, component table, shield visual, and framework integration hub — inspired by fintech UI aesthetics.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["bento", "dark", "features", "dashboard", "fintech", "saas"],
        previewUrl: "/Grids&Layouts/BentoGrids/UiloraFeatureGrid",
        code: {
            tsx: getCode("src/components/Grids&Layouts/BentoGrids/tsx/UiloraFeatureGrid.tsx"),
            jsx: getCode("src/components/Grids&Layouts/BentoGrids/jsx/UiloraFeatureGrid.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/BentoGrids/UiloraFeatureGrid/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "title", type: "string", default: "Essential tools for your design growth", description: "Main heading. The last two words are rendered in muted white for a two-tone effect." },
            { name: "description", type: "string", default: "Unlock your design potential with Uilora's powerful suite of 700+ components designed to drive your product success.", description: "Subtitle below the heading." },
            { name: "accentColor", type: "string", default: "#6366f1", description: "Hex color used for the glow in the shield/reliability card." },
        ],
        whenToUse: "Ideal for SaaS landing pages, product marketing sections, and component library showcases that need a premium dark feature grid. Use this layout to present 4 key value propositions with rich inner UI mockups.",
        bestPractices: "Keep the title under 8 words for the two-tone split to look natural. The dark background pairs best with a page that also uses a dark or gradient hero section. The inner UI mockups are intentionally Uilora-branded — clone and customize for other products.",
        whyMatters: "Feature grids communicate product depth and credibility. The dark fintech-inspired aesthetic signals quality and seriousness, making Uilora feel like an enterprise-grade component library.",
        faqs: [
            { question: "How does the title two-tone work?", answer: "The component automatically takes the last 2 words of your title string and renders them in white/35 opacity, creating a natural muted accent effect." },
            { question: "Is the chart dynamic?", answer: "The chart uses fixed data points for the preview. Clone the component and pass a custom data array to make it dynamic." },
            { question: "Can I change the integration nodes?", answer: "The left/right framework nodes (Re, Nx, Rm, Vt, Sv, As) are hardcoded in this version. Fork the component to swap them out for your specific tech stack." }
        ],
    },
    {
        id: "uilora-tags-bento",
        name: "Uilora Tags Bento",
        description: "Light bento grid with colorful rotated tag cloud, interactive package manager install UI, avatar grid, SWOT quadrant, and stacked component preview cards.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["bento", "light", "tags", "install", "saas", "developer", "community"],
        previewUrl: "/Grids&Layouts/BentoGrids/UiloraTagsBento",
        code: {
            tsx: getCode("src/components/Grids&Layouts/BentoGrids/tsx/UiloraTagsBento.tsx"),
            jsx: getCode("src/components/Grids&Layouts/BentoGrids/jsx/UiloraTagsBento.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/BentoGrids/UiloraTagsBento/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "title", type: "string", default: "Get started in seconds", description: "Heading shown in the install card." },
            { name: "description", type: "string", default: "Install Uilora and add production-ready components to your project instantly.", description: "Subtext below the install card heading." },
            { name: "accentColor", type: "string", default: "#a78bfa", description: "Accent hex used for active package manager tab, CTA button, avatar badge, and stacked card hover hint." },
        ],
        whenToUse: "Perfect for SaaS product pages, component library homepages, and developer tool landing pages that want to showcase community, quick setup, and ecosystem breadth. The tag cloud immediately communicates technology coverage.",
        bestPractices: "Purple, violet, or teal accent colors work best against the light background. Keep the install card title short (4–6 words) for best visual balance. The SWOT card is dark (#111118) and acts as a visual anchor — avoid overriding it.",
        whyMatters: "Combining social proof (avatars), instant setup (install card), and breadth (tag cloud) in a single view reduces onboarding friction. The stacked component preview cards invite exploration and signal product depth.",
        faqs: [
            { question: "Are the package manager commands real?", answer: "The commands are illustrative Uilora CLI commands. Wire the button to your actual docs URL by modifying the View docs button href." },
            { question: "Can I change the tags?", answer: "The tags array is defined at the top of the component. Edit the label, color, text, and rotate fields to customize the cloud." },
            { question: "How do I change the SWOT content?", answer: "Edit the swotData array inside the component. Each item has label (S/W/O/T), full name, color, and a short desc string." }
        ],
    },
];
