import { getCode } from "../getCode";
import { Component } from "../types";

export const cardComponents: Component[] = [
    {
        id: "card-cinematic",
        name: "Cinematic Movie Card",
        description: "A premium, motion-heavy card inspired by modern streaming platforms. Features expanding headers, cinematic fades, and high-impact typography for movie or portfolio showcases.",
        category: "UI Components",
        installType: "cli",
        tags: ["card", "cinematic", "movie", "animation", "hover effect", "premium"],
        previewUrl: "/UIComponents/Cards/CardCinematic",
        code: {
            tsx: getCode("src/components/UIComponents/Cards/tsx/CardCinematic.tsx"),
            jsx: getCode("src/components/UIComponents/Cards/jsx/CardCinematic.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/UIComponents/Cards/CardCinematic/page.tsx") },
        dependencies: ["react", "lucide-react", "framer-motion"],
        props: [
            { name: "title", type: "string", default: "'Cinema'", description: "Main title of the card." },
            { name: "director", type: "string", default: "'Dir. Nolan'", description: "Secondary info text for the top/bottom bars." },
            { name: "image", type: "string", default: "Unsplash URL", description: "Background image source." },
            { name: "barColor", type: "string", default: "'#000000'", description: "Color of the cinematic bars." },
        ],
        whenToUse: "Ideal for film portfolios, high-end entertainment sites, and cinematic storytelling. Use this to create a movie-poster feel that expands on interaction, revealing metadata like directors and release years.",
        bestPractices: "Use high-resolution vertical images for the best cinematic impact. Pair with the `Film` icon or custom SVG icons to match your category. Maintain a dark theme background to let the glowing typography stand out.",
        whyMatters: "Motion design in cards significantly increases user engagement. This component uses theatrical 'bars' and scale transforms to create a premium feel that is more immersive than standard flat cards.",
        faqs: [
            { question: "Can I use it for non-movie content?", answer: "Absolutely! It works great for product launches or high-fashion lookbooks where a dramatic entrance is needed." },
            { question: "Is the hover animation customizable?", answer: "Yes, you can adjust the `transitionDuration` and `imageOpacity` to fine-tune the dramatic reveal." }
        ],
    },
    {
        id: "card-dynamic",
        name: "Dynamic Action Card",
        description: "An interactive, expandable card that transitions between 'processing' and 'complete' states. Perfect for file uploads, status updates, or interactive dashboards.",
        category: "UI Components",
        installType: "cli",
        tags: ["card", "dynamic", "status", "interactive", "animation", "framer-motion"],
        previewUrl: "/UIComponents/Cards/CardDynamic",
        code: {
            tsx: getCode("src/components/UIComponents/Cards/tsx/CardDynamic.tsx"),
            jsx: getCode("src/components/UIComponents/Cards/jsx/CardDynamic.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/UIComponents/Cards/CardDynamic/page.tsx") },
        dependencies: ["react", "framer-motion"],
        props: [
            { name: "processingText", type: "string", default: "'Processing...'", description: "Text shown when the card is collapsed." },
            { name: "title", type: "string", default: "'Transfer Complete'", description: "Heading for the expanded state." },
            { name: "collapsedWidth", type: "string", default: "'16rem'", description: "Width when only showing its initial state." },
            { name: "backgroundColor", type: "string", default: "'#000000'", description: "Main card background color." },
        ],
        whenToUse: "Perfect for real-time app interactions like file processing, notifications, and modular UI tools where you want to save space until user interaction occurs.",
        bestPractices: "Use the `onButtonClick` prop to trigger secondary actions once the user expands the card. Keep the processing text short to ensure it fits the collapsed pill shape comfortably.",
        whyMatters: "Layout transitions with Framer Motion provide a tactile experience. This component uses layout IDs to seamlessly morph from a simple status indicator into a full-featured action card.",
        faqs: [
            { question: "Can I change the spring physics?", answer: "Yes, use `springStiffness` and `springDamping` to make the expansion feel snappier or more elastic." },
            { question: "Is it responsive?", answer: "The component uses fluid width units, ensuring it adapts to mobile containers gracefully." }
        ],
    },
    {
        id: "card-floating-badge",
        name: "Floating Badge Product Card",
        description: "A minimalist product display card featuring a 3D-effect floating image and an animated notification badge. Designed for e-commerce and featured item grids.",
        category: "UI Components",
        installType: "cli",
        tags: ["card", "product", "badge", "e-commerce", "minimal", "3d effect"],
        previewUrl: "/UIComponents/Cards/CardFloatingBadge",
        code: {
            tsx: getCode("src/components/UIComponents/Cards/tsx/CardFloatingBadge.tsx"),
            jsx: getCode("src/components/UIComponents/Cards/jsx/CardFloatingBadge.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/UIComponents/Cards/CardFloatingBadge/page.tsx") },
        dependencies: ["react", "framer-motion"],
        props: [
            { name: "title", type: "string", default: "'Nike Air Max'", description: "Product name header." },
            { name: "price", type: "string", default: "'$129.00'", description: "Pricing subtext." },
            { name: "badgeText", type: "string", default: "'NEW'", description: "Text for the floating badge tag." },
            { name: "image", type: "string", default: "Unsplash URL", description: "Source for the product silhouette." },
        ],
        whenToUse: "Top-tier choice for sneaker stores, gadget marketplaces, and any luxury product grid that needs a clean, high-end presentation with a touch of playful motion.",
        bestPractices: "Use PNGs with transparent backgrounds for the product image to achieve the best 'floating' effect. Scale the `cardSize` based on your grid layout to maintain visual hierarchy.",
        whyMatters: "The 3D translate-Z effect on hover makes static product images feel more tangible. This drives higher click-through rates by making the product 'pop' out of the screen.",
        faqs: [
            { question: "Can I disable the badge?", answer: "Simply pass an empty string to `badgeText` or modify the component to conditionally render the badge div." },
            { question: "How do I change the hover offset?", answer: "Adjust the `hoverTranslateY` prop to control how high the product card floats on hover." }
        ],
    },
    {
        id: "uilora-glass-pricing-card",
        name: "Glassmorphic Pricing Card",
        description: "A futuristic pricing tier component with high-octane glassmorphism, glowing borders, and animated gradients. Built for premium SaaS landing pages.",
        category: "UI Components",
        installType: "cli",
        tags: ["card", "pricing", "glassmorphism", "glow", "saas", "premium"],
        previewUrl: "/UIComponents/Cards/UiloraGlassPricingCard",
        code: {
            tsx: getCode("src/components/UIComponents/Cards/tsx/UiloraGlassPricingCard.tsx"),
            jsx: getCode("src/components/UIComponents/Cards/jsx/UiloraGlassPricingCard.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/UIComponents/Cards/UiloraGlassPricingCard/page.tsx") },
        dependencies: ["react", "lucide-react", "next"],
        props: [
            { name: "plan", type: "string", default: "'Premium Plus'", description: "Plan name." },
            { name: "price", type: "string", default: "'$29.99'", description: "Numeric price." },
            { name: "features", type: "string[]", default: "['Unlimited...', ...]", description: "List of plan offerings." },
            { name: "cta", type: "string", default: "'Get Started Now'", description: "Main button call to action." },
        ],
        whenToUse: "Use this to highlight your flagship SaaS plan. It's designed to be the 'featured' card in a pricing grid, drawing immediate attention with its subtle background glow.",
        bestPractices: "Pair with a dark background to maximize the 'glow' effect. Ensure your feature text is concise to maintain the vertical balance of the glass container.",
        whyMatters: "High-end glassmorphism is a hallmark of 'Pro' software. This component provides the necessary depth and lighting effects to make your pricing feel expensive and trustworthy.",
        faqs: [
            { question: "Can I move the 'Popular' badge?", answer: "The badge is positioned absolute top-right; you can tweak the Tailwind classes to relocate or style it differently." },
            { question: "Does the glow animate?", answer: "Yes, it uses a duration-1000 transition to softly expand the blur and opacity when the cursor enters." }
        ],
    },
    {
        id: "uilora-input-card",
        name: "AI Prompt Input Card",
        description: "A specialized interaction card for AI-driven applications. Features a clean dark aesthetic, glass glow accents, and utility action buttons for file attachments and web searches.",
        category: "UI Components",
        installType: "cli",
        tags: ["card", "input", "AI", "prompt", "dark mode", "utility"],
        previewUrl: "/UIComponents/Cards/UiloraInputCard",
        code: {
            tsx: getCode("src/components/UIComponents/Cards/tsx/UiloraInputCard.tsx"),
            jsx: getCode("src/components/UIComponents/Cards/jsx/UiloraInputCard.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/UIComponents/Cards/UiloraInputCard/page.tsx") },
        dependencies: ["react", "lucide-react"],
        props: [
            { name: "title", type: "string", default: "'Imagine Something... ✨'", description: "Header text for the input box." },
            { name: "placeholder", type: "string", default: "'Describe your vision...'", description: "Grayed out hint text." },
        ],
        whenToUse: "The definitive choice for AI chat interfaces, creative generation tools, and search-heavy dashboards that want to look like OpenAI or Perplexity.",
        bestPractices: "Keep the bottom pill buttons for common quick-actions (like 'Analyse Data') to improve user UX efficiency. Use the glass glow effect to lead the eye towards the title.",
        whyMatters: "Input design is often overlooked. This component turns a simple text box into a premium 'Control Center' feel, giving your AI tool a distinct brand identity.",
        faqs: [
            { question: "Are the icons clickable?", answer: "Yes, they are wrapped in button tags, ready for your click handlers to trigger file selection or settings." },
            { question: "Can I change the send icon?", answer: "Simply swap the Lucide `Send` icon for `ArrowUp` or a custom brand icon inside the TSX/JSX." }
        ],
    },
    {
        id: "uilora-keyboard-card",
        name: "Mechanical Keyboard Showcase",
        description: "A stunning, full-detail mechanical keyboard component with a signature Indigo/Blue glow theme. Uses styled-components for complex lighting and keycap depth.",
        category: "UI Components",
        installType: "cli",
        tags: ["card", "keyboard", "skeuomorphic", "blue theme", "interactive", "indigo"],
        previewUrl: "/UIComponents/Cards/UiloraKeyboardCard",
        code: {
            tsx: getCode("src/components/UIComponents/Cards/tsx/UiloraKeyboardCard.tsx"),
            jsx: getCode("src/components/UIComponents/Cards/jsx/UiloraKeyboardCard.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/UIComponents/Cards/UiloraKeyboardCard/page.tsx") },
        dependencies: ["react", "styled-components"],
        props: [],
        whenToUse: "Perfect for developer portfolios, typing test apps, or as a decorative 'hero' element for hardware and peripheral brands. It serves as a masterclass in CSS shadow and light modeling.",
        bestPractices: "Since this component uses Styled Components, ensure you have a `StyledComponentsRegistry` set up if using Next.js App Router. Use it in a centered container to allow the glow to radiate.",
        whyMatters: "Skeuomorphism is returning in modern UI. This component uses nested shadows and border-lighting to create a tactile 3D effect that feels like real hardware.",
        faqs: [
            { question: "Is it a real typing keyboard?", answer: "It's a visual showcase; you can add event listeners to the '.key' selector to make it react to real keystrokes." },
            { question: "Why Styled Components?", answer: "The complex lighting system for 60+ keys is much more manageable and performant using CSS-in-JS for these specific shadow calculations." }
        ],
    },
    {
        id: "uilora-modern-blog-card",
        name: "Modern Narrative Blog Card",
        description: "A vertical card designed for high-end editorial content. Features a top-to-bottom gradient, bold condensed typography, and a hidden 'Arrow' action button revealed on hover.",
        category: "UI Components",
        installType: "cli",
        tags: ["card", "blog", "editorial", "modern", "image", "overlay"],
        previewUrl: "/UIComponents/Cards/UiloraModernBlogCard",
        code: {
            tsx: getCode("src/components/UIComponents/Cards/tsx/UiloraModernBlogCard.tsx"),
            jsx: getCode("src/components/UIComponents/Cards/jsx/UiloraModernBlogCard.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/UIComponents/Cards/UiloraModernBlogCard/page.tsx") },
        dependencies: ["react"],
        props: [
            { name: "tag", type: "string", default: "'WHAT TO WATCH'", description: "Small category text at the top." },
            { name: "title", type: "string", default: "'Stream the Acme event'", description: "Main headline." },
            { name: "image", type: "string", default: "Unsplash URL", description: "Background cover image." },
        ],
        whenToUse: "Ideal for news sites, premium blogs, and featured article sections. It's particularly effective when used in a side-scrolling carousel or a 3-column grid.",
        bestPractices: "Use high-contrast images. The gradient overlay is dark, so images with bright focal points work best. Keep titles under 40 characters for the best readability.",
        whyMatters: "Clean editorial design is often ruined by cluttered cards. This component isolates the title and tag, giving the imagery room to breathe while maintaining a clear action path on hover.",
        faqs: [
            { question: "Can I use it horizontally?", answer: "This is optimized for vertical ratios (450px height), but it can be adapted by changing the container's layout classes." },
            { question: "How do I change the arrow icon?", answer: "You can find the SVG path inside the footer div and replace it with any 20x20 SVG." }
        ],
    },
    {
        id: "uilora-music-card",
        name: "Spotify-Style Glass Player",
        description: "A sleek music/album card with frosted glass textures and sky-blue accents. Includes track counts, subtitles, and a hover-active album art scale effect.",
        category: "UI Components",
        installType: "cli",
        tags: ["card", "music", "player", "spotify", "glass", "minimal"],
        previewUrl: "/UIComponents/Cards/UiloraMusicCard",
        code: {
            tsx: getCode("src/components/UIComponents/Cards/tsx/UiloraMusicCard.tsx"),
            jsx: getCode("src/components/UIComponents/Cards/jsx/UiloraMusicCard.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/UIComponents/Cards/UiloraMusicCard/page.tsx") },
        dependencies: ["react"],
        props: [
            { name: "title", type: "string", default: "'Frontend Radio'", description: "Station or album name." },
            { name: "subtitle", type: "string", default: "'DAILY MIX'", description: "Secondary tag line." },
            { name: "tracks", type: "string", default: "'12 Tracks'", description: "Content description." },
        ],
        whenToUse: "Best for music apps, podcast directories, and audio player interfaces. It provides a familiar, comfortable layout for users used to modern streaming platforms.",
        bestPractices: "The background uses `zinc-900/50`, so it looks amazing when placed over slightly colorful or blurry gradients. Maintain the square aspect ratio for the album art.",
        whyMatters: "Audio content needs to feel 'vibrant' yet 'organized'. The combo of bold headers and soft glass containers achieves this balance perfectly for real-world app architectures.",
        faqs: [
            { question: "Is the album art interactive?", answer: "On hover, the image scales subtly by 10% to create a sense of 'pressing' into the content." },
            { question: "Can I add play buttons?", answer: "Yes, you can easily absolute-position a play button over the `relative` image container." }
        ],
    },
    {
        id: "uilora-overlay-card",
        name: "Utility Glass Overlay Card",
        description: "A minimalist square card with a persistent 'Notify me' glass footer. Ideal for coming-soon items, gated content, or quick-action product displays.",
        category: "UI Components",
        installType: "cli",
        tags: ["card", "overlay", "glassmorphism", "minimal", "utility"],
        previewUrl: "/UIComponents/Cards/UiloraOverlayCard",
        code: {
            tsx: getCode("src/components/UIComponents/Cards/tsx/UiloraOverlayCard.tsx"),
            jsx: getCode("src/components/UIComponents/Cards/jsx/UiloraOverlayCard.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/UIComponents/Cards/UiloraOverlayCard/page.tsx") },
        dependencies: ["react"],
        props: [
            { name: "footerText", type: "string", default: "'Available soon.'", description: "Text inside the glass pill." },
            { name: "buttonText", type: "string", default: "'Notify me'", description: "Action button label." },
        ],
        whenToUse: "Perfect for secondary products, teaser grids, or galleries where you want minimal distraction but clear actionable footers.",
        bestPractices: "Use square (1:1) images. Avoid putting important text on the bottom 25% of the image as the glass footer will overlap it.",
        whyMatters: "Modern UI is moving away from complex borders. By using a glass overlay for the action footer, you maximize screen real estate for the image content.",
        faqs: [
            { question: "Can I change the footer height?", answer: "Modify the `h-16` class on the footer container to make it slimmer or taller." },
            { question: "Does the button support colored backgrounds?", answer: "It uses a white/10 glass effect, but you can swap it for a solid primary color to drive more conversions." }
        ],
    },
    {
        id: "uilora-profile-card",
        name: "Designer Portfolio Card",
        description: "A professional profile card with a deep gradient overlay and a signature floating 'Plus' button. Optimized for team pages and visual designer showcases.",
        category: "UI Components",
        installType: "cli",
        tags: ["card", "profile", "team", "portfolio", "designer", "modern"],
        previewUrl: "/UIComponents/Cards/UiloraProfileCard",
        code: {
            tsx: getCode("src/components/UIComponents/Cards/tsx/UiloraProfileCard.tsx"),
            jsx: getCode("src/components/UIComponents/Cards/jsx/UiloraProfileCard.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/UIComponents/Cards/UiloraProfileCard/page.tsx") },
        dependencies: ["react", "lucide-react"],
        props: [
            { name: "name", type: "string", default: "'Sarah Johnson'", description: "Person's name." },
            { name: "role", type: "string", default: "'Visual Designer'", description: "Job title or role." },
        ],
        whenToUse: "The standard for 'About Us' pages, agency portfolios, and social media profile previews in a modern dashboard.",
        bestPractices: "Use high-quality headshots with centered subjects. The name and role are positioned at the bottom, so avoid images with heavy detail at the base.",
        whyMatters: "Social connection is vital in web apps. This card humanizes the interface by putting the focus on the person, while the interactive FAB (Floating Action Button) adds a layer of tech-savvy polish.",
        faqs: [
            { question: "What does the Plus button do?", answer: "By default, it rotates on hover. You can link it to a profile expansion, a follow action, or a contact modal." },
            { question: "Is it mobile responsive?", answer: "Yes, its 'w-72' width ensures it fits perfectly in multi-column grids across all screen sizes." }
        ],
    },
    {
        id: "uilora-success-card",
        name: "Cyan Glow Checklist Card",
        description: "An encouraging achievement or feature list card. Features a soft corner glow, cyan checkmarks, and a powerful gradient button.",
        category: "UI Components",
        installType: "cli",
        tags: ["card", "success", "checklist", "features", "cyan", "glow"],
        previewUrl: "/UIComponents/Cards/UiloraSuccessCard",
        code: {
            tsx: getCode("src/components/UIComponents/Cards/tsx/UiloraSuccessCard.tsx"),
            jsx: getCode("src/components/UIComponents/Cards/jsx/UiloraSuccessCard.jsx"),
        },
        usageCode: { tsx: getCode("src/app/(routes)/UIComponents/Cards/UiloraSuccessCard/page.tsx") },
        dependencies: ["react", "lucide-react"],
        props: [
            { name: "title", type: "string", default: "'Keys to Success'", description: "Main card header." },
            { name: "items", type: "string[]", default: "['Set...', ...]", description: "Checklist items array." },
            { name: "buttonText", type: "string", default: "'Get Your Success'", description: "Main activation button text." },
        ],
        whenToUse: "Excellent for onboarding checklists, 'What's Included' sections, and motivational banners in productivity apps.",
        bestPractices: "Keep the list to 5 items max for optimal visual balance. The cyan theme is great for tech and wellness apps, but can be swapped to emerald for financial success vibes.",
        whyMatters: "Checklists reduce cognitive load. This card makes 'ticking off' features feel rewarding through the use of high-contrast icons and glowing accents.",
        faqs: [
            { question: "Can I change the checkmark color?", answer: "Yes, simply swap the `text-cyan-400` class on the Lucide icon for any other Tailwind color." },
            { question: "Is the button shadow fixed?", answer: "No, it uses a subtle hover translate effect and an intensified cyan shadow to signal pick-up-readiness." }
        ],
    },
];

