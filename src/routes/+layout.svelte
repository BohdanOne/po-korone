<script lang="ts">
	import '../styles.css';

	export let data;
</script>

<header class="flex justify-between p-4">
	<h1>
		<a href="/">Po koronę</a>
	</h1>
	<nav class="flex gap-2">
		{#each data.peaks as peak}
			<a class="" href={`/${peak.slug}`}>{peak.name}</a>
		{/each}
	</nav>
</header>
<slot />
