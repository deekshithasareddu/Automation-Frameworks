import {test, expect} from '@playwright/test';

test('DELETE To Verify Delete User Account', async ({request}) =>{

    const response = await request.delete('https://automationexercise.com/api/deleteAccount',
        {
            form:{
                email:'deekshithanaga@gmail.com',
                password:'NagaDeekshitha1a@A'
            }
        }
    );
    expect(response.status()).toBe(200);

    const responseBody = await response.json();

      console.log(responseBody);

    expect(responseBody.responseCode).toBe(200);
    expect(responseBody.message).toBe('Account deleted!');


});