import { json } from '@sveltejs/kit';
import { DOMParser } from 'xmldom';
// @ts-expect-error - no types
import togeojson from '@mapbox/togeojson';

export async function GET() {
  const peaks = await getPeaks();
  return json(peaks);
}

/**
 * Retrieves a list of peaks out of json files in lib/data directory.
 * @returns A promise that resolves to an array of Peak objects.
 */
async function getPeaks(): Promise<App.Peak[]> {
  let peaks = [];

  const jsonPaths = import.meta.glob('/src/lib/data/*.json', { eager: true }) as Record<string, { default: App.Peak }>;

  for (const path in jsonPaths) {
    const peak = jsonPaths[path].default;

    if (peak && typeof peak === 'object') {
      let gpx;
      try {
        gpx = (await import(`../../../lib/data/${peak.slug}.gpx?raw`)).default;
      } catch (_) {
        console.error(`Could not find GPX file for ${peak.slug}`);
      }
      if (gpx) {
        const geoJson = await getGeoJson(gpx);
        peak.visited = true;
        peak.visitDate = new Date(geoJson?.features[0]?.properties?.time).toLocaleDateString();
        peak.geoJson = geoJson;
      }
      peaks.push(peak);
    }
  }
  peaks = peaks.sort((a, b) => a.elevation - b.elevation);

  return peaks;
}

/**
 * Parses a GPX string and converts it to GeoJSON format.
 * @param gpx - The GPX string to parse.
 * @returns A promise that resolves to a GeoJSON object.
 */
async function getGeoJson(gpx: string): Promise<App.GeoJson> {
  const parser = new DOMParser();

  const parsedGPX = parser.parseFromString(
    gpx, 'application/gpx+xml'
  );

  return togeojson.gpx(parsedGPX);
}