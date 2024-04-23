<script lang="ts">
	import type { Peak } from '$lib/types';
	import PeakInfoLine from './PeakInfoLine.svelte';

	let { peak }: { peak: Peak } = $props();
</script>

<div class="flex flex-col gap-4">
	<div>
		<h2 class="font-bold mb-4 border-b-4 border-red-600">
			{peak.name}
		</h2>
		<PeakInfoLine lineTitle="Pasmo górskie" lineValue={peak.mountainRange} />
		<PeakInfoLine lineTitle="Wysokość" lineValue={`${peak.elevation}m n.p.m.`} />

		{#if peak.visitDate}
			<PeakInfoLine lineTitle="Wejście w dniu" lineValue={peak.visitDate} />
		{/if}
	</div>
</div>
