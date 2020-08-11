function Slider () {
        this.imagesPaths = [];
        this.currentImageIndex = 0;
        this.showPrevBtn = null;
        this.showNextBtn = null;
        this.slideImage = null;

    this.start = function (elId) {
        let that = this;

        let el = document.getElementById(elId);

        this.showPrevBtn = el.querySelector(".show-prev-btn");
        this.showNextBtn = el.querySelector(".show-next-btn");
        this.slideImage = el.querySelector(".slide-img");

        this.showPrevBtn.addEventListener("click", function (e) {
            that.onShowPrevBtnClick(e);
        });

        this.showNextBtn.addEventListener("click", function (e) {
            that.onShowNextBtnClick(e);
        });

        this.imagesPaths.push("images/ninja.jpg");
        this.imagesPaths.push("images/jubei.gif");
        this.imagesPaths.push("images/moon.jpg");
        this.imagesPaths.push("images/bat-man.jpg");

        this.slideImage.src = this.imagesPaths[this.currentImageIndex];
        this.showPrevBtn.disabled = true;
    };

    this.onShowPrevBtnClick = function () {
        this.currentImageIndex--;
        this.slideImage.src = this.imagesPaths[this.currentImageIndex];
        this.showNextBtn.disabled = false;

        if (this.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    };

    this.onShowNextBtnClick = function () {
        this.currentImageIndex++;
        this.slideImage.src = this.imagesPaths[this.currentImageIndex];
        this.showPrevBtn.disabled = false;

        if (this.currentImageIndex === (this.imagesPaths.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    }
}


let sliderFactory = {
    creatNewSlider: function () {
        let newSlider = new Slider();
        return newSlider;
    }
};
