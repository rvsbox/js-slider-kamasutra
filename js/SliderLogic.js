function SliderLogic() {
    let that = this;

    this._imagesUrls = [];
    this._currentImageIndex = 0;

    // выбрать один из вариантов ниже
    // this._dataService = new SliderDataService(); // картинки на локальном ПК
    this._dataService = new SliderAjaxDataService(); // картинки на сервере

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

    this.init = function (callback){
        // add new sub object
        this._dataService.getUrls(function (urls){

            that._imagesUrls = urls;

            callback();
        });
    }
}