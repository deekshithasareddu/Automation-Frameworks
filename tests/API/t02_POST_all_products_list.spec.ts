import { test, expect } from '@playwright/test';

test('POST To All Products List API Test', async ({ request }) => {

  const response = await request.post(
    'https://automationexercise.com/api/productsList'
  ); 
  //response is a variable that holds the response returned by the API after making the POST request to the specified URL.
// it contains information such as the HTTP status code, Headers, and the response body returned by the server.
  // HTTP status returned by the server
  expect(response.status()).toBe(200);

  const responseBody = await response.json();


  // Validate the API's business response
  expect(responseBody.responseCode).toBe(405);
  expect(responseBody.message).toBe('This request method is not supported.');
  console.log(responseBody);
});