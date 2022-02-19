//splide carousel

document.addEventListener('DOMContentLoaded', function () {
    const splide = new Splide('.splide', {
        type: 'loop',
        autoplay: true,
    });
    splide.mount();
});