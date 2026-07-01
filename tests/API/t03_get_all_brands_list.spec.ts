import { test, expect } from '@playwright/test';

test('Get all products list API test', async ({ request }) => {

    //API URL and Request Method: GET

  const response = await request.get('https://automationexercise.com/api/brandsList');

   //Response Code: 200

  expect(response.status()).toBe(200);

  const responseBody = await response.json();
   
  //Response JSON: All products list

  expect(responseBody).toHaveProperty('brands');

  expect(responseBody.brands.length).toBeGreaterThan(0);

  console.log(responseBody); //it is used to print the response body in the console for bebugging 

});