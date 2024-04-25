import type { ParamMatcher } from '@sveltejs/kit';
import getPeakDataModules from '$lib/utils/getPeakDataModules';

export const match: ParamMatcher = (param) => {
	const peakModules = getPeakDataModules();
	const slugs = Object.keys(peakModules).map((peak) => peakModules[peak].default.slug);

	return slugs.includes(param);
};
