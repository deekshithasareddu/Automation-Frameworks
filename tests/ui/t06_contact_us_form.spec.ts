import { test, expect } from '@playwright/test';
import { TestData } from '../../fixtures/TestData.page';
  import path from 'path';

test('Contact Us Form Test', async ({ page }) => {

  // 1. Launch browser & 2. Navigate to URL
  await page.goto('https://automationexercise.com');

  // 3. Verify home page is visible successfully
  await expect(page).toHaveTitle(/Automation Exercise/);
   // 4. Click on 'Contact Us' button
  await page.click('a[href="/contact_us"]');

  // 5. Verify 'GET IN TOUCH' is visible
  await expect(
    page.getByText('Get In Touch')
  ).toBeVisible();
   // 6. Enter name, email, subject and message
  await page.fill('[data-qa="name"]', 'Naga Deekshitha');
  await page.fill('[data-qa="email"]', 'deekshitha@test.com');
  await page.fill('[data-qa="subject"]', 'Playwright Testing');
  await page.fill('[data-qa="message"]', 'This is a test message using Playwright.');
  //upload file
  await page.setInputFiles(
  'input[name="upload_file"]',
  path.join(__dirname, '../../test-data/sample.txt')
);