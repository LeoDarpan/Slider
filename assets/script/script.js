var left = document.querySelectorAll(".left");
var left1 = document.querySelectorAll(".left1");
var left2 = document.querySelectorAll(".left2");
var slider = document.querySelector(".slider");
var right = document.querySelectorAll(".right");
var right1 = document.querySelectorAll(".right1");
var right2 = document.querySelectorAll(".right2");
var header = document.getElementsByTagName("header");
var main = document.querySelector(".main");
var offset = 0;


left[0].addEventListener("click", ()=>{
    offset += 170;
    if(offset > 0)
        offset = 0;
    translateX1(offset);
});

left1[0].addEventListener("click", ()=>{
    offset += 170;
    if(offset > 0)
        offset = 0;
    translateX1(offset);
});

left2[0].addEventListener("click", ()=>{
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

right1[0].addEventListener("click", ()=>{
    offset -= 170;
    if(offset <= -1190)
        offset = 0;
    translateX1(offset);
});

right2[0].addEventListener("click", ()=>{
    offset -= 170;
    if(offset <= -1020)
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