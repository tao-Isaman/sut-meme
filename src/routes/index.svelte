<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { base } from '$app/paths'
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>SUT MEME</title>
	<meta name="description" content="sut meme demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset="{base}/svelte-welcome.webp" type="image/webp" />
				<img src="{base}/svelte-welcome.png" alt="Welcome" />
			</picture>
		</span>

		to SUT meme 
	</h1>
	<picture>
		<img src="https://scontent.fbkk29-1.fna.fbcdn.net/v/t39.30808-6/220596964_667233284208918_6792899855305211976_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEcqBX-supzU646fT73x-9pEFuARDDvepUQW4BEMO96lSHuoEBDTKm9lZMVOjRCD2ULNqdaptDB39qdcz3gg8yg&_nc_ohc=mZcD8qCxbDAAX-XUJ70&tn=JpJRb9ntlW41_XsY&_nc_ht=scontent.fbkk29-1.fna&oh=00_AT_1BiKvL8bfiY8riHcOCW098_oJPvZVKiWRjv2jH8Wg1g&oe=62FB03AF" alt="Welcome" />
	</picture>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
