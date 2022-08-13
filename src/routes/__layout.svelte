<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>
<Header />
<main>
	<slot />
</main>
<div class="cg-large-container">
	<footer
	  class="flex justify-center mt-10 py-6 text-sm sm:text-lg border-t border-gray-600 text-gray-600"
	>
	  © 2022 | Made with ♥ by SUT Meme
	</footer>
  </div>

<style>
	
</style>
