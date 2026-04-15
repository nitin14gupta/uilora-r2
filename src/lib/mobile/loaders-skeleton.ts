import { MobileComponent } from "../types";
import { getCode } from "../getCodeMobile";

export const loadersData: MobileComponent[] = [
    {
        id: "skeleton-loader",
        name: "Skeleton Loader",
        description: "A collection of versatile skeleton loaders including Circle, Button, Card, and List Item variants with shimmering animation.",
        tags: ["skeleton", "loading", "shimmer"],
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/skeleton-loader?preview=true&platform=web",
        deps: ["expo-linear-gradient", "expo-vector-icons"],
        props: [
            { name: "width", type: "DimensionValue", description: "Width of the skeleton", default: "100%" },
            { name: "height", type: "DimensionValue", description: "Height of the skeleton", default: "20" },
            { name: "borderRadius", type: "number", description: "Border radius", default: "8" },
            { name: "style", type: "ViewStyle", description: "Custom container styles" , default: "-" }
        ],
        code: {
            tsx: getCode("react-native/component-code/stylesheet/loaders-skeleton/skeleton-loader.tsx"),
            jsx: getCode("react-native/component-code/stylesheet/loaders-skeleton/skeleton-loader.jsx")
        },
        usageCode: {
            tsx: getCode("react-native/usage-code/stylesheet/loaders-skeleton/skeleton-loader.tsx"),
            jsx: getCode("react-native/usage-code/stylesheet/loaders-skeleton/skeleton-loader.jsx")
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
            tsx: getCode("react-native/component-code/stylesheet/loaders-skeleton/article-loader.tsx"),
            jsx: getCode("react-native/component-code/stylesheet/loaders-skeleton/article-loader.jsx")
        },
        usageCode: {
            tsx: getCode("react-native/usage-code/stylesheet/loaders-skeleton/article-loader.tsx"),
            jsx: getCode("react-native/usage-code/stylesheet/loaders-skeleton/article-loader.jsx")
        }
    },
    {
        id: "system-skeletons",
        name: "System Skeletons",
        description: "Complete system UI placeholders including Profile Headers, Search Bars, and Product Cards.",
        tags: ["system", "profile", "ecommerce"],
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/system-skeletons?preview=true&platform=web",
        deps: ["expo-linear-gradient", "expo-vector-icons"],
        props: [],
        code: {
            tsx: getCode("react-native/component-code/stylesheet/loaders-skeleton/system-skeletons.tsx"),
            jsx: getCode("react-native/component-code/stylesheet/loaders-skeleton/system-skeletons.jsx")
        },
        usageCode: {
            tsx: getCode("react-native/usage-code/stylesheet/loaders-skeleton/system-skeletons.tsx"),
            jsx: getCode("react-native/usage-code/stylesheet/loaders-skeleton/system-skeletons.jsx")
        }
    },
];
