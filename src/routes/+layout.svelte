<script>
	import '../app.postcss';
	import { page } from '$app/stores';
	import { LightSwitch, AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<LightSwitch class="absolute top-5 right-5 scale-125" />
<div class="flex">
	<AppRail>
		<svelte:fragment slot="lead">
			<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>Toolbox</AppRailAnchor>
		</svelte:fragment>
		<!-- --- -->
		<AppRailAnchor
			href="/password-generator"
			selected={$page.url.pathname === '/password-generator'}>Password Generator</AppRailAnchor
		>
		<AppRailAnchor href="/bmi-calculator" selected={$page.url.pathname === '/bmi-calculator'}
			>BMI Calculator</AppRailAnchor
		>
		<AppRailAnchor href="/trivia" selected={$page.url.pathname === '/trivia'}>Trivia</AppRailAnchor>
		<!-- --- -->
		<!-- <svelte:fragment slot="trail">
			<AppRailAnchor href="/" target="_blank" title="Account">TB</AppRailAnchor>
		</svelte:fragment> -->
	</AppRail>

	<slot />
</div>
