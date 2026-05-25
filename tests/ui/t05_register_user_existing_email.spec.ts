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

    //verify new user signup
    await expect(
    page.getByText('New User Signup!')).toBeVisible();
    //enter name 
    await page.fill('[data-qa="signup-name"]', TestData.validUser.name);
    //enter email
    await page.fill('[data-qa="signup-email"]', TestData.validUser.email);
    //click signup
    await page.click('[data-qa="signup-button"]');
    // Verify error message
    await expect(page.locator("//p[text() = 'Email Address already exist!']")).toBeVisible();

});