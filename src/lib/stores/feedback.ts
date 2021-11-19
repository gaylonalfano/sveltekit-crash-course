import { writable } from 'svelte/store';
// == IMPORTANT: Store vs. <script context="module"> load()
// Can use Svelte SSR to first fetch the matching pokemon data
// This gives us the ability to quer

export const FeedbackStore = writable([
	// NOTE Whatever you place here when init will be the default data
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
]);

// === Example ===
// export const pokemon = writable([]);
// const fetchPokemon = async () => {
// 	const url = 'https://pokeapi.co/api/v2/pokemon?limit=150';
// 	const response = await fetch(url);
// 	const data = await response.json();

// 	const loadedPokemon = data.results.map((data, index) => {
// 		return {
// 			id: index + 1,
// 			name: data.name,
// 			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
// 				index + 1
// 			}.png`
// 		};
// 	});
// 	// Update our writable store
// 	pokemon.set(loadedPokemon);
// };

// fetchPokemon();
