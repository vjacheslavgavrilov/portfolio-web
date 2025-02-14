class ScrollToTopButton {
    constructor(buttonId) {
      this.scrollButton = document.querySelector(buttonId);
      this.htmlElement = document.documentElement;
      this.init();
    }
  
    init() {
      window.addEventListener('scroll', () => this.toggleButtonVisibility());
      this.scrollButton.addEventListener('click', () => this.scrollToTop());
    }
  
    toggleButtonVisibility() {
      if (window.scrollY > 20 || this.htmlElement.scrollTop > 20) {
        this.scrollButton.classList.add('show');
      } else {
        this.scrollButton.classList.remove('show');
      }
    }
  
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    new ScrollToTopButton('#back-to-top');
  });  