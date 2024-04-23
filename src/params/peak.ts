import type { Peak } from '$lib/types';
import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (param) => {
	const jsonPaths = import.meta.glob('/src/lib/data/peaks/*.json', { eager: true }) as Record<
		string,
		{ default: Peak }
	>;

	const slugs = Object.keys(jsonPaths).map((peak) => jsonPaths[peak].default.slug);

	return slugs.includes(param);
};
