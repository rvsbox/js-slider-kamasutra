// помошник для конструктора SliderLogic
function SliderDataService() {
    this.getUrls = function (successCallback) {
        let _imagesPaths = [];

        // массив заполнится через 2 сек
        setTimeout(function () {
            _imagesPaths.push("images/ninja.jpg");
            _imagesPaths.push("images/jubei.gif");
            _imagesPaths.push("images/moon.jpg");
            _imagesPaths.push("images/bat-man.jpg");

            successCallback();

        }, 2000)
    }
}