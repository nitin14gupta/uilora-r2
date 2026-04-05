import fs from "fs";
import path from "path";

/**
 * Reads code from library files at build time
 * @param relativePath - Path relative to the library root (e.g., "src/components/...")
 * @returns The file content as a string
 */
export function getCode(relativePath: string): string {
    try {
        // Get the workspace root (one level up from client)
        const workspaceRoot = path.join(process.cwd(), "..");
        const libraryPath = path.join(workspaceRoot, "library");
        const filePath = path.join(libraryPath, relativePath);

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


