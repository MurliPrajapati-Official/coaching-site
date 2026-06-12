/* ============================================================
   PURUSHOTTAM CLASSES — Footer Component
   ============================================================ */

function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.id = 'site-footer';

  footer.innerHTML = `
    <div class="container">
      <div class="footer__inner">
        <div class="footer__about">
          <div class="footer__brand-name">Purushottam Classes</div>
          <p class="footer__description">
            Expert coaching and personalized tuition for students from Class 1 to 12, competitive exams, and language programs. Helping students excel since 2013.
          </p>
          <div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap;">
            <span class="badge">Est. 2013</span>
            <span class="badge">Pune, Maharashtra</span>
          </div>
        </div>

        <div class="footer__programs">
          <div class="footer__heading">Programs</div>
          <div class="footer__links">
            <a href="#courses" class="footer__link">School Coaching</a>
            <a href="#tuition" class="footer__link">Home Tuition</a>
            <a href="#exams" class="footer__link">Competitive Exams</a>
            <a href="#courses" class="footer__link">Language Training</a>
            <a href="#courses" class="footer__link">Higher Education</a>
          </div>
        </div>

        <div class="footer__quick-links">
          <div class="footer__heading">Quick Links</div>
          <div class="footer__links">
            <a href="#home" class="footer__link">Home</a>
            <a href="#about" class="footer__link">About Us</a>
            <a href="#courses" class="footer__link">Courses</a>
            <a href="#contact" class="footer__link">Contact</a>
          </div>
        </div>

        <div class="footer__contact">
          <div class="footer__heading">Contact</div>
          <div style="display:flex;flex-direction:column;gap:16px;">
            <div class="footer__contact-item">
              <span class="footer__contact-icon">${Icons.location('icon')}</span>
              <span>Swapnashilp Apartment,<br>B.T. Kawade Road,<br>Pune, Maharashtra</span>
            </div>
            <div class="footer__contact-item">
              <span class="footer__contact-icon">${Icons.phone('icon')}</span>
              <a href="tel:${PHONE_NUMBER}" style="color:var(--color-ash);text-decoration:none;">${PHONE_NUMBER}</a>
            </div>
            <div class="footer__contact-item">
              <span class="footer__contact-icon">${Icons.whatsapp('icon')}</span>
              <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}" target="_blank" rel="noopener" style="color:var(--color-ash);text-decoration:none;">WhatsApp Us</a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <div class="footer__copyright">
          © ${new Date().getFullYear()} Purushottam Classes. All rights reserved.
        </div>
        <div class="footer__legal-links">
          <a href="#" class="footer__legal-link">Privacy Policy</a>
          <a href="#" class="footer__legal-link">Terms of Service</a>
        </div>
      </div>
    </div>
  `;

  return footer;
}
