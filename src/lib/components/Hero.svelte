<script lang="ts">
</script>

<section class="hero">
    <div class="hero-bg"></div>
    <div class="container hero-content">
        <div class="hero-text">
            <p class="hero-greeting">Hi, I'm</p>
            <h1 class="hero-title">Mr. Wong</h1>
            <p class="hero-subtitle">
                Math Teacher & Software Developer based in British Columbia. I
                teach
                <strong>Math 10</strong> and <strong>Calculus 12</strong>, and
                build software on the side.
            </p>
            <div class="hero-cta">
                <a href="#courses" class="btn btn-primary">View Courses</a>
                <a href="#projects" class="btn btn-secondary">See Projects</a>
            </div>
        </div>
    </div>
</section>

<style>
    .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        padding: var(--space-4xl) 0;
    }

    .hero-bg {
        position: absolute;
        inset: 0;
        background: radial-gradient(
                circle at 20% 80%,
                rgba(59, 130, 246, 0.15) 0%,
                transparent 50%
            ),
            radial-gradient(
                circle at 80% 20%,
                rgba(139, 92, 246, 0.1) 0%,
                transparent 50%
            ),
            var(--gradient-bg);
        z-index: -1;
    }

    .hero-content {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hero-text {
        text-align: center;
        max-width: 700px;
    }

    .hero-greeting {
        font-size: var(--font-size-lg);
        color: var(--color-accent-light);
        font-weight: 500;
        margin-bottom: var(--space-sm);
    }

    .hero-title {
        font-size: clamp(2.5rem, 8vw, var(--font-size-5xl));
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: var(--space-lg);
        background: linear-gradient(
            135deg,
            var(--color-text-primary) 0%,
            var(--color-text-secondary) 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    .hero-subtitle {
        font-size: var(--font-size-lg);
        color: var(--color-text-secondary);
        line-height: 1.7;
        margin-bottom: var(--space-2xl);
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
    }

    .hero-subtitle strong {
        color: var(--color-accent-light);
    }

    .hero-cta {
        display: flex;
        gap: var(--space-md);
        flex-wrap: wrap;
        justify-content: center;
    }
</style>
