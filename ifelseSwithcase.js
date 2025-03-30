
//launchBrowser
function launchBrowser( browserName){
    if(browserName === "Chrome"){
        console.log("Chrome Browser is Launched");
    }else{
        console.log("Default Browser is Launched");
    }
}
launchBrowser("Chrome");
launchBrowser("Firefox");


//runTests
function runTests(testType){
    switch (testType){
        case "smoke":
            console.log("smoke tests is performing");
            break;
        case "sanity":
            console.log("sanity tests is performing");
            break;
        case "regression":
            console.log("regression tests is performing");
            break;
        default:
            console.log("Unknown test type - smoke tests is performing" ) ;     

    }
}
runTests("sanity");
runTests();