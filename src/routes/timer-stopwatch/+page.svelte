<script>
	import { onMount } from 'svelte';

	let time;
	let timer;
	let displayTime;

	$: displayTime = (time / 10000).toFixed(2);

	function startTimer() {
		timer = setInterval(() => {
			time += 100;
			console.log(time);
		}, 10);
	}

	function stopTimer() {
		clearInterval(timer);
	}

	function resetTimer() {
		time = 0;
	}

	onMount(() => {
		time = 0;
	});
</script>

<svelte:head>
	<title>Val's Toolbox | Timer / Stopwatch</title>
</svelte:head>

<main class="container mx-auto flex flex-col items-center">
	<h1 class="h1 mt-16 font-bold font-outfit">Timer / Stopwatch</h1>
	<div class="mt-16 card p-5 w-fit min-w-[400px]">
		<input type="text" class="input h2 font-outfit text-center w-fit" bind:value={displayTime} />
		<div class="flex justify-around mt-5">
			<button class="btn variant-filled font-outfit" on:click={startTimer}>Start</button>
			<button class="btn variant-filled font-outfit" on:click={stopTimer}>Stop</button>
			<button class="btn variant-filled font-outfit" on:click={resetTimer}>Reset</button>
		</div>
	</div>
	<a
		class="anchor mt-2 text-sm"
		href="https://github.com/Vaalley/val-toolbox/blob/main/src/routes/timer-stopwatch/%2Bpage.svelte"
		target="_blank"
		rel="noreferrer">Click here to get to this page's source code.</a
	>
</main>
