<script lang="ts">
	import { page } from '$app/stores'
	import { _meme } from './_lib/store/meme'
	import type { Meme } from './_lib/store/meme';

	 let meme: Meme[];
	 _meme.subscribe(value => {
		meme = value;
	 })

</script>

<svelte:head>
	<title>Create Meme</title>
	<meta name="Create Memer" content="Create Meme" />
</svelte:head>

<div class="flex justify-center">
	<h1>Create Meme</h1>
</div>
<div class="flex justify-center">
	<!-- <p>Meme ID is : {meme.id}</p> -->
	<!-- {meme.id} -->
</div>


<style>
</style>