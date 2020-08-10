let slider1 = {
    imagesPaths: [],
    currentImageIndex: 0,
    showPrevBtn: document.getElementById("show-prev-btn"),
    showNextBtn: document.getElementById("show-next-btn"),
    slideImage: document.getElementById("slide-img"),

    start: function () {
        this.showPrevBtn.addEventListener("click", function (e) {
            console.log("test");
            //this.onShowPrevBtnClick
        });
        this.showNextBtn.addEventListener("click", this.onShowNextBtnClick);

        this.imagesPaths.push("images/ninja.jpg");
        this.imagesPaths.push("images/jubei.gif");
        this.imagesPaths.push("images/moon.jpg");
        this.imagesPaths.push("images/bat-man.jpg");

        this.slideImage.src = this.imagesPaths[this.currentImageIndex];
        //this.showPrevBtn.disabled = true;
    },

    onShowPrevBtnClick: function (e) {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesPaths[this.currentImageIndex];
        this.showNextBtn.disabled = false;

        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    },

    onShowNextBtnClick: function (e) {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesPaths[this.currentImageIndex];
        this.showPrevBtn.disabled = false;

        if (this.currentImageIndex === (this.imagesPaths.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    }

};