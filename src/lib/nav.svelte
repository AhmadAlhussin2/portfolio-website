<script lang="ts">
	let buttons: Array<HTMLAnchorElement> = [];
	const buttonClick = (id: number): void => {
		removeClasses();
		if (id < 1) {
			id = 1;
		}
		buttons[id].classList.add('active-nav');
	};

	const removeClasses = (): void => {
		for (let i = 0; i < buttons.length; i++) {
			buttons[i].classList.remove('active-nav');
		}
	};
</script>

<header>
	<ul>
		<li id="logo">
			<a href="/#main-view" bind:this={buttons[0]} on:click={() => buttonClick(0)}>
				<span style="color: #039e08;">A</span>hmad
			</a>
		</li>
		<li>
			<a
				href="/#main-view"
				id="home-button"
				class="active-nav"
				bind:this={buttons[1]}
				on:click={() => buttonClick(1)}
			>
				Home
			</a>
		</li>
		<li>
			<a href="/#skills" id="skills-button" bind:this={buttons[2]} on:click={() => buttonClick(2)}>
				Skills
			</a>
		</li>
		<li>
			<a
				href="/#achievements"
				id="achievements-button"
				bind:this={buttons[3]}
				on:click={() => buttonClick(3)}
			>
				Achievements
			</a>
		</li>
		<li>
			<a href="/comic" id="jokes-button" bind:this={buttons[4]} on:click={() => buttonClick(4)}>
				Jokes
			</a>
		</li>
	</ul>
</header>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		overflow: hidden;
		scroll-behavior: smooth;
	}
	header {
		width: 100vw;
		width: 100%;
		height: 70px;
		background-color: #fff;
		display: block;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0px 12px 21px -7px rgba(34, 60, 80, 0.12);
		position: fixed;
		top: 0;
	}

	header ul {
		width: 85%;
		list-style: none;
		display: flex;
		justify-content: right;
		margin-right: 2rem;
	}

	header ul a {
		text-decoration: none;
		font-size: large;
		font-weight: 400;
		color: #000;
		padding: 0;
		display: block;
	}

	header ul a::after {
		content: '';
		display: block;
		width: 0;
		height: 2px;
		margin-top: -1.5rem;
		background: #000;
		transition: width 0.3s;
	}

	header ul a:hover::after {
		width: 100%;
	}

	#logo {
		margin-right: auto;
	}
	header ul li {
		height: 70px;
		line-height: 70px;
		margin-left: 1.5rem;
	}

	#logo a {
		font-size: 1.5rem;
		font-weight: 600;
	}

	#logo a::after {
		display: none;
	}
	.active-nav {
		color: #039e08;
	}

	.active-nav::after {
		width: 100%;
		background-color: #039e08;
	}

	@media screen and (max-width: 700px) {
		header {
			height: 3rem;
		}
		header {
			padding: 0;
		}

		header ul {
			margin-right: 0;
			width: 95%;
		}
		header ul a {
			font-size: 0.7rem;
		}
		header ul li {
			margin-left: 0.5rem;
		}
	}
</style>
