const menuBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('.mobile-menu');
const menuOpen = document.querySelector('[menu-icon-open]');

menuBtn.addEventListener('click', () => {
  const toggle = menu.classList.toggle('hidden');

  if (toggle === true) {
    menuOpen.src = '/assets/icon-hamburger.svg';
  } else {
    menuOpen.src = '/assets/icon-close.svg';
  }
});
