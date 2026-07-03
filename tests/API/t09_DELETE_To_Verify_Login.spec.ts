import {test, expect} from '@playwright/test';

test('POST To Verify Login with valid details', async ({request}) =>{

    const response = await request.delete('https://automationexercise.com/api/verifyLogin');

    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();

    expect(responseBody.responseCode).toBe(405);
    expect(responseBody.message).toBe('This request method is not supported.');
    console.log(responseBody);


}) 