document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  function getAbsolutePath(relativePath) {
    const link = document.createElement("a");
    link.href = relativePath;
    return link.href;
  }

  function updateActiveLink() {
    let currentUrl = window.location.href;
    let activeLink = null;

    // First, prioritize "Contact us" link if hash exists
    navLinks.forEach(link => {
      if (currentUrl.endsWith("#contact-us") && getAbsolutePath(link.getAttribute("href")) === getAbsolutePath("../index.html#contact-us")) {
        activeLink = link;
      }
    });

    // If no hash priority, check other links normally
    if (!activeLink) {
      navLinks.forEach(link => {
        if (currentUrl === getAbsolutePath(link.getAttribute("href"))) {
          activeLink = link;
        }
      });
    }

    // Remove 'active' from all links
    navLinks.forEach(link => link.classList.remove("active"));

    // Add 'active' only to the selected link
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  // Run on page load
  updateActiveLink();

  // Listen for hash changes to update active link dynamically
  window.addEventListener("hashchange", updateActiveLink);
});
