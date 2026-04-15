import { MobileComponent } from "../types";

export const splashDataMetadata: MobileComponent[] = [
    {
        id: "netflix-intro-splash",
        name: "Netflix-Style Intro",
        description: "Iconic cinematic text intro with 'u-curve' alignment and deep zoom transition.",
        tags: ["splash", "cinematic", "animation"],
        installType: "cli",
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/netflix-splash-screen?preview=true&platform=web",
        deps: ["react-native"],
        props: [
            { name: "text", type: "string", description: "Brand name text (e.g. 'NETFLIX')", required: true , default: "-" },
            { name: "onFinish", type: "() => void", description: "Completion callback", required: true , default: "-" }
        ],
        code: {
            tsx: "",
            jsx: ""
        },
        usageCode: {
            tsx: "",
            jsx: ""
        }
    },
    {
        id: "cinematic-splash",
        name: "Cinematic Splash",
        description: "Deep purple gradient splash with scale/fade animations and a loading progress bar.",
        tags: ["splash", "gradient", "cinematic"],
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/cinematic-splash-screen?preview=true&platform=web",
        deps: ["expo-linear-gradient", "react-native"],
        props: [
            { name: "onAnimationComplete", type: "() => void", description: "Completion callback", required: true , default: "-" }
        ],
        code: {
            tsx: "",
            jsx: ""
        },
        usageCode: {
            tsx: "",
            jsx: ""
        }
    },
    {
        id: "instagram-splash",
        name: "Instagram Style Splash",
        description: "Classic dark mode splash screen with staggered logo and footer branding animation.",
        tags: ["splash", "brand", "dark"],
        installType: "cli",
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/instagram-splash-screen?preview=true&platform=web",
        deps: ["react-native-reanimated"],
        props: [
            { name: "onAnimationComplete", type: "() => void", description: "Completion callback", required: true , default: "-" }
        ],
        code: {
            tsx: "",
            jsx: ""
        },
        usageCode: {
            tsx: "",
            jsx: ""
        }
    }
];
