<script context="module">
	import { browser, dev } from '$app/env';

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
	<meta name="description" content="About this site" />
</svelte:head>
<!-- <a href="/link">TEXT</a> -->
<div class="content text-white text-center w-100">
	<div class="max-w-sm bg-hw-pink border border-hw-cerulean">
		<div class="flex flex-col items-center pb-10">
			<img class="mb-3 mt-2 w-24 h-24 rounded-full shadow-lg bg-white" src="/img/persona_cn.png" alt="\Quant\">
			<h5 class="mb-1 text-xl font-medium text-hw-black">Quantum Automata</h5>
			<span class="text-sm text-hw-black">Founder</span>
			<div class="flex mt-4 space-x-3 lg:mt-6">

			</div>
		</div>
	</div>
</div>

<style>
	
</style>
