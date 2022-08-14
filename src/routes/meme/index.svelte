<script lang="ts">
	import { enhance } from '$lib/form';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	type Meme = {
		id: string;
		name: string;
		url: string;
		width: number;
		height: number;
		box_count: number;
	};

	export let memes: Meme[];
</script>

<svelte:head>
	<title>Meme Generator</title>
	<meta name="Meme Generator" content="Fast Meme Generator" />
</svelte:head>

<div class="flex justify-center">
	<h1>Meme Generator</h1>
</div>
<div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-1 gap-20 p-20">
	{#each memes as meme (meme.id)}
		<a
			class="flex flex-col justify-between hover:bg-gray-200 hover:cursor-pointer grid-meme "
			href="/meme/create/{meme.id}"
		>
			<div class="grid grid-rows-auto content-start pb-5">
				<p class="text-lg">{meme.name}</p>
				<img class="object-contain max-h-48" src={meme.url} alt={meme.name} />
			</div>
		</a>
	{/each}
</div>

<style>
</style>
