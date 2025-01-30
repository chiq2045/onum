<script lang="ts">
	import type { PageServerData } from './$types';

	const { data }: { data: PageServerData } = $props();
	const todo = data.todos[0];
	let editTodo = $state(false);
</script>

<div class="card">
	<div class="card-content">
		{#if todo}
			<div class="row">
				<p>{todo.title}</p>
			</div>
			<div class="row">
				<p>
					Due: {#if todo.due}
						{new Date(todo.due).toDateString()}
					{/if}
					{#if todo.completed}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="size-6 icon success"
						>
							<path
								fill-rule="evenodd"
								d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
								clip-rule="evenodd"
							/>
						</svg>
					{/if}
				</p>
			</div>
			<div class="row">
				<button
					type="button"
					onclick={() => {
						editTodo = !editTodo;
					}}>Edit Todo</button
				>
				<form method="post" action="?/deleteTodo">
					<button type="submit" class="button">Delete Todo</button>
				</form>
			</div>
			{#if editTodo}
				<form method="post" action="?/editTodo">
					<label>
						Title
						<input type="text" name="title" value={todo.title} />
					</label>
					<label>
						Due
						<input type="date" name="due" value={todo.due} />
					</label>
					<label>
						Completed
						<input type="checkbox" name="completed" checked={todo.completed} />
					</label>
					<input type="hidden" name="created" hidden value={todo.created} />
					<button type="submit" class="button primary">Submit</button>
				</form>
			{/if}
		{:else}
			<p>No data available for this todo</p>
		{/if}
	</div>
</div>

<style>
	.success {
		color: var(--color-check-green);
	}
</style>
