<script lang="ts">
	import Fa from 'svelte-fa';
	import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
	export let fullStars: number;
	export let halfStars: number;
</script>

<i>
	{#each { length: fullStars } as _}
		<Fa icon={faStar} />
	{/each}
	{#each { length: halfStars } as _}
		<Fa icon={faStarHalfStroke} />
	{/each}
</i>

<style>
	i {
		color: #039e08;
		font-size: 15px;
	}
	@media screen and (max-width: 700px) {
		i {
			font-size: 0.5rem;
		}
	}
</style>
