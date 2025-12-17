<script lang="ts">
	import "../app.css";
	import { page } from "$app/state";
	import { browser } from "$app/environment";
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	let { children } = $props();
	let mobileMenuOpen = $state(false);
	let theme = $state<"dark" | "light">("dark");
	let showScrollHint = $state(false);

	// Initialize theme from localStorage or system preference
	$effect(() => {
		if (browser) {
			const stored = localStorage.getItem("theme");
			if (stored === "light" || stored === "dark") {
				theme = stored;
			} else if (
				window.matchMedia("(prefers-color-scheme: light)").matches
			) {
				theme = "light";
			}
			document.documentElement.setAttribute("data-theme", theme);
		}
	});

	// Show scroll hint only on homepage for first-time visitors (expires after 3 months)
	onMount(() => {
		if (!browser) return;

		const isHomePage = window.location.pathname === "/";
		const THREE_MONTHS_MS = 90 * 24 * 60 * 60 * 1000; // 90 days in milliseconds

		// Check if visit timestamp exists and is within 3 months
		const lastVisit = localStorage.getItem("lastVisit");
		const hasVisitedRecently =
			lastVisit && Date.now() - parseInt(lastVisit) < THREE_MONTHS_MS;

		if (isHomePage && !hasVisitedRecently) {
			showScrollHint = true;
			localStorage.setItem("lastVisit", Date.now().toString());

			// Hide after 30s
			const timeout = setTimeout(() => {
				showScrollHint = false;
			}, 30000);

			// Hide on scroll
			const handleScroll = () => {
				showScrollHint = false;
				window.removeEventListener("scroll", handleScroll);
			};

			window.addEventListener("scroll", handleScroll, { passive: true });

			return () => {
				clearTimeout(timeout);
				window.removeEventListener("scroll", handleScroll);
			};
		}
	});

	const navLinks = [
		{ href: "/", label: "Home" },
		{ href: "/#courses", label: "Courses" },
		{ href: "/#projects", label: "Projects" },
		{ href: "/#about", label: "About" },
		{ href: "/#contact", label: "Contact" },
		// TODO: Update with your actual Blogger URL when created
		{
			href: "https://mrwongblog.blogspot.com",
			label: "Blog",
			external: true,
		},
	];

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	function toggleTheme() {
		theme = theme === "dark" ? "light" : "dark";
		if (browser) {
			localStorage.setItem("theme", theme);
			document.documentElement.setAttribute("data-theme", theme);
		}
	}
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<meta
		name="description"
		content="Mr. Wong - Math Teacher & Software Developer based in British Columbia. Teaching Math 10 and Calculus 12 with clear explanations and practical examples."
	/>
	<meta name="author" content="Mr. Wong" />
	<meta name="theme-color" content="#3b82f6" />

	<!-- Open Graph / Facebook / LinkedIn / Discord -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Mr. Wong | Math Teacher & Developer" />
	<meta
		property="og:description"
		content="Math Teacher & Software Developer based in British Columbia. Access course materials, worksheets, and video lessons for Math 10 and Calculus 12."
	/>
	<meta property="og:site_name" content="Mr. Wong" />
	<meta property="og:url" content="https://jaydenwong.ca" />
	<meta property="og:image" content="https://jaydenwong.ca/og-preview.png" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Mr. Wong | Math Teacher & Developer" />
	<meta
		name="twitter:description"
		content="Math Teacher & Software Developer based in British Columbia. Access course materials for Math 10 and Calculus 12."
	/>
	<meta name="twitter:image" content="https://jaydenwong.ca/og-preview.png" />
</svelte:head>

<nav class="nav">
	<div class="container nav-content">
		<a href="/" class="nav-logo">
			<span class="nav-logo-text">Mr. Wong</span>
		</a>

		<ul class="nav-links" class:open={mobileMenuOpen}>
			{#each navLinks as link}
				<li>
					<a
						href={link.href}
						class="nav-link"
						class:active={page.url.pathname === link.href}
						onclick={closeMobileMenu}
						target={link.external ? "_blank" : undefined}
						rel={link.external ? "noopener noreferrer" : undefined}
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<div class="nav-actions">
			<button
				class="theme-toggle"
				onclick={toggleTheme}
				aria-label="Toggle theme"
			>
				{#if theme === "dark"}
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<circle cx="12" cy="12" r="5" />
						<line x1="12" y1="1" x2="12" y2="3" />
						<line x1="12" y1="21" x2="12" y2="23" />
						<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
						<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
						<line x1="1" y1="12" x2="3" y2="12" />
						<line x1="21" y1="12" x2="23" y2="12" />
						<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
						<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
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
						<path
							d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
						/>
					</svg>
				{/if}
			</button>

			<button
				class="nav-toggle"
				onclick={toggleMobileMenu}
				aria-label="Toggle navigation"
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
	</div>
</nav>

<main>
	{@render children()}
</main>

{#if showScrollHint}
	<div class="scroll-hint" transition:fade={{ duration: 500 }}>
		<span>Scroll</span>
		<div class="scroll-indicator"></div>
	</div>
{/if}

<style>
	main {
		padding-top: 72px;
		min-height: 100vh;
	}

	.nav-actions {
		display: flex;
		align-items: center;
		gap: var(--space-md);
	}

	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border: none;
		border-radius: var(--radius-md);
		background: rgba(255, 255, 255, 0.05);
		color: var(--color-text-secondary);
		cursor: pointer;
		transition: all var(--transition-fast);
	}

	.theme-toggle:hover {
		background: rgba(255, 255, 255, 0.1);
		color: var(--color-accent);
	}

	.scroll-hint {
		position: fixed;
		bottom: var(--space-2xl);
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-sm);
		color: var(--color-text-primary);
		font-size: var(--font-size-sm);
		font-weight: 500;
		z-index: 100;
		pointer-events: none;
		padding: var(--space-md) var(--space-lg);
		background: var(--color-bg-glass);
		backdrop-filter: blur(12px);
		border: 1px solid var(--color-border-hover);
		border-radius: var(--radius-xl);
		box-shadow:
			var(--shadow-lg),
			0 0 20px rgba(59, 130, 246, 0.15);
	}

	.scroll-indicator {
		width: 24px;
		height: 40px;
		border: 2px solid var(--color-border-hover);
		border-radius: 12px;
		position: relative;
		background: var(--color-bg-glass);
		backdrop-filter: blur(8px);
	}

	.scroll-indicator::before {
		content: "";
		position: absolute;
		top: 8px;
		left: 50%;
		transform: translateX(-50%);
		width: 4px;
		height: 8px;
		background: var(--color-accent);
		border-radius: 2px;
		animation: scroll 2s infinite;
	}

	@keyframes scroll {
		0% {
			top: 8px;
			opacity: 1;
		}
		100% {
			top: 24px;
			opacity: 0;
		}
	}
</style>
