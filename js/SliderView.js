function SliderView() {
    this.showPrevBtn = null;
    this.showNextBtn = null;
    this.slideImage = null;

    this._logic = new SliderLogic();


    this.start = function (elId) {
        let that = this;

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

        this.slideImage.src = this._logic.imagesPaths[this._logic.currentImageIndex];
        this.showPrevBtn.disabled = true;
    };

    this.onShowPrevBtnClick = function (e) {
        this._logic.currentImageIndex--;
        this.slideImage.src = this._logic.imagesPaths[this._logic.currentImageIndex];
        this.showNextBtn.disabled = false;

        if (this._logic.currentImageIndex === 0) {
            this.showPrevBtn.disabled = true;
        }
    };

    this.onShowNextBtnClick = function (e) {
        this._logic.currentImageIndex++;
        this.slideImage.src = this._logic.imagesPaths[this._logic.currentImageIndex];
        this.showPrevBtn.disabled = false;

        if (this._logic.currentImageIndex === (this._logic.imagesPaths.length - 1)) {
            this.showNextBtn.disabled = true;
        }
    }
}
