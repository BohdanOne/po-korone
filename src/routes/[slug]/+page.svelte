<script lang="ts">
	export let data;

	$: peak = data.peaks.find((peak) => peak.slug === data.slug) as App.Peak;
</script>

<h2>
	{peak.name}
</h2>
