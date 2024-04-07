import { error } from '@sveltejs/kit';

export async function load({ params }) {
  try {
    const peakModule = await import(`../../lib/data/${params.slug}.json`) as { default: App.Peak };
    return {
      peak: peakModule.default
    };
  } catch (_error) {
    error(404, `Peak not found: ${params.slug}`)
  }
}