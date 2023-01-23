let MenuBtn = document.getElementById("menu-btn");
let MenuOpen = document.getElementById("menu");

MenuBtn.addEventListener("click", function() {
  console.log("i'm here")
  MenuOpen.classList.toggle("open");
});
