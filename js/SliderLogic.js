function SliderLogic() {
    this._imagesPaths = [];
    this._currentImageIndex = 0;

    this.getCurrentImageUrl = function () {
        return this._imagesPaths[this._currentImageIndex];
    }

    this.canMovePrev = function () {
        let weAreOnTheLeftBorder = this._currentImageIndex === 0;
        return !weAreOnTheLeftBorder;
    }

    this.canMoveNext = function () {
        let weAreOnTheRightBorder = this._currentImageIndex === (this._imagesPaths.length - 1);
        return !weAreOnTheRightBorder;
    }

    this.activatePrevImage = function () {
        if (this.canMovePrev()) {
            this._currentImageIndex--;
        }
    }

    this.activateNextImage = function () {
        if (this.canMoveNext()) {
            this._currentImageIndex++;
        }
    }

    this._imagesPaths.push("images/ninja.jpg");
    this._imagesPaths.push("images/jubei.gif");
    this._imagesPaths.push("images/moon.jpg");
    this._imagesPaths.push("images/bat-man.jpg");
}

// let sliderLogic = new SliderLogic();
// let url = sliderLogic.getNextImageUrl();