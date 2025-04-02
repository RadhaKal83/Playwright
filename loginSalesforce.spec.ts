import {test} from "@playwright/test";
test(`salesforce createlead`,async({page})=>{

    

    //Login to https://login.salesforce.com
    await page.goto(`https://login.salesforce.com`);
    
    await page.locator(`.input#username`).fill("radha_k_prabhu964@agentforce.com");
    
    await page.locator(`.input#password`).fill("Office2025!");
    await page.locator("[id='Login']").click();
    await page.waitForTimeout(10000)
    const title =await page.title();
    console.log(`The title for the page is: ${title}`);
    const URL = page.url();
    console.log(`The URL for the page is: ${URL}`);
})