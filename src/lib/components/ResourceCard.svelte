<script lang="ts">
    import { getYouTubeThumbnail } from "$lib/types/courses";

    interface Props {
        title: string;
        description?: string;
        duration?: string;
        link: string;
        type: "worksheet" | "video" | "external";
        onclick?: () => void;
        showThumbnail?: boolean;
    }

    let {
        title,
        description,
        duration,
        link,
        type,
        onclick,
        showThumbnail = true,
    }: Props = $props();

    const thumbnail =
        type === "video" && showThumbnail ? getYouTubeThumbnail(link) : null;
</script>

{#if type === "video" && onclick}
    <button type="button" class="resource-card video-card" {onclick}>
        <div class="resource-info">
            <h4 class="resource-title">{title}</h4>
            {#if duration}
                <p class="resource-meta">{duration}</p>
            {/if}
        </div>
        {#if thumbnail}
            <div class="thumbnail-container">
                <img
                    src={thumbnail}
                    alt={title}
                    class="thumbnail"
                    loading="lazy"
                />
                <div class="thumbnail-overlay">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                </div>
            </div>
        {:else}
            <div class="resource-action play-icon">
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
            </div>
        {/if}
    </button>
{:else}
    <a
        href={link}
        class="resource-card"
        target={type === "external" ? "_blank" : undefined}
        rel={type === "external" ? "noopener noreferrer" : undefined}
    >
        <div class="resource-info">
            <h4 class="resource-title">{title}</h4>
            {#if description}
                <p class="resource-description">{description}</p>
            {/if}
            {#if duration}
                <p class="resource-meta">{duration}</p>
            {/if}
        </div>
        <div class="resource-action">
            {#if type === "worksheet"}
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
            {:else if type === "external"}
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
{/if}

<style>
    .resource-card {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-md) var(--space-lg);
        background: var(--color-bg-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        transition: all var(--transition-base);
        text-decoration: none;
        color: inherit;
        gap: var(--space-md);
    }

    .resource-card:hover {
        border-color: var(--color-accent);
        background: rgba(59, 130, 246, 0.05);
    }

    .video-card {
        cursor: pointer;
        text-align: left;
        width: 100%;
        font-family: inherit;
    }

    .thumbnail-container {
        position: relative;
        height: 48px;
        aspect-ratio: 16 / 9;
        border-radius: var(--radius-sm);
        overflow: hidden;
        flex-shrink: 0;
    }

    .thumbnail {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform var(--transition-base);
    }

    .video-card:hover .thumbnail {
        transform: scale(1.1);
    }

    .thumbnail-overlay {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.4);
        color: white;
        opacity: 0;
        transition: opacity var(--transition-fast);
    }

    .video-card:hover .thumbnail-overlay {
        opacity: 1;
    }

    .resource-info {
        flex: 1;
        min-width: 0;
    }

    .resource-title {
        font-size: var(--font-size-base);
        font-weight: 600;
        margin-bottom: var(--space-xs);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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

    .play-icon {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(59, 130, 246, 0.1);
        border-radius: 50%;
        transition: all var(--transition-fast);
        flex-shrink: 0;
    }

    .video-card:hover .play-icon {
        background: var(--color-accent);
        color: white;
    }

    @media (max-width: 768px) {
        .resource-card {
            padding: var(--space-md);
        }

        .thumbnail-container {
            height: 40px;
        }
    }
</style>
