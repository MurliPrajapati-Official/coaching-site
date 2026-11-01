/* ============================================================
   XYZ CLASSES — Lead Capture Form Component
   ============================================================ */

function renderLeadForm(containerId, options = {}) {
  const {
    theme = 'dark', // 'dark' or 'light'
    source = 'homepage',
    showTitle = false,
    compact = false
  } = options;

  const isDark = theme === 'dark';
  const inputClass = isDark ? 'form-input form-input--dark' : 'form-input';
  const selectClass = isDark ? 'form-select form-select--dark' : 'form-select';

  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <form class="lead-form" id="lead-form" data-source="${source}" novalidate>
      ${showTitle ? `<h3 style="font-size:var(--text-heading-sm);font-weight:var(--weight-semibold);color:${isDark ? 'var(--color-snow)' : 'var(--color-obsidian)'};">Send Your Inquiry</h3>` : ''}
      
      <div class="lead-form__row">
        <div class="form-group">
          <label class="form-label" for="student-name" ${isDark ? 'style="color:var(--color-ash)"' : ''}>Student Name *</label>
          <input type="text" id="student-name" name="studentName" class="${inputClass}" placeholder="Enter student's name" required>
        </div>
        <div class="form-group">
          <label class="form-label" for="parent-name" ${isDark ? 'style="color:var(--color-ash)"' : ''}>Parent Name *</label>
          <input type="text" id="parent-name" name="parentName" class="${inputClass}" placeholder="Enter parent's name" required>
        </div>
      </div>

      <div class="lead-form__row">
        <div class="form-group">
          <label class="form-label" for="student-class" ${isDark ? 'style="color:var(--color-ash)"' : ''}>Class *</label>
          <select id="student-class" name="studentClass" class="${selectClass}" required>
            <option value="">Select Class</option>
            <option value="1">Class 1</option>
            <option value="2">Class 2</option>
            <option value="3">Class 3</option>
            <option value="4">Class 4</option>
            <option value="5">Class 5</option>
            <option value="6">Class 6</option>
            <option value="7">Class 7</option>
            <option value="8">Class 8</option>
            <option value="9">Class 9</option>
            <option value="10">Class 10</option>
            <option value="11">Class 11</option>
            <option value="12">Class 12</option>
            <option value="competitive">Competitive Exam</option>
            <option value="higher-ed">Higher Education</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="student-board" ${isDark ? 'style="color:var(--color-ash)"' : ''}>Board *</label>
          <select id="student-board" name="board" class="${selectClass}" required>
            <option value="">Select Board</option>
            <option value="cbse">CBSE</option>
            <option value="icse">ICSE</option>
            <option value="igcse">IGCSE</option>
            <option value="nios">NIOS</option>
            <option value="state">State Board</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" ${isDark ? 'style="color:var(--color-ash)"' : ''}>Subjects Required</label>
        <div style="display:flex;flex-wrap:wrap;gap:8px;" id="subject-chips">
          ${['Mathematics', 'Physics', 'Science', 'English', 'French', 'Hindi', 'Sanskrit', 'Marathi'].map(sub => `
            <button type="button" class="chip" data-subject="${sub}" onclick="toggleSubjectChip(this)">${sub}</button>
          `).join('')}
        </div>
      </div>

      <div class="lead-form__row">
        <div class="form-group">
          <label class="form-label" for="phone-number" ${isDark ? 'style="color:var(--color-ash)"' : ''}>Phone Number *</label>
          <input type="tel" id="phone-number" name="phone" class="${inputClass}" placeholder="+91 XXXXX XXXXX" required pattern="[0-9+\\-\\s]{10,15}">
        </div>
        <div class="form-group">
          <label class="form-label" for="student-location" ${isDark ? 'style="color:var(--color-ash)"' : ''}>Location</label>
          <input type="text" id="student-location" name="location" class="${inputClass}" placeholder="Area in Pune">
        </div>
      </div>

      <button type="submit" class="${isDark ? 'btn-primary btn-primary-inverse btn-primary-lg' : 'btn-primary btn-primary-lg'} lead-form__submit" style="width:100%;justify-content:center;" id="lead-submit-btn">
        Book Free Consultation →
      </button>

      <p class="lead-form__note" ${isDark ? '' : 'style="color:var(--color-steel)"'}>
        We'll get back to you within 2 hours • No spam, guaranteed
      </p>
    </form>
  `;

  // Form submission handler
  container.querySelector('#lead-form').addEventListener('submit', handleLeadSubmit);
}

function toggleSubjectChip(chip) {
  chip.classList.toggle('selected');
}

function handleLeadSubmit(e) {
  e.preventDefault();
  const form = e.target;
  
  // Gather data
  const studentName = form.querySelector('#student-name').value.trim();
  const parentName = form.querySelector('#parent-name').value.trim();
  const studentClass = form.querySelector('#student-class').value;
  const board = form.querySelector('#student-board').value;
  const phone = form.querySelector('#phone-number').value.trim();
  const location = form.querySelector('#student-location').value.trim();
  const source = form.dataset.source;

  // Get selected subjects
  const subjects = [];
  form.querySelectorAll('.chip.selected').forEach(chip => {
    subjects.push(chip.dataset.subject);
  });

  // Validation
  let isValid = true;
  
  // Clear previous errors
  form.querySelectorAll('.form-input, .form-select').forEach(el => el.classList.remove('error'));
  form.querySelectorAll('.form-error').forEach(el => el.remove());

  if (!studentName) {
    showFieldError(form.querySelector('#student-name'), 'Student name is required');
    isValid = false;
  }
  if (!parentName) {
    showFieldError(form.querySelector('#parent-name'), 'Parent name is required');
    isValid = false;
  }
  if (!studentClass) {
    showFieldError(form.querySelector('#student-class'), 'Please select a class');
    isValid = false;
  }
  if (!board) {
    showFieldError(form.querySelector('#student-board'), 'Please select a board');
    isValid = false;
  }
  if (!phone || !/^[0-9+\-\s]{10,15}$/.test(phone)) {
    showFieldError(form.querySelector('#phone-number'), 'Enter a valid phone number');
    isValid = false;
  }

  if (!isValid) return;

  // Save lead
  const lead = {
    id: Date.now(),
    studentName,
    parentName,
    studentClass,
    board,
    subjects,
    phone,
    location,
    source,
    status: 'new',
    submittedAt: new Date().toISOString()
  };

  const leads = JSON.parse(localStorage.getItem('pc_leads') || '[]');
  leads.unshift(lead);
  localStorage.setItem('pc_leads', JSON.stringify(leads));

  // Show success
  form.innerHTML = `
    <div class="success-message">
      <div class="success-message__icon">${Icons.checkCircle('icon')}</div>
      <div class="success-message__title">Thank You!</div>
      <div class="success-message__text">
        Your consultation request has been submitted successfully.<br>
        We'll contact you within 2 hours at <strong>${phone}</strong>.
      </div>
      <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I just submitted an inquiry for ${studentName} (Class ${studentClass}). Looking forward to hearing from you!`)}" 
         target="_blank" rel="noopener" class="btn-whatsapp" style="margin-top:8px;">
        ${Icons.whatsapp('btn-icon')} Message Us on WhatsApp
      </a>
    </div>
  `;
}

function showFieldError(field, message) {
  field.classList.add('error');
  const error = document.createElement('span');
  error.className = 'form-error';
  error.textContent = message;
  field.parentElement.appendChild(error);
}
