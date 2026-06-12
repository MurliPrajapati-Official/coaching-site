/* ============================================================
   PURUSHOTTAM CLASSES — Floating CTA Bar Component
   ============================================================ */

function renderCtaBar() {
  const bar = document.createElement('div');
  bar.className = 'cta-float';
  bar.id = 'cta-float';

  bar.innerHTML = `
    <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}"
       target="_blank"
       rel="noopener"
       class="cta-float__btn cta-float__btn--whatsapp"
       aria-label="Chat on WhatsApp"
       title="Chat on WhatsApp"
       id="float-whatsapp">
      ${Icons.whatsapp('icon')}
    </a>
    <a href="tel:${PHONE_NUMBER}"
       class="cta-float__btn cta-float__btn--call"
       aria-label="Call us"
       title="Call Purushottam Classes"
       id="float-call">
      ${Icons.phone('icon')}
    </a>
    <button class="cta-float__btn cta-float__btn--inquiry"
       aria-label="Send inquiry"
       title="Book Consultation"
       id="float-inquiry">
      ${Icons.edit('icon')}
    </button>
  `;

  document.body.appendChild(bar);

  // Show/hide based on scroll position
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        bar.classList.toggle('visible', scrollY > 400);
        ticking = false;
      });
      ticking = true;
    }
  });

  // Inquiry button scrolls to form or opens contact
  document.getElementById('float-inquiry').addEventListener('click', () => {
    const form = document.getElementById('lead-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.location.hash = '#contact';
    }
  });
}
