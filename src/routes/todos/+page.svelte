<script lang="ts">
	import type { PageServerData } from './$types';
	import { browser } from '$app/environment';

	let { data }: { data: PageServerData } = $props();
	let editTodoModal: HTMLDialogElement | null = null;
	let addTodoModal: HTMLDialogElement | null = null;
	if (browser) {
		editTodoModal = document.getElementById('edit-modal') as HTMLDialogElement;
		addTodoModal = document.getElementById('add-modal') as HTMLDialogElement;
	}
	let editTodoModalData = $state<(typeof data.todos)[number] | undefined>(undefined);
</script>

<h2>Todos</h2>
<button
	type="button"
	class="button icon-only outline add-todo-button"
	onclick={() => {
		addTodoModal?.showModal();
	}}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="size-6 icon-md"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
	</svg>
	<span class="sr-only">Add Todo</span>
</button>
<ul class="list flex-container flex-column">
	{#each data.todos as todo}
		<li class="card">
			<div class="card-contents">
				<div class="flex-container centered-items spaced-content">
					<div class="flex-container centered-items">
						{#if todo.completed}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="size-6 icon-md success"
							>
								<path
									fill-rule="evenodd"
									d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="sr-only">Not completed.</span>
						{:else}
							<div class="icon">
								<span class="sr-only">Completed.</span>
							</div>
						{/if}
						<p>{todo.title}</p>
					</div>
					<div class="flex-container centered-items">
						<!-- <div class="flex-container centered-items">
							<p>Due: {todo.due ? new Date(todo.due).toLocaleDateString() : '-'}</p>
						</div> -->
						<button
							class="button icon-only"
							onclick={() => {
								editTodoModal?.showModal();
								editTodoModalData = todo;
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-6 icon-sm"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
								/>
							</svg>
							<span class="sr-only">Edit Todo</span>
						</button>
						<form method="post" action="?/deleteTodo">
							<input type="hidden" name="id" value={todo.id} />
							<button class="button error icon-only" type="submit">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="size-6 icon-sm"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
									/>
								</svg>
								<span class="sr-only">Delete Todo</span>
							</button>
						</form>
					</div>
				</div>
			</div>
		</li>
	{/each}
</ul>

<dialog id="add-modal">
	<h1>Add Todo</h1>
	<form method="post" action="?/addTodo">
		<label>
			Title
			<input type="text" name="title" required value={editTodoModalData?.title} />
		</label>
		<!-- <label>
			Due
			<input type="date" name="due" value={editTodoModalData?.due} />
		</label> -->
		<button
			type="button"
			onclick={() => {
				addTodoModal?.close();
			}}
		>
			Close
		</button>
		<button type="submit">Submit</button>
	</form>
</dialog>

<dialog id="edit-modal">
	<h1>Edit Todo</h1>
	<form method="post" action="?/editTodo">
		<input type="hidden" name="id" value={editTodoModalData?.id} />
		<label>
			Title
			<input type="text" name="title" required value={editTodoModalData?.title} />
		</label>
		<!-- <label>
			Due
			<input type="date" name="due" value={editTodoModalData?.due} />
		</label> -->
		<label>
			Completed
			<input type="checkbox" name="completed" value={editTodoModalData?.completed} />
		</label>
		<button
			type="button"
			onclick={() => {
				editTodoModal?.close();
				editTodoModalData = undefined;
			}}
		>
			Close
		</button>
		<button type="submit">Submit</button>
	</form>
</dialog>

<style>
	.card-contents {
		padding: 1rem;
	}
	.flex-container {
		display: flex;
		gap: 1rem;
	}
	.flex-column {
		flex-direction: column;
	}
	.centered-items {
		align-items: center;
	}
	.spaced-content {
		justify-content: space-between;
	}
	.success {
		color: var(--color-success);
	}
	.add-todo-button {
		width: 100%;
	}
	/*
	.failure {
	 color: var(--color-failure);
	}
	*/
</style>
