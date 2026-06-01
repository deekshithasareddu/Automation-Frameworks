// fixtures/TestData.page.ts

import { test as base } from '@playwright/test';

// Custom test export
export const test = base.extend({});

// Base URL
export const baseURL =
  'https://automationexercise.com';

// Dynamic unique email
const uniqueEmail =
  `newuser${Date.now()}@example.com`;

// Existing valid user
export const validUser = {
  name: 'Naga Deekshitha',
  email: 'nagadeekshitha@gmail.com',
  password: 'Deekshitha1a@A',
};

// New user data
export const newUser = {
  name: 'Naga Deekshitha',

  email: uniqueEmail,

  password: 'Deekshitha1a@A',

  firstName: 'Naga Deekshitha',
  lastName: 'Sareddu',
  company: 'Yelsesoft',
  address: '41218 canton ct',
  address2: '',
  country: 'United States',
  state: 'Michigan',
  city: 'Canton',
  zipcode: '48188',
  mobileNumber: '9018109444',
};

// Product data
export const products = {
  searchedProduct: 'blue',
  category: 'Women',
  subCategory: 'Dress',
};

// Payment data
export const payment = {
  cardName: 'Test Card',
  cardNumber: '4111111111111111',
  cvc: '123',
  expiryMonth: '12',
  expiryYear: '2025',
};

// Final object export
export const TestData = {
  baseURL,
  validUser,
  newUser,
  products,
  payment,

    contactData: {
        name: 'Naga Deekshitha',
        email: 'deekshitha@test.com',
        subject: 'Playwright Testing',
        message: 'This is a test message using Playwright.'
    },

    uploadFilePath: 'test-data/sample.txt'
};