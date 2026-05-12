import { expect } from "@playwright/test";
import {test,TestData} from '../../fixtures/TestData.page';


    //step 1 &2 :Launch browser and navigate
    test('Login with Invalid Credentials Test', async ({ page }) => {
        ///test(..) → starts a new test block
        //lohin with invalid credentials test = name  of thee test
        //async              → test runs asynchronously(waits for next step)
        //page            =Playwright gives you a browser page to work with
await page.goto(TestData.baseURL, { waitUntil: 'domcontentloaded' });
//page.goto()           → opens the URL in browser
//TestData.naseURL =URl Stored in TestData.page.ts
//waitUntil:'it will wait until the DOM content is loaded before proceding to the next step

     //step3: verify home page
     await expect(page).toHaveTitle(/Automation Exercise/);
     //expect(page)              → check the page itself
     //toHaveTitle(/Automation Exercise/)=Checks if the page title contains "Automation Exercise"
     //step4:click signup/login
     await page.click('a[href="/login"]');
     //page.click()      → clicks an element
     //a[href="/login"] =css selector to find the "signup/login" link

    //step5:Verify 'Login to your account' is visible
    await expect(page.locator('h2:has-text("Login to your account")')).toBeVisible();

    //page.locator(...)    → finds an element on the page
    //h2:has-text("Login to your account") =css selector to fidn the heading with text "Login to your account"
    //toBeVisible() =checks if the element is visible on the page

    //step6:Enter incorrect email and password
    await page.fill('[data-qa="login-email"]','wrongemail@example.com');
    await page.fill('[data-qa="login-password"]','WrongPass@123');
    //page.fill()              → clears field and types text
    //'[data-qa="login-email"]'   → finds input by data-qa attribute
    //'[data-qa="login-password"]'→ finds password input

     //step7:click login button
     await page.click('[data-qa="login-button"]');
     //page.click()=clicks the login button
     //'[data-qa="login-button"]'→ finds button by data-qa

     //step8:verify error 'your email or password is incorrect' is visible
     await expect(page.locator('p:has-text("Your email or password is incorrect!")')).toBeVisible();
     ///p  → paragraph tag  → normal body text
     //h2 → heading tag 2  → title / heading text
});
