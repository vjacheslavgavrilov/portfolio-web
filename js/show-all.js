class BentoManager {
  constructor(showAllButtonSelector, bentoDivSelector, secondaryBentoDivSelector) {
    this.showAllButton = document.getElementById(showAllButtonSelector);
    this.bentoDivs = document.querySelectorAll(bentoDivSelector);
    this.secondaryBentoDiv = document.querySelector(secondaryBentoDivSelector);

    this.initEventListeners();
  }

  initEventListeners() {
    if (this.showAllButton) {
      this.showAllButton.addEventListener("click", () => this.showAll());
    }
  }

  showAll() {
    this.bentoDivs.forEach(div => {
      if (div.classList.contains('show-all-hidden')) {
        div.classList.remove('show-all-hidden');
        div.style.opacity = '0';
        setTimeout(() => {
          div.style.opacity = '1';
        }, 100);
      }
    });

    if (this.secondaryBentoDiv) {
      this.secondaryBentoDiv.style.display = 'none';
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const bentoManager = new BentoManager("showAll", ".bento-div.case", "#secondaryBentoDiv");
});