export interface BlogPost {
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    tags: string[];
    published: boolean;
}

export interface BlogPostWithContent extends BlogPost {
    content: any; // Svelte component from mdsvex
}
