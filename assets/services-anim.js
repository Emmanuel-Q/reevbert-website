document.addEventListener('DOMContentLoaded', function() {
  // Observe key elements and add `in-view` when they enter the viewport so CSS animations run then
  const selectors = [
    '.reveal',
    '.micro-tile',
    '.home-text',
    '.home-visual',
    '.service-hero-title',
    '.micro-details',
    '.service-title'
  ];

  const toObserve = Array.from(new Set(selectors.map(s => Array.from(document.querySelectorAll(s))).flat()));

  if (!toObserve.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  toObserve.forEach(el => observer.observe(el));
});