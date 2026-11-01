/* ============================================================
   XYZ CLASSES — Admin Dashboard
   ============================================================ */

const ADMIN_PASSWORD = 'purushottam2013';
let adminAuthenticated = false;
let currentAdminTab = 'leads';

function renderAdminPage(container) {
  document.title = 'Admin Dashboard — XYZ Classes';

  if (!adminAuthenticated) {
    renderAdminLogin(container);
    return;
  }

  renderAdminDashboard(container);
}

function renderAdminLogin(container) {
  container.innerHTML = `
    <div class="admin-login">
      <div class="card admin-login__card">
        <div style="font-size:32px;">🔒</div>
        <h2 class="admin-login__title">Admin Dashboard</h2>
        <p class="admin-login__subtitle">Enter the admin password to access the dashboard.</p>
        <div class="form-group">
          <input type="password" id="admin-password" class="form-input" placeholder="Enter password" autofocus>
        </div>
        <button class="btn-primary" style="width:100%;justify-content:center;" id="admin-login-btn">
          Sign In
        </button>
        <p id="admin-login-error" style="color:#ef4444;font-size:var(--text-sm);display:none;">Incorrect password. Please try again.</p>
      </div>
    </div>
  `;

  const loginBtn = document.getElementById('admin-login-btn');
  const passwordInput = document.getElementById('admin-password');
  const errorMsg = document.getElementById('admin-login-error');

  function attemptLogin() {
    if (passwordInput.value === ADMIN_PASSWORD) {
      adminAuthenticated = true;
      renderAdminDashboard(container);
    } else {
      errorMsg.style.display = 'block';
      passwordInput.classList.add('error');
      passwordInput.value = '';
      passwordInput.focus();
    }
  }

  loginBtn.addEventListener('click', attemptLogin);
  passwordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') attemptLogin();
  });
}

function renderAdminDashboard(container) {
  const leads = JSON.parse(localStorage.getItem('pc_leads') || '[]');
  const testimonials = JSON.parse(localStorage.getItem('pc_testimonials') || 'null') || TESTIMONIALS_DATA;

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === 'new').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    enrolled: leads.filter(l => l.status === 'enrolled').length
  };

  container.innerHTML = `
    <div class="admin-layout">
      <div class="admin-sidebar">
        <div class="admin-sidebar__title">Dashboard</div>
        <button class="admin-sidebar__link ${currentAdminTab === 'leads' ? 'active' : ''}" data-admin-tab="leads">📋 Leads</button>
        <button class="admin-sidebar__link ${currentAdminTab === 'testimonials' ? 'active' : ''}" data-admin-tab="testimonials">💬 Testimonials</button>
        <button class="admin-sidebar__link" onclick="adminAuthenticated=false;window.location.hash='#home';">🚪 Logout</button>
      </div>
      <div class="admin-main" id="admin-content">
        <!-- Content renders here -->
      </div>
    </div>
  `;

  // Tab switching
  document.querySelectorAll('[data-admin-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
      currentAdminTab = btn.dataset.adminTab;
      document.querySelectorAll('[data-admin-tab]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderAdminTabContent();
    });
  });

  renderAdminTabContent();
}

function renderAdminTabContent() {
  const contentArea = document.getElementById('admin-content');
  if (!contentArea) return;

  if (currentAdminTab === 'leads') {
    renderAdminLeads(contentArea);
  } else if (currentAdminTab === 'testimonials') {
    renderAdminTestimonials(contentArea);
  }
}

