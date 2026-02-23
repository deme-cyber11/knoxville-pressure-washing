// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.querySelector('.menu-toggle');
  var navLinks = document.querySelector('.nav-links');
  var header = document.querySelector('.header');
  
  if (!toggle || !navLinks) return;
  
  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    navLinks.classList.toggle('active');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', 
      toggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
  });
  
  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
  
  // Close menu on outside click
  document.addEventListener('click', function(e) {
    if (!header.contains(e.target)) {
      navLinks.classList.remove('active');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
  
  // Dropdown toggles on mobile
  document.querySelectorAll('.nav-dropdown > a').forEach(function(trigger) {
    trigger.addEventListener('click', function(e) {
      if (window.innerWidth < 769) {
        e.preventDefault();
        var parent = this.parentElement;
        // Close other dropdowns
        document.querySelectorAll('.nav-dropdown.open').forEach(function(d) {
          if (d !== parent) d.classList.remove('open');
        });
        parent.classList.toggle('open');
      }
    });
  });
  
  // FAQ Accordion (if present)
  document.querySelectorAll('.faq-question').forEach(function(q) {
    q.addEventListener('click', function() {
      var item = this.parentElement;
      var wasOpen = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('active'); });
      if (!wasOpen) item.classList.add('active');
    });
  });
  
  // Floating CTA
  var cta = document.querySelector('.floating-cta');
  if (cta) {
    window.addEventListener('scroll', function() {
      cta.classList.toggle('visible', window.scrollY > 400);
    });
  }
  
  // Header scroll effect
  window.addEventListener('scroll', function() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Force all content visible
  document.querySelectorAll('.reveal, [data-aos], .fade-up').forEach(function(el) {
    el.style.opacity = '1';
    el.style.transform = 'none';
  });
});
