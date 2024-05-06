function swiperAnnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
}
swiperAnnimation();

function navFunction() {
  let link = document.querySelector(".ham-link");
  let ham = document.querySelector(".ham");
  let cross = document.querySelector(".cross");

  link.addEventListener("click", function (e) {
    e.stopPropagation();
    link.style.opacity = 1;
    ham.style.opacity = 0;
  });
  cross.addEventListener("click", function (e) {
    e.stopPropagation();
    link.style.opacity = 0;
    ham.style.opacity = 1;
  });
}
navFunction();
