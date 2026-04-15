import { getCode } from "../getCode";
import { Component } from "../types";

export const carouselComponents: Component[] = [
    {
        id: "depth",
        name: "Depth Parallax",
        description: "Carousel with depth parallax scrolling effects.",
        category: "Special Elements",
        installType: "cli",
        tags: ["carousel", "parallax", "depth", "scroll"],
        previewUrl: "/SpecialElements/Carousels/Depth",
        code: {
            tsx: getCode("src/components/SpecialElements/Carousels/tsx/CarouselDepth.tsx"),
            jsx: getCode("src/components/SpecialElements/Carousels/jsx/CarouselDepth.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Carousels/Depth/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[url1, url2, ...]", description: "Array of image URLs to display." },
            { name: "labels", type: "string[]", default: "[]", description: "Optional labels for each slide." },
            { name: "defaultIndex", type: "number", default: "0", description: "Initial active slide index." },
            { name: "containerBgColor", type: "string", default: "#000000", description: "Background color of the container." },
            { name: "height", type: "string", default: "16rem", description: "Height of the carousel container." },
            { name: "maxWidth", type: "string", default: "28rem", description: "Maximum width of the container." },
        ],
        whenToUse: "Excellent for luxury brand landing pages, cinematic portfolios, and applications that want an immersive depth aesthetic.",
        bestPractices: "Use high-contrast imagery to maximize the parallax depth effect. Keep label text short and bold.",
        whyMatters: "Depth-based parallax creates visual hierarchy that flat carousels cannot achieve — it signals premium craft to the viewer.",
        faqs: [
            { question: "How does the depth effect work?", answer: "Layers scale and translate at different rates during transitions, creating the illusion of spatial depth." },
            { question: "Can I adjust the effect intensity?", answer: "Yes — customize the Framer Motion transition properties to control scale and translation distances." },
            { question: "Is it mobile responsive?", answer: "Yes, the layout adapts for smaller screens while preserving the depth effect." }
        ],
    },
    {
        id: "infinite",
        name: "Infinite Loop",
        description: "Seamless infinite scrolling carousel with auto-play.",
        category: "Special Elements",
        installType: "cli",
        tags: ["carousel", "infinite", "loop", "scroll", "marquee"],
        previewUrl: "/SpecialElements/Carousels/Infinite",
        code: {
            tsx: getCode("src/components/SpecialElements/Carousels/tsx/CarouselInfinite.tsx"),
            jsx: getCode("src/components/SpecialElements/Carousels/jsx/CarouselInfinite.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Carousels/Infinite/page.tsx")
        },
        dependencies: ["framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[url1, url2, ...]", description: "Array of image URLs to loop." },
            { name: "animationDuration", type: "number", default: "20", description: "Duration of one complete loop in seconds." },
            { name: "imageHeight", type: "string", default: "6rem", description: "Height of each image card." },
            { name: "imageWidth", type: "string", default: "8rem", description: "Width of each image card." },
            { name: "imageGap", type: "string", default: "0.5rem", description: "Gap between image cards." },
            { name: "maxWidth", type: "string", default: "32rem", description: "Maximum width of the carousel." },
        ],
        whenToUse: "Ideal for logo walls, sponsor strips, image galleries, and any context where content should feel continuously in motion.",
        bestPractices: "Use a consistent aspect ratio for all images. Slower animation speeds work better for readability; faster speeds work for abstract visual texture.",
        whyMatters: "Infinite loops create a sense of abundance and momentum — they communicate an active, living brand.",
        faqs: [
            { question: "How does the seamless loop work?", answer: "Images are duplicated and the strip repositions silently when it reaches the end, creating a perfect infinite scroll." },
            { question: "Can I pause on hover?", answer: "Yes — add onMouseEnter/Leave handlers to pause and resume the Framer Motion animation controls." },
            { question: "Is it mobile responsive?", answer: "Yes — the horizontal flow adapts naturally to any container width." }
        ],
    },
    {
        id: "story",
        name: "Vertical Story",
        description: "Vertical story-style carousel with auto-advancing progress indicators.",
        category: "Special Elements",
        installType: "cli",
        tags: ["carousel", "story", "vertical", "progress", "instagram"],
        previewUrl: "/SpecialElements/Carousels/Story",
        code: {
            tsx: getCode("src/components/SpecialElements/Carousels/tsx/CarouselStory.tsx"),
            jsx: getCode("src/components/SpecialElements/Carousels/jsx/CarouselStory.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Carousels/Story/page.tsx")
        },
        dependencies: ["framer-motion"],
        props: [
            { name: "images", type: "string[]", default: "[url1, url2, ...]", description: "Array of image URLs to display." },
            { name: "labels", type: "{title?: string, subtitle?: string}[]", default: "[]", description: "Optional labels per slide." },
            { name: "autoPlayInterval", type: "number", default: "100", description: "Auto-play interval in milliseconds." },
            { name: "progressIncrement", type: "number", default: "2", description: "Progress increment per interval (percentage)." },
            { name: "height", type: "string", default: "24rem", description: "Height of the carousel." },
            { name: "width", type: "string", default: "16rem", description: "Width of the carousel." },
        ],
        whenToUse: "Perfect for social-media style story viewers, onboarding flows, and portfolio showcases that benefit from the Instagram story format.",
        bestPractices: "Keep slide count to 4-6 for optimal UX. Use portrait images that fill the card. Ensure text labels are short enough to read before auto-advance.",
        whyMatters: "The story format is one of the most recognizable and engaging UI patterns. It creates urgency and momentum that drives users through content.",
        faqs: [
            { question: "How does the progress bar work?", answer: "Each progress bar fills over time using a setInterval. When full, the next slide automatically advances." },
            { question: "Can I tap to advance?", answer: "Yes — clicking either the left or right half of the card advances or goes back, following the Instagram story convention." },
            { question: "Is it mobile responsive?", answer: "Yes — the portrait format is inherently mobile-friendly." }
        ],
    },
    {
        id: "focus-card",
        name: "Focus Card",
        description: "Centered 3-card carousel — active card enlarged and elevated with serif italic label and counter.",
        category: "Special Elements",
        installType: "cli",
        tags: ["carousel", "focus", "centered", "editorial", "card"],
        previewUrl: "/SpecialElements/Carousels/FocusCard",
        code: {
            tsx: getCode("src/components/SpecialElements/Carousels/tsx/CarouselFocusCard.tsx"),
            jsx: getCode("src/components/SpecialElements/Carousels/jsx/CarouselFocusCard.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Carousels/FocusCard/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "items", type: "FocusItem[]", default: "DEFAULT_ITEMS (12 items)", description: "Array of items with id, image URL, label, and category." },
            { name: "defaultActive", type: "number", default: "5", description: "Index of the initially active card." },
            { name: "bgColor", type: "string", default: "#e8e8ea", description: "Background color of the carousel container." },
        ],
        whenToUse: "Use for editorial showcases, theme selectors, or any interface where a curated visual selection needs to feel intentional. The serif italic labels add a refined, magazine-like character.",
        bestPractices: "Use images with strong focal points that read well at portrait aspect ratio. Keep labels short — 1-2 words maximum for the italic serif overlay.",
        whyMatters: "The centered focus pattern with counter (06/12) communicates curation and depth, implying a rich catalog behind the visible selection.",
        faqs: [
            { question: "How are the 3 cards positioned?", answer: "Three items render simultaneously — active at center with scale 1.0, adjacent cards at scale 0.80 and ±224px x-offset, using Framer Motion spring transitions." },
            { question: "Can I click side cards to navigate?", answer: "Yes — clicking either side card advances in that direction." },
            { question: "How do I change the label font?", answer: "The label uses font-family Georgia (serif) with italic style. Pass a custom fontFamily inline or override the style in your own wrapper." }
        ],
    },
    {
        id: "travel-cards",
        name: "Travel Cards",
        description: "Tall portrait card carousel with metadata overlay — title, duration, and star rating per card.",
        category: "Special Elements",
        installType: "cli",
        tags: ["carousel", "cards", "travel", "portrait", "metadata"],
        previewUrl: "/SpecialElements/Carousels/TravelCards",
        code: {
            tsx: getCode("src/components/SpecialElements/Carousels/tsx/CarouselTravelCards.tsx"),
            jsx: getCode("src/components/SpecialElements/Carousels/jsx/CarouselTravelCards.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Carousels/TravelCards/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "items", type: "TravelItem[]", default: "DEFAULT_ITEMS (6 items)", description: "Array of items with id, image URL, title, days, and rating." },
            { name: "defaultActive", type: "number", default: "1", description: "Index of the initially active card." },
            { name: "accentColor", type: "string", default: "#14b8a6", description: "Accent color for the active card border and dot indicator." },
        ],
        whenToUse: "Perfect for travel apps, booking platforms, product showcases, and any interface with tall portrait images and per-item metadata.",
        bestPractices: "Use portrait images (3:4 ratio) for best results. Keep titles concise. The accentColor creates a subtle border on the active card — choose it to match your brand.",
        whyMatters: "The portrait card format maximizes visual impact for each item while the metadata overlay provides all key information without additional UI elements.",
        faqs: [
            { question: "How does the center card scale work?", answer: "The active card scales to 1.05x, side cards to 0.86x. All use spring physics for natural-feeling transitions." },
            { question: "Can I click side cards to navigate?", answer: "Yes — clicking either side card navigates in that direction." },
            { question: "Can I add more metadata fields?", answer: "Yes — extend the TravelItem interface and add more spans inside the metadata overlay div." }
        ],
    },
    {
        id: "tilt-gallery",
        name: "Tilt Gallery",
        description: "Editorial row of slightly tilted images that straighten and elevate on hover.",
        category: "Special Elements",
        installType: "cli",
        tags: ["carousel", "gallery", "tilt", "hover", "editorial"],
        previewUrl: "/SpecialElements/Carousels/TiltGallery",
        code: {
            tsx: getCode("src/components/SpecialElements/Carousels/tsx/CarouselTiltGallery.tsx"),
            jsx: getCode("src/components/SpecialElements/Carousels/jsx/CarouselTiltGallery.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Carousels/TiltGallery/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "items", type: "TiltItem[]", default: "DEFAULT_ITEMS (5 items)", description: "Array of items with id, image URL, and optional caption." },
            { name: "heading", type: "string", default: "\"Find your dream\"", description: "First line of the heading." },
            { name: "headingAccent", type: "string", default: "\"aesthetic\"", description: "Second line of the heading (bold, accented)." },
            { name: "subheading", type: "string", default: "\"Explore collections...\"", description: "Descriptive subtext next to the heading." },
            { name: "accentColor", type: "string", default: "#166534", description: "Color of the bold accent heading line." },
            { name: "bgColor", type: "string", default: "#f0ede8", description: "Background color of the full-screen container." },
        ],
        whenToUse: "Use for portfolio showcases, editorial features, mood boards, and any context that benefits from a casual, organic gallery feel rather than a rigid carousel.",
        bestPractices: "Use images with varied colors so the row has visual rhythm. Keep to 4-6 images for optimal layout. The tilt angles are pre-set for visual balance.",
        whyMatters: "Tilted cards break the sterile grid pattern — they communicate creativity and human curation, signaling a design sensibility beyond the default.",
        faqs: [
            { question: "How does the hover interaction work?", answer: "Each card uses Framer Motion animate to tween rotate to 0, scale to 1.08, and y to -10 on mouseenter, reverting on mouseleave." },
            { question: "Can I customize the tilt angles?", answer: "Yes — the TILTS array at the top of the component defines each card's default rotation. Edit it to set your preferred angles." },
            { question: "Is there a click/navigation interaction?", answer: "No traditional next/prev — this component is designed as a gallery display with hover as the primary interaction." }
        ],
    },
    {
        id: "perspective-3d",
        name: "3D Perspective",
        description: "3D Y-axis rotation carousel — side cards fold back in perspective with a CTA button for the active card.",
        category: "Special Elements",
        installType: "cli",
        tags: ["carousel", "3d", "perspective", "rotation", "product"],
        previewUrl: "/SpecialElements/Carousels/Perspective3D",
        code: {
            tsx: getCode("src/components/SpecialElements/Carousels/tsx/Carousel3DPerspective.tsx"),
            jsx: getCode("src/components/SpecialElements/Carousels/jsx/Carousel3DPerspective.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Carousels/Perspective3D/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "items", type: "PerspectiveItem[]", default: "DEFAULT_ITEMS (5 items)", description: "Array of items with id, image URL, title, and optional subtitle." },
            { name: "defaultActive", type: "number", default: "2", description: "Index of the initially active card." },
            { name: "heading", type: "string", default: "\"Choose Your Piece\"", description: "Main heading displayed above the carousel." },
            { name: "subheading", type: "string", default: "\"Explore our curated collection\"", description: "Subtitle below the heading." },
            { name: "ctaLabel", type: "string", default: "\"Add To Cart\"", description: "Label for the action button below the active card." },
            { name: "accentColor", type: "string", default: "#166534", description: "Color for the CTA button border and text." },
            { name: "bgColor", type: "string", default: "#f0f0f6", description: "Background color of the container." },
        ],
        whenToUse: "Perfect for product carousels, collection showcases, and portfolio features where the 3D depth effect communicates premium presentation quality.",
        bestPractices: "Use square or portrait images for best card proportions. Ensure headings clearly describe the collection. The CTA button drives conversion — make the label action-oriented.",
        whyMatters: "Y-axis rotation creates a genuine sense of spatial depth that flat carousels cannot replicate. It makes the center item feel definitively 'selected' and worth acting on.",
        faqs: [
            { question: "How does the Y-rotation work?", answer: "Side cards use rotateY(±42deg) with transformOrigin set to the inner edge, creating a hinge effect. The CSS perspective: 1000px on the parent enables 3D space." },
            { question: "Can I click side cards to navigate?", answer: "Yes — clicking either side card navigates in that direction, just like a standard carousel." },
            { question: "How does the heart/like button work?", answer: "It's local state (useState) — wire it to your actual wishlist/favorites logic as needed." }
        ],
    },
    {
        id: "curve-arc",
        name: "Curve Arc",
        description: "Wide 3D arc carousel — 5 cards arranged on a curved plane with depth-fading side cards and a CTA action button.",
        category: "Special Elements",
        installType: "cli",
        tags: ["carousel", "3d", "arc", "curve", "perspective", "product"],
        previewUrl: "/SpecialElements/Carousels/CurveArc",
        code: {
            tsx: getCode("src/components/SpecialElements/Carousels/tsx/CarouselCurveArc.tsx"),
            jsx: getCode("src/components/SpecialElements/Carousels/jsx/CarouselCurveArc.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Carousels/CurveArc/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "items", type: "CurveItem[]", default: "DEFAULT_ITEMS (7 items)", description: "Array of items with id, image URL, title, and optional subtitle." },
            { name: "defaultActive", type: "number", default: "3", description: "Index of the initially active card." },
            { name: "heading", type: "string", default: "\"Choose Your Piece\"", description: "Main heading above the carousel." },
            { name: "subheading", type: "string", default: "\"Explore our curated collection\"", description: "Subtitle below the heading." },
            { name: "ctaLabel", type: "string", default: "\"Add To Cart\"", description: "Label for the action button." },
            { name: "accentColor", type: "string", default: "#166534", description: "Color for heading and CTA button border." },
        ],
        whenToUse: "Ideal for full-width product showcases, plant/lifestyle shops, and any collection that benefits from showing multiple cards simultaneously on a dramatic curved arc.",
        bestPractices: "Use portrait images for best card proportions. Keep 6-8 items for a rich arc with enough depth falloff. The arc is most visible on wider viewports.",
        whyMatters: "The curved arc layout creates genuine spatial depth with 5 visible cards — far more context than a standard 3-card carousel while maintaining clear center focus.",
        faqs: [
            { question: "How does the arc curve work?", answer: "Each card gets a rotateY angle and z-offset based on distance from active. Cards at distance 1 rotate ±52deg at z:-100; distance 2 rotate ±68deg at z:-260." },
            { question: "Can I click side cards to jump?", answer: "Yes — clicking distance-1 cards advances one step; clicking distance-2 cards jumps two steps." },
            { question: "How does the heart button work?", answer: "It's local liked state — wire to your wishlist/favorites system as needed." }
        ],
    },
    {
        id: "morph-shape",
        name: "Morph Shape",
        description: "Organic blob carousel — the center card morphs between fluid border-radius shapes on each navigation, with side cards at slight angles.",
        category: "Special Elements",
        installType: "cli",
        tags: ["carousel", "blob", "morph", "organic", "shape", "creative"],
        previewUrl: "/SpecialElements/Carousels/MorphShape",
        code: {
            tsx: getCode("src/components/SpecialElements/Carousels/tsx/CarouselMorphShape.tsx"),
            jsx: getCode("src/components/SpecialElements/Carousels/jsx/CarouselMorphShape.jsx"),
        },
        usageCode: {
            tsx: getCode("src/app/(routes)/SpecialElements/Carousels/MorphShape/page.tsx")
        },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "items", type: "MorphItem[]", default: "DEFAULT_ITEMS (5 items)", description: "Array of items with id, image URL, and label." },
            { name: "defaultActive", type: "number", default: "0", description: "Index of the initially active card." },
            { name: "eyebrow", type: "string", default: "\"Convenient Setup\"", description: "Small uppercase label above the heading." },
            { name: "heading", type: "string", default: "\"Hangtimes just got an upgrade.\"", description: "Main heading text." },
            { name: "subheading", type: "string", default: "\"Games can be hosted...\"", description: "Subtitle below the heading." },
            { name: "accentColor", type: "string", default: "#2d6a4f", description: "Color for the eyebrow label." },
            { name: "autoPlayInterval", type: "number", default: "2000", description: "Auto-advance interval in milliseconds." },
        ],
        whenToUse: "Perfect for creative portfolios, art/design showcases, fashion lookbooks, and any brand identity that wants to communicate fluidity and organic creativity.",
        bestPractices: "Use high-quality images with strong visual centers — the blob crop highlights the middle of each image. The purple default accent pairs well with nature and art photography.",
        whyMatters: "Organic blob shapes break the visual monotony of rectangular cards — the morphing animation creates a living, breathing feel that signals premium creative craft.",
        faqs: [
            { question: "How does the shape morphing work?", answer: "CSS border-radius with 8 values (e.g. '62% 38% 46% 54% / 60% 44% 56% 40%') creates organic shapes. Framer Motion animates between shapes using spring physics." },
            { question: "Can I add my own blob shapes?", answer: "Yes — edit the BLOB_SHAPES array at the top of the component with any valid 8-value CSS border-radius string." },
            { question: "What are the side cards?", answer: "The prev/next images render as smaller, tilted blob shapes (±4 deg rotation, 0.65 opacity) on either side of the center card. Clicking them navigates." }
        ],
    },
];
