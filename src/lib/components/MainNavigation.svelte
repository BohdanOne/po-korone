<script lang="ts">
	import { page } from '$app/stores';
	import type { Peak } from '$lib/types';

	export let peaks: Peak[];

	let peaksListOpen = false;

	function handlePeaksListToggle() {
		peaksListOpen = !peaksListOpen;
	}

	function handlePeaksListClose() {
		peaksListOpen = false;
	}

	page.subscribe(() => {});
</script>

<svelte:body on:click={handlePeaksListClose} />

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
				on:click|stopPropagation={handlePeaksListToggle}
			>
				Szczyty
			</button>
			<ul
				class={`${
					peaksListOpen
						? 'absolute px-4 pt-2 pb-4 right-0 ring-1 max-h-[80svh] overflow-scroll bg-white'
						: 'hidden'
				} 
					md:relative md:flex md:flex-wrap md:gap-2 md:px-0 md:ring-0`}
				id="peaksList"
				aria-label="Lista Szczytów"
			>
				{#each peaks as peak}
					{@const peakSlug = `/${peak.slug}`}
					{@const isCurrentPage = $page.url.pathname === peakSlug}
					<li class="text-right md:text-left" aria-current={isCurrentPage}>
						<a
							class={`border-b-2 ${isCurrentPage ? 'border-red-600 text-red-600' : 'border-transparent'}`}
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
