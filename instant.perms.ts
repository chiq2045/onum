import { InstantRules } from '@instantdb/admin';

const rules = {
	todos: {
		allow: {
			view: 'true',
			create: 'true',
			update: 'true',
			delete: 'true'
		},
		bind: ['isAuthorized', 'auth.id != null']
	},
	projects: {
		allow: {
			view: 'true',
			create: 'true',
			update: 'true',
			delete: 'true'
		},
		bind: ['isAuthorized', 'auth.id != null']
	}
} satisfies InstantRules;

export default rules;
