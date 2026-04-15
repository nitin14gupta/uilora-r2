import { Component } from "./types";

// Import all component metadata arrays (lightweight, no code)
import { NavbarComponentsMetadata } from "./Navigation&Structure/navbars-metadata";
import { megaMenuComponentsMetadata } from "./Navigation&Structure/mega-menus-metadata";
import { footerComponentsMetadata } from "./Navigation&Structure/footers-metadata";
import { chatUIComponentsMetadata } from "./Navigation&Structure/chat-ui-metadata";
import { buttonComponentsMetadata } from "./UIComponents/buttons-metadata";
import { formComponentsMetadata } from "./UIComponents/forms-metadata";
import { cardComponentsMetadata } from "./UIComponents/cards-metadata";
import { toastsComponentsMetadata } from "./UIComponents/toasts-metadata";
import { fileUploadsMetadata } from "./UIComponents/file-uploads-metadata";
import { modalsAndDesignMetadata } from "./UIComponents/modals-and-design-metadata";
import { bentoGridComponentsMetadata } from "./Grids&Layouts/bento-grids-metadata";
import { featureGridComponentsMetadata } from "./Grids&Layouts/feature-grids-metadata";
import { masonryGridComponentsMetadata } from "./Grids&Layouts/masonry-grids-metadata";
import { galleryGridComponentsMetadata } from "./Grids&Layouts/gallery-grids-metadata";
import { pricingComponentsMetadata } from "./ContentBlocks/pricing-metadata";
import { statsSectionComponentsMetadata } from "./ContentBlocks/stats-sections-metadata";
import { testimonialComponentsMetadata } from "./ContentBlocks/testimonials-metadata";
import { featureSectionComponentsMetadata } from "./ContentBlocks/feature-sections-metadata";
import { timelineComponentsMetadata } from "./ContentBlocks/timeline-metadata";
import { faqComponentsMetadata } from "./ContentBlocks/faq-metadata";
import { paginationComponentsMetadata } from "./ContentBlocks/pagination-metadata";
import { lightboxComponentsMetadata } from "./Media/lightboxes-metadata";
import { videoPlayerComponentsMetadata } from "./Media/video-players-metadata";
import { imageGalleryComponentsMetadata } from "./Media/image-galleries-metadata";
import { testimonialsMediaComponentsMetadata } from "./Media/testimonials-media-metadata";
import { accordionComponentsMetadata } from "./SpecialElements/accordions-metadata";
import { tabComponentsMetadata } from "./SpecialElements/tabs-metadata";
import { carouselComponentsMetadata } from "./SpecialElements/carousels-metadata";
import { badgesComponentsMetadata } from "./SpecialElements/badges-metadata";
import { avatarsComponentsMetadata } from "./SpecialElements/avatars-metadata";
import { breadcrumbsComponentsMetadata } from "./SpecialElements/breadcrumbs-metadata";
import { selectorComponentsMetadata } from "./SpecialElements/selector-metadata";
import { tablesComponentsMetadata } from "./SpecialElements/tables-metadata";
import { parallaxScrollComponentsMetadata } from "./Animations&Motion/parallax-scroll-metadata";
import { scrollRevealComponentsMetadata } from "./Animations&Motion/scroll-reveals-metadata";
import { textAnimationComponentsMetadata } from "./Animations&Motion/text-animations-metadata";
import { magneticCursorComponentsMetadata } from "./Animations&Motion/magnetic-cursor-metadata";
import { transform3DComponentsMetadata } from "./Animations&Motion/3d-transforms-metadata";
import { skeletonsLoaderComponentsMetadata } from "./Animations&Motion/skeletons-loader-metadata";
import { backgroundComponentsMetadata } from "./Backgrounds&Visuals/backgrounds-metadata";
import { blurredBackgroundComponentsMetadata } from "./Backgrounds&Visuals/blurred-backgrounds-metadata";
import { patternBackgroundComponentsMetadata } from "./Backgrounds&Visuals/pattern-backgrounds-metadata";
import { noiseTextureComponentsMetadata } from "./Backgrounds&Visuals/noise-texture-metadata";
import { gradientPackComponentsMetadata } from "./Backgrounds&Visuals/gradients-packs-metadata";
import { heroSectionComponentsMetadata } from "./CoreLandingPages/hero-sections-metadata";
import { completeLandingPageComponentsMetadata } from "./CoreLandingPages/complete-landing-pages-metadata";
import { saasDashboardComponentsMetadata } from "./CoreLandingPages/saas-dashboards-metadata";
import { startupLandingComponentsMetadata } from "./CoreLandingPages/startup-landing-metadata";
import { agencyPortfolioComponentsMetadata } from "./CoreLandingPages/agency-portfolio-metadata";
import { authComponentsMetadata } from "./CoreLandingPages/auth-metadata";
import { crazyComponentsMetadata } from "./CrazyComponents/crazy-components-metadata";

