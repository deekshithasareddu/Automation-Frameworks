import {test, expect} from '@playwright/test';

test('PUT To verify Update user account',async ({request}) =>{

    const response = await request.put(' https://automationexercise.com/api/updateAccount',
        {
            form:{
        name: 'Naga Deekshitha',
        email: 'nagadeekshitha126@gmail.com',
        password: 'NagaDeekshitha1a@A',
        title: 'Mrs',
        birth_date: '22',
        birth_month: '09',
        birth_year: '2002',
        firstname: 'Naga Deekshitha',
        lastname: 'Sareddu',
        company: 'CBU',
        address1: '41218 canton ct',
        address2: 'canton',
        country: 'USA',
        zipcode: '48188',
        state: 'MI',
        city: 'canton',
        mobile_number: '9018109444'
            }
        }
    );
     expect(response.status()).toBe(200);
    
     const responseBody = await response.json();

     console.log(responseBody);

     expect(responseBody.responseCode).toBe(200);

     expect(responseBody.message).toBe('User updated!');


});