// From https://stackoverflow.com/a/9899701
function onDocumentReady(func) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(func, 1);
    } else {
        document.addEventListener("DOMContentLoaded", func);
    }
}