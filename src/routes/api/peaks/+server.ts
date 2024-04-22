import { json } from '@sveltejs/kit';
import type { Peak } from '$lib/types';
import getGeoJson from '$lib/utils/getGeoJson';

export const prerender = true;

export async function GET() {
	const peaks = await getPeaks();
	return json(peaks);
}

/**
 * Retrieves a list of peaks out of json files in lib/data directory.
 * @returns A promise that resolves to an array of Peak objects.
 */
async function getPeaks(): Promise<Peak[]> {
	let peaks = [];

	const jsonPaths = import.meta.glob('/src/lib/data/peaks/*.json', { eager: true }) as Record<
		string,
		{ default: Peak }
	>;

	for (const path in jsonPaths) {
		const peak = jsonPaths[path].default;

		if (peak && typeof peak === 'object') {
			let gpx;
			try {
				gpx = (await import(`../../../lib/data/peaks/${peak.slug}.gpx?raw`)).default;
			} catch (_) {
				// no GPX file
			}
			if (gpx) {
				const geoJson = await getGeoJson(gpx);
				peak.visitDate = new Date(geoJson?.features[0]?.properties?.time).toLocaleDateString();
			}
			peaks.push(peak);
		}
	}
	peaks = peaks.sort((a, b) => a.elevation - b.elevation);

	return peaks;
}
