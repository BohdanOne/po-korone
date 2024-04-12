<script lang="ts">
	import type { Map } from 'leaflet';
	import MapContainer from '$lib/components/maps/MapContainer.svelte';
	import TileLayer from '$lib/components/maps/TileLayer.svelte';
	import Marker from '$lib/components/maps/Marker.svelte';

	export let data;
	export let map: Map;
</script>

<MapContainer
	bind:map
	class="w-full h-full"
	options={{
		center: [50, 19.030278],
		zoom: 6
	}}
	title="Mapa wszystkich szczytów"
>
	<TileLayer {map} />
	{#each data.peaks as peak}
		<Marker {map} location={peak.location} name={peak.name} slug={peak.slug} />
	{/each}
</MapContainer>
