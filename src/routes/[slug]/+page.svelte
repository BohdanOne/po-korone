<script lang="ts">
	import type { Peak } from '$lib/types';
	import PeakInfo from '$lib/components/PeakInfo.svelte';
	import PeakCover from '$lib/components/PeakCover.svelte';

	export let data;

	$: peak = data.peaks.find((peak) => peak.slug === data.slug) as Peak;
</script>

<div class="flex flex-wrap gap-6">
	{#if peak.covers}
		<PeakCover covers={peak.covers} />
	{/if}
	<PeakInfo {peak} />
</div>
