<script lang="ts">
    import Footer from "$lib/components/Footer.svelte";

    const worksheets = [
        {
            title: "Chapter 3.1 - Irrational Numbers",
            description: "Practice problems on irrational numbers",
            link: "https://drive.google.com/uc?export=download&id=1UemclKkaEtrSCLwiIv7Jzw8T7pbom3M1",
        },
        {
            title: "Chapter 2 - Polynomials",
            description: "Factoring and expanding polynomial expressions",
            link: "#",
        },
    ];

    const videos = [
        {
            title: "Introduction to Linear Relations",
            duration: "15:30",
            link: "#",
        },
        { title: "Solving Linear Equations", duration: "12:45", link: "#" },
    ];

    const misc = [
        {
            title: "Financial Literacy Simulator",
            description: "Interactive budgeting and financial planning tool",
            link: "https://financial-literacy.pages.dev", // Update with your actual URL
            external: true,
        },
    ];
</script>

<svelte:head>
    <title>Math 10 | Jayden Wong</title>
    <meta
        name="description"
        content="Math 10 course resources - worksheets, videos, and practice materials"
    />
</svelte:head>

<section class="course-header">
    <div class="container">
        <a href="/" class="back-link">
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
            Back to Home
        </a>
        <div class="course-icon">📐</div>
        <h1 class="course-title">Math 10</h1>
        <p class="course-description">
            Foundations of Mathematics 10 - BC Curriculum. Building core
            mathematical skills in algebra, geometry, number sense, and
            problem-solving.
        </p>
    </div>
</section>

<section class="section resources">
    <div class="container">
        <div class="resources-grid">
            <!-- Worksheets Section -->
            <div class="resource-section">
                <h2 class="resource-section-title">
                    <span class="resource-icon">📄</span>
                    Worksheets
                </h2>
                <div class="resource-list">
                    {#each worksheets as worksheet}
                        <a href={worksheet.link} class="resource-card">
                            <div class="resource-info">
                                <h3 class="resource-title">
                                    {worksheet.title}
                                </h3>
                                <p class="resource-description">
                                    {worksheet.description}
                                </p>
                            </div>
                            <div class="resource-action">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                >
                                    <path
                                        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                    />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                            </div>
                        </a>
                    {/each}
                    {#if worksheets.length === 0}
                        <div class="empty-state">
                            <p>Worksheets coming soon!</p>
                        </div>
                    {/if}
                </div>
            </div>

            <!-- Videos Section -->
            <div class="resource-section">
                <h2 class="resource-section-title">
                    <span class="resource-icon">🎬</span>
                    Video Lessons
                </h2>
                <div class="resource-list">
                    {#each videos as video}
                        <a href={video.link} class="resource-card">
                            <div class="resource-info">
                                <h3 class="resource-title">{video.title}</h3>
                                <p class="resource-meta">{video.duration}</p>
                            </div>
                            <div class="resource-action">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                            </div>
                        </a>
                    {/each}
                    {#if videos.length === 0}
                        <div class="empty-state">
                            <p>Videos coming soon!</p>
                        </div>
                    {/if}
                </div>
            </div>

            <!-- Misc Resources Section -->
            <div class="resource-section">
                <h2 class="resource-section-title">
                    <span class="resource-icon">🔧</span>
                    Misc Resources
                </h2>
                <div class="resource-list">
                    {#each misc as item}
                        <a
                            href={item.link}
                            class="resource-card"
                            target={item.external ? "_blank" : undefined}
                            rel={item.external
                                ? "noopener noreferrer"
                                : undefined}
                        >
                            <div class="resource-info">
                                <h3 class="resource-title">{item.title}</h3>
                                <p class="resource-description">
                                    {item.description}
                                </p>
                            </div>
                            <div class="resource-action">
                                {#if item.external}
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                        />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                {:else}
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                {/if}
                            </div>
                        </a>
                    {/each}
                    {#if misc.length === 0}
                        <div class="empty-state">
                            <p>More resources coming soon!</p>
                        </div>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</section>

<Footer />

<style>
    .course-header {
        padding: var(--space-4xl) 0 var(--space-3xl);
        background: radial-gradient(
                circle at 20% 50%,
                rgba(59, 130, 246, 0.15) 0%,
                transparent 50%
            ),
            var(--color-bg-secondary);
        text-align: center;
    }

    .back-link {
        display: inline-flex;
        align-items: center;
        gap: var(--space-sm);
        color: var(--color-text-secondary);
        font-size: var(--font-size-sm);
        margin-bottom: var(--space-2xl);
        transition: color var(--transition-fast);
    }

    .back-link:hover {
        color: var(--color-accent);
    }

    .course-icon {
        font-size: 4rem;
        margin-bottom: var(--space-lg);
    }

    .course-title {
        font-size: var(--font-size-4xl);
        font-weight: 800;
        margin-bottom: var(--space-md);
        background: var(--gradient-accent);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .course-description {
        font-size: var(--font-size-lg);
        color: var(--color-text-secondary);
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.7;
    }

    .resources {
        background: var(--color-bg-primary);
    }

    .resources-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: var(--space-2xl);
    }

    .resource-section {
        background: var(--color-bg-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-2xl);
        padding: var(--space-xl);
    }

    /* Make last section span full width if odd number of sections */
    .resource-section:last-child:nth-child(odd) {
        grid-column: 1 / -1;
    }

    .resource-section-title {
        display: flex;
        align-items: center;
        gap: var(--space-md);
        font-size: var(--font-size-xl);
        font-weight: 600;
        margin-bottom: var(--space-xl);
        padding-bottom: var(--space-md);
        border-bottom: 1px solid var(--color-border);
    }

    .resource-icon {
        font-size: 1.5rem;
    }

    .resource-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-md);
    }

    .resource-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-md) var(--space-lg);
        background: var(--color-bg-secondary);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        transition: all var(--transition-base);
    }

    .resource-card:hover {
        border-color: var(--color-accent);
        background: rgba(59, 130, 246, 0.05);
    }

    .resource-title {
        font-size: var(--font-size-base);
        font-weight: 600;
        margin-bottom: var(--space-xs);
    }

    .resource-description,
    .resource-meta {
        font-size: var(--font-size-sm);
        color: var(--color-text-muted);
    }

    .resource-action {
        color: var(--color-accent);
        opacity: 0.7;
        transition: opacity var(--transition-fast);
    }

    .resource-card:hover .resource-action {
        opacity: 1;
    }

    .empty-state {
        text-align: center;
        padding: var(--space-2xl);
        color: var(--color-text-muted);
    }

    @media (max-width: 768px) {
        .resources-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
