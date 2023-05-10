const menuHamburguer = document.querySelector('.menu-hamburger');
const menu = document.querySelector('.menu');

menuHamburguer.addEventListener('click', () => {
    menu.classList.toggle('ativo')
} )