import { test, expect } from '@playwright/test';

test('View and cart brand products', async ({ page }) => {

    // Step 1 & 2
    await page.goto('https://automationexercise.com');

    // Step 3
    await expect(page).toHaveTitle(/Automation Exercise/);

    // Step 4
    await page.getByRole('link', { name: 'Products' }).click();

    // Step 5
    await expect(page.getByText('Brands')).toBeVisible();

    // Step 6
    await page.getByRole('link', { name: '(6) Polo' }).click();

    // Step 7
    await expect(page).toHaveURL(/brand_products/);

    await expect(page.locator('.title.text-center'))
    .toHaveText('Brand - Polo Products');

});