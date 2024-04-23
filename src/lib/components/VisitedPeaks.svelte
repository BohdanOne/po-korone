<script lang="ts">
	import type { Peak } from '$lib/types';
	import PeakCover from './PeakCover.svelte';

	let { peaks }: { peaks: Peak[] } = $props();
</script>

<section class="py-6">
	<h2 class="mb-4">Odwiedzone szczyty</h2>
	<div class="grid gap-4 max-w-full">
		{#each peaks as peak}
			{#if peak.covers}
				<a
					class="relative font-bold text-white [text-shadow:_0_1px_rgb(0_0_0_/_40%)]"
					href={`/${peak.slug}`}
				>
					<PeakCover covers={peak.covers} small />
					<h3 class="absolute bottom-2 left-2">{peak.name}</h3>
				</a>
			{/if}
		{/each}
	</div>
</section>

<style>
	div {
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	}
</style>
