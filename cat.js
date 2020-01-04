"use strict";

console.log("cat.js says hello");

function update_cat_text(){
    const userTextUpper = document.getElementById("userCatText_upper");
    const memeTextUpper = document.getElementById("memeText_upper");
    const userTextLower = document.getElementById("userCatText_lower");
    const memeTextLower = document.getElementById("memeText_lower");

    memeTextUpper.innerHTML = userTextUpper.value;
    memeTextLower.innerHTML = userTextLower.value;
}

function update_cat_image() {
    const images = document.querySelectorAll('img');
    const img = images[4]; // 4 is a hard-coded variable
    const file = document.querySelector('input[type=file]').files[0];
    console.log("img is " + img);
    console.log("cat image updated " + file);
    img.src =  window.URL.createObjectURL(file);
    console.log("image.src is "+img.src);
}