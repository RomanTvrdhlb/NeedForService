import Swiper from "../vendor/swiper";
import vars from "../_vars";
import { throttle } from "../functions/throttle";
import { even } from "../functions/customFunctions";

const { defaultSliders, partnersSliders, logoSlider } = vars;

defaultSliders.map(function (defaultSlider, index) {
  const myList = defaultSlider.querySelector(".swiper-slide");
  const myInner = defaultSlider.querySelector(".swiper-wrapper");
  const count = 150;

  for (let i = 0; i < count; ++i) {
    const myListCopy = myList.cloneNode(true);
    myInner.append(myListCopy);
  }

  even(index + 1)
    ? initLineSlider(defaultSlider, false, 100)
    : initLineSlider(defaultSlider, false, -100);
});

function initLineSlider(slider, direction, initialSlideCount) {
  function startSlider() {
    const swiper = new Swiper(slider && slider, {
      slidesPerView: "auto",
      spaceBetween: 40,
      observer: true,
      observeParents: true,
      speed: 10000,
      // initialSlide: 5,

      autoplay: {
        delay: 0,
        // reverseDirection: direction,
      },
      breakpoints: {
        320: {
          spaceBetween: 30,
        },
        576: {
          spaceBetween: 40,
        },
      },
    });
  }
  startSlider();
}

const swiper = new Swiper(partnersSliders, {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
  },
});

const swiperLogo = new Swiper(logoSlider, {
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  loop: true,

  direction: "vertical", // вертикальная прокрутка
  slidesPerView: 1,
  mousewheel: true, // можно прокручивать изображения колёсиком мыши

  autoplay: {
    delay: 3500,
  },
});
