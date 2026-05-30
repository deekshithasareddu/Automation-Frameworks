import { test, expect } from '@playwright/test';

test('Verify All Products Page', async ({ page }) => {

    // 1. Launch browser & Navigate to URL
    await page.goto('https://automationexercise.com');

    // 2. Verify home page is visible successfully
    await expect(page).toHaveTitle(/Automation Exercise/);

    // 3. Click on 'Products' button
    await page.getByRole('link', { name: 'Products' }).first().click();

    // 4. Verify user is navigated to ALL PRODUCTS page successfully
    await expect(page).toHaveURL(/products/);

    // 5. Verify products list is visible
    await expect(page.locator('.features_items')).toBeVisible();

    // 6. Click on 'View Product' of first product
    await page.locator('a[href="/product_details/1"]').click();

    // 7. Verify user is landed to product detail page
    await expect(page).toHaveURL(/product_details/);

    // 8. Verify product details section is visible
    await expect(page.locator('.product-information')).toBeVisible();

    // Product Name
    await expect(page.locator('.product-information h2')).toBeVisible();

    // Category
    await expect(
        page.locator('.product-information p').first()
    ).toBeVisible();

    // Price
    await expect(
        page.locator('.product-information span span')
    ).toBeVisible();

    // Availability
    await expect(
        page.getByText('Availability')
    ).toBeVisible();

    // Condition
    await expect(
        page.getByText('Condition')
    ).toBeVisible();

    // Brand
    await expect(
        page.getByText('Brand:')
    ).toBeVisible();

});