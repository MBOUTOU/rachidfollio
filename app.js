
// declaration des variable js 

const ButtonNavigation = document.querySelector(".navigationButton");
const NavLinksblock = document.querySelector(".navlinks")
const Navbar = document.querySelector(".navbar");
const NavigationGalerie= document.querySelectorAll('.btn-navigation')
const GaleryElement= document.querySelectorAll(".gal")


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


NavigationGalerie.forEach((galerie) =>{
     galerie.addEventListener("click", ()=>{
         const Data = galerie.getAttribute("data-name")
        NavigationGalerie.forEach((N)=> N.classList.remove("active"))
        GaleryElement.forEach(Element => Element.classList.remove("active"))
        galerie.classList.add("active")

         GaleryElement.forEach((itmes) =>{
            const ReceiveData = itmes.getAttribute("data-name")
            if(Data === ReceiveData){
               itmes.classList.add("active")
            }else{
               itmes.classList.remove("active")
            }
         })
     })
})

