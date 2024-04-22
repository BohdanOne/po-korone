import { DOMParser } from 'xmldom';
// @ts-expect-error - no types
import togeojson from '@mapbox/togeojson';

import type { GeoJson } from '$lib/types';

/**
 * Parses a GPX string and converts it to GeoJSON format.
 * @param gpx - The GPX string to parse.
 * @returns A promise that resolves to a GeoJSON object.
 */
export default async function getGeoJson(gpx: string): Promise<GeoJson> {
	const parser = new DOMParser();

	const parsedGPX = parser.parseFromString(gpx, 'application/gpx+xml');

	return togeojson.gpx(parsedGPX);
}
