import { Page, expect }
from '@playwright/test';

export class HomePage {

  readonly page: Page;

  constructor(page: Page) {

    this.page = page;
  }

  // Navigate to Home Page
  async navigateToHomePage() {

    await this.page.goto(
      'https://automationexercise.com'
    );
  }

  // Verify Home Page
  async verifyHomePage() {

    await expect(this.page)
      .toHaveTitle(/Automation Exercise/);
  }

  // Click Signup/Login
  async clickSignupLogin() {

    await this.page.click(
      'a[href="/login"]'
    );
  }
}