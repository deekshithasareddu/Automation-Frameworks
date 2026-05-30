import {test ,expect} from '@playwright/test';

test('Vefify Test Cases Page', async ({page}) => {

    //1.Launch browser & Navigate to URL
    await page.goto('https://automationexercise.com');

    //2. Verify home page is visible successfully
    await expect(page).toHaveTitle(/Automation Exercise/);

    //3.Click on 'Test Cases' button
    await page.getByRole('link', { name: 'Test Cases' }).first().click();

    //4.  Verify user is navigated to Test Cases page
    await expect(page).toHaveURL(/test_cases/);


});