export type SitemapComponentGroup = {
  categoryPath: string;
  slugs: string[];
};

const getComponentUrlPath = (component: Component): string | null => {
  const previewParts = component.previewUrl.split("/").filter(Boolean);

  if (previewParts.length >= 2) {
    const categoryName = previewParts[0];
    const subcategoryName = previewParts[1];

    const categoryMap: Record<string, string> = {
      // Navigation
      "Navigation&Structures": "navigations-structure",
      "Navigation&Structure": "navigations-structure",
      "Navigation": "navigations-structure",

      // Special
      "SpecialElements": "special-elements",
      "SpecialElement": "special-elements",

      // Animation
      "Animations&Motion": "animations-motion",
      "Animation&Motion": "animations-motion",

      // Backgrounds
      "Backgrounds&Visuals": "backgrounds-visuals",
      "Background&Visuals": "backgrounds-visuals",
      "Backgrounds&Visual": "backgrounds-visuals",

      // Media
      "Media": "media",

      // Content
      "ContentBlocks": "content-blocks",
      "ContentBlock": "content-blocks",

      // Grids
      "Grids&Layouts": "grids-layouts",
      "Grids&Layout": "grids-layouts",
      "Grid&Layout": "grids-layouts",

      // UI
      "UIComponents": "ui-components",
      "UIComponent": "ui-components",

      // Landing
      "CoreLandingPages": "core-landing-pages",
      "CoreLandingPage": "core-landing-pages",
      "CoreLandingPAges": "core-landing-pages",

      // Crazy
      "CrazyComponents": "crazy-components",
      "CrazyComponent": "crazy-components",
      "Crazy": "crazy-components",
    };

    if (categoryName === "CrazyComponents" || categoryName === "CrazyComponent" || categoryName === "Crazy") {
      return "crazy-components";
    }

    let routeCategory = categoryMap[categoryName];

    if (!routeCategory) {
      routeCategory = categoryName.toLowerCase()
        .replace(/&/g, '-')
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '');
    }

    const subcategoryMap: Record<string, string> = {
      Navbar: "navbars",
      Navbars: "navbars",
      MegaMenu: "mega-menus",
      MegaMenus: "mega-menus",
      Footer: "footers",
      Footers: "footers",
      ChatUi: "chat-ui",
      ChatUI: "chat-ui",
      Accordions: "accordions",
      Accordion: "accordions",
      Tabs: "tabs",
      Tab: "tabs",
      Carousels: "carousels",
      Carousel: "carousels",
      Badges: "badges",
      Badge: "badges",
      Avatars: "avatars",
      Avatar: "avatars",
      Breadcrumbs: "breadcrumbs",
      Breadcrumb: "breadcrumbs",
      Selector: "selector",
      Tables: "tables",
      Table: "tables",
      ParallaxBackgrounds: "parallax-scroll",
      ParallaxBackground: "parallax-scroll",
      ScrollReveals: "scroll-reveals",
      ScrollReveal: "scroll-reveals",
      TextAnimations: "text-animations",
      TextAnimation: "text-animations",
      MagneticCursor: "magnetic-cursor",
      "3DTransforms": "3d-transforms",
      "3DTransform": "3d-transforms",
      BlurredBackgrounds: "blurred-backgrounds",
      BlurredBackground: "blurred-backgrounds",
      PatternBackgrounds: "pattern-backgrounds",
      PatternBackground: "pattern-backgrounds",
      NoiseTexture: "noise-texture",
      GradientsPacks: "gradients-packs",
      GradientPack: "gradients-packs",
      TestimonialsMedia: "testimonials-media",
      ImageGalleries: "image-galleries",
      ImageGallery: "image-galleries",
      VideoPlayers: "video-players",
      VideoPlayer: "video-players",
      Lightboxes: "lightboxes",
      Lightbox: "lightboxes",
      Pricing: "pricing",
      StatsSections: "stats-sections",
      StatsSection: "stats-sections",
      Testimonials: "testimonials",
      Testimonial: "testimonials",
      FeatureSections: "feature-sections",
      FeatureSection: "feature-sections",
      Timeline: "timeline",
      FAQ: "faq",
      BentoGrids: "bento-grids",
      BentoGrid: "bento-grids",
      FeatureGrids: "feature-grids",
      FeatureGrid: "feature-grids",
      MasonryGrids: "masonry-grids",
      MasonryGrid: "masonry-grids",
      GalleryGrids: "gallery-grids",
      GalleryGrid: "gallery-grids",
      Buttons: "buttons",
      Button: "buttons",
      Forms: "forms",
      Form: "forms",
      Cards: "cards",
      Card: "cards",
      FileUploads: "file-uploads",
      FileUpload: "file-uploads",
      ModalsAndDesign: "modals-and-design",
      Toasts: "toasts",
      Toast: "toasts",
      HeroSections: "hero-sections",
      HeroSection: "hero-sections",
      CompleteLandingPages: "complete-landing-pages",
      SaaSDashboards: "saas-dashboards",
      SaaSDashboard: "saas-dashboards",
      StartupLanding: "startup-landing",
      AgencyPortfolio: "agency-portfolio",
      Auth: "auth",
      SkeletonsLoader: "skeletons-loader",
      Pagination: "pagination",
      CrazyComponents: "crazy-components",
    };

    const routeSubcategory = subcategoryMap[subcategoryName] || subcategoryName.toLowerCase().replace(/&/g, '-');
    return `${routeCategory}/${routeSubcategory}`;
  }

  return null;
};

