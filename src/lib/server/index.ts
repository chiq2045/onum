import { env } from '$env/dynamic/private';
import { id, init, type InstaQLEntity } from '@instantdb/admin';
import schema, { type AppSchema } from '../../../instant.schema';

const db = init({
	appId: env.INSTANT_APP_ID,
	adminToken: env.INSTANT_APP_ADMIN_TOKEN,
	schema
});

export const api = {
	// getAllData: async () => db.query({ todos: {}, projects: {} }),
	getAllTodos: async () => db.query({ todos: {} }),
	getTodo: async (todoId: string) =>
		db.query({
			todos: {
				$: {
					where: {
						id: todoId
					}
				}
			}
		}),
	// getAllProjects: async () => await db.query({ projects: {} }),
	// getProjectById: async (projectId: string) =>
	// 	await db.query({
	// 		projects: {
	// 			$: {
	// 				where: {
	// 					id: projectId
	// 				}
	// 			}
	// 		}
	// 	}),
	addTodo: async (todo: Omit<InstaQLEntity<AppSchema, 'todos'>, 'id'>) => {
		const todoId = id();
		db.transact([
			db.tx.todos[todoId].update(todo)
			// ...(projectId ? [db.tx.projects[projectId].link({ todos: todoId })] : [])
		]);
	},
	// addProject: async (project: { title: string; due?: string }) => {
	// 	const created = new Date().toISOString();
	// 	const completed = false;
	// 	db.transact([db.tx.projects[id()].update({ ...project, created, completed })]);
	// },
	editTodo: async (todo: InstaQLEntity<AppSchema, 'todos'>) => {
		const { id: todoId, ...restTodo } = todo;
		db.transact([
			db.tx.todos[todoId].update(restTodo)
			// ...(projectId ? [db.tx.projects[projectId].link({ todos: todoId })] : [])
		]);
	},
	// editProject: async (project: InstaQLEntity<AppSchema, 'projects'>) => {
	// 	const { id: projectId, ...restProject } = project;
	// 	db.transact([db.tx.projects[projectId].update(restProject)]);
	// },
	deleteTodo: async (todoId: string) => {
		db.transact([
			db.tx.todos[todoId].delete()
			// ...(projectId ? [db.tx.projects[projectId].unlink({ todos: todoId })] : [])
		]);
	}
	// deleteProject: async (projectId: string, todoIds: string[]) => {
	// 	db.transact([db.tx.projects[projectId].unlink({ todos: todoIds }).delete()]);
	// }
};
