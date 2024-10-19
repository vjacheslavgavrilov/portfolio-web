let isSmallScreen = window.innerWidth <= 374;
const contentContainer = document.querySelector('.content-container');
const smallResolution = document.querySelector('.small-resolution');
let resizeTimer;

function debounce(func, wait) {
    return function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(func, wait);
    };
}

function toggleElements() {
    const shouldBeSmallScreen = window.innerWidth <= 374;

    if (shouldBeSmallScreen !== isSmallScreen) {
        if (shouldBeSmallScreen) {
            contentContainer.style.display = 'none';
            smallResolution.style.display = 'flex';
        } else {
            contentContainer.style.display = 'block';
            smallResolution.style.display = 'none';
        }
        isSmallScreen = shouldBeSmallScreen;
    }
}

toggleElements();
window.addEventListener('resize', debounce(toggleElements, 100));