import type { EntryGenerator, PageLoad } from './$types';

// Generate entries for all blog posts so they can be prerendered
export const entries: EntryGenerator = () => {
    const posts = import.meta.glob('/src/content/blog/*.md');

    return Object.keys(posts).map((path) => {
        const slug = path.split('/').pop()?.replace('.md', '') ?? '';
        return { slug };
    });
};

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
    // Dynamically import the markdown file
    const post = await import(`../../../content/blog/${params.slug}.md`);

    return {
        content: post.default,
        metadata: post.metadata as {
            title: string;
            date: string;
            excerpt: string;
            tags: string[];
        }
    };
};
