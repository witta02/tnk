document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.nav-toggle');
  const list = document.querySelector('.nav-list');
  const year = document.getElementById('y');

  const closeMenu = () => {
    if (!btn || !list) return;
    list.classList.remove('show');
    btn.setAttribute('aria-expanded', 'false');
  };

  if (btn && list) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      list.classList.toggle('show');
    });

    document.addEventListener('click', (evt) => {
      if (!list.classList.contains('show')) return;
      if (evt.target === btn || btn.contains(evt.target)) return;
      if (list.contains(evt.target)) return;
      closeMenu();
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') closeMenu();
    });

    list.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => closeMenu());
    });
  }

  const setActiveLink = () => {
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-list a[href]')
      .forEach((link) => {
        const href = link.getAttribute('href') || '';
        if (!href.endsWith('.html')) return;
        if (href.replace('./', '') === current) {
          link.setAttribute('aria-current', 'page');
          link.classList.add('is-active');
        } else {
          link.removeAttribute('aria-current');
          link.classList.remove('is-active');
        }
      });
  };

  setActiveLink();
  if (year) year.textContent = new Date().getFullYear();
});