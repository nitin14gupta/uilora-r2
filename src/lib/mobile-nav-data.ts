import {
    BookOpen,
    Download,
    Package,
    Palette,
    Smartphone,
    Rocket,
    MousePointerClick,
    Square,
    PanelTopOpen,
    Compass,
    TextCursorInput,
    Loader,
    MessageSquare,
    Presentation,
    Zap,
} from "lucide-react";

import { buttonsDataMetadata } from "./mobile/buttons-metadata";
import { cardsDataMetadata } from "./mobile/cards-metadata";
import { modalsData } from "./mobile/modals-overlays";
import { navigationData } from "./mobile/navigation";
import { formsData } from "./mobile/forms-inputs";
import { loadersDataMetadata } from "./mobile/loaders-skeleton-metadata";
import { toastsDataMetadata } from "./mobile/toasts-snackbars-metadata";
import { onboardingData } from "./mobile/onboarding-screen";
import { splashDataMetadata } from "./mobile/splash-screen-metadata";

export const mobileNavItems = [
    {
        title: "Get Started",
        icon: Rocket,
        items: [
            { name: "Introduction", href: "/get-started/mobile/introduction", icon: BookOpen },
            { name: "Installation", href: "/get-started/mobile/installation", icon: Download },
            { name: "Using Components", href: "/get-started/mobile/components", icon: Package },
            { name: "Styling & Theming", href: "/get-started/mobile/styling", icon: Palette },
            { name: "Platform Notes", href: "/get-started/mobile/platform-notes", icon: Smartphone },
        ],
    },
    {
        title: "Buttons",
        icon: MousePointerClick,
        items: buttonsDataMetadata.map((item) => ({
            name: item.name,
            href: `/get-started/mobile/components/buttons/${item.id}`,
            icon: MousePointerClick,
        })),
    },
    {
        title: "Cards",
        icon: Square,
        items: cardsDataMetadata.map((item) => ({
            name: item.name,
            href: `/get-started/mobile/components/cards/${item.id}`,
            icon: Square,
        })),
    },
    // {
    //     title: "Modals & Overlays",
    //     icon: PanelTopOpen,
    //     items: modalsData.map((item) => ({
    //         name: item.name,
    //         href: `/get-started/mobile/components/modals/${item.id}`,
    //         icon: PanelTopOpen,
    //     })),
    // },
    // {
    //     title: "Navigation",
    //     icon: Compass,
    //     items: navigationData.map((item) => ({
    //         name: item.name,
    //         href: `/get-started/mobile/components/navigation/${item.id}`,
    //         icon: Compass,
    //     })),
    // },
    // {
    //     title: "Forms & Inputs",
    //     icon: TextCursorInput,
    //     items: formsData.map((item) => ({
    //         name: item.name,
    //         href: `/get-started/mobile/components/forms/${item.id}`,
    //         icon: TextCursorInput,
    //     })),
    // },
    {
        title: "Loaders & Skeletons",
        icon: Loader,
        items: loadersDataMetadata.map((item) => ({
            name: item.name,
            href: `/get-started/mobile/components/loaders-skeleton/${item.id}`,
            icon: Loader,
        })),
    },
    {
        title: "Toasts & Snackbars",
        icon: MessageSquare,
        items: toastsDataMetadata.map((item) => ({
            name: item.name,
            href: `/get-started/mobile/components/toasts-snackbars/${item.id}`,
            icon: MessageSquare,
        })),
    },
    // {
    //     title: "Onboarding Screen",
    //     icon: Presentation,
    //     items: onboardingData.map((item) => ({
    //         name: item.name,
    //         href: `/get-started/mobile/components/onboarding/${item.id}`,
    //         icon: Presentation,
    //     })),
    // },
    {
        title: "Splash Screen",
        icon: Zap,
        items: splashDataMetadata.map((item) => ({
            name: item.name,
            href: `/get-started/mobile/components/splash-screen/${item.id}`,
            icon: Zap,
        })),
    },
];
