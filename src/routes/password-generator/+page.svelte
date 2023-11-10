<script>
	import { RangeSlider, ListBox, ListBoxItem, clipboard } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	// Define the initial values and state variables
	let passwordLength = 12;
	let passwordContent = ['uppercase', 'lowercase', 'numbers', 'symbols'];
	let password = '';

	/**
	 * Generates a random password based on the selected content types.
	 * @param {Array} content - The array of selected content types.
	 */
	function generatePassword(content) {
		// Define the character sets for each content type
		const lowercase = 'abcdefghijklmnopqrstuvwxyz';
		const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const numbers = '0123456789';
		const symbols = '!@#$%^&*';

		// Reset the password
		password = '';

		// Generate each character of the password
		for (let i = 0; i < passwordLength; i++) {
			// Choose a random content type
			const randomCharType = content[Math.floor(Math.random() * content.length)];

			// Append a random character from the chosen content type
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

	// Generate the initial password on component mount
	onMount(() => {
		generatePassword(passwordContent);
	});
</script>

<svelte:head>
	<title>Val's Toolbox | Password Generator</title>
</svelte:head>

<main class="container mx-auto flex flex-col items-center">
	<h1 class="h1 mt-16 font-bold font-outfit">Password Generator</h1>
	<div class="mt-16 card p-5 w-fit space-y-5 min-w-[400px]">
		<h2 class="h2 font-medium font-outfit">Password:</h2>
		<div class="card p-3 rounded-md space-y-2 flex flex-col justify-center items-center">
			<p class="text-center h3 text-primary-500 font-outfit">{password}</p>
			<div>
				<button
					class="btn variant-filled font-outfit"
					on:click={() => generatePassword(passwordContent)}>Generate</button
				>
				<button class="btn variant-filled font-outfit" use:clipboard={password}>Copy</button>
			</div>
		</div>
		<div class="card p-3 rounded-md space-y-2">
			<p>Password length: {passwordLength}</p>
			<RangeSlider bind:value={passwordLength} min="5" max="64" />
		</div>
		<div class="card p-3 rounded-md space-y-2">
			<p>Password contains:</p>
			<ListBox class="grid grid-cols-2 gap-3" multiple>
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
