class ResponsiveHandler {
    constructor(contentSelector, smallResolutionSelector, smallScreenThreshold = 374) {
      this.contentContainer = document.querySelector(contentSelector);
      this.smallResolution = document.querySelector(smallResolutionSelector);
      this.smallScreenThreshold = smallScreenThreshold;
      this.isSmallScreen = localStorage.getItem('isSmallScreen') === 'true' || window.innerWidth <= this.smallScreenThreshold;
      this.resizeTimer = null;
  
      this.toggleElements();
  
      if (!('ontouchstart' in window)) {
        window.addEventListener('resize', this.debounce(() => this.toggleElements(), 100));
      }
    }
  
    debounce(func, wait) {
      return () => {
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(func, wait);
      };
    }
  
    toggleElements() {
      const shouldBeSmallScreen = window.innerWidth <= this.smallScreenThreshold;
  
      if (shouldBeSmallScreen !== this.isSmallScreen) {
        if (shouldBeSmallScreen) {
          this.contentContainer.style.display = 'none';
          this.smallResolution.style.display = 'flex';
        } else {
          this.contentContainer.style.display = 'block';
          this.smallResolution.style.display = 'none';
        }
        this.isSmallScreen = shouldBeSmallScreen;
        localStorage.setItem('isSmallScreen', shouldBeSmallScreen);
      }
    }
  }
  
  const responsiveHandler = new ResponsiveHandler('.content-container', '.small-resolution');