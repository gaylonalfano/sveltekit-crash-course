<script>
	// import { onMount, onDestroy } from 'svelte';
	import { FeedbackStore } from '$lib/stores/feedback';
	import { fade, scale } from 'svelte/transition';
	import FeedbackItem from '$lib/feedback/FeedbackItem.svelte';

	// // === NOTE Couple ways to access data from Store ===
	// // 1. Long method using subscribe() + unsubscribing via life-cycles
	// let feedback = [];
	// const unsubscribe = FeedbackStore.subscribe((data) => (feedback = data));
	// onMount(() => {
	// 	console.log('mounted');
	// });
	// onDestroy(() => {
	// 	unsubscribe();
	// });

	// 2. Easier/Preferred way via $ reactive variable
	// E.g., $FeedbackStore -- This unsubscribes automatically!
</script>

{#each $FeedbackStore as fb (fb.id)}
	<!-- NOTE Add transitions by wrapping the custom component -->
	<div in:scale out:fade={{ duration: 500 }}>
		<!-- NOTE Can dispatch/emit up to parent by leaving empty -->
		<FeedbackItem item={fb} />
	</div>
{/each}
