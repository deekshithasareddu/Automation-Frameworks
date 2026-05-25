import { Page, expect } from '@playwright/test';

export class ContactUsPage {

    constructor(public page: Page) {}

    // Locators
    contactUsBtn = 'a[href="/contact_us"]';
    getInTouchText = 'h2:has-text("Get In Touch")';

    nameInput = '[data-qa="name"]';
    emailInput = '[data-qa="email"]';
    subjectInput = '[data-qa="subject"]';
    messageInput = '[data-qa="message"]';

    uploadFileInput = 'input[name="upload_file"]';

    submitBtn = '[data-qa="submit-button"]';

    successMessage =
        'text=Success! Your details have been submitted successfully.';

    homeBtn = 'span:has-text("Home")';

    // Methods

    async navigateToHomePage(url: string) {
        await this.page.goto(url);
    }

    async verifyHomePage() {
        await expect(this.page)
            .toHaveTitle(/Automation Exercise/);
    }

    async clickContactUs() {
        await this.page.click(this.contactUsBtn);
    }

    async verifyGetInTouchVisible() {
        await expect(
            this.page.locator(this.getInTouchText)
        ).toBeVisible();
    }

    async enterContactDetails(
        name: string,
        email: string,
        subject: string,
        message: string
    ) {

        await this.page.fill(this.nameInput, name);

        await this.page.fill(this.emailInput, email);

        await this.page.fill(this.subjectInput, subject);

        await this.page.fill(this.messageInput, message);
    }

    async uploadFile(filePath: string) {

        await this.page
            .locator(this.uploadFileInput)
            .setInputFiles(filePath);
    }

    async clickSubmit() {

        page.on('dialog', async dialog => {
            await dialog.accept();
        });

        await this.page.click(this.submitBtn);
    }

    async verifySuccessMessage() {

        await expect(
            this.page.locator(this.successMessage)
        ).toBeVisible();
    }

    async clickHomeButton() {

        await this.page.click(this.homeBtn);
    }
}