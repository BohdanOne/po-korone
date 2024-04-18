import fs from 'fs';
import path from 'path';

// Read the covers.json file
const coversData = JSON.parse(fs.readFileSync('src/lib/data/covers.json', 'utf8'));

// Get all JSON files in the /data directory
const dataDir = 'src/lib/data';
const files = fs.readdirSync(dataDir);

files.forEach((file) => {
	if (path.extname(file) === '.json') {
		const filePath = path.join(dataDir, file);
		const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

		// If the data has a matching key in coversData, add the covers property
		if (coversData[data.slug]) {
			data.covers = coversData[data.slug];

			// Write the updated data back to the file
			fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
		}
	}
});
