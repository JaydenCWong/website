#!/usr/bin/env node

/**
 * Blog CLI Tool
 * 
 * Usage:
 *   npm run blog new     - Create a new blog post
 *   npm run blog sync    - Sync references.bib to references.ts
 *   npm run blog help    - Show this help
 */

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

// ============================================
// PATHS
// ============================================

const PATHS = {
    bib: path.join(ROOT, 'src/lib/references.bib'),
    refs: path.join(ROOT, 'src/lib/data/references.ts'),
    listing: path.join(ROOT, 'src/routes/blog/+page.svelte'),
    blogDir: path.join(ROOT, 'src/routes/blog')
};

// ============================================
// UTILITIES
// ============================================

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(resolve => rl.question(question, resolve));
}

function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function getTodayDate() {
    return new Date().toISOString().split('T')[0];
}

// ============================================
// SYNC REFERENCES
// ============================================

function parseBibTeX(content) {
    const entries = [];
    const entryRegex = /@(\w+)\s*\{\s*([^,]+),([^@]*)\}/g;

    let match;
    while ((match = entryRegex.exec(content)) !== null) {
        const type = match[1].toLowerCase();
        const key = match[2].trim();
        const fieldsStr = match[3];
        const entry = { type, key, fields: {} };

        const fieldRegex = /(\w+)\s*=\s*[{"]([^}"]*)[}"]/g;
        let fieldMatch;
        while ((fieldMatch = fieldRegex.exec(fieldsStr)) !== null) {
            entry.fields[fieldMatch[1].toLowerCase()] = fieldMatch[2].trim();
        }
        entries.push(entry);
    }
    return entries;
}

function entryToReference(entry) {
    const { key, fields } = entry;
    const tsKey = key.replace(/[-_](\d{4}).*$/, '$1').replace(/[-_]/g, '');

    const author = fields.author || 'Unknown';
    const year = fields.year || 'n.d.';
    const authorLast = author.split(',')[0].split(' ').pop();

    const ref = {
        author,
        year: parseInt(year) || 0,
        title: fields.title || 'Untitled',
        shortCite: `${authorLast}, ${year}`
    };

    if (fields.booktitle) ref.booktitle = fields.booktitle;
    if (fields.pages) ref.pages = fields.pages.replace('--', '-');
    if (fields.publisher || fields.journal) ref.publisher = fields.publisher || fields.journal;
    if (fields.url) ref.url = fields.url;

    return { key: tsKey, ref };
}

function generateReferencesTS(references) {
    let content = `// Auto-generated from references.bib
// Run: npm run blog sync
// Do NOT edit manually - edit references.bib instead

export interface Reference {
    author: string;
    year: number;
    title: string;
    shortCite: string;
    booktitle?: string;
    pages?: string;
    publisher?: string;
    url?: string;
}

export const references: Record<string, Reference> = {\n`;

    for (const { key, ref } of references) {
        content += `    ${key}: {\n`;
        content += `        author: "${ref.author}",\n`;
        content += `        year: ${ref.year},\n`;
        content += `        title: "${ref.title}",\n`;
        content += `        shortCite: "${ref.shortCite}"`;
        if (ref.booktitle) content += `,\n        booktitle: "${ref.booktitle}"`;
        if (ref.pages) content += `,\n        pages: "${ref.pages}"`;
        if (ref.publisher) content += `,\n        publisher: "${ref.publisher}"`;
        if (ref.url) content += `,\n        url: "${ref.url}"`;
        content += `\n    },\n`;
    }
    content += `};\n`;
    return content;
}

function syncReferences() {
    console.log('\n📚 Syncing references.bib → references.ts\n');

    if (!fs.existsSync(PATHS.bib)) {
        console.log(`❌ Error: ${PATHS.bib} not found`);
        return false;
    }

    const bibContent = fs.readFileSync(PATHS.bib, 'utf-8');
    const entries = parseBibTeX(bibContent);
    console.log(`Found ${entries.length} entries`);

    const references = entries.map(entryToReference);
    fs.writeFileSync(PATHS.refs, generateReferencesTS(references));

    console.log('✅ References synced:');
    references.forEach(({ key, ref }) => console.log(`   • ${key}: ${ref.shortCite}`));
    return true;
}

// ============================================
// NEW POST
// ============================================

