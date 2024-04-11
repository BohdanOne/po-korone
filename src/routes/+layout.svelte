<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import '../styles.css';
	import MainNavigation from '$lib/components/MainNavigation.svelte';

	export let data;

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="flex flex-col h-dvh">
	<header class="p-4">
		<MainNavigation peaks={data.peaks} />
	</header>
	<main class="p-4 grow">
		<slot />
	</main>
</div>
