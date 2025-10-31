document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.nav-toggle');
    const list = document.querySelector('.nav-list');
    const year = document.getElementById('y');
  
    if (btn && list) {
      btn.addEventListener('click', () => {
        list.classList.toggle('show');
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
      });
    }
    if (year) year.textContent = new Date().getFullYear();
  });