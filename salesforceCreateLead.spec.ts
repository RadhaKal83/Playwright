import {test} from "@playwright/test";
test(`salesforce createlead`,async({page})=>{

    

    //Click on toggle menu button from the left corner
   await page.locator(`.slds-icon-waffle`).click();
   await page.locator(`[aria-label='View All Applications']`).click();
   await page.waitForTimeout(2000);
   await page.locator(`//p[text()='Sales']`).click();
   await page.waitForTimeout(5000);
   await page.locator(`//span[text()='Leads']`).click();
   //await page.getByRole('link', { name: 'Leads' });
   await page.waitForTimeout(3000);
   await page.locator(`[name='New']`).click();
   await page.waitForTimeout(3000);
   //await page.locator(`[aria-label='Salutation']`);
   //await page.waitForTimeout(2000);
    await page.getByPlaceholder('Last Name').fill("Prabhu")
    await page.locator(`[name='Company']`).fill("TestLeaf");
    await page.locator(`[name='SaveEdit']`).click();


















})