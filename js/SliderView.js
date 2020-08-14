function SliderView() {
    let that = this;

    this.showPrevBtn = null;
    this.showNextBtn = null;
    this.slideImage = null;

    this._logic = new SliderLogic();


    this.start = function (elId) {


        let el = document.getElementById(elId);

        el.innerHTML = `    
            <div class="abc-slider">
                <button class="show-prev-btn">PREV</button>
                <img src="" class="slide-img">
                <button class="show-next-btn">NEXT</button>
            </div>`;

        this.showPrevBtn = el.querySelector(".show-prev-btn");
        this.showNextBtn = el.querySelector(".show-next-btn");
        this.slideImage = el.querySelector(".slide-img");

        this.showPrevBtn.addEventListener("click", function (e) {
            that.onShowPrevBtnClick(e);
        });

        this.showNextBtn.addEventListener("click", function (e) {
            that.onShowNextBtnClick(e);
        });

        // this.slideImage.src = this._logic.getCurrentImageUrl();
        this.showPrevBtn.disabled = true;

        this._logic.init(function () {
            that.slideImage.src = that._logic.getCurrentImageUrl();
        });
    };

    this.onShowPrevBtnClick = function (e) {
        this._logic.activatePrevImage();

        this.slideImage.src = this._logic.getCurrentImageUrl();
        this.showNextBtn.disabled = false;

        if (!this._logic.canMovePrev()) {
            this.showPrevBtn.disabled = true;
        }
    };

    this.onShowNextBtnClick = function (e) {
        this._logic.activateNextImage();


        this.showPrevBtn.disabled = false;

        if (!this._logic.canMoveNext()) {
            this.showNextBtn.disabled = true;
        }
    }
}
