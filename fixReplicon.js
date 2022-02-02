'use strict';

function addDisabler() {
    const theBtn = document.querySelector('.clockIn');

    if (theBtn === null) {
        // "Clock In" button hasn't been loaded into DOM yet
        return false;
    }

    theBtn.addEventListener('mousedown', (evt) => {
        // wait for Replicon scripts to finish
        setTimeout(() => {
            theBtn.disabled = true;
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
