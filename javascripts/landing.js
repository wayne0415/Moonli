let bg = document.getElementById("bg");
let logo = document.getElementById("logo");
let btn = document.getElementById("btn");
let text_big = document.getElementById("text_big");
let text_very = document.getElementById("text_very");
let text_iphone = document.getElementById("text_iphone");
let text_iphone_plus = document.getElementById("text_iphone_plus");
let iphone_14 = document.getElementById("iphone_14");
let iphone_14_plus = document.getElementById("iphone_14_plus");

window.addEventListener("scroll", () => {
    let a = window.scrollY;
    let b = window.innerHeight;

    bg.style.left = a * 0.15 + "px";
    logo.style.marginBottom = a * 1 + "px";
    btn.style.marginBottom = a * 0.5 + "px";
    text_big.style.top = a * -0.3 + "px";
    text_very.style.top = a * -0.37 + "px";
    text_iphone.style.marginLeft = a * -0.4 + "px";
    text_iphone_plus.style.marginRight = a * -0.45 + "px";

    iphone_14.style.marginLeft = a * -0.13 + "px";
    iphone_14_plus.style.marginRight = a * -0.15 + "px";

    iphone_14.style.top = -0.1 * b + a * 0.13 + "px";
    iphone_14_plus.style.top = -0.1 * b + a * 0.15 + "px";
});
