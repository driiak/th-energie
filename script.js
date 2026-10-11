const menuButton = document.querySelector('.menu');
const nav = document.querySelector('.header nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Ouvrir le menu');
  }));
}
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const email = String(data.get('email') || '').trim();
    const project = String(data.get('project') || '').trim();
    const subject = encodeURIComponent('Demande de devis - TH Énergie');
    const body = encodeURIComponent(`Nom : ${name}\nTéléphone : ${phone}\nE-mail : ${email}\n\nProjet :\n${project}`);
    const message = document.getElementById('formMessage');
    if (message) message.textContent = 'Votre application e-mail va s’ouvrir pour vous permettre d’envoyer votre demande.';
    window.location.href = `mailto:Th.energiee@gmail.com?subject=${subject}&body=${body}`;
  });
}
