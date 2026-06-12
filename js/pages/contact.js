/* ============================================================
   PURUSHOTTAM CLASSES — Contact Page Renderer
   ============================================================ */

function renderContactPage(container) {
  document.title = 'Contact Us — Purushottam Classes | Tuition in Pune, B.T. Kawade Road';
  setMetaDescription('Contact Purushottam Classes — tuition classes on B.T. Kawade Road, Pune. Call, WhatsApp, or visit us. Book free academic consultation for your child today.');

  container.innerHTML = `
    <section class="page-header">
      <div class="container">
        <div class="page-header__breadcrumb">
          <a href="#home">Home</a>
          <span class="page-header__breadcrumb-sep">›</span>
          <span>Contact</span>
        </div>
        <h1 class="page-header__title">Get in Touch</h1>
        <p class="page-header__subtitle">Have questions about our programs? Ready to enroll? We'd love to hear from you.</p>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Info -->
          <div class="contact-info animate-on-scroll">
            <div class="contact-info__item">
              <div class="contact-info__icon">📍</div>
              <div class="contact-info__content">
                <div class="contact-info__label">Visit Us</div>
                <div class="contact-info__value">
                  Swapnashilp Apartment,<br>
                  B.T. Kawade Road,<br>
                  Pune, Maharashtra
                </div>
              </div>
            </div>

            <div class="contact-info__item">
              <div class="contact-info__icon">📞</div>
              <div class="contact-info__content">
                <div class="contact-info__label">Call Us</div>
                <div class="contact-info__value">
                  <a href="tel:${PHONE_NUMBER}">${PHONE_NUMBER}</a>
                </div>
              </div>
            </div>

            <div class="contact-info__item">
              <div class="contact-info__icon">💬</div>
              <div class="contact-info__content">
                <div class="contact-info__label">WhatsApp</div>
                <div class="contact-info__value">
                  <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}" target="_blank" rel="noopener">
                    Message us on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div class="contact-info__item">
              <div class="contact-info__icon">✉️</div>
              <div class="contact-info__content">
                <div class="contact-info__label">Email</div>
                <div class="contact-info__value">
                  <a href="mailto:info@purushottamclasses.com">info@purushottamclasses.com</a>
                </div>
              </div>
            </div>

            <!-- Quick Action Buttons -->
            <div class="contact-actions">
              <a href="tel:${PHONE_NUMBER}" class="btn-primary" id="contact-call-btn">
                📞 Call Now
              </a>
              <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}" target="_blank" rel="noopener" class="btn-whatsapp" id="contact-whatsapp-btn">
                💬 WhatsApp
              </a>
            </div>

            <!-- Operating Hours -->
            <div class="card-muted contact-hours">
              <div class="contact-hours__title">🕐 Operating Hours</div>
              <div class="contact-hours__grid">
                <span class="contact-hours__day">Monday – Friday</span>
                <span class="contact-hours__time">8:00 AM – 8:00 PM</span>
                <span class="contact-hours__day">Saturday</span>
                <span class="contact-hours__time">8:00 AM – 8:00 PM</span>
                <span class="contact-hours__day">Sunday</span>
                <span class="contact-hours__time">9:00 AM – 1:00 PM</span>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="card contact-form-card animate-on-scroll" id="contact-form-container">
            <div style="margin-bottom:var(--spacing-20);">
              <h3 style="font-size:var(--text-heading-sm);font-weight:var(--weight-semibold);color:var(--color-obsidian);margin-bottom:var(--spacing-4);">Send Your Inquiry</h3>
              <p style="font-size:var(--text-body);color:var(--color-steel);">Fill out the form and we'll get back to you within 2 hours.</p>
            </div>
            <div id="contact-lead-form-mount"></div>
          </div>
        </div>

        <!-- Google Maps -->
        <div class="contact-map animate-on-scroll" id="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5!2d73.8977!3d18.5074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzI2LjciTiA3M8KwNTMnNTEuNyJF!5e0!3m2!1sen!2sin!4v1600000000000"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Purushottam Classes Location — B.T. Kawade Road, Pune">
          </iframe>
        </div>
      </div>
    </section>
  `;

  // Mount lead form
  renderLeadForm('contact-lead-form-mount', { theme: 'light', source: 'contact-page', compact: true });

  requestAnimationFrame(() => initScrollAnimations());
}
