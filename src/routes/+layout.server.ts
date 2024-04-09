import type { Peak } from "$lib/types";

export async function load({ fetch }) {
	const response = await fetch('/api/peaks');
	const peaks: Peak[] = await response.json();
	
	return { peaks };
}
