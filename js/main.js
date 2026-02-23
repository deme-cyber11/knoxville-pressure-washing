// Mobile Navigation Toggle
(function() {
  function initNav() {
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
    
    navLinks.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
    
    document.addEventListener('click', function(e) {
      if (header && !header.contains(e.target)) {
        navLinks.classList.remove('active');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
    
    document.querySelectorAll('.nav-dropdown > a').forEach(function(trigger) {
      trigger.addEventListener('click', function(e) {
        if (window.innerWidth < 769) {
          e.preventDefault();
          var parent = this.parentElement;
          document.querySelectorAll('.nav-dropdown.open').forEach(function(d) {
            if (d !== parent) d.classList.remove('open');
          });
          parent.classList.toggle('open');
        }
      });
    });
    
    // FAQ Accordion
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
    if (header) {
      window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 50);
      });
    }

    // Force content visible
    document.querySelectorAll('.reveal, [data-aos], .fade-up').forEach(function(el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  // Run immediately if DOM is ready, otherwise wait
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
