// помошник для конструктора SliderLogic
function SliderDataService() {
    this.imagesUrls = [];
    this.getUrls = function (successCallback) {
        let _imagesUrls = [];
        let that = this;

        // массив заполнится через 2 сек
        setTimeout(function () {
            that.imagesUrls.push("images/ninja.jpg");
            that.imagesUrls.push("images/jubei.gif");
            that.imagesUrls.push("images/moon.jpg");
            that.imagesUrls.push("images/bat-man.jpg");

            successCallback();

        }, 2000)
    }
}