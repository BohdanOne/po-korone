export type Peak = {
	name: string;
	elevation: number;
	mountainRange: string;
	location: [number, number];
	visitDate?: string;
	slug: string;
	geoJson?: GeoJson;
	covers?: { [key in CoverBreakpoint]: [string, string] };
};

export type CoverBreakpoint = 'xs' | 's' | 'm' | 'l';

export type GeoJson = {
	type: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	features: any[];
} | null;
