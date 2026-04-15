export const formsData = [
    {
        id: "floating-label-input",
        name: "Floating Label Input",
        description: "Smooth animated floating label input similar to Material Design but with better physics.",
        tags: ["input", "animation", "form"],
        previewUrl: "/mobile/forms/floating-label",
        deps: ["reanimated"],
        props: [
            { name: "label", type: "string", description: "Label text" , default: "-" }
        ],
        code: `// Floating label code`,
        usageCode: `<FloatingInput label="Email" />`
    },
    {
        id: "otp-pin-input",
        name: "OTP / PIN Input",
        description: "Auto-focusing, segmented input for 2FA codes or PINs.",
        tags: ["auth", "otp", "security"],
        previewUrl: "/mobile/forms/otp-pin",
        deps: [],
        props: [],
        code: `// OTP code`,
        usageCode: `<OTPInput length={4} />`
    },
    {
        id: "multi-step-form-wizard",
        name: "Multi-step Wizard",
        description: "Complete layout for multi-step forms with progress indication.",
        tags: ["form", "wizard", "layout"],
        previewUrl: "/mobile/forms/wizard",
        deps: [],
        props: [],
        code: `// Wizard code`,
        usageCode: `<FormWizard steps={steps} />`
    }
];
