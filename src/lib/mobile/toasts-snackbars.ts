import { getCode } from "../getCodeMobile";
import { MobileComponent } from "../types";

export const toastsData: MobileComponent[] = [
    {
        id: "avatar-toast",
        name: "Avatar Toast Notification",
        description: "Dismissible top notification with avatar image and swipe-up gesture.",
        tags: ["toast", "notification", "avatar"],
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/avatar-toast?preview=true&platform=web",
        deps: ["react-native"],
        props: [
            { name: "visible", type: "boolean", description: "Control visibility", required: true , default: "-" },
            { name: "avatar", type: "string", description: "Avatar image URI", required: true , default: "-" },
            { name: "title", type: "string", description: "Primary title text", required: true , default: "-" },
            { name: "description", type: "string", description: "Secondary description text", required: true , default: "-" },
            { name: "onPress", type: "() => void", description: "Tap action callback" , default: "-" },
            { name: "onDismiss", type: "() => void", description: "Dismiss callback", required: true , default: "-" }
        ],
        code: {
            tsx: getCode("react-native/component-code/stylesheet/toasts-snackbars/avatar-toast.tsx"),
            jsx: getCode("react-native/component-code/stylesheet/toasts-snackbars/avatar-toast.jsx")
        },
        usageCode: {
            tsx: getCode("react-native/usage-code/stylesheet/toasts-snackbars/avatar-toast.tsx"),
            jsx: getCode("react-native/usage-code/stylesheet/toasts-snackbars/avatar-toast.jsx")
        }
    },
    {
        id: "chunky-snackbar",
        name: "Chunky Snackbar",
        description: "High-contrast, bold brutalist snackbar with stacking support.",
        tags: ["snackbar", "brutalist", "bold"],
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/chunky-snackbar?preview=true&platform=web",
        deps: ["react-native"],
        props: [
            { name: "item", type: "SnackbarMessage", description: "Message object with id, text, severity", required: true , default: "-" },
            { name: "onDismiss", type: "(id: string) => void", description: "Dismiss callback", required: true , default: "-" },
            { name: "index", type: "number", description: "Stacking index", required: true , default: "-" }
        ],
        code: {
            tsx: getCode("react-native/component-code/stylesheet/toasts-snackbars/chunky-snackbar.tsx"),
            jsx: getCode("react-native/component-code/stylesheet/toasts-snackbars/chunky-snackbar.jsx")
        },
        usageCode: {
            tsx: getCode("react-native/usage-code/stylesheet/toasts-snackbars/chunky-snackbar.tsx"),
            jsx: getCode("react-native/usage-code/stylesheet/toasts-snackbars/chunky-snackbar.jsx")
        }
    },
    {
        id: "glass-toast",
        name: "Glass Toast",
        description: "Premium glassmorphism toast with different state colors (success, error, info).",
        tags: ["toast", "glassmorphism", "premium"],
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/glass-toast?preview=true&platform=web",
        deps: ["react-native"],
        props: [
            { name: "visible", type: "boolean", description: "Control visibility", required: true , default: "-" },
            { name: "message", type: "string", description: "Toast message", required: true , default: "-" },
            { name: "type", type: "'success' | 'error' | 'info'", description: "Toast type", default: "success" },
            { name: "duration", type: "number", description: "Auto-hide duration", default: "3000" },
            { name: "onDismiss", type: "() => void", description: "Dismiss callback", required: true , default: "-" }
        ],
        code: {
            tsx: getCode("react-native/component-code/stylesheet/toasts-snackbars/glass-toast.tsx"),
            jsx: getCode("react-native/component-code/stylesheet/toasts-snackbars/glass-toast.jsx")
        },
        usageCode: {
            tsx: getCode("react-native/usage-code/stylesheet/toasts-snackbars/glass-toast.tsx"),
            jsx: getCode("react-native/usage-code/stylesheet/toasts-snackbars/glass-toast.jsx")
        }
    },
    {
        id: "mini-sheet-snackbar",
        name: "Mini Sheet Snackbar",
        description: "A hybrid snackbar/bottom-sheet for more complex notifications with actions.",
        tags: ["snackbar", "sheet", "actions"],
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/mini-sheet-snackbar?preview=true&platform=web",
        deps: ["react-native"],
        props: [
            { name: "visible", type: "boolean", description: "Control visibility", required: true , default: "-" },
            { name: "title", type: "string", description: "Sheet title", required: true , default: "-" },
            { name: "description", type: "string", description: "Sheet description", required: true , default: "-" },
            { name: "actions", type: "Action[]", description: "Array of action buttons" , default: "-" },
            { name: "theme", type: "'light' | 'dark'", description: "Color theme", default: "light" },
            { name: "onClose", type: "() => void", description: "Close callback", required: true , default: "-" }
        ],
        code: {
            tsx: getCode("react-native/component-code/stylesheet/toasts-snackbars/mini-sheet-snackbar.tsx"),
            jsx: getCode("react-native/component-code/stylesheet/toasts-snackbars/mini-sheet-snackbar.jsx")
        },
        usageCode: {
            tsx: getCode("react-native/usage-code/stylesheet/toasts-snackbars/mini-sheet-snackbar.tsx"),
            jsx: getCode("react-native/usage-code/stylesheet/toasts-snackbars/mini-sheet-snackbar.jsx")
        }
    },
    {
        id: "progress-snackbar",
        name: "Progress Snackbar",
        description: "Snackbar with an integrated progress bar for long-running tasks.",
        tags: ["snackbar", "progress", "loading"],
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/progress-snackbar?preview=true&platform=web",
        deps: ["react-native"],
        props: [
            { name: "visible", type: "boolean", description: "Control visibility", required: true , default: "-" },
            { name: "progress", type: "number", description: "Progress 0-100", required: true , default: "-" },
            { name: "label", type: "string", description: "Status label", required: true , default: "-" },
            { name: "themeColor", type: "string", description: "Custom tint color", default: "#6366f1" }
        ],
        code: {
            tsx: getCode("react-native/component-code/stylesheet/toasts-snackbars/progress-snackbar.tsx"),
            jsx: getCode("react-native/component-code/stylesheet/toasts-snackbars/progress-snackbar.jsx")
        },
        usageCode: {
            tsx: getCode("react-native/usage-code/stylesheet/toasts-snackbars/progress-snackbar.tsx"),
            jsx: getCode("react-native/usage-code/stylesheet/toasts-snackbars/progress-snackbar.jsx")
        }
    },
    {
        id: "swipe-toast",
        name: "Swipe Toast",
        description: "Interactive toast that can be swiped horizontally to dismiss.",
        tags: ["toast", "gesture", "swipe"],
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/swipe-toast?preview=true&platform=web",
        deps: ["react-native"],
        props: [
            { name: "visible", type: "boolean", description: "Control visibility", required: true , default: "-" },
            { name: "message", type: "string", description: "Message text", required: true , default: "-" },
            { name: "actionLabel", type: "string", description: "Optional action button text" , default: "-" },
            { name: "onAction", type: "() => void", description: "Action callback" , default: "-" },
            { name: "onDismiss", type: "() => void", description: "Dismiss callback", required: true , default: "-" }
        ],
        code: {
            tsx: getCode("react-native/component-code/stylesheet/toasts-snackbars/swipe-toast.tsx"),
            jsx: getCode("react-native/component-code/stylesheet/toasts-snackbars/swipe-toast.jsx")
        },
        usageCode: {
            tsx: getCode("react-native/usage-code/stylesheet/toasts-snackbars/swipe-toast.tsx"),
            jsx: getCode("react-native/usage-code/stylesheet/toasts-snackbars/swipe-toast.jsx")
        }
    }
];
