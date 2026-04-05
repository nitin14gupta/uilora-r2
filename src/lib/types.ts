// Component data structure
export interface ComponentProp {
    name: string;
    type: string;
    default: string;
    description: string;
    required?: boolean;
}

export interface Component {
    id: string;
    name: string;
    description: string;
    category: string;
    tags: string[];
    previewUrl: string;
    imageUrl?: string;
    videoUrl?: string;
    code: {
        tsx: string;
        jsx?: string;
    };
    usageCode?: {
        tsx: string;
        jsx?: string;
    };
    dependencies?: string[];
    author?: string;
    version?: string;
    props?: ComponentProp[];
    hasApp?: boolean;
    appPreviewUrl?: string;
    inspiredBy?: {
        name: string;
        url?: string;
    };
    contributedBy?: {
        name: string;
        url?: string;
    };
    installType?: "manual" | "cli";
    whenToUse?: string;
    bestPractices?: string;
    whyMatters?: string;
    faqs?: { question: string; answer: string; }[];
}

export interface MobileComponent {
    id: string;
    name: string;
    description: string;
    tags: string[];
    previewUrl: string;
    imageUrl?: string;
    videoUrl?: string;
    deps?: string[];
    props?: ComponentProp[];
    code: {
        tsx: string;
        jsx?: string;
    };
    usageCode?: {
        tsx: string;
        jsx?: string;
    };
    installType?: "manual" | "cli";
    whenToUse?: string;
    bestPractices?: string;
    whyMatters?: string;
    faqs?: { question: string; answer: string; }[];
}


