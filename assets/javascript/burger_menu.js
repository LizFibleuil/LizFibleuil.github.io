let burgerMenu = document.querySelector('.nav-burger');

function toggleClass() {
    let menu = document.querySelector('.nav-links');
    menu.classList.toggle('show-links');
}

burgerMenu.addEventListener('click',toggleClass);