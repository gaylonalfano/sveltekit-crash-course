<script>
	import FeedbackStats from '$lib/feedback/FeedbackStats.svelte';
	import FeedbackList from '$lib/feedback/FeedbackList.svelte';
	import FeedbackForm from '$lib/feedback/FeedbackForm.svelte';

	let feedback = [
		{
			id: 1,
			rating: 10,
			text: 'Lolor sit amet consectetur adipisicing elit. Voluptatibus aperiam necessitatibus dolorem ut nostrum ratione qui, placeat blanditiis nulla suscipit corporis ullam quo dicta impedit ipsum autem id assumenda voluptatem.'
		},
		{
			id: 2,
			rating: 9,
			text: 'Consectetur adipisicing elit. Voluptatibus aperiam necessitatibus dolorem ut nostrum ratione qui, placeat blanditiis nulla suscipit corporis ullam quo dicta impedit ipsum autem id assumenda voluptatem.'
		},
		{
			id: 3,
			rating: 6,
			text: 'Sit amet consectetur adipisicing elit. Voluptatibus aperiam necessitatibus dolorem ut nostrum ratione qui, placeat blanditiis nulla suscipit corporis ullam quo dicta impedit ipsum autem id assumenda voluptatem.'
		}
	];

	function deleteFeedbackItem(e) {
		// NOTE We can get the item id from the event.detail
		const itemId = e.detail;

		// Update our feedback array
		feedback = feedback.filter((item) => item.id != itemId);
		console.log(feedback);
	}

	$: feedbackCount = feedback.length;
	$: feedbackAverage =
		Math.round(
			(feedback.reduce((total, { rating }) => {
				return total + rating;
			}, 0) /
				feedback.length) *
				100
		) / 100;
</script>

<div class="container">
	<FeedbackForm />
	<FeedbackStats {feedbackCount} {feedbackAverage} />
	<FeedbackList {feedback} on:delete-feedback-item={deleteFeedbackItem} />
</div>
