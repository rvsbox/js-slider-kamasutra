const showPrevBtn = document.getElementById("show-prev-btn");
const showNextBtn = document.getElementById("show-next-btn");
const slideImage = document.getElementById("slide-img");

showPrevBtn.addEventListener("click", onShowPrevBtnClick);
showNextBtn.addEventListener("click", onShowNextBtnClick);

let imagesPaths = [];
imagesPaths.push("images/jubei.gif");
imagesPaths.push("images/ninja.jpg");
imagesPaths.push("images/moon.jpg");
imagesPaths.push("images/bat-man.jpg");

let currentImageIndex = 0;

slideImage.src = imagesPaths[currentImageIndex];
showPrevBtn.disabled = true;


function onShowPrevBtnClick() {
    currentImageIndex--;
    slideImage.src = imagesPaths[currentImageIndex];
    showNextBtn.disabled = false;

    if (currentImageIndex === 0) {
        showPrevBtn.disabled = true;
    }
}

function onShowNextBtnClick() {
    currentImageIndex++;
    slideImage.src = imagesPaths[currentImageIndex];
    showPrevBtn.disabled = false;

    if (currentImageIndex === (imagesPaths.length - 1)) {
        showNextBtn.disabled = true;
    }
}