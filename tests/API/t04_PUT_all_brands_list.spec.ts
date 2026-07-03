import {test,expect} from '@playwright/test';

test('Put To ALL Brands List API Test', async ({request})=>{

    const response =await request.put('https://automationexercise.com/api/brandsList');
    //const is a JavaScript/typescript keyword used to declare a variable.

    expect(response.status()).toBe(200);
     // This API returns HTTP 200, but response body has responseCode 405

     const responsebody = await response.json();
     
    expect(responsebody.responseCode).toBe(405);
  expect(responsebody.message).toBe('This request method is not supported.');
  console.log(responsebody);
});