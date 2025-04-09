let browser = "Chrome";
function checkBrowserVersion(CallBack){

    setTimeout(()=>{
        CallBack(browser);
    },2000);
}
    function browserVersion(browser){
        console.log(`The browser version using: ${browser}`);
    }

checkBrowserVersion(browserVersion);