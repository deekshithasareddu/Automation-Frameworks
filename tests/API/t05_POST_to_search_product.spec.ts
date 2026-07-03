import {test, expect} from '@playwright/test';

test('Post to search product API Test', async ({request}) =>{

    const response = await request.post('https://automationexercise.com/api/searchProduct',{
        form: {
            search_product: 'Blue top'
}
    });

    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.responseCode).toBe(200);
    expect(responseBody).toHaveProperty('products');
    expect(responseBody.products.length).toBeGreaterThan(0);
    console.log(responseBody);

})