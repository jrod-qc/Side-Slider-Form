var sideSliderBox = document.getElementById("side-slider-box");
var sideSliderClickonFormBtn = document.getElementById("side-slider-clickon-form-btn");
var sideSliderExitBtn = document.getElementById("side-slider-exit-btn");
var sideSliderBtn = document.getElementById("side-slider-btn");
var sideSliderBtnIcon = document.getElementById("side-slider-btn-icon");
var sideSliderBtnBox = document.getElementById("side-slider-btn-box");
var sideSliderItemForm = document.getElementById("side-slider-item-form");
var sideSliderItemText = document.getElementById("side-slider-item-text");
var bg = document.getElementById("bg");

sideSliderBtn.addEventListener("click", function() {
    sideSliderBox.style.left = "0";
    sideSliderBtnBox.style.left = "-100%";
    bg.style.display = "block";
});

sideSliderBtnIcon.addEventListener("click", function() {
    sideSliderBox.style.left = "0";
    sideSliderBtnBox.style.left = "-100%";
    bg.style.display = "block";
});

sideSliderExitBtn.addEventListener("click", function() {
    sideSliderBox.style.left = "-100%";
    sideSliderBtnBox.style.left = "0";
    sideSliderItemText.style.display = "flex";
    sideSliderItemForm.style.display = "none";
    bg.style.display = "none";
});

sideSliderClickonFormBtn.addEventListener("click", function() {
    sideSliderItemForm.style.display = "flex";
    sideSliderItemText.style.display = "none";
});