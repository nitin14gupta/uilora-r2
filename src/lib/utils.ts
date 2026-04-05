import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- UTILS ---
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// 9822409558
// 8446214525