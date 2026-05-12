import {
  Page,
  Locator,
  expect
} from '@playwright/test';

export class LoginPage {

  readonly page: Page;

  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly deleteButton: Locator;

  constructor(page: Page) {

    this.page = page;

    this.emailInput =
      page.locator(
        '[data-qa="login-email"]'
      );

    this.passwordInput =
      page.locator(
        '[data-qa="login-password"]'
      );

    this.loginButton =
      page.locator(
        '[data-qa="login-button"]'
      );

    this.deleteButton =
      page.locator(
        'a[href="/delete_account"]'
      );
  }

  // Verify Login Page
  async verifyLoginPage() {

    await expect(
      this.page.getByRole('heading', {
        name: 'Login to your account'
      })
    ).toBeVisible();
  }

  // Login Method
  async login(
    email: string,
    password: string
  ) {

    await this.emailInput.fill(email);

    await this.passwordInput.fill(password);

    await this.loginButton.click();
  }

  // Verify Logged In
  async verifyLoggedIn() {

    await expect(
      this.page.locator(
        'text=Logged in as'
      )
    ).toBeVisible();
  }

  // Delete Account
  async clickDeleteAccount() {

    await this.deleteButton.click();
  }

  // Verify Account Deleted
  async verifyAccountDeleted() {

    await expect(
      this.page.getByText(
        'ACCOUNT DELETED!'
      )
    ).toBeVisible();
  }
}