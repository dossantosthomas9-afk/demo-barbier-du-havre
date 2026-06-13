const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const navLinks = [...document.querySelectorAll('.main-nav a')];

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

const sections = [...document.querySelectorAll('main section[id]')];
const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: '-42% 0px -50% 0px', threshold: 0 });
sections.forEach((section) => activeObserver.observe(section));

const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxClose = lightbox.querySelector('.lightbox-close');

document.querySelectorAll('[data-lightbox]').forEach((button) => {
  button.addEventListener('click', () => {
    lightboxImage.src = button.dataset.lightbox;
    lightboxImage.alt = button.querySelector('img').alt;
    lightbox.showModal();
  });
});

lightboxClose.addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});

// Remplacez cette valeur par l'adresse Messenger officielle de la page Facebook.
const messengerUrl = '';
const messengerButton = document.getElementById('messengerButton');
const messageDialog = document.getElementById('messageDialog');
const dialogOk = document.getElementById('dialogOk');
const dialogClose = messageDialog.querySelector('.dialog-close');

messengerButton.addEventListener('click', () => {
  if (messengerUrl) {
    window.open(messengerUrl, '_blank', 'noopener,noreferrer');
  } else {
    messageDialog.showModal();
  }
});

dialogOk.addEventListener('click', () => messageDialog.close());
dialogClose.addEventListener('click', () => messageDialog.close());
messageDialog.addEventListener('click', (event) => {
  if (event.target === messageDialog) messageDialog.close();
});
