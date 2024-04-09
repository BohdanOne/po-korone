export async function load({ fetch }) {
	const response = await fetch('/api/peaks');
	const peaks: App.Peak[] = await response.json();
	return { peaks };
}
