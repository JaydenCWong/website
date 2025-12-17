import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
    // Import all markdown files and find the matching one
    const posts = import.meta.glob('/src/content/blog/*.md', { eager: true });
    const postPath = `/src/content/blog/${params.slug}.md`;

    const post = posts[postPath] as { default: any; metadata: any } | undefined;

    if (!post) {
        throw error(404, `Post not found: ${params.slug}`);
    }

    return {
        content: post.default,
        metadata: post.metadata
    };
};
