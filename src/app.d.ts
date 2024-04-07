// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		type Peak = {
			name: string;
			elevation: number;
			slug: string;
			mountainRange: string;
			location: [number, number]
			visited: boolean;
			visitDate?: Date;
			visitedBefore: boolean;
			slug: string;
		}
	}
}

export { };
