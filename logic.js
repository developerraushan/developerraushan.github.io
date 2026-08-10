// Scroll Reveal Animation Initialization
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.15
  });

  reveals.forEach((element) => observer.observe(element));
}

// Navbar Shadow Effect on Scroll
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.05)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });
}

// Start interactive features on page load
document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initNavbarScroll();
});