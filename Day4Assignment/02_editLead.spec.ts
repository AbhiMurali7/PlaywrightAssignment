/*
Assignment: 2 Edit Lead
http://leaftaps.com/opentaps/control/main			
1. Launch the browser
2. Enter the username
3. Enter the password
4. Click Login
5. Click CRM/SFA link
6. Click Leads link
7. Click on Create Lead
8. Enter company name
9. Enter first name
10.Enter last name
11.Click on Create Lead button  
12.Click Edit
13.Change the company name
14.Click Update
*/


import {chromium, test} from '@playwright/test'
test.only("Assignment: 2 Edit Lead", async () => {
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    //Login to http://leaftaps.com/opentaps/control/main
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("demosalesManager");
    await page.fill("#password", "crmsfa");
    page.click(".decorativeSubmit");
  
    //Click CRM/SFA link
    await page.click("//a[contains(text(),'CRM/SFA')]");
    //Click on Create Lead
    await page.click("//a[text()='Create Lead']");
    //Enter company name
    await page.fill("#createLeadForm_companyName", "Test Company");
    //Enter first name
    await page.fill("#createLeadForm_firstName", "John");
    //Enter last name
    await page.fill("#createLeadForm_lastName", "McKinn");
    //Click on Create Lead button
    await page.click(".smallSubmit");
    console.log("Lead is Created Successfully");
    //Click Edit
    await page.click("//a[text()='Edit']");
    //Change the company name
    await page.fill("#updateLeadForm_companyName", "Company2");
    //Click Update
    await page.click("(//input[@class='smallSubmit'])[1]");
    console.log("Company name updated successfully");
  });