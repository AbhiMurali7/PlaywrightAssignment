/* Create a new browser instance
 * Create a new browser context
 * Create a new page
 * Load the url 
 * https://login.salesforce.com/
 * Print the url
 * Enter the username vidyar@testleaf.com
 * Enter the password Testleaf@1234
 * Click Login button
 * Verify the title of the page (using page.title() method)
 * 
 */// Try Implementing Fixtures in the above testcase 

 import {test, chromium} from "@playwright/test"

test("Login the Browser",async () => {
    
const browser = await chromium.launch({ headless: false, channel: "chrome" });
const browserContext = await browser.newContext();
const page = await browserContext.newPage();

await page.goto("https://login.salesforce.com/");
await page.waitForTimeout(4000);
await page.locator("#username").fill("vidyar@testleaf.com");
await page.locator("#password").fill("Testleaf@1234");
await page.locator("#Login").click();
console.log(await page.title());

})