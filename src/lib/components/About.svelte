<script lang="ts">
    const skills = [
        "TypeScript",
        "JavaScript",
        "Java",
        "C++",
        "Python",
        "SvelteKit",
        "Android",
        "Chart.js",
        "Firebase",
        "Git",
    ];
</script>

<section id="about" class="section about">
    <div class="container">
        <div class="about-content">
            <div class="about-text">
                <h2 class="section-title">About Me</h2>
                <div class="about-description">
                    <p>
                        Hi! I'm <strong>Mr. Wong</strong>, a math/computer
                        science teacher candidate and software developer based
                        in British Columbia, Canada.
                    </p>
                    <p>
                        I currently teach <strong>Math 10</strong> and
                        <strong>Calculus 12</strong>
                        following the BC curriculum. My goal is to make mathematics
                        accessible and engaging for all students through clear explanations
                        and practical examples.
                    </p>
                    <p>
                        Outside of teaching, I enjoy building software projects
                        and exploring new technologies. Feel free to explore my
                        courses or check out my coding projects!
                    </p>
                </div>
                <a href="#contact" class="btn btn-primary">Get in Touch</a>
            </div>
            <div class="about-skills">
                <h3 class="skills-title">Technical Skills</h3>
                <div class="skills-grid">
                    {#each skills as skill}
                        <div class="skill-item">{skill}</div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .about {
        background: var(--color-bg-secondary);
    }

    .about-content {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: var(--space-4xl);
        align-items: start;
    }

    .about-description {
        margin-bottom: var(--space-2xl);
    }

    .about-description p {
        font-size: var(--font-size-lg);
        color: var(--color-text-secondary);
        line-height: 1.8;
        margin-bottom: var(--space-md);
    }

    .about-description strong {
        color: var(--color-text-primary);
    }

    .skills-title {
        font-size: var(--font-size-xl);
        font-weight: 600;
        margin-bottom: var(--space-lg);
        color: var(--color-text-primary);
    }

    .skills-grid {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-sm);
    }

    .skill-item {
        padding: var(--space-sm) var(--space-md);
        background: rgba(59, 130, 246, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.2);
        border-radius: var(--radius-md);
        font-size: var(--font-size-sm);
        font-weight: 500;
        color: var(--color-accent-light);
        transition: all var(--transition-fast);
    }

    .skill-item:hover {
        background: rgba(59, 130, 246, 0.2);
        border-color: var(--color-accent);
    }

    @media (max-width: 768px) {
        .about-content {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
        }
    }
</style>
