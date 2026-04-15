import { getCode } from "../getCode";
import { Component } from "../types";

export const masonryGridComponents: Component[] = [
    {
        id: "masonry-editorial",
        name: "Uilora Editorial Stagger",
        description: "Sharp monochrome editorial masonry grid with high-fashion aesthetics.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "editorial", "monochrome", "fashion"],
        previewUrl: "/Grids&Layouts/MasonryGrids/MasonryEditorial",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/MasonryEditorial.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/MasonryEditorial.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/MasonryEditorial/page.tsx") },
        dependencies: ["lucide-react", "framer-motion"],
        props: [
            { name: "items", type: "Array<{h: string, title: string, sub: string}>", default: "[{h: 'h-64', title: 'Vogue', sub: 'Collection 01'}, ...]", description: "Array of editorial items with height class (h), title, and subtitle." },
            { name: "backgroundColor", type: "string", default: "#f4f4f0", description: "Background color (hex, rgb, or hsl)." },
            { name: "imageSeed", type: "number", default: "50", description: "Seed number for generating placeholder images." },
        ],
        whenToUse: "Ideal for high-end fashion portfolios, editorial magazines, and creative agencies that want a sharp 'Editorial' aesthetic. Use this masonry grid to showcase project collections with a mix of asymmetrical heights and technical typography.",
        bestPractices: "Follow React best practices by pairing this with professional, high-contrast photography. Maintain consistent spacing within your design system by keeping the grid gaps uniform. Optimize for performance by using efficient image loading patterns.",
        whyMatters: "Editorial stagger layouts communicate digital excellence, fashion-forward thinking, and attention to detail. This production-ready UI template helpsคุณ build an interface that feels curated and premium, leaving a lasting visual impression on high-value clients.",
        faqs: [
            { question: "How does the 'Stagger' work?", answer: "The grid uses non-uniform item heights (h-64, h-96, etc.) to simulate the organic, asymmetrical flow found in physical fashion magazines and editorial lookbooks." },
            { question: "Are colors editable?", answer: "Absolutely, both the primary background and specific text colors can be tuned to match your brand's specific color palette (default: neutral-look)." },
            { question: "Is it mobile responsive?", answer: "Yes, the masonry columns adapt dynamically for mobile, Ensuring the editorial flow remains impactful and structural on small screens." }
        ],
    },
    {
        id: "masonry-chunky",
        name: "Uilora Chunky Dark",
        description: "Uilora Chunky — bold dark masonry grid with electric-green accents and chunky rounded tiles.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "dark", "bold", "neon", "premium"],
        previewUrl: "/Grids&Layouts/MasonryGrids/MasonryChunky",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/MasonryChunky.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/MasonryChunky.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/MasonryChunky/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[/* 9 Unsplash URLs */]", description: "Array of 9 image URLs for the masonry tiles." },
            { name: "backgroundColor", type: "string", default: '"#0c0c14"', description: "Deep dark background color." },
            { name: "accentColor", type: "string", default: '"#3dffa0"', description: "Electric accent color for tags and highlights." },
            { name: "heading", type: "string", default: '"Uilora Premium"', description: "Main heading displayed at the top." },
            { name: "subheading", type: "string", default: '"Curated visual experiences for premium interfaces."', description: "Tagline shown in the accent card." },
        ],
        whenToUse: "Use Uilora Chunky when you need a dark, bold premium grid for SaaS dashboards, creative portfolios, and product showcases. The electric-green accent creates strong contrast for call-to-action areas and stat highlights.",
        bestPractices: "Pair with high-contrast photography. Keep the accentColor consistent with your brand's primary CTA color. For best results, use images with strong focal subjects to complement the bold tile structure.",
        whyMatters: "Uilora Chunky helps you build premium Uilora-powered interfaces that feel cutting-edge and intentional. The chunky rounded tiles create a tactile, modern feel that stands out in competitive design environments.",
        faqs: [
            { question: "Can I change the accent color?", answer: "Yes, pass any hex color to the accentColor prop — it will propagate to all tags, stats, and text highlights automatically." },
            { question: "How many images does it use?", answer: "The grid uses 9 image slots across 3 columns. Providing fewer will cause some tiles to display undefined — always pass all 9." },
            { question: "Is it mobile responsive?", answer: "The grid uses CSS Grid with 3 equal columns. For mobile, wrap it in a responsive container or override gridTemplateColumns via CSS." }
        ],
    },
    {
        id: "masonry-noir",
        name: "Uilora Noir Gold",
        description: "Uilora Noir — cinematic black masonry grid with gold accents and editorial corner markers.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "dark", "gold", "luxury", "editorial"],
        previewUrl: "/Grids&Layouts/MasonryGrids/MasonryNoir",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/MasonryNoir.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/MasonryNoir.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/MasonryNoir/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[/* 8 Unsplash URLs */]", description: "Array of 8 image URLs for the gold-tinted masonry tiles." },
            { name: "backgroundColor", type: "string", default: '"#080808"', description: "Near-black background for maximum contrast." },
            { name: "accentColor", type: "string", default: '"#c9a96e"', description: "Gold accent color for labels, borders, and highlight cards." },
            { name: "label", type: "string", default: '"Uilora Noir"', description: "Editorial heading displayed in the header section." },
        ],
        whenToUse: "Ideal for luxury brands, high-end photography portfolios, fashion editorials, and premium product showcases. The gold-on-black palette communicates prestige and exclusivity.",
        bestPractices: "Use dark, moody photography with clear subjects for the best sepia-tinted effect. The GoldTile applies brightness(0.62) and sepia(0.12) — images with warm tones will look most cohesive.",
        whyMatters: "Uilora Noir helps you build premium Uilora-powered prestige interfaces. The cinema-grade black-and-gold treatment transforms standard image grids into curated gallery experiences that elevate brand perception.",
        faqs: [
            { question: "What do the corner markers on tiles mean?", answer: "They are decorative UI elements — thin L-shaped gold borders in the top-left and bottom-right corners — inspired by photo print registration marks. They reinforce the luxury editorial aesthetic." },
            { question: "Can I use more than 8 images?", answer: "The layout uses exactly 8 slots. Providing fewer will leave gaps. The default images array references 8 entries." },
            { question: "How do I change the gold color?", answer: "Pass a custom hex to the accentColor prop — it updates GoldTile labels, card backgrounds, borders, and stat numbers." }
        ],
    },
    {
        id: "masonry-brute",
        name: "Uilora Brute Grid",
        description: "Uilora Brute — raw brutalist masonry grid with thick black borders, yellow accents, and Arial Black typography.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "brutalist", "bold", "editorial", "typography"],
        previewUrl: "/Grids&Layouts/MasonryGrids/MasonryBrute",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/MasonryBrute.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/MasonryBrute.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/MasonryBrute/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[/* 6 Unsplash URLs */]", description: "Array of 6 image URLs placed throughout the brutalist grid." },
            { name: "backgroundColor", type: "string", default: '"#f0ede6"', description: "Off-white background that contrasts with thick black borders." },
            { name: "accentColor", type: "string", default: '"#f0e500"', description: "Electric yellow accent for highlight tiles and badges." },
            { name: "heading", type: "string", default: '"UILORA"', description: "Large display heading in the header row." },
        ],
        whenToUse: "Use Uilora Brute for design studios, creative agencies, art exhibitions, and any brand that wants to signal raw confidence and typographic boldness. Works best when paired with high-contrast photography.",
        bestPractices: "Stick to high-contrast images — the component applies grayscale and contrast filters. Yellow accent tiles pop best against the off-white background. Keep the heading uppercase for full brutalist effect.",
        whyMatters: "Uilora Brute helps you build premium Uilora-powered brutalist interfaces that break convention. The thick grid borders and oversized typography make an unmistakable statement about creative authority and design intent.",
        faqs: [
            { question: "Why no border-radius on tiles?", answer: "Brutalist design philosophy rejects softening elements. Sharp corners reinforce the raw, uncompromising aesthetic of the grid." },
            { question: "Can I change the border thickness?", answer: "Yes — the border variable is set as `3px solid ${B}` inside the component. You can adjust by modifying the component or forking it." },
            { question: "Does it support dark mode?", answer: "The component uses a fixed off-white background by default. You can pass a dark backgroundColor and swap accentColor for a dark brutalist variant." }
        ],
    },
    {
        id: "masonry-pop",
        name: "Uilora Pop Color",
        description: "Uilora Pop — vibrant multi-color masonry grid with bold color tiles and image cards in a playful layout.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "colorful", "pop", "playful", "bold"],
        previewUrl: "/Grids&Layouts/MasonryGrids/MasonryPop",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/MasonryPop.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/MasonryPop.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/MasonryPop/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[/* 6 Unsplash URLs */]", description: "Array of 6 image URLs for the image tiles." },
            { name: "backgroundColor", type: "string", default: '"#f8f5f0"', description: "Warm off-white base for the grid background." },
            { name: "heading", type: "string", default: '"Uilora Pop"', description: "Large display heading shown above the grid." },
        ],
        whenToUse: "Use Uilora Pop for consumer apps, lifestyle brands, e-commerce product showcases, and creative portfolios that want a vibrant, energetic aesthetic. The color-blocked tiles create natural visual hierarchy.",
        bestPractices: "The 9 TILE_COLORS are carefully balanced — avoid overriding them unless needed. Use diverse photography to complement the varied backgrounds. The scale(0.94) entrance animation works best with a viewport intersection observer for performance.",
        whyMatters: "Uilora Pop helps you build premium Uilora-powered interfaces that feel alive and energetic. The color tile system creates natural information hierarchy without relying on typography size alone.",
        faqs: [
            { question: "How are the tile colors defined?", answer: "TILE_COLORS is a fixed array of 9 {bg, text} pairs — each carefully chosen for contrast and vibrancy. ColorTile uses these to render solid-color cards alongside image tiles." },
            { question: "Can I add more color tiles?", answer: "Yes — extend the TILE_COLORS array and add more ColorTile placements in the column structure." },
            { question: "What's the dot indicator in the header?", answer: "Three colored dots (red, green, blue) serve as a visual brand accent — inspired by app window controls and palette indicators." }
        ],
    },
    {
        id: "masonry-dusk",
        name: "Uilora Dusk Archive",
        description: "Uilora Dusk — warm cinematic masonry grid with amber overlays, Georgia serif typography, and a golden-hour editorial mood.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "warm", "cinematic", "editorial", "amber"],
        previewUrl: "/Grids&Layouts/MasonryGrids/MasonryDusk",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/MasonryDusk.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/MasonryDusk.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/MasonryDusk/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[/* 9 Unsplash URLs */]", description: "Array of 9 warm-toned image URLs for the dusk tile grid." },
            { name: "backgroundColor", type: "string", default: '"#0f0908"', description: "Deep warm-black background evoking nightfall." },
            { name: "accentColor", type: "string", default: '"#d4915a"', description: "Amber/rust accent for labels, numbers, and highlight cards." },
            { name: "heading", type: "string", default: '"Uilora Dusk"', description: "Large editorial heading in the hero section." },
            { name: "tagline", type: "string", default: '"The golden hour collection."', description: "Italic tagline below the heading." },
        ],
        whenToUse: "Use Uilora Dusk for photography portfolios, travel editorial, lifestyle brands, and any context where warm cinematic moods communicate luxury and atmosphere. Perfect for golden-hour and nature collections.",
        bestPractices: "Use warm-toned photography for maximum effect — the amber overlay (mixBlendMode: multiply) enhances existing warm tones. Each tile's overlayColor is individually tuned; pass consistent rust/amber values for a cohesive duotone look.",
        whyMatters: "Uilora Dusk helps you build premium Uilora-powered editorial interfaces that feel like curated photography books. The warm overlay system transforms standard image grids into atmospheric, emotionally resonant experiences.",
        faqs: [
            { question: "How does the warm overlay work?", answer: "DuskTile applies brightness(0.68) + saturate(0.85) to images, then overlays a semi-transparent warm color via mixBlendMode: multiply, plus a dark gradient for text legibility." },
            { question: "Can I change individual tile overlay colors?", answer: "The overlays array inside the component defines per-tile colors. You can export it as a prop or modify the component to accept an overlays array." },
            { question: "What fonts are used?", answer: "Georgia / Times New Roman for headings (editorial serif) and Courier New monospace for labels and HUD-style metadata text." }
        ],
    },
    {
        id: "masonry-orbit",
        name: "Uilora Orbit",
        description: "Uilora Orbit — space/tech dark masonry grid with electric blue accents, scan-line overlays, HUD corner brackets, and animated system status.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "dark", "tech", "hud", "space", "futuristic"],
        previewUrl: "/Grids&Layouts/MasonryGrids/MasonryOrbit",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/MasonryOrbit.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/MasonryOrbit.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/MasonryOrbit/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[/* 5 Unsplash URLs */]", description: "Array of 5 image URLs for the orbit tiles." },
            { name: "backgroundColor", type: "string", default: '"#000000"', description: "Pure black background for maximum contrast." },
            { name: "accentColor", type: "string", default: '"#00A1FF"', description: "Electric blue accent for HUD brackets, labels, and data cards." },
            { name: "heading", type: "string", default: '"UILORA ORBIT"', description: "Main heading in the header section." },
            { name: "subheading", type: "string", default: '"Visual intelligence from above."', description: "Tagline displayed below the heading." },
        ],
        whenToUse: "Use Uilora Orbit for SaaS dashboards, developer tools, space tech brands, and any interface that needs to communicate precision, intelligence, and technical authority. The scan-line overlays and HUD brackets create an immersive command-center aesthetic.",
        bestPractices: "Use high-contrast photography — the scan-line filter and dark gradient overlay work best with subjects that have clear focal points. Keep the accentColor consistent with your brand's primary interactive color.",
        whyMatters: "Uilora Orbit helps you build premium Uilora-powered tech interfaces that feel like mission control. The animated LIVE dot and progress bar add kinetic energy that makes the interface feel alive and operational.",
        faqs: [
            { question: "What are the scan lines on the images?", answer: "They are a CSS repeating-linear-gradient overlay — thin 1px dark horizontal stripes every 4px — creating a CRT monitor / HUD aesthetic without JavaScript." },
            { question: "What do the corner brackets indicate?", answer: "Four absolute-positioned divs with border-color matching accentColor form L-shaped corners on each image — inspired by military targeting systems and satellite camera frames." },
            { question: "How does the animated LIVE dot work?", answer: "It uses Framer Motion's animate prop cycling opacity 1 → 0.2 → 1 on a 1.4s infinite loop with easeInOut — a minimal pulsing effect that signals live data." }
        ],
    },
    {
        id: "masonry-board",
        name: "Uilora Board",
        description: "Uilora Board — dark moodboard/curator masonry grid with sage green accents, color swatch tiles, quote cards, and a 2×2 mini image grid.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "dark", "moodboard", "curator", "sage", "editorial"],
        previewUrl: "/Grids&Layouts/MasonryGrids/MasonryBoard",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/MasonryBoard.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/MasonryBoard.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/MasonryBoard/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[/* 7 Unsplash URLs */]", description: "Array of 7 image URLs for the board tiles." },
            { name: "backgroundColor", type: "string", default: '"#262626"', description: "Dark charcoal background." },
            { name: "accentColor", type: "string", default: '"#7a9e8e"', description: "Sage green accent for avatar gradients and quote attributions." },
            { name: "boardTitle", type: "string", default: '"Uilora Curation"', description: "Board heading in the header section." },
            { name: "subtitle", type: "string", default: '"Public Board"', description: "Small label above the board title." },
        ],
        whenToUse: "Use Uilora Board for design inspiration collections, mood boards, creative briefs, and portfolio showcases. The mixed content tiles (images + swatches + quotes) make it ideal for showcasing design systems and brand palettes.",
        bestPractices: "Provide 7 varied images for the best visual rhythm. The swatch colors (#7A9E8C, #4a5260, #b5a48e) are hardcoded for cohesion — override the SwatchCard component if you need custom palette colors.",
        whyMatters: "Uilora Board helps you build premium Uilora-powered curation interfaces that feel like are.na or Pinterest for design professionals. The mixed tile types create visual variety that keeps users engaged and exploring.",
        faqs: [
            { question: "What is the 2×2 mini image grid?", answer: "A CSS grid with gridTemplateColumns: '1fr 1fr' inside a single masonry tile — showing two images side by side for a contact-sheet / polaroid strip aesthetic." },
            { question: "Can I customize the quote text?", answer: "The QuoteCard has a hardcoded quote. Fork the component and export the quote as a prop if you need customizable quotes." },
            { question: "What are the color dot circles in the header?", answer: "Three 22px circles in sage, purple, and slate blue — representing board collaborators or palette swatches. They are purely decorative and can be replaced with real avatar images." }
        ],
    },
    {
        id: "masonry-soyi",
        name: "Uilora Soyi",
        description: "Uilora Soyi — bold serif editorial masonry grid with a vibrant orange outer frame, massive italic heading, and tight 3-column image grid.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "editorial", "serif", "bold", "orange", "magazine"],
        previewUrl: "/Grids&Layouts/MasonryGrids/MasonrySoyi",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/MasonrySoyi.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/MasonrySoyi.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/MasonrySoyi/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[/* 5 Unsplash URLs */]", description: "Array of 5 image URLs for the 3-column editorial grid." },
            { name: "outerColor", type: "string", default: '"#e8720c"', description: "Outer frame / border background color (the bold statement color)." },
            { name: "backgroundColor", type: "string", default: '"#111111"', description: "Inner container background color." },
            { name: "heading", type: "string", default: '"Uilora"', description: "Massive italic serif heading centered above the grid." },
        ],
        whenToUse: "Use Uilora Soyi for creative studio landing pages, photographer portfolios, editorial platforms, and any brand that wants an unmistakable magazine-cover presence. The outer color frame acts like a branded border for the entire composition.",
        bestPractices: "Use a strong, opinionated outerColor — the contrast between the frame and the black inner container is what makes this grid memorable. The heading uses clamp(5rem, 11vw, 9rem), so it scales naturally with viewport width.",
        whyMatters: "Uilora Soyi helps you build premium Uilora-powered editorial interfaces with an iconic magazine identity. The outer color frame creates a frame-within-a-frame composition that immediately signals intentional, high-end design.",
        faqs: [
            { question: "How does the outer frame work?", answer: "The outer div has background: outerColor and padding: '14px 14px 0' — the bottom 0 means the color bleeds into the bottom edge. The inner container sits inside with its own background." },
            { question: "Why is the bottom padding 0 on the outer div?", answer: "To create the effect of the outer color 'framing' the sides and top like a printed magazine cover border, while the bottom naturally terminates with the content." },
            { question: "Can I change the image proportions?", answer: "Yes — edit the height values in SoyiTile calls. Col 3 has a single 580px tile for an asymmetric tall-column effect." }
        ],
    },
    {
        id: "masonry-feed",
        name: "Uilora Feed",
        description: "Uilora Feed — social/Pinterest-style masonry grid with white card posts, Georgia serif typography, heart/view engagement counts, and staggered columns.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "social", "feed", "pinterest", "cards", "light"],
        previewUrl: "/Grids&Layouts/MasonryGrids/MasonryFeed",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/MasonryFeed.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/MasonryFeed.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/MasonryFeed/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[/* 6 Unsplash URLs */]", description: "Array of 6 image URLs for the image-bearing feed cards." },
            { name: "backgroundColor", type: "string", default: '"#f0eee8"', description: "Warm off-white background for the feed." },
            { name: "heading", type: "string", default: '"Uilora Feed"', description: "Centered heading above the feed columns." },
            { name: "subheading", type: "string", default: '"Curated visual discoveries."', description: "Subtitle below the heading." },
        ],
        whenToUse: "Use Uilora Feed for social platforms, creative galleries, news/editorial feeds, and any context where content needs to feel discovered and curated. The white card aesthetic creates strong separation between items, making each post feel individually crafted.",
        bestPractices: "Mix image cards and text-only cards for the most authentic social feed feel. The FeedCard renders cleanly with or without an image — text-only cards use just the content padding area.",
        whyMatters: "Uilora Feed helps you build premium Uilora-powered social interfaces that feel both familiar and elevated. The warm background + white cards + Georgia serif creates a refined alternative to standard social feed aesthetics.",
        faqs: [
            { question: "How are text-only cards handled?", answer: "FeedCard checks if src and imgHeight are both provided. If either is missing, no image is rendered — the card shows only the author row, caption, and engagement footer." },
            { question: "Can I change the heart color?", answer: "Yes — the ♥ symbol uses color: '#e8305a' in FeedCard. Pass a different color or export it as a prop if you need brand-specific engagement styling." },
            { question: "How is the stagger achieved?", answer: "Column 2 has marginTop: 28 — a simple top offset that staggers the column starts, creating the Pinterest-style visual offset without CSS columns or JavaScript." }
        ],
    },
    {
        id: "masonry-studio",
        name: "Uilora Studio",
        description: "Uilora Studio — minimal photo gallery masonry grid with a 'studio.' wordmark, category filter pills, 4-column layout, and spring hover animations.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "gallery", "minimal", "studio", "photographer", "light"],
        previewUrl: "/Grids&Layouts/MasonryGrids/MasonryStudio",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/MasonryStudio.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/MasonryStudio.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/MasonryStudio/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[/* 10 Unsplash URLs */]", description: "Array of 10 image URLs for the 4-column studio grid." },
            { name: "backgroundColor", type: "string", default: '"#f6f6f4"', description: "Off-white background for the studio." },
            { name: "wordmark", type: "string", default: '"studio."', description: "Brand wordmark in the top navigation." },
            { name: "heading", type: "string", default: '"Uilora Studio"', description: "Internal heading reference (used for accessibility)." },
        ],
        whenToUse: "Use Uilora Studio for photographer portfolios, image libraries, creative agency galleries, and stock photography platforms. The 4-column grid accommodates more content density while maintaining clean, professional spacing.",
        bestPractices: "Provide exactly 10 images for the best layout. Column 2 gets the 400px hero tile — place your most impactful image at index [3] for maximum visual weight.",
        whyMatters: "Uilora Studio helps you build premium Uilora-powered photography interfaces that feel like dedicated gallery platforms. The category pills and clean navigation give users a sense of control while the grid composition communicates curation.",
        faqs: [
            { question: "How do the category pills work?", answer: "They are styled buttons — the first ('Featured') gets a filled black background, all others get an outlined style with border: '1px solid #ccc'. Wiring them to actual filter logic requires adding state and filtering the images array." },
            { question: "Why is column 2 offset by marginTop: 24?", answer: "The visual offset creates a staggered masonry appearance where column 2's hero tile appears to 'drop in' slightly later, adding depth to the grid composition." },
            { question: "What is the 'Uilora Studio' credit badge?", answer: "Each StudioTile has an absolute-positioned pill with backdrop-filter blur in the bottom-right corner — mimicking photo attribution badges used on professional image platforms." }
        ],
    },
    {
        id: "masonry-collection",
        name: "Uilora Collection",
        description: "Uilora Collection — editorial e-commerce bento masonry grid with vertical text tile, product cards, 'SHOP NOW >' CTAs, and a 5-column layout.",
        category: "Grids & Layouts",
        installType: "cli",
        tags: ["masonry", "ecommerce", "editorial", "bento", "collection", "cream"],
        previewUrl: "/Grids&Layouts/MasonryGrids/MasonryCollection",
        code: {
            tsx: getCode("src/components/Grids&Layouts/MasonryGrids/tsx/MasonryCollection.tsx"),
            jsx: getCode("src/components/Grids&Layouts/MasonryGrids/jsx/MasonryCollection.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Grids&Layouts/MasonryGrids/MasonryCollection/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[/* 6 Unsplash URLs */]", description: "Array of 6 image URLs for the collection product tiles." },
            { name: "backgroundColor", type: "string", default: '"#faf7f0"', description: "Warm cream background for the collection page." },
            { name: "accentColor", type: "string", default: '"#e8720c"', description: "Accent color for 'SHOP NOW >' links, vertical text, and the Fall Gear circle button." },
            { name: "heading", type: "string", default: '"Uilora Collection"', description: "Internal heading reference (passed to nav wordmark)." },
        ],
        whenToUse: "Use Uilora Collection for fashion e-commerce, product collection pages, seasonal drops, and editorial shopping experiences. The vertical text tile creates an unmistakable visual anchor that communicates the season or theme.",
        bestPractices: "The 5-column grid uses fractional units (0.7fr 1.1fr 1fr 1fr 0.8fr) — keep the VerticalTextTile in column 1 and the featured CollectionTile (height 460) in column 4 for the intended visual hierarchy.",
        whyMatters: "Uilora Collection helps you build premium Uilora-powered e-commerce interfaces that feel like high-fashion editorial spreads. The vertical text column immediately communicates seasonal identity while the product cards provide clean browsing and purchase intent.",
        faqs: [
            { question: "How does the VerticalTextTile work?", answer: "It maps an array of characters (e.g. ['F','A','L','L',\"'\",'2','4']) to individual span elements stacked in a flex column — each character is 46px Georgia 900 weight in the accentColor." },
            { question: "Can I change the season text?", answer: "The letters array is hardcoded in the component. To make it customizable, add a seasonLetters prop to MasonryCollection and pass it to VerticalTextTile." },
            { question: "What makes the 'SHOP NOW >' link style work?", answer: "It's a standard anchor tag with textDecoration: underline, color: accentColor, fontWeight: 600, and letterSpacing: 0.04em — a clean, readable CTA that works across any accent color." }
        ],
    },
];

