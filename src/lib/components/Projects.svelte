<script lang="ts">
    const projects = [
        {
            title: "Project 1",
            description:
                "A brief description of this coding project and the technologies used.",
            tags: ["SvelteKit", "TypeScript", "CSS"],
            link: "#",
            image: null,
        },
        {
            title: "Project 2",
            description:
                "A brief description of this coding project and the technologies used.",
            tags: ["Python", "Data Analysis"],
            link: "#",
            image: null,
        },
        {
            title: "Project 3",
            description:
                "A brief description of this coding project and the technologies used.",
            tags: ["React", "Node.js"],
            link: "#",
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
                        <div class="project-placeholder">
                            <span>{project.title[0]}</span>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">{project.title}</h3>
                        <p class="project-description">{project.description}</p>
                        <div class="project-tags">
                            {#each project.tags as tag}
                                <span class="project-tag">{tag}</span>
                            {/each}
                        </div>
                        <a href={project.link} class="project-link">
                            View Project
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
</style>
