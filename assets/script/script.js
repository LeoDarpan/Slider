var left = document.querySelectorAll(".left");
var slider = document.querySelector(".slider");
var right = document.querySelectorAll(".right");
var header = document.getElementsByTagName("header");
var main = document.querySelector(".main");
var offset = 0;


left[0].addEventListener("click", ()=>{
    offset += 170;
    if(offset > 0)
        offset = 0;
    translateX1(offset);
});

right[0].addEventListener("click", ()=>{
    offset -= 170;
    if(offset <= -850)
        offset = 0;
    translateX1(offset);
});

function translateX1(offset){
    slider.style.transform = "translateX("+offset+"px)";
}
window.addEventListener("load", ()=>{
    header[0].style.transform = "translateX(0)";
    main.style.transform = "scale(1)";
})