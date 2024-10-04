function showAll() {
  document.querySelectorAll('.bento-div.case').forEach(div => {
    if (div.classList.contains('show-all-hidden')) {
      div.classList.remove('show-all-hidden');
    }
  });
  
  let secondaryBentoDiv = document.querySelector('#secondaryBentoDiv');
  if (secondaryBentoDiv) {
    secondaryBentoDiv.style.display = 'none';
  }
}