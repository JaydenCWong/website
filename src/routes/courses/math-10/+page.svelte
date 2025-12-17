<script lang="ts">
    import Footer from "$lib/components/Footer.svelte";
    import VideoModal from "$lib/components/VideoModal.svelte";
    import ChapterSection from "$lib/components/ChapterSection.svelte";
    import ResourceCard from "$lib/components/ResourceCard.svelte";
    import { chapters, miscResources, type Resource } from "./data";

    // Modal state for video player
    let selectedVideo = $state<Resource | null>(null);

    function openVideoModal(video: Resource) {
        selectedVideo = video;
        document.body.style.overflow = "hidden";
    }

    function closeVideoModal() {
        selectedVideo = null;
        document.body.style.overflow = "";
    }
</script>

<svelte:head>
    <title>Math 10 | Mr. Wong</title>
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
        <!-- Chapters -->
        <div class="chapters-list">
            {#each chapters as chapter}
                <ChapterSection {chapter} onVideoClick={openVideoModal} />
            {/each}
        </div>

        <!-- Misc Resources Section -->
        <div class="misc-section">
            <h2 class="section-title-small">
                <span class="section-icon">🔧</span>
                Additional Resources
            </h2>
            <div class="resource-list">
                {#each miscResources as item}
                    <ResourceCard
                        title={item.title}
                        description={item.description}
                        link={item.link}
                        type="external"
                    />
                {/each}
            </div>
        </div>
    </div>
</section>

<VideoModal video={selectedVideo} onclose={closeVideoModal} />

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

    .chapters-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-2xl);
    }

    /* Misc section */
    .misc-section {
        margin-top: var(--space-2xl);
        background: var(--color-bg-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-2xl);
        padding: var(--space-xl);
    }

    .section-title-small {
        display: flex;
        align-items: center;
        gap: var(--space-md);
        font-size: var(--font-size-xl);
        font-weight: 600;
        margin-bottom: var(--space-xl);
        padding-bottom: var(--space-md);
        border-bottom: 1px solid var(--color-border);
    }

    .section-icon {
        font-size: 1.5rem;
    }

    .resource-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
    }

    @media (max-width: 768px) {
        .misc-section {
            padding: var(--space-lg);
        }
    }
</style>
