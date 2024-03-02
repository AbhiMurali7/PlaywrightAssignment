
/*Test Steps:
Assignment: 1 Create Lead
1. Login to https://login.salesforce.com
2. Click on toggle menu button from the left corner
3. Click view All and click Sales from App Launcher
4. Click on Leads tab 
5. Click on New button
6. Select Salutation dropdown
7. Enter the Last Name
8. Enter the CompanyName 
9. Click Save and Verify Leads name created
*/

import { test, chromium } from "@playwright/test";
test("Assignment: 1 Create Lead", async () => {
  const browser = await chromium.launch();
  const browserContext = await browser.newContext();
  const page = await browserContext.newPage();
  //Login to https://login.salesforce.com
  await page.goto("https://login.salesforce.com");
  await page.locator("#username").fill("abhi.m@testleaf.com");
  await page.locator("#password").fill("Abhi7196$");
  await page.locator("#Login").click();

  await page.waitForTimeout(5000);
  //Click on toggle menu button from the left corner

  await page.getByRole("button", { name: "App Launcher" }).click();
  // await page
  //   .locator(
  //     "(//div[contains(@class,'tooltipTrigger tooltip-trigger')]//div)[3]"
  //   )
  //   .click();

  //Click view All and click Sales from App Launcher
  await page.getByRole("button", { name: "View All Applications" }).click();

  await page.getByRole("link", { name: "Sales", exact: true }).click();
  await page.waitForTimeout(2000);

  //Click on Leads tab
  await page.getByRole("link", { name: "Leads" }).click();

  await page.evaluate(() => {
    window.scrollBy(0, 1000);
  });
  //Click on New button
  await page.getByRole("button", { name: "New" }).click();

  //Select Salutation dropdown
  await page.getByLabel("Salutation - Current Selection: --None--").click();
  await page.getByRole("option", { name: "Mr." }).click();
  //Enter the Last Name
  await page.getByPlaceholder("Last Name").fill("McKinn");
  //Enter the CompanyName
  await page.getByLabel("*Company").fill("Test Company");
  //Click Save and Verify Leads name created
  await page.getByRole("button", { name: "Save", exact: true }).click();
  console.log("Lead Created");
});