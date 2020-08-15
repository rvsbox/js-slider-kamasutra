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


function SliderAjaxDataService() {

    // params: successCallback - function that has one parameter - array of images urls
    this.getUrls = function (successCallback) {
        $.ajax({
            // есть спец. онлайн сервисы для тестирования AJAX запросов
            url: "https://repetitora.net/api/JS/Images",
            success: function (data) {
                let imageUrls = [];

                for (let i = 0; i < data.length; i++) {
                    const element = data[i];
                    const url = element.original;
                    imageUrls.push(url);

                }
                successCallback(imageUrls);
            }
        });
    }
}


// ответ на запрос https://repetitora.net/api/JS/Images

// [{
//     "thumbnail": "https://beatmaker.tv/activecontent/images/users/5567/beatmaker-small.jpg",
//     "original": "https://beatmaker.tv/activecontent/images/users/5567/beatmaker.jpg"
// },
//     {
//         "thumbnail": "https://beatmaker.tv/activecontent/images/users/13236/beatmaker-small.jpg",
//         "original": "https://beatmaker.tv/activecontent/images/users/13236/beatmaker.jpg"
//     }
//     , {
//     "thumbnail": "https://beatmaker.tv/activecontent/images/users/8366/beatmaker-small.jpg",
//     "original": "https://beatmaker.tv/activecontent/images/users/8366/beatmaker.jpg"
// }, {
//     "thumbnail": "https://beatmaker.tv/activecontent/images/users/20204/beatmaker-small.jpg",
//     "original": "https://beatmaker.tv/activecontent/images/users/20204/beatmaker.jpg"
// }]