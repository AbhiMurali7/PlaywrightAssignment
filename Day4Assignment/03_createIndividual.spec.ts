/*
Assignment: 3 Create Individuals
Test Steps: 
1. Login to https://login.salesforce.com
2. Click on the toggle menu button from the left corner
3. Click View All and click Individuals from App Launcher
4. Click on the Dropdown icon in the Individuals tab
5. Click on New Individual
6. Enter the Last Name
7. Click save and verify Individuals Name
*/


import {chromium, test} from '@playwright/test'
test("Assignment: 3 Create Individuals", async () => {
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
  
    //Click View All and click Individuals from App Launcher
    await page.getByRole("button", { name: "View All Applications" }).click();
  
    //Click View All and click Individuals from App Launcher
    await page.getByRole("link", { name: "Individuals", exact: true }).click();
    await page.waitForTimeout(3000);
  
    //Click on the Dropdown icon in the Individuals tab
  
    await page
      .locator(
        "(//span[text()='Recently Viewed | Individuals']/following::div)[1]"
      )
      .click();
    await page.click("//span[text()='New Individual']");
  
    //Enter the Last Name
    await page.getByPlaceholder("Last Name").fill("McKinn");
    //Click Save and Verify Individuals name created
    await page.getByRole("button", { name: "Save", exact: true }).click();
    await page.pause();
    const expectLastName = await page
      .locator("(//span[@class='uiOutputText'])[1]")
      .textContent();
    console.log(expectLastName);
    if (expectLastName?.includes("McKinn")) {
      console.log("Individual created successfully");
    }
  });