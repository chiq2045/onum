import { api } from '$lib/server';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return await api.getAllTodos();
};

export const actions: Actions = {
	addTodo: async ({ request }) => {
		const data = await request.formData();
		const title = data.get('title') as string;
		const dueDate = data.get('due');
		const due = dueDate ? new Date(dueDate as string).toISOString() : undefined;

		return await api.addTodo({ title, due, created: new Date().toISOString(), completed: false });
	},
	deleteTodo: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id') as string;
		await api.deleteTodo(id);
	},
	editTodo: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id') as string;
		const title = data.get('title') as string;
		const dueDate = data.get('due');
		const completed = data.get('completed');
		const created = data.get('created') as string;
		const due = dueDate ? new Date(dueDate as string).toISOString() : undefined;

		return await api.editTodo({
			id,
			title,
			due,
			created: new Date(created).toISOString(),
			updated: new Date().toISOString(),
			completed: Boolean(completed)
		});
	}
};
