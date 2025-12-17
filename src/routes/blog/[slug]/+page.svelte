<script lang="ts">
    import type { BlogPost } from "$lib/types/blog";
    import type { Component } from "svelte";

    interface Props {
        data: {
            content: Component;
            metadata: BlogPost;
        };
    }

    let { data }: Props = $props();

    function formatDate(dateString: string): string {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }
</script>

<svelte:head>
    <title>{data.metadata.title} | Mr. Wong's Blog</title>
    <meta name="description" content={data.metadata.excerpt} />
</svelte:head>

<article class="blog-post">
    <div class="container">
        <header class="post-header">
            <a href="/blog" class="back-link">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Blog
            </a>

            <div class="post-meta">
                <time datetime={data.metadata.date}
                    >{formatDate(data.metadata.date)}</time
                >
                <div class="post-tags">
                    {#each data.metadata.tags as tag}
                        <span class="tag">{tag}</span>
                    {/each}
                </div>
            </div>

            <h1 class="post-title">{data.metadata.title}</h1>
        </header>

        <div class="post-content">
            <data.content />
        </div>

        <footer class="post-footer">
            <a href="/blog" class="back-link">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Blog
            </a>
        </footer>
    </div>
</article>

<style>
    .blog-post {
        min-height: calc(100vh - 72px);
        padding: var(--space-4xl) 0;
        background: var(--color-bg-primary);
    }

    .blog-post .container {
        max-width: 800px;
    }

    .back-link {
        display: inline-flex;
        align-items: center;
        gap: var(--space-sm);
        color: var(--color-text-secondary);
        font-size: var(--font-size-sm);
        font-weight: 500;
        margin-bottom: var(--space-xl);
        transition: color var(--transition-fast);
    }

    .back-link:hover {
        color: var(--color-accent);
    }

    .post-header {
        margin-bottom: var(--space-2xl);
    }

    .post-meta {
        display: flex;
        align-items: center;
        gap: var(--space-md);
        margin-bottom: var(--space-lg);
        flex-wrap: wrap;
    }

    .post-meta time {
        font-size: var(--font-size-sm);
        color: var(--color-text-muted);
    }

    .post-tags {
        display: flex;
        gap: var(--space-xs);
        flex-wrap: wrap;
    }

    .tag {
        font-size: var(--font-size-xs);
        padding: var(--space-xs) var(--space-sm);
        background: rgba(59, 130, 246, 0.15);
        color: var(--color-accent-light);
        border-radius: var(--radius-sm);
        font-weight: 500;
    }

    .post-title {
        font-size: var(--font-size-4xl);
        font-weight: 700;
        line-height: 1.2;
        color: var(--color-text-primary);
    }

    /* Markdown content styling */
    .post-content {
        color: var(--color-text-secondary);
        line-height: 1.8;
        font-size: var(--font-size-lg);
    }

    .post-content :global(h1),
    .post-content :global(h2),
    .post-content :global(h3),
    .post-content :global(h4) {
        color: var(--color-text-primary);
        margin-top: var(--space-2xl);
        margin-bottom: var(--space-md);
        font-weight: 600;
    }

    .post-content :global(h1) {
        font-size: var(--font-size-3xl);
    }

    .post-content :global(h2) {
        font-size: var(--font-size-2xl);
    }

    .post-content :global(h3) {
        font-size: var(--font-size-xl);
    }

    .post-content :global(p) {
        margin-bottom: var(--space-lg);
    }

    .post-content :global(a) {
        color: var(--color-accent-light);
        text-decoration: underline;
        text-underline-offset: 2px;
    }

    .post-content :global(a:hover) {
        color: var(--color-accent);
    }

    .post-content :global(ul),
    .post-content :global(ol) {
        margin-bottom: var(--space-lg);
        padding-left: var(--space-xl);
    }

    .post-content :global(li) {
        margin-bottom: var(--space-sm);
    }

    .post-content :global(blockquote) {
        border-left: 3px solid var(--color-accent);
        background: rgba(59, 130, 246, 0.1);
        padding: var(--space-md) var(--space-lg);
        margin: var(--space-lg) 0;
        border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
        font-style: italic;
    }

    .post-content :global(code) {
        background: var(--color-bg-secondary);
        padding: 0.2em 0.4em;
        border-radius: var(--radius-sm);
        font-size: 0.9em;
        font-family: "Fira Code", monospace;
    }

    .post-content :global(pre) {
        background: var(--color-bg-secondary);
        padding: var(--space-lg);
        border-radius: var(--radius-lg);
        overflow-x: auto;
        margin: var(--space-lg) 0;
    }

    .post-content :global(pre code) {
        background: transparent;
        padding: 0;
    }

    .post-content :global(img) {
        max-width: 100%;
        height: auto;
        border-radius: var(--radius-lg);
        margin: var(--space-lg) 0;
    }

    .post-content :global(hr) {
        border: none;
        border-top: 1px solid var(--color-border);
        margin: var(--space-2xl) 0;
    }

    .post-content :global(strong) {
        color: var(--color-text-primary);
        font-weight: 600;
    }

    .post-footer {
        margin-top: var(--space-4xl);
        padding-top: var(--space-xl);
        border-top: 1px solid var(--color-border);
    }
</style>
