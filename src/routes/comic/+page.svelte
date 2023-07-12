<script lang="ts">
	import { formatDistanceStrict } from 'date-fns';
	import { onMount } from 'svelte';

	interface Joke {
		month: string;
		num?: number;
		alt: string;
		day: string;
		safe_title: string;
		title?: string;
		transcript: string;
		year: string;
		img: string;
	}
	const retrieveID = async (): Promise<number | null> => {
		const params: URLSearchParams = new URLSearchParams();
		params.append('email', 'a.alhussin@innopolis.university');
		try {
			const res: Response = await fetch(
				'https://fwd.innopolis.university/api/hw2?' + params.toString()
			);
			const ID: number = await res.json();
			return ID;
		} catch {
			return null;
		}
	};
	interface JokeLayout {
		url: string;
		alt: string;
		title: string;
		date: string;
	}
	let finalJoke: JokeLayout | null;
	onMount(async () => {
		try {
			const ID: null | number = await retrieveID();
			if (!ID) {
				throw new Error('unable to retrieve ID');
			}
			const params: URLSearchParams = new URLSearchParams();
			params.append('id', ID.toString());
			const response: Response = await fetch(
				'https://fwd.innopolis.university/api/comic?' + params.toString()
			);
			const data: Joke = await response.json();
			const date: string = formatDistanceStrict(
				new Date(),
				new Date(Date.UTC(parseInt(data.year), parseInt(data.month), parseInt(data.day)))
			);
			finalJoke = { url: data.img, alt: data.alt, title: data.safe_title, date: date + 'ago' };
		} catch (e) {
			console.log('error' + e);
		}
	});
</script>

<svelte:head>
	<title>Jokes I like</title>
</svelte:head>

<section id="jokes">
	<h2>Here you can see jokes I like:</h2>
	<aside id="joke-container">
		{#if finalJoke}
			<img src={finalJoke.url} alt={finalJoke.alt} />
			<article>
				<h3>{finalJoke.title}</h3>
				<p>{finalJoke.date}</p>
			</article>
		{:else}
			<p>There are no jokes yet :)</p>
		{/if}
	</aside>
</section>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		overflow: hidden;
		scroll-behavior: smooth;
	}

	section {
		display: block;
		scroll-snap-align: start none;
	}

	#jokes {
		padding: 5rem;
		height: 100vh;
		width: 100%;
	}

	#joke-container {
		display: flex;
		margin-top: 1rem;
		align-items: center;
	}

	#joke-container img {
		height: 75vh;
		object-fit: contain;
		margin-right: 1rem;
		width: 80%;
	}

	#joke-container h3 {
		margin-right: 0.5rem;
	}

	#joke-container p {
		display: block;
	}

	@media screen and (max-width: 1050px) {
		#jokes {
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}
</style>
