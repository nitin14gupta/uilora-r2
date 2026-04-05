import { Component } from "./types";

// Animations & Motion
import { parallaxBackgroundComponents } from "./Animations&Motion/parallax-backgrounds";
import { scrollRevealComponents } from "./Animations&Motion/scroll-reveals";
import { textAnimationComponents } from "./Animations&Motion/text-animations";
import { magneticCursorComponents } from "./Animations&Motion/magnetic-cursor";
import { transform3DComponents } from "./Animations&Motion/3d-transforms";
import { skeletonsLoaderComponents } from "./Animations&Motion/skeletons-loader";

// Backgrounds & Visuals
import { backgroundComponentsMetadata as backgroundComponents } from "./Backgrounds&Visuals/backgrounds-metadata";
import { blurredBackgroundComponentsMetadata as blurredBackgroundComponents } from "./Backgrounds&Visuals/blurred-backgrounds-metadata";
import { patternBackgroundComponentsMetadata as patternBackgroundComponents } from "./Backgrounds&Visuals/pattern-backgrounds-metadata";
import { noiseTextureComponentsMetadata as noiseTextureComponents } from "./Backgrounds&Visuals/noise-texture-metadata";
import { gradientPackComponentsMetadata as gradientPackComponents } from "./Backgrounds&Visuals/gradients-packs-metadata";

// Content Blocks
import { featureSectionComponentsMetadata as featureSectionComponents } from "./ContentBlocks/feature-sections-metadata";
import { testimonialComponentsMetadata as testimonialComponents } from "./ContentBlocks/testimonials-metadata";
import { statsSectionComponentsMetadata as statsSectionComponents } from "./ContentBlocks/stats-sections-metadata";
import { pricingComponentsMetadata as pricingComponents } from "./ContentBlocks/pricing-metadata";
import { faqComponentsMetadata as faqComponents } from "./ContentBlocks/faq-metadata";
import { timelineComponentsMetadata as timelineComponents } from "./ContentBlocks/timeline-metadata";
import { paginationComponentsMetadata as paginationComponents } from "./ContentBlocks/pagination-metadata";

// Core Landing Pages
import { completeLandingPageComponentsMetadata as completeLandingPageComponents } from "./CoreLandingPages/complete-landing-pages-metadata";
import { heroSectionComponentsMetadata as heroSectionComponents } from "./CoreLandingPages/hero-sections-metadata";
import { agencyPortfolioComponentsMetadata as agencyPortfolioComponents } from "./CoreLandingPages/agency-portfolio-metadata";
import { saasDashboardComponentsMetadata as saasDashboardComponents } from "./CoreLandingPages/saas-dashboards-metadata";
import { startupLandingComponentsMetadata as startupLandingComponents } from "./CoreLandingPages/startup-landing-metadata";
import { authComponentsMetadata as authComponents } from "./CoreLandingPages/auth-metadata";

// Crazy Components
import { crazyComponentsMetadata as crazyComponents } from "./CrazyComponents/crazy-components-metadata";

// Grids & Layouts
import { bentoGridComponentsMetadata as bentoGridComponents } from "./Grids&Layouts/bento-grids-metadata";
import { featureGridComponentsMetadata as featureGridComponents } from "./Grids&Layouts/feature-grids-metadata";
import { galleryGridComponentsMetadata as galleryGridComponents } from "./Grids&Layouts/gallery-grids-metadata";
import { masonryGridComponentsMetadata as masonryGridComponents } from "./Grids&Layouts/masonry-grids-metadata";

// Media
import { lightboxComponentsMetadata as lightboxComponents } from "./Media/lightboxes-metadata";
import { imageGalleryComponentsMetadata as imageGalleryComponents } from "./Media/image-galleries-metadata";
import { videoPlayerComponentsMetadata as videoPlayerComponents } from "./Media/video-players-metadata";
import { testimonialsMediaComponentsMetadata as testimonialsMediaComponents } from "./Media/testimonials-media-metadata";

// Navigation & Structure
import { NavbarComponentsMetadata as NavbarComponents } from "./Navigation&Structure/navbars-metadata";
import { footerComponentsMetadata as footerComponents } from "./Navigation&Structure/footers-metadata";
import { megaMenuComponentsMetadata as megaMenuComponents } from "./Navigation&Structure/mega-menus-metadata";
import { chatUIComponentsMetadata as chatUiComponents } from "./Navigation&Structure/chat-ui-metadata";

