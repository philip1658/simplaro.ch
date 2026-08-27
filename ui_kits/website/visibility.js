(function () {
  const toggle = document.querySelector('.mock-menu-toggle');
  const menu = document.getElementById('mock-mobile-menu');

  if (!toggle || !menu) return;

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Menü öffnen');
    menu.classList.remove('is-open');
  }

  toggle.addEventListener('click', function () {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
    toggle.setAttribute('aria-label', open ? 'Menü öffnen' : 'Menü schliessen');
    menu.classList.toggle('is-open', !open);
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
}());
