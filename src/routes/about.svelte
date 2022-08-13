<script context="module">
	import { browser, dev } from '$app/env';
	import { base } from '$app/paths'

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="content p-60">
	<h1 class="p-5">ดูอะไรก่อน ยังทำไม่เสร็จ</h1>

	<p class="p-5">
		กดไลค์เราได้ที่ <a href="https://facebook.com/SUTMeme">คลิกที่นี่</a> 
	</p>
</div>

<style>
</style>
