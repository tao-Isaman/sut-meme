<script lang="ts">
	import { base } from '$app/paths';
</script>

<section class="cg-large-container items-center flex h-14 mt-1 pt-4 pb-2 justify-between">
	<a href="/" class="relative h-full flex items-center">
		<a href="{base}/"><h2 class="text-black transition-all hover:text-gray-700">SUT Meme</h2></a>
	</a>
	<div class="flex">
		<a href="{base}/about"><h2 class="text-black transition-all hover:text-gray-700">About</h2></a>
		<a href="{base}/"><h2 class="text-black transition-all hover:text-gray-700">Meme</h2></a>
	</div>
</section>

<style>
	h2 {
		@apply ml-3 lg:pl-4 lg:text-lg font-normal;
	}
</style>
