<script context="module">
    export const metadata = {
        title: "Welcome to My Blog",
        date: "2024-12-17",
        excerpt: "Hello and welcome! This is the first post on my teaching blog where I'll share insights, tips, and resources for math students.",
        tags: ["general", "welcome"]
    };
</script>

<script lang="ts">
    function formatDate(dateString: string): string {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
</script>

<svelte:head>
    <title>{metadata.title} | Mr. Wong's Blog</title>
    <meta name="description" content={metadata.excerpt} />
</svelte:head>

<article class="blog-post">
    <div class="container">
        <header class="post-header">
            <a href="/blog" class="back-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Blog
            </a>
            
            <div class="post-meta">
                <time datetime={metadata.date}>{formatDate(metadata.date)}</time>
                <div class="post-tags">
                    {#each metadata.tags as tag}
                        <span class="tag">{tag}</span>
                    {/each}
                </div>
            </div>
            
            <h1 class="post-title">{metadata.title}</h1>
        </header>
        
        <div class="post-content">

# Welcome to My Blog!

Hello and welcome to my teaching blog! 👋

I'm excited to start sharing my thoughts, experiences, and resources here. As a math teacher, I'm passionate about making mathematics accessible and enjoyable for all students.

## What to Expect

On this blog, you'll find:

- **Teaching Tips**: Strategies and techniques that help students succeed
- **Math Insights**: Deep dives into interesting mathematical concepts
- **Study Resources**: Helpful materials for Math 10 and Calculus 12
- **Announcements**: Updates about classes and new materials

## Why a Blog?

I believe that learning extends beyond the classroom. This blog is a space where I can:

1. Share ideas that don't fit into regular class time
2. Provide additional explanations for tricky concepts
3. Connect with students and parents outside of school hours

## Stay Connected

Feel free to reach out through the [contact form](/#contact) if you have questions or topic suggestions!

Happy learning! 📚

        </div>
        
        <footer class="post-footer">
            <a href="/blog" class="back-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
    .post-content :global(h3) {
        color: var(--color-text-primary);
        margin-top: var(--space-2xl);
        margin-bottom: var(--space-md);
        font-weight: 600;
    }
    
    .post-content :global(h1) { font-size: var(--font-size-3xl); }
    .post-content :global(h2) { font-size: var(--font-size-2xl); }
    .post-content :global(h3) { font-size: var(--font-size-xl); }
    
    .post-content :global(p) {
        margin-bottom: var(--space-lg);
    }
    
    .post-content :global(a) {
        color: var(--color-accent-light);
        text-decoration: underline;
    }
    
    .post-content :global(ul),
    .post-content :global(ol) {
        margin-bottom: var(--space-lg);
        padding-left: var(--space-xl);
    }
    
    .post-content :global(li) {
        margin-bottom: var(--space-sm);
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
