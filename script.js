let MenuBtn = document.querySelector(".menu-btn");
let MenuOpen = document.querySelector(".menu");

let ScrollBtn = document.querySelector(".scroll-btn");
let OurTeam = document.querySelector(".team");

MenuBtn.addEventListener("click", function() {
  MenuOpen.classList.toggle("max-lg:hidden");
});

ScrollBtn.addEventListener("click", function() {
  OurTeam.scrollIntoView({ 
    behavior: 'smooth' 
});
});
