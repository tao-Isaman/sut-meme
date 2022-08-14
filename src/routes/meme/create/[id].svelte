<script lang="ts">
	import { page } from '$app/stores'

</script>

<svelte:head>
	<title>Create Meme</title>
	<meta name="Create Memer" content="Create Meme" />
</svelte:head>

<div class="flex justify-center">
	<h1>Create Meme</h1>
</div>
<div class="flex justify-center">
	<p>Meme ID is : {$page.url.pathname.split('/')[3]}</p>
</div>


<style>
</style>