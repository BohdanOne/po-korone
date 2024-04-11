<script lang="ts">
	export let name: string;
</script>

<!-- todo: sizes & breakpoints for hero image  -->
<!-- todo picture according to peak name -->
<div
	class={`bg-[url('https://res.cloudinary.com/bohdanonedev/image/upload/f_auto,q_16/v1672056114/korona/IMG_0670_w2bjmb.heic')] to-blue-500 bg-contain max-w-full aspect-[4/3]`}
>
	<div
		class="h-full bg-gradient-to-t from-black via-transparent to-transparent p-4 text-white font-bold flex flex-col justify-end"
	>
		<h2>
			{name}
		</h2>
	</div>
</div>
