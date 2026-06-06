import { test, expect } from '@playwright/test';

test('Place Order: Register before Checkout', async ({ page }) => {

  const uniqueEmail = `deekshitha${Date.now()}@gmail.com`;

  // Step 1 & 2
  await page.goto('https://automationexercise.com');

  // Step 3
  await expect(page).toHaveTitle(/Automation Exercise/);

  // Step 4
  await page.getByRole('link', { name: 'Signup / Login' }).click();

  // Step 5 - Signup
  await page.locator('input[data-qa="signup-name"]').fill('Deekshitha');
  await page.locator('input[data-qa="signup-email"]').fill(uniqueEmail);
  await page.locator('button[data-qa="signup-button"]').click();

  // Account Information
  await page.locator('#id_gender2').check();
  await page.locator('#password').fill('Test@123');

  await page.locator('#days').selectOption('10');
  await page.locator('#months').selectOption('May');
  await page.locator('#years').selectOption('1995');

  await page.locator('#first_name').fill('Naga');
  await page.locator('#last_name').fill('Deekshitha');
  await page.locator('#company').fill('QA Company');
  await page.locator('#address1').fill('Chicago');
  await page.locator('#country').selectOption('United States');
  await page.locator('#state').fill('Illinois');
  await page.locator('#city').fill('Chicago');
  await page.locator('#zipcode').fill('60616');
  await page.locator('#mobile_number').fill('1234567890');

  await page.locator('button[data-qa="create-account"]').click();

  // Step 6
  await expect(
  page.locator('h2[data-qa="account-created"]')
).toContainText('Account Created!');
  await page.locator('a[data-qa="continue-button"]').click();

  // Step 7
  await expect(page.locator('a:has-text("Logged in as")')).toBeVisible();

  // Step 8 - Add Product
  await page.getByRole('link', { name: 'Products' }).click();

  await page.locator('.product-image-wrapper').first().hover();

  await page.locator('.add-to-cart').first().click({ force: true });

  await page.locator('button.close-modal').click();

  // Step 9
  await page.getByRole('link', { name: 'Cart' }).click();

  // Step 10
  await expect(page).toHaveURL(/view_cart/);
  await expect(page.locator('#cart_info_table')).toBeVisible();

  // Step 11
  await page.locator('.check_out').click();

  // Step 12
  await expect(page.locator('#address_delivery')).toBeVisible();
  await expect(page.locator('#cart_info')).toBeVisible();

  // Step 13
  await page.locator('textarea[name="message"]').fill(
    'Please deliver my order quickly.'
  );

  await page.getByRole('link', { name: 'Place Order' }).click();

  // Step 14
  await page.locator('input[data-qa="name-on-card"]').fill('Naga Deekshitha');

  await page.locator('input[data-qa="card-number"]').fill('4111111111111111');

  await page.locator('input[data-qa="cvc"]').fill('123');

  await page.locator('input[data-qa="expiry-month"]').fill('12');

  await page.locator('input[data-qa="expiry-year"]').fill('2030');

  // Step 15
  await page.locator('button[data-qa="pay-button"]').click();

  // Step 16
  await expect(
  page.locator('#form')
      .getByText('Congratulations! Your order has been confirmed!')
).toBeVisible();

  // Step 17
  await page.getByRole('link', { name: 'Delete Account' }).click();

  // Step 18
 await expect(
  page.locator('h2[data-qa="account-deleted"]')
).toContainText('Account Deleted!');
  await page.locator('a[data-qa="continue-button"]').click();
});