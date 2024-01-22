const menu = document.querySelector('header');

function activeScroll() {
    menu.classList.toggle('ativo', scrollY > 0);
}

window.addEventListener('scroll', activeScroll);