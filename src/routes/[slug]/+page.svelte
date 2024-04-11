<script lang="ts">
	import PeakHero from '$lib/components/PeakHero.svelte';
	import type { Peak } from '$lib/types';

	export let data;

	$: peak = data.peaks.find((peak) => peak.slug === data.slug) as Peak;
</script>

<div class="flex flex-col gap-4">
	<PeakHero name={peak.name} />
	<div>
		<p class="mb-2 flex flex-wrap justify-between max-w-md border-b-2 border-red-300">
			<span>Pasmo górskie: </span>
			<span class="font-bold">{peak.mountainRange}</span>
		</p>
		<p class="mb-2 flex flex-wrap justify-between max-w-md border-b-2 border-red-300">
			<span>Wysokość: </span>
			<span class="font-bold">{peak.elevation}m n.p.m.</span>
		</p>
		{#if peak.visitDate}
			<p class="mb-2 flex flex-wrap justify-between w-full max-w-md border-b-2 border-red-300">
				<span>Wejście w dniu: </span>
				<span class="font-bold">{peak.visitDate}</span>
			</p>
		{/if}
	</div>
</div>
