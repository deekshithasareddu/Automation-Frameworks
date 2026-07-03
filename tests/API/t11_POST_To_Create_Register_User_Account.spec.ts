import {test, expect} from '@playwright/test';

test('POST To Verify Login with invalid details', async ({request}) =>{

    const email = `deekshithanaga${Date.now()}@gmail.com`;
    const response = await request.post('https://automationexercise.com/api/createAccount',
        {
            form:{
                name:'Naga Deekshitha Sareddu',
                email:email,
                password:'NagaDeekshitha1a@A',
                title:'Mrs',
                birth_date:'25',
                birth_month:'9',
                birth_year:'1999',
                firstname:'Naga Deekshitha',
                lastname:'Sareddu',
                company:'HCL',
                address1:'2801 S king dr',
                address2:'king dr',
                country:'USA',
                zipcode:'60616',
                state:'IL',
                city:'chicago',
                mobile_number:'901810944'
            }
        }
    );
    expect(response.status()).toBe(200);

    const responseBody = await response.json();

    expect(responseBody.responseCode).toBe(201);
    expect(responseBody.message).toBe('User created!');


    console.log("Status:", response.status());
    console.log("Email Used:", email);
    console.log("response:", responseBody);
});