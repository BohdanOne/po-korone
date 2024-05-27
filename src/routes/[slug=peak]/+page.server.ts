import type { Peak } from '$lib/types';
import getGeoJson from '$lib/utils/getGeoJson';
import getPeakDataModules from '$lib/utils/getPeakDataModules';
import pictures from '$lib/data/pictures.json' assert { type: 'json' };

export const prerender = true;

export async function load({ params }) {
	return {
		peak: await getPeak(params.slug)
	};
}

async function getPeak(slug: string): Promise<Peak> {
	const peakModules = getPeakDataModules();

	const peak = Object.values(peakModules).find((module) => module.default.slug === slug)
		?.default as Peak;

	const geoJson = await getGeoJson(slug);

	if (geoJson) {
		peak.visitDate = new Date(geoJson?.features[0]?.properties?.time).toLocaleDateString();
		peak.geoJson = geoJson;
	}

	// @ts-expect-error pictures is a json module
	if (pictures[slug]) {
		// @ts-expect-error pictures is a json module
		peak.pictures = pictures[slug];
	}

	return peak;
}
