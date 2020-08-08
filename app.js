const showPrevBtn = document.getElementById("show-prev-btn");
const showNextBtn = document.getElementById("show-next-btn");

showPrevBtn.addEventListener("click", onShowPrevBtnClick);
showNextBtn.addEventListener("click", onShowNextBtnClick);


function onShowPrevBtnClick() {
    console.log("test prev");
}

function onShowNextBtnClick() {
    console.log("test next");
}