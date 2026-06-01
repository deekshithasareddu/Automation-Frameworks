import {test ,expect} from '@playwright/test';
test('Search Product',async ({page}) => {
    // 1. Launch browser & Navigate to URL
    await page.goto('https://automationexercise.com');

    // 2. Verify that home page is visible successfully
    await expect(page).toHaveTitle(/Automation Exercise/);

     // 3. Click 'Cart' button
    await page.getByRole('link', { name: /Cart/i }).click();

    // 4. Scroll down to footer
    await page.locator('footer').scrollIntoViewIfNeeded();
    //5.Verify text 'SUBSCRIPTION'
    await expect(page.getByText('SUBSCRIPTION')).toBeVisible();

    //6. Enter email address in input and click arrow button
    await page.fill('#susbscribe_email', `test${Date.now()}@gmail.com`);
    await expect(page.locator('#subscribe')).toBeVisible();
    await expect(page.locator('#subscribe')).toBeEnabled();
    await page.locator('#subscribe').click();
    //7.Verify success message 'You have been successfully subscribed!' is visible
    await expect(page.getByText('You have been successfully subscribed!')).toBeVisible();
});    