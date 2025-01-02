import { InstantRules } from '@instantdb/admin';

const rules = {
	todos: {
		allow: {
			view: 'isAuthorized',
			create: 'isAuthorized',
			update: 'isAuthorized',
			delete: 'isAuthorized'
		},
		bind: ['isAuthorized', 'auth.id != null']
	}
} satisfies InstantRules;

export default rules;
