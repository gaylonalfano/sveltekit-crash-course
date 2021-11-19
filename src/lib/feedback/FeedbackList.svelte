<script>
	import { fade, scale } from 'svelte/transition';
	import FeedbackItem from '$lib/feedback/FeedbackItem.svelte';
	export let feedback;

	// console.log(feedback);
</script>

{#each feedback as fb (fb.id)}
	<!-- NOTE Add transitions by wrapping the custom component -->
	<div in:scale out:fade={{ duration: 500 }}>
		<!-- NOTE Can dispatch/emit up to parent by leaving empty -->
		<FeedbackItem item={fb} on:delete-feedback-item />
	</div>
{/each}
