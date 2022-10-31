"use strict";

// active button
var buttons = document.querySelectorAll('.menu-btn'),
    dotButtons = document.querySelectorAll('.dot'),
    cardEle = document.querySelectorAll('.card-elements-off');
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    buttons.forEach(function (btn) {
      return btn.classList.remove('li-active');
    });
    this.classList.add('li-active');
  });
}); // dotButtons.forEach(dotButton => {
//     dotButton.addEventListener('click', function () {
//         dotButtons.forEach(btn => btn.classList.remove('dot-active'));
//         this.classList.add('dot-active');
//     });
// });
// const element1 = document.querySelector('.element-1'),
//     element2 = document.querySelector('.element-2'),
//     element3 = document.querySelector('.element-3'),
//     dotBtn1 = document.querySelector('.btn-1'),
//     dotBtn2 = document.querySelector('.btn-2'),
//     dotBtn3 = document.querySelector('.btn-3');
// dotBtn1.onclick = () => {
//     cardEle.forEach(btn => btn.classList.remove('card-ele-active'));
//     element1.classList.add('card-ele-active');
// }
// dotBtn2.onclick = () => {
//     cardEle.forEach(btn => btn.classList.remove('card-ele-active'));
//     element2.classList.add('card-ele-active');
// }
// dotBtn3.onclick = () => {
//     cardEle.forEach(btn => btn.classList.remove('card-ele-active'));
//     element3.classList.add('card-ele-active');
// }

var dotBtnLength = dotButtons.length,
    cardEleLength = cardEle.length;
console.log(dotBtnLength + "__" + cardEleLength);
var i = 0;

for (i = 0; i < dotBtnLength; i++) {
  dotButtons[i].addEventListener("click", function () {
    dotButtons.forEach(function (btn) {
      return btn.classList.remove('dot-active');
    });
    this.classList.add('dot-active');
    cardEle.forEach(function (cbtn) {
      return cbtn.classList.remove('card-ele-active');
    });
    this.classList.add('card-ele-active');
  });
}