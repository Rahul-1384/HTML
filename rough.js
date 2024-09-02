// script.js
const scrollWrapper = document.querySelector('.scroll-wrapper');
let scrollAmount = 0;

function autoScroll() {
    scrollAmount += 1;
    if (scrollAmount > scrollWrapper.scrollWidth - scrollWrapper.clientWidth) {
        scrollAmount = 0;
    }
    scrollWrapper.scrollLeft = scrollAmount;
}

setInterval(autoScroll, 20);
