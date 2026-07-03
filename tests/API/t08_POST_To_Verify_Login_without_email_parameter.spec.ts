import {test, expect} from '@playwright/test';

test('POST To Verify Login without email parameter', async ({request}) =>{

    const response = await request.post('https://automationexercise.com/api/verifyLogin',
        {
            form:{
                password:'NagaDeekshitha1a@A'
            }
        }
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.responseCode).toBe(400);
    expect(responseBody.message).toBe('Bad request, email or password parameter is missing in POST request.');
    console.log(responseBody);
});