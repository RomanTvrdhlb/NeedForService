export default {
  activeMode: 'active--mode',
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  overlay: document.querySelector('[data-overlay]'),
  observSections: [...document.querySelectorAll('.section-observe')],
  modals: [...document.querySelectorAll('[data-popup]')],
  modalsButton: [...document.querySelectorAll("[data-btn-modal]")],
  mainSlider: document.querySelector('.main-slider'),
  burger: document.querySelector('.header .burger'),
  mainLinks: [...document.querySelectorAll('.main-nav__link')],
  mobileMenu: document.querySelector('.main-nav'),
  header: document.querySelector(".header"),
  mainCards: [...document.querySelectorAll('.main-card')],
  callBtn: document.querySelector('.header .callback-button'),
}