/**
 * Convert component array to sitemap group
 */
const toSitemapGroup = (
  components: Component[],
  categoryPath: string
): SitemapComponentGroup | null => {
  if (!components || components.length === 0) {
    return null;
  }

  return {
    categoryPath,
    slugs: components.map((c) => c.id),
  };
};

/**
 * Component sitemap groups - automatically generated from component arrays
 * Format: categoryPath = "Category/Subcategory" for URL: /get-started/components/Category/Subcategory/{slug}
 */
export const componentSitemapGroups: SitemapComponentGroup[] = [
  // Navigation & Structure
  toSitemapGroup(NavbarComponentsMetadata, "navigations-structure/navbars"),
  toSitemapGroup(megaMenuComponentsMetadata, "navigations-structure/mega-menus"),
  toSitemapGroup(footerComponentsMetadata, "navigations-structure/footers"),
  toSitemapGroup(chatUIComponentsMetadata, "navigations-structure/chat-ui"),

  // UI Components
  toSitemapGroup(buttonComponentsMetadata, "ui-components/buttons"),
  toSitemapGroup(formComponentsMetadata, "ui-components/forms"),
  toSitemapGroup(cardComponentsMetadata, "ui-components/cards"),
  toSitemapGroup(toastsComponentsMetadata, "ui-components/toasts"),
  toSitemapGroup(fileUploadsMetadata, "ui-components/file-uploads"),
  toSitemapGroup(modalsAndDesignMetadata, "ui-components/modals-design"),

  // Grids & Layouts
  toSitemapGroup(bentoGridComponentsMetadata, "grids-layouts/bento-grids"),
  toSitemapGroup(featureGridComponentsMetadata, "grids-layouts/feature-grids"),
  toSitemapGroup(masonryGridComponentsMetadata, "grids-layouts/masonry-grids"),
  toSitemapGroup(galleryGridComponentsMetadata, "grids-layouts/gallery-grids"),

  // Content Blocks
  toSitemapGroup(pricingComponentsMetadata, "content-blocks/pricing"),
  toSitemapGroup(statsSectionComponentsMetadata, "content-blocks/stats-sections"),
  toSitemapGroup(testimonialComponentsMetadata, "content-blocks/testimonials"),
  toSitemapGroup(featureSectionComponentsMetadata, "content-blocks/feature-sections"),
  toSitemapGroup(timelineComponentsMetadata, "content-blocks/timeline"),
  toSitemapGroup(faqComponentsMetadata, "content-blocks/faq"),
  toSitemapGroup(paginationComponentsMetadata, "content-blocks/pagination"),

  // Media
  toSitemapGroup(lightboxComponentsMetadata, "media/light-boxes"),
  toSitemapGroup(videoPlayerComponentsMetadata, "media/video-players"),
  toSitemapGroup(imageGalleryComponentsMetadata, "media/image-galleries"),
  toSitemapGroup(testimonialsMediaComponentsMetadata, "media/testimonials-media"),

  // Special Elements
  toSitemapGroup(accordionComponentsMetadata, "special-elements/accordions"),
  toSitemapGroup(tabComponentsMetadata, "special-elements/tabs"),
  toSitemapGroup(carouselComponentsMetadata, "special-elements/carousels"),
  toSitemapGroup(badgesComponentsMetadata, "special-elements/badges"),
  toSitemapGroup(avatarsComponentsMetadata, "special-elements/avatars"),
  toSitemapGroup(breadcrumbsComponentsMetadata, "special-elements/breadcrumbs"),
  toSitemapGroup(selectorComponentsMetadata, "special-elements/selector"),
  toSitemapGroup(tablesComponentsMetadata, "special-elements/tables"),

  // Animations & Motion
  toSitemapGroup(parallaxScrollComponentsMetadata, "animations-motion/parallax-scroll"),
  toSitemapGroup(scrollRevealComponentsMetadata, "animations-motion/scroll-reveals"),
  toSitemapGroup(textAnimationComponentsMetadata, "animations-motion/text-animations"),
  toSitemapGroup(magneticCursorComponentsMetadata, "animations-motion/magnetic-cursor"),
  toSitemapGroup(transform3DComponentsMetadata, "animations-motion/3d-transforms"),
  toSitemapGroup(skeletonsLoaderComponentsMetadata, "animations-motion/skeletons-loader"),

  // Backgrounds & Visuals
  toSitemapGroup(backgroundComponentsMetadata, "backgrounds-visuals/backgrounds"),
  toSitemapGroup(blurredBackgroundComponentsMetadata, "backgrounds-visuals/blurred-backgrounds"),
  toSitemapGroup(patternBackgroundComponentsMetadata, "backgrounds-visuals/pattern-backgrounds"),
  toSitemapGroup(noiseTextureComponentsMetadata, "backgrounds-visuals/noise-texture"),
  toSitemapGroup(gradientPackComponentsMetadata, "backgrounds-visuals/gradients-packs"),

  // Core Landing Pages
  toSitemapGroup(heroSectionComponentsMetadata, "core-landing-pages/hero-sections"),
  toSitemapGroup(completeLandingPageComponentsMetadata, "core-landing-pages/complete-landing-pages"),
  toSitemapGroup(saasDashboardComponentsMetadata, "core-landing-pages/saas-dashboard"),
  toSitemapGroup(startupLandingComponentsMetadata, "core-landing-pages/startup-landing"),
  toSitemapGroup(agencyPortfolioComponentsMetadata, "core-landing-pages/agency-portfolio"),
  toSitemapGroup(authComponentsMetadata, "core-landing-pages/auth"),

  // Crazy Components
  toSitemapGroup(crazyComponentsMetadata, "crazy-components"),
].filter((group): group is SitemapComponentGroup => group !== null);

