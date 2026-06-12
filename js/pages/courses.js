/* ============================================================
   PURUSHOTTAM CLASSES — Courses Page Renderer
   ============================================================ */

function renderCoursesPage(container) {
  document.title = 'Courses — Class 1 to 12 Tuition | Purushottam Classes, Pune';
  setMetaDescription('Explore academic courses for Class 1-12 at Purushottam Classes, Pune. CBSE, ICSE, IGCSE, NIOS, State Board coaching with experienced faculty. Mathematics, Science, English, Languages.');

  container.innerHTML = `
    <section class="page-header">
      <div class="container">
        <div class="page-header__breadcrumb">
          <a href="#home">Home</a>
          <span class="page-header__breadcrumb-sep">›</span>
          <span>Courses</span>
        </div>
        <h1 class="page-header__title">Academic Courses</h1>
        <p class="page-header__subtitle">Comprehensive coaching programs from foundation to senior secondary, covering all major boards and subjects.</p>
      </div>
    </section>

    <section class="section" style="padding-top:0;">
      <div class="container">
        <!-- Tabs -->
        <div class="courses-tabs" id="course-tabs" role="tablist">
          ${COURSES_DATA.map((course, i) => `
            <button class="courses-tab ${i === 0 ? 'active' : ''}" 
                    data-tab="${course.id}" 
                    role="tab"
                    aria-selected="${i === 0}"
                    id="tab-${course.id}">
              ${Icons[course.icon] ? Icons[course.icon]('btn-icon') : ''} ${course.title} (${course.grades})
            </button>
          `).join('')}
        </div>

        <!-- Tab Content -->
        ${COURSES_DATA.map((course, i) => `
          <div class="course-detail ${i === 0 ? 'active' : ''}" id="course-${course.id}" role="tabpanel" aria-labelledby="tab-${course.id}">
            <div class="course-detail__header animate-on-scroll">
              <div class="course-detail__icon">${Icons[course.icon] ? Icons[course.icon]('icon') : ''}</div>
              <div class="course-detail__info">
                <h2 class="course-detail__title">${course.title}</h2>
                <div class="course-detail__grades">${course.grades}</div>
                <p class="course-detail__description">${course.description}</p>
              </div>
            </div>

            <!-- Boards -->
            <div class="course-detail__boards animate-on-scroll" style="margin-bottom:var(--spacing-24);">
              <span style="font-size:var(--text-sm);font-weight:var(--weight-semibold);color:var(--color-steel);margin-right:8px;">Boards:</span>
              ${course.boards.map(b => `<span class="badge">${b}</span>`).join('')}
            </div>

            <div class="course-detail__grid">
              <!-- Subjects -->
              <div class="card animate-on-scroll">
                <div class="course-detail__card-title">${Icons.openBook('icon')} Subjects Offered</div>
                <div class="course-detail__subjects">
                  ${course.subjects.map(s => `<span class="badge-light">${s}</span>`).join('')}
                </div>
              </div>

              <!-- Teaching Method -->
              <div class="card animate-on-scroll">
                <div class="course-detail__card-title">${Icons.edit('icon')} Teaching Method</div>
                <div class="course-detail__list">
                  ${course.method.map(m => `
                    <div class="course-detail__list-item">
                      <span class="course-detail__list-icon">→</span>
                      <span>${m}</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Learning Outcomes -->
              <div class="card animate-on-scroll">
                <div class="course-detail__card-title">${Icons.target('icon')} Learning Outcomes</div>
                <div class="course-detail__list">
                  ${course.outcomes.map(o => `
                    <div class="course-detail__list-item">
                      <span class="course-detail__list-icon">${Icons.check('icon')}</span>
                      <span>${o}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <div class="course-detail__cta animate-on-scroll">
              <a href="#contact" class="btn-primary" onclick="event.preventDefault();window.location.hash='#contact';">
                Enroll in ${course.title} →
              </a>
              <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I'm interested in ${course.title} (${course.grades}) coaching at Purushottam Classes.`)}" 
                 target="_blank" rel="noopener" class="btn-outlined">
                ${Icons.whatsapp('btn-icon')} WhatsApp Inquiry
              </a>
              <a href="tel:${PHONE_NUMBER}" class="btn-ghost">${Icons.phone('btn-icon')} Call Us</a>
            </div>
          </div>
        `).join('')}
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section">
      <div class="container">
        <div class="panel-dark" style="padding:var(--spacing-48);text-align:center;">
          <h3 style="font-size:var(--text-heading);margin-bottom:var(--spacing-12);">Not Sure Which Program Is Right?</h3>
          <p style="color:var(--color-ash);font-size:var(--text-body-lg);max-width:500px;margin:0 auto var(--spacing-24);">
            Book a free academic consultation. Our counselors will assess your child's needs and recommend the perfect program.
          </p>
          <div style="display:flex;gap:var(--spacing-16);justify-content:center;flex-wrap:wrap;">
            <a href="#contact" class="btn-primary btn-primary-inverse" onclick="event.preventDefault();window.location.hash='#contact';">
              Book Free Consultation
            </a>
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}" target="_blank" rel="noopener" class="btn-outlined" style="border-color:rgba(255,255,255,0.3);color:var(--color-snow);background:transparent;">
              ${Icons.whatsapp('btn-icon')} Talk on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  // Tab switching logic
  document.querySelectorAll('.courses-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.dataset.tab;

      // Update tabs
      document.querySelectorAll('.courses-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Update content
      document.querySelectorAll('.course-detail').forEach(d => d.classList.remove('active'));
      document.getElementById(`course-${tabId}`).classList.add('active');

      // Re-init animations for new tab content
      initScrollAnimations();
    });
  });

  requestAnimationFrame(() => initScrollAnimations());
}
