import { chromium, firefox, test } from "@playwright/test";

test("To launch a browser", async () => {

//create two sepaarte browser instance
const edgeBrowser = await chromium.launch({ headless: false, channel:
"msedge" });
const edgeContext = await edgeBrowser.newContext();
const edgePage = await edgeContext.newPage();
//load the redbus url
await edgePage.goto("https://www.redbus.in");
console.log("Red Bus - Edge Browser")

const title =await edgePage.title();
console.log(`The title for the page is: ${title}`);
const URL = edgePage.url();
console.log(`The URL for the page is: ${URL}`);




const firefoxBrowser = await firefox.launch({ headless: false, channel:
"firefox" });
const firefoxContext = await firefoxBrowser.newContext();
const firefoxPage = await firefoxContext.newPage();
//load the flipkart url
await firefoxPage.goto("https://www.flipkart.com");
console.log("Flipkart - Firefox Browser")
const title1 = await firefoxPage.title();
console.log(`The title for the page is: ${title1}`);
const URL1 = firefoxPage.url();
console.log(`The URL for the page is: ${URL1}`);
});