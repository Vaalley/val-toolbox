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
	<title>Val's Toolbox | BMI Calculator</title>
</svelte:head>

<main class="container mx-auto flex flex-col items-center">
	<h1 class="h1 mt-16 font-bold">BMI Calculator</h1>
	<div class="mt-16 card p-5 w-fit space-y-5 min-w-[400px]">
		<input bind:value={weight} class="input" placeholder="Enter your weight in kg" type="text" />
		<input bind:value={height} class="input" placeholder="Enter your height in cm" type="text" />
		<div class="flex gap-5">
			<button on:click={() => calculateBMI(weight, height)} class="btn variant-filled"
				>Calculate</button
			>
			<p>Your BMI is: {bmi}</p>
		</div>
	</div>
	<a
		class="anchor mt-2 text-sm"
		href="https://github.com/Vaalley/val-toolbox/blob/main/src/routes/bmi-calculator/%2Bpage.svelte"
		target="_blank"
		rel="noreferrer">Click here to get to this page's source code.</a
	>
</main>
