/* ============================================================
   XYZ CLASSES — About Page Renderer
   ============================================================ */

function renderAboutPage(container) {
  document.title = 'About Us — XYZ Classes | Trusted Coaching Since 2013, Pune';
  setMetaDescription('Learn about XYZ Classes — a trusted coaching institute in Pune since 2013. Our mission, values, experienced faculty, and commitment to quality education for every student.');

  container.innerHTML = `
    <section class="page-header">
      <div class="container">
        <div class="page-header__breadcrumb">
          <a href="#home">Home</a>
          <span class="page-header__breadcrumb-sep">›</span>
          <span>About Us</span>
        </div>
        <h1 class="page-header__title">About XYZ Classes</h1>
        <p class="page-header__subtitle">A decade of dedicated teaching. Hundreds of success stories. One mission — to help every student reach their full academic potential.</p>
      </div>
    </section>

    <!-- Our Story -->
    <section class="section" style="padding-top:0;">
      <div class="container">
        <div class="about-story">
          <div class="about-story__content animate-on-scroll">
            <div class="section-header">
              <span class="section-header__label">Our Story</span>
              <h2 class="section-header__title" style="font-size:var(--text-heading);">Built on a Belief That Every Student Can Excel</h2>
            </div>
            <p class="about-story__text">
              XYZ Classes was founded in 2013 with a simple yet powerful belief — that every student, regardless of their starting point, can achieve academic excellence with the right guidance, environment, and support.
            </p>
            <p class="about-story__text">
              What began as a small coaching center on MG Road in Pune has grown into a trusted institution known for its personalized approach to education. Over the years, we have helped hundreds of students across multiple boards improve their academic performance, build confidence, and develop a genuine love for learning.
            </p>
            <p class="about-story__text">
              Our founder recognized early on that large classrooms often fail students — bright minds get lost in the crowd, individual doubts go unresolved, and personal attention becomes a luxury. That's why XYZ Classes was built around the principle of <strong>small batches limited to 15 students</strong>, ensuring every child receives the attention they deserve.
            </p>
          </div>
          <div class="about-story__visual animate-on-scroll">
            <div class="card" style="padding:var(--spacing-32);">
              <div style="font-size:var(--text-body-lg);font-weight:var(--weight-semibold);color:var(--color-obsidian);margin-bottom:var(--spacing-20);">At a Glance</div>
              <div style="display:flex;flex-direction:column;gap:var(--spacing-20);">
                <div class="stat-block">
                  <div class="stat-block__number" data-counter="2013" style="font-size:var(--text-heading);">2013</div>
                  <div class="stat-block__label">Year Established</div>
                </div>
                <hr class="divider">
                <div class="stat-block">
                  <div class="stat-block__number" style="font-size:var(--text-heading);">15</div>
                  <div class="stat-block__label">Maximum Batch Size</div>
                </div>
                <hr class="divider">
                <div class="stat-block">
                  <div class="stat-block__number" style="font-size:var(--text-heading);">5+</div>
                  <div class="stat-block__label">Boards Supported</div>
                </div>
                <hr class="divider">
                <div class="stat-block">
                  <div class="stat-block__number" style="font-size:var(--text-heading);">8+</div>
                  <div class="stat-block__label">Subjects Offered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Values -->
    <section class="section">
      <div class="container">
        <div class="section-header section-header--center animate-on-scroll">
          <span class="section-header__label">Mission & Values</span>
          <h2 class="section-header__title">What Drives Us</h2>
        </div>
        <div class="about-values stagger-children" style="margin-top:var(--spacing-40);">
          ${[
            { icon: 'target', title: 'Personalized Education', text: 'We believe learning should adapt to the student, not the other way around. Every study plan is tailored to individual strengths, weaknesses, and goals.' },
            { icon: 'handshake', title: 'Trust & Transparency', text: 'Parents entrust us with their children\'s future. We honor that trust with regular progress updates, open communication, and honest feedback.' },
            { icon: 'trendingUp', title: 'Measurable Growth', text: 'Vague promises don\'t help students. We set clear academic milestones, track progress systematically, and celebrate every improvement.' },
            { icon: 'leaf', title: 'Holistic Development', text: 'Beyond grades, we nurture critical thinking, time management, and a genuine love for learning that serves students throughout their lives.' },
            { icon: 'home', title: 'Safe Environment', text: 'Our certified facility provides a safe, supportive atmosphere where students feel comfortable asking questions and taking intellectual risks.' },
            { icon: 'sync', title: 'Continuous Improvement', text: 'We constantly update our teaching methods, curricula, and materials to stay aligned with the latest educational standards and exam patterns.' }
          ].map(v => `
            <div class="card about-value-card animate-on-scroll">
              <div class="about-value-card__icon">${Icons[v.icon] ? Icons[v.icon]('icon') : ''}</div>
              <div class="about-value-card__title">${v.title}</div>
              <p class="about-value-card__text">${v.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Journey Timeline -->
    <section class="section">
      <div class="container">
        <div class="section-header section-header--center animate-on-scroll">
          <span class="section-header__label">Our Journey</span>
          <h2 class="section-header__title">Milestones Along the Way</h2>
        </div>
        <div class="about-timeline" style="margin-top:var(--spacing-40);max-width:640px;margin-left:auto;margin-right:auto;">
          <div class="about-timeline__items">
            ${[
              { year: '2013', text: 'XYZ Classes founded on MG Road, Pune, with a focus on personalized coaching for school students.' },
              { year: '2015', text: 'Expanded to cover multiple boards — CBSE, ICSE, and State Board. Introduced home tuition services.' },
              { year: '2017', text: 'Added competitive exam coaching (NDA, CET) and language learning programs (French, Sanskrit).' },
              { year: '2019', text: 'Reached 200+ students mentored. Introduced higher education support for B.Ed and M.Ed candidates.' },
              { year: '2021', text: 'Adapted to hybrid learning during challenging times. Maintained academic excellence with innovative teaching methods.' },
              { year: '2023', text: 'Celebrated 10 years of excellence. Expanded subject offerings and strengthened CAT and Railway exam coaching.' },
              { year: 'Present', text: 'Continuing to grow with a commitment to quality education, small batches, and personalized learning for every student.' }
            ].map(t => `
              <div class="about-timeline__item animate-on-scroll">
                <div class="about-timeline__year">${t.year}</div>
                <div class="about-timeline__text">${t.text}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="panel-dark" style="padding:var(--spacing-48);text-align:center;">
          <h3 style="font-size:var(--text-heading);margin-bottom:var(--spacing-12);">Be Part of Our Story</h3>
          <p style="color:var(--color-ash);font-size:var(--text-body-lg);max-width:500px;margin:0 auto var(--spacing-24);">
            Join the growing family of students and parents who trust XYZ Classes for quality education.
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

  requestAnimationFrame(() => {
    initCounters();
    initScrollAnimations();
  });
}
