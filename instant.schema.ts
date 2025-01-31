import { i } from '@instantdb/admin';

const _schema = i.schema({
	entities: {
		$users: i.entity({
			email: i.string().unique().indexed()
		}),
		todos: i.entity({
			title: i.string(),
			completed: i.boolean(),
			created: i.date(),
			updated: i.date().optional(),
			due: i.date().optional()
		})
		// projects: i.entity({
		// 	title: i.string(),
		// 	completed: i.boolean(),
		// 	created: i.date(),
		// 	updated: i.date().optional(),
		// 	due: i.date().optional()
		// })
	},
	links: {
		// todoProject: {
		// 	forward: { on: 'todos', has: 'one', label: 'project' },
		// 	reverse: { on: 'projects', has: 'many', label: 'todos' }
		// }
	}
});

type AppSchema = typeof _schema;
const schema: AppSchema = _schema;

export type { AppSchema };
export default schema;
