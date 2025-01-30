<script lang="ts">
	import type { PageServerData } from './$types';

	let { data }: { data: PageServerData } = $props();
</script>

<h2>Todos</h2>
<details>
	<summary> Add Todo Form </summary>
	<form method="post" action="?/addTodo">
		<label>
			Title
			<input type="text" name="title" required />
		</label>
		<label>
			Due
			<input type="date" name="due" />
		</label>
		<button type="submit">Add Todo</button>
	</form>
</details>
<ul class="list">
	{#each data.todos as todo}
		<li class="card">
			<div class="card-contents">
				<a href={`/todos/${todo.id}`}>{todo.title}</a>
			</div>
		</li>
	{/each}
</ul>

<style>
	.card-contents {
		padding: 8px;
	}
</style>
