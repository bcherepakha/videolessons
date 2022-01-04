function Slider(selector) {
    // this = { __proto__: Slider.prototype }

    this.selector = selector;
    this.rootEl = document.querySelector(selector);
    this.slides = Array.from(this.rootEl.querySelectorAll('.slider__slide'));
    this.slideIndex = this.slides.findIndex(function (slide) {
        return slide.classList.contains('slider__current');
    });

    if (this.slideIndex < 0) {
        this.slideIndex = 0;
    }

    this.prevSlideBtn = this.rootEl.querySelector('.slider__prev');
    this.nextSlideBtn = this.rootEl.querySelector('.slider__next');

    this.prevSlideBtn.addEventListener('click', this.prevSlide.bind(this));
    this.nextSlideBtn.addEventListener('click', this.nextSlide.bind(this));

    // return this;
}

Slider.prototype.prevSlide = function () {
    return this.showSlide(this.slideIndex - 1);
};

Slider.prototype.nextSlide = function () {
    return this.showSlide(this.slideIndex + 1);
};

Slider.prototype.showSlide = function (idx) {
    if (!isNaN(idx)) {
        this.slideIndex = Math.min(Math.max(idx, 0), this.slides.length - 1);
    }

    this.render();
};

Slider.prototype.render = function() {
    this.slides.forEach((slide, idx) => {
        if (idx === this.slideIndex) {
            slide.classList.add('slider__current');
        } else {
            slide.classList.remove('slider__current');
        }
    });
};

const sliderFade = new Slider('.fade');
const sliderSlide = new Slider('.slide');

console.log( sliderFade );

sliderFade.showSlide( 2 ); // this = sliderFade
sliderSlide.showSlide( 2 ); // this = sliderSlide
