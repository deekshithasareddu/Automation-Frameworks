import {test, expect} from '@playwright/test';

test('POST To Verify Login with invalid details', async ({request}) =>{

    const response = await request.post('https://automationexercise.com/api/verifyLogin',
        {
            form:{
                email:'deekshithasareduw@gmail.com',
                password:'nagadeekshitha1a@A'
            }
        }
    );

    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.responseCode).toBe(404);

    expect(responseBody.message).toBe('User not found!');

    console.log(responseBody);


})