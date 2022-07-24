class Slider {
    constructor(sliderSelector) {
        this.root = document.querySelector(sliderSelector);
        this.body = this.root.querySelector('.slider__body');
        this.prevBtn = this.root.querySelector('.slider__action--left');
        this.nextBtn = this.root.querySelector('.slider__action--right');
        this.items = Array.from(this.root.querySelectorAll('.slider__item'));
        this.currentSlide = 0;
        this.viewSlides = 4;

        this.prevBtn.addEventListener('click', this.prev.bind(this));
        this.nextBtn.addEventListener('click', this.next.bind(this));

    }

    show(slideIdx) {
        const shownSlide = this.items[slideIdx];

        if (!shownSlide) {
            return null;
        }

        this.currentSlide = slideIdx;
        this.render();
    }

    next() {
        this.show(this.currentSlide + 1);
    }

    prev() {
        this.show(this.currentSlide - 1);
    }

    render() {
        const shownSlide = this.items[this.currentSlide];
        const slideRect = shownSlide.getBoundingClientRect();
        const bodyRect = this.body.getBoundingClientRect();
        const translateX = bodyRect.left - slideRect.left;

        this.body.style.transform = `translate(${translateX}px)`;
        this.items.forEach((slide, slideIdx) => {
            if (slideIdx < this.currentSlide && slideIdx > this.currentSlide + this.viewSlides) {
                slide.classList.add('card--hidden');
            } else {
                slide.classList.remove('card--hidden');
            }
        });

        if (this.currentSlide > 0) {
            this.prevBtn.classList.remove('slider__action--hidden');
        } else {
            this.prevBtn.classList.add('slider__action--hidden');
        }

        if (this.currentSlide > this.items.length - this.viewSlides) {
            this.nextBtn.classList.add('slider__action--hidden');
        } else {
            this.nextBtn.classList.remove('slider__action--hidden');
        }
    }
}

const slider1 = new Slider('.slider-first');
new Slider('.slider-second');

console.log(slider1);
