import { test, expect } from '@playwright/test';
import { TestData } from '../../fixtures/TestData.page';

test('Login and Logout Test', async ({ page }) => {

    // Navigate
    await page.goto(TestData.baseURL);

    // Verify home page
    await expect(page)
        .toHaveTitle(/Automation Exercise/);

    // Click Signup/Login
    await page.click('a[href="/login"]');

    // Verify signup page
    await expect(
        page.locator('h2:has-text("New User Signup!")')
    ).toBeVisible();

    // Register NEW USER
    await page.fill(
        '[data-qa="signup-name"]',
        TestData.newUser.name
    );

    await page.fill(
        '[data-qa="signup-email"]',
        TestData.newUser.email
    );

    // Click signup
    await page.click(
        '[data-qa="signup-button"]'
    );

    // Fill account details
    await page.check('#id_gender1');

    await page.fill(
        '#password',
        TestData.newUser.password
    );

    await page.selectOption('#days', '1');
    await page.selectOption('#months', '1');
    await page.selectOption('#years', '2000');

    // Newsletter
    await page.check('#newsletter');

    // Address details
    await page.fill(
        '#first_name',
        TestData.newUser.firstName
    );

    await page.fill(
        '#last_name',
        TestData.newUser.lastName
    );

    await page.fill(
        '#company',
        TestData.newUser.company
    );

    await page.fill(
        '#address1',
        TestData.newUser.address
    );

    await page.selectOption(
        '#country',
        TestData.newUser.country
    );

    await page.fill(
        '#state',
        TestData.newUser.state
    );

    await page.fill(
        '#city',
        TestData.newUser.city
    );

    await page.fill(
        '#zipcode',
        TestData.newUser.zipcode
    );

    await page.fill(
        '#mobile_number',
        TestData.newUser.mobileNumber
    );

    // Create account
    await page.click(
        '[data-qa="create-account"]'
    );

    // Verify account created
    await expect(
    page.getByText('Account Created!')
).toBeVisible();

    // Continue
    await page.click(
        '[data-qa="continue-button"]'
    );

    // Verify logged in
    await expect(
        page.locator('a:has-text("Logged in as")')
    ).toBeVisible({
        timeout: 10000
    });

    // Logout
    await page.click('a[href="/logout"]');

    // Verify logout successful
    await expect(
        page.locator(
            'h2:has-text("Login to your account")'
        )
    ).toBeVisible();

});