<script>
	export let feedbackCount;
	export let feedbackAverage;
</script>

<div class="feedback-stats">
	<h1>{feedbackCount} Reviews</h1>
	<h3>Average Rating: {feedbackAverage}</h3>
</div>

<style>
	.feedback-stats {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #ff6a95;
	}
</style>
