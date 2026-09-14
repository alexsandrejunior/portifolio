const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-pill');
menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav-link')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
  });
}, { rootMargin: '-35% 0px -55% 0px' });
sections.forEach(section => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(item => revealObserver.observe(item));
