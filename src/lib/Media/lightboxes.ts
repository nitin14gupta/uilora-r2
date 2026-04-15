import { getCode } from "../getCode";
import { Component } from "../types";

export const lightboxComponents: Component[] = [
    {
        id: "lightbox-hero",
        name: "Cinematic Hero",
        description: "Seamless layout transition lightbox with cinematic hero view.",
        category: "Media",
        installType: "cli",
        tags: ["lightbox", "cinematic", "hero", "transition"],
        previewUrl: "/Media/LightBoxes/LightboxHero",
        code: {
            tsx: getCode("src/components/Media/LightBoxes/tsx/LightboxHero.tsx"),
            jsx: getCode("src/components/Media/LightBoxes/jsx/LightboxHero.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/LightBoxes/LightboxHero/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2000&auto=format&fit=crop", description: "Main image source URL." },
            { name: "backgroundColor", type: "string", default: "#09090b", description: "Page background color." },
        ],
        whenToUse: "Excellent for high-end fashion campaigns, award-winning portfolios, and Next.js applications that want a meaningful 'Cinematic' aesthetic. Use this lightbox to communicate digital excellence and sophisticated storytelling through widescreen modules.",
        bestPractices: "Use high-resolution wide images for the most cinematic impact. Dark backgrounds (near #09090b) make the layout-morph transition most dramatic.",
        whyMatters: "Cinematic-based aesthetics communicate technical reliability, clarity, and timeless craft. This production-ready Uilora template helps you build an interface that feels organized and professional, reflecting a brand identity rooted in design purity.",
        faqs: [
            { question: "How does the expansion work?", answer: "The component uses Framer Motion layout-id to seamlessly morph the thumbnail card into the full-screen cinematic view." },
            { question: "Can I use my own image?", answer: "Yes — pass any image URL via the `image` prop. It fills both the thumbnail and the full-screen view." },
            { question: "Is it mobile responsive?", answer: "The lightbox container uses 95vw × 90vh, scaling fluidly to any screen size." }
        ],
    },
    {
        id: "lightbox-glass",
        name: "Glassmorphism",
        description: "Blur and floating UI glassmorphism lightbox.",
        category: "Media",
        installType: "cli",
        tags: ["lightbox", "glass", "blur", "floating"],
        previewUrl: "/Media/LightBoxes/LightboxGlass",
        code: {
            tsx: getCode("src/components/Media/LightBoxes/tsx/LightboxGlass.tsx"),
            jsx: getCode("src/components/Media/LightBoxes/jsx/LightboxGlass.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/LightBoxes/LightboxGlass/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2700&auto=format&fit=crop", description: "Main image source URL." },
            { name: "backgroundColor", type: "string", default: "linear-gradient(to bottom right, #312e81, #581c87)", description: "Background color or gradient." },
        ],
        whenToUse: "Excellent for high-end digital agencies and portfolios that want a premium 'Glassmorphism' aesthetic with backdrop-blur effects and light refraction.",
        bestPractices: "Use gradient backgrounds for maximum glass effect. Bold, colorful images work best against the frosted overlay.",
        whyMatters: "Glass-based aesthetics communicate digital excellence, sophistication, and high-end craft. This production-ready Uilora template helps you build an interface that feels curated and premium.",
        faqs: [
            { question: "Is the blur real?", answer: "Yes — uses CSS backdrop-filter blur combined with a purple radial glow behind the image for depth." },
            { question: "What's in the info bar?", answer: "A floating glass panel with 'Uilora Visual' title, subtitle, and like/download action buttons." },
            { question: "Is it mobile responsive?", answer: "The modal scales to max-w-5xl and the glass bar adapts its width fluidly." }
        ],
    },
    {
        id: "lightbox-reel",
        name: "Film Reel",
        description: "Film strip reel lightbox with gallery navigation.",
        category: "Media",
        installType: "cli",
        tags: ["lightbox", "film", "reel", "gallery"],
        previewUrl: "/Media/LightBoxes/LightboxReel",
        code: {
            tsx: getCode("src/components/Media/LightBoxes/tsx/LightboxReel.tsx"),
            jsx: getCode("src/components/Media/LightBoxes/jsx/LightboxReel.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/LightBoxes/LightboxReel/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[...10 Unsplash URLs]", description: "Array of image source URLs for the reel." },
            { name: "backgroundColor", type: "string", default: "#0c0a09", description: "Dark background color." },
        ],
        whenToUse: "Ideal for creative studios and portfolios that want an organic 'Film Reel' aesthetic with a scrubable image gallery.",
        bestPractices: "Provide at least 6 images for a satisfying reel experience. Use consistent aspect-ratio images for the cleanest thumbnail strip.",
        whyMatters: "Film reel animations create a sense of authenticity and human touch. This production-ready Uilora template adds a unique cinematic signature to your brand.",
        faqs: [
            { question: "How does navigation work?", answer: "The trigger shows a magazine-cover grid of 3 images. Inside the lightbox, click thumbnails in the bottom reel or use arrow keys." },
            { question: "Are there sprocket holes?", answer: "Yes — a left-edge strip with simulated sprocket holes using inline SVG gives authentic film-strip feel." },
            { question: "Is it mobile responsive?", answer: "The reel bar scrolls horizontally on mobile with touch support." }
        ],
    },
    {
        id: "lightbox-editorial",
        name: "Editorial Split",
        description: "Editorial split lightbox with image and article layout.",
        category: "Media",
        installType: "cli",
        tags: ["lightbox", "editorial", "split", "article"],
        previewUrl: "/Media/LightBoxes/LightboxEditorial",
        code: {
            tsx: getCode("src/components/Media/LightBoxes/tsx/LightboxEditorial.tsx"),
            jsx: getCode("src/components/Media/LightBoxes/jsx/LightboxEditorial.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/LightBoxes/LightboxEditorial/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=2000&auto=format&fit=crop", description: "Editorial image source URL." },
            { name: "backgroundColor", type: "string", default: "#eaeaea", description: "Page background color." },
        ],
        whenToUse: "Ideal for editorial magazines and creative agencies. Use when you want the lightbox to double as a full editorial spread with equal weight on image and copy.",
        bestPractices: "Use high-contrast, dramatic photography on the left panel. The image transitions from grayscale to color on hover for a premium editorial reveal.",
        whyMatters: "Editorial layouts communicate digital excellence and attention to detail. This production-ready Uilora template helps you build an interface that feels curated and premium.",
        faqs: [
            { question: "What's in the article panel?", answer: "The Uilora-branded article includes a category label, serif title, three editorial paragraphs, and a photographer credit." },
            { question: "Can I customize the content?", answer: "The text is baked in as premium Uilora defaults. For custom content, extend the component with additional props." },
            { question: "Is it mobile responsive?", answer: "Stacks vertically on mobile — image on top, article below." }
        ],
    },
    {
        id: "lightbox-story",
        name: "Story Mode",
        description: "Multi-story vertical immersive lightbox with progress bars, tap navigation, and auto-advance.",
        category: "Media",
        installType: "cli",
        tags: ["lightbox", "story", "vertical", "immersive", "social"],
        previewUrl: "/Media/LightBoxes/LightboxStory",
        code: {
            tsx: getCode("src/components/Media/LightBoxes/tsx/LightboxStory.tsx"),
            jsx: getCode("src/components/Media/LightBoxes/jsx/LightboxStory.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/LightBoxes/LightboxStory/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "stories", type: "Array<{image: string, username: string, timeAgo: string, caption: string}>", default: "[{image: '...', username: 'uilora.studio', timeAgo: '2h ago', caption: 'Golden hour at the Uilora archive...'}]", description: "Array of story objects. Each has image URL, username, timeAgo, and caption." },
            { name: "backgroundColor", type: "string", default: "linear-gradient(to top right, #ec4899, #f97316)", description: "Background color or gradient for the avatar row." },
        ],
        whenToUse: "Perfect for social-media-style brand presentations and Uilora campaign showcases. Supports 1–N stories with tap zones, chevron arrows, and auto-advance.",
        bestPractices: "Keep 3–6 stories for optimal UX. Use portrait-oriented images (9:16). Stories auto-advance every 5 seconds.",
        whyMatters: "Story-mode interfaces communicate immediacy, energy, and social authenticity. This production-ready Uilora template captures the feel of premium social storytelling.",
        faqs: [
            { question: "How does navigation work?", answer: "Tap left third to go back, right third to advance. Chevron arrows appear on desktop. Stories auto-advance after 5 seconds." },
            { question: "What's the progress bar?", answer: "Each story has an individual progress bar (3px height). Completed stories show full, current shows live progress, future shows empty." },
            { question: "Is it mobile responsive?", answer: "Uses min(100vw, 390px) × 9:16 aspect ratio — matching standard mobile story dimensions on all screens." }
        ],
    },
    {
        id: "lightbox-perspective",
        name: "3D Perspective",
        description: "3D tilt perspective drag card lightbox.",
        category: "Media",
        installType: "cli",
        tags: ["lightbox", "3d", "perspective", "tilt"],
        previewUrl: "/Media/LightBoxes/LightboxPerspective",
        code: {
            tsx: getCode("src/components/Media/LightBoxes/tsx/LightboxPerspective.tsx"),
            jsx: getCode("src/components/Media/LightBoxes/jsx/LightboxPerspective.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/LightBoxes/LightboxPerspective/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2000&auto=format&fit=crop", description: "Main image source URL." },
            { name: "backgroundColor", type: "string", default: "#cbd5e1", description: "Page background color." },
        ],
        whenToUse: "Excellent for high-end portfolios and campaigns that want a physical, tactile '3D Perspective' experience. The drag-to-tilt interaction makes it memorable.",
        bestPractices: "Use portrait or square images for the best 3D card proportions. The tilt effect is most dramatic with high-contrast imagery.",
        whyMatters: "Perspective-based interactions communicate technical sophistication and craft. This production-ready Uilora template creates a physical feeling in a digital interface.",
        faqs: [
            { question: "How does the tilt work?", answer: "Drag the card in any direction — Framer Motion useMotionValue tracks x/y position and maps it to rotateX/rotateY transforms with perspective-1000px." },
            { question: "Does it snap back?", answer: "Yes — releasing the drag snaps x and y back to 0 via spring physics." },
            { question: "Is it mobile responsive?", answer: "The card scales to max-w-[90vw] on mobile. Touch drag works the same as mouse drag." }
        ],
    },
    {
        id: "lightbox-grid",
        name: "Collection Grid",
        description: "Collection grid lightbox with context expansion and full click-to-open image viewer.",
        category: "Media",
        installType: "cli",
        tags: ["lightbox", "grid", "collection", "expansion"],
        previewUrl: "/Media/LightBoxes/LightboxGrid",
        code: {
            tsx: getCode("src/components/Media/LightBoxes/tsx/LightboxGrid.tsx"),
            jsx: getCode("src/components/Media/LightBoxes/jsx/LightboxGrid.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/LightBoxes/LightboxGrid/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[...10 Unsplash URLs]", description: "Array of image source URLs for the collection grid." },
            { name: "backgroundColor", type: "string", default: "#ffffff", description: "Page background color." },
        ],
        whenToUse: "Excellent for Uilora brand showcases and editorial archives. A circle-reveal opens the dark grid, and clicking any image opens a full-screen viewer with navigation.",
        bestPractices: "Use portrait-oriented images (3:4 ratio) for the cleanest grid cards. Provide 6–12 images for the best grid density.",
        whyMatters: "The two-layer experience (grid reveal → image viewer) creates a premium layered interaction that keeps users engaged. This Uilora template turns a simple gallery into an immersive archive.",
        faqs: [
            { question: "How does clicking an image work?", answer: "Clicking any card opens a full-screen viewer on top of the grid with spring-animated scale-up, image counter, and left/right navigation arrows." },
            { question: "Can I use keyboard navigation?", answer: "Yes — ArrowLeft, ArrowRight navigate between images; Escape closes the viewer or the grid." },
            { question: "Is the grid responsive?", answer: "Grid adapts from 1 → 2 → 3 columns on sm/md/lg breakpoints." }
        ],
    },
    {
        id: "lightbox-minimal",
        name: "Minimal Focus",
        description: "Minimal polaroid-style spotlight focus lightbox.",
        category: "Media",
        installType: "cli",
        tags: ["lightbox", "minimal", "spotlight", "focus"],
        previewUrl: "/Media/LightBoxes/LightboxMinimal",
        code: {
            tsx: getCode("src/components/Media/LightBoxes/tsx/LightboxMinimal.tsx"),
            jsx: getCode("src/components/Media/LightBoxes/jsx/LightboxMinimal.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/LightBoxes/LightboxMinimal/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2700&auto=format&fit=crop", description: "Main image source URL." },
            { name: "backgroundColor", type: "string", default: "#F3F4F6", description: "Page background color." },
        ],
        whenToUse: "Ideal for analog photography portfolios and minimalist showcases. The polaroid card trigger has a tactile hand-placed feel.",
        bestPractices: "Use warm-toned photography for the most authentic polaroid aesthetic. The slight rotation and grayscale transition are intentional — keep them.",
        whyMatters: "Minimal spotlight animations create digital authenticity. This production-ready Uilora template adds a human, handcrafted signature to your interface.",
        faqs: [
            { question: "What's the polaroid effect?", answer: "The trigger card has -1.5deg rotation, shadow, and italic label. Hover straightens it to 0deg over 500ms." },
            { question: "What's in the lightbox?", answer: "A warm #f8f7f5 framed modal with the image, 'UILORA STUDIO — 2024' label, and info/download icons." },
            { question: "Is it mobile responsive?", answer: "The modal scales to max-w-3xl with max-h-[80vh] on all screen sizes." }
        ],
    },
    {
        id: "lightbox-portal",
        name: "Uilora Portal",
        description: "Cosmic portal lightbox with concentric ring reveal, glassmorphism panel, and pulsing ambient rings.",
        category: "Media",
        installType: "cli",
        tags: ["lightbox", "portal", "cosmic", "glass", "dark"],
        previewUrl: "/Media/LightBoxes/LightboxPortal",
        code: {
            tsx: getCode("src/components/Media/LightBoxes/tsx/LightboxPortal.tsx"),
            jsx: getCode("src/components/Media/LightBoxes/jsx/LightboxPortal.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/LightBoxes/LightboxPortal/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2013&auto=format&fit=crop", description: "Main image source URL." },
            { name: "backgroundColor", type: "string", default: "#0a0014", description: "Deep cosmic background color." },
            { name: "accentColor", type: "string", default: "#00ffff", description: "Accent color for rings, glow, and glassmorphism panel highlights." },
        ],
        whenToUse: "Perfect for futuristic brand showcases and Uilora premium campaigns. The circular orb trigger and concentric ring entrance make the open event itself cinematic.",
        bestPractices: "Use deep-space or abstract imagery. Keep backgroundColor dark for the ring glow to read correctly. The accentColor should match your brand's signature hue.",
        whyMatters: "Portal-style entrances communicate exclusivity and technological mastery. This Uilora template makes every image reveal feel like an event.",
        faqs: [
            { question: "What triggers the portal?", answer: "A circular orb with a radial glow and continuous pulse ring animation. 'OPEN' text is centered inside." },
            { question: "What are the concentric rings?", answer: "Three rings scale from 0 to full size with staggered spring delays, creating a ripple/portal effect." },
            { question: "Is it mobile responsive?", answer: "The portal image scales to fit the viewport and the info panel stacks below on narrow screens." }
        ],
    },
    {
        id: "lightbox-magazine",
        name: "Uilora Magazine",
        description: "Double-page spread editorial lightbox with spring slide-up, Georgia serif typography, and article layout.",
        category: "Media",
        installType: "cli",
        tags: ["lightbox", "magazine", "editorial", "spring", "article"],
        previewUrl: "/Media/LightBoxes/LightboxMagazine",
        code: {
            tsx: getCode("src/components/Media/LightBoxes/tsx/LightboxMagazine.tsx"),
            jsx: getCode("src/components/Media/LightBoxes/jsx/LightboxMagazine.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/LightBoxes/LightboxMagazine/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2006&auto=format&fit=crop", description: "Main image source URL for the left editorial panel." },
            { name: "backgroundColor", type: "string", default: "#f5f0e8", description: "Warm cream background color." },
        ],
        whenToUse: "Ideal for editorial publications and luxury brand storytelling. Use when you want the lightbox to double as a full magazine spread.",
        bestPractices: "Use landscape or portrait images with strong visual composition for the left panel. The warm cream background pairs best with earthy, natural photography.",
        whyMatters: "Magazine-style presentation signals editorial authority and content depth. This Uilora template elevates imagery into a full narrative experience.",
        faqs: [
            { question: "What's in the right panel?", answer: "Uilora Issue No. 12, gold separator rule, serif title 'The Silence Between Frames', three editorial paragraphs, and a photographer credit." },
            { question: "How does the entrance work?", answer: "Spring slide-up from y:60 with stiffness:340, damping:34 — feels like turning a magazine page." },
            { question: "Is it mobile responsive?", answer: "On mobile the layout stacks vertically: image on top, article below." }
        ],
    },
    {
        id: "lightbox-auction",
        name: "Uilora Auction",
        description: "Gallery auction house lightbox with radial spotlight, gold accents, lot details, and PLACE BID CTA.",
        category: "Media",
        installType: "cli",
        tags: ["lightbox", "auction", "gallery", "gold", "luxury"],
        previewUrl: "/Media/LightBoxes/LightboxAuction",
        code: {
            tsx: getCode("src/components/Media/LightBoxes/tsx/LightboxAuction.tsx"),
            jsx: getCode("src/components/Media/LightBoxes/jsx/LightboxAuction.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/LightBoxes/LightboxAuction/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=1958&auto=format&fit=crop", description: "Artwork image source URL." },
            { name: "backgroundColor", type: "string", default: "#111111", description: "Deep gallery background color." },
        ],
        whenToUse: "Designed for digital auction houses and luxury art platforms. Use when a single work needs maximum gravitas — spotlight, gold, structured lot metadata.",
        bestPractices: "Use high-resolution artwork or photography. Keep backgroundColor near #111111 for the radial spotlight effect to read correctly.",
        whyMatters: "Auction-house aesthetics signal rarity, prestige, and investment value. This Uilora template transforms any image into a collectible artifact.",
        faqs: [
            { question: "What's the trigger card?", answer: "A dark lot-preview card showing the image, 'LOT 042' in gold monospace, title, estimate, and 'PLACE BID →' link." },
            { question: "What are the corner brackets?", answer: "Four gold L-shaped bracket markers at the image corners, referencing fine-art gallery presentation." },
            { question: "Is it mobile responsive?", answer: "On mobile, the two-column layout (image + sidebar) stacks vertically." }
        ],
    },
    {
        id: "lightbox-cinescope",
        name: "Uilora Cinescope",
        description: "Cinematic 2.39:1 lightbox with letterbox bars, scan-line grain, HUD scrubber, and film metadata.",
        category: "Media",
        installType: "cli",
        tags: ["lightbox", "cinematic", "letterbox", "film", "dark", "hud"],
        previewUrl: "/Media/LightBoxes/LightboxCinescope",
        code: {
            tsx: getCode("src/components/Media/LightBoxes/tsx/LightboxCinescope.tsx"),
            jsx: getCode("src/components/Media/LightBoxes/jsx/LightboxCinescope.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/LightBoxes/LightboxCinescope/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=2187&auto=format&fit=crop", description: "Main image (landscape images work best for 2.39:1 ratio)." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Pure black background for maximum cinematic effect." },
        ],
        whenToUse: "Perfect for film production companies and cinematic brand campaigns. The letterbox trigger card and animated bars make every open feel like a film screening.",
        bestPractices: "Use wide-format (landscape) images for the correct 2.39:1 cinematic ratio. Keep backgroundColor at #000000 — the letterbox illusion requires true black.",
        whyMatters: "Cinematic framing communicates quality, intentionality, and production value. This Uilora template makes every image feel like a film still.",
        faqs: [
            { question: "What's the trigger?", answer: "A 2.39:1 aspect-ratio card with letterbox bars and a hover '▶ PLAY' reveal — it looks like a physical Blu-ray cover." },
            { question: "What's the progress scrubber?", answer: "A decorative 2px playhead that animates from 0% to 60% width over 8 seconds, simulating a film timeline." },
            { question: "Is it mobile responsive?", answer: "The 2.39:1 container scales proportionally to viewport width on all screen sizes." }
        ],
    },
    {
        id: "lightbox-polaroid",
        name: "Uilora Polaroid",
        description: "Polaroid development lightbox with white-to-transparent reveal animation, warm tint, and tilted card aesthetic.",
        category: "Media",
        installType: "cli",
        tags: ["lightbox", "polaroid", "film", "analog", "warm", "development"],
        previewUrl: "/Media/LightBoxes/LightboxPolaroid",
        code: {
            tsx: getCode("src/components/Media/LightBoxes/tsx/LightboxPolaroid.tsx"),
            jsx: getCode("src/components/Media/LightBoxes/jsx/LightboxPolaroid.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/LightBoxes/LightboxPolaroid/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2006&auto=format&fit=crop", description: "Main image source URL." },
            { name: "backgroundColor", type: "string", default: "#f0ede6", description: "Warm off-white background evoking analog photography labs." },
            { name: "caption", type: "string", default: "Uilora — Summer Archive, 2024", description: "Caption text below the polaroid image." },
        ],
        whenToUse: "Ideal for analog photography brands and nostalgic Uilora campaigns. The development animation makes the reveal itself the experience.",
        bestPractices: "Use warm-toned photography for the most authentic polaroid feel. Keep captions short (under 40 characters). The tape strip and -2deg rotation are intentional.",
        whyMatters: "Analog aesthetics trigger nostalgia, warmth, and emotional connection. The development animation alone makes users pause and engage — it's a memorable moment.",
        faqs: [
            { question: "How does the development work?", answer: "A white overlay fades from opacity 1 → 0 over 1.2s with 0.4s delay, followed by a warm amber tint that also fades — simulating polaroid development in two stages." },
            { question: "Does it replay each time?", answer: "Yes — AnimatePresence remounts the overlays fresh on every open, so the development effect replays every time." },
            { question: "Is it mobile responsive?", answer: "The polaroid card uses w-80 max and scales down gracefully on narrow screens." }
        ],
    },
];
