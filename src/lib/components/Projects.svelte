<script lang="ts">
    const projects = [
        {
            title: "Financial Literacy Simulator",
            description:
                "Interactive budgeting tool for students to explore how career choices, housing, and transportation affect their monthly budget. Uses real 2025 BC tax rates, wage data, and living costs.",
            tags: ["SvelteKit", "TypeScript", "Chart.js", "Cloudflare Pages"],
            link: "https://financial-literacy.pages.dev",
            github: "https://github.com/JaydenCWong/Financial-Literacy-Simulator",
            image: null,
        },
        {
            title: "Ray Tracing Renderer",
            description:
                "A ray tracing renderer built from scratch in C++, following the 'Ray Tracing in One Weekend' tutorial. Implements realistic light simulation, materials, and reflections.",
            tags: ["C++", "Computer Graphics", "Ray Tracing"],
            link: null,
            github: "https://github.com/JaydenCWong/RayTracingInOneWeekend",
            image: "/random_scene.jpg",
        },
        {
            title: "JAAM Transit Tracker",
            description:
                "Android transit tracking app with live chat via WebSockets, Google Calendar & Maps integration, and Firebase push notifications for departure alerts.",
            tags: ["Android", "Java", "WebSockets", "Google APIs", "Firebase"],
            link: null,
            github: "https://github.com/JaydenCWong/JAAM-project",
            image: null,
        },
    ];
</script>

<section id="projects" class="section projects">
    <div class="container">
        <h2 class="section-title">Projects</h2>
        <p class="section-subtitle">
            Side projects and experiments in web development and software
            engineering.
        </p>

        <div class="projects-grid">
            {#each projects as project, i}
                <article class="project-card">
                    <div class="project-image">
                        {#if project.image}
                            <img
                                src={project.image}
                                alt={project.title}
                                class="project-img"
                            />
                        {:else}
                            <div class="project-placeholder">
                                <span>{project.title[0]}</span>
                            </div>
                        {/if}
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">{project.title}</h3>
                        <p class="project-description">{project.description}</p>
                        <div class="project-tags">
                            {#each project.tags as tag}
                                <span class="project-tag">{tag}</span>
                            {/each}
                        </div>
                        <div class="project-links">
                            {#if project.link}
                                <a
                                    href={project.link}
                                    class="project-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Demo
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                                    </svg>
                                </a>
                            {/if}
                            {#if project.github}
                                <a
                                    href={project.github}
                                    class="project-link {project.link
                                        ? 'github-link'
                                        : ''}"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                                        />
                                    </svg>
                                </a>
                            {/if}
                        </div>
                    </div>
                </article>
            {/each}
        </div>
    </div>
</section>

<style>
    .projects {
        background: var(--color-bg-primary);
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: var(--space-xl);
    }

    .project-card {
        background: var(--color-bg-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-xl);
        overflow: hidden;
        transition: all var(--transition-base);
    }

    .project-card:hover {
        border-color: var(--color-border-hover);
        transform: translateY(-4px);
        box-shadow: var(--shadow-lg);
    }

    .project-image {
        height: 200px;
        background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.2) 0%,
            rgba(139, 92, 246, 0.2) 100%
        );
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .project-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform var(--transition-base);
    }

    .project-card:hover .project-img {
        transform: scale(1.05);
    }

    .project-placeholder {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background: var(--gradient-accent);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--font-size-2xl);
        font-weight: 700;
        color: white;
    }

    .project-content {
        padding: var(--space-xl);
    }

    .project-title {
        font-size: var(--font-size-xl);
        font-weight: 700;
        margin-bottom: var(--space-sm);
    }

    .project-description {
        font-size: var(--font-size-sm);
        color: var(--color-text-secondary);
        line-height: 1.6;
        margin-bottom: var(--space-md);
    }

    .project-tags {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-xs);
        margin-bottom: var(--space-lg);
    }

    .project-tag {
        font-size: var(--font-size-xs);
        padding: var(--space-xs) var(--space-sm);
        background: rgba(255, 255, 255, 0.05);
        color: var(--color-text-muted);
        border-radius: var(--radius-sm);
    }

    .project-links {
        display: flex;
        gap: var(--space-lg);
        flex-wrap: wrap;
    }

    .project-link {
        display: inline-flex;
        align-items: center;
        gap: var(--space-xs);
        font-size: var(--font-size-sm);
        font-weight: 600;
        color: var(--color-accent);
        transition: gap var(--transition-fast);
    }

    .project-link:hover {
        gap: var(--space-sm);
    }

    .github-link {
        color: var(--color-text-secondary);
    }

    .github-link:hover {
        color: var(--color-text-primary);
    }
</style>
