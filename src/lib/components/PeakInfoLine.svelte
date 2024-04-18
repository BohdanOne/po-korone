<script lang="ts">
	export let lineTitle: string;
	export let lineValue: string;
</script>

<p class="mb-2 flex flex-wrap gap-4 justify-between max-w-md border-b-2 border-red-300">
	<span>{lineTitle}: </span>
	<span class="font-bold">{lineValue}</span>
</p>
