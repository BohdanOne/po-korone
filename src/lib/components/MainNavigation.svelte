<script lang="ts">
	import { clsx } from 'clsx';
	import { page } from '$app/stores';
	import type { Peak } from '$lib/types';

	let { peaks }: { peaks: Peak[] } = $props();

	let peaksListOpen = $state(false);

	function handlePeaksListToggle(e: MouseEvent) {
		e.stopPropagation();
		peaksListOpen = !peaksListOpen;
	}

	function handlePeaksListClose() {
		peaksListOpen = false;
	}

	page.subscribe(() => {});
</script>

<svelte:body onclick={handlePeaksListClose} />

<nav>
	<ul class="flex justify-between md:flex-col md:gap-2">
		<li class="md:w-max">
			<h1>
				<a href="/">Po koronę</a>
			</h1>
		</li>

		<li>
			<button
				class="md:hidden"
				id="peaksListToggle"
				aria-expanded={peaksListOpen}
				aria-controls="peaksList"
				onclick={handlePeaksListToggle}
			>
				Szczyty
			</button>
			<ul
				class={clsx(
					peaksListOpen
						? 'absolute px-4 pt-2 pb-4 right-4 ring-1 max-h-[80svh] overflow-scroll z-[401] bg-white'
						: 'hidden',
					'md:relative md:flex md:flex-wrap md:gap-2 md:px-0 md:ring-0'
				)}
				id="peaksList"
				aria-label="Lista Szczytów"
			>
				{#each peaks as peak}
					{@const peakSlug = `/${peak.slug}`}
					{@const isCurrentPage = $page.url.pathname === peakSlug}
					<li class="text-right md:text-left" aria-current={isCurrentPage}>
						<a
							class={clsx(
								'border-b-2',
								isCurrentPage ? 'border-red-600 text-red-600' : 'border-transparent'
							)}
							href={peakSlug}>{peak.name}</a
						>
					</li>
				{/each}
			</ul>
		</li>
	</ul>
</nav>

<style>
	li[aria-current='page'] a {
		view-transition-name: 'active-page';
	}
</style>
