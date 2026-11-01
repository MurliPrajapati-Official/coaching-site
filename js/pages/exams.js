/* ============================================================
   XYZ CLASSES — Competitive Exams Page Renderer
   ============================================================ */

function renderExamsPage(container) {
  document.title = 'Competitive Exam Coaching — NDA, CAT, CET, Railway | XYZ Classes, Pune';
  setMetaDescription('Competitive exam preparation in Pune — NDA coaching, CAT coaching, CET coaching, Railway exam preparation. Small batches, experienced faculty, proven strategies at XYZ Classes.');

  container.innerHTML = `
    <section class="page-header">
      <div class="container">
        <div class="page-header__breadcrumb">
          <a href="#home">Home</a>
          <span class="page-header__breadcrumb-sep">›</span>
          <span>Competitive Exams</span>
        </div>
        <h1 class="page-header__title">Competitive Exam Preparation</h1>
        <p class="page-header__subtitle">Focused coaching programs designed to crack national and state competitive examinations with structured preparation and expert guidance.</p>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="exams-list">
          ${EXAMS_DATA.map(exam => `
            <div class="card exam-card animate-on-scroll" id="exam-${exam.id}">
              <div class="exam-card__header">
                <div class="exam-card__icon">${Icons[exam.icon] ? Icons[exam.icon]('icon') : ''}</div>
                <div class="exam-card__titles">
                  <h2 class="exam-card__title">${exam.title}</h2>
                  <div class="exam-card__fullname">${exam.fullName}</div>
                </div>
                <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in ${exam.title} coaching at XYZ Classes.`)}" 
                   target="_blank" rel="noopener" class="btn-primary" style="flex-shrink:0;">
                  Inquire Now →
                </a>
              </div>

              <p class="exam-card__overview">${exam.overview}</p>

              <div class="exam-card__meta">
                <div class="exam-card__meta-item">
                  <div class="exam-card__meta-label">Eligibility</div>
                  <div class="exam-card__meta-value">${exam.eligibility}</div>
                </div>
                <div class="exam-card__meta-item">
                  <div class="exam-card__meta-label">Duration</div>
                  <div class="exam-card__meta-value">${exam.duration}</div>
                </div>
                <div class="exam-card__meta-item">
                  <div class="exam-card__meta-label">Batch Size</div>
                  <div class="exam-card__meta-value">${exam.batchSize}</div>
                </div>
              </div>

              <div class="exam-card__sections">
                <div>
                  <div class="exam-card__section-title">${Icons.board('icon')} What We Cover</div>
                  <div class="exam-card__section-list">
                    ${exam.features.map(f => `
                      <div class="exam-card__section-item">
                        <span style="color:var(--color-graphite);flex-shrink:0;">→</span>
                        <span>${f}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
                <div>
                  <div class="exam-card__section-title">${Icons.target('icon')} Preparation Strategy</div>
                  <div class="exam-card__section-list">
                    ${exam.strategy.map((s, i) => `
                      <div class="exam-card__section-item">
                        <span class="badge" style="font-size:10px;padding:2px 6px;flex-shrink:0;">${i + 1}</span>
                        <span>${s}</span>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>

              <div class="exam-card__faculty">
                <div class="exam-card__faculty-label">${Icons.teacher('icon')} Faculty Support</div>
                ${exam.faculty}
              </div>

              <div class="exam-card__cta">
                <a href="#contact" class="btn-primary" onclick="event.preventDefault();window.location.hash='#contact';">
                  Start ${exam.title} Preparation →
                </a>
                <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I want to know more about ${exam.title} (${exam.fullName}) coaching at XYZ Classes.`)}" 
                   target="_blank" rel="noopener" class="btn-outlined">
                  ${Icons.whatsapp('btn-icon')} WhatsApp Inquiry
                </a>
                <a href="tel:${PHONE_NUMBER}" class="btn-ghost">${Icons.phone('btn-icon')} Call Us</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="panel-dark" style="padding:var(--spacing-48);text-align:center;">
          <h3 style="font-size:var(--text-heading);margin-bottom:var(--spacing-12);">Ready to Start Your Preparation?</h3>
          <p style="color:var(--color-ash);font-size:var(--text-body-lg);max-width:500px;margin:0 auto var(--spacing-24);">
            Join a batch of focused aspirants with expert guidance. Limited seats — enroll early.
          </p>
          <div style="display:flex;gap:var(--spacing-16);justify-content:center;flex-wrap:wrap;">
            <a href="#contact" class="btn-primary btn-primary-inverse" onclick="event.preventDefault();window.location.hash='#contact';">
              Book Free Consultation
            </a>
            <a href="tel:${PHONE_NUMBER}" class="btn-outlined" style="border-color:rgba(255,255,255,0.3);color:var(--color-snow);background:transparent;">
              ${Icons.phone('btn-icon')} Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  requestAnimationFrame(() => initScrollAnimations());
}
