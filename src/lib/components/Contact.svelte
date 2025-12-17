<script lang="ts">
    let status = $state<"idle" | "sending" | "success" | "error">("idle");
    let errorMessage = $state("");

    async function handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        status = "sending";

        try {
            const response = await fetch("https://formspree.io/f/xblnvelw", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                status = "success";
                form.reset();
            } else {
                const data = await response.json();
                errorMessage =
                    data.errors
                        ?.map((e: { message: string }) => e.message)
                        .join(", ") || "Something went wrong";
                status = "error";
            }
        } catch {
            errorMessage = "Network error. Please try again.";
            status = "error";
        }
    }
</script>

<section id="contact" class="section contact">
    <div class="container">
        <div class="contact-content">
            <div class="contact-info">
                <h2 class="section-title">Get in Touch</h2>
                <p class="section-subtitle">
                    Have a question about my courses or interested in
                    collaborating? Send me a message!
                </p>
            </div>

            {#if status === "success"}
                <div class="success-message">
                    <div class="success-icon">✓</div>
                    <h3>Message Sent!</h3>
                    <p>Thanks for reaching out. I'll get back to you soon.</p>
                    <button
                        class="btn btn-secondary"
                        onclick={() => (status = "idle")}
                    >
                        Send Another Message
                    </button>
                </div>
            {:else}
                <form class="contact-form" onsubmit={handleSubmit}>
                    <!-- Honeypot spam protection - hidden from users, bots will fill it -->
                    <input type="text" name="_gotcha" style="display:none" />

                    <div class="form-group">
                        <label for="name" class="form-label">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            class="form-input"
                            placeholder="Your name"
                            required
                            disabled={status === "sending"}
                        />
                    </div>
                    <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            class="form-input"
                            placeholder="your@email.com"
                            required
                            disabled={status === "sending"}
                        />
                    </div>
                    <div class="form-group">
                        <label for="message" class="form-label">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            class="form-input form-textarea"
                            placeholder="Your message..."
                            rows="5"
                            required
                            disabled={status === "sending"}
                        ></textarea>
                    </div>

                    {#if status === "error"}
                        <div class="error-message">
                            {errorMessage}
                        </div>
                    {/if}

                    <button
                        type="submit"
                        class="btn btn-primary form-submit"
                        disabled={status === "sending"}
                    >
                        {status === "sending" ? "Sending..." : "Send Message"}
                    </button>
                </form>
            {/if}
        </div>
    </div>
</section>

<style>
    .contact {
        background: var(--color-bg-primary);
    }

    .contact-content {
        display: grid;
        grid-template-columns: 1fr 1.5fr;
        gap: var(--space-4xl);
        align-items: start;
    }

    .contact-form {
        background: var(--color-bg-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-2xl);
        padding: var(--space-2xl);
    }

    .form-group {
        margin-bottom: var(--space-lg);
    }

    .form-label {
        display: block;
        font-size: var(--font-size-sm);
        font-weight: 600;
        color: var(--color-text-secondary);
        margin-bottom: var(--space-sm);
    }

    .form-input {
        width: 100%;
        padding: var(--space-md);
        font-size: var(--font-size-base);
        font-family: inherit;
        background: var(--color-bg-secondary);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        color: var(--color-text-primary);
        transition: all var(--transition-fast);
    }

    .form-input:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .form-input::placeholder {
        color: var(--color-text-muted);
    }

    .form-input:focus {
        outline: none;
        border-color: var(--color-accent);
        box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .form-textarea {
        resize: vertical;
        min-height: 120px;
    }

    .form-submit {
        width: 100%;
    }

    .form-submit:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    .success-message {
        background: var(--color-bg-card);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-2xl);
        padding: var(--space-3xl);
        text-align: center;
    }

    .success-icon {
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto var(--space-lg);
        font-size: 1.5rem;
        color: white;
    }

    .success-message h3 {
        font-size: var(--font-size-xl);
        margin-bottom: var(--space-sm);
    }

    .success-message p {
        color: var(--color-text-secondary);
        margin-bottom: var(--space-xl);
    }

    .error-message {
        background: rgba(239, 68, 68, 0.1);
        border: 1px solid rgba(239, 68, 68, 0.3);
        color: #ef4444;
        padding: var(--space-md);
        border-radius: var(--radius-md);
        margin-bottom: var(--space-lg);
        font-size: var(--font-size-sm);
    }

    @media (max-width: 768px) {
        .contact-content {
            grid-template-columns: 1fr;
            gap: var(--space-2xl);
        }
    }
</style>
