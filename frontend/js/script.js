//START Menu mobile
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

const searchIcon = document.querySelector(".header__search-box");
const searchOverlay = document.querySelector(".header__input-box");
const searchInput = document.querySelector(".header__input");

searchIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    searchOverlay.classList.add("appear");
    document.body.classList.add("no-scroll");
});

searchOverlay.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target)) {
        searchOverlay.classList.remove("appear");
        document.body.classList.remove("no-scroll");
    }
});

searchInput.addEventListener("click", (e) => {
    e.stopPropagation();
});

//END Menu mobile

//START Banner
var swiperBanner = new Swiper(".JS-banner", {
    spaceBetween: 30,
    centeredSlides: true,
    
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
    },
});
//END Banner

//START About
const myVideo = document.querySelector(".about__video-box");
const playVideo = document.querySelector(".video__myVideo");
const playContainer = document.querySelector(".about__play");
const buttonVideo = document.getElementById("video-mp4");
buttonVideo.addEventListener("click",function() {
    playContainer.classList.toggle("play");
    playVideo.classList.toggle("play");
    myVideo.classList.toggle("play");
    playVideo.play()
})
playVideo.addEventListener("ended",function() {
    playContainer.classList.toggle("play");
    playVideo.classList.toggle("play");
    myVideo.classList.toggle("play");
})
//END About

//START training,feedback,partners
var swiperTraining = new Swiper(".JS-training", {
    spaceBetween: 30,
    loop: true,
    freeMode: true,
    watchSlidesProgress: true,
    slidesPerView: 4,          
    slidesPerGroup: 1,
    
    navigation: {
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
    },

    breakpoints: {
        0: { //từ 0 trở lên
            slidesPerView: 1
        },

        768: { //từ 768 trở lên
            slidesPerView: 3
        },

        1024: {
            slidesPerView: 4
        }
    }
});

var swiperTraining2 = new Swiper(".JS-training2", {
    spaceBetween: 30,
    thumbs: {
        swiper: swiperTraining,
    },

    breakpoints: {
        0: { //từ 0 trở lên
            slidesPerView: 1
        },

        768: { //từ 768 trở lên
            slidesPerView: 1
        },

    }
});

var swiperFeedback = new Swiper(".JS-feedback", {
    spaceBetween: 30,
    centeredSlides: true,
    slidesPerView: 3,          
    slidesPerGroup: 1, 
    loop: true,
    
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    
    pagination: {
        el: ".swiper-pagination2",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },

    breakpoints: {
        0: { //từ 0 trở lên
            slidesPerView: 1
        },

        768: { //từ 768 trở lên
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        }
    }

});

 var swiperPartners = new Swiper(".JS-partners", {
    spaceBetween: 0,
    slidesPerView: 3,
    loop:true,

    grid: {
        rows: 3,
        fill: "row"
    },
    
    /*
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    */
    pagination: {
        el: ".swiper-pagination4",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
    },
});
//END training,feedback,partners

//START feature
var swiperFeature = new Swiper(".JS-feature", {
    spaceBetween: 30,
    freeMode: true,
    watchSlidesProgress: true,
    slidesPerView: 4,          
});

var swiperFeature2 = new Swiper(".JS-feature2", {
    spaceBetween: 30,
    slidesPerView:1,
    thumbs: {
        swiper: swiperFeature,
    },

    breakpoints: {
        0: { //từ 0 trở lên
            slidesPerView: 1
        },

        768: { //từ 768 trở lên
            slidesPerView: 1
        },
    }
});
//END feature

//START Back to top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 2000) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
 });

backToTop.addEventListener("click", () => {
    smoothScrollToTop(700);
});

function smoothScrollToTop(duration) {
  const start = window.scrollY;
  const startTime = performance.now();

  function scrollStep(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1); 
    const ease = 1 - Math.pow(1 - progress, 3); 
    window.scrollTo(0, start * (1 - ease));

    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}
//END Back to top

