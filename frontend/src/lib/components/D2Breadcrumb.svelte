<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let text: string = '';
	let tabs: string[] = [];

	$: {
		tabs = text
			.split('>')
			.filter((tab) => tab !== '')
			.map((tab) => tab.trim());
	}
</script>

<div class="breadcrumbs text-sm">
	<ul>
		{#each tabs as tab, i}
			<li>
				{#if i !== tabs.length - 1}
					{tab}
				{:else}
					<span class="font-bold">{tab}</span>
				{/if}
			</li>
		{/each}
	</ul>
</div>
