<script lang="ts">
	import Fa from 'svelte-fa';
	import { faGithub, faLinkedin, faTelegram } from '@fortawesome/free-brands-svg-icons';
	import { faEnvelope, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
	import profile from "$lib/images/profile.jpg";
	import codejam from "$lib/images/codejam.png";
	import hackercup from "$lib/images/hackercup.png";
	import huawei from "$lib/images/huawei.png";
	import icpc from "$lib/images/icpc.png";
	import kickoff from "$lib/images/kickoff.jpg";
	import kickstart from "$lib/images/kickstart.png";
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section class="wrapper">
	<main>
		<section id="main-view">
			<aside id="intorduction">
				<article>
					<h1>Hi there,</h1>
					<h1>I'm <span style="color: #039e08;">Ahmad Alhussin</span></h1>
					<h3>Bachelor student & ICPC world finalist</h3>
					<section id="social-media">
						<a href="https://github.com/AhmadAlhussin2" target="_blank">
							<i><Fa icon={faGithub} /></i>
						</a>
						<a href="https://www.linkedin.com/in/ahmad-alhussin-3a52311b4/" target="_blank">
							<i><Fa icon={faLinkedin} /></i>
						</a>
						<a href="https://t.me/AhmadAlhusein" target="_blank">
							<i><Fa icon={faTelegram} /></i>
						</a>
						<a href="mailto:ahmad.alhusein2@gmail.com?subject=portfolio" target="_blank">
							<i><Fa icon={faEnvelope} /></i>
						</a>
					</section>
				</article>
			</aside>
			<aside id="img-container">
				<img src={profile} alt="" />
			</aside>
		</section>
		<section id="skills">
			<ul>
				<li>
					Competitive programming
					<i>
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStarHalfStroke} />
					</i>
				</li>
				<li>
					<i>
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStarHalfStroke} />
					</i>
					Data structures & algorithms
				</li>
				<li>
					HTML/CSS
					<i>
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStarHalfStroke} />
					</i>
				</li>
				<li>
					<i>
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStarHalfStroke} />
					</i>
					C++/C
				</li>
				<li>
					Java script
					<i>
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStarHalfStroke} />
					</i>
				</li>
				<li>
					<i>
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStarHalfStroke} />
					</i>
					Blockchain
				</li>
				<li>
					Databases
					<i>
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStarHalfStroke} />
					</i>
				</li>
				<li>
					React
					<i>
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStar} />
						<Fa icon={faStarHalfStroke} />
					</i>
				</li>
			</ul>
		</section>
		<section id="achievements">
			<tl>Competition Name</tl>
			<tl>2021</tl>
			<tl>2022</tl>
			<tl>2023</tl>

			<tl><img src={icpc} alt="ICPC Competition" /></tl>
			<tl>Al-baath ICPC/rank 1</tl>
			<tl>Al-baath ICPC/rank 1<br />Syrian ICPC/rank 2<br />Arab and Africa ICPC/rank 15</tl>
			<tl>Southern and Volga region ICPC/rank 3<br />Northern Eurasia finals/rank 61</tl>

			<tl><img src={kickoff} alt="ACPC KickOff Competition" /></tl>
			<tl>85th</tl>
			<tl>25th</tl>
			<tl>49th</tl>

			<tl><img src={kickstart} alt="Google kickstart Competition" /></tl>
			<tl>Round C: 196th <br /> Round G: 318th </tl>
			<tl>Round A: 59th<br />Round F: 156th<br />Round G: 97th</tl>
			<tl>Farewell: 79th</tl>

			<tl><img src={huawei} alt="Husawei Competition" /></tl>
			<tl>-</tl>
			<tl>VM placement: 32th</tl>
			<tl>Buffer-sharing: 309th</tl>

			<tl><img src={codejam} alt="Google codejam Competition" /></tl>
			<tl>Round 1: 797th<br />Round 2: 2434th</tl>
			<tl>Round 1: 995th<br />Round 2: 2219th</tl>
			<tl>Farewell: 79th</tl>

			<tl><img src={hackercup} alt="Meta hackercup Competition" /></tl>
			<tl>-</tl>
			<tl>-</tl>
			<tl>Round 2: 755th</tl>
		</section>
	</main>
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

	.wrapper {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	header ul li {
		height: 70px;
		line-height: 70px;
		margin-left: 1.5rem;
	}

	main {
		width: 80%;
		height: 100vh;
		margin: 0 auto;
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
		scrollbar-width: none;
	}

	main::-webkit-scrollbar {
		display: none;
	}

	#main-view {
		display: grid;
		grid-template-columns: 2fr 1fr;
		height: 100vh;
		justify-content: center;
	}

	section {
		display: block;
		scroll-snap-align: start none;
	}

	#img-container {
		width: 370px;
		width: 370px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#main-view img {
		overflow: clip;
		width: 100%;
		height: 370px;
		object-fit: cover;
		border-radius: 100%;
		border: dashed 2px #9ae68e;
		padding: 0.7rem;
		background-color: #fff;
		box-shadow: 0px 0px 9px -1px rgba(34, 60, 80, 0.2);
	}

	#intorduction {
		height: 100%;
		width: 100%;
		display: flex;
		align-items: center;
		padding-left: 5rem;
	}

	#intorduction h1 {
		font-size: 40px;
		display: block;
	}

	#intorduction h3 {
		margin-top: 1.5rem;
		display: block;
		color: #666666;
		font-weight: 500;
	}

	#social-media {
		margin-top: 3rem;
		display: flex;
		margin-left: 2rem;
	}

	#social-media a {
		background-color: #fff;
		margin-right: 1rem;
		border: solid #3f3f3f;
		border-radius: 50%;
		width: 50px;
		height: 53px;
		align-items: center;
		justify-content: center;
		display: flex;
		text-decoration: none;
		font-size: 30px;
		color: #3f3f3f;
	}

	#social-media a:hover {
		background-color: #3f3f3f;
		color: #fff;
		transition: all 0.5s;
	}

	#skills {
		overflow: hidden;
		padding: 0 0 0 0;
		padding-top: 4rem;
		margin: 2rem;
		height: 100vh;
		font-size: 1.2rem;
		user-select: none;
	}

	#skills ul {
		height: 100vh;
		overflow: visible;
		list-style: none;
		border-left: solid 1px #039e08;
		border-right: solid 1px #039e08;
	}

	#skills li:nth-child(even) {
		text-align: end;
	}

	#skills li:nth-child(even):after {
		content: '\2666';
		color: #039e08;
		padding-left: 1rem;
		margin-right: -0.4rem;
	}

	#skills li {
		color: #002a00;
		margin-top: 2rem;
		overflow: visible;
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}

	#skills li:nth-child(odd)::before {
		content: '\2666';
		color: #039e08;
		padding-right: 1rem;
		margin-left: -0.4rem;
	}

	#skills i {
		color: #039e08;
		font-size: 15px;
	}

	#achievements {
		height: 100vh;
		padding-top: 6rem;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		font-weight: 500;
	}

	#achievements tl {
		border: solid #a5ffa8 1px;
		padding: 0.5rem;
		text-align: center;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	#achievements tl img {
		object-fit: contain;
		height: 70px;
	}

	@media screen and (min-height: 850px) {
		#achievements tl img {
			height: 100px;
		}
	}

	@media screen and (min-height: 100px) {
		#achievements tl img {
			height: 100px;
		}
	}

	@media screen and (max-height: 849px) {
		#skills {
			height: fit-content;
			padding-bottom: 2rem;
		}

		#achievements tl img {
			height: 80px;
		}

		#achievements {
			padding-bottom: 1rem;
		}
	}

	@media screen and (max-width: 1050px) {
		main {
			width: 90%;
		}
	}

	@media screen and (max-width: 850px) {
		main {
			width: 95%;
		}

		#social-media {
			margin-left: 0;
		}

		#social-media a {
			margin: 5px;
		}

		#main-view img {
			width: 300px;
			height: 300px;
		}
	}

	@media screen and (max-width: 700px) {
		main {
			width: 95%;
		}

		#social-media {
			margin-left: 0;
		}

		#social-media a {
			margin: 5px;
			font-size: 17px;
			width: 30px;
			height: 30px;
		}

		#main-view img {
			width: 200px;
			height: 200px;
		}

		#img-container {
			width: 200px;
		}

		#main-view {
			display: grid;
			grid-template-columns: 4fr 1fr;
			height: 100%;
		}

		#intorduction {
			height: 100%;
			width: 100%;
			display: flex;
			align-items: center;
			padding-left: 0rem;
		}

		header ul li {
			margin-left: 0.5rem;
		}

		#intorduction h1 {
			font-size: 1rem;
		}

		#intorduction h3 {
			font-size: 0.8rem;
			font-weight: 300;
		}

		#skills {
			margin: 0;
			padding-top: 3rem;
		}

		#skills li {
			font-size: 0.7rem;
		}

		#skills i {
			font-size: 0.5rem;
		}

		#achievements {
			font-size: 0.5rem;
			padding-top: 4rem;
		}
	}
</style>
