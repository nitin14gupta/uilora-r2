import fs from "fs";
import path from "path";

/**
 * @param relativePath
 * @returns
 */
export function getCode(relativePath: string): string {
    try {
        const MobilePath = process.env.MOBILE_SOURCE_PATH || path.join(process.cwd(), "..", "app");
        const filePath = path.join(MobilePath, relativePath);

        // Check if file exists
        if (!fs.existsSync(filePath)) {
            console.warn(`[getCode] File not found: ${filePath}`);
            return "";
        }

        return fs.readFileSync(filePath, "utf8");
    } catch (error) {
        console.error(`[getCode] Error reading file ${relativePath}:`, error);
        return "";
    }
}


