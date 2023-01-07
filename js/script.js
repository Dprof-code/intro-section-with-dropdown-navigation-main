console.log("script loaded!");

//DOM selections

let menuBar = document.getElementById("menu-icon");
let menu = document.getElementById("nav");
let overLay = document.getElementById("overlay");
let featuresSubMenuArrow = document.getElementById("fea-arrow");
let featuresSubMenu = document.getElementById("fea-sub-menu");
let companySubMenuArrow = document.getElementById("com-arrow");
let companySubMenu = document.getElementById("com-sub-menu");

//functions

menuBar.addEventListener("click", function navEvent() {
  menu.classList.toggle("hide");
  overLay.classList.toggle("hide");

  if (menu.classList.contains("hide")) {
    menuBar.src = "/images/icon-menu.svg";
  } else {
    menuBar.src = "/images/icon-close-menu.svg";
  }
});

featuresSubMenuArrow.addEventListener("click", function featureDropDownEvent() {
  featuresSubMenu.classList.toggle("hide");

  if (featuresSubMenu.classList.contains("hide")) {
    featuresSubMenuArrow.src = "/images/icon-arrow-down.svg";
  } else {
    featuresSubMenuArrow.src = "/images/icon-arrow-up.svg";
  }
});

companySubMenuArrow.addEventListener("click", function companyDropDownEvent() {
  companySubMenu.classList.toggle("hide");

  if (companySubMenu.classList.contains("hide")) {
    companySubMenuArrow.src = "/images/icon-arrow-down.svg";
  } else {
    companySubMenuArrow.src = "/images/icon-arrow-up.svg";
  }
});
