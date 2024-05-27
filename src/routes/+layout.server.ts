import type { Peak } from '$lib/types';
import getGeoJson from '$lib/utils/getGeoJson';
import getPeakDataModules from '$lib/utils/getPeakDataModules';

export const prerender = true;

export async function load() {
	return { peaks: await getPeaks() };
}

async function getPeaks(): Promise<Peak[]> {
	let peaks = [];

	const peakModules = getPeakDataModules();

	for (const path in peakModules) {
		const peak = peakModules[path].default;

		if (peak && typeof peak === 'object') {
			const geoJson = await getGeoJson(peak.slug);
			if (geoJson) {
				peak.visitDate = new Date(geoJson?.features[0]?.properties?.time).toLocaleDateString();
			}
			peaks.push(peak);
		}
	}
	peaks = peaks.sort((a, b) => a.elevation - b.elevation);

	return peaks;
}
