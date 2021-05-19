const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("show-menu")
});