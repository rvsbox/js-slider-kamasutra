function SliderLogic() {
    this._imagesPaths = [];
    this.currentImageIndex = 0;

    this.getCurrentImageUrl = function () {
        return this._imagesPaths[this.currentImageIndex];
    }

    this.doYouHaveNoPrevImage = function () {
        let weAreOnTheLeftBorder = this.currentImageIndex !== 0;
        return weAreOnTheLeftBorder;
    }

    this.doYouHaveNoNextImage = function () {
        let weAreOnTheRightBorder = this.currentImageIndex === (this._imagesPaths.length - 1);
        return weAreOnTheRightBorder;
    }

    this._imagesPaths.push("images/ninja.jpg");
    this._imagesPaths.push("images/jubei.gif");
    this._imagesPaths.push("images/moon.jpg");
    this._imagesPaths.push("images/bat-man.jpg");


}

// let sliderLogic = new SliderLogic();
// let url = sliderLogic.getNextImageUrl();