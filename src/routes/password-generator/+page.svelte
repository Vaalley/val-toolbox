<script>
	import { RangeSlider, ListBox, ListBoxItem, clipboard } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	let passwordLength = 12;
	let passwordContent = ['uppercase', 'lowercase', 'numbers', 'symbols'];
	let password = '';

	function generatePassword(arr) {
		const lowercase = 'abcdefghijklmnopqrstuvwxyz';
		const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const numbers = '0123456789';
		const symbols = '!@#$%^&*';

		password = '';

		for (let i = 0; i < passwordLength; i++) {
			const randomCharType = arr[Math.floor(Math.random() * arr.length)];

			switch (randomCharType) {
				case 'uppercase':
					password += uppercase[Math.floor(Math.random() * uppercase.length)];
					break;
				case 'lowercase':
					password += lowercase[Math.floor(Math.random() * lowercase.length)];
					break;
				case 'numbers':
					password += numbers[Math.floor(Math.random() * numbers.length)];
					break;
				case 'symbols':
					password += symbols[Math.floor(Math.random() * symbols.length)];
					break;
				default:
					break;
			}
		}
	}

	onMount(() => {
		generatePassword(passwordContent);
	});
</script>

<svelte:head>
	<title>Val's Toolbox | Password Generator</title>
</svelte:head>

<main class="container mx-auto flex flex-col items-center">
	<h1 class="h1 mt-16 font-bold">Password Generator</h1>
	<div class="mt-16 card p-5 w-fit space-y-5 min-w-[400px]">
		<h2 class="h2 font-medium">Password:</h2>
		<div class="card p-3 rounded-md space-y-2 flex flex-col justify-center items-center">
			<p class="text-center h3 text-primary-500">{password}</p>
			<div>
				<button class="btn variant-filled" on:click={() => generatePassword(passwordContent)}
					>Generate</button
				>
				<button class="btn variant-filled" use:clipboard={password}>Copy</button>
			</div>
		</div>
		<div class="card p-3 rounded-md space-y-2">
			<p>Password length: {passwordLength}</p>
			<RangeSlider bind:value={passwordLength} min="5" max="64" />
		</div>
		<div class="card p-3 rounded-md space-y-2">
			<p>Password contains:</p>
			<ListBox multiple>
				<ListBoxItem bind:group={passwordContent} name="medium" value="uppercase">A-Z</ListBoxItem>
				<ListBoxItem bind:group={passwordContent} name="medium" value="lowercase">a-z</ListBoxItem>
				<ListBoxItem bind:group={passwordContent} name="medium" value="numbers">0-9</ListBoxItem>
				<ListBoxItem bind:group={passwordContent} name="medium" value="symbols"
					>!@#$%^&*</ListBoxItem
				>
			</ListBox>
		</div>
	</div>
	<a
		class="anchor mt-2 text-sm"
		href="https://github.com/Vaalley/val-toolbox/blob/main/src/routes/password-generator/%2Bpage.svelte"
		target="_blank"
		rel="noreferrer">Click here to get to this page's source code.</a
	>
</main>
