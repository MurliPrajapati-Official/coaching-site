/* ============================================================
   PURUSHOTTAM CLASSES — Home Tuition Page Renderer
   ============================================================ */

function renderTuitionPage(container) {
  document.title = 'Home Tuition in Pune — Personalized Tutors | Purushottam Classes';
  setMetaDescription('Home tuition services in Pune. Expert tutors at your doorstep — one-on-one learning, flexible timing, personalized study plans. CBSE, ICSE, IGCSE support. Book free trial at Purushottam Classes.');

  container.innerHTML = `
    <section class="page-header">
      <div class="container">
        <div class="page-header__breadcrumb">
          <a href="#home">Home</a>
          <span class="page-header__breadcrumb-sep">›</span>
          <span>Home Tuition</span>
        </div>
        <h1 class="page-header__title">Home Tuition Services</h1>
        <p class="page-header__subtitle">Expert tutors at your doorstep. Personalized, flexible, and focused learning in the comfort of your home.</p>
      </div>
    </section>

    <!-- Features -->
    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="tuition-features">
          <div class="card tuition-feature-card animate-on-scroll">
            <div class="tuition-feature-card__icon">👤</div>
            <h3 class="tuition-feature-card__title">One-on-One Learning</h3>
            <p class="tuition-feature-card__description">
              Undivided attention from a dedicated tutor who adapts their teaching style to match your child's learning pace and preferences.
            </p>
            <div class="tuition-feature-card__list">
              <div class="tuition-feature-card__list-item">
                <span style="color:var(--color-graphite);">✓</span>
                <span>100% focus on your child's needs</span>
              </div>
              <div class="tuition-feature-card__list-item">
                <span style="color:var(--color-graphite);">✓</span>
                <span>Customized pace — no rushing, no waiting</span>
              </div>
              <div class="tuition-feature-card__list-item">
                <span style="color:var(--color-graphite);">✓</span>
                <span>Targeted focus on individual weak areas</span>
              </div>
              <div class="tuition-feature-card__list-item">
                <span style="color:var(--color-graphite);">✓</span>
                <span>Comfortable, familiar learning environment</span>
              </div>
            </div>
          </div>

          <div class="card tuition-feature-card animate-on-scroll">
            <div class="tuition-feature-card__icon">🔄</div>
            <h3 class="tuition-feature-card__title">Tutor Matching Process</h3>
            <p class="tuition-feature-card__description">
              We carefully match your child with the right tutor based on subject expertise, teaching style, and personality compatibility.
            </p>
            <div class="tuition-feature-card__list">
              <div class="tuition-feature-card__list-item">
                <span class="badge" style="font-size:10px;padding:2px 6px;">1</span>
                <span>Understanding student needs and goals</span>
              </div>
              <div class="tuition-feature-card__list-item">
                <span class="badge" style="font-size:10px;padding:2px 6px;">2</span>
                <span>Matching with a specialized tutor</span>
              </div>
              <div class="tuition-feature-card__list-item">
                <span class="badge" style="font-size:10px;padding:2px 6px;">3</span>
                <span>Free trial session to assess fit</span>
              </div>
              <div class="tuition-feature-card__list-item">
                <span class="badge" style="font-size:10px;padding:2px 6px;">4</span>
                <span>Regular schedule setup and tracking</span>
              </div>
            </div>
          </div>

          <div class="card tuition-feature-card animate-on-scroll">
            <div class="tuition-feature-card__icon">🕐</div>
            <h3 class="tuition-feature-card__title">Flexible Timing</h3>
            <p class="tuition-feature-card__description">
              Your schedule, your choice. We offer sessions at times that work best for your family's routine.
            </p>
            <div class="tuition-feature-card__list">
              <div class="tuition-feature-card__list-item">
                <span style="color:var(--color-graphite);">✓</span>
                <span>Morning, afternoon, and evening slots</span>
              </div>
              <div class="tuition-feature-card__list-item">
                <span style="color:var(--color-graphite);">✓</span>
                <span>Weekend availability</span>
              </div>
              <div class="tuition-feature-card__list-item">
                <span style="color:var(--color-graphite);">✓</span>
                <span>Schedule adjustments as needed</span>
              </div>
              <div class="tuition-feature-card__list-item">
                <span style="color:var(--color-graphite);">✓</span>
                <span>Extra sessions before exams</span>
              </div>
            </div>
          </div>

          <div class="card tuition-feature-card animate-on-scroll">
            <div class="tuition-feature-card__icon">📊</div>
            <h3 class="tuition-feature-card__title">Personalized Study Plans</h3>
            <p class="tuition-feature-card__description">
              Every student gets a customized roadmap aligned with their academic goals, exam schedule, and learning capacity.
            </p>
            <div class="tuition-feature-card__list">
              <div class="tuition-feature-card__list-item">
                <span style="color:var(--color-graphite);">✓</span>
                <span>Initial diagnostic assessment</span>
              </div>
              <div class="tuition-feature-card__list-item">
                <span style="color:var(--color-graphite);">✓</span>
                <span>Goal-setting with parents</span>
              </div>
              <div class="tuition-feature-card__list-item">
                <span style="color:var(--color-graphite);">✓</span>
                <span>Weekly progress reports</span>
              </div>
              <div class="tuition-feature-card__list-item">
                <span style="color:var(--color-graphite);">✓</span>
                <span>Monthly review meetings with parents</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Subjects Available -->
    <section class="section">
      <div class="container">
        <div class="card animate-on-scroll" style="padding:var(--spacing-40);">
          <div class="section-header" style="margin-bottom:var(--spacing-24);">
            <span class="section-header__label">Available Subjects</span>
            <h2 class="section-header__title" style="font-size:var(--text-heading);">Home Tuition Subjects</h2>
            <p class="section-header__subtitle">Our home tutors are available for all major subjects across all boards.</p>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:var(--spacing-8);margin-bottom:var(--spacing-24);">
            ${['Mathematics', 'Physics', 'Science', 'English', 'French', 'Hindi', 'Sanskrit', 'Marathi'].map(s => `
              <span class="badge-light" style="font-size:var(--text-body);padding:8px 16px;">${s}</span>
            `).join('')}
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:var(--spacing-8);margin-bottom:var(--spacing-24);">
            <span style="font-size:var(--text-sm);font-weight:var(--weight-semibold);color:var(--color-steel);margin-right:4px;display:flex;align-items:center;">Boards:</span>
            ${['CBSE', 'ICSE', 'IGCSE', 'NIOS', 'State Board'].map(b => `
              <span class="badge">${b}</span>
            `).join('')}
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:var(--spacing-8);">
            <span style="font-size:var(--text-sm);font-weight:var(--weight-semibold);color:var(--color-steel);margin-right:4px;display:flex;align-items:center;">Classes:</span>
            ${['Class 1–5', 'Class 6–8', 'Class 9–10', 'Class 11–12'].map(c => `
              <span class="badge">${c}</span>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- Inquiry Section -->
    <section class="section">
      <div class="container">
        <div class="panel-dark" style="padding:var(--spacing-48);text-align:center;">
          <h3 style="font-size:var(--text-heading);margin-bottom:var(--spacing-12);">Book a Home Tutor Today</h3>
          <p style="color:var(--color-ash);font-size:var(--text-body-lg);max-width:500px;margin:0 auto var(--spacing-24);">
            Tell us your requirements and we'll match you with the perfect home tutor. Free trial session included.
          </p>
          <div style="display:flex;gap:var(--spacing-16);justify-content:center;flex-wrap:wrap;">
            <a href="#contact" class="btn-primary btn-primary-inverse" onclick="event.preventDefault();window.location.hash='#contact';">
              Book Free Trial Session
            </a>
            <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I am interested in home tuition services from Purushottam Classes. Please share details.')}" 
               target="_blank" rel="noopener" class="btn-outlined" style="border-color:rgba(255,255,255,0.3);color:var(--color-snow);background:transparent;">
              💬 WhatsApp Inquiry
            </a>
            <a href="tel:${PHONE_NUMBER}" class="btn-outlined" style="border-color:rgba(255,255,255,0.3);color:var(--color-snow);background:transparent;">
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  requestAnimationFrame(() => initScrollAnimations());
}
