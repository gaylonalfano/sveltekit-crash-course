<script>
	import FeedbackItem from '$lib/feedback/FeedbackItem.svelte';
	export let feedback;

	console.log(feedback);
</script>

{#each feedback as fb (fb.id)}
	<!-- NOTE Can dispatch/emit up to parent by leaving empty -->
	<FeedbackItem item={fb} on:delete-feedback-item />
{/each}
