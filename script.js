const menu = document.querySelector('.menu');
const navMenu = document.getElementById('nav-menu-id');
const menuItems = document.querySelectorAll('.nav-item');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.classList.remove('ativo');
    navMenu.classList.remove('ativo');
  });
});