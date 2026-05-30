import {test ,expect} from '@playwright/test';
test('Search Product',async ({page}) => {
    // 1. Launch browser & Navigate to URL
    await page.goto('https://automationexercise.com');

    // 2. Verify that home page is visible successfully
    await expect(page).toHaveTitle(/Automation Exercise/);

    //3.click on 'products' button
    await page.getByRole('link', {name: 'products'}).first().click();
    
     // 4. Verify user is navigated to ALL PRODUCTS page successfully
     await expect(page).toHaveURL(/products/);

     // 5. Enter product name in search input
     await page.locator('#search_product').type('Blue Top');

     //6.click on search button
     await page.locator('#submit_search').click();

     //7.verify 'searched produucts' is visible
     await expect(page.getByText('Searched Products')).toBeVisible();

     // 8. Verify all products related to search are visible
     await expect(
        page.locator('.features_items')
    ).toContainText('Blue Top');
});