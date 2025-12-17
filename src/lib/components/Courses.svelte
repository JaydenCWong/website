<script lang="ts">
    const courses = [
        {
            name: "Math 10",
            description:
                "Foundations of Mathematics 10 - BC Curriculum. Building core mathematical skills in algebra, geometry, and number sense.",
            href: "/courses/math-10",
            icon: "📐",
            topics: [
                "Measurement",
                "Trigonometry",
                "Factors and Products",
                "Roots and Powers",
                "Relations and Functions",
                "Linear Functions",
                "Systems of Linear Equations",
            ],
        },
        {
            name: "Calculus 12",
            description:
                "Pre-Calculus and Calculus 12 - BC Curriculum. Advanced mathematics including limits, derivatives, and integrals.",
            href: "/courses/calc-12",
            icon: "∫",
            topics: [
                "Limits and Derivatives",
                "Differentiation Rules",
                "Applications of Differentiation",
                "Integrals",
                "Applications of Integration",
                "Techniques of Integration",
                "Differential Equations",
            ],
        },
    ];
</script>

<section id="courses" class="section courses">
    <div class="container">
        <h2 class="section-title">Courses</h2>
        <p class="section-subtitle">
            Access course materials, worksheets, and video lessons for my
            classes.
        </p>

        <div class="courses-grid">
            {#each courses as course}
                <a href={course.href} class="course-card">
                    <div class="course-icon">{course.icon}</div>
                    <h3 class="course-name">{course.name}</h3>
                    <p class="course-description">{course.description}</p>
                    <div class="course-topics">
                        {#each course.topics as topic}
                            <span class="topic-tag">{topic}</span>
                        {/each}
                    </div>
                    <div class="course-cta">
                        <span>View Resources</span>
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
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>

<style>
    .courses {
        background: var(--color-bg-secondary);
    }

    .courses-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
        gap: var(--space-xl);
    }

    .course-card {
        background: var(--gradient-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-2xl);
        padding: var(--space-2xl);
        display: flex;
        flex-direction: column;
        transition: all var(--transition-base);
        position: relative;
        overflow: hidden;
    }

    .course-card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: var(--gradient-accent);
        opacity: 0;
        transition: opacity var(--transition-base);
    }

    .course-card:hover {
        border-color: var(--color-accent);
        transform: translateY(-8px);
        box-shadow: var(--shadow-glow);
    }

    .course-card:hover::before {
        opacity: 1;
    }

    .course-icon {
        font-size: 3rem;
        margin-bottom: var(--space-lg);
        width: 72px;
        height: 72px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(59, 130, 246, 0.1);
        border-radius: var(--radius-lg);
    }

    .course-name {
        font-size: var(--font-size-2xl);
        font-weight: 700;
        margin-bottom: var(--space-md);
        color: var(--color-text-primary);
    }

    .course-description {
        font-size: var(--font-size-base);
        color: var(--color-text-secondary);
        line-height: 1.6;
        margin-bottom: var(--space-lg);
        flex-grow: 1;
    }

    .course-topics {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-sm);
        margin-bottom: var(--space-xl);
    }

    .topic-tag {
        font-size: var(--font-size-xs);
        padding: var(--space-xs) var(--space-sm);
        background: rgba(59, 130, 246, 0.15);
        color: var(--color-accent-light);
        border-radius: var(--radius-sm);
        font-weight: 500;
    }

    .course-cta {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        font-weight: 600;
        color: var(--color-accent);
        transition: gap var(--transition-fast);
    }

    .course-card:hover .course-cta {
        gap: var(--space-md);
    }

    @media (max-width: 768px) {
        .courses-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
