import { test, expect } from '@playwright/test';

test('peak page has a hero with a peak name', async ({ page }) => {
	await page.goto('/rysy');
	await expect(page.getByRole('heading', { name: 'Rysy' })).toBeVisible();
});

test('peak page has a mountain range and elevation info displayed', async ({ page }) => {
	await page.goto('/rysy');

	const mountainRangeSpan = page.locator('span:has-text("Pasmo górskie: ") + span');
	const mountainRangeText = await mountainRangeSpan.allInnerTexts();
	expect(mountainRangeText).toHaveLength(1);

	const elevationSpan = page.locator('span:has-text("Wysokość: ") + span');
	const elevationText = await elevationSpan.allInnerTexts();
	expect(elevationText).toHaveLength(1);
});
