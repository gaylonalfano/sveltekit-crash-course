<script>
	import { FeedbackStore } from '$lib/stores/feedback';
	$: feedbackCount = $FeedbackStore.length;
	$: feedbackAverage =
		Math.round(
			($FeedbackStore.reduce((total, { rating }) => {
				return total + rating;
			}, 0) /
				$FeedbackStore.length) *
				100
		) / 100;
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