function renderAdminLeads(contentArea) {
  const leads = JSON.parse(localStorage.getItem('pc_leads') || '[]');

  const stats = {
    total: leads.length,
    new: leads.filter(l => l.status === 'new').length,
    contacted: leads.filter(l => l.status === 'contacted').length,
    enrolled: leads.filter(l => l.status === 'enrolled').length
  };

  contentArea.innerHTML = `
    <div class="admin-header">
      <h2 class="admin-header__title">Lead Management</h2>
      <button class="btn-outlined" style="font-size:var(--text-sm);padding:8px 16px;" onclick="clearAllLeads()">Clear All</button>
    </div>

    <div class="admin-stats">
      <div class="card admin-stat-card">
        <div class="admin-stat-card__label">Total Inquiries</div>
        <div class="admin-stat-card__value">${stats.total}</div>
      </div>
      <div class="card admin-stat-card">
        <div class="admin-stat-card__label">New</div>
        <div class="admin-stat-card__value" style="color:#1d4ed8;">${stats.new}</div>
      </div>
      <div class="card admin-stat-card">
        <div class="admin-stat-card__label">Contacted</div>
        <div class="admin-stat-card__value" style="color:#92400e;">${stats.contacted}</div>
      </div>
      <div class="card admin-stat-card">
        <div class="admin-stat-card__label">Enrolled</div>
        <div class="admin-stat-card__value" style="color:#065f46;">${stats.enrolled}</div>
      </div>
    </div>

    <div class="admin-table-container">
      <div class="admin-table-header">
        <div class="admin-table-title">All Inquiries</div>
        <div class="admin-table-filters">
          <button class="admin-filter-btn active" data-filter="all">All</button>
          <button class="admin-filter-btn" data-filter="new">New</button>
          <button class="admin-filter-btn" data-filter="contacted">Contacted</button>
          <button class="admin-filter-btn" data-filter="enrolled">Enrolled</button>
        </div>
      </div>
      ${leads.length > 0 ? `
        <table class="admin-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Parent</th>
              <th>Class / Board</th>
              <th>Phone</th>
              <th>Source</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="leads-table-body">
            ${leads.map(lead => renderLeadRow(lead)).join('')}
          </tbody>
        </table>
      ` : `
        <div class="admin-empty">
          <div class="admin-empty__icon">📋</div>
          <div class="admin-empty__text">No inquiries yet. Leads will appear here when visitors submit the inquiry form.</div>
        </div>
      `}
    </div>
  `;

  // Filter buttons
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterLeads(btn.dataset.filter);
    });
  });
}

function renderLeadRow(lead) {
  const statusClass = `status-badge--${lead.status}`;
  const date = new Date(lead.submittedAt);
  const dateStr = date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: '2-digit' });

  return `
    <tr data-lead-id="${lead.id}" data-lead-status="${lead.status}">
      <td style="font-weight:var(--weight-medium);">${lead.studentName}</td>
      <td>${lead.parentName}</td>
      <td>
        <span>${lead.studentClass}</span>
        <span class="badge" style="margin-left:4px;font-size:10px;">${lead.board}</span>
      </td>
      <td><a href="tel:${lead.phone}" style="color:var(--color-ink);">${lead.phone}</a></td>
      <td><span style="font-size:var(--text-xs);color:var(--color-steel);">${lead.source}</span></td>
      <td><span class="status-badge ${statusClass}">${lead.status}</span></td>
      <td style="font-size:var(--text-xs);color:var(--color-steel);">${dateStr}</td>
      <td>
        <button class="admin-action-btn" onclick="updateLeadStatus(${lead.id}, 'contacted')">Contact</button>
        <button class="admin-action-btn" onclick="updateLeadStatus(${lead.id}, 'enrolled')">Enroll</button>
        <button class="admin-action-btn admin-action-btn--danger" onclick="deleteLead(${lead.id})">×</button>
      </td>
    </tr>
  `;
}

function filterLeads(status) {
  const rows = document.querySelectorAll('[data-lead-id]');
  rows.forEach(row => {
    if (status === 'all') {
      row.style.display = '';
    } else {
      row.style.display = row.dataset.leadStatus === status ? '' : 'none';
    }
  });
}

function updateLeadStatus(id, newStatus) {
  const leads = JSON.parse(localStorage.getItem('pc_leads') || '[]');
  const lead = leads.find(l => l.id === id);
  if (lead) {
    lead.status = newStatus;
    localStorage.setItem('pc_leads', JSON.stringify(leads));
    renderAdminTabContent();
  }
}

function deleteLead(id) {
  if (!confirm('Delete this inquiry?')) return;
  let leads = JSON.parse(localStorage.getItem('pc_leads') || '[]');
  leads = leads.filter(l => l.id !== id);
  localStorage.setItem('pc_leads', JSON.stringify(leads));
  renderAdminTabContent();
}

function clearAllLeads() {
  if (!confirm('Clear all inquiries? This cannot be undone.')) return;
  localStorage.setItem('pc_leads', '[]');
  renderAdminTabContent();
}

