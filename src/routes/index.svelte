<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { base } from '$app/paths'
</script>

<svelte:head>
	<title>SUT MEME</title>
	<meta name="description" content="sut meme demo app" />
</svelte:head>

<section>
	<div class="flex items-center justify-center mt-4 lg:mt-6 mb-10 lg:mb-12">
		<section class="max-w-[1440px] py-10 lg:py-20 lg:mx-10 lg:rounded-3xl mesh">
		  <div class="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-12 xl:px-32">
			<div class="w-11/12 md:w-4/5 xl:w-1/2 mx-4">
			  <h1>สวัสดี SUT Meme</h1>
			  <p class="text-lg mt-4 mb-6">
				SUT Meme call "ซุท-มีม" in thai or "sut-meme" in english. We are create a funny meme
				too make all the reader is happy on facebook page. All that our memes in thai language only
			  </p>
			  <p>
				<a href="https://www.facebook.com/SUTmeme" class="cg-btn">Click Me</a>
			  </p>
			</div>
		  </div>
		</section>
	  </div>
</section>

<style>
	.mesh {
    background: fixed;
    background-color: rgb(251, 254, 255);
    background-image: radial-gradient(at 48% 49%, rgb(245, 222, 118) 0, transparent 89%),
      radial-gradient(at 64% 44%, rgb(254, 242, 242) 0, transparent 18%),
      radial-gradient(at 64% 97%, rgb(28, 25, 23) 0, transparent 40%),
      radial-gradient(at 14% 17%, rgb(252, 125, 130), transparent 76%),
      radial-gradient(at 43% 71%, rgb(36, 6, 58) 0, transparent 66%);
  }
	
</style>
