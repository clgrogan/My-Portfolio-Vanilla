// Select DOM Items
const menuButton = document.querySelector('.menu-button');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuBrand = document.querySelector('.menu-brand');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of values
let showMenu = false;

// Start listening
menuButton.addEventListener('click', toggleMenu);
menuToggle.addEventListener('click', toggleMenu);

// Ping heroku servers to wake them up
let url1='https://honey-get-api.herokuapp.com';
ping(url1);

// Email Address initialization
let emailAddress = null;
let emailBox = null;
if (document.getElementById('email-address')) {
  // not all consumers of this js will have an element with
  // the email address
  emailBox = document.querySelector('.email-box');
  emailAddress = document.getElementById('email-address').innerHTML;
  emailBox.addEventListener('click', sendEmail);
}
console.log('showMenu: ' + showMenu)
console.log('emailAddress: ' + emailAddress);

function toggleMenu() {
  if(!showMenu) {
    menuButton.classList.add('close');
    // menuToggle.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBrand.classList.add('show');
    navItems.forEach(item => {
      item.classList.add('show');
    });
  } else {
    menuButton.classList.remove('close');
    // menuToggle.classList.remove('close');
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

function sendEmail(emailAddress) {
  // window.open('mailto:' + emailAddress);
}

function ping(url){
  let imageObject= new Image();
  imageObject.src = url;
}