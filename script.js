var menuOpen = document.getElementById("menu");
var menuClose = document.getElementById("menu-close");
var body = document.body;

menuOpen.addEventListener("click", function(){
    document.getElementById("menu-display").style.display = "flex";
    body.style.overflow = "hidden";
});

menuClose.addEventListener("click", function(){
    document.getElementById("menu-display").style.display = "none";
    body.style.overflow = "auto";
});
