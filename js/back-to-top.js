document.addEventListener('DOMContentLoaded', () => {
  let scrollButton = document.querySelector("#back-to-top");
  let htmlElement = document.documentElement;

  window.addEventListener('scroll', () => {
      if (window.scrollY > 20 || htmlElement.scrollTop > 20) {
          scrollButton.classList.add("show");
      } else {
          scrollButton.classList.remove("show");
      }
  });

  scrollButton.addEventListener("click", () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});