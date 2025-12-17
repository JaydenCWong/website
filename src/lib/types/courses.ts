// Shared types for course resources

export interface Resource {
    title: string;
    description?: string;
    duration?: string;
    link: string;
    thumbnail?: string;
}

export interface Chapter {
    number: number;
    name: string;
    worksheets: Resource[];
    videos: Resource[];
}

export interface MiscResource {
    title: string;
    description: string;
    link: string;
    external: boolean;
}

/**
 * Extract YouTube video ID from various URL formats
 */
export function getYouTubeVideoId(url: string): string | null {
    const patterns = [
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    ];
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match) return match[1];
    }
    return null;
}

/**
 * Get YouTube thumbnail URL from video URL
 * Uses maxresdefault for best quality, falls back to hqdefault
 */
export function getYouTubeThumbnail(url: string, quality: 'maxres' | 'hq' | 'mq' = 'hq'): string | null {
    const videoId = getYouTubeVideoId(url);
    if (!videoId) return null;
    return `https://img.youtube.com/vi/${videoId}/${quality}default.jpg`;
}
