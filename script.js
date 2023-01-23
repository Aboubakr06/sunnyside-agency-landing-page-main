let MenuBtn = document.querySelector(".menu-btn");
let MenuOpen = document.querySelector(".menu");

let ScrollBtn = document.querySelector(".scroll-btn");
let ClientFdb = document.querySelector(".clients-fdb");

MenuBtn.addEventListener("click", function() {
  MenuOpen.classList.toggle("max-lg:hidden");
});

ScrollBtn.addEventListener("click", function() {
  ClientFdb.scrollIntoView({ 
    behavior: 'smooth' 
});
});
