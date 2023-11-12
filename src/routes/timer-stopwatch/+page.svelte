<script>
	let bmi = 0;
	let weight;
	let height;

	function calculateBMI(weight, height) {
		// Convert height from centimeters to meters
		const heightInMeters = height / 100;

		// Calculate BMI
		bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
	}
</script>

<svelte:head>
	<title>Val's Toolbox | Timer / Stopwatch</title>
</svelte:head>

<main class="container mx-auto flex flex-col items-center">
	<h1 class="h1 mt-16 font-bold font-outfit">Timer / Stopwatch</h1>
	<div class="mt-16 card p-5 w-fit space-y-5 min-w-[400px]" />
	<a
		class="anchor mt-2 text-sm"
		href="https://github.com/Vaalley/val-toolbox/blob/main/src/routes/timer-stopwatch/%2Bpage.svelte"
		target="_blank"
		rel="noreferrer">Click here to get to this page's source code.</a
	>
</main>
