import { getCode } from "../getCodeMobile";
import { MobileComponent } from "../types";

export const buttonsData: MobileComponent[] = [
  {
    id: "hero-button",
    name: "Hero Button",
    description: "A versatile hero button with multiple themes including glass, brutalist, and gradient. Features shimmer and glow animations.",
    tags: ["hero", "animated", "glass", "brutalist"],
    previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/hero-button?preview=true&platform=web",
    deps: ["react-native-reanimated", "expo-blur", "expo-linear-gradient"],
    props: [
      { name: "label", type: "string", description: "Button label text" , default: "-" },
      { name: "onPress", type: "() => void", description: "Function to call on press" , default: "-" },
      { name: "theme", type: "'glass' | 'brutal' | 'gradient' | 'dark' | 'minimal'", description: "Visual theme of the button", default: "gradient" },
      { name: "loading", type: "boolean", description: "Show loading spinner", default: "false" },
      { name: "accentColor", type: "string", description: "Primary color for gradients/borders", default: "#6366f1" },
      { name: "style", type: "ViewStyle", description: "Custom container styles" , default: "-" },
      { name: "textStyle", type: "TextStyle", description: "Custom text styles" , default: "-" }
    ],
    code: {
      tsx: getCode("react-native/component-code/stylesheet/buttons/hero-buttons.tsx"),
      jsx: getCode("react-native/component-code/stylesheet/buttons/hero-buttons.jsx")
    },
    usageCode: {
      tsx: getCode("react-native/usage-code/stylesheet/buttons/hero-buttons.tsx"),
      jsx: getCode("react-native/usage-code/stylesheet/buttons/hero-buttons.jsx")
    }
  },
  {
    id: "premium-button",
    name: "Premium Button",
    description: "High-end button variants including Neon and Premium Shimmer effects.",
    tags: ["premium", "neon", "shimmer"],
    previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/premium-buttons?preview=true&platform=web",
    deps: ["react-native-reanimated", "expo-linear-gradient"],
    props: [
      { name: "label", type: "string", description: "Button label text" , default: "-" },
      { name: "onPress", type: "() => void", description: "Function to call on press" , default: "-" },
      { name: "variant", type: "'glass' | 'neon' | 'premium'", description: "Visual variant", required: true , default: "-" },
      { name: "accentColor", type: "string", description: "Accent color", default: "#A855F7" },
      { name: "style", type: "ViewStyle", description: "Custom container styles" , default: "-" }
    ],
    code: {
      tsx: getCode("react-native/component-code/stylesheet/buttons/premium-buttons.tsx"),
      jsx: getCode("react-native/component-code/stylesheet/buttons/premium-buttons.jsx")
    },
    usageCode: {
      tsx: getCode("react-native/usage-code/stylesheet/buttons/premium-buttons.tsx"),
      jsx: getCode("react-native/usage-code/stylesheet/buttons/premium-buttons.jsx")
    }
  },
  {
    id: "segment-tab",
    name: "Segment Tab Control",
    description: "Animated segmented control for switching between options with smooth spring physics.",
    tags: ["tabs", "navigation", "animated"],
    previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/segment-tab-buttons?preview=true&platform=web",
    deps: ["react-native-reanimated", "expo-blur", "expo-linear-gradient"],
    props: [
      { name: "options", type: "string[]", description: "Array of tab labels", required: true , default: "-" },
      { name: "onTabChange", type: "(index: number) => void", description: "Callback when tab changes" , default: "-" },
      { name: "theme", type: "'glass' | 'brutal' | 'gradient' | 'dark' | 'minimal'", description: "Visual theme", default: "minimal" },
      { name: "shape", type: "'pill' | 'rounded'", description: "Corner shape", default: "pill" },
      { name: "accentColor", type: "string", description: "Active indicator color", default: "#6366f1" },
      { name: "style", type: "ViewStyle", description: "Custom container styles" , default: "-" }
    ],
    code: {
      tsx: getCode("react-native/component-code/stylesheet/buttons/segment-tab-buttons.tsx"),
      jsx: getCode("react-native/component-code/stylesheet/buttons/segment-tab-buttons.jsx")
    },
    usageCode: {
      tsx: getCode("react-native/usage-code/stylesheet/buttons/segment-tab-buttons.tsx"),
      jsx: getCode("react-native/usage-code/stylesheet/buttons/segment-tab-buttons.jsx")
    }
  },
  {
    id: "primary-action-button",
    name: "Primary Action Button",
    description: "Standard action button with various size and theme presets.",
    tags: ["action", "standard", "themeable"],
    previewUrl: "https://snack.expo.dev/embedded/@syncellaenterprises/theme-buttons?preview=true&platform=web",
    deps: ["react-native-reanimated", "expo-blur", "expo-linear-gradient", "react-native-svg"],
    props: [
      { name: "label", type: "string", description: "Button label text" , default: "-" },
      { name: "onPress", type: "() => void", description: "Function to call on press" , default: "-" },
      { name: "theme", type: "'glass' | 'brutal' | 'gradient' | 'dark' | 'minimal'", description: "Visual theme", default: "minimal" },
      { name: "size", type: "'sm' | 'md' | 'lg'", description: "Button size preset", default: "md" },
      { name: "accentColor", type: "string", description: "Accent color", default: "#6366f1" },
      { name: "style", type: "ViewStyle", description: "Custom container styles" , default: "-" }
    ],
    code: {
      tsx: getCode("react-native/component-code/stylesheet/buttons/theme-buttons.tsx"),
      jsx: getCode("react-native/component-code/stylesheet/buttons/theme-buttons.jsx")
    },
    usageCode: {
      tsx: getCode("react-native/usage-code/stylesheet/buttons/theme-buttons.tsx"),
      jsx: getCode("react-native/usage-code/stylesheet/buttons/theme-buttons.jsx")
    }
  }
];
