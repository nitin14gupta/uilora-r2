import {
    BookOpen,
    Download,
    Package,
    FileText,
    ChevronRight,
    ChevronDown,
    Layout,
    Navigation,
    Grid3x3,
    Image as ImageIcon,
    Layers,
    Sparkles,
    Palette,
    Zap,
    Menu,
    Rocket,
    X,
    Cable,
    Brush,
    HelpCircle,
    Smartphone,
    Globe,
} from "lucide-react";

import { heroSectionComponentsMetadata } from "@/src/lib/CoreLandingPages/hero-sections-metadata";
import { authComponentsMetadata } from "@/src/lib/CoreLandingPages/auth-metadata";
import { agencyPortfolioComponentsMetadata } from "@/src/lib/CoreLandingPages/agency-portfolio-metadata";
import { completeLandingPageComponentsMetadata } from "@/src/lib/CoreLandingPages/complete-landing-pages-metadata";
import { saasDashboardComponentsMetadata } from "@/src/lib/CoreLandingPages/saas-dashboards-metadata";
import { startupLandingComponentsMetadata } from "@/src/lib/CoreLandingPages/startup-landing-metadata";
import { bentoGridComponentsMetadata } from "@/src/lib/Grids&Layouts/bento-grids-metadata";
import { featureGridComponentsMetadata } from "@/src/lib/Grids&Layouts/feature-grids-metadata";
import { galleryGridComponentsMetadata } from "@/src/lib/Grids&Layouts/gallery-grids-metadata";
import { masonryGridComponentsMetadata } from "@/src/lib/Grids&Layouts/masonry-grids-metadata";
import { testimonialsMediaComponentsMetadata } from "@/src/lib/Media/testimonials-media-metadata";
import { imageGalleryComponentsMetadata } from "@/src/lib/Media/image-galleries-metadata";
import { videoPlayerComponentsMetadata } from "@/src/lib/Media/video-players-metadata";
import { lightboxComponentsMetadata } from "@/src/lib/Media/lightboxes-metadata";
import { testimonialComponentsMetadata } from "@/src/lib/ContentBlocks/testimonials-metadata";
import { statsSectionComponentsMetadata } from "@/src/lib/ContentBlocks/stats-sections-metadata";
import { pricingComponentsMetadata } from "@/src/lib/ContentBlocks/pricing-metadata";
import { faqComponentsMetadata } from "@/src/lib/ContentBlocks/faq-metadata";
import { featureSectionComponentsMetadata } from "@/src/lib/ContentBlocks/feature-sections-metadata";
import { paginationComponentsMetadata } from "@/src/lib/ContentBlocks/pagination-metadata";
import { timelineComponentsMetadata } from "@/src/lib/ContentBlocks/timeline-metadata";
import { accordionComponentsMetadata } from "@/src/lib/SpecialElements/accordions-metadata";
import { tabComponentsMetadata } from "@/src/lib/SpecialElements/tabs-metadata";
import { carouselComponentsMetadata } from "@/src/lib/SpecialElements/carousels-metadata";
import { badgesComponentsMetadata } from "@/src/lib/SpecialElements/badges-metadata";
import { avatarsComponentsMetadata } from "@/src/lib/SpecialElements/avatars-metadata";
import { breadcrumbsComponentsMetadata } from "@/src/lib/SpecialElements/breadcrumbs-metadata";
import { selectorComponentsMetadata } from "@/src/lib/SpecialElements/selector-metadata";
import { tablesComponentsMetadata } from "@/src/lib/SpecialElements/tables-metadata";
import { NavbarComponentsMetadata } from "@/src/lib/Navigation&Structure/navbars-metadata";
import { footerComponentsMetadata } from "@/src/lib/Navigation&Structure/footers-metadata";
import { megaMenuComponentsMetadata } from "@/src/lib/Navigation&Structure/mega-menus-metadata";
import { chatUIComponentsMetadata } from "@/src/lib/Navigation&Structure/chat-ui-metadata";
import { formComponentsMetadata } from "@/src/lib/UIComponents/forms-metadata";
import { buttonComponentsMetadata } from "@/src/lib/UIComponents/buttons-metadata";
import { cardComponentsMetadata } from "@/src/lib/UIComponents/cards-metadata";
import { gradientPackComponentsMetadata } from "@/src/lib/Backgrounds&Visuals/gradients-packs-metadata";
import { blurredBackgroundComponentsMetadata } from "@/src/lib/Backgrounds&Visuals/blurred-backgrounds-metadata";
import { patternBackgroundComponentsMetadata } from "@/src/lib/Backgrounds&Visuals/pattern-backgrounds-metadata";
import { noiseTextureComponentsMetadata } from "@/src/lib/Backgrounds&Visuals/noise-texture-metadata";
import { parallaxScrollComponentsMetadata } from "@/src/lib/Animations&Motion/parallax-scroll-metadata";
import { scrollRevealComponentsMetadata } from "@/src/lib/Animations&Motion/scroll-reveals-metadata";
import { textAnimationComponentsMetadata } from "@/src/lib/Animations&Motion/text-animations-metadata";
import { magneticCursorComponentsMetadata } from "@/src/lib/Animations&Motion/magnetic-cursor-metadata";
import { transform3DComponentsMetadata } from "@/src/lib/Animations&Motion/3d-transforms-metadata";
import { skeletonsLoaderComponentsMetadata } from "@/src/lib/Animations&Motion/skeletons-loader-metadata";
import { toastsComponentsMetadata } from "@/src/lib/UIComponents/toasts-metadata";
import { backgroundComponentsMetadata } from "@/src/lib/Backgrounds&Visuals/backgrounds-metadata";
import { crazyComponentsMetadata } from "@/src/lib/CrazyComponents/crazy-components-metadata";
import { fileUploadsMetadata } from "@/src/lib/UIComponents/file-uploads-metadata";
import { modalsAndDesignMetadata } from "@/src/lib/UIComponents/modals-and-design-metadata";

