<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
</script>

<svelte:head>
	<title>Haven World</title>
	<meta name="description" content="Haven World" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<!-- <source srcset="svelte-welcome.webp" type="image/webp" /> -->
				<img src="img/persona_cn.png" alt="Quant's Persona" />
			</picture>
		</span>

		to your new<br />Haven World app
	</h1>

	<h2>
		try editing <strong>src/routes/index.svelte</strong>
	</h2>

	<Counter />
</section>

<style>

</style>
