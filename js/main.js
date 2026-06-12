document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('nav--open');
      const isOpen = nav.classList.contains('nav--open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }
});
