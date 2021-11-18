<script>
	import { createEventDispatcher } from 'svelte';
	import Card from '$lib/components/Card.svelte';
	export let item;

	const dispatch = createEventDispatcher();

	function handleDelete(id) {
		// Delete the item
		dispatch('delete-feedback-item', id);
	}
</script>

<Card>
	<div class="num-display">
		{item.rating}
	</div>

	<button class="close" on:click={() => handleDelete(item.id)}>X</button>
	<p class="text-display">{item.text}</p>
</Card>

<style>
	.num-display {
		position: absolute;
		top: -10px;
		left: -10px;
		width: 50px;
		height: 50px;
		background: #ff6a95;
		color: #fff;
		border: 1px #eee solid;
		border-radius: 50%;
		padding: 10px;
		text-align: center;
		font-size: 19px;
	}

	.close {
		position: absolute;
		top: 10px;
		right: 20px;
		cursor: pointer;
		background: none;
		border: none;
	}
</style>
