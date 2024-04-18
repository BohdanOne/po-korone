<script lang="ts">
	import type { CoverBreakpoint } from '$lib/types';

	export let covers: { [key in CoverBreakpoint]: [string, string] };
	export let small = false;
</script>

<picture>
	<source media="(max-width: 375px)" srcset="{covers.s[0]} 1x, {covers.s[1]} 2x" />
	{#if small}
		<source media="(max-width: 640px)" srcset="{covers.xs[0]} 1x, {covers.xs[1]} 2x" />
		<source srcset="{covers.l[0]} 1x, {covers.l[1]} 2x" />
		<img
			class="hover:filter-[brightness(50%)] transition-all duration-200 ease-in-out w-full"
			src={covers.xs[1]}
			alt=""
			loading="lazy"
		/>
	{:else}
		<source media="(max-width: 640px)" srcset="{covers.l[0]} 1x, {covers.l[1]} 2x" />
		<source media="(max-width: 768px)" srcset="{covers.s[0]} 1x, {covers.s[1]} 2x" />
		<source srcset="{covers.m[0]} 1x, {covers.m[1]} 2x" />
		<img src={covers.m[1]} alt="" loading="lazy" />
	{/if}
</picture>
