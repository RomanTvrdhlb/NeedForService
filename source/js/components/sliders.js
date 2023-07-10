import Swiper from "../vendor/swiper";
import vars from "../_vars";
import { throttle } from "../functions/throttle";
import { even } from "../functions/customFunctions";

const { mainSlider } = vars;

if(mainSlider){
const swiper = new Swiper(mainSlider.querySelector('.main-slider__container'), {
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  observer: true,
  observeParents: true,

  pagination: {
    el: '.main-slider__pagination',
    type: "bullets",
    clickable: true,
  },

});
}

