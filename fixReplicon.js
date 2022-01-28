'use strict';

console.log('Replicon Fixer extension loaded.');

function addDisabler() {
    const theBtn = document.querySelector('.clockIn');

    if (theBtn === null) {
        return false;
    }

    theBtn.addEventListener('mousedown', (evt) => {
        setTimeout(() => {
            theBtn.disabled = true;
            // console.log('"Clock In" button disabled.');
        }, 2000);
    });

    alert('"Clock In" button disabler added. "Clock Out" or refresh the page to re-enable the button.');

    return true;
}

// DOMContentLoaded didn't work, using setInterval instead
const intervalID = setInterval(() => {
    const added = addDisabler();

    if (added) {
        clearInterval(intervalID);
    }
}, 1500);
