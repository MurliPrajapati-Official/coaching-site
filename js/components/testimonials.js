/* ============================================================
   XYZ CLASSES — Testimonials Carousel Component
   ============================================================ */

function renderTestimonialsCarousel(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Use stored testimonials or default data
  const stored = localStorage.getItem('pc_testimonials');
  const testimonials = stored ? JSON.parse(stored) : TESTIMONIALS_DATA;

  let currentSlide = 0;
  let autoAdvance = null;

  container.innerHTML = `
    <div class="testimonials-carousel" id="testimonials-carousel">
      <div class="testimonials-track" id="testimonials-track">
        ${testimonials.map(t => `
          <div class="testimonial-card">
            <div class="testimonial-card__inner">
              <div class="testimonial-card__quote-mark">"</div>
              <p class="testimonial-card__quote">${t.quote}</p>
              <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:12px;">
                <div class="testimonial-card__author">
                  <div class="testimonial-card__name">${t.name}</div>
                  <div class="testimonial-card__role">${t.role} · ${t.board}</div>
                </div>
                <div class="testimonial-card__stars">
                  ${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="testimonials-dots" id="testimonials-dots">
        ${testimonials.map((_, i) => `
          <button class="testimonials-dot ${i === 0 ? 'active' : ''}" data-slide="${i}" aria-label="Go to testimonial ${i + 1}"></button>
        `).join('')}
      </div>
    </div>
  `;

  const track = document.getElementById('testimonials-track');
  const dots = container.querySelectorAll('.testimonials-dot');

  function goToSlide(index) {
    currentSlide = index;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  }

  // Dot navigation
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      goToSlide(parseInt(dot.dataset.slide));
      resetAutoAdvance();
    });
  });

  // Auto-advance
  function startAutoAdvance() {
    autoAdvance = setInterval(() => {
      const next = (currentSlide + 1) % testimonials.length;
      goToSlide(next);
    }, 5000);
  }

  function resetAutoAdvance() {
    clearInterval(autoAdvance);
    startAutoAdvance();
  }

  startAutoAdvance();

  // Pause on hover
  const carousel = document.getElementById('testimonials-carousel');
  carousel.addEventListener('mouseenter', () => clearInterval(autoAdvance));
  carousel.addEventListener('mouseleave', startAutoAdvance);

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentSlide < testimonials.length - 1) {
        goToSlide(currentSlide + 1);
      } else if (diff < 0 && currentSlide > 0) {
        goToSlide(currentSlide - 1);
      }
      resetAutoAdvance();
    }
  }, { passive: true });
}
