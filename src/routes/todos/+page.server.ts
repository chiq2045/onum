import { api } from '$lib/server';
import { fail, redirect } from '@sveltejs/kit';
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

		if (!title) {
			return fail(400, { title, missing: true });
		}
		try {
			await api.addTodo({ title, due, created: new Date().toISOString(), completed: false });
		} catch (e) {
			throw Error((e as Error)?.message ?? 'Could not add todo');
		} finally {
			redirect(303, '/todos');
		}
	},
	deleteTodo: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id') as string;
		if (!id) {
			return fail(400, { id, missing: true });
		}
		try {
			await api.deleteTodo(id);
		} catch (e) {
			throw Error((e as Error)?.message ?? 'Could not delete Todo');
		} finally {
			redirect(303, '/todos');
		}
	},
	editTodo: async ({ request }) => {
		const data = await request.formData();
		const id = data.get('id') as string;
		const title = data.get('title') as string;
		const dueDate = data.get('due');
		const completed = data.get('completed');
		const created = data.get('created') as string;
		const due = dueDate ? new Date(dueDate as string).toISOString() : undefined;

		if (!id) {
			return fail(400, { id, missing: true });
		}
		if (!title) {
			return fail(400, { title, missing: true });
		}
		try {
			await api.editTodo({
				id,
				title,
				due,
				created: new Date(created).toISOString(),
				updated: new Date().toISOString(),
				completed: Boolean(completed)
			});
		} catch (e) {
			throw Error((e as Error)?.message ?? 'Could not edit Todo');
		} finally {
			redirect(303, '/todos');
		}
	}
};
