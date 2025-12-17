<script lang="ts">
    import { references } from "$lib/data/references";

    interface Props {
        ids: string[];
    }

    let { ids }: Props = $props();

    const refs = $derived(
        ids.map((id) => ({ id, ...references[id] })).filter((r) => r.author),
    );
</script>

{#if refs.length > 0}
    <section class="references">
        <h2>References</h2>
        <ol>
            {#each refs as ref}
                <li id={ref.id}>
                    {ref.author} ({ref.year}).
                    <em>{ref.title}</em>.
                    {#if ref.booktitle}
                        In {ref.booktitle}
                        {#if ref.pages}
                            (pp. {ref.pages}){/if}.
                    {/if}
                    {#if ref.publisher}
                        {ref.publisher}.
                    {/if}
                    {#if ref.url}
                        <a
                            href={ref.url}
                            target="_blank"
                            rel="noopener noreferrer">Link</a
                        >
                    {/if}
                </li>
            {/each}
        </ol>
    </section>
{/if}

<style>
    .references {
        margin-top: var(--space-3xl);
        padding-top: var(--space-xl);
        border-top: 1px solid var(--color-border);
    }

    .references h2 {
        font-size: var(--font-size-xl);
        color: var(--color-text-primary);
        margin-bottom: var(--space-lg);
    }

    .references ol {
        list-style: decimal;
        padding-left: var(--space-xl);
    }

    .references li {
        margin-bottom: var(--space-md);
        color: var(--color-text-secondary);
        font-size: var(--font-size-sm);
        line-height: 1.6;
    }

    .references em {
        font-style: italic;
    }

    .references a {
        color: var(--color-accent-light);
    }
</style>