export const webNavItems = [
    {
        title: "Get Started",
        items: [
            {
                name: "Introduction",
                href: "/get-started/web/introduction",
                icon: BookOpen,
            },
            {
                name: "Installation",
                href: "/get-started/web/installation",
                icon: Download,
            },
            {
                name: "Getting Started",
                href: "/get-started/web/getting-started",
                icon: Rocket,
            },
            { name: "Components", href: "/get-started/web/components", icon: Package },
            { name: "Theme Manager", href: "/get-started/web/themes", icon: Brush },
            { name: "Templates", href: "/get-started/web/templates", icon: Layout },
            { name: "MCP", href: "/get-started/web/mcp", icon: Cable },
            { name: "Why Uilora?", href: "/get-started/web/positioning", icon: Sparkles },
        ],
    },
    {
        title: "Crazy Components",
        icon: Zap,
        items: crazyComponentsMetadata.map((c) => ({
            id: c.id,
            name: c.name,
            href: `/get-started/web/components/crazy-components/${c.id}`,
        })),
    },
    {
        title: "Core Landing Pages",
        icon: Layout,
        items: [
            {
                name: "Hero Sections",
                href: "/get-started/web/components/core-landing-pages/hero-sections",
                count: `${heroSectionComponentsMetadata.length}+`,
                components: heroSectionComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Complete Landing Pages",
                href: "/get-started/web/components/core-landing-pages/complete-landing-pages",
                count: `${completeLandingPageComponentsMetadata.length}+`,
                components: completeLandingPageComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Startup Landing",
                href: "/get-started/web/components/core-landing-pages/startup-landing",
                count: `${startupLandingComponentsMetadata.length}+`,
                components: startupLandingComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "SaaS Dashboards",
                href: "/get-started/web/components/core-landing-pages/saas-dashboard",
                count: `${saasDashboardComponentsMetadata.length}+`,
                components: saasDashboardComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Agency Portfolio",
                href: "/get-started/web/components/core-landing-pages/agency-portfolio",
                count: `${agencyPortfolioComponentsMetadata.length}+`,
                components: agencyPortfolioComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Auth",
                href: "/get-started/web/components/core-landing-pages/auth",
                count: `${authComponentsMetadata.length}+`,
                components: authComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
        ],
    },
    {
        title: "Backgrounds & Visuals",
        icon: Palette,
        items: [
            {
                name: "Backgrounds",
                href: "/get-started/web/components/backgrounds-visuals/backgrounds",
                count: `${backgroundComponentsMetadata.length}+`,
                components: backgroundComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Gradient Packs",
                href: "/get-started/web/components/backgrounds-visuals/gradients-packs",
                count: `${gradientPackComponentsMetadata.length}+`,
                components: gradientPackComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Blurred Backgrounds",
                href: "/get-started/web/components/backgrounds-visuals/blurred-backgrounds",
                count: `${blurredBackgroundComponentsMetadata.length}+`,
                components: blurredBackgroundComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Pattern Backgrounds",
                href: "/get-started/web/components/backgrounds-visuals/pattern-backgrounds",
                count: `${patternBackgroundComponentsMetadata.length}+`,
                components: patternBackgroundComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Noise Textures",
                href: "/get-started/web/components/backgrounds-visuals/noise-texture",
                count: `${noiseTextureComponentsMetadata.length}+`,
                components: noiseTextureComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
        ],
    },
    {
        title: "Navigation & Structure",
        icon: Navigation,
        items: [
            {
                name: "Navbar",
                href: "/get-started/web/components/navigations-structure/navbars",
                count: `${NavbarComponentsMetadata.length}+`,
                components: NavbarComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Footers",
                href: "/get-started/web/components/navigations-structure/footers",
                count: `${footerComponentsMetadata.length}+`,
                components: footerComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Mega Menus",
                href: "/get-started/web/components/navigations-structure/mega-menus",
                count: `${megaMenuComponentsMetadata.length}+`,
                components: megaMenuComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Chat UI",
                href: "/get-started/web/components/navigations-structure/chat-ui",
                count: `${chatUIComponentsMetadata.length}+`,
                components: chatUIComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
        ],
    },
    {
        title: "UI Components",
        icon: Package,
        items: [
            {
                name: "Forms",
                href: "/get-started/web/components/ui-components/forms",
                count: `${formComponentsMetadata.length}+`,
                components: formComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Buttons",
                href: "/get-started/web/components/ui-components/buttons",
                count: `${buttonComponentsMetadata.length}+`,
                components: buttonComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Cards",
                href: "/get-started/web/components/ui-components/cards",
                count: `${cardComponentsMetadata.length}+`,
                components: cardComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Toasts",
                href: "/get-started/web/components/ui-components/toasts",
                count: `${toastsComponentsMetadata.length}+`,
                components: toastsComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "File Uploads",
                href: "/get-started/web/components/ui-components/file-uploads",
                count: `${fileUploadsMetadata.length}+`,
                components: fileUploadsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Modals & Design",
                href: "/get-started/web/components/ui-components/modals-design",
                count: `${modalsAndDesignMetadata.length}+`,
                components: modalsAndDesignMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
        ],
    },
    {
        title: "Grids & Layouts",
        icon: Grid3x3,
        items: [
            {
                name: "Bento Grids",
                href: "/get-started/web/components/grids-layouts/bento-grids",
                count: `${bentoGridComponentsMetadata.length}+`,
                components: bentoGridComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Feature Grids",
                href: "/get-started/web/components/grids-layouts/feature-grids",
                count: `${featureGridComponentsMetadata.length}+`,
                components: featureGridComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Gallery Grids",
                href: "/get-started/web/components/grids-layouts/gallery-grids",
                count: `${galleryGridComponentsMetadata.length}+`,
                components: galleryGridComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Masonry Grids",
                href: "/get-started/web/components/grids-layouts/masonry-grids",
                count: `${masonryGridComponentsMetadata.length}+`,
                components: masonryGridComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
        ],
    },
    {
        title: "Media",
        icon: ImageIcon,
        items: [
            {
                name: "Image Galleries",
                href: "/get-started/web/components/media/image-galleries",
                count: `${imageGalleryComponentsMetadata.length}+`,
                components: imageGalleryComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Lightboxes",
                href: "/get-started/web/components/media/light-boxes",
                count: `${lightboxComponentsMetadata.length}+`,
                components: lightboxComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Video Players",
                href: "/get-started/web/components/media/video-players",
                count: `${videoPlayerComponentsMetadata.length}+`,
                components: videoPlayerComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Testimonials Media",
                href: "/get-started/web/components/media/testimonials-media",
                count: `${testimonialsMediaComponentsMetadata.length}+`,
                components: testimonialsMediaComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
        ],
    },
    {
        title: "Content Blocks",
        icon: Layers,
        items: [
            {
                name: "Feature Sections",
                href: "/get-started/web/components/content-blocks/feature-sections",
                count: `${featureSectionComponentsMetadata.length}+`,
                components: featureSectionComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Testimonials",
                href: "/get-started/web/components/content-blocks/testimonials",
                count: `${testimonialComponentsMetadata.length}+`,
                components: testimonialComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Stats Sections",
                href: "/get-started/web/components/content-blocks/stats-sections",
                count: `${statsSectionComponentsMetadata.length}+`,
                components: statsSectionComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Pricing",
                href: "/get-started/web/components/content-blocks/pricing",
                count: `${pricingComponentsMetadata.length}+`,
                components: pricingComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "FAQ",
                href: "/get-started/web/components/content-blocks/faq",
                count: `${faqComponentsMetadata.length}+`,
                components: faqComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Timeline",
                href: "/get-started/web/components/content-blocks/timeline",
                count: `${timelineComponentsMetadata.length}+`,
                components: timelineComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Pagination",
                href: "/get-started/web/components/content-blocks/pagination",
                count: `${paginationComponentsMetadata.length}+`,
                components: paginationComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
        ],
    },
    {
        title: "Animations & Motion",
        icon: Sparkles,
        items: [
            {
                name: "Skeletons Loader",
                href: "/get-started/web/components/animations-motion/skeletons-loader",
                count: `${skeletonsLoaderComponentsMetadata.length}+`,
                components: skeletonsLoaderComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Parallax Scroll",
                href: "/get-started/web/components/animations-motion/parallax-scroll",
                count: `${parallaxScrollComponentsMetadata.length}+`,
                components: parallaxScrollComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Scroll Reveals",
                href: "/get-started/web/components/animations-motion/scroll-reveals",
                count: `${scrollRevealComponentsMetadata.length}+`,
                components: scrollRevealComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Text Animations",
                href: "/get-started/web/components/animations-motion/text-animations",
                count: `${textAnimationComponentsMetadata.length}+`,
                components: textAnimationComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Magnetic Cursor",
                href: "/get-started/web/components/animations-motion/magnetic-cursor",
                count: `${magneticCursorComponentsMetadata.length}+`,
                components: magneticCursorComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "3D Transforms",
                href: "/get-started/web/components/animations-motion/3d-transforms",
                count: `${transform3DComponentsMetadata.length}+`,
                components: transform3DComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
        ],
    },
    {
        title: "Special Elements",
        icon: Zap,
        items: [
            {
                name: "Accordions",
                href: "/get-started/web/components/special-elements/accordions",
                count: `${accordionComponentsMetadata.length}+`,
                components: accordionComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Tabs",
                href: "/get-started/web/components/special-elements/tabs",
                count: `${tabComponentsMetadata.length}+`,
                components: tabComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Carousels",
                href: "/get-started/web/components/special-elements/carousels",
                count: `${carouselComponentsMetadata.length}+`,
                components: carouselComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Badges",
                href: "/get-started/web/components/special-elements/badges",
                count: `${badgesComponentsMetadata.length}+`,
                components: badgesComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Avatars",
                href: "/get-started/web/components/special-elements/avatars",
                count: `${avatarsComponentsMetadata.length}+`,
                components: avatarsComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Breadcrumbs",
                href: "/get-started/web/components/special-elements/breadcrumbs",
                count: `${breadcrumbsComponentsMetadata.length}+`,
                components: breadcrumbsComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Selector",
                href: "/get-started/web/components/special-elements/selector",
                count: `${selectorComponentsMetadata.length}+`,
                components: selectorComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
            {
                name: "Tables",
                href: "/get-started/web/components/special-elements/tables",
                count: `${tablesComponentsMetadata.length}+`,
                components: tablesComponentsMetadata.map((c) => ({
                    id: c.id,
                    name: c.name,
                })),
            },
        ],
    },
];
