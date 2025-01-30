import { api } from '$lib/server';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return await api.getAllTodos();
};

export const actions: Actions = {
	addTodo: async (e) => {
		const data = await e.request.formData();
		const title = data.get('title') as string;
		const dueDate = data.get('due');
		const due = dueDate ? new Date(dueDate as string).toISOString() : undefined;

		return await api.addTodo({ title, due, created: new Date().toISOString(), completed: false });
	}
};
