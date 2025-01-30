import { api } from '$lib/server';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return await api.getTodo(params.id);
};

export const actions: Actions = {
	deleteTodo: async ({ params }) => {
		try {
			await api.deleteTodo(params.id);
			return redirect(302, '/todos');
			// eslint-disable-next-line
		} catch (e) {
			throw Error('Todo could not be deleted.');
		}
	},
	editTodo: async ({ params, request }) => {
		const data = await request.formData();
		const title = data.get('title') as string;
		const dueDate = data.get('due');
		const completed = data.get('completed');
		const created = data.get('created') as string;
		const due = dueDate ? new Date(dueDate as string).toISOString() : undefined;

		return await api.editTodo({
			id: params.id,
			title,
			due,
			created: new Date(created).toISOString(),
			updated: new Date().toISOString(),
			completed: Boolean(completed)
		});
	}
};