// Special Elements
import { accordionComponentsMetadata as accordionComponents } from "./SpecialElements/accordions-metadata";
import { tabComponentsMetadata as tabComponents } from "./SpecialElements/tabs-metadata";
import { carouselComponentsMetadata as carouselComponents } from "./SpecialElements/carousels-metadata";
import { badgesComponentsMetadata as badgesComponents } from "./SpecialElements/badges-metadata";
import { avatarsComponentsMetadata as avatarsComponents } from "./SpecialElements/avatars-metadata";
import { breadcrumbsComponentsMetadata as breadcrumbsComponents } from "./SpecialElements/breadcrumbs-metadata";
import { selectorComponentsMetadata as selectorComponents } from "./SpecialElements/selector-metadata";
import { tablesComponentsMetadata as tablesComponents } from "./SpecialElements/tables-metadata";

// UI Components
import { formComponentsMetadata as formComponents } from "./UIComponents/forms-metadata";
import { buttonComponentsMetadata as buttonComponents } from "./UIComponents/buttons-metadata";
import { cardComponentsMetadata as cardComponents } from "./UIComponents/cards-metadata";
import { toastsComponentsMetadata as toastsComponents } from "./UIComponents/toasts-metadata";
import { modalsAndDesignMetadata as modalsAndDesign } from "./UIComponents/modals-and-design-metadata";
import { fileUploadsMetadata as fileUploads } from "./UIComponents/file-uploads-metadata";

export interface ComponentGroup {
  label: string;
  components: Component[];
}

export interface CategoryConfig {
  slug: string;
  name: string;
  description: string;
  accent: string; // tailwind gradient classes for card accent
  count?: number;
}

const CATEGORY_COMPONENTS: Record<string, Component[]> = {
  "animations-motion": [
    ...parallaxBackgroundComponents,
    ...scrollRevealComponents,
    ...textAnimationComponents,
    ...magneticCursorComponents,
    ...transform3DComponents,
    ...skeletonsLoaderComponents,
  ],
  "backgrounds-visuals": [
    ...backgroundComponents,
    ...blurredBackgroundComponents,
    ...patternBackgroundComponents,
    ...noiseTextureComponents,
    ...gradientPackComponents,
  ],
  "content-blocks": [
    ...featureSectionComponents,
    ...testimonialComponents,
    ...statsSectionComponents,
    ...pricingComponents,
    ...faqComponents,
    ...timelineComponents,
    ...paginationComponents,
  ],
  "core-landing-pages": [
    ...completeLandingPageComponents,
    ...heroSectionComponents,
    ...agencyPortfolioComponents,
    ...saasDashboardComponents,
    ...startupLandingComponents,
    ...authComponents,
  ],
  "crazy-components": [...crazyComponents],
  "grids-layouts": [
    ...bentoGridComponents,
    ...featureGridComponents,
    ...galleryGridComponents,
    ...masonryGridComponents,
  ],
  "media": [
    ...lightboxComponents,
    ...imageGalleryComponents,
    ...videoPlayerComponents,
    ...testimonialsMediaComponents,
  ],
  "navigation-structure": [
    ...NavbarComponents,
    ...footerComponents,
    ...megaMenuComponents,
    ...chatUiComponents,
  ],
  "special-elements": [
    ...accordionComponents,
    ...tabComponents,
    ...carouselComponents,
    ...badgesComponents,
    ...avatarsComponents,
    ...breadcrumbsComponents,
    ...selectorComponents,
    ...tablesComponents,
  ],
  "ui-components": [
    ...formComponents,
    ...buttonComponents,
    ...cardComponents,
    ...toastsComponents,
    ...modalsAndDesign,
    ...fileUploads,
  ],
};

export const CATEGORIES: CategoryConfig[] = [
  {
    slug: "animations-motion",
    name: "Animations & Motion",
    description: "Scroll reveals, parallax, 3D transforms, magnetic cursors, skeleton loaders and more.",
    accent: "from-violet-500/20 to-indigo-500/10",
  },
  {
    slug: "backgrounds-visuals",
    name: "Backgrounds & Visuals",
    description: "Gradient packs, noise textures, blurred and pattern backgrounds for stunning scenes.",
    accent: "from-blue-500/20 to-cyan-500/10",
  },
  {
    slug: "content-blocks",
    name: "Content Blocks",
    description: "FAQ sections, pricing tables, testimonials, stats, timelines, and feature sections.",
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    slug: "core-landing-pages",
    name: "Core Landing Pages",
    description: "Complete hero sections, SaaS dashboards, agency portfolios, and auth pages.",
    accent: "from-orange-500/20 to-amber-500/10",
  },
  {
    slug: "crazy-components",
    name: "Crazy Components",
    description: "Experimental, wild, and boundary-pushing UI components that stand out.",
    accent: "from-pink-500/20 to-rose-500/10",
  },
  {
    slug: "grids-layouts",
    name: "Grids & Layouts",
    description: "Bento grids, masonry layouts, feature and gallery grids for rich compositions.",
    accent: "from-yellow-500/20 to-orange-500/10",
  },
  {
    slug: "media",
    name: "Media",
    description: "Lightboxes, image galleries, video players, and media testimonial sections.",
    accent: "from-sky-500/20 to-blue-500/10",
  },
  {
    slug: "navigation-structure",
    name: "Navigation & Structure",
    description: "Navbars, footers, mega menus, and chat UI layouts for complete site structure.",
    accent: "from-indigo-500/20 to-purple-500/10",
  },
  {
    slug: "special-elements",
    name: "Special Elements",
    description: "Accordions, tabs, carousels, badges, avatars, tables, and interactive selectors.",
    accent: "from-lime-500/20 to-green-500/10",
  },
  {
    slug: "ui-components",
    name: "UI Components",
    description: "Buttons, cards, forms, modals, toasts, and file uploads — the building blocks.",
    accent: "from-fuchsia-500/20 to-pink-500/10",
  },
].map((cat) => ({
  ...cat,
  count: CATEGORY_COMPONENTS[cat.slug]?.length ?? 0,
}));

