import type { Peak } from '$lib/types';

export default function getPeakDataModules(): Record<string, { default: Peak }> {
	return import.meta.glob('../data/peaks/*.json', { eager: true }) as Record<
		string,
		{ default: Peak }
	>;
}
