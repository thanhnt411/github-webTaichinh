const menuMobile = document.getElementById("toggle");
const nav = document.querySelector(".header__menu");
const iconOpen = document.getElementById("isOpen");
const iconClose = document.getElementById("isClose");
menuMobile.addEventListener("click",function() {
    nav.classList.toggle("active");
     if(nav.classList.contains("active")) {
        document.body.classList.add("no-scroll");
        iconOpen.classList.add("hidden");
        iconClose.classList.add("show");
    }else {
        document.body.classList.remove("no-scroll");
        iconOpen.classList.remove("hidden");
        iconClose.classList.remove("show");
    }
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    /*
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    */
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