/* ── Testimonial Management ──────────────────────── */
function renderAdminTestimonials(contentArea) {
  const testimonials = JSON.parse(localStorage.getItem('pc_testimonials') || 'null') || [...TESTIMONIALS_DATA];

  contentArea.innerHTML = `
    <div class="admin-header">
      <h2 class="admin-header__title">Testimonial Management</h2>
      <button class="btn-primary" style="font-size:var(--text-sm);padding:8px 16px;" id="add-testimonial-btn">+ Add Testimonial</button>
    </div>

    <div id="testimonial-form-area"></div>

    <div class="admin-table-container">
      <div class="admin-table-header">
        <div class="admin-table-title">All Testimonials (${testimonials.length})</div>
        <button class="admin-filter-btn" onclick="resetTestimonials()">Reset to Defaults</button>
      </div>
      ${testimonials.length > 0 ? `
        <table class="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Board</th>
              <th>Quote (Preview)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${testimonials.map(t => `
              <tr>
                <td style="font-weight:var(--weight-medium);">${t.name}</td>
                <td>${t.role}</td>
                <td><span class="badge" style="font-size:10px;">${t.board}</span></td>
                <td style="font-size:var(--text-sm);color:var(--color-steel);max-width:300px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${t.quote.substring(0, 80)}...</td>
                <td>
                  <button class="admin-action-btn admin-action-btn--danger" onclick="deleteTestimonial(${t.id})">Delete</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      ` : `
        <div class="admin-empty">
          <div class="admin-empty__icon">💬</div>
          <div class="admin-empty__text">No testimonials. Add some to display on the website.</div>
        </div>
      `}
    </div>
  `;

  document.getElementById('add-testimonial-btn').addEventListener('click', () => {
    showTestimonialForm();
  });
}

function showTestimonialForm() {
  const area = document.getElementById('testimonial-form-area');
  area.innerHTML = `
    <div class="admin-form">
      <div class="admin-form__title">Add New Testimonial</div>
      <div class="admin-form__row">
        <div class="form-group">
          <label class="form-label">Name *</label>
          <input type="text" class="form-input" id="t-name" placeholder="Parent / Student name">
        </div>
        <div class="form-group">
          <label class="form-label">Role *</label>
          <input type="text" class="form-input" id="t-role" placeholder="e.g. Parent of Class 10 Student">
        </div>
      </div>
      <div class="admin-form__row">
        <div class="form-group">
          <label class="form-label">Board</label>
          <input type="text" class="form-input" id="t-board" placeholder="e.g. CBSE, ICSE">
        </div>
        <div class="form-group">
          <label class="form-label">Rating (1-5)</label>
          <input type="number" class="form-input" id="t-rating" value="5" min="1" max="5">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Quote *</label>
        <textarea class="form-textarea" id="t-quote" placeholder="Write the testimonial quote..."></textarea>
      </div>
      <div class="admin-form__actions">
        <button class="btn-outlined" style="font-size:var(--text-sm);padding:8px 16px;" onclick="document.getElementById('testimonial-form-area').innerHTML='';">Cancel</button>
        <button class="btn-primary" style="font-size:var(--text-sm);padding:8px 16px;" onclick="saveTestimonial()">Save Testimonial</button>
      </div>
    </div>
  `;
}

function saveTestimonial() {
  const name = document.getElementById('t-name').value.trim();
  const role = document.getElementById('t-role').value.trim();
  const board = document.getElementById('t-board').value.trim() || 'General';
  const rating = parseInt(document.getElementById('t-rating').value) || 5;
  const quote = document.getElementById('t-quote').value.trim();

  if (!name || !role || !quote) {
    alert('Please fill in Name, Role, and Quote.');
    return;
  }

  const testimonials = JSON.parse(localStorage.getItem('pc_testimonials') || 'null') || [...TESTIMONIALS_DATA];
  testimonials.push({
    id: Date.now(),
    name,
    role,
    board,
    rating: Math.min(5, Math.max(1, rating)),
    quote
  });

  localStorage.setItem('pc_testimonials', JSON.stringify(testimonials));
  renderAdminTabContent();
}

function deleteTestimonial(id) {
  if (!confirm('Delete this testimonial?')) return;
  let testimonials = JSON.parse(localStorage.getItem('pc_testimonials') || 'null') || [...TESTIMONIALS_DATA];
  testimonials = testimonials.filter(t => t.id !== id);
  localStorage.setItem('pc_testimonials', JSON.stringify(testimonials));
  renderAdminTabContent();
}

function resetTestimonials() {
  if (!confirm('Reset testimonials to defaults? Custom testimonials will be removed.')) return;
  localStorage.removeItem('pc_testimonials');
  renderAdminTabContent();
}
