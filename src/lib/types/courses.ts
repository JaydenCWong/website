// Shared types for course resources

export interface Resource {
    title: string;
    description?: string;
    duration?: string;
    link: string;
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
