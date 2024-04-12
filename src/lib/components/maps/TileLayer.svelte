<script lang="ts">
	import type { Map, TileLayer } from 'leaflet';
	import { onDestroy, onMount } from 'svelte';

	export let map: Map;

	const options = {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	};

	const url = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';

	let leafletTileLayer: TileLayer;

	onMount(async () => {
		const { tileLayer } = await import('leaflet');

		leafletTileLayer = tileLayer(url, options).addTo(map);
	});

	onDestroy(() => {
		leafletTileLayer?.remove();
	});
</script>
