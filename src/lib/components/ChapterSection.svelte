<script lang="ts">
    import ResourceCard from "./ResourceCard.svelte";
    import type { Chapter, Resource } from "$lib/types/courses";

    interface Props {
        chapter: Chapter;
        onVideoClick: (video: Resource) => void;
    }

    let { chapter, onVideoClick }: Props = $props();
</script>

<div class="chapter-section">
    <h2 class="chapter-title">
        <span class="chapter-number">Chapter {chapter.number}</span>
        {chapter.name}
    </h2>

    <div class="chapter-resources">
        {#if chapter.worksheets.length > 0 || chapter.videos.length > 0}
            <!-- Worksheets -->
            {#if chapter.worksheets.length > 0}
                <div class="resource-group">
                    <h3 class="resource-group-title">
                        <span class="resource-icon">📄</span>
                        Worksheets
                    </h3>
                    <div class="resource-list">
                        {#each chapter.worksheets as worksheet}
                            <ResourceCard
                                title={worksheet.title}
                                description={worksheet.description}
                                link={worksheet.link}
                                type="worksheet"
                            />
                        {/each}
                    </div>
                </div>
            {/if}

            <!-- Videos -->
            {#if chapter.videos.length > 0}
                <div class="resource-group">
                    <h3 class="resource-group-title">
                        <span class="resource-icon">🎬</span>
                        Video Lessons
                    </h3>
                    <div class="resource-list">
                        {#each chapter.videos as video}
                            <ResourceCard
                                title={video.title}
                                duration={video.duration}
                                link={video.link}
                                type="video"
                                onclick={() => onVideoClick(video)}
                            />
                        {/each}
                    </div>
                </div>
            {/if}
        {:else}
            <div class="empty-state">
                <p>Resources coming soon!</p>
            </div>
        {/if}
    </div>
</div>

<style>
    .chapter-section {
        background: var(--color-bg-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-2xl);
        padding: var(--space-xl);
    }

    .chapter-title {
        font-size: var(--font-size-xl);
        font-weight: 700;
        margin-bottom: var(--space-lg);
        padding-bottom: var(--space-md);
        border-bottom: 1px solid var(--color-border);
        color: var(--color-text-primary);
    }

    .chapter-number {
        color: var(--color-accent);
        margin-right: var(--space-sm);
    }

    .chapter-resources {
        display: flex;
        flex-direction: column;
        gap: var(--space-lg);
    }

    .resource-group {
        background: var(--color-bg-secondary);
        border-radius: var(--radius-lg);
        padding: var(--space-lg);
    }

    .resource-group-title {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        font-size: var(--font-size-base);
        font-weight: 600;
        margin-bottom: var(--space-md);
        color: var(--color-text-secondary);
    }

    .resource-icon {
        font-size: 1.25rem;
    }

    .resource-list {
        display: flex;
        flex-direction: column;
        gap: var(--space-sm);
    }

    .empty-state {
        text-align: center;
        padding: var(--space-lg);
        color: var(--color-text-muted);
        font-style: italic;
    }

    @media (max-width: 768px) {
        .chapter-section {
            padding: var(--space-lg);
        }

        .resource-group {
            padding: var(--space-md);
        }
    }
</style>
