<script lang="ts">
    import { tagCategories } from "$lib/data/tagCategories";
    import Fuse from "fuse.js";

    // Define posts statically for now - simple and maintainable
    // When adding a new post, just add it to this array
    // The 'content' field contains searchable keywords from the post body
    const posts = [
        {
            slug: "four-billion-if-statements",
            title: "4 Billion If Statements: Absurdity Becomes Interesting",
            date: "2025-12-17",
            excerpt:
                "A programmer takes a joke from TikTok to its logical extreme, revealing fascinating insights about problem-solving, limitations, and creative workarounds.",
            tags: ["programming", "problem-solving"],
            content:
                "Andreas Karlsson TikTok mass programming absurdity code bloat file size compiler optimization floating point IEEE 754 binary representation LLVM x86 assembly branchless programming bit manipulation CPU pipeline creative problem solving",
        },
        {
            slug: "failure-and-learning",
            title: "What Video Games Teach Us About Failure and Learning",
            date: "2025-12-17",
            excerpt:
                "Failure in video games mirrors failure in learning. Both require struggle to create meaning, and both need careful scaffolding to keep us in the zone of productive challenge.",
            tags: ["teaching", "learning", "study-tips"],
            content:
                "Razbuten Failure is Weird video essay games gaming stakes success struggle learning uncomfortable misconceptions Zone of Proximal Development ZPD Vygotsky scaffolding teachers game designers optimal strategy exploration aha moment",
        },
        {
            slug: "welcome",
            title: "Welcome to My Blog",
            date: "2024-12-17",
            excerpt:
                "Hello and welcome! This is the first post on my teaching blog where I'll share insights, tips, and resources for math students.",
            tags: ["general", "welcome"],
            content:
                "introduction first post math teacher tutor resources tips students education",
        },
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Configure Fuse.js for fuzzy search
    const fuse = new Fuse(posts, {
        keys: [
            { name: "title", weight: 0.35 },
            { name: "excerpt", weight: 0.25 },
            { name: "content", weight: 0.25 },
            { name: "tags", weight: 0.15 },
        ],
        threshold: 0.2, // 0 = exact match, 1 = match anything (0.2 is stricter)
        includeScore: true,
        ignoreLocation: true, // Search entire string, not just beginning
        minMatchCharLength: 3, // Minimum 3 characters before matching
    });

    // Get tags that are actually used in posts
    const usedTags = [...new Set(posts.flatMap((p) => p.tags))];

    // Filter categories to only show tags that exist in posts
    const activeCategories = Object.entries(tagCategories)
        .map(([category, tags]) => ({
            category,
            tags: tags.filter((tag) => usedTags.includes(tag)),
        }))
        .filter((c) => c.tags.length > 0);

    // Search state
    let searchQuery = $state("");
    let selectedCategory = $state("");
    let selectedTag = $state("");

    // Filtered posts based on fuzzy search and tag
    let filteredPosts = $derived(() => {
        let results = posts;

        // Apply fuzzy search if query exists
        if (searchQuery.trim()) {
            const fuseResults = fuse.search(searchQuery);
            results = fuseResults.map((r) => r.item);
        }

        // Apply tag filter
        if (selectedTag) {
            results = results.filter((post) => post.tags.includes(selectedTag));
        }

        return results;
    });

    function selectCategory(category: string) {
        if (selectedCategory === category) {
            // Toggle off
            selectedCategory = "";
            selectedTag = "";
        } else {
            selectedCategory = category;
            selectedTag = "";
        }
    }

    function selectTag(tag: string) {
        selectedTag = selectedTag === tag ? "" : tag;
    }

    function clearFilters() {
        searchQuery = "";
        selectedCategory = "";
        selectedTag = "";
    }

    function formatDate(dateString: string): string {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    }
</script>

<svelte:head>
    <title>Blog | Mr. Wong</title>
    <meta
        name="description"
        content="Thoughts on programming, math, and education."
    />
</svelte:head>

<section class="blog-page">
    <div class="container">
        <header class="blog-header">
            <h1 class="page-title">Blog</h1>
            <p class="page-subtitle">
                Thoughts on programming, math, and education.
            </p>
        </header>

        <!-- Search and Filter Bar -->
        <div class="search-bar">
            <div class="search-input-wrapper">
                <svg
                    class="search-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                </svg>
                <input
                    type="text"
                    placeholder="Search posts..."
                    bind:value={searchQuery}
                    class="search-input"
                />
                {#if searchQuery}
                    <button
                        class="clear-search"
                        onclick={() => (searchQuery = "")}
                        aria-label="Clear search"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                {/if}
            </div>

            <!-- Category Filters -->
            <div class="filter-section">
                <div class="category-filters">
                    <button
                        class="category-btn"
                        class:active={selectedCategory === "" &&
                            selectedTag === ""}
                        onclick={() => {
                            selectedCategory = "";
                            selectedTag = "";
                        }}
                    >
                        All Posts
                    </button>
                    {#each activeCategories as { category }}
                        <button
                            class="category-btn"
                            class:active={selectedCategory === category}
                            onclick={() => selectCategory(category)}
                        >
                            {category}
                            <svg
                                class="chevron"
                                class:open={selectedCategory === category}
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </button>
                    {/each}
                </div>

                <!-- Tag Pills (show when category selected) -->
                {#if selectedCategory}
                    <div class="tag-filters">
                        {#each activeCategories.find((c) => c.category === selectedCategory)?.tags || [] as tag}
                            <button
                                class="tag-pill"
                                class:active={selectedTag === tag}
                                onclick={() => selectTag(tag)}
                            >
                                {tag}
                            </button>
                        {/each}
                    </div>
                {/if}
            </div>
        </div>

        <!-- Results info -->
        {#if searchQuery || selectedTag || selectedCategory}
            <div class="results-info">
                <span>
                    {filteredPosts().length}
                    {filteredPosts().length === 1 ? "post" : "posts"} found
                    {#if searchQuery}for "{searchQuery}"{/if}
                    {#if selectedTag}tagged "{selectedTag}"{/if}
                    {#if selectedCategory && !selectedTag}in {selectedCategory}{/if}
                </span>
                <button class="clear-filters" onclick={clearFilters}
                    >Clear filters</button
                >
            </div>
        {/if}

        <div class="posts-grid">
            {#each filteredPosts() as post}
                <article class="post-card">
                    <div class="post-meta">
                        <time datetime={post.date}>{formatDate(post.date)}</time
                        >
                        <div class="post-tags">
                            {#each post.tags as tag}
                                <button
                                    class="tag clickable"
                                    onclick={() => {
                                        selectedTag = tag;
                                        selectedCategory = "";
                                    }}
                                >
                                    {tag}
                                </button>
                            {/each}
                        </div>
                    </div>
                    <h2 class="post-title">
                        <a href="/blog/{post.slug}">{post.title}</a>
                    </h2>
                    <p class="post-excerpt">{post.excerpt}</p>
                    <a href="/blog/{post.slug}" class="read-more">
                        Read More
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </article>
            {/each}
        </div>

        {#if filteredPosts().length === 0}
            <div class="no-results">
                <p>No posts found matching your search.</p>
                <button class="clear-filters-btn" onclick={clearFilters}
                    >Clear filters</button
                >
            </div>
        {/if}
    </div>
</section>

<style>
    .blog-page {
        min-height: calc(100vh - 72px);
        padding: var(--space-4xl) 0;
        background: var(--color-bg-primary);
    }

    .blog-header {
        margin-bottom: var(--space-2xl);
    }

    .page-title {
        font-size: var(--font-size-4xl);
        font-weight: 700;
        margin-bottom: var(--space-md);
        background: var(--gradient-accent);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .page-subtitle {
        font-size: var(--font-size-lg);
        color: var(--color-text-secondary);
        max-width: 600px;
    }

    /* Search Bar Styles */
    .search-bar {
        margin-bottom: var(--space-xl);
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
    }

    .search-input-wrapper {
        position: relative;
        display: flex;
        align-items: center;
    }

    .search-icon {
        position: absolute;
        left: var(--space-md);
        color: var(--color-text-muted);
        pointer-events: none;
    }

    .search-input {
        width: 100%;
        padding: var(--space-md) var(--space-md) var(--space-md)
            calc(var(--space-md) * 2 + 20px);
        background: var(--color-bg-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        color: var(--color-text-primary);
        font-size: var(--font-size-base);
        transition: all var(--transition-fast);
    }

    .search-input::placeholder {
        color: var(--color-text-muted);
    }

    .search-input:focus {
        outline: none;
        border-color: var(--color-accent);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
    }

    .clear-search {
        position: absolute;
        right: var(--space-md);
        background: none;
        border: none;
        color: var(--color-text-muted);
        cursor: pointer;
        padding: var(--space-xs);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: var(--radius-sm);
        transition: color var(--transition-fast);
    }

    .clear-search:hover {
        color: var(--color-text-primary);
    }

    /* Category & Tag Filter Styles */
    .filter-section {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
    }

    .category-filters {
        display: flex;
        gap: var(--space-xs);
        flex-wrap: wrap;
    }

    .category-btn {
        display: inline-flex;
        align-items: center;
        gap: var(--space-xs);
        padding: var(--space-sm) var(--space-md);
        background: var(--color-bg-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        color: var(--color-text-secondary);
        font-size: var(--font-size-sm);
        font-weight: 500;
        cursor: pointer;
        transition: all var(--transition-fast);
    }

    .category-btn:hover {
        border-color: var(--color-border-hover);
        color: var(--color-text-primary);
    }

    .category-btn.active {
        background: var(--color-accent);
        border-color: var(--color-accent);
        color: white;
    }

    .chevron {
        transition: transform var(--transition-fast);
    }

    .chevron.open {
        transform: rotate(180deg);
    }

    .tag-filters {
        display: flex;
        gap: var(--space-xs);
        flex-wrap: wrap;
        padding-left: var(--space-sm);
        border-left: 2px solid var(--color-accent);
        animation: slideIn 0.2s ease-out;
    }

    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(-8px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .tag-pill {
        padding: var(--space-xs) var(--space-md);
        background: transparent;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-full);
        color: var(--color-text-secondary);
        font-size: var(--font-size-xs);
        cursor: pointer;
        transition: all var(--transition-fast);
    }

    .tag-pill:hover {
        border-color: var(--color-accent-light);
        color: var(--color-accent-light);
    }

    .tag-pill.active {
        background: rgba(59, 130, 246, 0.15);
        border-color: var(--color-accent-light);
        color: var(--color-accent-light);
    }

    .results-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: var(--space-lg);
        font-size: var(--font-size-sm);
        color: var(--color-text-muted);
    }

    .clear-filters {
        background: none;
        border: none;
        color: var(--color-accent);
        cursor: pointer;
        font-size: var(--font-size-sm);
    }

    .clear-filters:hover {
        text-decoration: underline;
    }

    .posts-grid {
        display: grid;
        gap: var(--space-xl);
    }

    .post-card {
        background: var(--color-bg-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-xl);
        padding: var(--space-xl);
        transition: all var(--transition-base);
    }

    .post-card:hover {
        border-color: var(--color-border-hover);
        transform: translateY(-4px);
        box-shadow: var(--shadow-glow);
    }

    .post-meta {
        display: flex;
        align-items: center;
        gap: var(--space-md);
        margin-bottom: var(--space-md);
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

    .tag.clickable {
        cursor: pointer;
        border: none;
        transition: all var(--transition-fast);
    }

    .tag.clickable:hover {
        background: rgba(59, 130, 246, 0.25);
    }

    .post-title {
        font-size: var(--font-size-xl);
        font-weight: 700;
        margin-bottom: var(--space-sm);
    }

    .post-title a {
        color: var(--color-text-primary);
        transition: color var(--transition-fast);
    }

    .post-title a:hover {
        color: var(--color-accent-light);
    }

    .post-excerpt {
        font-size: var(--font-size-base);
        color: var(--color-text-secondary);
        line-height: 1.6;
        margin-bottom: var(--space-lg);
    }

    .read-more {
        display: inline-flex;
        align-items: center;
        gap: var(--space-xs);
        font-size: var(--font-size-sm);
        font-weight: 600;
        color: var(--color-accent);
        transition: gap var(--transition-fast);
    }

    .read-more:hover {
        gap: var(--space-sm);
    }

    .no-results {
        text-align: center;
        padding: var(--space-4xl);
        color: var(--color-text-muted);
    }

    .clear-filters-btn {
        margin-top: var(--space-md);
        padding: var(--space-sm) var(--space-lg);
        background: var(--color-accent);
        border: none;
        border-radius: var(--radius-lg);
        color: white;
        font-weight: 500;
        cursor: pointer;
        transition: all var(--transition-fast);
    }

    .clear-filters-btn:hover {
        opacity: 0.9;
    }
</style>
