<script lang="ts">
	export let data;

	$: ({ peak } = data);
</script>

<h2>
	{peak.name}
</h2>
