// la partie des animations avec scrollreveal 

const sr = ScrollReveal();

sr.reveal(".title-page, .contener-element-texte-header img, .box-img img ,.wb .droite img", {
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


sr.reveal(".lan-logiciel li img, .button-galery .btn-navigation",{
     distance : "10px",
     delay : 300,
     origin : "bottom",
     interval: 50,
     duration: 600,
});










