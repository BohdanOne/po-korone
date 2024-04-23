<script lang="ts">
	import { onMount } from 'svelte';
	import type { Map } from 'leaflet';
	import type { Peak } from '$lib/types';
	import iconSvg from '$lib/assets/map-marker.svg';

	let {
		map,
		location,
		name,
		slug
	}: { map: Map; location: Peak['location']; name: Peak['name']; slug: Peak['slug'] } = $props();

	onMount(async () => {
		const { marker, icon } = await import('leaflet');

		const markerIcon = icon({
			iconUrl: iconSvg,
			iconSize: [41, 41],
			iconAnchor: [20, 41],
			popupAnchor: [1, -34],
			tooltipAnchor: [16, -28]
		});

		marker(location, { title: name, icon: markerIcon })
			.addTo(map)
			.bindPopup(`<a href="/${slug}" aria-label="Przejdź do strony szczytu">${name}</a>`);
	});
</script>
