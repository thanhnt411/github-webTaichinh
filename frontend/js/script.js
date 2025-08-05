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

