import { DOMParser } from 'xmldom';
// @ts-expect-error - no types
import togeojson from '@mapbox/togeojson';

import type { GeoJson } from '$lib/types';

/**
 * Parses a GPX string and converts it to GeoJSON format.
 * @param slug - Slug to search a gpx file.
 * @returns A promise that resolves to a GeoJSON object.
 */
export default async function getGeoJson(slug: string): Promise<GeoJson | null> {
	try {
		const gpx = await importGpx(slug);
		const parser = new DOMParser();
		return togeojson.gpx(parser.parseFromString(gpx, 'application/gpx+xml'));
	} catch (_error) {
		// console.log(error);
		return null;
	}
}

async function importGpx(slug: string) {
	return (await import(/* @vite-ignore */ `../data/peaks/${slug}.gpx?raw`)).default;
}
