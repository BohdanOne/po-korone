<script lang="ts">
	import '../styles.css';

	export let data;

	let peaksListOpen = false;

	function handlePeaksListToggle() {
		peaksListOpen = !peaksListOpen;
	}

	function handlePeaksListClose() {
		peaksListOpen = false;
	}
</script>

<svelte:body on:click={handlePeaksListClose} />
<div class="flex flex-col h-dvh">
	<header class="p-4">
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
					>
						{#each data.peaks as peak}
							<li class="text-right md:text-left">
								<a class="" href={`/${peak.slug}`}>{peak.name}</a>
							</li>
						{/each}
					</ul>
				</li>
			</ul>
		</nav>
	</header>
	<main class="p-4 grow">
		<slot />
	</main>
</div>
