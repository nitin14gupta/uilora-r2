import { getCode } from "../getCode";
import { Component } from "../types";

export const testimonialsMediaComponents: Component[] = [
    {
        id: "cinematic-noir",
        name: "Cinematic Noir",
        description: "Video portrait testimonial with cinematic black and white aesthetic.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "video", "cinematic", "noir"],
        previewUrl: "/Media/TestimonialsMedia/CinematicNoir",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/CinematicNoir.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/CinematicNoir.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/CinematicNoir/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "video", type: "string", default: "https://assets.mixkit.co/videos/mixkit-portrait-of-a-woman-in-a-pool-1259-large.mp4", description: "Video source URL." },
            { name: "quote", type: "string", default: "The platform didn't just change our workflow; it fundamentally shifted how we perceive creativity.", description: "Testimonial quote text." },
            { name: "author", type: "string", default: "Elena Corves", description: "Author name." },
            { name: "role", type: "string", default: "Creative Director", description: "Author role/title." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color (hex, rgb, or hsl)." },
            { name: "progressColor", type: "string", default: "#dc2626", description: "Progress bar color (hex, rgb, or hsl)." },
            { name: "progressDuration", type: "number", default: "15", description: "Progress bar animation duration in seconds." },
        ],
        whenToUse: "Excellent for high-end fashion campaigns, award-winning portfolios, and Next.js applications that want a meaningful 'Cinematic' aesthetic. Use this testimonial to communicate digital excellence and sophisticated storytelling through widescreen modules.",
        bestPractices: "Maintain consistent spacing within your design system by using it for focal narratives. Follow React best practices by pairing this with bold, professional typography. Optimize for performance by using efficient image textures.",
        whyMatters: "Cinematic-based aesthetics communicate technical reliability, clarity, and timeless craft. This production-ready UI template helpsคุณ build an interface that feels organized and professional, reflecting a brand identity rooted in design purity.",
        faqs: [
            { question: "Why 'Noir'?", answer: "The component uses localized CSS filters (grayscale) and high-contrast video backgrounds to simulate the raw structural honesty of physical film-noir cinema." },
            { question: "Can I adjust duration?", answer: "Absolutely, you can customize both the `progressDuration` and the primary 'progressColor' to match your brand's specific intensity." },
            { question: "Is it mobile responsive?", answer: "The cinematic scale and typographic scales adapt for mobile, ensuring the objective clarity remains consistent on high-density mobile screens." }
        ],
    },
    {
        id: "glass-audio",
        name: "Glass Audio",
        description: "Glassmorphism audio testimonial with waveform visualization.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "audio", "glassmorphism", "waveform"],
        previewUrl: "/Media/TestimonialsMedia/GlassAudio",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/GlassAudio.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/GlassAudio.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/GlassAudio/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "avatar", type: "string", default: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", description: "Avatar image URL." },
            { name: "name", type: "string", default: "Sarah Jenkins", description: "User name." },
            { name: "duration", type: "string", default: "0:42", description: "Audio duration text." },
            { name: "quote", type: "string", default: "I was skeptical at first, honestly. But the moment we integrated the API, everything just clicked. It's rare to find software that feels this human.", description: "Testimonial quote text." },
            { name: "backgroundColor", type: "string", default: "#0f172a", description: "Background color (hex, rgb, or hsl)." },
            { name: "backgroundImage", type: "string", default: "https://images.unsplash.com/photo-1614850523060-8da1d56ae167?w=1200&q=80", description: "Background image URL." },
            { name: "audioColor", type: "string", default: "#6366f1", description: "Audio waveform color (hex, rgb, or hsl)." },
            { name: "showTranscript", type: "boolean", default: "true", description: "Whether to show transcript section." },
            { name: "hideTranscriptText", type: "string", default: "Hide Transcript", description: "Hide transcript button text." },
            { name: "readTranscriptText", type: "string", default: "Read Transcript", description: "Read transcript button text." },
        ],
        whenToUse: "Excellent for high-end digital agencies, award-winning portfolios, and Next.js platforms that want a premium 'Glassmorphism' aesthetic. Use this testimonial for an immersive experience with blur effects and light refraction cues.",
        bestPractices: "Follow React best practices by pairing this with high-contrast, bold imagery. Maintain consistent spacing within your design system by keeping the UI cards centered. Optimize for performance by managed the amount of blur renders.",
        whyMatters: "Glass-based aesthetics communicate digital excellence, sophistication, and high-end craft. This production-ready UI template helpsคุณ build an interface that feels curated and premium, leaving a lasting visual impression on high-value clients.",
        faqs: [
            { question: "Is the waveform real?", answer: "The component uses localized SVG paths and spring physics to simulate organic 'Waveforms' that react to the project's digital narrative intensity." },
            { question: "Can I adjust colors?", answer: "Absolutely, you can customize both the primary `backgroundColor` (gradient or solid) and the specific button accents to match your digital brand." },
            { question: "Is it mobile responsive?", answer: "The glass cards adapt their spans and layouts for mobile, ensuring the refractive narrative remains impactful and legible on small screens." }
        ],
    },
    {
        id: "clay-stack",
        name: "Clay Stack",
        description: "Draggable claymation-style testimonial cards with swipe gestures.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "draggable", "clay", "stack"],
        previewUrl: "/Media/TestimonialsMedia/ClayStack",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/ClayStack.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/ClayStack.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/ClayStack/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "cards", type: "Array<{id: number, text: string, author: string, color: string}>", default: "[{id: 1, text: '...', author: 'Mike T.', color: '#fef08a'}, ...]", description: "Array of card objects with id, text, author, and color." },
            { name: "backgroundColor", type: "string", default: "#f0f0f0", description: "Background color (hex, rgb, or hsl)." },
            { name: "borderColor", type: "string", default: "#000000", description: "Border color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for wellness apps, lifestyle brands, and Next.js platforms that want a soft 'Clay' aesthetic. Use this testimonial for an engaging 'Deck' experience where cards feel 'Physical' and 'Stacked' like real paper.",
        bestPractices: "Maintain consistent spacing within your design system by adhering to the soft neumorphic shadows. Follow React best practices by using pure Tailwind for the layout structure. Optimize for performance by using systematic typography scales.",
        whyMatters: "Neumorphic 'Clay' aesthetics communicate technical reliability, clarity, and timeless craft. This production-ready UI template helpsคุณ build an interface that feels organized and professional, reflecting a brand identity rooted in design purity.",
        faqs: [
            { question: "What is 'Clay Case'?", answer: "The component uses localized CSS box-shadows and subtle inner glows to simulate the soft, matte surfaces found in high-fidelity 3D clay renders." },
            { question: "How does it swipe?", answer: "The deck uses localized spring physics to fan out the cards during drag, creating a high-fidelity 'physical' movement of the underlying project detail." },
            { question: "Is it mobile responsive?", answer: "The stack count and typographic scales adapt for mobile, ensuring the 'Deck' feel remains consistent on high-density mobile screens." }
        ],
    },
    {
        id: "editorial-parallax",
        name: "Editorial Parallax",
        description: "Split screen testimonial with parallax scroll effect.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "parallax", "editorial", "split"],
        previewUrl: "/Media/TestimonialsMedia/EditorialParallax",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/EditorialParallax.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/EditorialParallax.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/EditorialParallax/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "images", type: "string[]", default: "[...array of image URLs]", description: "Array of rotating background image URLs." },
            { name: "avatar", type: "string", default: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80", description: "Author avatar image URL." },
            { name: "author", type: "string", default: "Marcus Chen", description: "Author name." },
            { name: "role", type: "string", default: "Architect & Designer", description: "Author role/title." },
            { name: "quote", type: "string", default: "It is rare to find a tool that balances power with such delicate simplicity.", description: "Testimonial quote text." },
            { name: "subtitle", type: "string", default: "The Founder's Story", description: "Subtitle text." },
            { name: "backgroundColor", type: "string", default: "#EBE9E4", description: "Background color (hex, rgb, or hsl)." },
            { name: "imageRotationInterval", type: "number", default: "1000", description: "Image rotation interval in milliseconds." },
        ],
        whenToUse: "Excellent for mysterious brands, technical archives, and Next.js platforms that want a dramatic 'Split' aesthetic. Use this layout for an immersive experience where content feels 'Revealed' by organic parallax transitions.",
        bestPractices: "Maintain consistent spacing within your design system by keeping the grid items centered. Follow React best practices by managed the layout-id for the 'Shared Element' transition. Optimize for performance by using efficient Tailwind col-spans.",
        whyMatters: "Abstract split animations communicate digital excellence, mystery, and digital craft. This production-ready UI template helpsคุณ build an interface that feels responsive and alive, adding a unique architectural signature to your brand.",
        faqs: [
            { question: "How does the parallax work?", answer: "The component uses localized scroll-driven animations (y-offsets) to seamlessly move the imagery behind the testimony, creating a high-fidelity 'opening' effect." },
            { question: "Can I adjust colors?", answer: "Absolutely, you can adjust both the primary `backgroundColor` and the specific 'avatar' accents to match your brand's specific high-intensity palette." },
            { question: "Is it mobile responsive?", answer: "The grid spans and organic offsets adapt for mobile, ensuring the 'Reveal' transition remains impactful and structural on small screens." }
        ],
    },
    {
        id: "docu-slider",
        name: "Docu Slider",
        description: "Interactive before/after slider testimonial with drag interaction.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "slider", "before-after", "interactive"],
        previewUrl: "/Media/TestimonialsMedia/DocuSlider",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/DocuSlider.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/DocuSlider.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/DocuSlider/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "beforeImage", type: "string", default: "https://images.unsplash.com/photo-1444419988131-046ed4e5ffd6?q=80&w=1170&auto=format&fit=crop", description: "Before image source URL." },
            { name: "afterImage", type: "string", default: "https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1200&q=80", description: "After image source URL." },
            { name: "beforeText", type: "string", default: "We were drowning in manual processes and messy spreadsheets.", description: "Text displayed when slider is on before side." },
            { name: "afterText", type: "string", default: "The transformation was instant. Efficiency up 400%", description: "Text displayed when slider is on after side." },
            { name: "backgroundColor", type: "string", default: "#18181b", description: "Background color (hex, rgb, or hsl)." },
            { name: "beforeLabel", type: "string", default: "BEFORE", description: "Before label text." },
            { name: "afterLabel", type: "string", default: "AFTER", description: "After label text." },
            { name: "beforeLabelColor", type: "string", default: "#71717a", description: "Before label background color (hex, rgb, or hsl)." },
            { name: "afterLabelColor", type: "string", default: "#10b981", description: "After label background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for creative studios, experimental art projects, and Next.js portfolios that want an organic 'Before-After' aesthetic. Use this layout for an engaging experience where content feels 'Mailed' and 'Drafted' by physical film borders.",
        bestPractices: "Maintain scalable component architecture by keeping the archive labels consistent. Follow React best practices by pairing this with bold, technical typography. Optimize for performance by managed the marquee intensity.",
        whyMatters: "Hand-drawn film animations create a sense of digital 'Authenticity' and human touch. This production-ready UI template helpsคุณ build an interface that feels alive and 'Drafted', adding a unique signatures to your brand structure.",
        faqs: [
            { question: "How does the 'Slider' work?", answer: "The component features a localized horizontal slider spanning the image, allowing users to 'Seek' through the project narrative with high-fidelity scrubbing interactions." },
            { question: "Can I adjust labels?", answer: "Yes, both the primary background and specific labels (BEFORE/AFTER) are fully configurable to match your brand's specific intensity." },
            { question: "Is it mobile responsive?", answer: "The horizontal flow and typographic scales adapt for mobile, ensuring the 'Draft' narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "brutalist-marquee",
        name: "Neo-Brutalist Marquee",
        description: "Bold brutalist testimonial with animated marquee text.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "brutalist", "marquee", "bold"],
        previewUrl: "/Media/TestimonialsMedia/BrutalistMarquee",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/BrutalistMarquee.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/BrutalistMarquee.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/BrutalistMarquee/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "quote", type: "string", default: "Stop looking. This is the toolkit you've been waiting for. It's raw, it's fast, and it works.", description: "Testimonial quote text." },
            { name: "author", type: "string", default: "ALEX R.", description: "Author name." },
            { name: "role", type: "string", default: "CTO, UNTITLED", description: "Author role/title." },
            { name: "badgeText", type: "string", default: "GAME CHANGER", description: "Badge text displayed on card." },
            { name: "marqueeText", type: "string[]", default: "['Approved by Experts', 'Ship Faster']", description: "Array of marquee scrolling text items." },
            { name: "backgroundColor", type: "string", default: "#FF4D00", description: "Background color (hex, rgb, or hsl)." },
            { name: "borderColor", type: "string", default: "#000000", description: "Border color (hex, rgb, or hsl)." },
            { name: "badgeColor", type: "string", default: "#fbbf24", description: "Badge background color (hex, rgb, or hsl)." },
            { name: "avatarColor", type: "string", default: "#3b82f6", description: "Avatar background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for edgy streetwear brands, experimental art portfolios, and Next.js applications that want an energetic 'Marquee' aesthetic. Use this testimonial to showcase project collections with a high-intensity, industrial 'Raw' vibe.",
        bestPractices: "Maintain consistent spacing within your design system by using it for aggressive brand storytelling. Follow React best practices by pairing it with bold, technical typography. Optimize for performance by managed the marquee intensity.",
        whyMatters: "Diagonal-based aesthetics communicate power, mystery, and structural honesty. This production-ready UI template helpsคุณ build an interface that feels authoritative and solid, breaking the 'standard' web layout rules.",
        faqs: [
            { question: "Why 'Marquee'?", answer: "The component features skewed containers and slanted text paths to simulate the raw structural honesty of the brutalist architectural movement." },
            { question: "Can I adjust colors?", answer: "Yes, both the primary 'backgroundColor' and the specific 'badgeColor' are fully configurable, allowing you to create 'Cyber' or 'Industrial' pop effects." },
            { question: "Is it mobile responsive?", answer: "The marquee rows adapt their spans dynamically for mobile, Ensuring the bold narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "holographic",
        name: "Holographic Avatar",
        description: "Sci-fi holographic testimonial with 3D tilt interaction.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "holographic", "3d", "sci-fi"],
        previewUrl: "/Media/TestimonialsMedia/Holographic",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/Holographic.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/Holographic.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/Holographic/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "avatar", type: "string", default: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80", description: "Avatar image URL." },
            { name: "userId", type: "string", default: "9942", description: "User ID text displayed in HUD." },
            { name: "quote", type: "string", default: "The integration protocol is flawless. We reduced latency by 98% within the first deployment cycle. System status: Optimal.", description: "Testimonial quote text." },
            { name: "backgroundColor", type: "string", default: "#050505", description: "Background color (hex, rgb, or hsl)." },
            { name: "accentColor", type: "string", default: "#06b6d4", description: "Accent color for HUD elements (hex, rgb, or hsl)." },
            { name: "statusText", type: "string", default: "SYS.READY", description: "Status text displayed in corner." },
        ],
        whenToUse: "Excellent for technical portfolios, edgy agencies, and Next.js applications that want a high-tech 'Holographic' aesthetic. Use this layout to communicate power, security, and digital intelligence through dark themes and architectural grid modules.",
        bestPractices: "Maintain scalable component architecture by pairing this with sharp, technical typography. Follow React best practices by using Framer Motion for the module reveal transitions. Optimize for performance by managed the border renders.",
        whyMatters: "Holo-based agency layouts communicate technical authority, sophistication, and digital craft. This production-ready UI template helpsคุณ build an interface that feels organized and high-end, adding a unique 'Corporate' signature to your brand.",
        faqs: [
            { question: "How does the 'Holo' work?", answer: "The component is designed with technical 'Indices' and architectural aesthetics to simulate a high-quality technical repository for your project details." },
            { question: "Can I adjust the grid?", answer: "Yes, both the primary 'accentColor' and background colors can be adjusted to create 'Industrial' or 'Cyber' agency effects." },
            { question: "Is it mobile responsive?", answer: "The grid spans adapt dynamically for mobile, ensuring the bold narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "expanding-gallery",
        name: "Expanding Gallery",
        description: "Luxury testimonial gallery with expanding card animations.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "gallery", "expanding", "luxury"],
        previewUrl: "/Media/TestimonialsMedia/ExpandingGallery",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/ExpandingGallery.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/ExpandingGallery.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/ExpandingGallery/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "items", type: "Array<{id: string, title: string, img: string, quote: string}>", default: "[{id: '1', title: 'Elegant Workflow', img: '...', quote: '...'}, ...]", description: "Array of gallery items with id, title, img, and quote." },
            { name: "backgroundColor", type: "string", default: "#f5f5f4", description: "Background color (hex, rgb, or hsl)." },
            { name: "overlayColor", type: "string", default: "#1c1917", description: "Overlay background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for high-end fashion portfolios, editorial magazines, and creative agencies that want a sharp 'Expanding' aesthetic. Use this gallery to showcase project collections with a mix of asymmetrical heights and technical typography.",
        bestPractices: "Follow React best practices by pairing this with professional, high-contrast photography. Maintain consistent spacing within your design system by keeping the grid gaps uniform. Optimize for performance by using efficient image loading patterns.",
        whyMatters: "Editorial layouts communicate digital excellence, fashion-forward thinking, and attention to detail. This production-ready UI template helpsคุณ build an interface that feels curated and premium, leaving a lasting visual impression on high-value clients.",
        faqs: [
            { question: "How does it expand?", answer: "The component uses localized shared-element transitions (layout-id) to seamlessly morph the thumbnail into the full-screen view, creating a high-fidelity 'opening' effect." },
            { question: "Can I adjust the grid?", answer: "Absolutely, both the primary 'backgroundColor' and the specific 'overlayColor' are fully configurable, allowing you to create 'High-Contrast' magazine effects." },
            { question: "Is it mobile responsive?", answer: "The vertical flow and typographic scales adapt for mobile, ensuring the 'Draft' narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "uilora-morphing",
        name: "Organic Morph",
        description: "Soft organic testimonial with morphing blob animation.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "morphing", "organic", "soft"],
        previewUrl: "/Media/TestimonialsMedia/Morphing",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/Morphing.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/Morphing.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/Morphing/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80", description: "Image URL for the morphing blob." },
            { name: "quote", type: "string", default: "A delightful experience from start to finish. Soft, approachable, yet incredibly robust.", description: "Testimonial quote text." },
            { name: "author", type: "string", default: "Lara V.", description: "Author name." },
            { name: "role", type: "string", default: "VP of Product", description: "Author role/title." },
            { name: "backgroundColor", type: "string", default: "#FDF6F0", description: "Background color (hex, rgb, or hsl)." },
            { name: "blobColor", type: "string", default: "#fed7aa", description: "Morphing blob background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Perfect for high-octane brands, gaming labs, and Next.js platforms that want an immersive 'Organic' aesthetic. Use this layout for a tactile experience with organic orbital animations and heat-gradient effects.",
        bestPractices: "Maintain scalable component architecture by keeping the orb count balanced. Follow React best practices by using Framer Motion for the fluid advection renders. Optimize for performance by managed the gradient intensity.",
        whyMatters: "Organic liquid aesthetics communicate digital complexity, flow, and digital craft. This production-ready UI template helpsคุณ build an interface that feels advanced and 'Breathing', adding a unique 'Orbital' signature to your project.",
        faqs: [
            { question: "Is the morphing real?", answer: "The component uses localized SVG filters and spring physics to simulate organic 'Metaballs' that merge and split smoothly as they 'orbit' through the grid." },
            { question: "Can I adjust timing?", answer: "Absolutely, you can customize both the primary `backgroundColor` and the specific `blobColor` to match your brand's specific intensity." },
            { question: "Is it mobile responsive?", answer: "The liquid flows and orb spans adapt for mobile, ensuring the 'Orbital' feel remains consistent on high-density mobile screens." }
        ],
    },
    {
        id: "monolith",
        name: "The Monolith",
        description: "Architectural 3D reveal testimonial that cracks open to show content.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "3d", "architectural", "reveal"],
        previewUrl: "/Media/TestimonialsMedia/Monolith",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/Monolith.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/Monolith.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/Monolith/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "video", type: "string", default: "https://assets.mixkit.co/videos/mixkit-ink-swirling-in-water-2056-large.mp4", description: "Background video source URL." },
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80", description: "Author image URL." },
            { name: "title", type: "string", default: "The Silent Revolution.", description: "Main title text." },
            { name: "subtitle", type: "string", default: "Silent", description: "Subtitle word to be highlighted." },
            { name: "quote", type: "string", default: "We didn't just change software. We changed our entire philosophy of work. The friction is gone.", description: "Testimonial quote text." },
            { name: "stats", type: "Array<{label: string, value: string}>", default: "[{label: 'Efficiency', value: '+400%'}, {label: 'Deploy Time', value: '12ms'}]", description: "Array of stat objects with label and value." },
            { name: "author", type: "string", default: "Elena Vance", description: "Author name." },
            { name: "role", type: "string", default: "CTO, Apex Industries", description: "Author role/title." },
            { name: "caseStudyLabel", type: "string", default: "Case Study 001", description: "Case study label text." },
            { name: "sectionLabel", type: "string", default: "Executive Summary", description: "Section label text." },
            { name: "backgroundColor", type: "string", default: "#0a0a0a", description: "Background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Excellent for technical portfolios, edgy agencies, and Next.js applications that want a high-tech 'Monolith' aesthetic. Use this layout to communicate power, security, and digital intelligence through dark themes and architectural grid modules.",
        bestPractices: "Maintain scalable component architecture by pairing this with sharp, technical typography. Follow React best practices by using Framer Motion for the module reveal transitions. Optimize for performance by managed the border renders.",
        whyMatters: "Monolith-based agency layouts communicate technical authority, sophistication, and digital craft. This production-ready UI template helpsคุณ build an interface that feels organized and high-end, adding a unique 'Corporate' signature to your brand.",
        faqs: [
            { question: "How does the 'Crack' work?", answer: "The component is designed with technical 'Indices' and architectural aesthetics to simulate a high-quality technical repository for your project details." },
            { question: "Can I adjust the stats?", answer: "Yes, both the primary 'stats' array and background colors can be adjusted to create 'Industrial' or 'Cyber' agency effects." },
            { question: "Is it mobile responsive?", answer: "The grid spans adapt dynamically for mobile, ensuring the bold narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "lens",
        name: "Focus Lens",
        description: "Interactive testimonial where blur clears only where you look.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "interactive", "lens", "blur"],
        previewUrl: "/Media/TestimonialsMedia/Lens",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/Lens.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/Lens.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/Lens/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "video", type: "string", default: "https://assets.mixkit.co/videos/mixkit-man-working-on-his-laptop-308-large.mp4", description: "Background video source URL." },
            { name: "quote", type: "string", default: "Precision is not just a metric. It is an art form.", description: "Testimonial quote text." },
            { name: "author", type: "string", default: "James Wright", description: "Author name." },
            { name: "role", type: "string", default: "Architect", description: "Author role/title." },
            { name: "backgroundColor", type: "string", default: "#f4f4f0", description: "Background color (hex, rgb, or hsl)." },
            { name: "hoverText", type: "string", default: "Hover to Reveal", description: "Hover hint text." },
            { name: "lensSize", type: "number", default: "150", description: "Size of the focus lens in pixels." },
        ],
        whenToUse: "Ideal for creative studios, experimental art projects, and Next.js portfolios that want an organic 'Lens-Blur' aesthetic. Use this layout for an engaging experience where content feels 'Mailed' and 'Drafted' by physical film borders.",
        bestPractices: "Maintain scalable component architecture by keeping the lens size balanced. Follow React best practices by pairing this with bold, technical typography. Optimize for performance by managed the blur intensity.",
        whyMatters: "Hand-drawn film animations create a sense of digital 'Authenticity' and human touch. This production-ready UI template helpsคุณ build an interface that feels alive and 'Drafted', adding a unique signatures to your brand structure.",
        faqs: [
            { question: "Why 'Lens'?", answer: "The component features localized mask coordinates to 'Illuminate' the primary content, creating a high-fidelity physical focus on the underlying project detail." },
            { question: "Can I adjust blur?", answer: "Absolutely, you can adjust both the primary `backgroundColor` and the persistent `lensSize` to match your project's specific terminology." },
            { question: "Is it mobile responsive?", answer: "The focus area and typographic scales adapt for mobile, ensuring the objective clarity remains consistent on high-density mobile screens." }
        ],
    },
    {
        id: "kinetic-stream",
        name: "Kinetic Stream",
        description: "Interactive typography testimonial with expanding word context.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "typography", "interactive", "stream"],
        previewUrl: "/Media/TestimonialsMedia/KineticStream",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/KineticStream.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/KineticStream.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/KineticStream/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "words", type: "Array<{text: string, video: string, quote: string}>", default: "[{text: 'Fast.', video: '...', quote: '...'}, ...]", description: "Array of word objects with text, video URL, and quote." },
            { name: "backgroundColor", type: "string", default: "#ffffff", description: "Background color (hex, rgb, or hsl)." },
            { name: "verifiedText", type: "string", default: "Verified User", description: "Verified badge text." },
        ],
        whenToUse: "Ideal for high-end fashion portfolios, editorial magazines, and creative agencies that want a sharp 'Kinetic' aesthetic. Use this layout to showcase project collections with a mix of asymmetrical heights and technical typography.",
        bestPractices: "Follow React best practices by pairing this with professional, high-contrast photography. Maintain consistent spacing within your design system by keeping the grid gaps uniform. Optimize for performance by using efficient image loading patterns.",
        whyMatters: "Kinetic-based agency layouts communicate digital excellence, fashion-forward thinking, and attention to detail. This production-ready UI template helpsคุณ build an interface that feels curated and premium, leaving a lasting visual impression on high-value clients.",
        faqs: [
            { question: "How does it expand?", answer: "The component features localized hover coordinates that 'reveal' the video and quote as users interact with the text, creating a high-fidelity 'physical' movement." },
            { question: "Can I adjust typography?", answer: "Absolutely, both the primary 'words' and specific weights are fully configurable, allowing you to create 'High-Contrast' magazine effects." },
            { question: "Is it mobile responsive?", answer: "The vertical flow and typographic scales adapt for mobile, ensuring the 'Draft' narrative remains impactful and structural on small screens." }
        ],
    },
    {
        id: "sonic-orb",
        name: "Sonic Orb",
        description: "High-end audio testimonial with mesmerizing orb visualization.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "audio", "orb", "visualization"],
        previewUrl: "/Media/TestimonialsMedia/SonicOrb",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/SonicOrb.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/SonicOrb.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/SonicOrb/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "image", type: "string", default: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80", description: "Speaker image URL." },
            { name: "quote", type: "string", default: "It is rare to find a tool that listens as well as it performs. Absolutely transformative.", description: "Testimonial quote text." },
            { name: "location", type: "string", default: "Recorded at HQ • Los Angeles", description: "Location text." },
            { name: "backgroundColor", type: "string", default: "#111111", description: "Background color (hex, rgb, or hsl)." },
            { name: "ringCount", type: "number", default: "6", description: "Number of animated rings around the orb." },
        ],
        whenToUse: "Perfect for high-octane brands, gaming labs, and Next.js platforms that want an immersive 'Sonic' aesthetic. Use this layout for a tactile experience with organic orbital animations and heat-gradient effects.",
        bestPractices: "Maintain scalable component architecture by keeping the ring count balanced. Follow React best practices by using Framer Motion for the fluid advection renders. Optimize for performance by managed the gradient intensity.",
        whyMatters: "Organic liquid aesthetics communicate digital complexity, flow, and digital craft. This production-ready UI template helpsคุณ build an interface that feels advanced and 'Breathing', adding a unique 'Orbital' signature to your project.",
        faqs: [
            { question: "Is the orb real?", answer: "The component uses localized SVG filters and spring physics to simulate organic 'Metaballs' that merge and split smoothly as they 'orbit' through the grid." },
            { question: "Can I adjust rings?", answer: "Absolutely, you can customize both the primary `ringCount` and background colors to match your brand's specific intensity." },
            { question: "Is it mobile responsive?", answer: "The liquid flows and orb spans adapt for mobile, ensuring the 'Orbital' feel remains consistent on high-density mobile screens." }
        ],
    },
    {
        id: "prism-card",
        name: "Prism Card",
        description: "Premium holographic foil card testimonial with color-shifting effects.",
        category: "Media",
        installType: "cli",
        tags: ["testimonial", "card", "holographic", "premium"],
        previewUrl: "/Media/TestimonialsMedia/PrismCard",
        code: {
            tsx: getCode("src/components/Media/TestimonialsMedia/tsx/PrismCard.tsx"),
            jsx: getCode("src/components/Media/TestimonialsMedia/jsx/PrismCard.jsx")
        },
        usageCode: { tsx: getCode("src/app/(routes)/Media/TestimonialsMedia/PrismCard/page.tsx") },
        dependencies: ["framer-motion", "lucide-react"],
        props: [
            { name: "quote", type: "string", default: "The elegance of the code structure mirrored the elegance of the design. A unified masterpiece.", description: "Testimonial quote text." },
            { name: "author", type: "string", default: "Adrian Cole", description: "Author name." },
            { name: "role", type: "string", default: "Design Systems Lead", description: "Author role/title." },
            { name: "backgroundColor", type: "string", default: "#f5f5f4", description: "Background color (hex, rgb, or hsl)." },
            { name: "buttonText", type: "string", default: "Read Full Story", description: "Button text." },
            { name: "avatarInitial", type: "string", default: "A", description: "Avatar initial letter." },
            { name: "starCount", type: "number", default: "5", description: "Number of star indicators to display." },
        ],
        whenToUse: "Excellent for high-end digital agencies, award-winning portfolios, and Next.js platforms that want a premium 'Prism' aesthetic. Use this layout for an immersive experience with holographic effects and light refraction cues.",
        bestPractices: "Follow React best practices by pairing this with high-contrast, bold imagery. Maintain consistent spacing within your design system by keeping the UI cards centered. Optimize for performance by managed the amount of blur renders.",
        whyMatters: "Prism-based aesthetics communicate digital excellence, sophistication, and high-end craft. This production-ready UI template helpsคุณ build an interface that feels curated and premium, leaving a lasting visual impression on high-value clients.",
        faqs: [
            { question: "Is the foil real?", answer: "The component uses localized backdrop-filter blur and subtle inner glows (prism-shadows) to simulate light refraction through high-fidelity translucent surfaces." },
            { question: "Can I adjust labels?", answer: "Absolutely, you can customize both the primary `author` and the specific button accents to match your digital brand." },
            { question: "Is it mobile responsive?", answer: "The prism cards adapt their spans and layouts for mobile, ensuring the refractive narrative remains impactful and legible on small screens." }
        ],
    },
];
