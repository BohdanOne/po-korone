<script lang="ts">
	import PeakInfo from '$lib/components/PeakInfo.svelte';
	import PeakCover from '$lib/components/PeakCover.svelte';

	let { data } = $props();
</script>

<div class="flex flex-wrap gap-6">
	{#if data.peak}
		{#if data.peak.covers}
			<PeakCover covers={data.peak.covers} />
		{/if}
		<PeakInfo peak={data.peak} />
	{/if}
</div>
