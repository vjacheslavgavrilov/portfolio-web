let isSmallScreen = localStorage.getItem('isSmallScreen') === 'true' || window.innerWidth <= 374;
const contentContainer = document.querySelector('.content-container');
const smallResolution = document.querySelector('.small-resolution');
let resizeTimer;

function debounce(func, wait) {
    return () => {
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
        localStorage.setItem('isSmallScreen', shouldBeSmallScreen);
    }
}

toggleElements();

if (!('ontouchstart' in window)) {
    window.addEventListener('resize', debounce(toggleElements, 100));
}