const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  navItems.forEach(link => link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }))
}