<script>
	import { v4 as uuidv4 } from 'uuid';
	import { createEventDispatcher } from 'svelte';
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
	import RatingSelect from '$lib/feedback/RatingSelect.svelte';

	let feedbackText = '';
	let feedbackRating = 10;
	let btnDisabled = true;
	let minChars = 10;
	let message = '';

	function handleInput() {
		// console.log(e.target.value); // Works
		// Or, just ref bound value
		// Q: Why does it lag by one key entry?
		// I think it's the type of event...
		// A: Yep, need on:keyup instead of on:input
		// console.log(feedbackText);
		if (feedbackText.trim().length <= minChars) {
			message = `Feedback text must be at least ${minChars} characters`;
			btnDisabled = true;
		} else {
			message = null;
			btnDisabled = false;
		}
	}

	function handleSelect(e) {
		// NOTE The dispatched event stores the data inside 'e.detail'
		const rating = e.detail;
		feedbackRating = rating;
	}

	// Dispatch this up to parent (index.svelte) where feedback data
	// NOTE Cannot call createEventDispatcher() inside other function!
	// It must be used at top level
	const dispatch = createEventDispatcher();

	function handleSubmit() {
		console.log('handleSubmit triggered');
		// Verify the text is > 10 chars (can disable via devtools)
		if (feedbackText.trim().length >= minChars) {
			// Add a new feedback to our feedback array
			// NOTE '+' in front of String converts to number
			// since form inputs are submitted as strings
			const newFeedback = {
				id: uuidv4(),
				rating: +feedbackRating,
				text: feedbackText
			};
			// console.log(newFeedback);
			dispatch('feedback-submit', newFeedback);

			// Reset the input
			feedbackText = '';
		}
	}
</script>

<Card>
	<header>
		<h2>How would you rate your service with us?</h2>
	</header>
	<RatingSelect on:rating-select={handleSelect} />
	<form on:submit|preventDefault={handleSubmit}>
		<!-- Rating Select Component -->
		<div class="input-group">
			<input
				type="text"
				on:keyup={handleInput}
				bind:value={feedbackText}
				placeholder="Tell us something that keeps you coming back"
			/>
			<Button disabled={btnDisabled} type="submit">Send</Button>
		</div>
		{#if message}
			<div class="message">
				{message}
			</div>
		{/if}
	</form>
</Card>

<style>
	/* header { */
	/* 	max-width: 400px; */
	/* 	margin: auto; */
	/* } */

	.input-group {
		display: flex;
		flex-direction: row;
		border: 1px solid #ccc;
		padding: 8px 10px;
		border-radius: 8px;
		margin-top: 15px;
	}

	input {
		flex-grow: 2;
		border: none;
		font-size: 16px;
	}

	input:focus {
		outline: none;
	}
</style>
