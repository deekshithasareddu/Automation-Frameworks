import { test, expect } from '@playwright/test';

test('Contact Us Form Test', async ({ page }) => {

  // 1. Launch browser & Navigate to URL
  await page.goto('https://automationexercise.com');

  // 2. Verify home page is visible successfully
  await expect(page).toHaveTitle(/Automation Exercise/);

  // 3. Click on Contact Us button
  await page.locator('a[href="/contact_us"]').click();

  // 4. Verify GET IN TOUCH is visible
  await expect(
    page.getByText('Get In Touch')
  ).toBeVisible();

  // 5. Enter name, email, subject and message
  await page.locator('[data-qa="name"]').fill('Naga Deekshitha');

  await page.locator('[data-qa="email"]').fill('deekshitha@test.com');

  await page.locator('[data-qa="subject"]').fill('Playwright Testing');

  await page.locator('[data-qa="message"]').fill(
    'This is a test message using Playwright.'
  );

  // 6. Accept alert popup
  page.once('dialog', async dialog => {
    await dialog.accept();
  });

  // 7. Click Submit button
  await page.locator('[data-qa="submit-button"]').click();

  // 8. Wait for success message
  await expect(
    page.locator('.status.alert.alert-success')
  ).toContainText('Success', {
    timeout: 10000
  });

  // 9. Navigate back to Home Page
  await page.goto('https://automationexercise.com');

  // 10. Verify Home Page loaded
  await expect(page).toHaveTitle(/Automation Exercise/);

});