class InteractiveElement {
  constructor(selector, touchStartStyle, touchEndStyle, mouseDownStyle, mouseUpStyle, hoverStyle) {
    this.elements = document.querySelectorAll(selector);
    this.touchStartStyle = touchStartStyle;
    this.touchEndStyle = touchEndStyle;
    this.mouseDownStyle = mouseDownStyle;
    this.mouseUpStyle = mouseUpStyle;
    this.hoverStyle = hoverStyle;
    this.init();
  }

  init() {
    this.elements.forEach((element) => {
      element.addEventListener('touchstart', () => this.applyStyle(element, this.touchStartStyle));
      element.addEventListener('touchend', () => this.applyStyle(element, this.touchEndStyle));
      element.addEventListener('mousedown', () => this.applyStyle(element, this.mouseDownStyle));
      element.addEventListener('mouseup', () => this.applyStyle(element, this.mouseUpStyle));
      element.addEventListener('mouseleave', () => this.applyStyle(element, this.mouseUpStyle));
      element.addEventListener('mouseover', () => this.applyHoverStyle(element));
      element.addEventListener('mouseout', () => this.removeHoverStyle(element));
    });
  }

  applyStyle(element, style) {
    Object.assign(element.style, style);
    element.classList.remove('hovered');
  }

  applyHoverStyle(element) {
    Object.assign(element.style, this.hoverStyle);
    if (!element.classList.contains('hovered')) {
      element.classList.add('hovered');
    }
  }

  removeHoverStyle(element) {
    if (!element.classList.contains('clicked')) {
      Object.assign(element.style, this.mouseUpStyle);
    }
    element.classList.remove('hovered');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new InteractiveElement(
    '.bento-div.primary.clickable, .bento-div.case.clickable',
    { transform: 'translateY(0px) scale(0.97)' },
    { transform: 'translateY(0px) scale(1.00)' },
    { transform: 'translateY(0px) scale(0.97)' },
    { transform: 'translateY(0px) scale(1.00)' },
    { transform: 'translateY(0px) scale(1.03)' }
  );

  new InteractiveElement(
    '.primary-button, .superellipse-icon-button',
    { backgroundColor: 'rgba(38, 38, 38, 1)' },
    { backgroundColor: 'rgba(38, 38, 38, 0.7)' },
    { backgroundColor: 'rgba(38, 38, 38, 1)', transform: 'translateY(0px) scale(0.97)' },
    { backgroundColor: 'rgba(38, 38, 38, 0.7)', transform: 'translateY(0px) scale(1.00)' },
    { backgroundColor: 'rgba(38, 38, 38, 1)' }
  );
});