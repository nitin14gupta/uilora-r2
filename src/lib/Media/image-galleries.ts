import { getCode } from "../getCode";
import { Component } from "../types";

export const imageGalleryComponents: Component[] = [
    {
        id: "gallery-mosaic",
        name: "Mosaic",
        description: "Floating parallax mosaic gallery with soft minimal design.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "mosaic", "parallax", "minimal"],
        previewUrl: "/Media/ImageGalleries/GalleryMosaic",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryMosaic.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryMosaic.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryMosaic/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[...array of 15 image URLs]", description: "Array of image source URLs (15 recommended for 5 per column)." },
            { name: "backgroundColor", type: "string", default: "#FDFBF7", description: "Background color (hex, rgb, or hsl)." },
            { name: "viewText", type: "string", default: "View", description: "Text displayed on hover overlay." },
            { name: "scrollSpeed1", type: "number", default: "-200", description: "Scroll speed for first column (negative = up, positive = down)." },
            { name: "scrollSpeed2", type: "number", default: "150", description: "Scroll speed for second column." },
            { name: "scrollSpeed3", type: "number", default: "-100", description: "Scroll speed for third column." },
        ],
        whenToUse: "Perfect for fashion editorials, interior design portfolios, and travel blogs that want a light, airy 'Mosaic' aesthetic. Use this gallery to showcase a collection of images with a sense of depth and organic movement.",
        bestPractices: "Maintain consistent spacing within your design system by keeping the column gaps uniform. Follow React best practices by pairing this with high-fidelity, professional photography. Optimize for performance by using efficient image loading patterns.",
        whyMatters: "Mosaic layouts communicate digital elegance, sophistication, and attention to detail. This production-ready UI template helps you build an interface that feels curated and premium, leaving a lasting visual impression on high-value clients.",
        faqs: [
            { question: "How does the parallax work?", answer: "The gallery uses localized scroll-driven animations with varying speeds for each column, creating a high-fidelity 'depth' effect as the user navigates the page." },
            { question: "Can I adjust the speeds?", answer: "Absolutely, both the direction and intensity of the column movement (scrollSpeed1, 2, 3) are fully configurable to match your scroll intensity." },
            { question: "Is it mobile responsive?", answer: "Yes, the multi-column mosaic adapts its spans dynamically for mobile, ensuring the organic flow remains impactful and readable on small screens." }
        ],
    },
    {
        id: "gallery-diagonal",
        name: "Diagonal",
        description: "Diagonal slice gallery with neo-brutalism and cyber aesthetics.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "diagonal", "brutalist", "cyber"],
        previewUrl: "/Media/ImageGalleries/GalleryDiagonal",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryDiagonal.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryDiagonal.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryDiagonal/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[...array of image URLs]", description: "Array of image source URLs." },
            { name: "backgroundColor", type: "string", default: "#09090b", description: "Background color (hex, rgb, or hsl)." },
            { name: "labelPrefix", type: "string", default: "IMG", description: "Prefix text for image labels." },
            { name: "overlayColor", type: "string", default: "#a855f7", description: "Overlay accent color (hex, rgb, or hsl)." },
            { name: "badgeColor", type: "string", default: "#84cc16", description: "Badge background color (hex, rgb, or hsl)." },
            { name: "badgeTextColor", type: "string", default: "#000000", description: "Badge text color (hex, rgb, or hsl)." },
            { name: "rows", type: "number", default: "3", description: "Number of diagonal rows to display." },
        ],
        whenToUse: "Ideal for edgy streetwear brands, experimental art portfolios, and Next.js applications that want an energetic 'Diagonal' aesthetic. Use this gallery to showcase project collections with a high-intensity, industrial 'Raw' vibe.",
        bestPractices: "Maintain consistent spacing within your design system by using it for aggressive brand storytelling. Follow React best practices by pairing it with bold, technical typography. Optimize for performance by managed the marquee intensity.",
        whyMatters: "Diagonal-based aesthetics communicate power, mystery, and structural honesty. This production-ready UI template helps you build an interface that feels authoritative and solid, breaking the 'standard' web layout rules.",
        faqs: [
            { question: "Why 'Diagonal'?", answer: "The gallery features skewed containers and slanted text paths to simulate the raw structural honesty of the brutalist architectural movement." },
            { question: "Can I adjust colors?", answer: "Yes, both the primary 'overlayColor' and the specific 'badgeColor' are fully configurable, allowing you to create 'Cyber' or 'Industrial' pop effects." },
            { question: "Is it mobile responsive?", answer: "The diagonal rows adapt their spans dynamically for mobile, ensuring the bold narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "gallery-broken",
        name: "Broken Grid",
        description: "Broken grid gallery with asymmetric layout.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "broken", "grid", "asymmetric"],
        previewUrl: "/Media/ImageGalleries/GalleryBroken",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryBroken.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryBroken.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryBroken/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[...array of image URLs]", description: "Array of image source URLs." },
            { name: "backgroundColor", type: "string", default: "#050505", description: "Background color (hex, rgb, or hsl)." },
            { name: "textColor", type: "string", default: "#ffffff", description: "Text color (hex, rgb, or hsl)." },
            { name: "borderColor", type: "string", default: "rgba(255,255,255,0.1)", description: "Border color (hex, rgb, or rgba)." },
            { name: "exploreText", type: "string", default: "Explore", description: "Text displayed in the explore section." },
        ],
        whenToUse: "Excellent for technical portfolios, edgy agencies, and Next.js platforms that want a dramatic 'Broken Grid' aesthetic. Use this layout to communicate structural scale and digital craft through architectural modules.",
        bestPractices: "Maintain consistent spacing within your design system by using variable, organic grid gaps. Follow React best practices by pairing this with bold, technical typography. Optimize for performance by using efficient image textures.",
        whyMatters: "Broken layouts communicate power, mystery, and structural honesty. This production-ready UI template helps you build an interface that feels authoritative and solid, breaking the 'standard' web layout rules.",
        faqs: [
            { question: "How is it 'Broken'?", answer: "The grid uses non-uniform column spans and staggered vertical offsets (y-translation) to simulate the raw structural honesty of architectural blueprint failures." },
            { question: "Can I add more text?", answer: "Absolutely, while optimized for high-contrast imagery, you can expand the text cards to include project descriptions or technical metadata." },
            { question: "Is it mobile responsive?", answer: "The grid's asymmetric spans adapt dynamically for mobile, ensuring the structural narrative remains impactful on small screens." }
        ],
    },
    {
        id: "gallery-deck",
        name: "Z-Stack",
        description: "Z-stack deck gallery with layered cards.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "deck", "stack", "layered"],
        previewUrl: "/Media/ImageGalleries/GalleryDeck",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryDeck.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryDeck.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryDeck/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[...array of image URLs]", description: "Array of image source URLs." },
            { name: "backgroundColor", type: "string", default: "#e0e5ec", description: "Background color (hex, rgb, or hsl)." },
            { name: "title", type: "string", default: "The Stack.", description: "Main title text." },
            { name: "description", type: "string", default: "Hover to expand the collection. A playful take on depth.", description: "Description text." },
            { name: "cardCount", type: "number", default: "5", description: "Number of cards to display in the stack." },
            { name: "shadowColor", type: "string", default: "#bebebe", description: "Shadow color for neumorphic effect (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for wellness apps, lifestyle brands, and Next.js platforms that want a soft 'Clay' aesthetic. Use this gallery for an engaging 'Deck' experience where images feel 'Physical' and 'Stacked' like real paper cards.",
        bestPractices: "Maintain consistent spacing within your design system by adhering to the soft neumorphic shadows. Follow React best practices by using pure Tailwind for the layout structure. Optimize for performance by using systematic typography scales.",
        whyMatters: "Neumorphic 'Clay' aesthetics communicate technical reliability, clarity, and timeless craft. This production-ready UI template helps you build an interface that feels organized and professional, reflecting a brand identity rooted in design purity.",
        faqs: [
            { question: "What is 'Clay Case'?", answer: "The component uses localized CSS box-shadows and subtle inner glows to simulate the soft, matte surfaces found in high-fidelity 3D clay renders." },
            { question: "How does it expand?", answer: "The deck uses localized mouse coordinates to fan out the cards during hover, creating a high-fidelity 'physical' expansion of the underlying project detail." },
            { question: "Is it mobile responsive?", answer: "The stack count and typographic scales adapt for mobile, ensuring the 'Deck' feel remains consistent on high-density mobile screens." }
        ],
    },
    {
        id: "gallery-cinematic",
        name: "Cinematic",
        description: "Cinematic gallery with widescreen presentation.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "cinematic", "widescreen", "presentation"],
        previewUrl: "/Media/ImageGalleries/GalleryCinematic",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryCinematic.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryCinematic.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryCinematic/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2700&auto=format&fit=crop", description: "Main image source URL." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color (hex, rgb, or hsl)." },
            { name: "title", type: "string", default: "Élégance", description: "Main title text." },
            { name: "subtitle", type: "string", default: "Cinematic Experience", description: "Subtitle text." },
            { name: "triggerTexts", type: "string[]", default: "['Zoom.', 'Expand.', 'Immerse.']", description: "Array of trigger text strings displayed during scroll." },
            { name: "scrollHeight", type: "string", default: "250vh", description: "Total scroll height for the component." },
        ],
        whenToUse: "Excellent for high-end fashion campaigns, award-winning portfolios, and Next.js applications that want a meaningful 'Cinematic' aesthetic. Use this layout to communicate digital excellence and sophisticated storytelling through widescreen modules.",
        bestPractices: "Maintain consistent spacing within your design system by using it for focal narratives. Follow React best practices by pairing this with bold, professional typography. Optimize for performance by using efficient image textures.",
        whyMatters: "Cinematic-based aesthetics communicate technical reliability, clarity, and timeless craft. This production-ready UI template helps you build an interface that feels organized and professional, reflecting a brand identity rooted in design purity.",
        faqs: [
            { question: "How does it scale?", answer: "The component uses localized scroll-driven transforms (scale, blur) to simulate a high-fidelity 'Camera Zoom' into the heart of the project narrative." },
            { question: "Can I adjust scroll?", answer: "Yes, both the direction and intensity of the zoom (scrollHeight) are fully configurable to match your scroll intensity." },
            { question: "Is it mobile responsive?", answer: "The cinematic scale and typographic scales adapt for mobile, ensuring the objective clarity remains consistent on high-density mobile screens." }
        ],
    },
    {
        id: "uilora-gallery-film-strip",
        name: "Film Strip",
        description: "Film strip gallery with horizontal scrolling.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "film", "strip", "scrolling"],
        previewUrl: "/Media/ImageGalleries/GalleryFilmStrip",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryFilmStrip.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryFilmStrip.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryFilmStrip/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[...array of image URLs]", description: "Array of image source URLs." },
            { name: "backgroundColor", type: "string", default: "#f0f0f0", description: "Background color (hex, rgb, or hsl)." },
            { name: "archiveText", type: "string", default: "Archive 2024", description: "Archive label text displayed at top." },
            { name: "figurePrefix", type: "string", default: "FIG.", description: "Prefix for figure labels." },
            { name: "isoText", type: "string", default: "ISO 400", description: "ISO text displayed on each image." },
            { name: "scrollHeight", type: "string", default: "300vh", description: "Total scroll height for the component." },
        ],
        whenToUse: "Ideal for creative studios, experimental art projects, and Next.js portfolios that want an organic 'Film-Strip' aesthetic. Use this layout for an engaging experience where content feels 'Mailed' and 'Drafted' by physical film borders.",
        bestPractices: "Maintain scalable component architecture by keeping the archive labels consistent. Follow React best practices by pairing this with bold, technical typography. Optimize for performance by managed the marquee intensity.",
        whyMatters: "Hand-drawn film animations create a sense of digital 'Authenticity' and human touch. This production-ready UI template helps you build an interface that feels alive and 'Drafted', adding a unique signatures to your brand structure.",
        faqs: [
            { question: "Are those film labels real?", answer: "The component features localized metadata strings (ISO 400, FIG.) and rough film-strip borders to simulate the raw structural honesty of architectural blueprint failures." },
            { question: "How does it scroll?", answer: "The strip uses localized scroll-driven animations with varying offsets for each row, creating a high-fidelity 'physical' movement as the user navigates the page." },
            { question: "Is it mobile responsive?", answer: "The horizontal flow and typographic scales adapt for mobile, ensuring the 'Draft' narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "gallery-editorial",
        name: "Editorial",
        description: "Editorial gallery with magazine-style layout.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "editorial", "magazine", "layout"],
        previewUrl: "/Media/ImageGalleries/GalleryEditorial",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryEditorial.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryEditorial.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryEditorial/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "items", type: "Array<{image: string, chapter?: string, title?: string, titleItalic?: string, description?: string}>", default: "[{image: '...', chapter: 'CHAPTER 01', title: 'The Silent', titleItalic: 'Symphony', description: '...'}, ...]", description: "Array of editorial items with image, chapter, title, titleItalic, and description." },
            { name: "backgroundColor", type: "string", default: "#1a1a1a", description: "Background color (hex, rgb, or hsl)." },
            { name: "textColor", type: "string", default: "#e5e5e5", description: "Text color (hex, rgb, or hsl)." },
            { name: "accentColor", type: "string", default: "#d4af37", description: "Accent color for chapter labels (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for high-end fashion portfolios, editorial magazines, and creative agencies that want a sharp 'Editorial' aesthetic. Use this layout to showcase project collections with a mix of asymmetrical heights and technical typography.",
        bestPractices: "Follow React best practices by pairing this with professional, high-contrast photography. Maintain consistent spacing within your design system by keeping the grid gaps uniform. Optimize for performance by using efficient image loading patterns.",
        whyMatters: "Editorial layouts communicate digital excellence, fashion-forward thinking, and attention to detail. This production-ready UI template helps you build an interface that feels curated and premium, leaving a lasting visual impression on high-value clients.",
        faqs: [
            { question: "How does the 'Chapter' work?", answer: "The gallery is designed with an indexing feel (Chapter 01, 02) to simulate a technical feature repository or architectural project repository." },
            { question: "Can I adjust the typography?", answer: "Absolutely, both the primary 'title' and the specific 'titleItalic' weights are fully configurable, allowing you to create 'High-Contrast' magazine effects." },
            { question: "Is it mobile responsive?", answer: "The vertical flow and typographic scales adapt for mobile, ensuring the 'Draft' narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "gallery-profile",
        name: "Uilora Discover",
        description: "Uilora-branded Pinterest-style masonry gallery — 22 images load in batches via an arrow button, with frosted-glass profile pills on hover and a bottom dissolve fade.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "masonry", "profile", "pinterest", "hover", "uilora"],
        previewUrl: "/Media/ImageGalleries/GalleryProfile",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryProfile.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryProfile.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryProfile/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "images", type: "Array<{src: string, profileName?: string}>", default: "[{src: '...', profileName: 'Sofia Laurent'}, ...]", description: "Array of image objects. Each needs a src URL; profileName is optional and appears in the hover pill." },
            { name: "backgroundColor", type: "string", default: "#fafafa", description: "Background and fade color — the bottom dissolve gradient is derived from this value automatically." },
        ],
        whenToUse: "Perfect for Uilora-powered photography portfolios, creative directories, and inspiration boards. The arrow-based batch loading keeps the layout clean while hinting at a rich, deep collection — ideal for showcasing attributed creator content.",
        bestPractices: "Use images with varied natural aspect ratios to maximise the masonry feel. The bottom fade gradient auto-matches backgroundColor, so keep them in sync. Keep profile names under 20 characters so the pill stays compact.",
        whyMatters: "The Uilora Discover pattern mirrors the world's most engaging visual platforms — batch loading creates anticipation, profile attribution builds trust, and the bottom dissolve implies infinite depth without any visible pagination chrome.",
        faqs: [
            { question: "How does batch loading work?", answer: "The component starts with 12 images and each arrow click reveals 8 more. Once all images are loaded, the arrow swaps for an 'All N creators loaded' confirmation pill." },
            { question: "How does the profile pill appear?", answer: "Each card uses CSS group-hover transitions — the pill slides in from above with opacity + translateY, a smooth physical reveal with zero JavaScript overhead." },
            { question: "Can I use real avatar photos?", answer: "Yes — extend the ProfileImage type to include an avatarSrc field and replace the gradient-initial div with an <img> tag inside the pill for real portraits." }
        ],
    },
    {
        id: "gallery-studio",
        name: "Studio",
        description: "Editorial photographer studio gallery with click-to-reveal profile panel, central image, and vertical thumbnail strip.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "studio", "editorial", "portfolio", "click"],
        previewUrl: "/Media/ImageGalleries/GalleryStudio",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryStudio.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryStudio.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryStudio/page.tsx") },
        dependencies: ["framer-motion"],
        props: [
            { name: "items", type: "Array<{image: string, name: string, firstName?: string, lastName?: string, location?: string, description?: string}>", default: "[{image: '...', name: 'MERILLE RAAGAS', firstName: 'MERILLE', lastName: 'RAAGAS', location: 'Australia', description: '...'}, ...]", description: "Array of studio items — each represents a subject with their image and profile details." },
            { name: "brandName", type: "string", default: "FELIX MELCHNER", description: "Studio or photographer brand name in the top bar." },
            { name: "backgroundColor", type: "string", default: "#e4e4e7", description: "Outer background color (hex, rgb, or hsl)." },
            { name: "cardBackground", type: "string", default: "#ffffff", description: "Inner card background color (hex, rgb, or hsl)." },
            { name: "textColor", type: "string", default: "#18181b", description: "Primary text color (hex, rgb, or hsl)." },
            { name: "accentColor", type: "string", default: "#18181b", description: "Accent color for selected thumbnail outline and brand dot." },
        ],
        whenToUse: "Ideal for photographer portfolios, model agencies, and creative studios that want a sharp editorial 'Studio' aesthetic. The click-based navigation between subjects makes it perfect for showcasing a curated roster.",
        bestPractices: "Use portrait-oriented images for best visual impact in the center panel. Keep descriptions to 2–3 sentences for readability. The `firstName`/`lastName` split creates the bold stacked-name effect — provide both for best results.",
        whyMatters: "The studio layout communicates authority and curation — it positions the brand as the curator, not just a container. The thumbnail strip creates an implicit sense of depth and roster, suggesting quality through quantity while keeping focus on a single subject at a time.",
        faqs: [
            { question: "How does the image transition work?", answer: "Clicking a thumbnail triggers AnimatePresence with a crossfade (opacity + subtle scale) on the main image, and a vertical slide on the profile text — all powered by Framer Motion." },
            { question: "Can I add more than 6 items?", answer: "Yes — the thumbnail strip is scrollable, so you can add as many items as needed. The right panel will overflow-y: auto to accommodate the extra thumbnails." },
            { question: "Is the layout responsive?", answer: "The layout is optimized for medium to large screens. For mobile, consider rendering only the center image and a horizontal thumbnail scroll by conditionally applying Tailwind classes at the sm breakpoint." }
        ],
    },
    {
        id: "gallery-vault",
        name: "Vault",
        description: "Uilora Vault — immersive 3D spherical gallery powered by Three.js. 180 image planes on a Fibonacci sphere, drag-to-rotate with inertia, hover-to-enlarge, and click-to-lightbox.",
        category: "Media",
        installType: "cli",
        tags: ["gallery", "3d", "three.js", "sphere", "immersive", "vault", "uilora", "interactive"],
        previewUrl: "/Media/ImageGalleries/GalleryVault",
        code: {
            tsx: getCode("src/components/Media/ImageGalleries/tsx/GalleryVault.tsx"),
            jsx: getCode("src/components/Media/ImageGalleries/jsx/GalleryVault.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/ImageGalleries/GalleryVault/page.tsx") },
        dependencies: ["framer-motion", "three"],
        props: [
            { name: "images", type: "string[]", default: "[...array of 30 image URLs]", description: "Array of image URLs distributed across 180 sphere planes (cycled if fewer than 180 are provided)." },
            { name: "backgroundColor", type: "string", default: "#07070d", description: "Background and fog color of the 3D scene — also tints the radial vignette overlay." },
        ],
        whenToUse: "Perfect for Uilora-powered art exhibitions, premium portfolio showcases, and creative agencies that want a jaw-dropping 3D presence. The Vault turns any image collection into an immersive 360° gallery that users genuinely want to explore.",
        bestPractices: "Supply at least 30 high-quality square or landscape images for best sphere density — the component cycles through them to fill all 180 planes. Use a dark backgroundColor for maximum depth and contrast. Three.js loads lazily (28 images initially, 14 per batch), so performance is excellent even on lower-end devices.",
        whyMatters: "The Vault is a statement piece — it signals that the brand thinks differently. A spherical art exhibition in the browser creates a cinematic first impression that flat galleries simply cannot match, dramatically increasing time-on-page and memorability.",
        faqs: [
            { question: "How does the 3D sphere work?", answer: "Images are placed as flat planes at positions calculated using a Fibonacci sphere algorithm, which evenly distributes points across a sphere surface with no clustering at poles — the same technique used in scientific visualization." },
            { question: "Does it work server-side?", answer: "Three.js is imported dynamically inside a useEffect, so no server-side rendering occurs. The canvas only initializes in the browser, making it fully Next.js compatible." },
            { question: "How does lazy loading work?", answer: "The first 28 textures load immediately on mount. Every 80 animation frames thereafter, the next batch of 14 textures loads — textures appear smoothly without blocking the render loop." },
            { question: "Can I navigate to a specific image?", answer: "Click any image plane to open it full-size in a spring-animated lightbox overlay. Press Escape or click outside to close." }
        ],
    },
];
