import { Component } from "../types";

const VIDEO_URL = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

export const videoPlayerComponentsMetadata: Component[] = [
    {
        id: "player-stream",
        name: "Stream",
        description: "Live streaming dashboard with real-time chat panel, viewer stats, and dark broadcast aesthetics.",
        category: "Media",
        installType: "cli",
        tags: ["video", "player", "stream", "live", "chat", "dashboard"],
        previewUrl: "/Media/VideoPlayers/PlayerStream",
        code: { tsx: "" },
        usageCode: { tsx: "" },
        dependencies: ["next", "framer-motion"],
        props: [
            { name: "video", type: "string", default: VIDEO_URL, description: "Video source URL." },
            { name: "backgroundColor", type: "string", default: "#0d0d14", description: "Background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Perfect for live streaming platforms, gaming dashboards, and broadcast tools that need a split-layout experience with real-time chat alongside video. Ideal when social engagement and live viewer interaction are core to the product.",
        bestPractices: "Pair with WebSocket-driven chat data for real production use. Keep the video area at roughly 60% width for comfortable viewing. Use the Uilora-branded defaults for internal tools or swap in your own channel metadata.",
        whyMatters: "The dual-panel layout mirrors how top streaming platforms present live content — video and community side-by-side. This pattern reduces context switching and keeps viewers engaged longer, increasing session time and interaction rates.",
        faqs: [
            { question: "Can I connect a real chat?", answer: "Yes. Replace the mock messages array with a WebSocket or polling feed and push new entries the same way the mock timer does — the UI will handle the animated scroll automatically." },
            { question: "Is the viewer count live?", answer: "The default shows a static Uilora-branded count. Wire up your own analytics endpoint and update the state variable to reflect real-time numbers." },
            { question: "Is it mobile responsive?", answer: "On small screens the chat panel stacks below the video, maintaining full usability. The scrubber thumbnail preview collapses gracefully on touch devices." }
        ],
    },
    {
        id: "player-cinema",
        name: "Cinema",
        description: "Full-screen cinematic player with auto-hiding controls, episode panel, and scrubber thumbnail preview.",
        category: "Media",
        installType: "cli",
        tags: ["video", "player", "cinema", "fullscreen", "netflix", "episodes"],
        previewUrl: "/Media/VideoPlayers/PlayerCinema",
        code: { tsx: "" },
        usageCode: { tsx: "" },
        dependencies: ["next", "framer-motion"],
        props: [
            { name: "video", type: "string", default: VIDEO_URL, description: "Video source URL." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Best for streaming platforms, video-on-demand apps, and immersive editorial experiences where the content takes full precedence. The episode slide-in panel makes it ideal for series or multi-part content.",
        bestPractices: "Keep the episode list short (4–6 items) for first-load performance. The controls auto-hide after 3 seconds — ensure your video is high enough resolution to fill the screen without distortion.",
        whyMatters: "Full-screen immersive players increase watch completion rates by removing visual distractions. The scrubber thumbnail preview is one of the most-requested features in modern players — it helps users navigate quickly without committing to a new position.",
        faqs: [
            { question: "How does the thumbnail preview work?", answer: "A hidden video element seeks to the hovered timestamp in real time. On each 'seeked' event, the frame is drawn to a 160×90 canvas and displayed above the scrubber cursor." },
            { question: "Can I add more episodes?", answer: "Yes. The episode list is a static array inside the component. Replace it with a prop or API call to populate dynamically." },
            { question: "Does it support keyboard navigation?", answer: "Space toggles play/pause. Arrow keys seek forward/back. Escape closes the episode panel. All are implemented natively." }
        ],
    },
    {
        id: "player-float",
        name: "Float",
        description: "Minimal full-bleed player with a floating glass controls bar that auto-hides on idle.",
        category: "Media",
        installType: "cli",
        tags: ["video", "player", "float", "glass", "minimal", "immersive"],
        previewUrl: "/Media/VideoPlayers/PlayerFloat",
        code: { tsx: "" },
        usageCode: { tsx: "" },
        dependencies: ["next", "framer-motion"],
        props: [
            { name: "video", type: "string", default: VIDEO_URL, description: "Video source URL." },
            { name: "backgroundColor", type: "string", default: "#000000", description: "Background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Ideal for portfolio showcases, brand films, and creative agencies where the video is the hero. The floating glass bar disappears after 2.5 seconds of inactivity, letting the footage breathe without UI clutter.",
        bestPractices: "Use with high-quality, visually striking footage — the minimal UI puts full focus on the content. Avoid using for educational or instructional videos where persistent controls are expected.",
        whyMatters: "Removing persistent UI chrome forces viewers to focus entirely on the content. The glass morphism bar feels tactile and premium without competing with the visual narrative — a signature Uilora aesthetic.",
        faqs: [
            { question: "How does the auto-hide work?", answer: "A setTimeout resets on every mousemove event over the player. If no movement is detected for 2.5 seconds, the controls fade out. Moving the mouse brings them back instantly." },
            { question: "Can I change the accent color?", answer: "The purple (#7c3aed) play button accent is baked into the component for Uilora branding. Fork the component and update the color constant to match your palette." },
            { question: "Does the scrubber preview work here?", answer: "Yes — hover the progress bar and a 160×90 canvas thumbnail pops above your cursor showing the frame at that timestamp." }
        ],
    },
    {
        id: "player-course",
        name: "Course",
        description: "Educational course player with lesson navigation, completion state, and Uilora Academy branding.",
        category: "Media",
        installType: "cli",
        tags: ["video", "player", "course", "education", "learning", "academy"],
        previewUrl: "/Media/VideoPlayers/PlayerCourse",
        code: { tsx: "" },
        usageCode: { tsx: "" },
        dependencies: ["next", "framer-motion"],
        props: [
            { name: "video", type: "string", default: VIDEO_URL, description: "Video source URL." },
            { name: "backgroundColor", type: "string", default: "#0a0a0f", description: "Background color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Built for LMS platforms, online academies, and technical course builders. The lesson header, progress metadata strip, and 'Finish Lesson' CTA create a structured learning flow that encourages completion.",
        bestPractices: "Pair with a lesson list sidebar for multi-module courses. The ended-state overlay with 'Finish Lesson →' CTA is a conversion moment — hook it to your course progression API to mark lessons complete.",
        whyMatters: "Course completion rates are heavily influenced by UI clarity and motivational cues. The persistent lesson context (title, module, duration) keeps learners oriented, while the animated ended-state CTA creates a natural transition to the next lesson.",
        faqs: [
            { question: "Can I show chapter markers on the scrubber?", answer: "Yes. Add absolute-positioned divs along the scrubber at calculated percentage positions based on chapter timestamps. The scrubber is a standard div with a relative container." },
            { question: "How do I track lesson completion?", answer: "Listen to the video's 'ended' event (already handled in the component) and fire your analytics or LMS callback from the onEnded handler." },
            { question: "Is the scrubber thumbnail preview included?", answer: "Yes — all Uilora video players ship with the canvas-based thumbnail preview on hover as a standard feature." }
        ],
    },
    {
        id: "player-card",
        name: "Card",
        description: "Light-mode card player with warm gradient background, engagement actions, and tag pills.",
        category: "Media",
        installType: "cli",
        tags: ["video", "player", "card", "light", "social", "engagement"],
        previewUrl: "/Media/VideoPlayers/PlayerCard",
        code: { tsx: "" },
        usageCode: { tsx: "" },
        dependencies: ["next", "framer-motion"],
        props: [
            { name: "video", type: "string", default: VIDEO_URL, description: "Video source URL." },
            { name: "backgroundColor", type: "string", default: "#ff6b35", description: "Background gradient start color (hex, rgb, or hsl)." },
        ],
        whenToUse: "Perfect for social video feeds, content discovery interfaces, and editorial platforms with light-mode aesthetics. The like/dislike row, colorful tag pills, and stream links make it feel at home in a YouTube-style or newsletter-embedded context.",
        bestPractices: "Works best with short-form content (under 5 minutes). The card format shines in a grid layout where multiple PlayerCard instances display different videos side by side.",
        whyMatters: "The card format is the most recognizable video UI pattern in social media. Wrapping a player in a card with engagement actions immediately signals interactivity to users and increases click-through and engagement rates.",
        faqs: [
            { question: "Can I embed this in a feed grid?", answer: "Yes. The component is a self-contained card — drop multiple instances in a CSS grid and they each maintain independent playback state." },
            { question: "Are the like counts real?", answer: "The defaults are Uilora-branded placeholders. Wire up your own state management or API to make the thumbs-up/down counts persist and update." },
            { question: "Can I change the background gradient?", answer: "The backgroundColor prop controls the gradient start color. The gradient transitions through lighter tones automatically — set any hex value to create your palette." }
        ],
    },
];
