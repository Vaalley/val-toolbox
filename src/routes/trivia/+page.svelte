<script>
	import { onMount } from 'svelte';

	let question;
	let category;
	let difficulty;
	let correctAnswer;
	let allAnswers = [];
	let type;

	function getQuestion() {
		fetch('https://opentdb.com/api.php?amount=1')
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				question = data.results[0].question.replace(/&quot;/g, '"').replace(/&#039;/g, "'");
				category = data.results[0].category;
				difficulty = data.results[0].difficulty;
				correctAnswer = data.results[0].correct_answer
					.replace(/&quot;/g, '"')
					.replace(/&#039;/g, "'");
				allAnswers = data.results[0].incorrect_answers.map((answer) =>
					answer.replace(/&quot;/g, '"').replace(/&#039;/g, "'")
				);
				allAnswers.push(correctAnswer);
				allAnswers = allAnswers.sort(() => Math.random() - 0.5);
				type = data.results[0].type;
			});
	}

	function checkAnswer(answer) {
		if (answer === correctAnswer) {
			alert('Correct!');
		} else {
			alert('Incorrect!');
		}
	}

	onMount(() => {
		getQuestion();
	});
</script>

<svelte:head>
	<title>Val's Toolbox | Trivia</title>
</svelte:head>

<main class="container mx-auto flex flex-col items-center">
	<h1 class="h1 mt-16 font-bold">Trivia</h1>
	<div class="mt-16 card p-5 w-fit space-y-5 min-w-[400px] max-w-[800px]">
		{#if !question}
			<h2 class="h2 font-medium text-center">Loading 🔃</h2>
		{:else}
			<div class="grid grid-cols-2 text-center">
				<h3 class="h3">Category: {category}</h3>
				<h3 class="h3">
					Difficulty: <span
						style="color: {difficulty === 'easy'
							? 'green'
							: difficulty === 'medium'
							? 'orange'
							: 'red'}">{difficulty}</span
					>
				</h3>
			</div>
			<h2 class="h2 font-medium text-center">
				{question}
			</h2>
			{#if type === 'multiple'}
				<div class="card p-5 rounded-md grid grid-cols-2 gap-3">
					{#each allAnswers as answer}
						<button class="btn variant-filled" on:click={() => checkAnswer(answer)}>{answer}</button
						>
					{/each}
				</div>
			{/if}
			{#if type === 'boolean'}
				<div class="card p-3 rounded-md space-y-2">
					<button class="btn variant-filled" on:click={() => checkAnswer('True')}>True</button>
					<button class="btn variant-filled" on:click={() => checkAnswer('False')}>False</button>
				</div>
			{/if}
		{/if}
	</div>
	<a
		class="anchor mt-2 text-sm"
		href="https://github.com/Vaalley/val-toolbox/blob/main/src/routes/trivia/%2Bpage.svelte"
		target="_blank"
		rel="noreferrer">Click here to get to this page's source code.</a
	>
</main>
