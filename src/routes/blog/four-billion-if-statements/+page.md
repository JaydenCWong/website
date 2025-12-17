<script context="module">
    export const metadata = {
        title: "4 Billion If Statements: Absurdity Becomes Interesting",
        date: "2025-12-17",
        excerpt: "A programmer takes a joke from TikTok to its logical extreme, revealing fascinating insights about problem-solving, limitations, and creative workarounds.",
        tags: ["programming", "problem-solving"]
    };
</script>

<script lang="ts">
    import Citation from '$lib/components/Citation.svelte';
    import References from '$lib/components/References.svelte';
    
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

# 4 Billion If Statements: When Absurdity Becomes Interesting

I recently came across an article by Andreas Karlsson called "4 billion if statements" <Citation id="blabbin2023" /> and I just had to share it. It's a delightful journey into the absurd that actually reveals something deeper about problem-solving and computer science.

## The Original Joke

The article starts with a screenshot that was circulating on TikTok. A beginner programmer, tasked with checking if a number is odd or even, wrote something like this instead of using the modulo operator:

```python
if number == 0:
    print("even")
if number == 1:
    print("odd")
if number == 2:
    print("even")
if number == 3:
    print("odd")
# ... and so on
```

The internet, of course, responded with the usual cascade of snarky comments about this "fresh programmer's" approach.

## But What If We Actually Did It?

Here's where the article gets interesting. Instead of dismissing the approach, Karlsson asks: **what if we actually took this to its logical extreme?** What would happen if we genuinely tried to check every possible 32-bit integer this way, requiring 4 billion if statements?

This is the kind of question that turns a joke into a learning experience.

## Hitting Real-World Limitations

The journey to create this absurd program hits fascinating obstacles:

1. **Compiler limits**: The Microsoft C compiler ran out of heap space trying to process a 330GB source file with over 130 million lines.

2. **File format limits**: The Windows executable format (.exe) can't handle files larger than 4GB, and with 4 billion comparisons, even one byte per comparison would exceed that.

3. **Time constraints**: Generating the source code alone took 48 hours.

## Creative Problem-Solving

Faced with these limitations, Karlsson gets creative. If the compiler won't help, write the machine code directly! The final solution:

- Uses Python to generate raw x86-64 machine code
- Memory-maps a 40GB binary file containing all 4 billion comparisons
- Actually works and returns results in about 10 seconds for the largest numbers

## Why This Matters

This article resonated with me because it demonstrates something important about how we approach problems. Even when a problem seems nonsensical or impossible, the act of trying to solve it can reveal:

- **Hidden assumptions** we make about our tools
- **Real limitations** of the systems we use
- **Creative workarounds** that push our understanding

It's a reminder that sometimes the journey of attempting something "impossible" teaches us more than taking the obvious path.

## The Takeaway

Next time you see something that seems obviously wrong or inefficient, consider: what would happen if you actually tried it? You might not end up with a practical solution, but you'll probably learn something interesting along the way.

---

*The original article is a fantastic read with all the technical details. I highly recommend checking it out!*

<References ids={["blabbin2023"]} />

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
    
    .post-content :global(blockquote) {
        border-left: 3px solid var(--color-accent);
        background: rgba(59, 130, 246, 0.1);
        padding: var(--space-md) var(--space-lg);
        margin: var(--space-lg) 0;
        border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
        font-style: italic;
    }
    
    .post-content :global(strong) {
        color: var(--color-text-primary);
        font-weight: 600;
    }
    
    .post-content :global(em) {
        font-style: italic;
    }
    
    .post-content :global(hr) {
        border: none;
        border-top: 1px solid var(--color-border);
        margin: var(--space-2xl) 0;
    }
    
    .post-content :global(pre) {
        background: var(--color-bg-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        padding: var(--space-lg);
        overflow-x: auto;
        margin: var(--space-lg) 0;
    }
    
    .post-content :global(code) {
        font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
        font-size: var(--font-size-sm);
    }
    
    .post-content :global(pre code) {
        background: none;
        padding: 0;
    }
    
    .post-content :global(:not(pre) > code) {
        background: rgba(59, 130, 246, 0.1);
        padding: 0.2em 0.4em;
        border-radius: var(--radius-sm);
        color: var(--color-accent-light);
    }
    
    .post-footer {
        margin-top: var(--space-4xl);
        padding-top: var(--space-xl);
        border-top: 1px solid var(--color-border);
    }
</style>
