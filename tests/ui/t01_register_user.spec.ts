import { test, expect } from '@playwright/test';

test('Test Case 1 - Register User', async ({ page }) => {

  // Step 1 & 2: Launch browser and Navigate to url
  await page.goto('https://automationexercise.com');

  // Step 3: Verify that home page is visible successfully
  await expect(page).toHaveTitle(/Automation Exercise/);

  // Step 4: Click on 'Signup / Login' button
  await page.click('a[href="/login"]');

  // Step 5: Verify 'New User Signup!' is visible
  await expect(page.locator('h2:has-text("New User Signup!")')).toBeVisible();

  // Step 6: Enter name and email address
  await page.fill('input[data-qa="signup-name"]', 'Naga Deekshitha');
  await page.fill('input[data-qa="signup-email"]', 'deekshithasareddu123@gmail.com');

  // Step 7: Click 'Signup' button
  await page.click('button[data-qa="signup-button"]');

  // Step 8: Verify that 'ENTER ACCOUNT INFORMATION' is visible
  await expect(page.locator('b:has-text("Enter Account Information")')).toBeVisible();

  // Step 9: Fill details: Title, Name, Email, Password, Date of birth
  await page.check('#id_gender1'); // Title - Mr.
  await page.fill('#password', 'Deekshitha1a@A');
  await page.selectOption('#days', '25');
  await page.selectOption('#months', '9'); // September = 9
  await page.selectOption('#years', '1999');

  // Step 10: Select checkbox 'Sign up for our newsletter!'
  await page.check('#newsletter');

  // Step 11: Select checkbox 'Receive special offers from our partners!'
  await page.check('#optin');

  // Step 12: Fill details: First name, Last name, Company, Address, Country, State, City, Zipcode, Mobile Number
  await page.fill('#first_name', 'Naga Deekshitha');
  await page.fill('#last_name', 'Sareddu');
  await page.fill('#company', 'Yelsesoft');
  await page.fill('#address1', '41218 canton ct');
  await page.fill('#address2', '');
  await page.selectOption('#country', 'United States');
  await page.fill('#state', 'Michigan');
  await page.fill('#city', 'Canton');
  await page.fill('#zipcode', '48188');
  await page.fill('#mobile_number', '9018109444');

  // Step 13: Click 'Create Account' button
  await page.click('button[data-qa="create-account"]');

  // Step 14: Verify that 'ACCOUNT CREATED!' is visible
  await expect(page.locator('b:has-text("Account Created!")')).toBeVisible();

  // Step 15: Click 'Continue' button
  await page.click('a[data-qa="continue-button"]');

  // Step 16: Verify that 'Logged in as username' is visible
  await expect(page.locator('a:has-text("Logged in as")')).toBeVisible();

  // Step 17: Click 'Delete Account' button
  await page.click('a[href="/delete_account"]');

  // Step 18: Verify that 'ACCOUNT DELETED!' is visible
  await expect(page.locator('b:has-text("Account Deleted!")')).toBeVisible();

});