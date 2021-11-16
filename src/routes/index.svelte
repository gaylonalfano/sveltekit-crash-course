<script lang="ts">
	import FeedbackList from '$lib/FeedbackList.svelte';

	let feedback: Record<string, any>[] = [
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
</script>

<div class="container">
	<FeedbackList {feedback} />
</div>
