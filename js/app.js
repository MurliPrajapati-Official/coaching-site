/* ============================================================
   PURUSHOTTAM CLASSES — Main App Initialization
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Render persistent components
  renderNavbar();
  renderCtaBar();

  // Initialize router (renders the initial page)
  initRouter();
});
