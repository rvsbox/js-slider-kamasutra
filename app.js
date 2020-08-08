const showPrevBtn = document.getElementById("show-prev-btn");
const showNextBtn = document.getElementById("show-next-btn");
const slideImage = document.getElementById("slide-img");

showPrevBtn.addEventListener("click", onShowPrevBtnClick);
showNextBtn.addEventListener("click", onShowNextBtnClick);

let imagesPaths = [];
imagesPaths.push('images/tiger.jpg');
imagesPaths.push('images/ninja.jpg');
imagesPaths.push('images/moon.jpg');
imagesPaths.push('images/road.jpg');
imagesPaths.push('images/bat-man.jpg');

slideImage.src =  imagesPaths[0];


function onShowPrevBtnClick() {
    console.log("test prev");
}

function onShowNextBtnClick() {
    console.log("test next");
}