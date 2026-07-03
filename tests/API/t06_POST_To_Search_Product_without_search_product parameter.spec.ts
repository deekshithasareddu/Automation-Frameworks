import { test, expect } from '@playwright/test';

test('POST To Search Product without search_product parameter', async ({ request }) => {

    const response = await request.post('https://automationexercise.com/api/searchProduct');

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    
    expect(responseBody.responseCode).toBe(400);
    expect(responseBody.message).toBe('Bad request, search_product parameter is missing in POST request.');
    console.log(responseBody);
});   