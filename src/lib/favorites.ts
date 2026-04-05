// Favorite management utilities
export const FAVORITES_KEY = "uilora_favorites";

export const getFavorites = (): string[] => {
    if (typeof window === "undefined") return [];
    try {
        const stored = localStorage.getItem(FAVORITES_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch {
        return [];
    }
};

export const toggleFavorite = (componentId: string): void => {
    if (typeof window === "undefined") return;
    try {
        const favorites = getFavorites();
        const index = favorites.indexOf(componentId);
        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(componentId);
        }
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch {
        // Ignore errors
    }
};

export const isFavorite = (componentId: string): boolean => {
    return getFavorites().includes(componentId);
};

