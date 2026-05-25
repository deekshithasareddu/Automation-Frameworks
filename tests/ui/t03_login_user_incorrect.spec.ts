import { expect } from "@playwright/test";
import { test, TestData } from '../../fixtures/TestData.page';

test('Login with Invalid Credentials Test', async ({ page }) => {

    // Navigate
    await page.goto(TestData.baseURL, {
        waitUntil: 'domcontentloaded'
    });

    // Verify home page
    await expect(page)
        .toHaveTitle(/Automation Exercise/);

    // Click login
    await page.click('a[href="/login"]');

    // Verify login page
    await expect(
        page.locator(
            'h2:has-text("Login to your account")'
        )
    ).toBeVisible();

    // Invalid credentials
    await page.fill(
        '[data-qa="login-email"]',
        'wrongemail@example.com'
    );

    await page.fill(
        '[data-qa="login-password"]',
        'WrongPass@123'
    );

    // Click login
    await page.click(
        '[data-qa="login-button"]'
    );

    // Verify error message
    await expect(
        page.locator(
            'p:has-text("Your email or password is incorrect!")'
        )
    ).toBeVisible();

});