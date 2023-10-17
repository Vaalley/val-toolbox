<script>
	import { RangeSlider, clipboard } from '@skeletonlabs/skeleton';
	import { generatePassword } from '$lib/utils';
	import { onMount } from 'svelte';

	let passwordLength = 12;
	let passwordLowercase = true;
	let passwordUppercase = true;
	let passwordNumbers = true;
	let passwordSymbols = true;
	let generatedPassword = '';

	onMount(() => {
		regeneratePassword();
	});

	function regeneratePassword() {
		generatedPassword = generatePassword(
			passwordLength,
			passwordLowercase,
			passwordUppercase,
			passwordNumbers,
			passwordSymbols
		);
	}
</script>

<svelte:head>
	<title>Val's Toolbox | Password Generator</title>
</svelte:head>

<main class="container mx-auto flex flex-col items-center">
	<h1 class="h1 mt-16 font-bold">Password Generator</h1>
	<div class="mt-16 card p-5 w-fit">
		<RangeSlider
			class="w-96"
			name="range-slider"
			bind:value={passwordLength}
			max={32}
			step={1}
			ticked>Password Length: {passwordLength}</RangeSlider
		>
		<div class="grid grid-cols-2 mt-5 gap-2">
			<label class="flex gap-4">
				<input class="checkbox" type="checkbox" bind:checked={passwordLowercase} value={true} />
				<p>Lowercase</p>
			</label>
			<label class="flex gap-4">
				<input class="checkbox" type="checkbox" bind:checked={passwordUppercase} value={true} />
				<p>Uppercase</p>
			</label>
			<label class="flex gap-4">
				<input class="checkbox" type="checkbox" bind:checked={passwordNumbers} value={true} />
				<p>Numbers</p>
			</label>
			<label class="flex gap-4">
				<input class="checkbox" type="checkbox" bind:checked={passwordSymbols} value={true} />
				<p>Symbols</p>
			</label>
		</div>
		<div class="flex justify-center mt-5 gap-4">
			<button class="btn variant-outline" on:click={regeneratePassword}>Generate!</button>
			<button class="btn variant-outline" use:clipboard={generatedPassword}>Copy</button>
		</div>
		<div class="mt-5">
			<p class="text-center mt-2">Generated Password:</p>
			<h2 class="h2 text-center">{generatedPassword}</h2>
		</div>
	</div>
</main>
