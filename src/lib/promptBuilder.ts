export function buildPrompt({
    intro,
    usageCode,
    componentCode,
    outro,
    language = "tsx",
}: {
    intro: string;
    usageCode: string;
    componentCode: string;
    outro: string;
    language?: "tsx" | "jsx";
}) {
    const lang = language === "tsx" ? "tsx" : "jsx";

    return `${intro.trim()}

\`\`\`${lang}
${usageCode.trim()}
\`\`\`

\`\`\`${lang}
${componentCode.trim()}
\`\`\`

${outro.trim()}`.trim();
}

