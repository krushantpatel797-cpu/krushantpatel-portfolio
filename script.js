function reveal(){
  var reveals = document.querySelectorAll(".reveal");
  for(var i=0;i<reveals.length;i++){
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if(elementTop < windowHeight - elementVisible){
      reveals[i].classList.add("active");
    }
  }
}

window.addEventListener("scroll", reveal);
const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("overlay");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
});

document.querySelectorAll("#navbar a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
});
