<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type { Map, MapOptions } from 'leaflet';

	let tailwindClass: string = '';
	export { tailwindClass as class };
	export let options: MapOptions;
	export let title: string;
	export let map: Map;

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
		<slot />
	{/if}
</div>
