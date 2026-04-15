import { MobileComponent } from "../types";

export const cardsDataMetadata: MobileComponent[] = [
    {
        id: "booking-card",
        name: "Booking Card",
        description: "Travel booking card with image slider, gradient overlays, and glassmorphism rating badge.",
        tags: ["booking", "travel", "glassmorphism"],
        installType: "cli",
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/booking-card?preview=true&platform=web",
        deps: ["expo-linear-gradient", "expo-vector-icons"],
        props: [
            { name: "location", type: "string", description: "Location name", default: "Torreano, Italy" },
            { name: "type", type: "string", description: "Accommodation type", default: "Tiny home - Nature" },
            { name: "dateRange", type: "string", description: "Available dates", default: "May 4-10" },
            { name: "price", type: "string", description: "Price per night", default: "200" },
            { name: "rating", type: "string", description: "Star rating", default: "4.8" },
            { name: "image", type: "ImageSourcePropType", description: "Main illustration image", required: true , default: "-" },
            { name: "onBookPress", type: "() => void", description: "Booking action callback" , default: "-" }
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
        id: "premium-product-card",
        name: "Premium Product Card",
        description: "E-commerce card with 'detached' image look, sweep corners, and dark/light themes.",
        tags: ["commerce", "product", "premium"],
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/product-card?preview=true&platform=web",
        deps: ["expo-vector-icons"],
        props: [
            { name: "theme", type: "'light' | 'dark'", description: "Color theme", default: "light" },
            { name: "title", type: "string", description: "Product title" , default: "-" },
            { name: "price", type: "string", description: "Product price" , default: "-" },
            { name: "description", type: "string", description: "Product description" , default: "-" },
            { name: "image", type: "ImageSourcePropType", description: "Product image", required: true , default: "-" }
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
        id: "profile-stats-card",
        name: "Profile Stats Card",
        description: "Detailed professional profile card with stats grid, bio, and action buttons.",
        tags: ["profile", "social", "stats"],
        installType: "cli",
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/profilecard?preview=true&platform=web",
        deps: ["expo-vector-icons"],
        props: [
            { name: "name", type: "string", description: "User full name" , default: "-" },
            { name: "title", type: "string", description: "Job title" , default: "-" },
            { name: "location", type: "string", description: "Location string" , default: "-" },
            { name: "bio", type: "string", description: "Short biography" , default: "-" },
            { name: "projects", type: "string", description: "Project count" , default: "-" },
            { name: "earnings", type: "string", description: "Earnings string" , default: "-" },
            { name: "rating", type: "string", description: "Rating value" , default: "-" },
            { name: "avatarUrl", type: "string", description: "URL for avatar image" , default: "-" },
            { name: "onHirePress", type: "() => void", description: "Hire button callback" , default: "-" },
            { name: "onMessagePress", type: "() => void", description: "Message button callback" , default: "-" }
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
        id: "profile-follow-card",
        name: "Profile Follow Card",
        description: "Social profile card with 'Detached' and 'Immersive' image modes.",
        tags: ["profile", "social", "immersive"],
        installType: "cli",
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/profile-follow-card?preview=true&platform=web",
        deps: ["expo-vector-icons"],
        props: [
            { name: "mode", type: "'detached' | 'immersive'", description: "Layout mode", default: "detached" },
            { name: "name", type: "string", description: "User name" , default: "-" },
            { name: "bio", type: "string", description: "Short bio" , default: "-" },
            { name: "followers", type: "string", description: "Follower count" , default: "-" },
            { name: "posts", type: "string", description: "Post count" , default: "-" },
            { name: "image", type: "ImageSourcePropType", description: "Profile/Cover image", required: true , default: "-" },
            { name: "onFollowPress", type: "() => void", description: "Follow action callback" , default: "-" }
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
        id: "progressive-blur-card",
        name: "Progressive Blur Card",
        description: "Profile card featuring a seamless gradient fade (progressive blur) from image to content.",
        tags: ["blur", "gradient", "profile"],
        installType: "cli",
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/progressive-blur?preview=true&platform=web",
        deps: ["expo-linear-gradient", "expo-vector-icons"],
        props: [
            { name: "name", type: "string", description: "User name" , default: "-" },
            { name: "bio", type: "string", description: "User bio" , default: "-" },
            { name: "category", type: "string", description: "Category label" , default: "-" },
            { name: "rating", type: "string", description: "Rating string" , default: "-" },
            { name: "image", type: "ImageSourcePropType", description: "Cover image", required: true , default: "-" },
            { name: "onPress", type: "() => void", description: "Card press callback" , default: "-" }
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
        id: "smoky-focus-card",
        name: "Smoky Focus Card",
        description: "Dark-themed event card with smoky gradient fade and overlapping avatar stack.",
        tags: ["dark", "event", "gradient"],
        installType: "cli",
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/smoky-dark-card?preview=true&platform=web",
        deps: ["expo-linear-gradient"],
        props: [
            { name: "title", type: "string", description: "Event title" , default: "-" },
            { name: "description", type: "string", description: "Event description" , default: "-" },
            { name: "bgNumber", type: "string", description: "Background large typographic element" , default: "-" },
            { name: "participantCount", type: "string", description: "Participant count text" , default: "-" },
            { name: "image", type: "ImageSourcePropType", description: "Event image", required: true , default: "-" },
            { name: "onJoinPress", type: "() => void", description: "Join action callback" , default: "-" }
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
        id: "carousel-product-card",
        name: "Carousel Product Card",
        description: "Compact product card design for horizontal scrolling lists, featuring a clean white aesthetic and brutalist accents.",
        tags: ["commerce", "carousel", "compact", "brutalist"],
        installType: "cli",
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/carousel-product-card?preview=true&platform=web",
        deps: ["lucide-react-native"],
        props: [
            { name: "product", type: "Product", description: "Product data object", required: true , default: "-" },
            { name: "onAdd", type: "(id: string) => void", description: "Add to cart callback" , default: "-" }
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
        id: "quick-commerce-product-card",
        name: "Quick Commerce Card",
        description: "Optimized for quick commerce apps with minimal footprint, high information density, and dashed discount styling.",
        tags: ["commerce", "quick-commerce", "dense"],
        installType: "cli",
        previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/quick-commerce-card?preview=true&platform=web",
        deps: ["lucide-react-native"],
        props: [
            { name: "product", type: "Product", description: "Product data object", required: true , default: "-" }
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
