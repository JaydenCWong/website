// Centralized tag categories for the blog
// Add new tags to appropriate categories as you create posts

export const tagCategories: Record<string, string[]> = {
    "Course": ["math-10", "calculus-12", "financial-literacy"],
    "Topic": ["math", "study-tips", "teaching", "technology", "learning"],
    "Type": ["announcements", "resources", "tutorials", "general", "welcome"]
};

// Helper to get category for a tag
export function getCategoryForTag(tag: string): string | null {
    for (const [category, tags] of Object.entries(tagCategories)) {
        if (tags.includes(tag)) {
            return category;
        }
    }
    return null;
}

// Get all tags as a flat array
export function getAllTags(): string[] {
    return Object.values(tagCategories).flat();
}
