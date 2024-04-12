import { test, expect } from '@playwright/test';

test('home page has a map', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByTitle('Mapa wszystkich szczytów')).toBeVisible();
});

test('map has a peak marker', async ({ page }) => {
	await page.goto('/');
	await page.setViewportSize({ width: 375, height: 800 });

	const peakMarker = page.getByTitle('Rysy');
	await expect(peakMarker).toBeVisible();

	await peakMarker.click();
	const peakPageLink = page.getByRole('link', { name: 'Przejdź do strony szczytu' });
	await expect(peakPageLink).toBeVisible();

	await peakPageLink.click();
	await expect(page).toHaveURL(/\/rysy$/);
});
