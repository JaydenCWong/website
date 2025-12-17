<script lang="ts">
    interface Props {
        video: { title: string; link: string } | null;
        onclose: () => void;
    }

    let { video, onclose }: Props = $props();

    // Extract YouTube video ID from URL
    function getYouTubeId(url: string): string | null {
        const regex =
            /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === "Escape") {
            onclose();
        }
    }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if video}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
        class="video-modal-overlay"
        onclick={onclose}
        onkeydown={(e) => e.key === "Escape" && onclose()}
        role="dialog"
        aria-modal="true"
        aria-label="Video player"
        tabindex="-1"
    >
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div class="video-modal" onclick={(e) => e.stopPropagation()}>
            <div class="video-modal-header">
                <h3 class="video-modal-title">{video.title}</h3>
                <button
                    type="button"
                    class="video-modal-close"
                    onclick={onclose}
                    aria-label="Close video"
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>
            <div class="video-modal-content">
                {#if getYouTubeId(video.link)}
                    <iframe
                        src="https://www.youtube.com/embed/{getYouTubeId(
                            video.link,
                        )}?autoplay=1"
                        title={video.title}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                {:else}
                    <div class="video-fallback">
                        <p>Video not available for embed.</p>
                        <a
                            href={video.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="btn btn-primary"
                        >
                            Open in YouTube
                        </a>
                    </div>
                {/if}
            </div>
        </div>
    </div>
{/if}

<style>
    .video-modal-overlay {
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        padding: var(--space-lg);
        animation: fadeIn 0.2s ease-out;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .video-modal {
        background: var(--color-bg-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-xl);
        width: 100%;
        max-width: 900px;
        overflow: hidden;
        animation: slideUp 0.3s ease-out;
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .video-modal-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-md) var(--space-lg);
        border-bottom: 1px solid var(--color-border);
        gap: var(--space-md);
    }

    .video-modal-title {
        font-size: var(--font-size-base);
        font-weight: 600;
        color: var(--color-text-primary);
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .video-modal-close {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border: none;
        background: transparent;
        color: var(--color-text-secondary);
        cursor: pointer;
        border-radius: var(--radius-md);
        transition: all var(--transition-fast);
        flex-shrink: 0;
    }

    .video-modal-close:hover {
        background: rgba(255, 255, 255, 0.1);
        color: var(--color-text-primary);
    }

    .video-modal-content {
        position: relative;
        width: 100%;
        padding-top: 56.25%; /* 16:9 aspect ratio */
    }

    .video-modal-content iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
    }

    .video-fallback {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--space-lg);
        background: var(--color-bg-secondary);
        color: var(--color-text-secondary);
    }

    @media (max-width: 768px) {
        .video-modal-overlay {
            padding: var(--space-sm);
        }

        .video-modal-header {
            padding: var(--space-sm) var(--space-md);
        }

        .video-modal-title {
            font-size: var(--font-size-sm);
        }
    }
</style>
