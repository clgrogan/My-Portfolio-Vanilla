// Select DOM Items
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const menuBrand = document.querySelector('.menu-brand');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

menuButton.addEventListener('click', toggleMenu);
console.log('main.js has loaded');

function toggleMenu() {
  console.log('Menu Clicked. Initial showMenu state is ' + showMenu);
  if(!showMenu) {
    menuButton.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBrand.classList.add('show');
    navItems.forEach(item => {
      item.classList.add('show');
    });
  } else {
    menuButton.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBrand.classList.remove('show');
    navItems.forEach(item => {
      item.classList.remove('show');
    });
  }
  // Toggle Menu State
  showMenu = !showMenu;
}