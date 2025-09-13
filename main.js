// Main runtime for AlkindiX site
// Handles progressive enhancement, theme toggling, and mobile menu

// Remove no-js class when JavaScript is enabled
document.documentElement.classList.remove('no-js');

// Theme toggle
themed();
function themed(){
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') {
    root.setAttribute('data-theme', stored);
    toggle.setAttribute('aria-pressed', stored === 'dark');
  }
  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', current);
    localStorage.setItem('theme', current);
    toggle.setAttribute('aria-pressed', current === 'dark');
  });
}

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn button');
const menuPanel = document.getElementById('menuPanel');
if (menuBtn && menuPanel) {
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    menuPanel.hidden = expanded;
    menuPanel.setAttribute('aria-modal', String(!expanded));
  });
}
