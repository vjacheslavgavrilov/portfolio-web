function showAll() {
  document.querySelectorAll('.bento-div.case').forEach(div => {
    if (div.classList.contains('show-all-hidden')) {
      div.classList.remove('show-all-hidden');
      div.style.opacity = '0'; // setting the initial transparency
      setTimeout(() => {
        div.style.opacity = '1'; // changing the transparency to 1 after the delay
      }, 100); // delay in ms
    }
  });
  
  let secondaryBentoDiv = document.querySelector('#secondaryBentoDiv');
  if (secondaryBentoDiv) {
    secondaryBentoDiv.style.display = 'none';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const showAllButton = document.getElementById("showAll");
  showAllButton.addEventListener("click", showAll);
});