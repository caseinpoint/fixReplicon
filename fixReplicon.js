'use strict';

console.log('Replicon Fixer extension loaded.');

function addDisabler() {
    const theBtn = document.querySelector('.clockIn');
    if (theBtn === null) {
        return false;
    } else {
        theBtn.addEventListener('click', (evt) => {
            evt.target.disabled = true;
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
