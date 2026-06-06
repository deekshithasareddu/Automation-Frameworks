import {test, expect} from '@playwright/test';

test('View category products', async ({page})=>{

    //step 1 & 2 
    await page.goto('https://automationexercise.com');

    //step 3
    await expect(page).toHaveTitle(/Automation Exercise/);

    //step 4
    await page.getByRole('link', {name: 'Products'}).click();

    //step 5:
    await expect(page.getByText('Category')).toBeVisible();

    //step 6
    await page.locator('a[href="#Women"]').click();

    //step 7
    await page.getByRole('link',{name: 'Dress'}).click();

    //step 8
    await expect(page).toHaveURL(/category_products/);
    await expect(page.getByText('WOMEN - DRESS PRODUCTS')).toBeVisible();
    
    //step 10
    await page.getByRole('link',{name: 'Men'}).nth(1).click();

    //step 7
    await page.getByRole('link',{name: 'Tshirts'}).click();

    //step 8
    await expect(page).toHaveURL(/category_products/);
    await expect(page.getByText('MEN - TSHIRTS PRODUCTS')).toBeVisible();
});


