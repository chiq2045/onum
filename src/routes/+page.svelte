<script lang="ts">
	import type { InstaQLEntity } from '@instantdb/admin';
	import type { PageServerData } from './$types';
	import type { AppSchema } from '../../instant.schema';

	let { data }: { data: PageServerData } = $props();
</script>

<h1>Welcome to Onum</h1>
<p>At the moment, this is a glorified todo app.</p>

<h2>Todos</h2>
<ul>
	{#each data.todos as InstaQLEntity<AppSchema, 'todos'>[] as todo}
		<li>
			<a href={`/projects/${todo.id}`}>{todo.title}</a>
		</li>
	{/each}
</ul>
