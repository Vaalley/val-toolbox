<script>
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	// need to hide apikey
	const apiKey = '1587159bb0692bc32c752afb5ebd8948';
	let city;
	let unit = 0;
	let data;

	async function getWeather() {
		const unitParam = unit === 0 ? 'metric' : 'imperial';
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unitParam}`
		);
		data = await response.json();

		console.log(data);
	}
</script>

<svelte:head>
	<title>Val's Toolbox | Weather</title>
</svelte:head>

<main class="container mx-auto flex flex-col items-center">
	<h1 class="h1 mt-16 font-bold font-outfit">Weather</h1>
	<div class="mt-16 card p-5 w-fit space-y-5 min-w-[400px]">
		<h2 class="h2 font-medium font-outfit">Weather for {city ? city : 'your location'} is:</h2>
		<div class="flex gap-3">
			<input
				bind:value={city}
				class="input w-fit"
				type="text"
				placeholder="Enter your location"
				on:keydown={(event) => {
					if (event.key === 'Enter') {
						getWeather();
					}
				}}
			/>
			<button on:click={getWeather} class="btn variant-filled">🌞</button>
			<RadioGroup>
				<RadioItem bind:group={unit} name="unit" value={0}>Metric</RadioItem>
				<RadioItem bind:group={unit} name="unit" value={1}>Imperial</RadioItem>
			</RadioGroup>
		</div>
		{#if data}
			<div class="card p-5 grid grid-cols-2 gap-5">
				<div>
					<h3 class="h3 font-medium font-outfit">🌍 Country:</h3>
					<p>{data.sys.country}</p>
					<p>Timezone: {data.timezone}</p>
				</div>
				<div>
					<h3 class="h3 font-medium font-outfit">🎛️ Description:</h3>
					<p>{data.weather[0].description}</p>
				</div>
				<div>
					<h3 class="h3 font-medium font-outfit">💨 Wind:</h3>
					<p>{data.wind.speed} {unit === 0 ? 'm/s' : 'mph'}</p>
					<p>{data.wind.deg}°</p>
				</div>
				<div>
					<h3 class="h3 font-medium font-outfit">💧 Humidity:</h3>
					<p>{data.main.humidity}%</p>
				</div>
				<div>
					<h3 class="h3 font-medium font-outfit">🌡️ Temperature:</h3>
					<p>{data.main.temp}°{unit === 0 ? 'C' : 'F'}</p>
					<p>Feels like: {data.main.feels_like}°{unit === 0 ? 'C' : 'F'}</p>
					<p>
						Min / Max: {data.main.temp_min}°{unit === 0 ? 'C' : 'F'} / {data.main
							.temp_max}°{unit === 0 ? 'C' : 'F'}
					</p>
				</div>
				<div>
					<h3 class="h3 font-medium font-outfit">☁️ Clouds:</h3>
					<p>{data.clouds.all}%</p>
				</div>
				<div>
					<h3 class="h3 font-medium font-outfit">📍 Coordinates:</h3>
					<p>{data.coord.lat}, {data.coord.lon}</p>
					<p>
						Link to Google Maps: <a
							class="anchor"
							href={`https://www.google.com/maps/search/${data.coord.lat},${data.coord.lon}`}
							target="_blank"
							rel="noreferrer">here</a
						>
					</p>
				</div>
				<div>
					<h3 class="h3 font-medium font-outfit">🎚️ Pressure:</h3>
					<p>{data.main.pressure} hPa</p>
				</div>
			</div>
		{/if}
	</div>
	<a
		class="anchor mt-2 text-sm"
		href="https://github.com/Vaalley/val-toolbox/blob/main/src/routes/weather/%2Bpage.svelte"
		target="_blank"
		rel="noreferrer">Click here to get to this page's source code.</a
	>
</main>
