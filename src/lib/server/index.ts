import { env } from '$env/dynamic/private';
import { id, init, tx, type InstaQLEntity } from '@instantdb/admin';
import schema, { type AppSchema } from '../../../instant.schema';

const db = init({
	appId: env.INSTANT_APP_I!,
	adminToken: env.INSTANT_APP_ADMIN_TOKEN!,
	schema
});

export const api = {
	getAllData: async () => db.query({ todos: {}, projects: {} }),
	getAllTodos: async () => db.query({ todos: {} }),
	getAllProjects: async () => db.query({ projects: {} }),
	addTodo: async (todo: Omit<InstaQLEntity<AppSchema, 'todos'>, 'id'>, projectId?: string) => {
		const todoId = id();
		db.transact([
			db.tx.todos[todoId].update(todo),
			...(projectId ? [db.tx.projects[projectId].link({ todos: todoId })] : [])
		]);
	},
	addProject: async (project: Omit<InstaQLEntity<AppSchema, 'projects'>, 'id'>) =>
		db.transact([db.tx.projects[id()].update(project)]),
	editTodo: async (todo: InstaQLEntity<AppSchema, 'todos'>, projectId?: string) => {
		const { id: todoId, ...restTodo } = todo;
		db.transact([
			db.tx.todos[todoId].update(restTodo),
			...(projectId ? [db.tx.projects[projectId].link({ todos: todoId })] : [])
		]);
	},
	editProject: async (project: InstaQLEntity<AppSchema, 'projects'>) => {
		const { id: projectId, ...restProject } = project;
		db.transact([db.tx.projects[projectId].update(restProject)]);
	},
	deleteTodo: async (todoId: string, projectId?: string) => {
		db.transact([
			db.tx.todos[todoId].delete(),
			...(projectId ? [db.tx.projects[projectId].unlink({ todos: todoId })] : [])
		]);
	},
	deleteProject: async (projectId: string, todoIds: string[]) => {
		db.transact([db.tx.projects[projectId].unlink({ todos: todoIds }).delete()]);
	}
};
