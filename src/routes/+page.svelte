<script lang="ts">
	import type { Map } from 'leaflet';
	import { onDestroy, onMount } from 'svelte';

	export let data;

	let mapContainer: HTMLDivElement;
	let map: Map;

	onMount(async () => {
		const { Map, tileLayer, marker } = await import('leaflet');

		map = new Map(mapContainer, {
			center: [50, 19.030278],
			zoom: 6
		});

		tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);

		data.peaks.forEach((peak) => {
			marker([peak.location[0], peak.location[1]]).addTo(map).bindPopup(peak.name);
		});
	});

	onDestroy(() => {
		map?.remove();
	});
</script>

<div bind:this={mapContainer} style="height:100%; width:100%;">
	{#if map}
		<slot />
	{/if}
</div>
