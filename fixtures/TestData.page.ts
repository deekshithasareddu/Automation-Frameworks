// Grabs Playwright's built-in test runner, nicknames it base
import { test as base } from '@playwright/test';

// Makes your custom test available to all test files
// Creates YOUR custom test — ready to add fixtures later
export const test = base.extend({});

// const is a JavaScript keyword used to create a variable
// whose value should not be reassigned later.

// Store this URL in a variable called baseURL
// and do not change it later
export const baseURL = 'https://automationexercise.com';

// A fixed account that already exists in the website
// Used for login tests only — no extra fields needed
// Email & password never change between runs
export const validUser = {
  name: 'Naga Deekshitha',
  email: 'nagadeekshitha123@example.com',
  password: 'Deekshitha1a@A',
};

export const newUser = {
  name: 'Naga Deekshitha',

  // Dynamic unique email generated every run
  email: `newuser${Date.now()}@example.com`,

  password: 'Deekshitha1a@A',
  firstName: 'Naga Deekshitha',
  lastName: 'Sareddu',
  company: 'yelsesoft',
  address: '41218 canton ct',
  address2: '',
  country: 'United States',
  state: 'Michigan',
  city: 'Canton',
  zipcode: '48188',
  mobileNumber: '9018109444',
};

export const products = {

  // typed into the search bar
  searchedProduct: 'blue',

  // top navigation category
  category: 'Women',

  // dropdown sub-category
  subCategory: 'Dress',
};

// 4111111111111111 is a universally accepted
// fake Visa card number for testing only

export const payment = {
  cardName: 'Test Card',

  // Standard fake Visa test card
  cardNumber: '4111111111111111',

  cvc: '123',
  expiryMonth: '12',
  expiryYear: '2025',
};
export const TestData = { baseURL, validUser, newUser, products, payment };