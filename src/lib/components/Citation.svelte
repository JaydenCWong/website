<script lang="ts">
    import { references } from "$lib/data/references";

    interface Props {
        id: string;
    }

    let { id }: Props = $props();

    const ref = references[id];
</script>

{#if ref}
    <a href="#{id}" class="citation" title="{ref.author} ({ref.year})"
        >[{ref.shortCite}]</a
    >
{:else}
    <span class="citation-error">[{id}?]</span>
{/if}

<style>
    .citation {
        color: var(--color-accent-light);
        text-decoration: none;
        font-size: 0.85em;
        vertical-align: super;
    }

    .citation:hover {
        text-decoration: underline;
    }

    .citation-error {
        color: #ef4444;
        font-size: 0.85em;
    }
</style>
