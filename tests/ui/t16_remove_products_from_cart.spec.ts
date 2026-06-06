import {test, expect} from '@playwright/test';

test('Remove Products from Cart', async ({page})=>{

    //step 1 & 2
    await page.goto('https://automationexercise.com');

    //step 3
    await expect(page).toHaveTitle(/Automation Exercise/);

    //step 4
    await page.getByRole('link', {name: 'Products'}).click(); 

    await page.locator('.product-image-wrapper').first().hover();

    await page.locator('.add-to-cart').first().click();

    //step 5
    await page.getByRole('link', { name: 'View Cart' }).click();

    //step 6 Verify that cart page is displayed
    await expect(page).toHaveURL(/view_cart/);
    await expect(page.locator('#cart_info')).toBeVisible();

    //step 7 Remove product from cart
    await page.locator('.cart_quantity_delete').first().click();

    //step 8
    await expect(page.locator('.cart_quantity_delete')).toHaveCount(0);
});