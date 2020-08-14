function SliderLogic() {
    this._imagesPaths = [];
    this._currentImageIndex = 0;
    this._dataService = new SliderDataService();

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

    this.onUrlsGet = function () {
        console.log("we get urls");
    }

    // this._imagesPaths =
    this._dataService.getUrls(this.onUrlsGet);

    console.log(this._imagesPaths);
}