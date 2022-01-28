'use strict';

console.log('Replicon Fixer extension loaded.');

function addDisabler() {
    const theBtn = document.querySelector('.clockIn');

    if (theBtn === null) {
        return false;

    } else {
        theBtn.addEventListener('mousedown', (evt) => {
            // console.log('Click event triggered.');

            setTimeout(() => {
                document.querySelector('.clockIn').disabled = true;
                console.log('"Clock In" button disabled.');
            }, 2000);
        });

        console.log('"Clock In" button disabler added.');

        alert('"Clock In" button disabler added. "Clock Out" or refresh the page to re-enable the button.');

        return true;
    }
}

// DOMContentLoaded didn't work, using setTimeout instead
setTimeout(() => {
    if (!addDisabler()) {
        console.log('"Clock In" button doesn\'t exist yet. Trying again.');

        setTimeout(() => {
            if (!addDisabler()) {
                // 3 seconds should be long enough, don't retry
                console.log('Error.');
            }
        }, 2000);
    }
}, 1000);
