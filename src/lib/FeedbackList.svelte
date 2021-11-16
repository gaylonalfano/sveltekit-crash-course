<script>
	import FeedbackItem from '$lib/FeedbackItem.svelte';
	export let feedback;

	console.log(feedback);
</script>

{#each feedback as fb (fb.id)}
	<FeedbackItem item={fb} />
{/each}
