// la partie des animations avec scrollreveal 

const sr = ScrollReveal();

sr.reveal(".title-page, .contener-element-texte-header img", {
     distance : "40px",
     delay : 200,
     origin : "bottom",
     duration: 900,
     interval: 100,
});

sr.reveal(".navbar", {
     distance : "10px",
     delay : 300,
     origin : "bottom",
     duration: 600,
});

// declaration des variable js 

const ButtonNavigation = document.querySelector(".navigationButton");
const NavLinksblock = document.querySelector(".navlinks")
const Navbar = document.querySelector(".navbar");

ButtonNavigation.addEventListener("click", () =>{
    ButtonNavigation.classList.toggle("active")
    NavLinksblock.classList.toggle("active")
})

document.addEventListener("scroll", () =>{
     if( window.scrollY > 50){
          Navbar.classList.add("active")
     }else{
          Navbar.classList.remove("active")
     }
})






















