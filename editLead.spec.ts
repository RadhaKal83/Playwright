import {chromium,test} from "@playwright/test";
test(`Edit Lead in Leaftap`,async({page})=>{
    const browserInstance = await chromium.launch({ headless:false, channel:
    "chrome" });
   

    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    const URL = page.url();
    console.log(`The URL for the page is ${URL}`);

    await page.locator(`//input[@id='username']`).fill("demosalesmanager");
    await page.locator(`//input[@id='password']`).fill("crmsfa");
    await page.locator(`//input[@class='decorativeSubmit']`).click();
    await page.waitForTimeout(2000);
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
    await page.waitForTimeout(2000);
    await page.locator(`//a[contains(text(),'Leads')]`).click();
    await page.waitForTimeout(2000);
    await page.locator(`//a[contains(text(),'Create Lead')]`).click();

    await page.locator(`//input[@id='createLeadForm_companyName']`).fill("TestLeaf");
    await page.locator(`//input[@id='createLeadForm_firstName']`).fill("Ram");
    await page.locator(`//input[@id='createLeadForm_lastName']`).fill("Kumar");
    await page.locator(`//input[@class='smallSubmit']`).click();


})