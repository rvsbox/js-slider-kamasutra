// помошник для конструктора SliderLogic
function SliderDataService() {

    this.getUrls = function (successCallback) {
        let imagesUrls = [];

        imagesUrls.push("images/ninja.jpg");
        imagesUrls.push("images/jubei.gif");
        imagesUrls.push("images/moon.jpg");
        imagesUrls.push("images/bat-man.jpg");

        successCallback(imagesUrls);
    }
}