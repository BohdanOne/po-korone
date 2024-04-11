import { test, expect } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Po koronę' })).toBeVisible();
});

test('/rysy page has expected h1, which has a link to home page', async ({ page }) => {
	await page.goto('/rysy');
	await expect(page.getByRole('heading', { name: 'Po koronę' })).toBeVisible();
	await page.click('a');
	await expect(page).toHaveURL(/\/$/);
});

test('index page has a navigation with list of peaks on desktop viewport', async ({ page }) => {
	await page.goto('/');
	await page.setViewportSize({ width: 768, height: 800 });
	await expect(page.getByRole('navigation')).toBeVisible();
	await expect(page.getByRole('list', { name: 'Lista Szczytów' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Łysica' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Rysy' })).toBeVisible();
});

test('index page has a navigation with button toggling view of peaks list on mobile viewport', async ({
	page
}) => {
	await page.goto('/');
	await page.setViewportSize({ width: 375, height: 800 });
	await expect(page.getByRole('navigation')).toBeVisible();
	await expect(page.getByRole('button', { name: 'Szczyty' })).toBeVisible();
	await expect(page.getByRole('list', { name: 'Lista Szczytów' })).not.toBeVisible();
	await page.click('button');
	await expect(page.getByRole('list', { name: 'Lista Szczytów' })).toBeVisible();
	await page.click('button');
	await expect(page.getByRole('list', { name: 'Lista Szczytów' })).not.toBeVisible();
});

test('on mobile viewport, when list of peaks is visible, clicking outside of it closes the list', async ({
	page
}) => {
	await page.goto('/');
	await page.setViewportSize({ width: 375, height: 800 });
	await expect(page.getByRole('navigation')).toBeVisible();
	await expect(page.getByRole('button', { name: 'Szczyty' })).toBeVisible();
	await expect(page.getByRole('list', { name: 'Lista Szczytów' })).not.toBeVisible();
	await page.click('button');
	await expect(page.getByRole('list', { name: 'Lista Szczytów' })).toBeVisible();
	await page.click('header');
	await expect(page.getByRole('list', { name: 'Lista Szczytów' })).not.toBeVisible();
});

// todo : list all peaks and add test to check if all of them are in the nav and are working properly
