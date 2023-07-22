
const swiper = new Swiper('.swiper', {

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    direction: 'horizontal',
    loop: true,

    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },

});
