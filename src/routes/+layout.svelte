<header>
	<nav class="nav">
		<div class="nav-left">
			<a href="/">Onum</a>
		</div>
		<div class="nav-right">
			<a href="/todos">Todos</a>
			<a href="/projects">Projects</a>
		</div>
	</nav>
</header>

<main class="container">
	<slot />
</main>

<style>
	:global {
		.sr-only {
			position: absolute;
			width: 1px;
			height: 1px;
			padding: 0;
			margin: -1px;
			overflow: hidden;
			clip: rect(0, 0, 0, 0);
			white-space: nowrap;
			border-width: 0;
		}
		.list {
			list-style-type: none;
			padding: 0;
		}
		.icon-sm {
			width: 1.5rem;
		}
		.icon-md {
			width: 3rem;
		}
	}
	:root {
		--color-success: #34b233;
		--color-failure: #ed4337;
	}
	/* .container {
		padding-left: 8px;
		padding-right: 8px;
		margin-left: 8px;
		margin-right: 8px;
	} */
</style>
