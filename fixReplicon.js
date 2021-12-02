'use strict';

console.log('(dev) Replicon Fixer extension loaded.');

function addDisabler() {
    const theBtn = document.querySelector('.clockIn');
    if (theBtn === null) {
        return false;
    } else {
        theBtn.addEventListener('mousedown', (evt) => {
            console.log('Click event triggered.');
            // evt.target.disabled = true;
            setTimeout(() => {
                document.querySelector('.clockIn').disabled = true;
            }, 2000);
        });
        return true;
    }
}

// DOMContentLoaded didn't work, using setTimeout instead
setTimeout(() => {
    if (addDisabler()) {
        console.log('"Clock In" button disabler added.');
        alert('"Clock In" button disabler added.');
    } else {
        console.log('"Clock In" button doesn\'t exist yet. Trying again.')
        setTimeout(() => {
            if (addDisabler()) {
                console.log('"Clock In" button disabler added.');
                alert('"Clock In" button disabler added.');
            } else {
                console.log('Error.');
            }
        }, 2000);
    }
}, 1000);
