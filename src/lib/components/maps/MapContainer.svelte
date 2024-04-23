<script lang="ts">
	import { onDestroy, onMount, type Snippet } from 'svelte';
	import type { Map, MapOptions } from 'leaflet';

	let {
		class: tailwindClass,
		options,
		title,
		map = $bindable(),
		children
	}: { class: string; options: MapOptions; title: string; map: Map; children: Snippet } = $props();

	let mapContainer: HTMLDivElement;

	onMount(async () => {
		const { Map } = await import('leaflet');

		map = new Map(mapContainer, options);
	});

	onDestroy(() => {
		map?.remove();
	});
</script>

<div bind:this={mapContainer} class={tailwindClass} {title}>
	{#if map}
		{@render children()}
	{/if}
</div>
