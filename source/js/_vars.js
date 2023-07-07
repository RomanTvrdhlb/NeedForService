export default {
  activeMode: 'active--mode',
  activeClass: "active",
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  overlay: document.querySelector('[data-overlay]'),
  accParrent: [...document.querySelectorAll("[data-accordion-init]")],
  // selectParrent: [...document.querySelectorAll("[data-select]")],
  tabsParrents: [...document.querySelectorAll("[data-tabs-parrent]")],
  modals: [...document.querySelectorAll('[data-popup]')],
  modalsButton: [...document.querySelectorAll("[data-btn-modal]")],
  modalsButtonMode: [...document.querySelectorAll("[data-mode-modal]")],
  innerButtonModal: [...document.querySelectorAll("[data-btn-inner]")],
  // customSelect: [...document.querySelectorAll("[data-select]")],
  burger: document.querySelector('.header .burger'),
  mobileBurger: document.querySelector('.mobile-menu .burger'),
  // mobileMenu: document.querySelector('.header-box__nav'),
  header: document.querySelector(".header"),

  // default variables
  passForm: [...document.querySelectorAll('.password-form__label')],
  footerLabel: document.querySelector('.footer__label'),
  footer: document.querySelector('.footer'),
  footerColl: document.querySelector('.footer__coll'),
  parrentBuffer: [...document.querySelectorAll('.buffer')],
  counter: document.querySelectorAll('.main-section__image [data-to]'),
  heroImage: document.querySelector('.main-section__image'),
  hiddenList: document.querySelector('.hidden-list'),
  mobileMenu: document.querySelector('.mobile-menu'),
  mainLinks: [...document.querySelectorAll('.mobile-link')],
  logoSlider: document.querySelector('.main-section__slider .swiper-container'),
  defaultSliders: [...document.querySelectorAll('.slider-line')],
  partnersSliders: document.querySelector('.partners-box__slider'),
  partnersBox: document.querySelector('.partners-box'),
  partnersBoxTitle: document.querySelector('.partners-box .main-top'),
  partnersBoxInner: document.querySelector('.partners-box .partners-box__inner'),
  partnersBoxBtnLeft: document.querySelector('.partners-box .swiper-button-prev'),
  partnersBoxBtnRight: document.querySelector('.partners-box .swiper-button-next'),
  tokenDesktop: document.querySelector('.about-token.dark-section .main-top'),
  tokenBtn: document.querySelector('.about-token.dark-section .about-token__button'),
  tokenMobile: document.querySelector('.about-token.dark-section .about-token__list'),


  // logoSlider: [...document.querySelectorAll('.payment-slider .swiper-container')],
  // mainLinks: [...document.querySelectorAll('.main-nav__link')],
  // observSections: [...document.querySelectorAll('.section-observe')],
  // formsSecond: '.contacts-section__form',
  // formsFirst: '.contact-section__form',
}





