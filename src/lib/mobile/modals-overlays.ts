export const modalsData = [
    {
        id: "bottom-sheet-spring",
        name: "Spring Bottom Sheet",
        description: "High-performance, gesture-driven bottom sheet with spring physics.",
        tags: ["modal", "gesture", "bottom-sheet"],
        previewUrl: "/mobile/modals/spring-sheet",
        deps: ["react-native-gesture-handler", "reanimated"],
        props: [],
        code: `// Bottom sheet code`,
        usageCode: `<BottomSheet />`
    },
    {
        id: "glass-overlay-modal",
        name: "Glass Overlay Modal",
        description: "Centered modal with a blurred backdrop and glassmorphism container.",
        tags: ["modal", "glassmorphism", "overlay"],
        previewUrl: "/mobile/modals/glass",
        deps: ["expo-blur"],
        props: [],
        code: `// Glass modal code`,
        usageCode: `<GlassModal visible={true} />`
    },
    {
        id: "context-menu-ios",
        name: "iOS Style Context Menu",
        description: "Long-press context menu replica for actionable items.",
        tags: ["menu", "ios", "interaction"],
        previewUrl: "/mobile/modals/context-menu",
        deps: [],
        props: [],
        code: `// Context menu code`,
        usageCode: `<ContextMenu actions={actions} />`
    }
];
