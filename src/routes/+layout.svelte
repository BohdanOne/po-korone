<script lang="ts">
	import '../styles.css';

	export let data;
</script>

<header class="p-4">
	<h1>
		<a href="/">Po koronę</a>
	</h1>
	<nav class="flex gap-2 my-4 flex-wrap">
		{#each data.peaks as peak}
			<a class="" href={`/${peak.slug}`}>{peak.name}</a>
		{/each}
	</nav>
</header>
<slot />
