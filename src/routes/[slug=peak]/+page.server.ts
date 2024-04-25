import type { Peak } from '$lib/types';
import getGeoJson from '$lib/utils/getGeoJson';
import getPeakDataModules from '$lib/utils/getPeakDataModules';

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

	// todo: GET PICTURES FOR GALLERY
	// 1. srcset -> decide on sizes
	// 2. alt
	// 3. coordinates

	return peak;
}
