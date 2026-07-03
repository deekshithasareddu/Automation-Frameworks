import { test, expect } from '@playwright/test';

test('POST To Verify Login with valid details', async ({ request }) => {

  const response = await request.post(
    'https://automationexercise.com/api/verifyLogin',
    {
      form: {
        email: 'deekshithasareddu@gmail.com',
        password: 'NagaDeekshitha1a@A'
      }
    }
  );

  // Verify HTTP Status Code
  expect(response.status()).toBe(200);

  // Convert response to JSON
  const responseBody = await response.json();

  // Verify API Response Code
  expect(responseBody.responseCode).toBe(404);

  // Verify Response Message
  expect(responseBody.message).toBe('User not found!');

  // Print Response
  console.log(responseBody);

});