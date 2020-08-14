// помошник для конструктора SliderLogic
function SliderDataService() {
    this.imagesUrls = [];

    this.getUrls = function (successCallback) {
        // let _imagesUrls = [];

        this.imagesUrls.push("images/ninja.jpg");
        this.imagesUrls.push("images/jubei.gif");
        this.imagesUrls.push("images/moon.jpg");
        this.imagesUrls.push("images/bat-man.jpg");

        successCallback();
    }
}