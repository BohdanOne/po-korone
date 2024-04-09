<script lang="ts">
	import type { Peak } from '$lib/types';
	
	export let data;
	
	$: peak = data.peaks.find((peak) => peak.slug === data.slug) as Peak;
</script>

<h2>
	{peak.name}
</h2>
