/* ============================================================
   PURUSHOTTAM CLASSES — Navbar Component
   ============================================================ */

const PHONE_NUMBER = '+919999999999';
const WHATSAPP_NUMBER = '919999999999';
const WHATSAPP_MESSAGE = encodeURIComponent('Hi, I\'m interested in tuition at Purushottam Classes. Please share details.');

const NAV_LINKS = [
  { label: 'Home', hash: '#home' },
  { label: 'Courses', hash: '#courses' },
  { label: 'Competitive Exams', hash: '#exams' },
  { label: 'Home Tuition', hash: '#tuition' },
  { label: 'About', hash: '#about' },
  { label: 'Contact', hash: '#contact' }
];

function renderNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.id = 'main-navbar';
  nav.setAttribute('role', 'navigation');
  nav.setAttribute('aria-label', 'Main navigation');

  const currentHash = window.location.hash || '#home';

  nav.innerHTML = `
    <div class="navbar__inner">
      <a href="#home" class="navbar__brand" aria-label="Purushottam Classes Home">
        <div>
          <div class="navbar__logo-text">Purushottam Classes</div>
          <div class="navbar__logo-sub">Since 2013</div>
        </div>
      </a>
      <div class="navbar__links" id="nav-links">
        ${NAV_LINKS.map(link => `
          <a href="${link.hash}" class="navbar__link ${currentHash === link.hash ? 'active' : ''}" data-nav-link>${link.label}</a>
        `).join('')}
      </div>
      <a href="#home" class="btn-primary navbar__cta" data-scroll-to="lead-form" id="nav-cta-btn">
        Book Consultation
      </a>
      <button class="navbar__hamburger" id="nav-hamburger" aria-label="Toggle navigation menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  `;

  // Mobile menu
  const mobileOverlay = document.createElement('div');
  mobileOverlay.className = 'mobile-overlay';
  mobileOverlay.id = 'mobile-overlay';

  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'navbar__mobile-menu';
  mobileMenu.id = 'mobile-menu';
  mobileMenu.innerHTML = `
    ${NAV_LINKS.map(link => `
      <a href="${link.hash}" class="navbar__mobile-link ${currentHash === link.hash ? 'active' : ''}" data-mobile-link>${link.label}</a>
    `).join('')}
    <div class="navbar__mobile-cta">
      <a href="#home" class="btn-primary" style="width:100%;text-align:center;justify-content:center;" data-scroll-to="lead-form" data-mobile-link>
        Book Free Consultation
      </a>
    </div>
    <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}" class="btn-whatsapp" target="_blank" rel="noopener" style="margin-top:8px;text-align:center;justify-content:center;">
      💬 Talk on WhatsApp
    </a>
  `;

  document.body.prepend(mobileMenu);
  document.body.prepend(mobileOverlay);
  document.body.prepend(nav);

  // Spacer
  const spacer = document.createElement('div');
  spacer.className = 'nav-spacer';
  document.body.insertBefore(spacer, document.getElementById('app'));

  // Hamburger toggle
  const hamburger = document.getElementById('nav-hamburger');
  hamburger.addEventListener('click', toggleMobileMenu);
  mobileOverlay.addEventListener('click', closeMobileMenu);

  // Mobile link clicks
  document.querySelectorAll('[data-mobile-link]').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Nav CTA scroll behavior
  const navCta = document.getElementById('nav-cta-btn');
  navCta.addEventListener('click', (e) => {
    e.preventDefault();
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.location.hash = '#contact';
    }
  });
}

function toggleMobileMenu() {
  const hamburger = document.getElementById('nav-hamburger');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');

  const isOpen = menu.classList.contains('open');

  if (isOpen) {
    closeMobileMenu();
  } else {
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    menu.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  const hamburger = document.getElementById('nav-hamburger');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-overlay');

  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  menu.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function updateNavActiveLink(hash) {
  document.querySelectorAll('[data-nav-link]').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === hash);
  });
  document.querySelectorAll('[data-mobile-link]').forEach(link => {
    if (link.getAttribute('href')) {
      link.classList.toggle('active', link.getAttribute('href') === hash);
    }
  });
}
