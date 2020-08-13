// помошник для конструктора SliderLogic
function SliderDataService() {
    this.getUrls = function () {
        let _imagesPaths = [];

        _imagesPaths.push("images/ninja.jpg");
        _imagesPaths.push("images/jubei.gif");
        _imagesPaths.push("images/moon.jpg");
        _imagesPaths.push("images/bat-man.jpg");

        return _imagesPaths;
    }
}