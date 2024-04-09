import type { Peak } from '$lib/types';

export const prerender = true;

export async function load({ fetch }) {
	const response = await fetch('/api/peaks');
	const peaks: Peak[] = await response.json();

	return { peaks };
}
