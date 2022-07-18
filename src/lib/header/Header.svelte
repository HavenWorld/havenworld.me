<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header>
	<nav class="bg-hw-black px-2 sm:px-4 py-2.5">
		<div class="container flex flex-wrap justify-between items-center mx-auto">
			<a href="/" class="flex items-center">
				<img src="img/persona_cn.png" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo">
				<span class="self-center text-xl font-semibold whitespace-nowrap text-hw-pink">HavenWorld</span>
			</a>
			<div class="hidden w-full md:block md:w-auto" id="navbar-default">
			<ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
				<li>
					<a href="/" class="block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 text-white">Home</a>
				</li>
				<li>
					<a href="/about" class="block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 text-white">About</a>
				</li>
				<li>
					<a href="/minecraft" class="block py-2 pr-4 pl-3 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 text-white">Minecraft</a>
				</li>
			</ul>
			</div>
		</div>
	</nav>
</header>

<style>
	nav img, nav picture	 {
		height: 24px;
	}
</style>
