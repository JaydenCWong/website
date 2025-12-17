import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';

// Create a custom highlighter for mdsvex
const highlighter = await createHighlighter({
	themes: ['github-dark'],
	langs: ['javascript', 'typescript', 'python', 'html', 'css', 'svelte', 'json', 'bash', 'markdown']
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],

	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			highlight: {
				highlighter: (code, lang) => {
					const html = highlighter.codeToHtml(code, {
						lang: lang || 'text',
						theme: 'github-dark'
					});
					return `{@html \`${html.replace(/`/g, '\\`')}\`}`;
				}
			}
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};

export default config;
