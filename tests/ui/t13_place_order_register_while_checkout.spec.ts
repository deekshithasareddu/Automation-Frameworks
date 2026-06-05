import { test, expect } from '@playwright/test';

test('Place Order: Register while Checkout', async ({ page }) => {

  const uniqueEmail = `deekshitha${Date.now()}@gmail.com`;

  await page.goto('https://automationexercise.com');

  await expect(page).toHaveTitle(/Automation Exercise/);

  // Click Products page first
  await page.getByRole('link', { name: 'Products' }).click();

  await expect(page).toHaveURL(/products/);

  // Hover first product
  await page.locator('.product-image-wrapper').first().hover();

  // Add first product
  await page.locator('.add-to-cart').first().click({ force: true });

  // Wait a little
  await page.waitForTimeout(2000);

  // Directly go to cart page
  await page.goto('https://automationexercise.com/view_cart');

  // Verify cart page
  await expect(page).toHaveURL(/view_cart/);

  // Verify product exists in cart
  await expect(page.locator('#cart_info_table')).toBeVisible();

  // Proceed To Checkout
  await page.locator('.check_out').click();

  // Register/Login
  await page.getByRole('link', { name: 'Register / Login' }).click();
  // Signup
  await page.locator('[data-qa="signup-name"]').fill('Deekshitha');
  await page.locator('[data-qa="signup-email"]').fill(uniqueEmail);
  await page.locator('[data-qa="signup-button"]').click();

  await expect(page.locator('#id_gender2')).toBeVisible();

  await page.check('#id_gender2');
  await page.fill('#password', 'Test@123');

  await page.selectOption('#days', '10');
  await page.selectOption('#months', '5');
  await page.selectOption('#years', '1995');

  await page.fill('#first_name', 'Naga');
  await page.fill('#last_name', 'Deekshitha');
  await page.fill('#company', 'ABC Company');
  await page.fill('#address1', 'Chicago Street');
  await page.selectOption('#country', 'United States');
  await page.fill('#state', 'Illinois');
  await page.fill('#city', 'Chicago');
  await page.fill('#zipcode', '60616');
  await page.fill('#mobile_number', '7312488693');

  await page.locator('[data-qa="create-account"]').click();

  

 await expect(
  page.locator('[data-qa="account-created"]')
).toContainText('Account Created!');

  await page.locator('[data-qa="continue-button"]').click();

  await expect(
    page.locator('a').filter({ hasText: 'Logged in as' })
  ).toContainText('Deekshitha');

  await page.getByRole('link', { name: 'Cart' }).click();

  await page.locator('.check_out').click();

  await expect(page.getByText('Address Details')).toBeVisible();
  await expect(page.getByText('Review Your Order')).toBeVisible();

  await page.fill(
    'textarea[name="message"]',
    'Please deliver the order carefully'
  );

  await page.getByText('Place Order').click();

  await page.fill('input[name="name_on_card"]', 'Naga Deekshitha');
  await page.fill('input[name="card_number"]', '4111111111111111');
  await page.fill('input[name="cvc"]', '123');
  await page.fill('input[name="expiry_month"]', '12');
  await page.fill('input[name="expiry_year"]', '2030');

  await page.click('#submit');

  await expect(
    page.getByText('Congratulations! Your order has been confirmed!')
  ).toBeVisible();

  await page.getByRole('link', { name: 'Delete Account' }).click();

  await expect(
  page.locator('[data-qa="account-deleted"]')
).toContainText('Account Deleted!');

  await page.locator('[data-qa="continue-button"]').click();
});