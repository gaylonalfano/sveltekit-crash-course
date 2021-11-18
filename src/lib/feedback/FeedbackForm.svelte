<script>
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
</script>

<Card>
	<header>
		<h2>How would you rate your service with us?</h2>
	</header>
	<RatingSelect />
	<form>
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
