let MenuBtn = document.querySelector(".menu-btn");
let MenuOpen = document.querySelector(".menu");

MenuBtn.addEventListener("click", function() {
  console.log("hello");
  MenuOpen.classList.toggle("active");
});
