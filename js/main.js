const swiper = new Swiper('.main_slider', {
    loop: true,
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,          //페이지 버튼 클릭가능    
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});