import { json } from '@sveltejs/kit';

/**
 * Retrieves a list of peaks out of json files in lib/data directory.
 * @returns A promise that resolves to an array of Peak objects.
 */
async function getPeaks(): Promise<App.Peak[]> {
  let peaks = [];

  const paths = import.meta.glob('/src/lib/data/*.json', { eager: true }) as Record<string, { default: App.Peak }>;

  for (const path in paths) {
    const file = paths[path].default;
    const slug = path?.split('/')?.pop()?.replace('.json', '');

    if (file && typeof file === 'object' && slug) {
      peaks.push({ ...file, slug });
    }
  }

  peaks = peaks.sort((a, b) => a.elevation - b.elevation);

  return peaks;
}

export async function GET() {
  const peaks = await getPeaks();
  return json(peaks);
}