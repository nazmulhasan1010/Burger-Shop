// active button
const buttons = document.querySelectorAll('.menu-btn'),
    dotButtons = document.querySelectorAll('.dot'),
    cardEle = document.querySelectorAll('.card-elements-off');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        buttons.forEach(btn => btn.classList.remove('li-active'));
        this.classList.add('li-active');
    });
});

dotButtons.forEach(dotButton => {
    dotButton.addEventListener('click', function () {
        dotButtons.forEach(btn => btn.classList.remove('dot-active'));
        this.classList.add('dot-active');
    });
});

const element1 = document.querySelector('.element-1'),
    element2 = document.querySelector('.element-2'),
    element3 = document.querySelector('.element-3'),
    dotBtn1 = document.querySelector('.btn-1'),
    dotBtn2 = document.querySelector('.btn-2'),
    dotBtn3 = document.querySelector('.btn-3');
dotBtn1.onclick = () => {
    cardEle.forEach(btn => btn.classList.remove('card-ele-active'));
    cardEle.forEach(btn => btn.style.marginLeft = '-80%');
    element1.classList.add('card-ele-active');
    element1.style.marginLeft = '0';
}
dotBtn2.onclick = () => {
    cardEle.forEach(btn => btn.classList.remove('card-ele-active'));
    cardEle.forEach(btn => btn.style.marginLeft = '-80%');
    element2.classList.add('card-ele-active');
    element2.style.marginLeft = '0';
}
dotBtn3.onclick = () => {
    cardEle.forEach(btn => btn.classList.remove('card-ele-active'));
    cardEle.forEach(btn => btn.style.marginLeft = '-80%');
    element3.classList.add('card-ele-active');
    element3.style.marginLeft = '0';
}

// const dotBtnLength = dotButtons.length,
//     cardEleLength = cardEle.length;
// console.log(dotBtnLength + "__" + cardEleLength);
// var i = 0;
// for (i = 0; i < dotBtnLength; i++) {
//     dotButtons[i].addEventListener("click", function () {
//         dotButtons.forEach(btn => btn.classList.remove('dot-active'));
//         this.classList.add('dot-active');
//         cardEle.forEach(cbtn => cbtn.classList.remove('card-ele-active'));
//         var i= i;
//         console.log(i);
//         this.classList.add('card-ele-active');
//     });
// }
const menuIco = document.querySelector('.fas'),
    menuItem = document.querySelector('.menu'),
    toggleDiv = document.querySelector('.menu-toggle-ico'),
    crossBtn = document.querySelector('.far');
menuIco.onclick = () => {
    menuItem.style.display = 'block';
    menuItem.style.width = '250px';
    toggleDiv.style.display = 'none';
}
crossBtn.onclick = () => {
    menuItem.style.display = 'none';
    toggleDiv.style.display = 'block';
    window.location.reload();
}

let width = screen.width;
console.log(width);