// From https://css-tricks.com/animating-number-counters/
function countNumber(element, start, end, duration) {
    let startTimestamp = null;

    const step = (timestamp) => {
        if (!startTimestamp) {
            startTimestamp = timestamp;
        }

        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start);

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
}

onDocumentReady(() => {
    Array.prototype.forEach.call(document.getElementsByClassName("numberAnimation"), (element) => {
        console.log(element)

        countNumber(element, 1, element.innerHTML, 1200);
    })
})
