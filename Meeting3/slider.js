const slider = {
    currentSlide: 0,
    visibleElementsCount: 3,
    nextSlide: function nextSlide() { return slider.showSlide(slider.currentSlide+1) },
    prevSlide() { return slider.showSlide(slider.currentSlide-1) }, // [HomeObject]: slider
    showSlide(num) {
        slider.currentSlide = num;
        slider.render()
    },
    render() {}
}
