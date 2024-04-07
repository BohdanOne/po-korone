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
			mountainRange: string;
			location: [number, number]
			visited?: boolean;
			visitDate?: string;
			slug: string;
			geoJson?: GeoJson;
		}

		type GeoJson = {
			type: string;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			features: any[];
		} | null;
	}
}


export { };
