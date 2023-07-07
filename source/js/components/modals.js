import vars from "../_vars";
import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";
import {
  removeClassInArray,
  addCustomClass,
  removeCustomClass,
} from "../functions/customFunctions";
import { data } from "autoprefixer";

export function modalClickHandler(attribute, activeClass) {
  const curentModal = overlay.querySelector(`[data-popup="${attribute}"]`);
  removeClassInArray(modals, activeClass);
  addCustomClass(overlay, activeMode);
  addCustomClass(curentModal, activeClass);
  disableScroll();
  innerButton = overlay.querySelector(
    `${"[data-popup]"}.${activeClass} .close`
  );
}

const {
  overlay,
  activeClass,
  modalsButton,
  modalsButtonMode,
  modals,
  innerButtonModal,
  activeMode,
} = vars;
let innerButton;
const commonFunction = function () {
  removeCustomClass(overlay, activeMode);
  removeCustomClass(overlay, activeClass);
  removeClassInArray(modals, activeClass);
  enableScroll();
};

function buttonClickHandler(e, buttonAttribute, activeClass) {
  e.preventDefault();
  const currentModalId = e.target.getAttribute(`${buttonAttribute}`);
  const curentModal = overlay.querySelector(`[data-popup="${currentModalId}"]`);

  removeClassInArray(modals, activeClass);
  addCustomClass(overlay, activeClass);
  addCustomClass(curentModal, activeClass);
  disableScroll();
  innerButton = overlay.querySelector(
    `${"[data-popup]"}.${activeClass} .close`
  );
}

function overlayClickHandler(e, activeClass) {
  if (e.target === overlay || e.target === innerButton) commonFunction();
}

function modalInit(buttonsArray, buttonAttribute, activeClass) {
  buttonsArray.map(function (btn) {
    btn.addEventListener("click", (e) =>
      buttonClickHandler(e, buttonAttribute, activeClass)
    );
  });
}

overlay &&
  overlay.addEventListener("click", function (e) {
    overlayClickHandler(e, activeClass);
  });
modalInit(modalsButton, "data-btn-modal", activeClass);

innerButtonModal &&
  innerButtonModal.map(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const currentModalId = e.target.getAttribute("data-btn-inner");
      const curentModal = overlay.querySelector(
        `[data-popup="${currentModalId}"]`
      );
      removeClassInArray(modals, activeClass);
      addCustomClass(overlay, activeClass);
      if (overlay.classList.contains("a-start")) {
        addCustomClass(overlay, activeMode);
      }
      addCustomClass(curentModal, activeClass);
      disableScroll();
      innerButton = overlay.querySelector(
        `${"[data-popup]"}.${activeClass} .close`
      );
    });
  });

modalsButtonMode &&
  modalsButtonMode.map(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const currentModalId = e.target.getAttribute("data-mode-modal");
      const curentModal = overlay.querySelector(
        `[data-popup="${currentModalId}"]`
      );
      removeClassInArray(modals, activeClass);
      addCustomClass(overlay, activeClass);
      addCustomClass(overlay, activeMode);
      addCustomClass(curentModal, activeClass);
      innerButton = overlay.querySelector(
        `${"[data-popup]"}.${activeClass} .close`
      );
      disableScroll();
    });
  });

const dataBtns = [...document.querySelectorAll("[data-box-btn]")];

dataBtns.map(function (btn) {
  btn.addEventListener("click", function (e) {
    if (e.target.getAttribute("data-box-btn") === "1") {
      removeClassInArray(
        [...document.querySelectorAll("[data-box]")],
        "active"
      );
      addCustomClass(document.querySelector('[data-box="2"]'), "active");
    }

    if (e.target.getAttribute("data-box-btn") === "2") {
      removeClassInArray(
        [...document.querySelectorAll("[data-box]")],
        "active"
      );
      addCustomClass(document.querySelector('[data-box="1"]'), "active");
    }

    if (e.target.getAttribute("data-box-btn") === "3") {
      removeClassInArray(
        [...document.querySelectorAll("[data-box]")],
        "active"
      );
      addCustomClass(document.querySelector('[data-box="3"]'), "active");
    }
  });
});

const hiddenWrapper = document.querySelector(".hidden-wrapper");
const hiddenBtn = document.querySelector("[data-btn-hidden]");

function hiddenInit() {
  hiddenBtn.addEventListener("click", function (e) {
    e.preventDefault;
    addCustomClass(hiddenWrapper, activeClass);

    setTimeout(() => {
      removeCustomClass(hiddenWrapper, activeClass);
    }, 4000);

    const modals = [...hiddenWrapper.querySelectorAll(".modal-status")];

    modals.map(function (modal) {
      modal.querySelector(".close").addEventListener("click", function () {
        removeCustomClass(hiddenWrapper, activeClass);
      });
    });
  });
}

if (hiddenWrapper) {
  hiddenInit("active");
}

function defaultInit(attribute, activeClass) {
  const curentModal = overlay.querySelector(`[data-popup="${attribute}"]`);

  removeClassInArray(modals, activeClass);
  addCustomClass(overlay, activeClass);
  addCustomClass(curentModal, activeClass);
  disableScroll();
  innerButton = overlay.querySelector(
    `${"[data-popup]"}.${activeClass} .close`
  );
}

if (document.querySelector(".farming")) {
  setTimeout(() => {
    defaultInit("offers", activeClass);
  },500);
}

if (document.querySelector('.about-fls')) {
  setTimeout(() => {
    defaultInit("welcome", activeClass);
  },500);  
}

const stakedItems = [...document.querySelectorAll('.staked-list__item')];

if(stakedItems){
  stakedItems.map(function(item){
    item.addEventListener('click', function(){
      removeClassInArray(stakedItems, 'active');
      addCustomClass(item, 'active');
    })
  })
}