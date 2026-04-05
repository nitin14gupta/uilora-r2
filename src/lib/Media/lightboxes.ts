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
            { name: "thumbnailImage", type: "string", default: "", description: "Optional thumbnail image URL (uses main image if not provided)." },
            { name: "backgroundColor", type: "string", default: "#09090b", description: "Background color (hex, rgb, or hsl)." },
            { name: "hoverText", type: "string", default: "Open Cinematic View", description: "Text displayed on thumbnail hover." },
            { name: "title", type: "string", default: "Mountain Solitude", description: "Title text displayed in lightbox." },
            { name: "description", type: "string", default: "Captured during the golden hour in the Alps. The silence was deafening, the air crisp.", description: "Description text displayed in lightbox." },
        ],
        whenToUse: "Excellent for high-end fashion campaigns, award-winning portfolios, and Next.js applications that want a meaningful 'Cinematic' aesthetic. Use this lightbox to communicate digital excellence and sophisticated storytelling through widescreen modules.",
        bestPractices: "Maintain consistent spacing within your design system by using it for focal narratives. Follow React best practices by pairing this with bold, professional typography. Optimize for performance by using efficient image textures.",
        whyMatters: "Cinematic-based aesthetics communicate technical reliability, clarity, and timeless craft. This production-ready UI template helpsคุณ build an interface that feels organized and professional, reflecting a brand identity rooted in design purity.",
        faqs: [
            { question: "How does the 'Expansion' work?", answer: "The component uses localized shared-element transitions (layout-id) to seamlessly morph the thumbnail into the full-screen cinematic view, creating a high-fidelity 'opening' effect." },
            { question: "Can I adjust the zoom?", answer: "Yes, the transform intensity and primary background blur are fully configurable to match your scroll intensity." },
            { question: "Is it mobile responsive?", answer: "The cinematic scale and typographic scales adapt for mobile, ensuring the objective clarity remains consistent on high-density mobile screens." }
        ],
    },
    {
        id: "lightbox-brutalist",
        name: "Neo-Brutalist",
        description: "Drag to dismiss lightbox with high contrast neo-brutalist design.",
        category: "Media",
        installType: "cli",
        tags: ["lightbox", "brutalist", "drag", "dismiss"],
        previewUrl: "/Media/LightBoxes/LightboxBrutalist",
        code: {
            tsx: getCode("src/components/Media/LightBoxes/tsx/LightboxBrutalist.tsx"),
            jsx: getCode("src/components/Media/LightBoxes/jsx/LightboxBrutalist.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/LightBoxes/LightboxBrutalist/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop", description: "Main image source URL." },
            { name: "backgroundColor", type: "string", default: "#f0f0f0", description: "Background color (hex, rgb, or hsl)." },
            { name: "buttonText", type: "string", default: "View RAW", description: "Button text." },
            { name: "projectTitle", type: "string", default: "Project_09", description: "Project title text." },
            { name: "metadata", type: "string", default: "ISO 400 • F/2.8", description: "Image metadata text." },
            { name: "closeText", type: "string", default: "CLOSE", description: "Close button text." },
            { name: "dragHintText", type: "string", default: "DRAG TO DISMISS", description: "Drag hint text." },
            { name: "borderColor", type: "string", default: "#000000", description: "Border color (hex, rgb, or hsl)." },
            { name: "buttonColor", type: "string", default: "#000000", description: "Button background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for edgy streetwear brands, technical archives, and Next.js applications that want a high-intensity 'Neo-Brutalist' aesthetic. Use this lightbox for a high-octane experience where content feels 'Raw' and 'Structural'.",
        bestPractices: "Maintain consistent spacing within your design system by using it for aggressive brand storytelling. Follow React best practices by pairing it with bold, technical typography. Optimize for performance by managed the border pattern renders.",
        whyMatters: "Neo-brutalist aesthetics communicate power, mystery, and structural honesty. This production-ready UI template helpsคุณ build an interface that feels authoritative and solid, breaking the 'standard' web layout rules.",
        faqs: [
            { question: "Why 'Drag to Dismiss'?", answer: "The component features localized spring physics that allow users to 'throw' the modal away, simulating the raw structural tactile feel of the brutalist movement." },
            { question: "Can I adjust the borders?", answer: "Yes, both the primary 'borderColor' and the specific width (default 2px/4px) are fully configurable to match your brand's specific industrial intensity." },
            { question: "Is it mobile responsive?", answer: "The drag behavior and typographic scales adapt dynamically for mobile, Ensuring the bold narrative remains impactful and structural on small screens." }
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
            { name: "thumbnailImage", type: "string", default: "", description: "Optional thumbnail image URL (uses main image if not provided)." },
            { name: "backgroundColor", type: "string", default: "linear-gradient(to bottom right, #312e81, #581c87)", description: "Background color or gradient (hex, rgb, hsl, or CSS gradient)." },
            { name: "title", type: "string", default: "Neon Nights", description: "Title text displayed in lightbox." },
            { name: "subtitle", type: "string", default: "Tokyo, Japan", description: "Subtitle text displayed in lightbox." },
            { name: "showLike", type: "boolean", default: "true", description: "Whether to show the like button." },
            { name: "showDownload", type: "boolean", default: "true", description: "Whether to show the download button." },
        ],
        whenToUse: "Excellent for high-end digital agencies, award-winning portfolios, and Next.js platforms that want a premium 'Glassmorphism' aesthetic. Use this lightbox for an immersive experience with blur effects and light refraction cues.",
        bestPractices: "Follow React best practices by pairing this with high-contrast, bold imagery. Maintain consistent spacing within your design system by keeping the UI cards centered. Optimize for performance by managed the amount of blur renders.",
        whyMatters: "Glass-based aesthetics communicate digital excellence, sophistication, and high-end craft. This production-ready UI template helpsคุณ build an interface that feels curated and premium, leaving a lasting visual impression on high-value clients.",
        faqs: [
            { question: "Is the blur real?", answer: "The component uses localized backdrop-filter blur and subtle inner glows (glass-shadows) to simulate light refraction through high-fidelity translucent surfaces." },
            { question: "Can I adjust colors?", answer: "Absolutely, you can customize both the primary `backgroundColor` (gradient or solid) and the specific button accents to match your digital brand." },
            { question: "Is it mobile responsive?", answer: "The glass cards adapt their spans and layouts for mobile, ensuring the refractive narrative remains impactful and legible on small screens." }
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
            { name: "images", type: "string[]", default: "[...array of image URLs]", description: "Array of image source URLs." },
            { name: "thumbnailCount", type: "number", default: "8", description: "Number of thumbnail images to display." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for creative studios, experimental art projects, and Next.js portfolios that want an organic 'Film Reel' aesthetic. Use this layout for an engaging experience where content feels 'Mailed' and 'Drafted' by physical film borders.",
        bestPractices: "Maintain scalable component architecture by keeping the reel count balanced. Follow React best practices by pairing this with bold, technical typography. Optimize for performance by managed the marquee intensity.",
        whyMatters: "Hand-drawn film animations create a sense of digital 'Authenticity' and human touch. This production-ready UI template helpsคุณ build an interface that feels alive and 'Drafted', adding a unique signatures to your brand structure.",
        faqs: [
            { question: "How does the 'Reel' work?", answer: "The component features a localized horizontal reel spanning the bottom of the view, allowing users to 'Seek' through the project archive with high-fidelity scrubbing interactions." },
            { question: "Can I adjust colors?", answer: "Yes, both the primary background and specific borders are fully configurable to match your brand's specific film intensity (default: Noir)." },
            { question: "Is it mobile responsive?", answer: "The reel layout and typographic scales adapt for mobile, ensuring the 'Draft' narrative remains impactful and structural on small screens." }
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
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=2000&auto=format&fit=crop", description: "Main image source URL." },
            { name: "backgroundColor", type: "string", default: "#eaeaea", description: "Background color (hex, rgb, or hsl)." },
            { name: "buttonText", type: "string", default: "Read Story", description: "Button text." },
            { name: "category", type: "string", default: "Editorial", description: "Category label text." },
            { name: "title", type: "string", default: "The Architecture of Silence", description: "Article title text." },
            { name: "paragraphs", type: "string[]", default: "['...', '...']", description: "Array of paragraph text strings." },
            { name: "photographer", type: "string", default: "Photo by Elena Chen", description: "Photographer credit text." },
            { name: "showShare", type: "boolean", default: "true", description: "Whether to show the share button." },
            { name: "showLike", type: "boolean", default: "true", description: "Whether to show the like button." },
        ],
        whenToUse: "Ideal for high-end fashion portfolios, editorial magazines, and creative agencies that want a sharp 'Editorial' aesthetic. Use this lightbox to showcase project collections with a mix of asymmetrical heights and technical typography.",
        bestPractices: "Follow React best practices by pairing this with professional, high-contrast photography. Maintain consistent spacing within your design system by keeping the grid gaps uniform. Optimize for performance by using efficient image loading patterns.",
        whyMatters: "Editorial layouts communicate digital excellence, fashion-forward thinking, and attention to detail. This production-ready UI template helpsคุณ build an interface that feels curated and premium, leaving a lasting visual impression on high-value clients.",
        faqs: [
            { question: "Why 'Split'?", answer: "The modal is designed with a high-fidelity 50/50 split to simulate the raw structural honesty of architectural blueprint failures, focusing on both imagery and story." },
            { question: "Can I adjust the text?", answer: "Absolutely, both the primary 'paragraphs' and the specific 'category' labels are fully configurable, allowing you to create 'High-Contrast' magazine effects." },
            { question: "Is it mobile responsive?", answer: "The vertical flow and typographic scales adapt for mobile, ensuring the 'Draft' narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "lightbox-holo",
        name: "Holographic HUD",
        description: "Holographic HUD lightbox with sci-fi interface.",
        category: "Media",
        installType: "cli",
        tags: ["lightbox", "holographic", "hud", "sci-fi"],
        previewUrl: "/Media/LightBoxes/LightboxHolo",
        code: {
            tsx: getCode("src/components/Media/LightBoxes/tsx/LightboxHolo.tsx"),
            jsx: getCode("src/components/Media/LightBoxes/jsx/LightboxHolo.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/LightBoxes/LightboxHolo/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2000&auto=format&fit=crop", description: "Main image source URL." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color (hex, rgb, or hsl)." },
            { name: "buttonText", type: "string", default: "INITIALIZE_VIEW", description: "Button text." },
            { name: "sourceText", type: "string", default: "IMG_SOURCE: EXT_DRIVE_01", description: "Source label text." },
            { name: "resolutionText", type: "string", default: "RES: 4K_UHD", description: "Resolution label text." },
            { name: "statusText", type: "string", default: "STATUS: DECODED", description: "Status label text." },
            { name: "closeText", type: "string", default: "TERMINATE", description: "Close button text." },
            { name: "accentColor", type: "string", default: "#00ffff", description: "Accent color for HUD elements (hex, rgb, or hsl)." },
        ],
        whenToUse: "Excellent for technical dashboards, AI processing platforms, and Next.js applications that want a high-tech 'Holographic' aesthetic. Use this layout to communicate power, security, and digital intelligence through dark themes and architectural grid modules.",
        bestPractices: "Maintain scalable component architecture by pairing this with sharp, technical typography. Follow React best practices by using Framer Motion for the module reveal transitions. Optimize for performance by managed the border renders.",
        whyMatters: "Holo-based agency layouts communicate technical authority, sophistication, and digital craft. This production-ready UI template helpsคุณ build an interface that feels organized and high-end, adding a unique 'Corporate' signature to your brand interaction.",
        faqs: [
            { question: "Is the 'HUD' really professional?", answer: "The modal is designed with technical 'Indices' and architectural aesthetics to simulate a high-quality technical repository for your project details." },
            { question: "Can I adjust the grid?", answer: "Yes, both the primary 'accentColor' (default cyan) and background colors can be adjusted to create 'Industrial' or 'Cyber' agency effects." },
            { question: "Is it mobile responsive?", answer: "The grid spans and typographic scales adapt for mobile, ensuring the bold narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "lightbox-story",
        name: "Story Mode",
        description: "Vertical immersive story mode lightbox.",
        category: "Media",
        installType: "cli",
        tags: ["lightbox", "story", "vertical", "immersive"],
        previewUrl: "/Media/LightBoxes/LightboxStory",
        code: {
            tsx: getCode("src/components/Media/LightBoxes/tsx/LightboxStory.tsx"),
            jsx: getCode("src/components/Media/LightBoxes/jsx/LightboxStory.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/LightBoxes/LightboxStory/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2000&auto=format&fit=crop", description: "Main image source URL." },
            { name: "thumbnailImage", type: "string", default: "", description: "Optional thumbnail image URL (uses main image if not provided)." },
            { name: "backgroundColor", type: "string", default: "linear-gradient(to top right, #ec4899, #f97316)", description: "Background color or gradient (hex, rgb, hsl, or CSS gradient)." },
            { name: "username", type: "string", default: "alex_travels", description: "Username text." },
            { name: "timeAgo", type: "string", default: "2h ago", description: "Time ago text." },
            { name: "caption", type: "string", default: "Just arrived in paradise. The colors here are unreal! 🌴✨", description: "Caption text." },
            { name: "progressDuration", type: "number", default: "5000", description: "Progress bar duration in milliseconds." },
        ],
        whenToUse: "Perfect for street-style blogs, edgy agencies, and Next.js applications that want an energetic 'Story Mode' aesthetic. Use this lightbox for an engaging experience where content feels 'Mailed' and 'Drafted' by physical film borders.",
        bestPractices: "Follow React best practices by pairing this with bold, professional typography. Maintain consistent spacing within your design system by keeping the progress bars aligned. Optimize for performance by managed the image-scaling intensity.",
        whyMatters: "Social-media animations communicate energy, flow, and digital momentum. This production-ready UI template helpsคุณ build an interface that feels alive and energetic, adding a distinct 'Moving' signature to your brand.",
        faqs: [
            { question: "How does progress work?", answer: "The component features localized progress-bars spanning the top of the view, allowing users to track the project narrative with high-fidelity visual timing cues." },
            { question: "Can I adjust timing?", answer: "Absolutely, you can adjust both the `progressDuration` and the primary 'backgroundColor' (gradient or solid) to match your brand's specific high-intensity palette." },
            { question: "Is it mobile responsive?", answer: "The vertical flow and typographic scales adapt for mobile, ensuring the bold narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "lightbox-perspective",
        name: "3D Perspective",
        description: "3D tilt perspective card lightbox.",
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
            { name: "thumbnailImage", type: "string", default: "", description: "Optional thumbnail image URL (uses main image if not provided)." },
            { name: "backgroundColor", type: "string", default: "#cbd5e1", description: "Background color (hex, rgb, or hsl)." },
            { name: "overlayColor", type: "string", default: "#0f172a", description: "Overlay background color (hex, rgb, or hsl)." },
            { name: "title", type: "string", default: "Mountain Retreat", description: "Title text displayed in lightbox." },
            { name: "description", type: "string", default: "A serene escape into nature's embrace.", description: "Description text displayed in lightbox." },
            { name: "buttonText", type: "string", default: "Explore More", description: "Button text." },
            { name: "showShare", type: "boolean", default: "true", description: "Whether to show the share button." },
        ],
        whenToUse: "Excellent for high-end fashion campaigns, award-winning portfolios, and Next.js applications that want a meaningful 'Perspective' aesthetic. Use this layout to communicate digital excellence and sophisticated storytelling through 3D modules.",
        bestPractices: "Maintain consistent spacing within your design system by using it for focal narratives. Follow React best practices by pairing this with bold, professional typography. Optimize for performance by using efficient image textures.",
        whyMatters: "Perspective-based aesthetics communicate technical reliability, clarity, and timeless craft. This production-ready UI template helpsคุณ build an interface that feels organized and professional, reflecting a brand identity rooted in design purity.",
        faqs: [
            { question: "How does 'Tilt' work?", answer: "The component uses localized mouse coordinates to rotate the primary image card, creating a high-fidelity 'physical' 3D tilt effect into the heart of the project narrative." },
            { question: "Can I adjust colors?", answer: "Yes, both the primary 'backgroundColor' and specific 'overlayColor' are fully configurable to match your brand's specific intensity (default: Slate)." },
            { question: "Is it mobile responsive?", answer: "The 3D scale and typographic scales adapt for mobile, ensuring the objective clarity remains consistent on high-density mobile screens." }
        ],
    },
    {
        id: "lightbox-grid",
        name: "Collection Grid",
        description: "Collection grid lightbox with context expansion.",
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
            { name: "images", type: "string[]", default: "[...array of image URLs]", description: "Array of image source URLs." },
            { name: "backgroundColor", type: "string", default: "#f5f5f5", description: "Background color (hex, rgb, or hsl)." },
            { name: "buttonText", type: "string", default: "View Collection", description: "Button text." },
            { name: "collectionTitle", type: "string", default: "Portfolio 2024", description: "Collection title text." },
            { name: "viewDetailText", type: "string", default: "View Detail", description: "View detail button text." },
        ],
        whenToUse: "Excellent for mysterious brands, technical archives, and Next.js platforms that want a dramatic 'Grid' aesthetic. Use this layout for an immersive experience where content feels 'Revealed' by organic transitions.",
        bestPractices: "Maintain consistent spacing within your design system by keeping the grid items centered. Follow React best practices by managed the layout-id for the 'Shared Element' transition. Optimize for performance by using efficient Tailwind col-spans.",
        whyMatters: "Abstract grid animations communicate digital excellence, mystery, and digital craft. This production-ready UI template helpsคุณ build an interface that feels responsive and alive, adding a unique architectural signature to your brand interaction.",
        faqs: [
            { question: "How does it expand?", answer: "The component uses localized shared-element transitions (layout-id) to seamlessly morph the thumbnail into the full-screen grid view, creating a high-fidelity 'opening' effect." },
            { question: "Are colors dynamic?", answer: "Absolutely, you can adjust both the `backgroundColor` and the primary 'buttonText' to match your brand's specific high-intensity palette." },
            { question: "Is it mobile responsive?", answer: "The grid spans and organic offsets adapt for mobile, ensuring the 'Reveal' transition remains impactful and structural on small screens." }
        ],
    },
    {
        id: "lightbox-minimal",
        name: "Minimal Focus",
        description: "Minimal spotlight focus lightbox.",
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
            { name: "thumbnailImage", type: "string", default: "", description: "Optional thumbnail image URL (uses main image if not provided)." },
            { name: "backgroundColor", type: "string", default: "#F3F4F6", description: "Background color (hex, rgb, or hsl)." },
            { name: "overlayColor", type: "string", default: "#1a1a1a", description: "Overlay background color (hex, rgb, or hsl)." },
            { name: "label", type: "string", default: "Memories", description: "Label text displayed on thumbnail." },
            { name: "fileName", type: "string", default: "Untitled_03.jpg", description: "File name text displayed in lightbox." },
            { name: "showInfo", type: "boolean", default: "true", description: "Whether to show the info button." },
            { name: "showDownload", type: "boolean", default: "true", description: "Whether to show the download button." },
        ],
        whenToUse: "Ideal for creative studios, experimental art projects, and Next.js portfolios that want an organic 'Minimal' aesthetic. Use this layout for an engaging experience where content feels 'Mailed' and 'Drafted' by physical sketch lines.",
        bestPractices: "Maintain scalable component architecture by keeping the sketch colors consistent with your primary palette. Follow React best practices by pairing this with bold, technical typography. Optimize for performance by managed the grid renders.",
        whyMatters: "Minimal spotlight animations create a sense of digital 'Authenticity' and human touch. This production-ready UI template helpsคุณ build an interface that feels alive and 'Drafted', adding a unique signatures to your brand structure.",
        faqs: [
            { question: "Why 'Spotlight'?", answer: "The component features localized mask coordinates to 'Illuminate' the primary content, creating a high-fidelity physical focus on the underlying project detail." },
            { question: "Can I adjust labels?", answer: "Absolutely, you can adjust both the original `label` and the persistent `fileName` to match your project's specific terminology." },
            { question: "Is it mobile responsive?", answer: "The focus area and typographic scales adapt for mobile, ensuring the objective clarity remains consistent on high-density mobile screens." }
        ],
    },
];

