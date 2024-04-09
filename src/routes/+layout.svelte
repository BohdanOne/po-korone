<script lang="ts">
	import '../styles.css';
	import PageNavigation from '$lib/components/PageNavigation.svelte';

	export let data;
</script>

<div class="flex flex-col h-dvh">
	<header class="p-4">
		<PageNavigation peaks={data.peaks} />
	</header>
	<main class="p-4 grow">
		<slot />
	</main>
</div>
