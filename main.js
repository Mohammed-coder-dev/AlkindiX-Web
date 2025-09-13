// Main runtime for AlkindiX site
// Handles progressive enhancement and navigation toggle

document.documentElement.classList.remove('no-js');

// Mobile navigation toggle
const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('nav__links--visible', !expanded);
  });
}

