import { test, expect } from '@playwright/test';

test('Add products in cart', async ({ page }) => {

  // 1. Launch browser and navigate to URL
  await page.goto('https://automationexercise.com');

  // 2. Verify home page is visible successfully
  await expect(page).toHaveTitle(/Automation Exercise/);

  // 3. Click Products button
  await page.locator('a[href="/products"]').click();

  // 4. Hover over first product and click Add to Cart
  await page.locator('.product-image-wrapper').first().hover();
  await page.locator('a[data-product-id="1"]').last().click();

  // 5. Click Continue Shopping
  await page.getByText('Continue Shopping').click();

  // 6. Hover over second product and click Add to Cart
  await page.locator('.product-image-wrapper').nth(1).hover();
  await page.locator('a[data-product-id="2"]').last().click();

  // 7. Click View Cart
  await page.getByText('View Cart').click();

  // 8. Verify both products are added to Cart
  await expect(page.locator('#product-1')).toBeVisible();
  await expect(page.locator('#product-2')).toBeVisible();

  // 9. Verify first product price, quantity and total
  await expect(page.locator('#product-1 .cart_price')).toBeVisible();
  await expect(page.locator('#product-1 .cart_quantity button')).toHaveText('1');
  await expect(page.locator('#product-1 .cart_total')).toBeVisible();

  // 10. Verify second product price, quantity and total
  await expect(page.locator('#product-2 .cart_price')).toBeVisible();
  await expect(page.locator('#product-2 .cart_quantity button')).toHaveText('1');
  await expect(page.locator('#product-2 .cart_total')).toBeVisible();

});