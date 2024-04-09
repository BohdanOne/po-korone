export type Peak = {
	name: string;
	elevation: number;
	mountainRange: string;
	location: [number, number];
	visited?: boolean;
	visitDate?: string;
	slug: string;
	geoJson?: GeoJson;
};

export type GeoJson = {
	type: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	features: any[];
} | null;
