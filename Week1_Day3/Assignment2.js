function launchbrowser() {
    let browserName = "Chrome";
if (browserName === "Chrome") {
    console.log("Correct");
}
else {
    console.log("Incorrect");
}
}
launchbrowser();
 
function runTest() {
    let testType = "smoke";
    switch (testType) {
        case "sanity":
            console.log("run sanity tests");
            break;
    case "smoke":
    console.log("run smoke test");
    break;
    case "regression":
    console.log("run regression test");
    break;
        default:
            console.log("run smoke test");
    }
}
runTest();