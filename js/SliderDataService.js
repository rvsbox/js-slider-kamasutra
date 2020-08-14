// помошник для конструктора SliderLogic
function SliderDataService() {
    this.imagesUrls = [];
    this.getUrls = function (successCallback) {
        let _imagesPaths = [];
        let that = this;

        // массив заполнится через 2 сек
        setTimeout(function () {
            that.imagesPaths.push("images/ninja.jpg");
            that.imagesPaths.push("images/jubei.gif");
            that.imagesPaths.push("images/moon.jpg");
            that.imagesPaths.push("images/bat-man.jpg");

            successCallback();

        }, 2000)
    }
}