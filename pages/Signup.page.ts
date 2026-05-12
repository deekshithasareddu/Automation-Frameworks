import { Page, Locator } from '@playwright/test';

//Page = Browser tab/page that Playwright controls
//Locator = Finds webpage elements like textbox, button, link

//export makes this class available to other test files
export class SignupPage {

    //readonly = once assigned a value, it cannot be changed

    //variable name = page
    //Page = Playwright browser page datatype
    readonly page: Page;

    //variable name = nameInput
    //Locator = locator datatype for Name textbox
    readonly nameInput: Locator;

    //variable name = emailInput
    //Locator = locator datatype for Email textbox
    readonly emailInput: Locator;

    //variable name = signupButton
    //Locator = locator datatype for Signup button
    readonly signupButton: Locator;

    //When class starts, give me browser page
    //this.page = Chrome Browser
    constructor(page: Page) {

        //Store browser page inside class
        this.page = page;

        //Find Name textbox using locator
        this.nameInput =
        page.locator('input[data-qa="signup-name"]');

        //Find Email textbox using locator
        this.emailInput =
        page.locator('input[data-qa="signup-email"]');

        //Find Signup button using locator
        this.signupButton =
        page.locator('button[data-qa="signup-button"]');
    }

    // Methods

    //enterName(method):
    //Types username inside Name textbox
    async enterName(name: string) {

        //fill() = types value inside textbox
        await this.nameInput.fill(name);
    }

    //enterEmail(method):
    //Types email inside Email textbox
    async enterEmail(email: string) {

        //fill() = types value inside textbox
        await this.emailInput.fill(email);
    }

    //clickSignupButton(method):
    //Clicks Signup button
    async clickSignupButton() {

        //click() = clicks Signup button
        await this.signupButton.click();
    }

    //signup(method):
    //Enters name
    //Enters email
    //Clicks Signup button
    async signup(name: string, email: string) {

        //Calls enterName() method
        await this.enterName(name);

        //Calls enterEmail() method
        await this.enterEmail(email);

        //Calls clickSignupButton() method
        await this.clickSignupButton();
    }
}