const POST_TEMPLATE = (m) => `<script context="module">
    export const metadata = {
        title: "${m.title}",
        date: "${m.date}",
        excerpt: "${m.excerpt}",
        tags: [${m.tags.map(t => `"${t}"`).join(', ')}]
    };
</script>

<script lang="ts">
    import Citation from '$lib/components/Citation.svelte';
    import References from '$lib/components/References.svelte';
    
    function formatDate(dateString: string): string {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric'
        });
    }
</script>

<svelte:head>
    <title>{metadata.title} | Mr. Wong's Blog</title>
    <meta name="description" content={metadata.excerpt} />
</svelte:head>

<article class="blog-post">
    <div class="container">
        <header class="post-header">
            <a href="/blog" class="back-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Blog
            </a>
            <div class="post-meta">
                <time datetime={metadata.date}>{formatDate(metadata.date)}</time>
                <div class="post-tags">
                    {#each metadata.tags as tag}
                        <span class="tag">{tag}</span>
                    {/each}
                </div>
            </div>
            <h1 class="post-title">{metadata.title}</h1>
        </header>
        
        <div class="post-content">

# ${m.title}

<!-- Write your content here -->

        </div>
        
        <footer class="post-footer">
            <a href="/blog" class="back-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Blog
            </a>
        </footer>
    </div>
</article>

<style>
    .blog-post { min-height: calc(100vh - 72px); padding: var(--space-4xl) 0; background: var(--color-bg-primary); }
    .blog-post .container { max-width: 800px; }
    .back-link { display: inline-flex; align-items: center; gap: var(--space-sm); color: var(--color-text-secondary); font-size: var(--font-size-sm); font-weight: 500; margin-bottom: var(--space-xl); transition: color var(--transition-fast); }
    .back-link:hover { color: var(--color-accent); }
    .post-header { margin-bottom: var(--space-2xl); }
    .post-meta { display: flex; align-items: center; gap: var(--space-md); margin-bottom: var(--space-lg); flex-wrap: wrap; }
    .post-meta time { font-size: var(--font-size-sm); color: var(--color-text-muted); }
    .post-tags { display: flex; gap: var(--space-xs); flex-wrap: wrap; }
    .tag { font-size: var(--font-size-xs); padding: var(--space-xs) var(--space-sm); background: rgba(59, 130, 246, 0.15); color: var(--color-accent-light); border-radius: var(--radius-sm); font-weight: 500; }
    .post-title { font-size: var(--font-size-4xl); font-weight: 700; line-height: 1.2; color: var(--color-text-primary); }
    .post-content { color: var(--color-text-secondary); line-height: 1.8; font-size: var(--font-size-lg); }
    .post-content :global(h1), .post-content :global(h2), .post-content :global(h3) { color: var(--color-text-primary); margin-top: var(--space-2xl); margin-bottom: var(--space-md); font-weight: 600; }
    .post-content :global(h1) { font-size: var(--font-size-3xl); }
    .post-content :global(h2) { font-size: var(--font-size-2xl); }
    .post-content :global(h3) { font-size: var(--font-size-xl); }
    .post-content :global(p) { margin-bottom: var(--space-lg); }
    .post-content :global(a) { color: var(--color-accent-light); text-decoration: underline; }
    .post-content :global(ul), .post-content :global(ol) { margin-bottom: var(--space-lg); padding-left: var(--space-xl); }
    .post-content :global(li) { margin-bottom: var(--space-sm); }
    .post-content :global(blockquote) { border-left: 3px solid var(--color-accent); background: rgba(59, 130, 246, 0.1); padding: var(--space-md) var(--space-lg); margin: var(--space-lg) 0; border-radius: 0 var(--radius-lg) var(--radius-lg) 0; font-style: italic; }
    .post-content :global(strong) { color: var(--color-text-primary); font-weight: 600; }
    .post-content :global(em) { font-style: italic; }
    .post-content :global(hr) { border: none; border-top: 1px solid var(--color-border); margin: var(--space-2xl) 0; }
    .post-footer { margin-top: var(--space-4xl); padding-top: var(--space-xl); border-top: 1px solid var(--color-border); }
</style>
`;

function addPostToListing(metadata) {
    let content = fs.readFileSync(PATHS.listing, 'utf-8');

    const newPost = `        {
            slug: "${metadata.slug}",
            title: "${metadata.title}",
            date: "${metadata.date}",
            excerpt: "${metadata.excerpt}",
            tags: [${metadata.tags.map(t => `"${t}"`).join(', ')}],
            content: "${metadata.searchKeywords || ''}",
        },`;

    const insertPoint = content.indexOf('const posts = [') + 'const posts = ['.length;
    content = content.slice(0, insertPoint) + '\n' + newPost + content.slice(insertPoint);
    fs.writeFileSync(PATHS.listing, content);
}

async function newPost() {
    console.log('\n📝 New Blog Post\n');
    console.log('─'.repeat(40) + '\n');

    const title = await ask('Title: ');
    const suggestedSlug = slugify(title);
    const slugInput = await ask(`Slug [${suggestedSlug}]: `);
    const slug = slugInput.trim() || suggestedSlug;
    const excerpt = await ask('Excerpt: ');
    const tagsInput = await ask('Tags (comma-separated): ');
    const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);
    const searchKeywords = await ask('Search keywords (optional): ');

    const metadata = { title, slug, excerpt, tags, date: getTodayDate(), searchKeywords };

    const postDir = path.join(PATHS.blogDir, slug);
    if (fs.existsSync(postDir)) {
        console.log(`\n❌ Directory exists: ${slug}`);
        rl.close();
        return;
    }

    fs.mkdirSync(postDir, { recursive: true });
    fs.writeFileSync(path.join(postDir, '+page.md'), POST_TEMPLATE(metadata));
    addPostToListing(metadata);

    console.log(`\n✅ Created: src/routes/blog/${slug}/+page.md`);
    console.log(`✅ Added to blog listing`);
    console.log(`\n🎉 Preview at: http://localhost:5173/blog/${slug}\n`);

    rl.close();
}

// ============================================
// MAIN
// ============================================

function showHelp() {
    console.log(`
📚 Blog CLI

Usage:
  npm run blog new     Create a new blog post
  npm run blog sync    Sync references.bib → references.ts
  npm run blog help    Show this help

Examples:
  npm run blog new     # Interactive post creation
  npm run blog sync    # After adding to references.bib
`);
}

const command = process.argv[2];

switch (command) {
    case 'new':
        newPost();
        break;
    case 'sync':
        syncReferences();
        rl.close();
        break;
    case 'help':
    case '--help':
    case '-h':
    case undefined:
        showHelp();
        rl.close();
        break;
    default:
        console.log(`Unknown command: ${command}`);
        showHelp();
        rl.close();
}
