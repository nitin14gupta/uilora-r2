import { MobileComponent } from "../types";

export const loadersDataMetadata: MobileComponent[] = [
    {
        id: "skeleton-loader",
        name: "Skeleton Loader",
        description: "A collection of versatile skeleton loaders including Circle, Button, Card, and List Item variants with shimmering animation.",
        tags: ["skeleton", "loading", "shimmer"],
        installType: "cli",
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/skeleton-loader?preview=true&platform=web",
        deps: ["expo-linear-gradient", "expo-vector-icons"],
        props: [
            { name: "width", type: "DimensionValue", description: "Width of the skeleton", default: "100%" },
            { name: "height", type: "DimensionValue", description: "Height of the skeleton", default: "20" },
            { name: "borderRadius", type: "number", description: "Border radius", default: "8" },
            { name: "style", type: "ViewStyle", description: "Custom container styles" , default: "-" }
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
        id: "article-loader",
        name: "Article Loaders",
        description: "Specialized skeletons for news feeds, instagram grids, and chat threads.",
        tags: ["news", "social", "chat"],
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/article-loader?preview=true&platform=web",
        deps: ["expo-linear-gradient"],
        props: [],
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
        id: "system-skeletons",
        name: "System Skeletons",
        description: "Complete system UI placeholders including Profile Headers, Search Bars, and Product Cards.",
        tags: ["system", "profile", "ecommerce"],
        installType: "cli",
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/system-skeletons?preview=true&platform=web",
        deps: ["expo-linear-gradient", "expo-vector-icons"],
        props: [],
        code: {
            tsx: "",
            jsx: ""
        },
        usageCode: {
            tsx: "",
            jsx: ""
        }
    },
];
