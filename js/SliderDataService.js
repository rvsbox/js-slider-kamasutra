// помошник для конструктора SliderLogic
function SliderDataService() {
    this.getUrls = function () {
        let _imagesPaths = [];

        // массив заполнится через 3 сек
        setTimeout(function () {
            _imagesPaths.push("images/ninja.jpg");
            _imagesPaths.push("images/jubei.gif");
            _imagesPaths.push("images/moon.jpg");
            _imagesPaths.push("images/bat-man.jpg");
        }, 3000)


        return _imagesPaths;
    }
}