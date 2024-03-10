const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0);
});
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.nav');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('open');
}
const sr = ScrollReveal({
  distance: '30px',
  duration: 2600,
  reset: true
});
sr.reveal('.home-text',{delay: 280,origin:'bottom'});
sr.reveal('.Menu,.cta,.new,.Gallery',{delay: 200,origin:'bottom'});