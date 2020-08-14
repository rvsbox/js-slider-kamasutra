function SliderLogic() {
    let that = this;

    this._imagesUrls = [];
    this._currentImageIndex = 0;
    this._dataService = new SliderDataService();

    this.getCurrentImageUrl = function () {
        return this._imagesUrls[this._currentImageIndex];
    }

    this.canMovePrev = function () {
        let weAreOnTheLeftBorder = this._currentImageIndex === 0;
        return !weAreOnTheLeftBorder;
    }

    this.canMoveNext = function () {
        let weAreOnTheRightBorder = this._currentImageIndex === (this._imagesUrls.length - 1);
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

    this._onUrlsGet = function () {
        // console.log("we get urls");
        console.log(this._dataService.imagesUrls);
    }

    // this._imagesUrls =
    this._dataService.getUrls(function (){
        that._onUrlsGet();
    });

    console.log(this._dataService.imagesUrls);
}