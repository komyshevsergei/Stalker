let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    navigation: {
        nextEl: ".products__arrow_next",
        prevEl: ".products__arrow_prev",
    },
});

Fancybox.bind('[data-fancybox="gallery"]', {
    hideScrollbar: false,

    Toolbar: {
        display: {
            left: ["infobar"],
            middle: [
                "zoomIn",
                "zoomOut",
                "toggle1to1",
                "rotateCCW",
                "rotateCW",
                "flipX",
                "flipY",
            ],
            right: ["slideshow", "download", "thumbs", "close"],
        },
    },
    height: 1200,
    width: 1400
});