export function getCategoryComponents(slug: string): Component[] {
  return CATEGORY_COMPONENTS[slug] ?? [];
}

const CATEGORY_GROUPS: Record<string, ComponentGroup[]> = {
  "animations-motion": [
    { label: "3D Transforms", components: transform3DComponents },
    { label: "Text Animations", components: textAnimationComponents },
    { label: "Scroll Reveals", components: scrollRevealComponents },
    { label: "Parallax Backgrounds", components: parallaxBackgroundComponents },
    { label: "Magnetic Cursor", components: magneticCursorComponents },
    { label: "Skeleton Loaders", components: skeletonsLoaderComponents },
  ],
  "backgrounds-visuals": [
    { label: "Backgrounds", components: backgroundComponents },
    { label: "Blurred Backgrounds", components: blurredBackgroundComponents },
    { label: "Pattern Backgrounds", components: patternBackgroundComponents },
    { label: "Noise Textures", components: noiseTextureComponents },
    { label: "Gradient Packs", components: gradientPackComponents },
  ],
  "content-blocks": [
    { label: "Feature Sections", components: featureSectionComponents },
    { label: "Testimonials", components: testimonialComponents },
    { label: "Stats Sections", components: statsSectionComponents },
    { label: "Pricing", components: pricingComponents },
    { label: "FAQ", components: faqComponents },
    { label: "Timelines", components: timelineComponents },
    { label: "Pagination", components: paginationComponents },
  ],
  "core-landing-pages": [
    { label: "Complete Pages", components: completeLandingPageComponents },
    { label: "Hero Sections", components: heroSectionComponents },
    { label: "Agency Portfolios", components: agencyPortfolioComponents },
    { label: "SaaS Dashboards", components: saasDashboardComponents },
    { label: "Startup Landing", components: startupLandingComponents },
    { label: "Auth Pages", components: authComponents },
  ],
  "grids-layouts": [
    { label: "Bento Grids", components: bentoGridComponents },
    { label: "Feature Grids", components: featureGridComponents },
    { label: "Gallery Grids", components: galleryGridComponents },
    { label: "Masonry Grids", components: masonryGridComponents },
  ],
  "media": [
    { label: "Lightboxes", components: lightboxComponents },
    { label: "Image Galleries", components: imageGalleryComponents },
    { label: "Video Players", components: videoPlayerComponents },
    { label: "Testimonials Media", components: testimonialsMediaComponents },
  ],
  "navigation-structure": [
    { label: "Navbars", components: NavbarComponents },
    { label: "Footers", components: footerComponents },
    { label: "Mega Menus", components: megaMenuComponents },
    { label: "Chat UI", components: chatUiComponents },
  ],
  "special-elements": [
    { label: "Accordions", components: accordionComponents },
    { label: "Tabs", components: tabComponents },
    { label: "Carousels", components: carouselComponents },
    { label: "Badges", components: badgesComponents },
    { label: "Avatars", components: avatarsComponents },
    { label: "Breadcrumbs", components: breadcrumbsComponents },
    { label: "Selectors", components: selectorComponents },
    { label: "Tables", components: tablesComponents },
  ],
  "ui-components": [
    { label: "Forms", components: formComponents },
    { label: "Buttons", components: buttonComponents },
    { label: "Cards", components: cardComponents },
    { label: "Toasts", components: toastsComponents },
    { label: "Modals", components: modalsAndDesign },
    { label: "File Uploads", components: fileUploads },
  ],
};

export function getCategoryGroups(slug: string): ComponentGroup[] {
  return CATEGORY_GROUPS[slug] ?? [];
}
