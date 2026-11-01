/* ============================================================
   XYZ CLASSES — Hash-Based SPA Router
   ============================================================ */

const ROUTES = {
  '#home': renderHomePage,
  '#courses': renderCoursesPage,
  '#exams': renderExamsPage,
  '#tuition': renderTuitionPage,
  '#about': renderAboutPage,
  '#contact': renderContactPage,
  '#admin': renderAdminPage
};

function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  handleRoute(); // Initial route
}

function handleRoute() {
  const hash = window.location.hash || '#home';
  const appContainer = document.getElementById('app');
  
  // Remove footer if it exists (we'll re-append after content)
  const existingFooter = document.getElementById('site-footer');
  if (existingFooter) existingFooter.remove();

  // Clear app container
  appContainer.innerHTML = '';

  // Find matching route
  const renderer = ROUTES[hash];
  
  if (renderer) {
    renderer(appContainer);
  } else {
    // 404 — default to home
    window.location.hash = '#home';
    return;
  }

  // Append footer (except for admin page)
  if (hash !== '#admin') {
    appContainer.appendChild(renderFooter());
  }

  // Update nav active state
  updateNavActiveLink(hash);

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });
}
