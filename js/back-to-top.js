document.addEventListener('DOMContentLoaded', function() {
  let scrollButton = document.querySelector("#back-to-top");
  let htmlElement = document.documentElement;

  window.addEventListener('scroll', function() {
      if (window.scrollY > 20 || htmlElement.scrollTop > 20) {
          scrollButton.classList.add("show");
      } else {
          scrollButton.classList.remove("show");
      }
  });

  scrollButton.addEventListener("click", function() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});