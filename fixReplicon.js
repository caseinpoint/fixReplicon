'use strict';
console.log('Replicon Fixer extension loaded.');

// DOMContentLoaded didn't work, using setTimeout instead
timeoutID = setTimeout(() => {
    const theBtn = document.querySelector('.clockIn');
    if (theBtn !== null) {
        theBtn.addEventListener('click', (evt) => {
            evt.target.disabled = true;
        });
        console.log('"Clock In" button disabler added.');
        alert('"Clock In" button disabler added.');
    }
}, 2000);
