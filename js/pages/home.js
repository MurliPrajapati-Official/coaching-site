/* ============================================================
   XYZ CLASSES — Homepage Renderer
   ============================================================ */

function renderHomePage(container) {
  document.title = 'Best Tuition Classes in Pune | XYZ Classes — Expert Coaching Since 2013';
  setMetaDescription('XYZ Classes offers expert coaching, home tuition, and competitive exam preparation in Pune. Small batches of 15, personalized attention, CBSE/ICSE/IGCSE support. Book free consultation.');

  container.innerHTML = `
    <!-- ═══ HERO ═══ -->
    <section class="hero" id="hero-section">
      <div class="container">
        <div class="hero__inner">
          <div class="hero__content animate-on-scroll">
            <h1 class="hero__headline">
              Helping Students <span class="hero__headline-accent">Excel</span> Since 2013
            </h1>
            <p class="hero__subheadline">
              Expert coaching, personalized attention, and small batch learning for students from Class 1 to 12, competitive exams, and language programs.
            </p>
            <div class="hero__actions">
              <a href="#contact" class="btn-primary btn-primary-lg" id="hero-cta-primary" onclick="event.preventDefault();scrollToLeadForm();">
                Book Free Academic Consultation
              </a>
              <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}" target="_blank" rel="noopener" class="btn-outlined btn-outlined-lg" id="hero-cta-whatsapp">
                ${Icons.whatsapp('btn-icon')} Talk on WhatsApp
              </a>
            </div>
            <div class="hero__trust-note">
              <span>✓ Free consultation</span>
              <span style="color:var(--color-pebble)">·</span>
              <span>✓ No obligation</span>
              <span style="color:var(--color-pebble)">·</span>
              <span>✓ Response within 2 hours</span>
            </div>
          </div>
          <div class="hero__visual animate-on-scroll">
            <div class="hero__visual-card">
              <div style="font-size:var(--text-body-lg);font-weight:var(--weight-semibold);color:var(--color-obsidian);">Why XYZ Classes?</div>
              <div class="hero__visual-stats">
                <div class="hero__visual-item">
                  <div class="hero__visual-number" data-counter="10" data-suffix="+">0+</div>
                  <div class="hero__visual-label">Years Experience</div>
                </div>
                <div class="hero__visual-item">
                  <div class="hero__visual-number" data-counter="15">0</div>
                  <div class="hero__visual-label">Max Batch Size</div>
                </div>
                <div class="hero__visual-item">
                  <div class="hero__visual-number" data-counter="5" data-suffix="+">0+</div>
                  <div class="hero__visual-label">Boards Covered</div>
                </div>
                <div class="hero__visual-item">
                  <div class="hero__visual-number" data-counter="8" data-suffix="+">0+</div>
                  <div class="hero__visual-label">Subjects Offered</div>
                </div>
              </div>
              <div class="hero__visual-badges">
                <span class="badge">CBSE</span>
                <span class="badge">ICSE</span>
                <span class="badge">IGCSE</span>
                <span class="badge">NIOS</span>
                <span class="badge">State Board</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ TRUST BAR ═══ -->
    <section class="trust-bar" id="trust-bar">
      <div class="container">
        <div class="trust-bar__inner stagger-children">
          <div class="trust-bar__item animate-on-scroll">
            <div class="trust-bar__icon">${Icons.academy('icon')}</div>
            <div class="trust-bar__label">Established in 2013</div>
            <div class="trust-bar__sub">Over a decade of trust</div>
          </div>
          <div class="trust-bar__item animate-on-scroll">
            <div class="trust-bar__icon">${Icons.users('icon')}</div>
            <div class="trust-bar__label">15 Student Batch Limit</div>
            <div class="trust-bar__sub">Personalized attention guaranteed</div>
          </div>
          <div class="trust-bar__item animate-on-scroll">
            <div class="trust-bar__icon">${Icons.board('icon')}</div>
            <div class="trust-bar__label">Multiple Boards Supported</div>
            <div class="trust-bar__sub">CBSE, ICSE, IGCSE, NIOS & more</div>
          </div>
          <div class="trust-bar__item animate-on-scroll">
            <div class="trust-bar__icon">${Icons.home('icon')}</div>
            <div class="trust-bar__label">Home Tuition Available</div>
            <div class="trust-bar__sub">Expert tutors at your doorstep</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ PROGRAMS OVERVIEW ═══ -->
    <section class="section" id="programs-section">
      <div class="container">
        <div class="section-header section-header--center animate-on-scroll">
          <span class="section-header__label">Our Programs</span>
          <h2 class="section-header__title">Comprehensive Academic Programs</h2>
          <p class="section-header__subtitle">From foundational learning to competitive exam mastery — structured programs designed for every academic journey.</p>
        </div>
        <div class="programs-grid stagger-children">
          ${PROGRAMS_OVERVIEW.map(prog => `
            <a href="${prog.link}" class="card program-card animate-on-scroll" id="program-${prog.id}" style="text-decoration:none;">
              <div class="program-card__icon">${Icons[prog.icon] ? Icons[prog.icon]('icon') : ''}</div>
              <div class="program-card__title">${prog.title}</div>
              <div class="program-card__subtitle">${prog.subtitle}</div>
              <p class="program-card__description">${prog.description}</p>
              <span class="program-card__link">Learn More →</span>
            </a>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ═══ WHY PARENTS CHOOSE US ═══ -->
    <section class="section" id="why-choose-section">
      <div class="container">
        <div class="section-header section-header--center animate-on-scroll">
          <span class="section-header__label">Why Parents Choose Us</span>
          <h2 class="section-header__title">The XYZ Classes Difference</h2>
          <p class="section-header__subtitle">Trusted by hundreds of parents across Pune for quality education and measurable results.</p>
        </div>
        <div class="features-grid stagger-children">
          ${[
            { icon: 'target', title: 'Personalized Attention', desc: 'Every student receives individual focus. Our teachers understand each child\'s learning style, strengths, and areas for improvement.' },
            { icon: 'users', title: 'Small Batches (Max 15)', desc: 'Strict batch size limit ensures no student is left behind. More interaction, more practice, and more doubt clearing in every session.' },
            { icon: 'clock', title: 'Flexible Schedules', desc: 'Morning, afternoon, and evening batches. Weekend options available. We work around your child\'s school schedule and activities.' },
            { icon: 'teacher', title: 'Experienced Teachers', desc: 'Our faculty brings years of teaching experience with deep expertise in board-specific curricula and exam patterns.' },
            { icon: 'analytics', title: 'Progress Tracking', desc: 'Regular assessments, detailed performance reports, and parent-teacher meetings to keep you informed about your child\'s growth.' },
            { icon: 'books', title: 'Multi-Board Expertise', desc: 'Whether CBSE, ICSE, IGCSE, NIOS, or State Board — our teachers are equipped to handle diverse curricula with equal proficiency.' }
          ].map(f => `
            <div class="card feature-card animate-on-scroll">
              <div class="feature-card__icon">${Icons[f.icon] ? Icons[f.icon]('icon') : ''}</div>
              <div class="feature-card__title">${f.title}</div>
              <p class="feature-card__description">${f.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- ═══ STUDENT SUCCESS ═══ -->
    <section class="stats-section" id="success-section">
      <div class="container">
        <div class="section-header section-header--center animate-on-scroll">
          <span class="section-header__label">Our Impact</span>
          <h2 class="section-header__title">Numbers That Speak</h2>
        </div>
        <div class="stats-grid" style="margin-top:var(--spacing-40);">
          <div class="stat-block animate-on-scroll" style="text-align:center;padding:var(--spacing-24);">
            <div class="stat-block__number" data-counter="10" data-suffix="+">0+</div>
            <div class="stat-block__label">Years of Excellence</div>
          </div>
          <div class="stat-block animate-on-scroll" style="text-align:center;padding:var(--spacing-24);">
            <div class="stat-block__number" data-counter="500" data-suffix="+">0+</div>
            <div class="stat-block__label">Students Taught</div>
          </div>
          <div class="stat-block animate-on-scroll" style="text-align:center;padding:var(--spacing-24);">
            <div class="stat-block__number" data-counter="5" data-suffix="+">0+</div>
            <div class="stat-block__label">Boards Covered</div>
          </div>
          <div class="stat-block animate-on-scroll" style="text-align:center;padding:var(--spacing-24);">
            <div class="stat-block__number" data-counter="8" data-suffix="+">0+</div>
            <div class="stat-block__label">Subjects Offered</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ HOW IT WORKS ═══ -->
    <section class="section" id="how-it-works">
      <div class="container">
        <div class="section-header section-header--center animate-on-scroll">
          <span class="section-header__label">How It Works</span>
          <h2 class="section-header__title">Your Journey to Academic Success</h2>
          <p class="section-header__subtitle">Getting started is simple. Four steps to transform your child's learning experience.</p>
        </div>
        <div class="steps-flow stagger-children">
          ${[
            { num: 1, icon: 'edit', title: 'Submit Inquiry', desc: 'Fill out our quick consultation form or reach us on WhatsApp. Tell us about your child\'s needs.' },
            { num: 2, icon: 'board', title: 'Academic Assessment', desc: 'We assess your child\'s current level, identify strengths and gaps, and understand their learning style.' },
            { num: 3, icon: 'document', title: 'Personalized Learning Plan', desc: 'A customized study plan is created with clear goals, timelines, and milestones for measurable progress.' },
            { num: 4, icon: 'academy', title: 'Start Learning', desc: 'Your child begins their journey in a small, focused batch with experienced teachers and regular progress tracking.' }
          ].map(s => `
            <div class="step-card animate-on-scroll">
              <div class="step-card__number">${s.num}</div>
              <div>
                <div class="step-card__icon">${Icons[s.icon] ? Icons[s.icon]('icon') : ''}</div>
                <div class="step-card__title">${s.title}</div>
                <div class="step-card__description">${s.desc}</div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="cta-strip" style="margin-top:var(--spacing-40);">
          <div class="cta-strip__inner">
            <a href="#contact" class="btn-primary btn-primary-lg" onclick="event.preventDefault();scrollToLeadForm();">Start Your Journey →</a>
            <a href="tel:${PHONE_NUMBER}" class="btn-outlined">${Icons.phone('btn-icon')} Call Us Now</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══ TESTIMONIALS ═══ -->
    <section class="testimonials-section" id="testimonials-section">
      <div class="container">
        <div class="section-header section-header--center animate-on-scroll">
          <span class="section-header__label">Testimonials</span>
          <h2 class="section-header__title">What Parents & Students Say</h2>
          <p class="section-header__subtitle">Real stories from families who trust XYZ Classes with their children's education.</p>
        </div>
        <div id="testimonials-container"></div>
      </div>
    </section>

    <!-- ═══ LEAD GENERATION ═══ -->
    <section class="lead-section" id="lead-section">
      <div class="container">
        <div class="lead-section__inner">
          <div class="lead-section__content animate-on-scroll">
            <h2 class="lead-section__title">Get Your Free Academic Consultation</h2>
            <p class="lead-section__subtitle">Tell us about your child's academic needs. Our education counselors will create a personalized learning roadmap — completely free.</p>
            <div class="lead-section__benefits">
              <div class="lead-section__benefit">
                <span class="lead-section__benefit-icon">✓</span>
                <span>Free academic assessment and consultation</span>
              </div>
              <div class="lead-section__benefit">
                <span class="lead-section__benefit-icon">✓</span>
                <span>Personalized study plan for your child</span>
              </div>
              <div class="lead-section__benefit">
                <span class="lead-section__benefit-icon">✓</span>
                <span>Expert guidance on board and subject selection</span>
              </div>
              <div class="lead-section__benefit">
                <span class="lead-section__benefit-icon">✓</span>
                <span>No obligation — explore at your own pace</span>
              </div>
            </div>
          </div>
          <div class="animate-on-scroll" id="lead-form-container"></div>
        </div>
      </div>
    </section>
  `;

  // Initialize dynamic components
  renderTestimonialsCarousel('testimonials-container');
  renderLeadForm('lead-form-container', { theme: 'dark', source: 'homepage' });
  
  // Defer animation initialization
  requestAnimationFrame(() => {
    initCounters();
    initScrollAnimations();
  });
}

function scrollToLeadForm() {
  const form = document.getElementById('lead-form');
  if (form) {
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    const section = document.getElementById('lead-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

function setMetaDescription(content) {
  let meta = document.querySelector('meta[name="description"]');
  if (meta) {
    meta.setAttribute('content', content);
  }
}
