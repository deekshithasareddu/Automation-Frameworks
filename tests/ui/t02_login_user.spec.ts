import { expect }         from '@playwright/test';
import { test, TestData } from '../../fixtures/TestData.page';

test('Login and Delete Account Test', async ({ page }) => {

  // Step 1 & 2: Launch browser and navigate
  await page.goto(TestData.baseURL, { waitUntil: 'domcontentloaded' });

  // Step 3: Verify home page
  await expect(page).toHaveTitle(/Automation Exercise/);

  // Step 4: Click Signup / Login
  await page.click('a[href="/login"]');

  // Step 5: Verify Login page
  await expect(
    page.locator('h2:has-text("Login to your account")')
  ).toBeVisible();

  // ── Register new user first ────────────────────────────────
  await page.fill('[data-qa="signup-name"]',  TestData.newUser.name);
  await page.fill('[data-qa="signup-email"]', TestData.newUser.email);
  await page.click('[data-qa="signup-button"]');

  // ── Fill account details ───────────────────────────────────
  await page.fill('[data-qa="password"]', TestData.newUser.password);

  // Date of birth
  await page.selectOption('[data-qa="days"]',   '1');
  await page.selectOption('[data-qa="months"]', 'January');
  await page.selectOption('[data-qa="years"]',  '2000');

  // Checkboxes
  await page.check('[id="newsletter"]');
  await page.check('[id="optin"]');

  // Personal details
  await page.fill('[data-qa="first_name"]',    TestData.newUser.firstName);
  await page.fill('[data-qa="last_name"]',     TestData.newUser.lastName);
  await page.fill('[data-qa="company"]',       TestData.newUser.company);
  await page.fill('[data-qa="address"]',       TestData.newUser.address);
  await page.fill('[data-qa="address2"]',      TestData.newUser.address2);
  await page.selectOption('[data-qa="country"]', { label: TestData.newUser.country });
  await page.fill('[data-qa="state"]',         TestData.newUser.state);
  await page.fill('[data-qa="city"]',          TestData.newUser.city);
  await page.fill('[data-qa="zipcode"]',       TestData.newUser.zipcode);
  await page.fill('[data-qa="mobile_number"]', TestData.newUser.mobileNumber);

  // Submit registration
  await page.click('[data-qa="create-account"]');

  // Verify account created
  await expect(
    page.locator('[data-qa="account-created"]')
  ).toBeVisible();

  await page.click('[data-qa="continue-button"]');

  // ── Logout ─────────────────────────────────────────────────
  await page.click('a[href="/logout"]');
  // ← Wait for login page elements instead of waitForLoadState
  await expect(
    page.locator('h2:has-text("Login to your account")')
  ).toBeVisible();

  // Step 6: Fill login form
  await page.fill('[data-qa="login-email"]',    TestData.newUser.email);
  await page.fill('[data-qa="login-password"]', TestData.newUser.password);

  // Step 7: Click login
  await page.click('[data-qa="login-button"]');
  // ← Wait for logged-in nav item instead of waitForLoadState
  await expect(
    page.locator('li:has-text("Logged in as")')
  ).toBeVisible();

  // Step 8: Verify logged in
  await expect(
    page.locator('li:has-text("Logged in as")')
  ).toBeVisible();

  // Step 9: Delete account
  await page.click('a[href="/delete_account"]');

  // Step 10: Verify deleted
  await expect(
    page.locator('[data-qa="account-deleted"]')
  ).toBeVisible();

});